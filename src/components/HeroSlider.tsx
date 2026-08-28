import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Calendar,
  ShieldCheck,
  Award,
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle,
  MapPin,
} from 'lucide-react';
import { HERO_SLIDES, CLINIC_INFO } from '../data/clinicData';

interface HeroSliderProps {
  onOpenAppointment: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenAppointment }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 4 seconds (4000ms) with smooth transitions
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[90vh] lg:min-h-[94vh] flex items-center justify-center overflow-hidden bg-[#062135]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Clinic Introduction & Highlights"
    >
      {/* Background Images Carousel with crossfade */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } transition-transform duration-[6000ms]`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            {/* Deep Medical Blue & Dark Gradient Overlays for High Legibility & Contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#062135]/95 via-[#0B3C5D]/85 to-[#062135]/75" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#062135] via-transparent to-[#062135]/60" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-3xl space-y-6 text-white">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-teal-300">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>Saddar, Rawalpindi • Specialized Implant & Jaw Surgery</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Advanced Dental Care & <br />
            <span className="text-[#328CC1]">
              Maxillofacial Excellence
            </span>{' '}
            in Rawalpindi
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg text-gray-200 font-normal leading-relaxed max-w-2xl">
            Led by <span className="text-white font-bold underline decoration-[#328CC1] decoration-2 underline-offset-4">Dr. Ali Akhtar Khan</span> — Restoring Confidence & Health through Precision Implants and Specialized Care in Rawalpindi.
          </p>

          {/* Key Value Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs sm:text-sm text-gray-200">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
              <span>3D Precision Implants</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
              <span>Maxillofacial Surgery</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
              <span>Sterilized Clinical Suite</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-3">
            {/* Book Appointment CTA */}
            <button
              onClick={onOpenAppointment}
              className="bg-[#328CC1] text-white px-7 py-3 rounded-lg font-bold text-sm shadow-lg hover:bg-white hover:text-[#0B3C5D] transition-all active:scale-95 flex items-center gap-2"
              id="hero-modal-cta"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            {/* View Results / Before-After CTA */}
            <a
              href="#before-after"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-lg font-bold text-sm hover:bg-white/20 transition-all flex items-center gap-2"
            >
              <Award className="w-4 h-4 text-teal-300" />
              <span>View Results</span>
            </a>

            {/* Direct WhatsApp CTA */}
            <a
              href={`https://wa.me/923186966831?text=${encodeURIComponent(
                'Hello Dr. Ali Akhtar Khan, I would like to book an appointment at Advance Maxillofacial Implant & Dental Clinic.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all"
              id="hero-whatsapp-cta"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Doctor</span>
            </a>
          </div>

          {/* Clinic Location Quick Anchor */}
          <div className="pt-2 flex items-center gap-2 text-xs text-slate-300">
            <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0" />
            <span>1st Floor, Avalon Plaza, near Cantonment Board Office, Saddar, Rawalpindi</span>
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls & Progress */}
      <div className="absolute bottom-6 left-0 right-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Slide Indicators */}
        <div className="flex items-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide
                  ? 'w-8 bg-teal-400'
                  : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
          <span className="text-white/60 text-xs ml-2 font-mono">
            0{currentSlide + 1} / 0{HERO_SLIDES.length}
          </span>
        </div>

        {/* Prev / Next Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 transition-all"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 transition-all"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
