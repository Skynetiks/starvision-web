// types/contact.ts
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  jurisdiction: string;
}

export interface ContactFormState {
  formData: ContactFormData;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
}

export interface ApiResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

export interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

// For form validation
export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

// Environment variables type
export interface EmailConfig {
  EMAIL_USER: string;
  EMAIL_PASS: string;
  BUSINESS_EMAIL: string;
  SMTP_HOST?: string;
  SMTP_PORT?: string;
  SMTP_SECURE?: string;
}