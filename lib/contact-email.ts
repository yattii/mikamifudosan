'use client';

import emailjs from "@emailjs/browser";

type ContactTemplateParams = {
  name: string;
  email: string;
  phone: string;
  consult_type: string;
  address: string;
  desired_timing: string;
  budget: string;
  message: string;
  file_urls: string;
};

const serviceId =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_mikamifudosan";
const templateId =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_rmjuolg";
const publicKey =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "HIQJLBSgYQtuiMWTi";

function buildTemplateParams(formData: FormData): ContactTemplateParams {
  const attachments = formData.getAll("attachments").filter((file) => {
    return file instanceof File && file.size > 0;
  }) as File[];

  const fileUrls =
    attachments.length > 0
      ? attachments.map((file) => file.name).join(", ")
      : "なし";

  return {
    name: (formData.get("name") || "").toString(),
    email: (formData.get("email") || "").toString(),
    phone: (formData.get("phone") || "").toString(),
    consult_type:
      (formData.get("category") ||
        formData.get("contactType") ||
        "").toString(),
    address: (formData.get("address") || "").toString(),
    desired_timing: (formData.get("timeline") || "").toString(),
    budget: (formData.get("budget") || "").toString(),
    message: (formData.get("message") || "").toString(),
    file_urls: fileUrls,
  };
}

export async function sendContactEmail(formData: FormData) {
  if (!serviceId || !templateId || !publicKey) {
    throw new Error("EmailJSの設定が不足しています。環境変数を確認してください。");
  }

  const templateParams = buildTemplateParams(formData);

  return emailjs.send(serviceId, templateId, templateParams, {
    publicKey,
  });
}
