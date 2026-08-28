import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { ServicesSection } from './components/ServicesSection';
import { DoctorProfile } from './components/DoctorProfile';
import { ClinicFeatures } from './components/ClinicFeatures';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { AppointmentModal } from './components/AppointmentModal';
import { FloatingActions } from './components/FloatingActions';
import { Service } from './types';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [appointmentServicePreselect, setAppointmentServicePreselect] =
    useState<string | undefined>(undefined);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenAppointment = (serviceName?: string) => {
    setAppointmentServicePreselect(serviceName);
    setIsAppointmentOpen(true);
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F9] text-slate-800 font-sans selection:bg-[#328CC1] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 max-w-md p-4 rounded-xl bg-slate-900 text-white shadow-2xl border border-teal-500/50 flex items-start gap-3 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
          <div className="flex-1 text-xs leading-relaxed">{toastMessage}</div>
          <button
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Navigation Header */}
      <Navbar
        onOpenAppointment={handleOpenAppointment}
        onSelectService={(service) => setSelectedService(service)}
      />

      {/* Hero Background Slider (Auto-slides every 4 seconds) */}
      <main className="flex-1">
        <HeroSlider onOpenAppointment={() => handleOpenAppointment()} />

        {/* Before & After Treatment Interactive Comparison (Positioned right below Hero) */}
        <BeforeAfterSection onOpenAppointment={handleOpenAppointment} />

        {/* Specialized Dental & Maxillofacial Services */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onOpenAppointment={handleOpenAppointment}
        />

        {/* About Dr. Ali Akhtar Khan */}
        <DoctorProfile onOpenAppointment={handleOpenAppointment} />

        {/* Why Choose Us & Clinical Technology Features */}
        <ClinicFeatures />

        {/* Patient Reviews & Verified Testimonials */}
        <TestimonialsSection />

        {/* Educational Dental Tips & Blog */}
        <BlogSection onOpenAppointment={handleOpenAppointment} />

        {/* Location (Avalon Plaza Saddar Rawalpindi), Google Maps & Contact */}
        <LocationContactSection
          onFormSubmittedNotification={(msg) => showToast(msg)}
        />
      </main>

      {/* Global Footer */}
      <Footer onOpenAppointment={handleOpenAppointment} />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBook={(srvName) => handleOpenAppointment(srvName)}
      />

      {/* Instant Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        initialService={appointmentServicePreselect}
        onSuccess={(msg) => showToast(msg)}
      />

      {/* Floating WhatsApp & Call Buttons */}
      <FloatingActions onOpenAppointment={() => handleOpenAppointment()} />
    </div>
  );
}
