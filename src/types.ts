export interface Service {
  id: string;
  title: string;
  category: 'implant' | 'surgery' | 'cosmetic' | 'general' | 'ortho';
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  procedureSteps: string[];
  duration: string;
  recoveryTime: string;
  iconName: string;
  image: string;
  popular?: boolean;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  treatmentType: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  duration: string;
  patientAge?: string;
  doctorNotes: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  treatment: string;
  date: string;
  comment: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
}

export interface DoctorInfo {
  name: string;
  title: string;
  credentials: string[];
  specialties: string[];
  experience: string;
  bio: string;
  philosophy: string;
  memberships: string[];
  image: string;
}

export interface ClinicDetails {
  name: string;
  tagline: string;
  leadDoctor: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    postalCode: string;
    country: string;
    fullFormatted: string;
  };
  googleMapsUrl: string;
  operatingHours: {
    days: string;
    hours: string;
  }[];
}
