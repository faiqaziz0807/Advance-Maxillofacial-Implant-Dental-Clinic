import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ExternalLink,
  Mail,
  Send,
  CheckCircle2,
  Calendar,
  ChevronDown,
  Navigation,
} from 'lucide-react';
import { CLINIC_INFO, CLINIC_FAQS, SERVICES_DATA } from '../data/clinicData';

interface LocationContactSectionProps {
  onFormSubmittedNotification: (msg: string) => void;
}

export const LocationContactSection: React.FC<LocationContactSectionProps> = ({
  onFormSubmittedNotification,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: 'Dental Implants & Prosthetics',
    date: '',
    time: 'Morning (11:00 AM - 02:00 PM)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Trigger success message
    setSubmitted(true);
    onFormSubmittedNotification(
      `Thank you ${formData.name}! Your appointment request for ${formData.treatment} has been received. Our clinic team will call you at ${formData.phone} to confirm.`
    );
  };

  const handleSendWhatsApp = () => {
    const text = `*New Dental Appointment Request*\n\n*Name:* ${formData.name || 'Patient'}\n*Phone:* ${formData.phone || 'N/A'}\n*Treatment:* ${formData.treatment}\n*Preferred Date:* ${formData.date || 'Earliest Available'}\n*Preferred Time:* ${formData.time}\n*Message:* ${formData.message || 'None'}`;
    const url = `https://wa.me/923186966831?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#328CC1]" />
            <span>Visit Us • Saddar Rawalpindi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3C5D] tracking-tight">
            Clinic Location & Appointments
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Conveniently located in Avalon Plaza near the Cantonment Board Office in Saddar, Rawalpindi. We welcome local and overseas patients.
          </p>
        </div>

        {/* Contact & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Clinic Details & Map Action (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-50 text-[#328CC1] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0B3C5D]">
                    Clinic Address
                  </h3>
                  <p className="text-xs text-gray-600 font-medium mt-1 leading-relaxed">
                    {CLINIC_INFO.address.fullFormatted}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-1">
                    Landmark: Near Cantonment Board Office, Saddar
                  </p>
                </div>
              </div>

              {/* Direct Google Maps Action Button */}
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-[#328CC1] hover:bg-[#0B3C5D] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all"
                id="google-maps-btn"
              >
                <Navigation className="w-4 h-4 text-white" />
                <span>Open in Google Maps / Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-80" />
              </a>
            </div>

            {/* Direct Contact Channels Card */}
            <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
              <h3 className="text-xs font-bold text-[#0B3C5D] uppercase tracking-wider">
                Direct Contact & Inquiries
              </h3>

              <div className="space-y-2.5">
                {/* Phone Call */}
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-[#328CC1] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-50 text-[#0B3C5D] group-hover:bg-[#0B3C5D] group-hover:text-white transition-colors flex items-center justify-center">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-400 font-medium">Direct Call</div>
                      <div className="text-xs font-bold text-[#0B3C5D]">{CLINIC_INFO.phone}</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-[#328CC1] group-hover:underline">Call Now</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/923186966831?text=${encodeURIComponent(
                    'Hello Dr. Ali Akhtar Khan, I would like to book a consultation at Advance Maxillofacial Implant & Dental Clinic.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-emerald-500 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors flex items-center justify-center">
                      <MessageCircle className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-400 font-medium">WhatsApp Booking</div>
                      <div className="text-xs font-bold text-gray-900">{CLINIC_INFO.whatsapp}</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 group-hover:underline">Chat 24/7</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-100 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0B3C5D] uppercase tracking-wider">
                <Clock className="w-4 h-4 text-[#328CC1]" />
                <span>Operating Hours</span>
              </div>
              <div className="space-y-2 text-xs">
                {CLINIC_INFO.operatingHours.map((h, i) => (
                  <div key={i} className="flex justify-between py-1 border-b border-gray-100 last:border-0">
                    <span className="text-gray-500 font-medium">{h.days}</span>
                    <span className="text-[#0B3C5D] font-bold">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Appointment Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm" id="appointment-form-card">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-[#0B3C5D]">
                Book Your Clinical Consultation
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Fill out the form below for priority scheduling with Dr. Ali Akhtar Khan.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-emerald-900">
                  Appointment Request Sent Successfully!
                </h4>
                <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                  Thank you <strong>{formData.name}</strong>. Our clinical coordinator will call you at <strong>{formData.phone}</strong> shortly to confirm your scheduled slot.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={handleSendWhatsApp}
                    className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Also Send on WhatsApp</span>
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        treatment: 'Dental Implants & Prosthetics',
                        date: '',
                        time: 'Morning (11:00 AM - 02:00 PM)',
                        message: '',
                      });
                    }}
                    className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs"
                  >
                    Book Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="font-bold text-gray-700">Patient Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Mahmood"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#328CC1] focus:border-[#328CC1] text-gray-800"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1">
                    <label className="font-bold text-gray-700">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0318 6966831"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#328CC1] focus:border-[#328CC1] text-gray-800"
                    />
                  </div>
                </div>

                {/* Treatment Category */}
                <div className="space-y-1">
                  <label className="font-bold text-gray-700">Desired Treatment / Reason for Visit *</label>
                  <select
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#328CC1] focus:border-[#328CC1] text-gray-800 bg-white"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                    <option value="Consultation with Dr. Ali Akhtar Khan">
                      General Maxillofacial & Dental Surgical Consultation
                    </option>
                    <option value="Emergency Dental Care">Emergency Pain & Trauma</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div className="space-y-1">
                    <label className="font-bold text-gray-700">Preferred Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#328CC1] focus:border-[#328CC1] text-gray-800 bg-white"
                    />
                  </div>

                  {/* Preferred Time Slot */}
                  <div className="space-y-1">
                    <label className="font-bold text-gray-700">Preferred Time Slot</label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#328CC1] focus:border-[#328CC1] text-gray-800 bg-white"
                    >
                      <option value="Morning (11:00 AM - 02:00 PM)">Morning (11:00 AM – 02:00 PM)</option>
                      <option value="Afternoon (02:00 PM - 06:00 PM)">Afternoon (02:00 PM – 06:00 PM)</option>
                      <option value="Evening (06:00 PM - 09:00 PM)">Evening (06:00 PM – 09:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Additional Clinical Notes */}
                <div className="space-y-1">
                  <label className="font-bold text-gray-700">Any Symptoms or Medical History (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe what you are experiencing (e.g. missing tooth for 6 months, wisdom tooth pain, interested in veneers)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#328CC1] focus:border-[#328CC1] text-gray-800"
                  />
                </div>

                {/* Submission Options */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 px-4 rounded-lg bg-[#0B3C5D] hover:bg-[#328CC1] text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Appointment Request</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Frequently Asked Questions Accordion */}
        <div className="mt-16 pt-12 border-t border-gray-100 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#0B3C5D]">
              Frequently Asked Patient Questions
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Clear answers to help you prepare for your visit to Dr. Ali Akhtar Khan's clinic.
            </p>
          </div>

          <div className="space-y-3">
            {CLINIC_FAQS.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-100 shadow-xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-4 text-left font-bold text-xs sm:text-sm text-[#0B3C5D] flex items-center justify-between gap-4"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#328CC1] transition-transform duration-300 flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-4 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
