"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { CompactHero } from "@/components/hero/CompactHero";
import { TrustSection } from "@/components/trust/TrustSection";
import { PracticeGrid } from "@/components/sections/PracticeGrid";
import { AboutSection } from "@/components/about/AboutSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialCarousel } from "@/components/testimonials/TestimonialCarousel";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { ConsultationModal } from "@/components/consultation/ConsultationModal";

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF7F2]">
      <div>
        {/* Header Navigation */}
        <Header onOpenConsultation={handleOpenConsultation} />

        {/* Main Content Area */}
        <main>
          {/* Step 2: Compact Mobile-First Hero */}
          <CompactHero onBookConsultation={handleOpenConsultation} />

          {/* Step 3: Trust Section directly below Hero */}
          <TrustSection />

          {/* Step 4: 2-Column Mobile Practice Grid */}
          <PracticeGrid onSelectPractice={handleOpenConsultation} />

          {/* Step 5: Compact About Section */}
          <AboutSection onBookConsultation={handleOpenConsultation} />

          {/* Step 6: 4 Statistics & Benefits */}
          <StatsSection />

          {/* Step 7: Swipeable Mobile Testimonial Carousel */}
          <TestimonialCarousel />

          {/* Step 8: Premium Contact Section */}
          <ContactSection onBookConsultation={handleOpenConsultation} />
        </main>
      </div>

      {/* Bar Council Compliant Footer & Chamber Details */}
      <Footer />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />
    </div>
  );
}
