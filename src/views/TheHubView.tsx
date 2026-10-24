import React from "react";
import { Link } from "../router";
import {
  Plane,
  Anchor,
  Train,
  Truck,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Building,
  CheckCircle2,
} from "lucide-react";

interface TheHubViewProps {
  onOpenInquiry: (context?: string) => void;
}

export function TheHubView({ onOpenInquiry }: TheHubViewProps) {
  const multimodalPillars = [
    {
      title: "Air Cargo Gateway",
      tagline: "Dedicated freighter operations & ad hoc charter slots",
      icon: Plane,
      description:
        "Fujairah International Airport provides streamlined ramp turnaround times, direct apron transshipment access, and capacity for regional and wide-body freighter operations without the heavy air traffic congestion experienced at larger metropolitan hubs.",
      image: "/images/hero-homepage.jpg",
    },
    {
      title: "Deepwater Maritime Port",
      tagline: "Direct access to the Gulf of Oman and Indian Ocean routes",
      icon: Anchor,
      description:
        "Located on the UAE's eastern coastline outside the Strait of Hormuz, Fujairah's port facilities enable rapid sea-to-air transshipment, connecting major shipping lanes from the Indian subcontinent, East Africa, and the Red Sea directly with air feeder routes.",
      image: "/images/AirRajasthan.jpg",
    },
    {
      title: "National Freight Rail Integration",
      tagline: "Etihad Rail connectivity to industrial centers across the UAE",
      icon: Train,
      description:
        "Fujairah is integrated into the UAE's national rail freight network (Etihad Rail), connecting coastal port terminals with inland freight dry ports, including links with the Industrial City of Abu Dhabi (ICAD) for seamless customs clearance, container inspection, and cargo release.",
      image: "/images/Route.jpg",
    },
    {
      title: "Strategic Highway Network",
      tagline: "Rapid bonded road transit across the UAE and GCC",
      icon: Truck,
      description:
        "Modern expressway corridors connect Fujairah with Dubai, Sharjah, Abu Dhabi, and cross-border GCC transit points within hours, enabling fast bonded road feeder services (RFS) for integrated airport-to-door and port-to-door logistics.",
      image: "/images/Service-2 Aircargo Services.jpg",
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#1C1B1A] text-white py-20 sm:py-24 border-b border-[#383635]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#D39257] font-semibold">
            <span className="w-2 h-0.5 bg-[#0083C7]" />
            <span>Multimodal Hub &amp; Gateway</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-white leading-tight">
            Fujairah — AirRajasthan&apos;s Strategic Hub
          </h1>
          <p className="text-sm sm:text-base text-[#D8D8D6] max-w-3xl leading-relaxed font-light">
            Connecting Air, Sea, Rail &amp; Road on the UAE&apos;s eastern
            coastline, creating a dependable commercial bridge between India and
            global markets.
          </p>
        </div>
      </section>

      {/* Picture-Led Intro Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#0083C7] font-semibold font-display">
              <span className="w-2 h-0.5 bg-[#0083C7]" />
              <span>Geographic Advantage</span>
            </div>
            
            <h2 className="text-3xl font-bold font-display text-[#1C1B1A] uppercase tracking-tight">
              A Strategic Gateway for Regional &amp; International Trade
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#686664] leading-relaxed">
              <p>
                AirRajasthan™ envisions Fujairah as a strategic gateway for its
                aviation, air cargo, and logistics operations, connecting India with
                the UAE and progressively extending its reach towards Africa, Europe,
                and Central Asia.
              </p>
              <p>
                Located on the UAE&apos;s eastern coast along the Gulf of Oman,
                Fujairah offers an important geographical advantage for
                international trade, with direct access to maritime shipping routes
                serving the Indian subcontinent, the wider Gulf, the Red Sea, and
                East Africa. Its established port infrastructure and growing
                logistics ecosystem provide a strong foundation for developing an
                integrated, multimodal cargo network.
              </p>
              <p>
                Our proposed Fujairah–Jaipur–Fujairah cargo corridor forms the
                starting point of this vision. By coordinating air cargo with sea
                freight, road transportation, warehousing, and customs services
                through qualified partners, AirRajasthan™ aims to offer customers
                flexible transport options based on urgency, shipment size, cost, and
                destination requirements.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenInquiry("Fujairah Hub Transshipment")}
                className="px-6 py-3 bg-[#0083C7] hover:bg-[#0072AD] text-white text-xs uppercase font-bold tracking-wider rounded transition-colors cursor-pointer"
              >
                Inquire For Hub Solutions
              </button>
              <Link
                to="/route-schedule"
                className="text-xs font-semibold text-[#0083C7] hover:underline"
              >
                View Route &amp; Schedule &rarr;
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-xl border border-[#E5E5E3] overflow-hidden bg-[#1C1B1A] shadow-md group">
              <img
                src="/images/AirRajasthan.jpg"
                alt="AirRajasthan logistics operations at Fujairah multimodal hub"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                loading="eager"
              />
              <div className="p-4 bg-white border-t border-[#E5E5E3] text-xs">
                <span className="font-bold text-[#1C1B1A] block font-display uppercase">
                  Fujairah Multimodal Logistics Platform
                </span>
                <span className="text-[#8C8A88]">
                  Gulf of Oman coastal gateway linking air, sea, rail, and road
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Picture-Led Four Connectivity Pillars */}
      <section className="bg-white border-y border-[#E5E5E3] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase font-bold tracking-wider text-[#0083C7] font-display">
              Four Pillars of Connectivity
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1C1B1A] uppercase tracking-tight">
              Multimodal Transport Integration
            </h2>
            <p className="text-xs sm:text-sm text-[#686664] leading-relaxed">
              Air freight serves time-sensitive consignments, while maritime, rail,
              and road transportation support volume-dense and cost-sensitive cargo
              movements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {multimodalPillars.map((pillar, pIdx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={pIdx}
                  className="bg-[#F9F9F8] rounded-xl border border-[#E5E5E3] overflow-hidden shadow-xs hover:border-[#0083C7] transition-all flex flex-col justify-between"
                >
                  <div className="aspect-[16/9] w-full overflow-hidden bg-[#1C1B1A] relative">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 p-2.5 bg-white/95 rounded shadow-sm text-[#0083C7]">
                      <PillarIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#D39257] font-display">
                        Pillar 0{pIdx + 1}
                      </span>
                      <h3 className="text-xl font-bold font-display uppercase text-[#1C1B1A]">
                        {pillar.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#0083C7] italic">
                        {pillar.tagline}
                      </p>
                      <p className="text-xs text-[#686664] leading-relaxed pt-1">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#E5E5E3]/80">
                      <button
                        type="button"
                        onClick={() => onOpenInquiry(`Fujairah - ${pillar.title}`)}
                        className="text-xs font-semibold text-[#0083C7] hover:underline inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>Inquire About {pillar.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Operational Clarification Disclosure */}
          <div className="p-4 bg-[#EFF7FC] border border-[#B2DEF3] rounded-lg text-xs space-y-1">
            <span className="font-semibold text-[#005A8A] block">
              Multimodal Partner Coordination:
            </span>
            <p className="text-[#005A8A] text-[11px] leading-relaxed">
              AirRajasthan™ provides commercial coordination across air, sea, rail,
              and road modes using established, qualified logistics partners rather
              than exclusively owned infrastructure. Services are subject to
              carrier availability, station customs approvals, and operational
              agreements.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
