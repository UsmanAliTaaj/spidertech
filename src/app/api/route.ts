import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { username, email, message } = await req.json();

    if (!username || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    await resend.emails.send({
      from: "contact@yourdomain.com", // Use a verified domain
      to: ["your-email@example.com"], // Replace with your email
      subject: "New Contact Form Submission",
      text: `Name: ${username}\nEmail: ${email}\nMessage: ${message}`,
    });

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
