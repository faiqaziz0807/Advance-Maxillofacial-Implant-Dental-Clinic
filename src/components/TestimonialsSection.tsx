import React, { useState } from 'react';
import {
  Star,
  Quote,
  CheckCircle,
  MapPin,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/clinicData';

export const TestimonialsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filtered =
    filter === 'all'
      ? TESTIMONIALS_DATA
      : TESTIMONIALS_DATA.filter((t) =>
          t.treatment.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <section id="reviews" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200/60">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Verified Patient Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3C5D] tracking-tight">
            Trusted by Patients Across Rawalpindi & Islamabad
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Read verified feedback from patients who entrusted their smiles and surgical care to Dr. Ali Akhtar Khan.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-5 sm:p-6 rounded-xl border border-gray-100 shadow-sm hover:border-[#328CC1] transition-all relative flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified Patient</span>
                  </div>
                </div>

                {/* Treatment Tag */}
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-gray-50 border border-gray-100 text-[11px] font-semibold text-[#0B3C5D]">
                  Treatment: {testimonial.treatment}
                </div>

                {/* Patient Review Text */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
              </div>

              {/* Patient Info Footer */}
              <div className="pt-3.5 mt-3.5 border-t border-gray-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 flex items-center gap-1 text-[11px] mt-0.5">
                    <MapPin className="w-3 h-3 text-[#328CC1]" />
                    <span>{testimonial.location}</span>
                  </div>
                </div>

                <div className="text-gray-400 text-[11px]">
                  {testimonial.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Trust Badge */}
        <div className="mt-12 p-5 rounded-xl bg-gray-50 border border-gray-100 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-white shadow-xs border border-gray-200 flex items-center justify-center font-bold text-base text-[#0B3C5D]">
              5.0
            </div>
            <div>
              <div className="font-bold text-gray-900 text-xs sm:text-sm">
                Highest Rated Maxillofacial & Dental Clinic
              </div>
              <div className="text-xs text-gray-500 flex items-center justify-center sm:justify-start gap-1 mt-0.5">
                <span className="text-amber-500 font-bold">★★★★★</span>
                <span>Based on local Rawalpindi patient reviews</span>
              </div>
            </div>
          </div>

          <a
            href="https://share.google/DlbcPK9rfZucrXzcn"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#0B3C5D] hover:bg-[#328CC1] text-white font-bold text-xs transition-colors shadow-xs whitespace-nowrap"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};
