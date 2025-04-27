import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { NextResponse } from "next/server";

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY,
});

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const sentFrom = new Sender(
      "no-reply@kanishkcodes.tech",
      "Kanishk's Portfolio"
    );
    const recipients = [
      new Recipient("kanishk.khedkar@gmail.com", "Kanishk Khedkar"),
    ];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject(`Portfolio Contact: ${subject}`).setHtml(`
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `);

    const response = await mailerSend.email.send(emailParams);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    // Return more detailed error information
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email",
        error: error.message || "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
