"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Phone, Calendar, Award, ShieldCheck, Scale } from "lucide-react";
import { motion } from "framer-motion";

interface CompactHeroProps {
  onBookConsultation: () => void;
}

export function CompactHero({ onBookConsultation }: CompactHeroProps) {
  return (
    <section className="pt-3 sm:pt-6 pb-4 sm:pb-8">
      <Container size="default">
        {/* Compact Hero Card Container - 16px rounded card */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card
            variant="default"
            className="border-[#E2D7C5] bg-[#FAF7F2] p-4 sm:p-7 space-y-4 shadow-sm"
          >
            {/* Top Badges Row */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="navy" icon={<Scale className="w-3 h-3 text-[#FAF7F2]" />}>
                Jaipur High Court
              </Badge>
              <Badge variant="sage" icon={<Award className="w-3.5 h-3.5 text-[#536455]" />}>
                12+ Years Experience
              </Badge>
            </div>

            {/* Advocate Heading & Subtitle */}
            <div className="space-y-1.5 pt-1">
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B2430] leading-tight tracking-tight">
                Advocate Rajeshwar Sharma
              </h1>
              <p className="text-xs sm:text-sm font-medium text-[#4B5A6C] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#536455] shrink-0" />
                <span>Rajasthan High Court, Jaipur Bench & District Courts</span>
              </p>
            </div>

            {/* Core Practice Areas Tag Line */}
            <div className="py-2.5 px-3.5 rounded-xl bg-[#EFE9DE] border border-[#E2D7C5]">
              <p className="text-xs sm:text-sm font-semibold text-[#1B2430] tracking-wide text-center sm:text-left">
                Civil &bull; Criminal &bull; Family Law
              </p>
            </div>

            {/* Concise Legal Statement in Simple Indian English */}
            <p className="text-xs sm:text-sm text-[#4B5A6C] leading-relaxed">
              Providing straightforward legal guidance, thorough case preparation, and dedicated representation for individuals and businesses across Rajasthan.
            </p>

            {/* CTAs: Primary & Secondary */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <Button
                variant="primary"
                size="md"
                fullWidth
                onClick={onBookConsultation}
                leftIcon={<Calendar className="w-4 h-4 text-[#FAF7F2]" />}
              >
                Book Consultation
              </Button>
              
              <a href="tel:+919829012345" className="w-full">
                <Button
                  variant="secondary"
                  size="md"
                  fullWidth
                  leftIcon={<Phone className="w-4 h-4 text-[#536455]" />}
                >
                  Call Now
                </Button>
              </a>
            </div>

            {/* Quick Micro Credentials Bar */}
            <div className="pt-2 border-t border-[#E2D7C5]/70 flex items-center justify-between text-[11px] sm:text-xs text-[#4B5A6C]">
              <span className="flex items-center gap-1 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#536455]"></span>
                BCI Enrolled Advocate
              </span>
              <span className="font-medium text-[#1B2430]">
                Jaipur Chambers Available
              </span>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
