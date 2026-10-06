"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Scale, MapPin, Phone } from "lucide-react";

interface AboutSectionProps {
  onBookConsultation?: () => void;
}

export function AboutSection({ onBookConsultation }: AboutSectionProps) {
  return (
    <section className="py-4 sm:py-8">
      <Container size="default">
        <Card
          variant="default"
          className="border-[#E2D7C5] bg-[#FAF7F2] p-4 sm:p-6 rounded-[16px] space-y-3 shadow-sm"
        >
          {/* Header & Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2D7C5]/70 pb-3">
            <div className="space-y-1">
              <Badge variant="sage">About the Counsel</Badge>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1B2430]">
                Adv. Deepak Gahlot
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-[#536455]">
                LLM | LLB | PGDFS | PGDLL | M.COM | B.COM
              </p>
            </div>
            <Badge variant="navy" icon={<Scale className="w-3 h-3 text-[#FAF7F2]" />}>
              Rajasthan High Court
            </Badge>
          </div>

          {/* Details */}
          <div className="space-y-2 text-xs sm:text-sm text-[#4B5A6C] leading-relaxed">
            <p>
              Adv. Deepak Gahlot practices before the Rajasthan High Court, providing thorough legal representation, strategic counsel, and honest case evaluation across Civil, Criminal, and Family law matters.
            </p>
            <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-[#1B2430] font-medium">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#536455] shrink-0" />
                Chamber No. 154, E-Block, Rajasthan High Court
              </span>
              <span className="hidden sm:inline text-[#E2D7C5]">|</span>
              <a href="tel:+917014438542" className="flex items-center gap-1.5 hover:text-[#536455]">
                <Phone className="w-3.5 h-3.5 text-[#536455] shrink-0" />
                +91 70144 38542
              </a>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
