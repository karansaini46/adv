"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Phone, Calendar, ShieldCheck, Scale } from "lucide-react";
import { motion } from "framer-motion";

interface CompactHeroProps {
  onBookConsultation: () => void;
}

export function CompactHero({ onBookConsultation }: CompactHeroProps) {
  return (
    <section className="pt-3 sm:pt-6 pb-4 sm:pb-6">
      <Container size="default">
        {/* Compact Hero Card Container - 16px rounded card */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
        >
          <Card
            variant="default"
            className="border-[#E2D7C5] bg-[#FAF7F2] p-4 sm:p-7 space-y-4 shadow-sm"
          >
            {/* Top Badges Row */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="navy" icon={<Scale className="w-3 h-3 text-[#FAF7F2]" />}>
                Rajasthan High Court
              </Badge>
            </div>

            {/* Advocate Heading & Qualifications */}
            <div className="space-y-2 pt-1">
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B2430] leading-tight tracking-tight">
                Adv. Deepak Gahlot
              </h1>
              
              <p className="text-xs sm:text-sm font-semibold text-[#536455] tracking-wide">
                LLM &bull; LLB &bull; PGDFS &bull; PGDLL &bull; M.COM &bull; B.COM
              </p>

              <p className="text-xs sm:text-sm text-[#4B5A6C] flex items-center gap-1.5 pt-0.5">
                <ShieldCheck className="w-4 h-4 text-[#536455] shrink-0" />
                <span>Chamber No. 154, E-Block, Rajasthan High Court</span>
              </p>
            </div>

            {/* CTAs: Primary & Secondary */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a href="tel:+917014438542" className="w-full">
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  leftIcon={<Phone className="w-4 h-4 text-[#FAF7F2]" />}
                >
                  Call: +91 70144 38542
                </Button>
              </a>

              <Button
                variant="secondary"
                size="md"
                fullWidth
                onClick={onBookConsultation}
                leftIcon={<Calendar className="w-4 h-4 text-[#536455]" />}
              >
                Book Consultation
              </Button>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
