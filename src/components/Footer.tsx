import React from "react";
import { BrandLogo } from "./BrandLogo";
import { Link } from "../router";
import { PUBLIC_NAV_LINKS } from "./Navbar";
import { MapPin, Phone, Mail, Shield, ArrowRight, MessageSquare } from "lucide-react";

interface FooterProps {
  onOpenInquiry: (context?: string) => void;
  onOpenDevLogin?: () => void;
}

export function Footer({ onOpenInquiry, onOpenDevLogin }: FooterProps) {
  return (
    <footer className="bg-[#1C1B1A] text-[#D8D8D6] border-t border-[#383635] mt-auto">
      {/* Upper Corridor Strip: Proposed Jaipur–Fujairah Corridor */}
      <div className="border-b border-[#2B2A29] py-6 bg-[#161514]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="w-2 h-2 rounded-full bg-[#0083C7] shrink-0" />
            <span className="font-semibold tracking-wider uppercase text-white font-display">
              Proposed Air Cargo Corridor:
            </span>
            <span className="text-[#B7B6B4]">
              Jaipur, India (JAI) &harr; Fujairah, UAE (FJR) &middot; Ad hoc &amp; Dedicated Charter Operations
            </span>
          </div>
          <button
            type="button"
            onClick={() => onOpenInquiry("Jaipur–Fujairah Corridor")}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#D39257] hover:text-white transition-colors cursor-pointer shrink-0"
          >
            <span>Inquire About Route Capacity</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <Link to="/" aria-label="AirRajasthan™ Home">
              <BrandLogo variant="light" size="md" />
            </Link>
            <p className="text-xs text-[#B7B6B4] leading-relaxed">
              AirRajasthan™ Aviation &amp; Logistics Solutions is a developing
              partner-led aviation platform connecting India&apos;s industrial
              corridors with UAE and global gateways.
            </p>
            <p className="text-[11px] text-[#8C8A88] italic">
              &ldquo;Born in Desert. Built for Skies.&rdquo;
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#2B2A29] border border-[#383635] text-[11px] text-[#D39257]">
                <Shield className="w-3.5 h-3.5 text-[#0083C7]" />
                <span>Partner-Led Commercial Model</span>
              </span>
            </div>
          </div>

          {/* Column 2: Canonical Public Pages (strictly identical 8-page order) */}
          <div>
            <h3 className="text-xs uppercase font-bold tracking-wider text-white mb-4 font-display">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs text-[#B7B6B4]">
              {PUBLIC_NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Service Areas */}
          <div>
            <h3 className="text-xs uppercase font-bold tracking-wider text-white mb-4 font-display">
              Commercial Solutions
            </h3>
            <ul className="space-y-2.5 text-xs text-[#B7B6B4]">
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors block"
                >
                  Aviation &amp; Charter Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors block"
                >
                  Air Cargo Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors block"
                >
                  Logistics &amp; Supply Chain Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors block"
                >
                  India–UAE Trade Connectivity
                </Link>
              </li>
              <li>
                <Link
                  to="/partnership"
                  className="hover:text-white transition-colors block text-[#D39257]"
                >
                  GSA &amp; CSA Partnerships &rarr;
                </Link>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-[#2B2A29]">
              <button
                type="button"
                onClick={() => onOpenInquiry()}
                className="w-full py-2.5 px-4 bg-[#0083C7] hover:bg-[#0072AD] text-white text-xs uppercase font-bold tracking-wider rounded transition-colors text-center"
              >
                Submit Inquiry
              </button>
            </div>
          </div>

          {/* Column 4: Contact & Legal Head Office */}
          <div className="space-y-3.5 text-xs">
            <h3 className="text-xs uppercase font-bold tracking-wider text-white mb-4 font-display">
              Head Office Contact
            </h3>
            
            <div className="flex items-start gap-2.5 text-[#B7B6B4]">
              <MapPin className="w-4 h-4 text-[#0083C7] shrink-0 mt-0.5" />
              <address className="not-italic leading-relaxed">
                <strong className="text-white block font-medium">
                  AirRajasthan Aviation &amp; Logistics Solutions
                </strong>
                2/594, Block-2, Ground Floor, Sector-2, Jawahar Nagar,<br />
                Jaipur, Rajasthan-302004, INDIA.
              </address>
            </div>

            <div className="flex items-center gap-2.5 text-[#B7B6B4]">
              <Phone className="w-4 h-4 text-[#0083C7] shrink-0" />
              <a
                href="tel:+919829302643"
                className="hover:text-white transition-colors font-medium tabular-nums"
              >
                +91 98293 02643
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-[#B7B6B4]">
              <Mail className="w-4 h-4 text-[#0083C7] shrink-0" />
              <a
                href="mailto:support@AirRajasthan.com"
                className="hover:text-white transition-colors font-medium"
              >
                support@AirRajasthan.com
              </a>
            </div>

            {/* WhatsApp Status: Configurable & explicitly inactive until confirmed */}
            <div className="p-2.5 rounded bg-[#2B2A29] border border-[#383635] text-[11px] text-[#8C8A88] flex items-center gap-2">
              <MessageSquare className="w-3.5 h-3.5 text-[#8C8A88] shrink-0" />
              <span>WhatsApp channel: pending verification &amp; setup</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Development Footnote */}
      <div className="border-t border-[#2B2A29] py-6 text-xs text-[#8C8A88] bg-[#161514]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span>&copy; {new Date().getFullYear()} AirRajasthan™ Aviation &amp; Logistics Solutions. All rights reserved.</span>
            <span>&middot;</span>
            <span className="text-[11px]">Proposed corridor operations and fleet charters are subject to regulatory approvals, slot feasibility, and operational availability.</span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            {onOpenDevLogin && (
              <button
                type="button"
                onClick={onOpenDevLogin}
                className="text-[11px] text-[#686664] hover:text-[#B7B6B4] transition-colors"
              >
                [Preview Console]
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
