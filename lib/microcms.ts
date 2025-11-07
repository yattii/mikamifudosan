const SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
const API_KEY = process.env.MICROCMS_API_KEY;

export const isMicroCMSEnabled =
  typeof SERVICE_DOMAIN === "string" &&
  SERVICE_DOMAIN.length > 0 &&
  typeof API_KEY === "string" &&
  API_KEY.length > 0;

const BASE_URL = isMicroCMSEnabled
  ? `https://${SERVICE_DOMAIN}.microcms.io/api/v1`
  : undefined;

export type MicroCMSImage = {
  url: string;
  width?: number;
  height?: number;
};

export type Reform = {
  id: string;
  title: string;
  category: string | string[];
  thumbnail?: MicroCMSImage;
  beforeImages?: MicroCMSImage[];
  afterImages?: MicroCMSImage[];
  cost?: number;
  period?: string;
  body?: string;
  publishedAt?: string;
  updatedAt?: string;
  createdAt?: string;
};

export type MicroCMSListResponse<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

type ListParams = {
  limit?: number;
  offset?: number;
  orders?: string;
  filters?: string;
};

function ensureConfig() {
  if (!isMicroCMSEnabled) {
    throw new Error(
      "microCMSの環境変数が設定されていません。MICROCMS_SERVICE_DOMAIN と MICROCMS_API_KEY を .env.local に設定してください。"
    );
  }
}

function buildQuery(params?: Record<string, string | number | undefined>) {
  if (!params) return "";
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null) {
      searchParams.append(key, String(value));
    }
  }
  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : "";
}

async function request<T>(
  endpoint: string,
  params?: Record<string, string | number | undefined>,
  init: RequestInit & { next?: { revalidate?: number } } = {}
): Promise<T> {
  ensureConfig();

  const url = `${BASE_URL}${endpoint}${buildQuery(params)}`;
  const isProduction = process.env.NODE_ENV === "production";
  const fetchInit: RequestInit & { next?: { revalidate?: number } } = isProduction
    ? init
    : {
        ...init,
        cache: "no-store",
        next: undefined,
      };

  const response = await fetch(url, {
    headers: {
      "X-MICROCMS-API-KEY": API_KEY as string,
    },
    ...fetchInit,
  });

  if (!response.ok) {
    const errorText = await response.text();
    const error = new Error(
      `microCMSからの取得に失敗しました (${response.status}): ${errorText}`
    ) as Error & { status?: number };
    error.status = response.status;
    throw error;
  }

  return (await response.json()) as T;
}

export async function getReforms(params?: ListParams) {
  const query: Record<string, string | number | undefined> = {
    limit: params?.limit,
    offset: params?.offset,
    orders: params?.orders,
    filters: params?.filters,
  };

  const isProduction = process.env.NODE_ENV === "production";

  return request<MicroCMSListResponse<Reform>>(
    "/reforms",
    query,
    isProduction ? { next: { revalidate: 20 } } : {}
  );
}

function normalizeIdentifier(value: string) {
  return value.replace(/[-_]/g, "").toLowerCase();
}

function isMatchingIdentifier(
  reform: Reform,
  identifier: string
): boolean {
  if (reform.id === identifier) {
    return true;
  }

  const normalizedTarget = normalizeIdentifier(identifier);
  if (normalizeIdentifier(reform.id) === normalizedTarget) {
    return true;
  }

  for (const [key, value] of Object.entries(reform as Record<string, unknown>)) {
    if (typeof value !== "string") {
      continue;
    }

    const lowerKey = key.toLowerCase();
    if (
      lowerKey === "slug" ||
      lowerKey.endsWith("slug") ||
      lowerKey.endsWith("id") ||
      lowerKey.endsWith("code")
    ) {
      if (value === identifier || normalizeIdentifier(value) === normalizedTarget) {
        return true;
      }
    }
  }

  return false;
}

async function tryFetchReformByIdFilter(
  identifier: string,
  fetchInit: RequestInit & { next?: { revalidate?: number } }
): Promise<Reform | null> {
  return request<MicroCMSListResponse<Reform>>(
    "/reforms",
    {
      limit: 1,
      filters: `id[equals]${identifier}`,
    },
    fetchInit
  )
    .then((response) => response.contents[0] ?? null)
    .catch((error) => {
      console.warn("microCMS filter fetch error", error);
      return null;
    });
}

async function findReformFromList(
  identifier: string,
  fetchInit: RequestInit & { next?: { revalidate?: number } }
): Promise<Reform | null> {
  const limit = 100;
  for (let offset = 0; offset < 1000; offset += limit) {
    const response = await request<MicroCMSListResponse<Reform>>(
      "/reforms",
      { limit, offset },
      fetchInit
    ).catch((error) => {
      console.error("microCMS paginated fetch error", error);
      return null;
    });

    if (!response) {
      return null;
    }

    const match = response.contents.find((reform) =>
      isMatchingIdentifier(reform, identifier)
    );
    if (match) {
      return match;
    }

    if (offset + response.contents.length >= response.totalCount) {
      break;
    }
  }

  return null;
}

export async function getReform(id: string | null | undefined): Promise<Reform | null> {
  if (typeof id !== "string") {
    return null;
  }

  const isProduction = process.env.NODE_ENV === "production";
  const fetchInit = isProduction ? { next: { revalidate: 300 } } : {};
  const identifier = id.trim();

  if (!identifier) {
    return null;
  }

  try {
    return await request<Reform>(
      `/reforms/${encodeURIComponent(identifier)}`,
      undefined,
      fetchInit
    );
  } catch (error) {
    if ((error as { status?: number })?.status !== 404) {
      throw error;
    }

    console.warn("microCMS detail fetch returned 404, falling back", {
      identifier,
    });

    const filterMatch = await tryFetchReformByIdFilter(identifier, fetchInit);
    if (filterMatch) {
      return filterMatch;
    }

    if (identifier.includes("_") || identifier.includes("-")) {
      const alternate = identifier.includes("_")
        ? identifier.replace(/_/g, "-")
        : identifier.replace(/-/g, "_");
      const alternateFilter = await tryFetchReformByIdFilter(
        alternate,
        fetchInit
      );
      if (alternateFilter) {
        return alternateFilter;
      }
    }

    const normalizedIdentifier = normalizeIdentifier(identifier);
    if (normalizedIdentifier !== identifier) {
      const normalizedFilter = await tryFetchReformByIdFilter(
        normalizedIdentifier,
        fetchInit
      );
      if (normalizedFilter) {
        return normalizedFilter;
      }
    }

    console.warn("microCMS fallback search via list pagination", {
      identifier,
    });

    const reformFromList = await findReformFromList(identifier, fetchInit);
    if (reformFromList) {
      return reformFromList;
    }

    if (identifier.includes("_") || identifier.includes("-")) {
      const alternate = identifier.includes("_")
        ? identifier.replace(/_/g, "-")
        : identifier.replace(/-/g, "_");
      const alternateMatch = await findReformFromList(alternate, fetchInit);
      if (alternateMatch) {
        return alternateMatch;
      }
    }

    if (normalizedIdentifier !== identifier) {
      return findReformFromList(normalizedIdentifier, fetchInit);
    }

    return null;
  }
}

export function extractPlainText(html?: string, maxLength = 140) {
  if (!html) return "";
  const withoutTags = html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  if (withoutTags.length <= maxLength) {
    return withoutTags;
  }
  return `${withoutTags.slice(0, maxLength)}…`;
}

export function formatCurrencyJPY(value?: number) {
  if (value === undefined || value === null || Number.isNaN(value)) {
    return undefined;
  }
  return `${value.toLocaleString("ja-JP")}円`;
}
