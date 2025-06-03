// ⬇️  Pick ONE of the two locations above ⬇️
import { NextRequest, NextResponse } from "next/server"; // App Router
// import type { NextApiRequest, NextApiResponse } from "next"; // Pages Router

import { Resend } from "resend";

// **** IMPORTANT ****
// Do NOT use NEXT_PUBLIC_  — keep the key server-side only.
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY!);

/**
 * POST  /api/send-download-notification
 * Body: { filename: string; visitorEmail: string }
 */
export async function POST(req: NextRequest) {
  // App Router
  // export default async function handler(req: NextApiRequest, res: NextApiResponse) { // Pages Router
  try {
    // ---- Parse input --------------------------------------------------------
    const { filename = "unknown-file", visitorEmail = "unknown@user" } =
      // App Router style:
      await req.json(); // App Router
    // Pages Router style:
    // req.method === "POST" ? req.body : {};               // Pages Router

    // ---- Send mail via Resend ----------------------------------------------
    await resend.emails.send({
      from: "kevin@mm-consulting.ai", // must be a verified sender
      to: ["arhant@mm-consulting.ai", "kevin@mm-consulting.ai"],
      subject: `📥 New download: ${filename}`,
      html: `<p>${visitorEmail} just grabbed <strong>${filename}</strong>.</p>`,
    });

    // ---- Respond to frontend -----------------------------------------------
    const ok = { ok: true };
    return NextResponse.json(ok); // App Router
    // return res.status(200).json(ok);                       // Pages Router
  } catch (error) {
    console.error("[Resend] send failed →", error);
    const err = { error: "Email send failed" };
    return NextResponse.json(err, { status: 500 }); // App Router
    // return res.status(500).json(err);                      // Pages Router
  }
}
