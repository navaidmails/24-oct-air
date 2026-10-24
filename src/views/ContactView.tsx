import React from "react";
import { InquiryForm } from "../components/InquiryForm";
import { Inquiry } from "../types";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldAlert,
  MessageSquare,
  Building2,
  CheckCircle2,
} from "lucide-react";

interface ContactViewProps {
  onSubmitInquiry: (inquiry: Inquiry) => void;
}

export function ContactView({ onSubmitInquiry }: ContactViewProps) {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#1C1B1A] text-white py-20 sm:py-24 border-b border-[#383635]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#D39257] font-semibold">
            <span className="w-2 h-0.5 bg-[#0083C7]" />
            <span>Commercial Coordination &amp; Support</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-white leading-tight">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base text-[#D8D8D6] max-w-3xl leading-relaxed font-light">
            Connect directly with AirRajasthan™ Aviation &amp; Logistics Solutions.
            Our team is available to assist shippers, forwarders, and airline
            partners.
          </p>
        </div>
      </section>

      {/* Main Contact Grid: Official Details + Embedded Shared Inquiry Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase font-bold tracking-wider text-[#0083C7] font-display">
                Head Office
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#1C1B1A] uppercase">
                AirRajasthan Aviation &amp; Logistics Solutions
              </h2>
              <p className="text-xs sm:text-sm text-[#686664] leading-relaxed">
                Registered operations and commercial coordination office located in
                Jaipur, Rajasthan, India.
              </p>
            </div>

            {/* Contact Details Card */}
            <div className="bg-white rounded-xl border border-[#E5E5E3] p-6 sm:p-8 space-y-6 shadow-xs">
              
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded bg-[#EFF7FC] text-[#0083C7] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-xs">
                  <span className="font-bold text-[#1C1B1A] uppercase tracking-wider font-display block">
                    Registered Office Address
                  </span>
                  <address className="not-italic text-[#686664] leading-relaxed">
                    2/594, Block-2, Ground Floor, Sector-2,<br />
                    Jawahar Nagar, Jaipur,<br />
                    Rajasthan-302004, INDIA.
                  </address>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#F2F2F0]">
                <div className="w-10 h-10 rounded bg-[#EFF7FC] text-[#0083C7] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-xs">
                  <span className="font-bold text-[#1C1B1A] uppercase tracking-wider font-display block">
                    Telephone Line
                  </span>
                  <a
                    href="tel:+919829302643"
                    className="text-sm font-semibold text-[#0083C7] hover:underline tabular-nums"
                  >
                    +91 98293 02643
                  </a>
                  <p className="text-[11px] text-[#8C8A88]">
                    Commercial coordination &amp; cargo queries
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#F2F2F0]">
                <div className="w-10 h-10 rounded bg-[#EFF7FC] text-[#0083C7] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-xs">
                  <span className="font-bold text-[#1C1B1A] uppercase tracking-wider font-display block">
                    Electronic Mail
                  </span>
                  <a
                    href="mailto:support@AirRajasthan.com"
                    className="text-sm font-semibold text-[#0083C7] hover:underline"
                  >
                    support@AirRajasthan.com
                  </a>
                  <p className="text-[11px] text-[#8C8A88]">
                    Partner inquiries, documentation &amp; charter requests
                  </p>
                </div>
              </div>

              {/* WhatsApp Disclosure */}
              <div className="p-3 bg-[#FAF5EE] rounded border border-[#E7CFB2] text-xs flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#D39257] shrink-0 mt-0.5" />
                <div className="text-[11px] text-[#704724] leading-relaxed">
                  <strong>WhatsApp Status:</strong> Inactive &amp; pending verified
                  business gateway setup. Please contact our team via telephone or
                  submit the inquiry form.
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Embedded Shared Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-[#E5E5E3] p-6 sm:p-10 shadow-xs">
            <div className="mb-6 space-y-2">
              <span className="text-xs uppercase font-bold tracking-wider text-[#0083C7] font-display">
                Online Inquiry Portal
              </span>
              <h3 className="text-2xl font-bold font-display uppercase text-[#1C1B1A]">
                Submit Your Requirements
              </h3>
              <p className="text-xs sm:text-sm text-[#686664] leading-relaxed">
                Shippers, Customs House Agents (CHAs), Freight Forwarders, and
                Airline Operators are invited to outline their requirements below.
              </p>
            </div>

            <InquiryForm
              onSuccess={(inquiry) => {
                onSubmitInquiry(inquiry);
              }}
            />
          </div>

        </div>
      </section>

    </div>
  );
}
