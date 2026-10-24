import React, { useState } from "react";
import { UserRole, UserSession } from "../types";
import { DEMO_USERS } from "../data/mockData";
import { BrandLogo } from "./BrandLogo";
import { X, Lock, Shield, User, Key, Check } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (session: UserSession) => void;
}

export function LoginModal({ isOpen, onClose, onLoginSuccess }: LoginModalProps) {
  const [email, setEmail] = useState("admin@airrajasthan.com");
  const [password, setPassword] = useState("AdminSecurePassword2026!");
  const [role, setRole] = useState<UserRole>("ADMIN");

  if (!isOpen) return null;

  const handleQuickFill = (targetRole: UserRole) => {
    setRole(targetRole);
    if (targetRole === "ADMIN") {
      setEmail("admin@airrajasthan.com");
      setPassword("AdminSecurePassword2026!");
    } else if (targetRole === "TEAM") {
      setEmail("team@airrajasthan.com");
      setPassword("TeamSecurePassword2026!");
    } else {
      setEmail("client@logistics-partner.com");
      setPassword("ClientSecurePassword2026!");
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const session = DEMO_USERS[role] || {
      userId: `usr_${Date.now()}`,
      name: role === "ADMIN" ? "Rajendra Sharma" : role === "TEAM" ? "Vikram Rathore" : "Karan Singhal",
      email,
      role,
      organization: "AirRajasthan Operations",
    };
    onLoginSuccess(session);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-lg border border-[#E5E5E3] max-w-md w-full p-6 sm:p-8 relative shadow-xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 p-1.5 text-[#8C8A88] hover:text-[#2B2A29] rounded transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2 mb-6">
          <div className="flex justify-center mb-2">
            <BrandLogo size="md" />
          </div>
          <h3 className="text-xl font-bold font-display text-[#2B2A29]">
            Operations & Portal Sign In
          </h3>
          <p className="text-xs text-[#686664]">
            Access role-authorized operations console, quotation desk, or client consignment tracker.
          </p>
        </div>

        {/* Demo Quick-Fill Selector */}
        <div className="mb-6 p-3 bg-[#F9F9F8] border border-[#E5E5E3] rounded space-y-2">
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C8A88] block">
            Demo Test Accounts (Click to Quick-Fill)
          </span>
          <div className="grid grid-cols-3 gap-1.5 text-xs">
            <button
              type="button"
              onClick={() => handleQuickFill("ADMIN")}
              className={`py-1.5 px-2 rounded font-semibold text-center transition-colors cursor-pointer ${
                role === "ADMIN"
                  ? "bg-[#2B2A29] text-white"
                  : "bg-white border border-[#E5E5E3] text-[#2B2A29] hover:border-[#0083C7]"
              }`}
            >
              ADMIN
            </button>
            <button
              type="button"
              onClick={() => handleQuickFill("TEAM")}
              className={`py-1.5 px-2 rounded font-semibold text-center transition-colors cursor-pointer ${
                role === "TEAM"
                  ? "bg-[#0083C7] text-white"
                  : "bg-white border border-[#E5E5E3] text-[#2B2A29] hover:border-[#0083C7]"
              }`}
            >
              TEAM
            </button>
            <button
              type="button"
              onClick={() => handleQuickFill("USER")}
              className={`py-1.5 px-2 rounded font-semibold text-center transition-colors cursor-pointer ${
                role === "USER"
                  ? "bg-[#D39257] text-white"
                  : "bg-white border border-[#E5E5E3] text-[#2B2A29] hover:border-[#0083C7]"
              }`}
            >
              CLIENT
            </button>
          </div>
          <span className="text-[10px] text-[#8C8A88] block">
            {role === "ADMIN" && "Full control: Enquiries, team reassignments, publish CMS live."}
            {role === "TEAM" && "Operations desk: Update workflow status, replies, private notes."}
            {role === "USER" && "Customer portal: Track quotes and message operations desk."}
          </span>
        </div>

        <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
          <div>
            <label className="font-semibold text-[#2B2A29] block mb-1">Corporate Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-[#F9F9F8] border border-[#E5E5E3] rounded focus:outline-none focus:border-[#0083C7] text-xs font-mono"
            />
          </div>
          <div>
            <label className="font-semibold text-[#2B2A29] block mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-[#F9F9F8] border border-[#E5E5E3] rounded focus:outline-none focus:border-[#0083C7] text-xs font-mono"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 bg-[#0083C7] hover:bg-[#0072AD] text-white text-xs uppercase font-semibold tracking-wider rounded transition-colors"
            >
              Sign In to {role} Console
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
