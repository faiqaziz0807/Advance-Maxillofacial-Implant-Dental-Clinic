import React from 'react';
import {
  ShieldCheck,
  Microscope,
  Heart,
  Clock,
  Sparkles,
  Award,
  Layers,
  CheckCircle,
} from 'lucide-react';

export const ClinicFeatures: React.FC = () => {
  const features = [
    {
      icon: <Microscope className="w-6 h-6 text-[#328CC1]" />,
      title: '3D CBCT & Digital Guided Surgery',
      description:
        'Sub-millimeter computed tomography scans and virtual surgical guides allow implants to be placed with microscopic accuracy and minimal incisions.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#328CC1]" />,
      title: 'Hospital-Grade Sterilization',
      description:
        'We adhere to strict international ISO infection control protocols with vacuum Class-B autoclaves and sealed disposable surgical kits.',
    },
    {
      icon: <Heart className="w-6 h-6 text-[#328CC1]" />,
      title: 'Painless Gentle Dentistry',
      description:
        'Advanced computer-controlled local anesthesia, computerized apex locators, and gentle micro-surgical techniques ensure zero treatment pain.',
    },
    {
      icon: <Award className="w-6 h-6 text-[#328CC1]" />,
      title: 'Board-Certified Specialists',
      description:
        'All complex procedures are personally performed or overseen by FCPS Maxillofacial Surgeon Dr. Ali Akhtar Khan with over 15 years experience.',
    },
    {
      icon: <Layers className="w-6 h-6 text-[#328CC1]" />,
      title: 'Premium European Implants',
      description:
        'We exclusively utilize certified Grade-4/5 medical titanium implants and high-translucency monolithic zirconia prosthetics with long-term warranty.',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#328CC1]" />,
      title: 'Emergency Care & Flexible Timings',
      description:
        'Convenient clinic operating hours from 11:00 AM to 9:00 PM Monday through Saturday, with dedicated emergency surgical response on Sundays.',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-[#0B3C5D] text-white relative overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-teal-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 border border-white/15">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clinical Standards • Precision Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Setting the Benchmark for Maxillofacial & Dental Care
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            We merge surgical precision with empathetic patient hospitality in Rawalpindi.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:border-[#328CC1] hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:bg-[#328CC1] group-hover:text-white transition-colors">
                {feat.icon}
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">
                {feat.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-teal-300 font-sans">
              15+
            </div>
            <div className="text-xs text-slate-300 mt-1 font-medium">
              Years Clinical Experience
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-teal-300 font-sans">
              5,000+
            </div>
            <div className="text-xs text-slate-300 mt-1 font-medium">
              Successful Smile Restorations
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-teal-300 font-sans">
              98.7%
            </div>
            <div className="text-xs text-slate-300 mt-1 font-medium">
              Implant Integration Rate
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-teal-300 font-sans">
              100%
            </div>
            <div className="text-xs text-slate-300 mt-1 font-medium">
              Sterile Safety Protocols
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
