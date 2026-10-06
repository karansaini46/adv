"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { CompactHero } from "@/components/hero/CompactHero";
import { PracticeGrid } from "@/components/sections/PracticeGrid";
import { AboutSection } from "@/components/about/AboutSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { ConsultationModal } from "@/components/consultation/ConsultationModal";
import { Phone, Calendar } from "lucide-react";

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationCategory, setConsultationCategory] = useState<string>("Civil Litigation");

  const handleOpenConsultation = (category?: string) => {
    if (category) {
      setConsultationCategory(category);
    }
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF7F2]">
      <div>
        {/* Header Navigation */}
        <Header onOpenConsultation={() => handleOpenConsultation()} />

        {/* Main Content Area */}
        <main className="pb-16 md:pb-0">
          {/* Mobile-First Hero */}
          <CompactHero onBookConsultation={() => handleOpenConsultation()} />

          {/* Practice Areas */}
          <PracticeGrid onSelectPractice={handleOpenConsultation} />

          {/* About Section */}
          <AboutSection onBookConsultation={() => handleOpenConsultation()} />

          {/* Direct Chamber Contact */}
          <ContactSection onBookConsultation={() => handleOpenConsultation()} />
        </main>
      </div>

      {/* Bar Council Compliant Footer & Chamber Details */}
      <Footer />

      {/* Mobile Floating Quick Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E2D7C5] p-2.5 px-4 flex items-center gap-2.5 md:hidden shadow-lg">
        <a
          href="tel:+917014438542"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#E4EBE5] text-[#536455] font-semibold text-xs active:scale-98 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-[#536455]" />
          <span>Call: 70144 38542</span>
        </a>
        <button
          onClick={() => handleOpenConsultation()}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#1B2430] text-[#FAF7F2] font-semibold text-xs active:scale-98 transition-transform"
        >
          <Calendar className="w-3.5 h-3.5 text-[#FAF7F2]" />
          <span>Book Consultation</span>
        </button>
      </div>

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        defaultCategory={consultationCategory}
      />
    </div>
  );
}
