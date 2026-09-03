"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Phone, Menu, X, Scale, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onOpenConsultation?: () => void;
}

export function Header({ onOpenConsultation }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#E2D7C5]">
      {/* Top micro bar for Court Location */}
      <div className="bg-[#EFE9DE] py-1 px-4 text-xs text-[#4B5A6C] border-b border-[#E2D7C5]">
        <Container className="flex justify-between items-center text-[11px] sm:text-xs">
          <div className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3 h-3 text-[#536455]" />
            <span>Chambers at Rajasthan High Court, Jaipur Bench</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span>Mon - Sat: 9:30 AM - 7:00 PM</span>
            <span className="text-[#E2D7C5]">|</span>
            <span className="font-semibold text-[#1B2430]">High Court Advocate</span>
          </div>
        </Container>
      </div>

      {/* Main Header Bar */}
      <div className="py-3 sm:py-4">
        <Container className="flex items-center justify-between">
          {/* Logo / Advocate Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1B2430] flex items-center justify-center text-[#FAF7F2] shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-base sm:text-lg font-bold text-[#1B2430] tracking-tight">
                  Adv. Rajeshwar Sharma
                </span>
              </div>
              <p className="text-xs text-[#4B5A6C] font-medium">
                Jaipur High Court Advocate
              </p>
            </div>
          </div>

          {/* Desktop Navigation & Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919829012345"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1B2430] hover:text-[#536455] px-3 py-2 rounded-lg hover:bg-[#EFE9DE] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#536455]" />
              <span>+91 98290 12345</span>
            </a>
            <Button
              variant="primary"
              size="sm"
              onClick={onOpenConsultation}
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Direct Call & Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:+919829012345"
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
            <Container className="py-4 space-y-3">
              <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E2D7C5] space-y-1">
                <p className="text-xs font-semibold text-[#536455]">
                  High Court Enrollment & Court Chambers
                </p>
                <p className="text-xs text-[#4B5A6C]">
                  Chamber No. 114, High Court Campus, Jaipur • C-Scheme Office
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="tel:+919829012345"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#EFE9DE] border border-[#E2D7C5] text-sm font-semibold text-[#1B2430]"
                >
                  <Phone className="w-4 h-4 text-[#536455]" />
                  <span>Call Now</span>
                </a>
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (onOpenConsultation) onOpenConsultation();
                  }}
                >
                  Book Consultation
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
