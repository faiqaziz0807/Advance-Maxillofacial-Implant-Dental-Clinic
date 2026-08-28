import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FloatingActionsProps {
  onOpenAppointment: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenAppointment,
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3" id="floating-actions-container">
      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-slate-800/80 hover:bg-slate-900 text-white backdrop-blur-md shadow-lg transition-all hover:scale-105 active:scale-95"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Direct WhatsApp Instant Consultation Button */}
      <a
        href={`https://wa.me/923186966831?text=${encodeURIComponent(
          'Hello Dr. Ali Akhtar Khan, I would like to book a dental/implant appointment.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-950/30 hover:scale-105 active:scale-95 transition-all group"
        aria-label="Chat on WhatsApp with Dr. Ali Akhtar Khan"
        id="floating-whatsapp-btn"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 sm:max-w-none">
          WhatsApp Doctor
        </span>
      </a>

      {/* Quick Call Button on Mobile */}
      <a
        href="tel:+923186966831"
        className="sm:hidden flex items-center justify-center p-3 rounded-full bg-[#0B3C5D] text-white shadow-xl hover:scale-105 active:scale-95 transition-all"
        aria-label="Call clinic directly"
        id="floating-call-btn"
      >
        <Phone className="w-5 h-5 text-teal-300" />
      </a>
    </div>
  );
};
