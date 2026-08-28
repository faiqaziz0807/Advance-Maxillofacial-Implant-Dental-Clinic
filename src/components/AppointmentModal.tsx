import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  Clock,
  Phone,
  User,
  MessageCircle,
  CheckCircle2,
  Send,
  ShieldCheck,
} from 'lucide-react';
import { SERVICES_DATA, CLINIC_INFO } from '../data/clinicData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  onSuccess: (msg: string) => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialService,
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService || 'Dental Implants & Prosthetics',
    date: '',
    timeSlot: 'Morning (11:00 AM - 02:00 PM)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setSubmitted(true);
    onSuccess(
      `Appointment request for ${formData.name} submitted! Our team will call you at ${formData.phone} shortly.`
    );
  };

  const handleWhatsAppSend = () => {
    const text = `*New Dental Consultation Booking*\n\n*Patient Name:* ${formData.name || 'Patient'}\n*Phone:* ${formData.phone || 'N/A'}\n*Requested Treatment:* ${formData.service}\n*Preferred Date:* ${formData.date || 'Earliest available'}\n*Preferred Time:* ${formData.timeSlot}\n*Notes:* ${formData.notes || 'None'}\n\n_Advance Maxillofacial Implant & Dental Clinic_`;
    const url = `https://wa.me/923186966831?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[95vh] animate-scaleUp">
        {/* Modal Top Header */}
        <div className="p-5 bg-gradient-to-r from-[#0B3C5D] to-[#328CC1] text-white flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-teal-200 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Priority Patient Booking</span>
            </div>
            <h3 className="text-lg font-bold mt-0.5">Book Dental Appointment</h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4 animate-fadeIn">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
              <h4 className="text-lg font-bold text-slate-900">
                Booking Request Received!
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                Thank you <strong>{formData.name}</strong>. Dr. Ali Akhtar Khan's clinic reception will contact you at <strong>{formData.phone}</strong> to confirm the exact consultation time.
              </p>

              <div className="pt-4 flex flex-col gap-2">
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Forward Details to WhatsApp (+92 318 6966831)</span>
                </button>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Patient Name */}
              <div className="space-y-1">
                <label className="font-bold text-slate-700">Patient Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#328CC1] text-slate-800"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label className="font-bold text-slate-700">Phone / WhatsApp Number *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +92 318 6966831"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#328CC1] text-slate-800"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-1">
                <label className="font-bold text-slate-700">Select Treatment</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#328CC1] text-slate-800 bg-white"
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.title}>
                      {srv.title}
                    </option>
                  ))}
                  <option value="Consultation with Dr. Ali Akhtar Khan">
                    Direct Consultation with Dr. Ali Akhtar Khan
                  </option>
                  <option value="Emergency Toothache or Facial Trauma">
                    Emergency Dental Treatment
                  </option>
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Preferred Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#328CC1] text-slate-800 bg-white text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Time Slot</label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-2.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#328CC1] text-slate-800 bg-white text-xs"
                  >
                    <option value="Morning (11:00 AM - 02:00 PM)">11:00 AM – 02:00 PM</option>
                    <option value="Afternoon (02:00 PM - 06:00 PM)">02:00 PM – 06:00 PM</option>
                    <option value="Evening (06:00 PM - 09:00 PM)">06:00 PM – 09:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1">
                <label className="font-bold text-slate-700">Additional Notes / Symptoms (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Describe your concern briefly..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#328CC1] text-slate-800"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#0B3C5D] hover:bg-[#328CC1] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Appointment Request</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book Directly via WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
