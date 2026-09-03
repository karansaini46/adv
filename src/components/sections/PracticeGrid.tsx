"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Scale,
  ShieldAlert,
  Users,
  Home,
  FileKey2,
  ShoppingBag,
  ArrowRight,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PracticeGridProps {
  onSelectPractice?: (practiceTitle: string) => void;
}

export function PracticeGrid({ onSelectPractice }: PracticeGridProps) {
  const [selectedPractice, setSelectedPractice] = useState<{
    title: string;
    description: string;
    detail: string;
    icon: React.ReactNode;
  } | null>(null);

  const practiceItems = [
    {
      title: "Civil Litigation",
      description: "High Court writs, contracts, injunctions, and civil dispute resolution.",
      detail:
        "Comprehensive representation before the Rajasthan High Court, Jaipur Bench and District Courts for civil suits, stay injunctions, contract breaches, and Article 226 Constitutional writ petitions.",
      icon: <Scale className="w-4 h-4 text-[#536455]" />,
    },
    {
      title: "Criminal Matters",
      description: "Defense representation, FIR revisions, and trials in Sessions and High Court.",
      detail:
        "Strategic criminal defense, FIR quashing petitions under Section 482 CrPC / BNSS, criminal revisions, and representation across Sessions and High Court benches.",
      icon: <ShieldAlert className="w-4 h-4 text-[#536455]" />,
    },
    {
      title: "Family & Divorce",
      description: "Mutual divorce, child custody, alimony, and domestic violence legal support.",
      detail:
        "Empathetic counsel in Jaipur Family Courts for mutual consent divorce, contested petitions, child custody arrangements, alimony, and domestic violence protection matters.",
      icon: <Users className="w-4 h-4 text-[#536455]" />,
    },
    {
      title: "Property Disputes",
      description: "Land title verification, ancestral property division, and revenue court litigation.",
      detail:
        "Handling complex land ownership disputes, partition suits, revenue court appeals, land registry verification, and property stay orders across Rajasthan.",
      icon: <Home className="w-4 h-4 text-[#536455]" />,
    },
    {
      title: "Bail Applications",
      description: "Anticipatory and regular bail hearings before Magistrates, Sessions, and High Court.",
      detail:
        "Urgent assistance for anticipatory bail (Section 438) and regular bail (Section 439) in Magistrates Court, Sessions Court, and Rajasthan High Court, Jaipur Bench.",
      icon: <FileKey2 className="w-4 h-4 text-[#536455]" />,
    },
    {
      title: "Consumer Cases",
      description: "Consumer forum claims, builder delays, and service deficiency legal relief.",
      detail:
        "Representing consumers in District and State Consumer Disputes Redressal Commissions against insurance claim rejections, real estate builder delays, and defective products.",
      icon: <ShoppingBag className="w-4 h-4 text-[#536455]" />,
    },
  ];

  const handleCardClick = (item: (typeof practiceItems)[0]) => {
    setSelectedPractice(item);
    if (onSelectPractice) {
      onSelectPractice(item.title);
    }
  };

  return (
    <section className="py-6 sm:py-10">
      <Container size="default">
        {/* Section Header */}
        <div className="space-y-1 mb-4 sm:mb-6 text-center sm:text-left">
          <Badge variant="sage">Legal Practice Areas</Badge>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#1B2430]">
            Core Areas of Practice
          </h2>
          <p className="text-xs sm:text-sm text-[#4B5A6C]">
            Targeted legal solutions in the Rajasthan High Court & Jaipur Subordinate Courts.
          </p>
        </div>

        {/* 2-Column Mobile Grid (grid-cols-2 on mobile, grid-cols-3 on md+) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-4">
          {practiceItems.map((item, index) => (
            <motion.div
              key={index}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCardClick(item)}
              className="cursor-pointer"
            >
              <Card
                variant="default"
                hoverable
                className="p-3 sm:p-5 border-[#E2D7C5] bg-[#FAF7F2] rounded-[16px] h-full flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  {/* Icon Badge */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#E4EBE5] border border-[#C8D6CA] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>

                  {/* Practice Title */}
                  <h3 className="font-serif text-xs sm:text-base font-bold text-[#1B2430] group-hover:text-[#536455] transition-colors leading-tight">
                    {item.title}
                  </h3>

                  {/* One-Line Description (Under 12 Words) */}
                  <p className="text-[11px] sm:text-xs text-[#4B5A6C] leading-snug line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Learn More Arrow Footer */}
                <div className="pt-2.5 mt-2 border-t border-[#E2D7C5]/60 flex items-center justify-between text-[11px] sm:text-xs font-semibold text-[#536455]">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Detail Modal for Selected Practice */}
        <AnimatePresence>
          {selectedPractice && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B2430]/60 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="w-full max-w-md bg-[#FAF7F2] border border-[#E2D7C5] rounded-[16px] p-5 sm:p-6 space-y-4 shadow-lg relative"
              >
                <button
                  onClick={() => setSelectedPractice(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-xl bg-[#EFE9DE] text-[#1B2430] hover:bg-[#E2D7C5] transition-colors"
                  aria-label="Close detail modal"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E4EBE5] border border-[#C8D6CA] flex items-center justify-center shrink-0">
                    {selectedPractice.icon}
                  </div>
                  <div>
                    <Badge variant="sage">High Court & District Benches</Badge>
                    <h3 className="font-serif text-lg font-bold text-[#1B2430]">
                      {selectedPractice.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#4B5A6C] leading-relaxed">
                  {selectedPractice.detail}
                </p>

                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href="tel:+919829012345"
                    className="w-full text-center py-2.5 px-4 rounded-xl bg-[#1B2430] text-[#FAF7F2] text-xs sm:text-sm font-semibold hover:bg-[#273444] transition-colors"
                  >
                    Discuss Case with Advocate (+91 98290 12345)
                  </a>
                  <button
                    onClick={() => setSelectedPractice(null)}
                    className="w-full py-2 text-xs text-[#4B5A6C] hover:text-[#1B2430]"
                  >
                    Close Overview
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
