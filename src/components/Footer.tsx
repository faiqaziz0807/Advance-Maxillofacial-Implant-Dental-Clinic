import React from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ExternalLink,
  ShieldCheck,
  Award,
  ChevronRight,
  Heart,
} from 'lucide-react';
import { Logo } from './Logo';
import { CLINIC_INFO, SERVICES_DATA } from '../data/clinicData';

interface FooterProps {
  onOpenAppointment: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointment }) => {
  return (
    <footer className="bg-[#062135] text-white pt-16 pb-12 border-t border-white/10" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Clinic Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Logo in footer */}
            <a href="#hero" className="inline-block">
              <Logo variant="white" size="md" />
            </a>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Premier specialized centre for Oral & Maxillofacial Surgery, Precision Titanium Dental Implants, and Advanced Aesthetic Dentistry in Rawalpindi, headed by Dr. Ali Akhtar Khan.
            </p>

            <div className="flex flex-col gap-2 pt-2 text-xs">
              <a
                href="tel:+923186966831"
                className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-200 font-semibold"
              >
                <Phone className="w-4 h-4" />
                <span>+92 318 6966831</span>
              </a>
              <a
                href={`https://wa.me/923186966831?text=${encodeURIComponent(
                  'Hello Dr. Ali Akhtar Khan, I would like to book a consultation.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +92 318 6966831</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#hero" className="hover:text-teal-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-teal-300 transition-colors">
                  Before & After
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-300 transition-colors">
                  Specialized Services
                </a>
              </li>
              <li>
                <a href="#doctor" className="hover:text-teal-300 transition-colors">
                  About Dr. Ali Akhtar Khan
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-teal-300 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-teal-300 transition-colors">
                  Patient Reviews
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-teal-300 transition-colors">
                  Dental Tips & Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-300 transition-colors">
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wider">
              Treatments & Surgeries
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {SERVICES_DATA.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onOpenAppointment(srv.title)}
                    className="hover:text-teal-300 transition-colors text-left flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-teal-400 flex-shrink-0" />
                    <span className="line-clamp-1">{srv.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinic Location & Timings (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wider">
              Location & Hours
            </h4>

            <div className="text-xs text-slate-300 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{CLINIC_INFO.address.fullFormatted}</span>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Mon – Sat: 11:00 AM – 09:00 PM</p>
                  <p className="text-slate-400 text-[11px]">Sunday: Emergency / Appointments</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-teal-300 hover:text-white font-semibold underline underline-offset-4"
                >
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Advance Maxillofacial Implant & Dental Clinic. All Rights Reserved.
          </div>

          <div className="flex items-center gap-1 text-slate-400 text-[11px]">
            <span>Crafted with medical excellence for</span>
            <strong className="text-slate-200">Dr. Ali Akhtar Khan</strong>
          </div>
        </div>
      </div>
    </footer>
  );
};
