import React from 'react';
import {
  X,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Calendar,
  Phone,
  MessageCircle,
  ShieldCheck,
  Activity,
  Sparkles,
} from 'lucide-react';
import { Service } from '../types';
import { CLINIC_INFO } from '../data/clinicData';

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
  onBook: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBook,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col overflow-hidden animate-scaleUp">
        {/* Modal Header with Image */}
        <div className="relative h-44 sm:h-52 bg-slate-900 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D] via-[#0B3C5D]/60 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="px-2.5 py-0.5 rounded bg-teal-500/80 text-white text-[11px] font-bold uppercase tracking-wider">
              {service.category.toUpperCase()}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold mt-1">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-700">
          {/* Full Description */}
          <div>
            <h3 className="font-bold text-sm text-[#0B3C5D] mb-1.5">Overview</h3>
            <p className="leading-relaxed text-slate-600 text-sm">
              {service.fullDescription}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-[#F4F6F9] border border-slate-200">
            <div>
              <div className="text-slate-500 font-medium">Session Duration:</div>
              <div className="font-bold text-[#0B3C5D] mt-0.5">{service.duration}</div>
            </div>
            <div>
              <div className="text-slate-500 font-medium">Estimated Recovery:</div>
              <div className="font-bold text-[#0B3C5D] mt-0.5">{service.recoveryTime}</div>
            </div>
          </div>

          {/* Key Clinical Benefits */}
          <div>
            <h3 className="font-bold text-sm text-[#0B3C5D] mb-2">Key Clinical Benefits</h3>
            <div className="space-y-2">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Clinical Procedure */}
          <div>
            <h3 className="font-bold text-sm text-[#0B3C5D] mb-2">
              Procedure Workflow & Protocol
            </h3>
            <div className="space-y-2.5">
              {service.procedureSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-50 border border-slate-200/70"
                >
                  <div className="w-5 h-5 rounded-full bg-[#0B3C5D] text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="text-slate-700 leading-snug">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] text-slate-500">
            Performed by <strong className="text-slate-800">Dr. Ali Akhtar Khan</strong>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={`https://wa.me/923186966831?text=${encodeURIComponent(
                `Hello Dr. Ali Akhtar Khan, I would like to inquire about ${service.title}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </a>

            <button
              onClick={() => {
                const title = service.title;
                onClose();
                onBook(title);
              }}
              className="py-2.5 px-4 rounded-xl bg-[#0B3C5D] hover:bg-[#328CC1] text-white font-bold text-xs shadow-md transition-colors"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
