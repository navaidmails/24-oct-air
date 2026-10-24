import React, { useState } from "react";
import {
  UserSession,
  Inquiry,
  EnquiryStatus,
  ServiceItem,
  EventItem,
  GalleryItem,
} from "./types";
import {
  INITIAL_SERVICES,
  INITIAL_EVENTS,
  INITIAL_GALLERY,
  INITIAL_ENQUIRIES,
} from "./data/mockData";
import { RouterProvider, useRouter } from "./router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { InquiryModal } from "./components/InquiryModal";
import { LoginModal } from "./components/LoginModal";
import { DashboardView } from "./components/DashboardView";

// Eight Final Public Pages + 404 Not Found
import { HomeView } from "./views/HomeView";
import { OurVisionView } from "./views/OurVisionView";
import { ServicesView } from "./views/ServicesView";
import { RouteScheduleView } from "./views/RouteScheduleView";
import { TheHubView } from "./views/TheHubView";
import { PartnershipView } from "./views/PartnershipView";
import { OurTeamView } from "./views/OurTeamView";
import { ContactView } from "./views/ContactView";
import { NotFoundView } from "./views/NotFoundView";

function AppContent() {
  const { currentPath, navigate } = useRouter();
  const [session, setSession] = useState<UserSession | null>(null);

  // In-memory collections for prototype demonstration
  const [enquiries, setEnquiries] = useState<Inquiry[]>(INITIAL_ENQUIRIES);
  const [services, setServices] = useState<ServiceItem[]>(INITIAL_SERVICES);
  const [events, setEvents] = useState<EventItem[]>(INITIAL_EVENTS);
  const [gallery, setGallery] = useState<GalleryItem[]>(INITIAL_GALLERY);

  // Inquiry modal state
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryContext, setInquiryContext] = useState<string>("");

  // Dev preview login modal (developer demonstration only)
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleOpenInquiry = (context?: string) => {
    setInquiryContext(context || "");
    setIsInquiryOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryOpen(false);
    setInquiryContext("");
  };

  // Inquiry submission handler (in-memory state update)
  const handleAddInquiry = (newInquiry: Inquiry) => {
    setEnquiries((prev) => [newInquiry, ...prev]);
  };

  // Dashboard handlers (development preview only)
  const handleUpdateEnquiryStatus = (id: string, status: EnquiryStatus) => {
    setEnquiries((prev) =>
      prev.map((e) =>
        e.id === id
          ? {
              ...e,
              status,
              updatedAt: new Date().toLocaleTimeString("en-IN") + " IST",
            }
          : e
      )
    );
  };

  const handleAddEnquiryReply = (id: string, message: string) => {
    if (!session) return;
    const newReply = {
      id: `rep_${Date.now()}`,
      enquiryId: id,
      senderRole: session.role,
      senderName: session.name,
      message,
      createdAt:
        new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST",
    };
    setEnquiries((prev) =>
      prev.map((e) =>
        e.id === id
          ? {
              ...e,
              replies: [...e.replies, newReply],
              updatedAt: new Date().toLocaleTimeString("en-IN") + " IST",
            }
          : e
      )
    );
  };

  const handleAddEnquiryNote = (id: string, note: string) => {
    if (!session || session.role === "USER") return;
    const newNote = {
      id: `note_${Date.now()}`,
      enquiryId: id,
      authorName: session.name,
      note,
      createdAt:
        new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST",
    };
    setEnquiries((prev) =>
      prev.map((e) =>
        e.id === id
          ? {
              ...e,
              internalNotes: [...e.internalNotes, newNote],
              updatedAt: new Date().toLocaleTimeString("en-IN") + " IST",
            }
          : e
      )
    );
  };

  const handlePublishService = (id: string) => {
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: "PUBLISHED" } : s))
    );
  };

  const handlePublishEvent = (id: string) => {
    setEvents((prev) =>
      prev.map((ev) => (ev.id === id ? { ...ev, status: "PUBLISHED" } : ev))
    );
  };

  const handlePublishGallery = (id: string) => {
    setGallery((prev) =>
      prev.map((g) => (g.id === id ? { ...g, status: "PUBLISHED" } : g))
    );
  };

  // Route View Resolver
  const renderCurrentView = () => {
    // 1. Home
    if (currentPath === "/") {
      return <HomeView onOpenInquiry={handleOpenInquiry} />;
    }

    // 2. Our Vision (/our-vision and alias /about)
    if (currentPath === "/our-vision" || currentPath === "/about") {
      return <OurVisionView onOpenInquiry={handleOpenInquiry} />;
    }

    // 3. Services
    if (currentPath === "/services") {
      return <ServicesView onOpenInquiry={handleOpenInquiry} />;
    }

    // 4. Route & Schedule
    if (currentPath === "/route-schedule") {
      return <RouteScheduleView onOpenInquiry={handleOpenInquiry} />;
    }

    // 5. The Hub
    if (currentPath === "/the-hub") {
      return <TheHubView onOpenInquiry={handleOpenInquiry} />;
    }

    // 6. Partnership
    if (currentPath === "/partnership") {
      return <PartnershipView onOpenInquiry={handleOpenInquiry} />;
    }

    // 7. Our Team
    if (currentPath === "/our-team") {
      return <OurTeamView onOpenInquiry={handleOpenInquiry} />;
    }

    // 8. Contact Us
    if (currentPath === "/contact") {
      return <ContactView onSubmitInquiry={handleAddInquiry} />;
    }

    // Developer Preview Console
    if (currentPath === "/dashboard") {
      if (!session) {
        return (
          <div className="py-24 text-center space-y-4 max-w-md mx-auto px-4">
            <h2 className="text-2xl font-bold font-display text-[#1C1B1A]">
              Preview Console Authentication
            </h2>
            <p className="text-xs text-[#686664] leading-relaxed">
              This dashboard is an in-memory prototype demonstration for internal
              review. Please sign in with a demo staff account.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsLoginOpen(true)}
                className="px-6 py-2.5 bg-[#0083C7] text-white text-xs uppercase font-semibold rounded hover:bg-[#0072AD] transition-colors"
              >
                Open Demo Sign-In
              </button>
            </div>
          </div>
        );
      }

      return (
        <DashboardView
          session={session}
          enquiries={enquiries}
          services={services}
          events={events}
          gallery={gallery}
          onUpdateEnquiryStatus={handleUpdateEnquiryStatus}
          onAddEnquiryReply={handleAddEnquiryReply}
          onAddEnquiryNote={handleAddEnquiryNote}
          onPublishService={handlePublishService}
          onPublishEvent={handlePublishEvent}
          onPublishGallery={handlePublishGallery}
        />
      );
    }

    // 404 Not Found for any unknown route
    return <NotFoundView />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9F8] text-[#2B2A29]">
      {/* 7X-inspired Public Navigation */}
      <Navbar
        session={session}
        onOpenInquiry={handleOpenInquiry}
        onLogout={() => {
          setSession(null);
          if (currentPath === "/dashboard") navigate("/");
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 focus:outline-none" id="main-content">
        {renderCurrentView()}
      </main>

      {/* 7X-inspired Footer */}
      <Footer
        onOpenInquiry={handleOpenInquiry}
        onOpenDevLogin={() => setIsLoginOpen(true)}
      />

      {/* Shared Inquiry Modal Dialog */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={handleCloseInquiry}
        onSubmitInquiry={handleAddInquiry}
        initialContext={inquiryContext}
      />

      {/* Developer Preview Login Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={(newSession) => {
          setSession(newSession);
          navigate("/dashboard");
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
