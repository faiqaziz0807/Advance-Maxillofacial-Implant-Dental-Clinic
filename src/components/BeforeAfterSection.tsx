import React, { useState, useRef, useCallback } from 'react';
import {
  Sparkles,
  Sliders,
  ChevronLeft,
  ChevronRight,
  Clock,
  UserCheck,
  CheckCircle2,
  Calendar,
  Eye,
} from 'lucide-react';
import { BEFORE_AFTER_CASES } from '../data/clinicData';
import { BeforeAfterCase } from '../types';

interface BeforeAfterSectionProps {
  onOpenAppointment: (procedure?: string) => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({
  onOpenAppointment,
}) => {
  const [selectedCase, setSelectedCase] = useState<BeforeAfterCase>(
    BEFORE_AFTER_CASES[0]
  );
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle drag / mouse / touch events for interactive reveal slider
  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const width = rect.width;
      let pos = (x / width) * 100;
      if (pos < 0) pos = 0;
      if (pos > 100) pos = 100;
      setSliderPosition(pos);
    },
    []
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section
      id="before-after"
      className="py-20 bg-white border-b border-slate-100 relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#328CC1]" />
            <span>Before & After • Clinical Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3C5D] tracking-tight">
            Before & After Treatment Gallery
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Real clinical smile transformations performed by{' '}
            <span className="font-semibold text-gray-900">Dr. Ali Akhtar Khan</span>. Drag
            the interactive slider to compare clinical precision before and after restorative care.
          </p>
        </div>

        {/* Interactive Comparison Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Interactive Split Slider (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100">
              <div
                ref={containerRef}
                className="relative h-[340px] sm:h-[420px] rounded-lg overflow-hidden cursor-ew-resize select-none touch-none bg-slate-900"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                id="before-after-interactive-viewer"
              >
                {/* AFTER IMAGE (Underneath, Full Width) */}
                <img
                  src={selectedCase.afterImage}
                  alt={`After Treatment - ${selectedCase.title}`}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />

                {/* BEFORE IMAGE (Clipped with polygon) */}
                <div
                  className="absolute inset-0 w-full h-full overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <img
                    src={selectedCase.beforeImage}
                    alt={`Before Treatment - ${selectedCase.title}`}
                    className="absolute inset-0 w-full h-full object-cover object-center filter saturate-90 brightness-95"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Badges / Labels */}
                <div className="absolute bottom-3 left-3 z-20">
                  <span className="px-2.5 py-1 rounded text-[10px] sm:text-xs font-bold bg-black/70 text-white tracking-wider uppercase">
                    Before
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 z-20">
                  <span className="px-2.5 py-1 rounded text-[10px] sm:text-xs font-bold bg-[#328CC1] text-white tracking-wider uppercase">
                    After 2 Weeks
                  </span>
                </div>

                {/* Draggable Divider Line & Handle */}
                <div
                  className="absolute top-0 bottom-0 z-30 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-1 bg-white h-full shadow-[0_0_10px_rgba(0,0,0,0.5)] relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-[#328CC1] pointer-events-auto cursor-grab active:cursor-grabbing">
                      <Sliders className="w-3.5 h-3.5 text-[#328CC1] rotate-90" />
                    </div>
                  </div>
                </div>

                {/* Hint Overlay */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                  <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-medium flex items-center gap-1.5">
                    <Sliders className="w-3 h-3 text-teal-300" />
                    <span>Drag handle left or right</span>
                  </div>
                </div>
              </div>

              {/* Slider quick preset buttons */}
              <div className="flex items-center justify-between px-2 pt-3 text-xs text-gray-500">
                <button
                  onClick={() => setSliderPosition(10)}
                  className="hover:text-[#328CC1] underline underline-offset-4"
                >
                  Before (10%)
                </button>
                <button
                  onClick={() => setSliderPosition(50)}
                  className="hover:text-[#328CC1] font-semibold"
                >
                  Split View (50%)
                </button>
                <button
                  onClick={() => setSliderPosition(90)}
                  className="hover:text-[#328CC1] underline underline-offset-4"
                >
                  After (90%)
                </button>
              </div>
            </div>
          </div>

          {/* Case Details & Selector List (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Active Case Card Info */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 text-[11px] font-bold uppercase">
                <CheckCircle2 className="w-3 h-3 text-[#328CC1]" />
                <span>{selectedCase.treatmentType}</span>
              </div>

              <h3 className="text-xl font-bold text-[#0B3C5D]">
                {selectedCase.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {selectedCase.description}
              </p>

              <div className="pt-2 border-t border-gray-100 space-y-2 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#328CC1]" />
                  <span className="font-semibold text-gray-900">Treatment Duration:</span>{' '}
                  {selectedCase.duration}
                </div>
                {selectedCase.patientAge && (
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#328CC1]" />
                    <span className="font-semibold text-gray-900">Patient:</span>{' '}
                    {selectedCase.patientAge}
                  </div>
                )}
              </div>

              {/* Doctor Clinical Notes */}
              <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100 text-xs text-gray-700 space-y-1">
                <div className="font-bold text-[#0B3C5D] flex items-center gap-1.5">
                  <span>Dr. Ali Akhtar Khan's Clinical Note:</span>
                </div>
                <p className="italic text-gray-500">"{selectedCase.doctorNotes}"</p>
              </div>

              <button
                onClick={() => onOpenAppointment(selectedCase.treatmentType)}
                className="w-full py-2.5 px-4 rounded-lg bg-[#328CC1] hover:bg-[#0B3C5D] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Similar Treatment Consultation</span>
              </button>
            </div>

            {/* Case Selection Tabs */}
            <div className="space-y-2">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-1">
                Select Clinical Case:
              </div>
              <div className="grid grid-cols-3 gap-2">
                {BEFORE_AFTER_CASES.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedCase(item);
                      setSliderPosition(50);
                    }}
                    className={`p-2.5 rounded-lg text-left border transition-all text-xs flex flex-col justify-between ${
                      selectedCase.id === item.id
                        ? 'border-[#328CC1] bg-teal-50/70 shadow-xs'
                        : 'border-gray-200 bg-white hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-bold text-[#0B3C5D] line-clamp-1">
                      Case 0{idx + 1}
                    </span>
                    <span className="text-[10px] text-gray-500 line-clamp-1 mt-0.5">
                      {item.treatmentType}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
