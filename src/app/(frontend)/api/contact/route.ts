import {
  checkRateLimit,
  validateContactForm,
  createTransporter,
  createEmailTemplate,
  createAutoReplyTemplate,
  requiredEnvVars,
  sanitizeInput,
} from "@/lib/email";
import { ContactFormData } from "@/types/contact";
import { NextRequest, NextResponse } from "next/server";
import { MailOptions } from "nodemailer/lib/json-transport";

// Handle POST requests
export async function POST(request: NextRequest) {
  try {
    // Get request body
    const body = await request.json();

    // Rate limiting
    const clientIP =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(clientIP)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Validate and sanitize input
    const validation = validateContactForm(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: `Validation failed: ${validation.errors.join(", ")}` },
        { status: 400 }
      );
    }

    // Sanitize form data
    const formData: ContactFormData = {
      firstName: sanitizeInput(body.firstName),
      lastName: sanitizeInput(body.lastName),
      email: sanitizeInput(body.email.toLowerCase()),
      phone: sanitizeInput(body.phone),
      message: sanitizeInput(body.message),
      jurisdiction: sanitizeInput(body.jurisdiction),
    };

    // Create and verify transporter
    const transporter = createTransporter();
    await transporter.verify();

    // Create email templates
    const notificationEmail = createEmailTemplate(formData);
    const autoReplyEmail = createAutoReplyTemplate(formData.firstName);

    // Mail options for notification email
    const notificationMailOptions: MailOptions = {
      from: `"CSG Advisory Contact Form" <${requiredEnvVars.EMAIL_USER}>`,
      to: requiredEnvVars.EMAIL_USER!,
      subject: notificationEmail.subject,
      html: notificationEmail.html,
      text: notificationEmail.text,
      replyTo: formData.email,
    };

    // Mail options for auto-reply
    const autoReplyMailOptions: MailOptions = {
      from: `"CSG Advisory" <${requiredEnvVars.EMAIL_USER}>`,
      to: formData.email,
      subject: autoReplyEmail.subject,
      html: autoReplyEmail.html,
      text: autoReplyEmail.text,
    };

    // Send emails concurrently
    await Promise.all([
      transporter.sendMail(notificationMailOptions),
      transporter.sendMail(autoReplyMailOptions),
    ]);

    // Log successful submission
    console.log(
      `[${new Date().toISOString()}] Contact form submission processed: ${
        formData.firstName
      } ${formData.lastName} (${formData.email}) - Phone: ${
        formData.phone
      } for ${formData.jurisdiction} from IP: ${clientIP}`
    );

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    // Enhanced error logging
    console.error(
      `[${new Date().toISOString()}] Error processing contact form:`,
      {
        error: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : undefined,
        headers: Object.fromEntries(request.headers.entries()),
      }
    );

    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

// Handle OPTIONS requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
