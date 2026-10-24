import React from "react";
import { Link } from "../router";
import { SAMPLE_TEAM_MEMBERS } from "../data/mockData";
import { UserCheck, Info, Shield, ArrowRight, User } from "lucide-react";

interface OurTeamViewProps {
  onOpenInquiry: (context?: string) => void;
}

export function OurTeamView({ onOpenInquiry }: OurTeamViewProps) {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#1C1B1A] text-white py-20 sm:py-24 border-b border-[#383635]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#D39257] font-semibold">
            <span className="w-2 h-0.5 bg-[#0083C7]" />
            <span>Organization &amp; Leadership</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-white leading-tight">
            Our Team
          </h1>
          <p className="text-sm sm:text-base text-[#D8D8D6] max-w-3xl leading-relaxed font-light">
            Commercial and aviation management professionals coordinating air
            cargo operations, partner fleets, and bilateral trade corridors.
          </p>
        </div>
      </section>

      {/* Mandatory Development Preview Notice Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:p-5 bg-[#FAF5EE] border border-[#E7CFB2] rounded-lg flex items-start gap-3">
          <Info className="w-5 h-5 text-[#D39257] shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs">
            <strong className="text-[#704724] font-semibold block uppercase tracking-wider">
              Preview Demonstration Content — Sample Profiles Only
            </strong>
            <p className="text-[#986333] leading-relaxed">
              In accordance with project guidelines, the profiles below represent
              clearly labelled sample placeholders provided for preview and layout
              evaluation. Official executive identities and management appointments
              will be published upon regulatory certification and formal commercial
              commencement.
            </p>
          </div>
        </div>
      </section>

      {/* Sample Team Profiles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SAMPLE_TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl border border-[#E5E5E3] overflow-hidden shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Neutral Silhouette Placeholder (no stock photo impersonation) */}
                <div className="aspect-[4/3] bg-[#F2F2F0] border-b border-[#E5E5E3] flex flex-col items-center justify-center text-[#8C8A88] relative">
                  <div className="w-20 h-20 rounded-full bg-[#E5E5E3] flex items-center justify-center text-[#8C8A88]">
                    <User className="w-10 h-10" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider mt-3 px-2.5 py-0.5 bg-white rounded border border-[#E5E5E3] text-[#686664]">
                    Sample Avatar Placeholder
                  </span>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0083C7] font-display">
                      {member.roleCategory}
                    </span>
                    <h3 className="text-xl font-bold font-display uppercase text-[#1C1B1A]">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#D39257]">
                      {member.designation}
                    </p>
                  </div>

                  <p className="text-xs text-[#686664] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="p-3 bg-[#F9F9F8] rounded border border-[#E5E5E3] text-[11px] text-[#8C8A88] flex items-center justify-between">
                  <span>Status: Sample Data</span>
                  <span className="text-[#0083C7] font-medium">To Be Replaced</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recruitment & Collaboration CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 bg-white rounded-xl border border-[#E5E5E3] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-bold font-display uppercase text-[#1C1B1A]">
              Connect With AirRajasthan&apos;s Management
            </h3>
            <p className="text-xs sm:text-sm text-[#686664] leading-relaxed">
              For operational consultations, commercial proposals, or cargo agency
              inquiries, please submit your message to our coordination desk.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenInquiry("Management & Executive Inquiry")}
            className="px-8 py-3.5 bg-[#0083C7] hover:bg-[#0072AD] text-white text-xs uppercase font-bold tracking-wider rounded transition-colors shadow-xs cursor-pointer shrink-0"
          >
            Submit an Inquiry
          </button>
        </div>
      </section>

    </div>
  );
}
