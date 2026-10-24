import React, { useState } from "react";
import { 
  UserSession, 
  Enquiry, 
  EnquiryStatus, 
  ServiceItem, 
  EventItem, 
  GalleryItem 
} from "../types";
import { 
  LayoutDashboard, 
  Layers, 
  FileEdit, 
  MessageSquare, 
  Lock, 
  CheckCircle, 
  Clock, 
  User, 
  Send, 
  Filter,
  Check,
  Globe,
  Shield,
  Plane,
  Eye
} from "lucide-react";

interface DashboardViewProps {
  session: UserSession;
  enquiries: Enquiry[];
  services: ServiceItem[];
  events: EventItem[];
  gallery: GalleryItem[];
  onUpdateEnquiryStatus: (id: string, status: EnquiryStatus) => void;
  onAddEnquiryReply: (id: string, message: string) => void;
  onAddEnquiryNote: (id: string, note: string) => void;
  onPublishService: (id: string) => void;
  onPublishEvent: (id: string) => void;
  onPublishGallery: (id: string) => void;
}

export function DashboardView({
  session,
  enquiries,
  services,
  events,
  gallery,
  onUpdateEnquiryStatus,
  onAddEnquiryReply,
  onAddEnquiryNote,
  onPublishService,
  onPublishEvent,
  onPublishGallery,
}: DashboardViewProps) {
  const [activeTab, setActiveTab] = useState<"enquiries" | "cms">("enquiries");
  const [selectedEnquiryId, setSelectedEnquiryId] = useState<string>(
    enquiries[0]?.id || ""
  );
  const [replyText, setReplyText] = useState("");
  const [noteText, setNoteText] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");

  // Role filtering
  const visibleEnquiries = session.role === "USER"
    ? enquiries.filter((e) => e.email === session.email || e.companyName.includes("Singhal"))
    : enquiries;

  const filteredEnquiries = statusFilter === "ALL"
    ? visibleEnquiries
    : visibleEnquiries.filter((e) => e.status === statusFilter);

  const selectedEnquiry = enquiries.find((e) => e.id === selectedEnquiryId) || visibleEnquiries[0];

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim() || !selectedEnquiry) return;
    onAddEnquiryReply(selectedEnquiry.id, replyText);
    setReplyText("");
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteText.trim() || !selectedEnquiry) return;
    onAddEnquiryNote(selectedEnquiry.id, noteText);
    setNoteText("");
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      {/* Top Banner / Role Identity */}
      <div className="bg-white rounded-lg border border-[#E5E5E3] p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0083C7]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#0083C7]">
              {session.role} Portal · {session.organization}
            </span>
          </div>
          <h1 className="text-2xl font-bold font-display text-[#2B2A29] mt-1">
            Operations Management Console
          </h1>
          <p className="text-xs text-[#686664] mt-0.5">
            Logged in as <strong>{session.name}</strong> ({session.email})
          </p>
        </div>

        {/* Tab switch for Admin/Team */}
        {session.role !== "USER" && (
          <div className="flex items-center gap-1 p-1 bg-[#F9F9F8] border border-[#E5E5E3] rounded text-xs font-medium">
            <button
              type="button"
              onClick={() => setActiveTab("enquiries")}
              className={`px-3 py-1.5 rounded transition-colors cursor-pointer ${
                activeTab === "enquiries"
                  ? "bg-[#0083C7] text-white shadow-xs font-semibold"
                  : "text-[#2B2A29] hover:text-[#0083C7]"
              }`}
            >
              Freight Enquiries ({visibleEnquiries.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("cms")}
              className={`px-3 py-1.5 rounded transition-colors cursor-pointer ${
                activeTab === "cms"
                  ? "bg-[#0083C7] text-white shadow-xs font-semibold"
                  : "text-[#2B2A29] hover:text-[#0083C7]"
              }`}
            >
              CMS Drafts & Publishing
            </button>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      {activeTab === "enquiries" ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left List of Enquiries */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-lg border border-[#E5E5E3] p-4 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[#2B2A29]">
                  {session.role === "USER" ? "Your Consignment Quotations" : "Incoming Freight Pipelines"}
                </span>
                {session.role !== "USER" && (
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="text-xs bg-[#F9F9F8] border border-[#E5E5E3] rounded px-2 py-1"
                  >
                    <option value="ALL">All Statuses</option>
                    <option value="NEW">New</option>
                    <option value="ASSIGNED">Assigned</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="AWAITING_CUSTOMER">Awaiting Customer</option>
                    <option value="CLOSED">Closed</option>
                  </select>
                )}
              </div>

              <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
                {filteredEnquiries.map((enq) => {
                  const isSelected = selectedEnquiry?.id === enq.id;
                  return (
                    <button
                      key={enq.id}
                      type="button"
                      onClick={() => setSelectedEnquiryId(enq.id)}
                      className={`w-full text-left p-3 rounded border transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#EFF7FC] border-[#0083C7] shadow-xs"
                          : "bg-white border-[#E5E5E3] hover:border-[#B7B6B4]"
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono font-bold text-[#0083C7]">
                          {enq.referenceNumber}
                        </span>
                        <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded ${
                          enq.status === "NEW" ? "bg-amber-100 text-amber-800" :
                          enq.status === "ASSIGNED" ? "bg-blue-100 text-blue-800" :
                          enq.status === "IN_PROGRESS" ? "bg-emerald-100 text-emerald-800" :
                          "bg-slate-100 text-slate-700"
                        }`}>
                          {enq.status.replace("_", " ")}
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-[#2B2A29] mt-1.5 truncate">
                        {enq.companyName}
                      </div>
                      <div className="text-[11px] text-[#686664] flex items-center justify-between mt-1">
                        <span className="font-medium text-[#0083C7]">{enq.category || enq.serviceType || "Inquiry"}</span>
                        <span>{enq.name || enq.contactPerson}</span>
                      </div>
                      {enq.context && (
                        <div className="text-[10px] text-[#D39257] mt-0.5 font-medium truncate">
                          Focus: {enq.context}
                        </div>
                      )}
                      <div className="text-[10px] text-[#8C8A88] mt-1">
                        {enq.createdAt}
                      </div>
                    </button>
                  );
                })}

                {filteredEnquiries.length === 0 && (
                  <div className="text-center py-8 text-xs text-[#8C8A88]">
                    No enquiries matching current filter.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Detail Pane */}
          <div className="lg:col-span-7">
            {selectedEnquiry ? (
              <div className="bg-white rounded-lg border border-[#E5E5E3] p-6 space-y-6">
                
                {/* Header & Status Controller */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E5E3] pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-base font-bold text-[#0083C7]">
                        {selectedEnquiry.referenceNumber}
                      </span>
                      <span className="text-[#8C8A88]">·</span>
                      <span className="text-xs font-medium text-[#2B2A29]">
                        {selectedEnquiry.category || selectedEnquiry.serviceType}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold font-display text-[#2B2A29] mt-0.5">
                      {selectedEnquiry.companyName}
                    </h2>
                    <p className="text-xs text-[#686664]">
                      Contact: {selectedEnquiry.name || selectedEnquiry.contactPerson} · Mobile: {selectedEnquiry.countryCode ? `${selectedEnquiry.countryCode} ` : ""}{selectedEnquiry.mobile || selectedEnquiry.phone}
                    </p>
                  </div>

                  {/* Status Dropdown (Team and Admin only) */}
                  {session.role !== "USER" && (
                    <div className="text-right">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-[#8C8A88] block mb-1">
                        Workflow State
                      </label>
                      <select
                        value={selectedEnquiry.status}
                        onChange={(e) => onUpdateEnquiryStatus(selectedEnquiry.id, e.target.value as EnquiryStatus)}
                        className="text-xs font-semibold px-2.5 py-1.5 bg-[#F9F9F8] border border-[#E5E5E3] rounded focus:outline-none focus:border-[#0083C7]"
                      >
                        <option value="NEW">NEW</option>
                        <option value="ASSIGNED">ASSIGNED</option>
                        <option value="IN_PROGRESS">IN_PROGRESS</option>
                        <option value="AWAITING_CUSTOMER">AWAITING_CUSTOMER</option>
                        <option value="CLOSED">CLOSED</option>
                      </select>
                    </div>
                  )}
                </div>

                {/* Inquiry Customer Requirements & Message Pane */}
                <div className="p-4 bg-[#F9F9F8] rounded border border-[#E5E5E3] text-xs space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#E5E5E3]">
                    <span className="font-bold text-[#1C1B1A] uppercase tracking-wider font-display">
                      Client Inquiry Details
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#EFF7FC] text-[#0083C7] font-semibold text-[11px]">
                      {selectedEnquiry.category || "General Inquiry"}
                    </span>
                  </div>

                  {selectedEnquiry.context && (
                    <div className="text-xs">
                      <span className="text-[#686664] font-medium">Inquiry Context: </span>
                      <span className="text-[#D39257] font-semibold">{selectedEnquiry.context}</span>
                    </div>
                  )}

                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#8C8A88] block mb-1">
                      Submitted Message ({selectedEnquiry.message ? `${selectedEnquiry.message.trim().split(/\s+/).filter(Boolean).length} words` : "No message"})
                    </span>
                    <p className="text-xs text-[#2B2A29] leading-relaxed whitespace-pre-wrap bg-white p-3 rounded border border-[#E5E5E3]">
                      {selectedEnquiry.message || "No text provided."}
                    </p>
                  </div>
                </div>

                {selectedEnquiry.specialRequirements && (
                  <div className="text-xs p-3 bg-[#FAF5EE] border border-[#E7CFB2] rounded">
                    <span className="font-semibold text-[#704724] block mb-0.5">Special Handling Notes:</span>
                    <p className="text-[#492D16]">{selectedEnquiry.specialRequirements}</p>
                  </div>
                )}

                {/* Customer Visible Message Thread */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#0083C7]" />
                    <h3 className="text-xs uppercase font-bold tracking-wider text-[#2B2A29] font-display">
                      Customer Communications Thread
                    </h3>
                  </div>

                  <div className="space-y-2 max-h-56 overflow-y-auto p-3 bg-[#F9F9F8] rounded border border-[#E5E5E3]">
                    {selectedEnquiry.replies.map((reply) => {
                      const isTeam = reply.senderRole === "TEAM" || reply.senderRole === "ADMIN";
                      return (
                        <div
                          key={reply.id}
                          className={`p-3 rounded text-xs space-y-1 ${
                            isTeam
                              ? "bg-white border border-[#E5E5E3] ml-4"
                              : "bg-[#EFF7FC] border border-[#B2DEF3] mr-4"
                          }`}
                        >
                          <div className="flex items-center justify-between text-[10px] text-[#8C8A88]">
                            <span className="font-semibold text-[#2B2A29]">{reply.senderName}</span>
                            <span>{reply.createdAt}</span>
                          </div>
                          <p className="text-[#2B2A29]">{reply.message}</p>
                        </div>
                      );
                    })}

                    {selectedEnquiry.replies.length === 0 && (
                      <div className="text-center py-4 text-xs text-[#8C8A88]">
                        No messages yet in this consultation thread.
                      </div>
                    )}
                  </div>

                  {/* Send Message Form */}
                  <form onSubmit={handleSendReply} className="flex gap-2">
                    <input
                      type="text"
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Type message to client or operations desk..."
                      className="flex-1 px-3 py-2 text-xs bg-[#F9F9F8] border border-[#E5E5E3] rounded focus:outline-none focus:border-[#0083C7]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#0083C7] hover:bg-[#0072AD] text-white text-xs font-semibold rounded flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send</span>
                    </button>
                  </form>
                </div>

                {/* Confidential Internal Notes (Hidden from USER role) */}
                {session.role !== "USER" && (
                  <div className="space-y-3 pt-4 border-t border-[#E5E5E3]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-[#D39257]" />
                        <h3 className="text-xs uppercase font-bold tracking-wider text-[#704724] font-display">
                          Confidential Internal Notes (Staff & Admin Only)
                        </h3>
                      </div>
                      <span className="text-[10px] text-[#8C8A88]">Never visible to client</span>
                    </div>

                    <div className="space-y-2 max-h-40 overflow-y-auto p-3 bg-[#FAF5EE] rounded border border-[#E7CFB2]">
                      {selectedEnquiry.internalNotes.map((note) => (
                        <div key={note.id} className="p-2.5 bg-white border border-[#E7CFB2] rounded text-xs space-y-1">
                          <div className="flex items-center justify-between text-[10px] text-[#8C8A88]">
                            <span className="font-semibold text-[#704724]">{note.authorName}</span>
                            <span>{note.createdAt}</span>
                          </div>
                          <p className="text-[#383635] font-mono text-[11px]">{note.note}</p>
                        </div>
                      ))}

                      {selectedEnquiry.internalNotes.length === 0 && (
                        <div className="text-center py-2 text-xs text-[#8C8A88]">
                          No internal notes recorded.
                        </div>
                      )}
                    </div>

                    {/* Add Internal Note */}
                    <form onSubmit={handleAddNote} className="flex gap-2">
                      <input
                        type="text"
                        value={noteText}
                        onChange={(e) => setNoteText(e.target.value)}
                        placeholder="Add confidential operational/tariff note..."
                        className="flex-1 px-3 py-2 text-xs bg-[#FAF5EE] border border-[#E7CFB2] rounded focus:outline-none focus:border-[#D39257]"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-[#2B2A29] hover:bg-[#1C1B1A] text-white text-xs font-semibold rounded flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                      >
                        <Lock className="w-3.5 h-3.5 text-[#D39257]" />
                        <span>Save Note</span>
                      </button>
                    </form>
                  </div>
                )}

              </div>
            ) : (
              <div className="bg-white rounded-lg border border-[#E5E5E3] p-12 text-center text-[#8C8A88] text-sm">
                Select an enquiry to review payload specifications and communications.
              </div>
            )}
          </div>

        </div>
      ) : (
        /* CMS Drafts & Publishing Tab */
        <div className="bg-white rounded-lg border border-[#E5E5E3] p-6 space-y-8">
          <div>
            <div className="flex items-center gap-2">
              <FileEdit className="w-5 h-5 text-[#0083C7]" />
              <h2 className="text-xl font-bold font-display text-[#2B2A29]">
                CMS Draft Review & Live Publishing
              </h2>
            </div>
            <p className="text-xs text-[#686664] mt-0.5">
              Team members save content revisions as DRAFT. Only ADMINISTRATORS can promote drafts to live PUBLISHED status with instantaneous cache revalidation.
            </p>
          </div>

          {/* Services Section Drafts */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-bold tracking-wider text-[#686664] font-display flex items-center justify-between">
              <span>Aviation Services Catalog ({services.length})</span>
              <span className="text-[10px] text-[#8C8A88]">Next.js ISR revalidation active</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((srv) => (
                <div key={srv.id} className="p-4 rounded border border-[#E5E5E3] bg-[#F9F9F8] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#2B2A29]">{srv.title}</span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                      srv.status === "PUBLISHED" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                    }`}>
                      {srv.status}
                    </span>
                  </div>
                  <p className="text-xs text-[#686664] line-clamp-2">{srv.shortDescription}</p>
                  <div className="pt-2 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#8C8A88]">Order: {srv.order}</span>
                    {session.role === "ADMIN" && srv.status !== "PUBLISHED" ? (
                      <button
                        type="button"
                        onClick={() => onPublishService(srv.id)}
                        className="px-3 py-1 bg-[#0083C7] text-white rounded text-xs font-semibold hover:bg-[#0072AD]"
                      >
                        Publish Live
                      </button>
                    ) : (
                      <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                        <Check className="w-3 h-3" /> Live on Public Route
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Events Section Drafts */}
          <div className="space-y-3 pt-4 border-t border-[#E5E5E3]">
            <h3 className="text-xs uppercase font-bold tracking-wider text-[#686664] font-display">
              Industry Events & Conclaves ({events.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {events.map((ev) => (
                <div key={ev.id} className="p-4 rounded border border-[#E5E5E3] bg-[#F9F9F8] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#2B2A29] truncate">{ev.title}</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-1.5 py-0.5 rounded">
                      {ev.status}
                    </span>
                  </div>
                  <p className="text-xs text-[#686664]">{ev.location}</p>
                  <span className="text-[10px] font-mono text-[#8C8A88] block">{ev.eventDate}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Media */}
          <div className="space-y-3 pt-4 border-t border-[#E5E5E3]">
            <h3 className="text-xs uppercase font-bold tracking-wider text-[#686664] font-display">
              Visual Gallery Assets ({gallery.length})
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {gallery.map((g) => (
                <div key={g.id} className="rounded border border-[#E5E5E3] overflow-hidden bg-[#F9F9F8]">
                  <img src={g.thumbnailUrl} alt={g.title} className="h-24 w-full object-cover" />
                  <div className="p-2 text-[10px]">
                    <span className="font-semibold text-[#2B2A29] truncate block">{g.title}</span>
                    <span className="text-[#0083C7] uppercase">{g.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
