import { email_template } from "@/lib/documents/emailTemplate";
import { sendEmail } from "@/lib/documents/nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  //   get the data from the request
  const { email, message, subject } = body;
  //   validate the data
  if (!email || !message || !subject) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }
  //   send the data to the server
  const result = await sendEmail({
    from: email,
    subject: `A Message from Your website - ${req.url}`,
    text: email_template(body),
  });
  return NextResponse.json(result);
}
