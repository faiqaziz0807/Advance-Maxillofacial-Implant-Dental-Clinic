import React from 'react';
import {
  Award,
  CheckCircle2,
  Calendar,
  Phone,
  MessageCircle,
  Sparkles,
  Shield,
  GraduationCap,
  HeartHandshake,
  Microscope,
} from 'lucide-react';
import { DOCTOR_INFO, CLINIC_INFO } from '../data/clinicData';

interface DoctorProfileProps {
  onOpenAppointment: (reason?: string) => void;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({
  onOpenAppointment,
}) => {
  return (
    <section id="doctor" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Doctor Portrait Image (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-xl overflow-hidden shadow-md border border-gray-100 bg-gray-50">
                <img
                  src={DOCTOR_INFO.image}
                  alt={DOCTOR_INFO.name}
                  className="w-full h-auto object-cover object-center"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-gray-100 shadow-lg flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#0B3C5D] text-white">
                    <Award className="w-5 h-5 text-teal-300" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0B3C5D] uppercase tracking-wide">
                      {DOCTOR_INFO.experience}
                    </div>
                    <div className="text-[10px] text-gray-500 font-medium">
                      Oral & Maxillofacial Implant Specialist
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Credentials (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                <GraduationCap className="w-3.5 h-3.5 text-[#328CC1]" />
                <span>Lead Surgeon • Consultant Maxillofacial</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3C5D] tracking-tight">
                {DOCTOR_INFO.name}
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-[#328CC1] mt-1 uppercase tracking-tight">
                {DOCTOR_INFO.title}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {DOCTOR_INFO.bio}
            </p>

            {/* Philosophy Box */}
            <div className="p-3.5 rounded-xl bg-gray-50 border-l-3 border-[#328CC1] text-xs text-gray-700 italic">
              <span className="font-bold text-[#0B3C5D] not-italic block mb-1">
                Clinical Philosophy:
              </span>
              "{DOCTOR_INFO.philosophy}"
            </div>

            {/* Credentials & Fellowships List */}
            <div className="space-y-2.5">
              <div className="text-[11px] font-bold text-[#0B3C5D] uppercase tracking-wider">
                Key Credentials & Distinctions:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {DOCTOR_INFO.credentials.map((cred, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs text-gray-700 bg-gray-50 p-2.5 rounded-lg border border-gray-100"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialties */}
            <div className="space-y-2">
              <div className="text-[11px] font-bold text-[#0B3C5D] uppercase tracking-wider">
                Specialized Surgical Domains:
              </div>
              <div className="flex flex-wrap gap-2">
                {DOCTOR_INFO.specialties.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-full bg-teal-50 text-[#0B3C5D] text-xs font-semibold border border-teal-100"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenAppointment('Consultation with Dr. Ali Akhtar Khan')}
                className="px-5 py-2.5 rounded-full bg-[#0B3C5D] hover:bg-[#328CC1] text-white font-bold text-xs shadow-xs transition-all flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5 text-white" />
                <span>Book Consultation with Dr. Ali</span>
              </button>

              <a
                href={`https://wa.me/923186966831?text=${encodeURIComponent(
                  'Hello Dr. Ali Akhtar Khan, I would like to consult regarding dental/maxillofacial treatment.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Dr. Ali</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
