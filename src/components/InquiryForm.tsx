import React, { useState, useEffect } from "react";
import { Inquiry, InquiryCategory } from "../types";
import {
  countWords,
  submitInquiry,
  InquirySubmissionPayload,
} from "../services/inquiryService";
import { AlertCircle, CheckCircle2, Info } from "lucide-react";

interface InquiryFormProps {
  initialContext?: string;
  onSuccess?: (inquiry: Inquiry) => void;
  onCancel?: () => void;
  isModal?: boolean;
}

const COMMON_COUNTRY_CODES = [
  { code: "+91", country: "India (+91)" },
  { code: "+971", country: "UAE (+971)" },
  { code: "+1", country: "USA / Canada (+1)" },
  { code: "+44", country: "UK (+44)" },
  { code: "+65", country: "Singapore (+65)" },
  { code: "+49", country: "Germany (+49)" },
  { code: "+966", country: "Saudi Arabia (+966)" },
  { code: "+968", country: "Oman (+968)" },
  { code: "+974", country: "Qatar (+974)" },
  { code: "+254", country: "Kenya (+254)" },
];

export function InquiryForm({
  initialContext = "",
  onSuccess,
  onCancel,
  isModal = false,
}: InquiryFormProps) {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [mobile, setMobile] = useState("");
  const [category, setCategory] = useState<InquiryCategory | "">("");
  const [message, setMessage] = useState("");
  const [context, setContext] = useState(initialContext);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<Inquiry | null>(null);

  useEffect(() => {
    if (initialContext) {
      setContext(initialContext);
    }
  }, [initialContext]);

  const wordCount = countWords(message);
  const isOverLimit = wordCount > 300;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const payload: InquirySubmissionPayload = {
      name,
      companyName,
      countryCode,
      mobile,
      category: category as InquiryCategory,
      message,
      context: context || undefined,
    };

    const result = await submitInquiry(payload);

    if (result.success && result.inquiry) {
      setSubmittedInquiry(result.inquiry);
      if (onSuccess) {
        onSuccess(result.inquiry);
      }
    } else if (result.validationErrors) {
      setErrors(result.validationErrors);
    }

    setIsSubmitting(false);
  };

  const handleReset = () => {
    setName("");
    setCompanyName("");
    setMobile("");
    setCategory("");
    setMessage("");
    setSubmittedInquiry(null);
    setErrors({});
  };

  if (submittedInquiry) {
    return (
      <div className="p-6 sm:p-8 bg-white rounded-lg border border-[#E5E5E3] text-center space-y-5">
        <div className="w-14 h-14 rounded-full bg-[#EFF7FC] text-[#0083C7] mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div>
          <span className="text-xs font-semibold tracking-wider uppercase text-[#0083C7]">
            Inquiry Captured (Development Preview)
          </span>
          <h3 className="text-2xl font-bold font-display text-[#1C1B1A] mt-1">
            Thank You, {submittedInquiry.name}
          </h3>
        </div>

        <div className="p-4 bg-[#F9F9F8] rounded border border-[#E5E5E3] text-left text-xs space-y-2 max-w-md mx-auto">
          <div className="flex justify-between items-center pb-2 border-b border-[#E5E5E3]">
            <span className="text-[#686664] font-medium">Reference Number:</span>
            <span className="font-mono font-bold text-[#0083C7]">
              {submittedInquiry.referenceNumber}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#686664]">Company:</span>
            <span className="font-semibold text-[#1C1B1A]">
              {submittedInquiry.companyName}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#686664]">Category:</span>
            <span className="text-[#1C1B1A]">{submittedInquiry.category}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#686664]">Mobile:</span>
            <span className="text-[#1C1B1A]">
              {submittedInquiry.countryCode} {submittedInquiry.mobile}
            </span>
          </div>
          {submittedInquiry.context && (
            <div className="flex justify-between items-center">
              <span className="text-[#686664]">Context:</span>
              <span className="text-[#0083C7] font-medium">
                {submittedInquiry.context}
              </span>
            </div>
          )}
        </div>

        {/* Transparent preview disclaimer */}
        <div className="p-3 bg-[#EFF7FC] rounded border border-[#B2DEF3] text-left flex items-start gap-2.5 max-w-md mx-auto">
          <Info className="w-4 h-4 text-[#0083C7] shrink-0 mt-0.5" />
          <p className="text-[11px] text-[#005A8A] leading-relaxed">
            <strong>Preview Environment Notice:</strong> This inquiry has been
            recorded in local memory for interface evaluation. In the future
            production phase, submissions will connect to an authenticated backend
            API with persistent MySQL storage and real-time operational alerts.
          </p>
        </div>

        <div className="pt-2 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="px-5 py-2.5 bg-[#0083C7] hover:bg-[#0072AD] text-white text-xs uppercase font-semibold tracking-wider rounded transition-colors"
          >
            Submit Another Inquiry
          </button>
          {isModal && onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="px-5 py-2.5 border border-[#E5E5E3] hover:bg-[#F2F2F0] text-[#1C1B1A] text-xs uppercase font-semibold tracking-wider rounded transition-colors"
            >
              Close
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Context Badge if arriving from a specific CTA */}
      {context && (
        <div className="p-2.5 bg-[#EFF7FC] border border-[#B2DEF3] rounded flex items-center justify-between text-xs">
          <span className="text-[#005A8A]">
            Inquiry Focus: <strong className="text-[#0083C7]">{context}</strong>
          </span>
          <button
            type="button"
            onClick={() => setContext("")}
            className="text-[11px] text-[#686664] hover:text-[#1C1B1A] underline ml-2"
          >
            Clear Focus
          </button>
        </div>
      )}

      {/* Field 1: Name */}
      <div>
        <label
          htmlFor="inquiry-name"
          className="block text-xs font-semibold uppercase tracking-wider text-[#1C1B1A] mb-1.5"
        >
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          id="inquiry-name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
          }}
          placeholder="e.g. Ramesh Kumar"
          className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded focus:outline-none transition-colors ${
            errors.name
              ? "border-red-500 focus:border-red-500 ring-1 ring-red-500"
              : "border-[#E5E5E3] focus:border-[#0083C7] focus:ring-1 focus:ring-[#0083C7]"
          }`}
          required
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.name}</span>
          </p>
        )}
      </div>

      {/* Field 2: Company Name */}
      <div>
        <label
          htmlFor="inquiry-company"
          className="block text-xs font-semibold uppercase tracking-wider text-[#1C1B1A] mb-1.5"
        >
          Company Name <span className="text-red-500">*</span>
        </label>
        <input
          id="inquiry-company"
          type="text"
          value={companyName}
          onChange={(e) => {
            setCompanyName(e.target.value);
            if (errors.companyName)
              setErrors((prev) => ({ ...prev, companyName: "" }));
          }}
          placeholder="e.g. Rajasthan Marble & Minerals Pvt Ltd"
          className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded focus:outline-none transition-colors ${
            errors.companyName
              ? "border-red-500 focus:border-red-500 ring-1 ring-red-500"
              : "border-[#E5E5E3] focus:border-[#0083C7] focus:ring-1 focus:ring-[#0083C7]"
          }`}
          required
        />
        {errors.companyName && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.companyName}</span>
          </p>
        )}
      </div>

      {/* Field 3: Mobile Number with Country Code */}
      <div>
        <label
          htmlFor="inquiry-mobile"
          className="block text-xs font-semibold uppercase tracking-wider text-[#1C1B1A] mb-1.5"
        >
          Mobile Number <span className="text-red-500">*</span>
        </label>
        <div className="flex gap-2">
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            aria-label="Country Code"
            className="w-32 sm:w-40 px-2.5 py-2.5 text-sm bg-white border border-[#E5E5E3] rounded focus:outline-none focus:border-[#0083C7] shrink-0"
          >
            {COMMON_COUNTRY_CODES.map((item) => (
              <option key={item.code} value={item.code}>
                {item.country}
              </option>
            ))}
          </select>
          <input
            id="inquiry-mobile"
            type="tel"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
              if (errors.mobile) setErrors((prev) => ({ ...prev, mobile: "" }));
            }}
            placeholder="98293 02643"
            className={`flex-1 px-3.5 py-2.5 text-sm bg-white border rounded focus:outline-none transition-colors ${
              errors.mobile
                ? "border-red-500 focus:border-red-500 ring-1 ring-red-500"
                : "border-[#E5E5E3] focus:border-[#0083C7] focus:ring-1 focus:ring-[#0083C7]"
            }`}
            required
          />
        </div>
        {errors.mobile && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.mobile}</span>
          </p>
        )}
      </div>

      {/* Field 4: "What you are" dropdown */}
      <div>
        <label
          htmlFor="inquiry-category"
          className="block text-xs font-semibold uppercase tracking-wider text-[#1C1B1A] mb-1.5"
        >
          What You Are <span className="text-red-500">*</span>
        </label>
        <select
          id="inquiry-category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value as InquiryCategory);
            if (errors.category) setErrors((prev) => ({ ...prev, category: "" }));
          }}
          className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded focus:outline-none transition-colors ${
            errors.category
              ? "border-red-500 focus:border-red-500 ring-1 ring-red-500"
              : "border-[#E5E5E3] focus:border-[#0083C7] focus:ring-1 focus:ring-[#0083C7]"
          }`}
          required
        >
          <option value="" disabled>
            Select your organization type...
          </option>
          <option value="Shipper">Shipper</option>
          <option value="CHA">CHA (Customs House Agent)</option>
          <option value="Freight Forwarder">Freight Forwarder</option>
          <option value="Airline Operator">Airline Operator</option>
        </select>
        {errors.category && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.category}</span>
          </p>
        )}
      </div>

      {/* Field 5: Inquiry Message (max 300 words with live word counter) */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label
            htmlFor="inquiry-message"
            className="block text-xs font-semibold uppercase tracking-wider text-[#1C1B1A]"
          >
            Please Write Your Inquiry <span className="text-red-500">*</span>
          </label>
          <span
            className={`text-xs font-medium tabular-nums ${
              isOverLimit ? "text-red-600 font-bold" : "text-[#686664]"
            }`}
          >
            {wordCount} / 300 words
          </span>
        </div>
        <textarea
          id="inquiry-message"
          rows={5}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
          }}
          placeholder="Please describe your cargo specifications, route interest, or partnership requirement in up to 300 words..."
          className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded focus:outline-none transition-colors resize-y ${
            errors.message || isOverLimit
              ? "border-red-500 focus:border-red-500 ring-1 ring-red-500"
              : "border-[#E5E5E3] focus:border-[#0083C7] focus:ring-1 focus:ring-[#0083C7]"
          }`}
          required
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.message}</span>
          </p>
        )}
        {isOverLimit && !errors.message && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span>
              Message exceeds the 300-word limit. Please condense by{" "}
              {wordCount - 300} words.
            </span>
          </p>
        )}
      </div>

      {/* Action buttons */}
      <div className="pt-2 flex items-center justify-end gap-3">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-5 py-2.5 text-xs uppercase font-semibold text-[#686664] hover:text-[#1C1B1A] transition-colors"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={isSubmitting || isOverLimit}
          className="px-6 py-3 bg-[#0083C7] hover:bg-[#0072AD] active:bg-[#005A8A] disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs uppercase font-bold tracking-wider rounded transition-colors shadow-xs cursor-pointer"
        >
          {isSubmitting ? "Processing..." : "Submit Inquiry"}
        </button>
      </div>
    </form>
  );
}
