// app/lib/actions.ts
"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY!);

export async function sendDownloadNotice(data: {
  filename: string;
  visitorEmail: string;
}) {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: ["arhant@mm-consulting.ai", "kevin@mm-consulting.ai"],
    subject: `📥 New download: ${data.filename}`,
    html: `<p>${data.visitorEmail} just grabbed <strong>${data.filename}</strong>.</p>`,
  });
}
