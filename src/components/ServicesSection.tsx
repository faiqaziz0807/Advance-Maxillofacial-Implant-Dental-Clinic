import React, { useState } from 'react';
import {
  ShieldCheck,
  Activity,
  Sparkles,
  Smile,
  CheckCircle2,
  Scissors,
  ArrowRight,
  Clock,
  HeartHandshake,
  Check,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/clinicData';
import { Service } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: Service) => void;
  onOpenAppointment: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenAppointment,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Specialized Services' },
    { id: 'implant', name: 'Dental Implants' },
    { id: 'surgery', name: 'Maxillofacial & Jaw Surgery' },
    { id: 'cosmetic', name: 'Cosmetic & Whitening' },
    { id: 'ortho', name: 'Orthodontics & Checkups' },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#328CC1]" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#328CC1]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#328CC1]" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-[#328CC1]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-[#328CC1]" />;
      case 'Scissors':
        return <Scissors className="w-5 h-5 text-[#328CC1]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#328CC1]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#F4F6F9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#328CC1]" />
              <span>Specialized Care • Clinical Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3C5D] tracking-tight">
              Specialized Dental & Maxillofacial Services
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl">
              Precision surgical protocols, painless restorative techniques, and comprehensive smile aesthetic transformations in Rawalpindi.
            </p>
          </div>

          <button
            onClick={() => onOpenAppointment()}
            className="self-start md:self-auto px-5 py-2.5 rounded-full bg-[#0B3C5D] text-white font-bold text-xs hover:bg-[#328CC1] transition-all shadow-xs flex items-center gap-2"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#0B3C5D] text-white shadow-xs'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:border-[#328CC1] hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                
                {service.popular && (
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-[#328CC1] text-white text-[10px] font-bold uppercase tracking-wider shadow-xs">
                    Featured
                  </div>
                )}

                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm p-2 rounded-full shadow-xs flex items-center justify-center">
                  {getServiceIcon(service.iconName)}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-[#0B3C5D] group-hover:text-[#328CC1] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Key Benefits List */}
                <div className="space-y-1.5 pt-2 border-t border-gray-100 text-[11px] text-gray-600">
                  {service.benefits.slice(0, 2).map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex-1 py-2 px-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#0B3C5D] font-bold text-xs transition-colors text-center"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onOpenAppointment(service.title)}
                    className="py-2 px-4 rounded-lg bg-[#0B3C5D] hover:bg-[#328CC1] text-white font-bold text-xs transition-colors shadow-xs"
                    title="Book this treatment"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
