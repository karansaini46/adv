"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Phone, Menu, X, Scale, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onOpenConsultation?: () => void;
}

export function Header({ onOpenConsultation }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCloseMenu = useCallback(() => {
    if (window.location.hash === "#menu") {
      window.history.back();
    } else {
      setIsMobileMenuOpen(false);
    }
  }, []);

  const toggleMenu = () => {
    if (isMobileMenuOpen) {
      handleCloseMenu();
    } else {
      setIsMobileMenuOpen(true);
    }
  };

  // Sync menu state with browser history so pressing Back button closes drawer without leaving site
  useEffect(() => {
    if (isMobileMenuOpen) {
      window.history.pushState({ menuModal: true }, "", "#menu");
      const handlePopState = () => {
        setIsMobileMenuOpen(false);
      };
      window.addEventListener("popstate", handlePopState);
      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#E2D7C5]">
      {/* Top micro bar for Court Location - Desktop only to save space on mobile */}
      <div className="hidden sm:block bg-[#EFE9DE] py-1 px-4 text-xs text-[#4B5A6C] border-b border-[#E2D7C5]">
        <Container className="flex justify-between items-center text-[11px] sm:text-xs">
          <div className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3 h-3 text-[#536455]" />
            <span>Chamber No. 154, E-Block, Rajasthan High Court</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span>Mon - Sat: 9:30 AM - 7:00 PM</span>
            <span className="text-[#E2D7C5]">|</span>
            <span className="font-semibold text-[#1B2430]">Rajasthan High Court Advocate</span>
          </div>
        </Container>
      </div>

      {/* Main Header Bar */}
      <div className="py-2.5 sm:py-3.5">
        <Container className="flex items-center justify-between">
          {/* Logo / Advocate Title */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#1B2430] flex items-center justify-center text-[#FAF7F2] shrink-0 group-hover:bg-[#273444] transition-colors">
              <Scale className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-sm sm:text-lg font-bold text-[#1B2430] tracking-tight">
                  Adv. Deepak Gahlot
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#4B5A6C] font-medium">
                Rajasthan High Court Advocate
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-semibold text-[#4B5A6C]">
            <a href="#practice" className="hover:text-[#1B2430] transition-colors">
              Practice Areas
            </a>
            <a href="#about" className="hover:text-[#1B2430] transition-colors">
              About Counsel
            </a>
            <a href="#contact" className="hover:text-[#1B2430] transition-colors">
              Chambers & Contact
            </a>
          </nav>

          {/* Desktop Direct Contact & Booking */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+917014438542"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1B2430] hover:text-[#536455] px-3 py-2 rounded-lg hover:bg-[#EFE9DE] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#536455]" />
              <span>+91 70144 38542</span>
            </a>
            <Button
              variant="primary"
              size="sm"
              onClick={onOpenConsultation}
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Actions: Direct Call & Hamburger Menu */}
          <div className="flex items-center gap-1.5 md:hidden">
            <a
              href="tel:+917014438542"
              aria-label="Call Now"
              className="p-2 rounded-xl bg-[#E4EBE5] text-[#536455] active:scale-95 transition-transform"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl bg-[#EFE9DE] text-[#1B2430] active:scale-95 transition-transform"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[#E2D7C5] bg-[#F3EEE6] overflow-hidden"
          >
            <Container className="py-3.5 space-y-3">
              {/* In-page navigation links */}
              <nav className="flex flex-col space-y-1">
                <a
                  href="#practice"
                  onClick={handleCloseMenu}
                  className="px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#1B2430] hover:bg-[#FAF7F2] transition-colors flex items-center justify-between"
                >
                  <span>Practice Areas</span>
                  <span className="text-xs text-[#536455]">&rarr;</span>
                </a>
                <a
                  href="#about"
                  onClick={handleCloseMenu}
                  className="px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#1B2430] hover:bg-[#FAF7F2] transition-colors flex items-center justify-between"
                >
                  <span>About Counsel</span>
                  <span className="text-xs text-[#536455]">&rarr;</span>
                </a>
                <a
                  href="#contact"
                  onClick={handleCloseMenu}
                  className="px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#1B2430] hover:bg-[#FAF7F2] transition-colors flex items-center justify-between"
                >
                  <span>Chambers & Contact</span>
                  <span className="text-xs text-[#536455]">&rarr;</span>
                </a>
              </nav>

              <div className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#E2D7C5] space-y-0.5">
                <p className="text-[11px] font-semibold text-[#536455]">
                  High Court Chamber
                </p>
                <p className="text-xs text-[#4B5A6C]">
                  Chamber No. 154, E-Block, Rajasthan High Court
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="tel:+917014438542"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#EFE9DE] border border-[#E2D7C5] text-xs font-semibold text-[#1B2430]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#536455]" />
                  <span>Call Now</span>
                </a>
                <Button
                  variant="primary"
                  size="sm"
                  fullWidth
                  onClick={() => {
                    handleCloseMenu();
                    if (onOpenConsultation) {
                      setTimeout(() => onOpenConsultation(), 120);
                    }
                  }}
                >
                  Book Slot
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
