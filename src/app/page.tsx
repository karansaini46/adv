"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { CompactHero } from "@/components/hero/CompactHero";
import { PracticeOverview } from "@/components/sections/PracticeOverview";
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
          {/* Step 2 Compact Mobile-First Hero */}
          <CompactHero onBookConsultation={handleOpenConsultation} />

          {/* Core Legal Practice Overview */}
          <PracticeOverview onSelectCategory={handleOpenConsultation} />
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
