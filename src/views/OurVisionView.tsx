import React from "react";
import { Link } from "../router";
import { ShieldCheck, Compass, Target, Handshake, ArrowRight, Building2, Globe } from "lucide-react";

interface OurVisionViewProps {
  onOpenInquiry: (context?: string) => void;
}

export function OurVisionView({ onOpenInquiry }: OurVisionViewProps) {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#1C1B1A] text-white py-20 sm:py-24 border-b border-[#383635]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#D39257] font-semibold">
            <span className="w-2 h-0.5 bg-[#0083C7]" />
            <span>AirRajasthan™ Corporate Profile &amp; Strategy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-white leading-tight">
            Our Vision — Born in Desert. Built for Skies.
          </h1>
          <p className="text-sm sm:text-base text-[#D8D8D6] max-w-3xl leading-relaxed font-light">
            Connecting businesses, markets, and regional opportunities across
            India, the Middle East, Africa, and beyond through an agile,
            partner-led aviation platform.
          </p>
        </div>
      </section>

      {/* Main Narrative Section with Photography */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#0083C7] font-semibold font-display">
              <span className="w-2 h-0.5 bg-[#0083C7]" />
              <span>Foundation &amp; Heritage</span>
            </div>
            
            <h2 className="text-3xl font-bold font-display text-[#1C1B1A] uppercase tracking-tight">
              Combining Regional Heritage With Global Ambition
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#686664] leading-relaxed">
              <p>
                Born from the spirit of Rajasthan and strategically positioned
                through Fujairah, UAE, AirRajasthan™ is developing dependable,
                efficient, and customer-focused air freight solutions designed to
                move trade faster, strengthen supply chains, and support economic
                growth across the regions we serve.
              </p>
              <p>
                With Jaipur, Rajasthan, and Fujairah, UAE, as our strategic
                hubs, we aim to develop an integrated aviation and logistics
                network that brings together air cargo, charter operations, freight
                management, ground transportation, and end-to-end cargo solutions
                under one commercial platform.
              </p>
              <p>
                Our approach is built around understanding market demand,
                developing strategic partnerships, and creating practical
                solutions for businesses that require dependable access to
                regional and international markets. From cargo capacity and charter
                coordination to logistics planning and specialised shipment
                handling, our focus is on connecting customers, markets, and
                opportunities through a single, coordinated approach.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenInquiry("Strategic Vision & Alliances")}
                className="px-6 py-3 bg-[#0083C7] hover:bg-[#0072AD] text-white text-xs uppercase font-bold tracking-wider rounded transition-colors cursor-pointer"
              >
                Inquire With Our Team
              </button>
              <Link
                to="/services"
                className="text-xs font-semibold text-[#0083C7] hover:underline"
              >
                Explore Services &rarr;
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-lg border border-[#E5E5E3] overflow-hidden bg-slate-900 shadow-md">
              <img
                src="/images/Our Vision.jpg"
                alt="AirRajasthan vision of global aviation logistics"
                className="w-full h-80 sm:h-96 object-cover"
                loading="eager"
              />
              <div className="p-4 bg-white border-t border-[#E5E5E3] text-xs">
                <span className="font-bold text-[#1C1B1A] block font-display uppercase">
                  Global Ambition &middot; Regional Grounding
                </span>
                <span className="text-[#8C8A88]">
                  Jaipur &amp; Fujairah Strategic Bilateral Anchor Points
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Vision Statement & Long-Term Aspiration */}
      <section className="bg-white border-y border-[#E5E5E3] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#0083C7] font-semibold font-display">
              <span className="w-2 h-0.5 bg-[#0083C7]" />
              <span>Core Vision</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1C1B1A] uppercase tracking-tight">
              An Integrated Platform Connecting Continents
            </h2>
            <p className="text-xs sm:text-sm text-[#686664] leading-relaxed">
              Our vision is to develop AirRajasthan™ into a trusted, integrated
              aviation and logistics platform connecting India, the UAE/GCC,
              Africa, and wider international markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-6 rounded-lg bg-[#F9F9F8] border border-[#E5E5E3] space-y-3">
              <div className="w-10 h-10 rounded bg-[#EFF7FC] text-[#0083C7] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-display text-[#1C1B1A] uppercase">
                Beyond Moving Cargo
              </h3>
              <p className="text-xs text-[#686664] leading-relaxed">
                We aspire to create a business that goes beyond moving cargo from
                one destination to another—one that connects trade, enables new
                market opportunities, and delivers flexible aviation solutions for a
                changing global economy.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#F9F9F8] border border-[#E5E5E3] space-y-3">
              <div className="w-10 h-10 rounded bg-[#EFF7FC] text-[#0083C7] flex items-center justify-center">
                <Handshake className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-display text-[#1C1B1A] uppercase">
                Partner-Led Business Model
              </h3>
              <p className="text-xs text-[#686664] leading-relaxed">
                By collaborating with established airlines, certified aircraft
                operators, GSAs, and multimodal providers, we deliver flexible
                capacity without the rigid constraints of fully owned heavy fleet
                infrastructure.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#F9F9F8] border border-[#E5E5E3] space-y-3">
              <div className="w-10 h-10 rounded bg-[#EFF7FC] text-[#0083C7] flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-display text-[#1C1B1A] uppercase">
                Progressive Expansion
              </h3>
              <p className="text-xs text-[#686664] leading-relaxed">
                Starting from our proposed initial Jaipur–Fujairah corridor, we plan
                to progressively expand connectivity to major commercial hubs
                across India, the GCC, Africa, Europe, and Central Asia as market
                demand matures.
              </p>
            </div>

          </div>

          <div className="p-4 bg-[#EFF7FC] border border-[#B2DEF3] rounded-lg text-xs flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#0083C7] shrink-0 mt-0.5" />
            <p className="text-[#005A8A] leading-relaxed text-[11px] sm:text-xs">
              <strong>Operational &amp; Regulatory Disclosure:</strong> AirRajasthan™
              operates under a commercial coordination and partner-led aviation
              framework. Proposed flight frequencies, charter availability, and
              network extensions are planning ambitions subject to commercial
              feasibility, slot allocation, and relevant regulatory approvals.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
