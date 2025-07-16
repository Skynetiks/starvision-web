import { ContactFormData } from "@/types/contact";
import { createTransport, Transporter } from "nodemailer";

interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

// Environment variables validation
export const requiredEnvVars = {
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
} as const;

// Validate environment variables at startup
const validateEnvVars = (): void => {
  const missing = Object.entries(requiredEnvVars)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}`
    );
  }
};

// Create transporter with type safety
export const createTransporter = (): Transporter => {
  validateEnvVars();

  return createTransport({
    service: "gmail",
    auth: {
      user: requiredEnvVars.EMAIL_USER!,
      pass: requiredEnvVars.EMAIL_PASS!,
    },
    // Alternative SMTP configuration
    // host: process.env.SMTP_HOST,
    // port: parseInt(process.env.SMTP_PORT || '587'),
    // secure: process.env.SMTP_SECURE === 'true',
    // auth: {
    //   user: requiredEnvVars.EMAIL_USER!,
    //   pass: requiredEnvVars.EMAIL_PASS!,
    // },
  });
};

// Email template for visitor query
export const createEmailTemplate = (
  formData: ContactFormData
): EmailTemplate => {
  const { firstName, lastName, email, phone, jurisdiction, message } = formData;
  const submissionTime = new Date().toLocaleString("en-SG", {
    timeZone: "Asia/Singapore",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return {
    subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">CSG Advisory Contact Form</p>
        </div>
        
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Contact Details</h2>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #555; display: inline-block; width: 100px;">Name:</strong>
            <span style="color: #333;">${firstName} ${lastName}</span>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #555; display: inline-block; width: 100px;">Email:</strong>
            <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #555; display: inline-block; width: 100px;">Phone:</strong>
            <a href="tel:${phone}" style="color: #667eea; text-decoration: none;">${phone}</a>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #555; display: inline-block; width: 100px;">Jurisdiction of interest:</strong>
            <span style="color: #333;">${jurisdiction}</span>
          </div>

          <div style="margin-bottom: 20px;">
            <strong style="color: #555; display: block; margin-bottom: 10px;">Message:</strong>
            <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea; line-height: 1.6;">
              ${message
                .replace(/\n/g, "<br>")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p><strong>Submission Time:</strong> ${submissionTime}</p>
            <p><strong>Source:</strong> CSG Advisory Contact Form</p>
            <p><strong>IP Address:</strong> Available in server logs</p>
          </div>
        </div>
        
        <div style="background: #667eea; color: white; padding: 15px; text-align: center; border-radius: 0 0 10px 10px;">
          <p style="margin: 0; font-size: 14px;">This email was sent from your CSG Advisory contact form</p>
        </div>
      </div>
    `,
    text: `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Jurisdiction of interest: ${jurisdiction}
Message: ${message}

Submitted: ${submissionTime}
Source: CSG Advisory Contact Form
    `.trim(),
  };
};

// Auto-reply email template
export const createAutoReplyTemplate = (firstName: string): EmailTemplate => {
  return {
    subject: "Thank you for contacting CSG Advisory - We'll be in touch soon!",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">Thank You, ${firstName}!</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">We've received your message</p>
        </div>
        
        <div style="padding: 30px; background: #f9f9f9;">
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Hi ${firstName},
          </p>
          
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Thank you for reaching out to <strong>CSG Advisory</strong>! We've successfully received your message and our team will review it shortly.
          </p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
            <h3 style="color: #667eea; margin-top: 0;">What happens next?</h3>
            <ul style="color: #333; line-height: 1.8;">
              <li>Our team will review your inquiry within 24 hours</li>
              <li>We'll get back to you with personalized assistance</li>
              <li>For urgent matters, feel free to call us at +65 9613 5791</li>
            </ul>
          </div>
          
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            In the meantime, feel free to explore our services or contact us directly:
          </p>
          
          <div style="background: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 5px 0; color: #333;"><strong>📞 Phone:</strong> +65 9613 5791</p>
            <p style="margin: 5px 0; color: #333;"><strong>📧 Email:</strong> info@csgadvisory.com</p>
            <p style="margin: 5px 0; color: #333;"><strong>📍 Address:</strong> 51 Goldhill Plaza, #07-07, Singapore 308900</p>
          </div>
          
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Best regards,<br>
            <strong>The CSG Advisory Team</strong>
          </p>
        </div>
        
        <div style="background: #667eea; color: white; padding: 15px; text-align: center; border-radius: 0 0 10px 10px;">
          <p style="margin: 0; font-size: 14px;">Expand your business globally with CSG Advisory</p>
        </div>
      </div>
    `,
    text: `
Hi ${firstName},

Thank you for reaching out to CSG Advisory! We've successfully received your message and our team will review it shortly.

What happens next?
- Our team will review your inquiry within 24 hours
- We'll get back to you with personalized assistance
- For urgent matters, feel free to call us at +65 9613 5791

Contact Information:
Phone: +65 9613 5791
Email: info@csgadvisory.com
Address: 51 Goldhill Plaza, #07-07, Singapore 308900

Best regards,
The CSG Advisory Team

Expand your business globally with CSG Advisory
    `.trim(),
  };
};

// Input validation functions
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPhone = (phone: string): boolean => {
  // Remove common phone number formatting characters
  const cleanPhone = phone.replace(/[\s\-\(\)\+]/g, "");
  // Basic validation: should contain only digits and be between 7-15 characters
  const phoneRegex = /^\d{7,15}$/;
  return phoneRegex.test(cleanPhone);
};

export const sanitizeInput = (input: string): string => {
  return input.trim().substring(0, 1000); // Limit length and trim whitespace
};

export const validateContactForm = (
  data: any
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!data.firstName || typeof data.firstName !== "string") {
    errors.push("First name is required");
  }

  if (!data.email || typeof data.email !== "string") {
    errors.push("Email is required");
  } else if (!isValidEmail(data.email)) {
    errors.push("Invalid email format");
  }

  if (!data.phone || typeof data.phone !== "string") {
    errors.push("Phone number is required");
  } else if (!isValidPhone(data.phone)) {
    errors.push("Invalid phone number format");
  }

  if (!data.jurisdiction || typeof data.jurisdiction !== "string") {
    errors.push("Jurisdiction of interest is required");
  }

  // Additional validation
  if (data.firstName && data.firstName.length > 50) {
    errors.push("First name must be less than 50 characters");
  }

  if (data.lastName && data.lastName.length > 50) {
    errors.push("Last name must be less than 50 characters");
  }

  if (data.phone && data.phone.length > 20) {
    errors.push("Phone number must be less than 20 characters");
  }

  if (data.jurisdiction && data.jurisdiction.length > 100) {
    errors.push("Jurisdiction of interest must be less than 100 characters");
  }

  if (data.message && data.message.length > 1000) {
    errors.push("Message must be less than 1000 characters");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

// Rate limiting (simple in-memory implementation)
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 3;

export const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const userLimit = rateLimit.get(ip);

  if (!userLimit || now > userLimit.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (userLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  userLimit.count++;
  return true;
};
