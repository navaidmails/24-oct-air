export type UserRole = "ADMIN" | "TEAM" | "USER";

export interface UserSession {
  userId: string;
  name: string;
  email: string;
  role: UserRole;
  organization?: string;
}

export type PageRoute =
  | "/"
  | "/our-vision"
  | "/services"
  | "/route-schedule"
  | "/the-hub"
  | "/partnership"
  | "/our-team"
  | "/contact"
  | "/about" // Legacy alias to /our-vision
  | "/dashboard"; // Development preview dashboard

export type InquiryCategory =
  | "Shipper"
  | "CHA"
  | "Freight Forwarder"
  | "Airline Operator";

export type EnquiryStatus =
  | "NEW"
  | "ASSIGNED"
  | "IN_PROGRESS"
  | "AWAITING_CUSTOMER"
  | "CLOSED";

export interface EnquiryReply {
  id: string;
  enquiryId: string;
  senderRole: UserRole;
  senderName: string;
  message: string;
  createdAt: string;
}

export interface EnquiryNote {
  id: string;
  enquiryId: string;
  authorName: string;
  note: string;
  createdAt: string;
}

/**
 * Standard AirRajasthan™ Inquiry model based on client specifications:
 * - Name
 * - Company Name
 * - Mobile Number (with international country code)
 * - "What you are" category (Shipper, CHA, Freight Forwarder, Airline Operator)
 * - Inquiry message (max 300 words)
 * - Optional CTA context (e.g., specific service or partnership track)
 */
export interface Inquiry {
  id: string;
  referenceNumber: string;
  name: string;
  companyName: string;
  countryCode: string;
  mobile: string;
  category: InquiryCategory;
  message: string;
  context?: string;
  status: EnquiryStatus;
  createdAt: string;
  updatedAt: string;
  replies: EnquiryReply[];
  internalNotes: EnquiryNote[];
  // Legacy optional fields for backward compatibility with mock/dashboard components
  email?: string;
  phone?: string;
  contactPerson?: string;
  serviceType?: string;
  origin?: string;
  destination?: string;
  estimatedWeightKg?: number;
  dimensionsCm?: string;
  specialRequirements?: string;
}

export interface TrackingMilestone {
  code: string;
  description: string;
  location: string;
  timestamp: string;
  completed: boolean;
}

export interface TrackingRecord {
  awbNumber: string;
  status: "BOOKED" | "RECEIVED" | "CUSTOMS_CLEARED" | "IN_TRANSIT" | "DELIVERED";
  statusText: string;
  origin: string;
  destination: string;
  flightNumber: string;
  aircraft: string;
  pieces: number;
  weightKg: number;
  temperature?: string;
  estimatedArrival: string;
  milestones: TrackingMilestone[];
}

// Alias for components referencing Enquiry
export type Enquiry = Inquiry;

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  icon: string;
  imageUrl: string;
  order: number;
  status: "DRAFT" | "PUBLISHED";
  aircraftCategory?: string;
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  location: string;
  eventDate: string;
  isPast: boolean;
  status: "DRAFT" | "PUBLISHED";
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "AIRCRAFT" | "OPERATIONS" | "WAREHOUSE" | "COLD_CHAIN" | "CHARTER";
  imageUrl: string;
  thumbnailUrl: string;
  altText: string;
  description: string;
  order: number;
  status: "DRAFT" | "PUBLISHED";
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  roleCategory: string;
  bio: string;
  isSampleProfile: boolean;
}
