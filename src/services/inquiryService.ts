import { Inquiry, InquiryCategory } from "../types";

export interface InquirySubmissionPayload {
  name: string;
  companyName: string;
  countryCode: string;
  mobile: string;
  category: InquiryCategory;
  message: string;
  context?: string;
}

export interface InquirySubmissionResult {
  success: boolean;
  inquiry?: Inquiry;
  referenceNumber?: string;
  isPreview: boolean;
  message: string;
  validationErrors?: Record<string, string>;
}

/**
 * Count words in a string according to standard whitespace tokenization.
 */
export function countWords(text: string): number {
  if (!text || !text.trim()) return 0;
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Validates the Inquiry submission according to business rules:
 * - Name: required
 * - Company Name: required
 * - Mobile: required, 6-15 digits
 * - Category: must be one of the four allowed categories
 * - Message: required, max 300 words
 */
export function validateInquiry(payload: InquirySubmissionPayload): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!payload.name.trim()) {
    errors.name = "Full name is required";
  }

  if (!payload.companyName.trim()) {
    errors.companyName = "Company or business name is required";
  }

  const cleanMobile = payload.mobile.replace(/[\s-]/g, "");
  if (!cleanMobile) {
    errors.mobile = "Mobile number is required";
  } else if (!/^\d{6,15}$/.test(cleanMobile)) {
    errors.mobile = "Please enter a valid mobile number (digits only, 6-15 characters)";
  }

  const allowedCategories: InquiryCategory[] = [
    "Shipper",
    "CHA",
    "Freight Forwarder",
    "Airline Operator",
  ];
  if (!payload.category || !allowedCategories.includes(payload.category)) {
    errors.category = "Please select what best describes your organization";
  }

  const wordCount = countWords(payload.message);
  if (!payload.message.trim()) {
    errors.message = "Please provide details about your cargo or partnership requirement";
  } else if (wordCount > 300) {
    errors.message = `Inquiry message exceeds the 300-word limit (currently ${wordCount} words)`;
  }

  return errors;
}

/**
 * Submits an inquiry. In this prototype stage, submission is held in memory
 * and tagged explicitly as a developer preview demonstration.
 * No personal information is written to localStorage.
 */
export async function submitInquiry(
  payload: InquirySubmissionPayload
): Promise<InquirySubmissionResult> {
  const errors = validateInquiry(payload);
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      isPreview: true,
      message: "Please complete all required fields correctly.",
      validationErrors: errors,
    };
  }

  // Generate an official reference sequence for local tracking
  const referenceNumber = `AR-INQ-${new Date().getFullYear()}-${Math.floor(
    1000 + Math.random() * 9000
  )}`;

  const newInquiry: Inquiry = {
    id: `inq_${Date.now()}`,
    referenceNumber,
    name: payload.name.trim(),
    companyName: payload.companyName.trim(),
    countryCode: payload.countryCode || "+91",
    mobile: payload.mobile.trim(),
    category: payload.category,
    message: payload.message.trim(),
    context: payload.context,
    status: "NEW",
    createdAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST",
    updatedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST",
    replies: [],
    internalNotes: [],
    // Compatibility fields
    contactPerson: payload.name.trim(),
    phone: `${payload.countryCode} ${payload.mobile.trim()}`,
    serviceType: payload.context || payload.category,
  };

  return {
    success: true,
    inquiry: newInquiry,
    referenceNumber,
    isPreview: true,
    message:
      "Preview Mode: Inquiry recorded in memory for review. This demonstration does not transmit data to an external server.",
  };
}
