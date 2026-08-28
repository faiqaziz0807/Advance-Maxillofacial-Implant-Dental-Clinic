import React, { useState, useEffect } from 'react';
import {
  Phone,
  Clock,
  MapPin,
  Menu,
  X,
  Calendar,
  MessageCircle,
} from 'lucide-react';
import { Logo } from './Logo';
import { Service } from '../types';

interface NavbarProps {
  onOpenAppointment: (serviceName?: string) => void;
  onSelectService: (service: Service) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAppointment,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Before & After', href: '#before-after' },
    { name: 'Services', href: '#services' },
    { name: 'Dr. Ali Akhtar', href: '#doctor' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans" id="main-header">
      {/* Top Notification Bar */}
      <div className="bg-[#062135] text-slate-200 text-xs py-1.5 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-nowrap">
          <div className="flex items-center gap-5 flex-nowrap whitespace-nowrap">
            <div className="flex items-center gap-1.5 text-teal-300">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Avalon Plaza, Saddar, Rawalpindi</span>
            </div>
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 flex-shrink-0 text-teal-300" />
              <span>Mon – Sat: 11:00 AM – 09:00 PM</span>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-nowrap whitespace-nowrap">
            <a
              href={`https://wa.me/923186966831?text=${encodeURIComponent(
                'Hello Dr. Ali Akhtar Khan, I would like to book a dental consultation.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              id="topbar-whatsapp-link"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: +92 318 6966831</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href="tel:+923186966831"
              className="flex items-center gap-1.5 text-white hover:text-teal-300 font-semibold transition-colors"
              id="topbar-phone-link"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>Call: +92 318 6966831</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Single-Line Compact Header Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-2 border-b border-gray-200'
            : 'bg-white py-2.5 border-b border-gray-200/80 shadow-xs'
        }`}
        id="navbar-primary"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 lg:gap-5 flex-nowrap">
          {/* Brand Logo & Doctor Name (Single Line / Compact Horizontal) */}
          <a href="#hero" className="flex-shrink-0 focus:outline-none flex items-center" aria-label="Go to homepage">
            <Logo size="sm" variant="dark" layout="horizontal" />
          </a>

          {/* Desktop Navigation Links - Exact Single Horizontal Line */}
          <div className="hidden lg:flex items-center gap-3.5 xl:gap-5 flex-nowrap whitespace-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-gray-600 hover:text-[#328CC1] transition-colors py-1 relative whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#328CC1] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Buttons - Single Line */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-2.5 flex-shrink-0 flex-nowrap whitespace-nowrap">
            <a
              href="tel:+923186966831"
              className="bg-[#0B3C5D] text-white px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 hover:bg-[#328CC1] transition-colors shadow-xs whitespace-nowrap"
              id="nav-call-button"
            >
              <Phone className="w-3.5 h-3.5 text-teal-300" />
              <span>+92 318 6966831</span>
            </a>

            <button
              onClick={() => onOpenAppointment()}
              className="bg-[#328CC1] text-white px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 hover:bg-[#0B3C5D] transition-colors shadow-xs whitespace-nowrap"
              id="nav-book-btn"
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg text-slate-700 hover:text-[#0B3C5D] hover:bg-slate-100 focus:outline-none flex-shrink-0"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-fadeIn" id="mobile-nav-drawer">
            <div className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#328CC1] hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="tel:+923186966831"
                  className="w-full py-2 px-4 rounded-lg bg-slate-100 text-[#0B3C5D] font-bold text-center text-xs flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#328CC1]" />
                  Call: +92 318 6966831
                </a>
                <a
                  href={`https://wa.me/923186966831?text=${encodeURIComponent(
                    'Hello Dr. Ali Akhtar Khan, I would like to book a dental consultation.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-center text-xs flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Chat on WhatsApp
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAppointment();
                  }}
                  className="w-full py-2 px-4 rounded-lg bg-[#328CC1] hover:bg-[#0B3C5D] text-white font-bold text-center text-xs shadow-xs"
                >
                  Book Clinic Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
