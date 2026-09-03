"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Award, ShieldCheck, Scale, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

interface AboutSectionProps {
  onBookConsultation?: () => void;
}

export function AboutSection({ onBookConsultation }: AboutSectionProps) {
  return (
    <section className="py-6 sm:py-10">
      <Container size="default">
        {/* Compact Card Wrapper */}
        <Card
          variant="default"
          className="border-[#E2D7C5] bg-[#FAF7F2] p-4 sm:p-7 rounded-[16px] overflow-hidden space-y-4"
        >
          {/* Mobile Top Portrait / Desktop 2-Column Grid */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-5 sm:gap-7">
            {/* Professional Portrait (On top for mobile) */}
            <div className="w-full md:w-1/3 shrink-0 flex flex-col items-center">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-full md:h-64 rounded-[16px] overflow-hidden border-2 border-[#E2D7C5] shadow-sm bg-[#EFE9DE]">
                <Image
                  src="/advocate_portrait.png"
                  alt="Advocate Rajeshwar Sharma - Jaipur High Court Lawyer"
                  fill
                  sizes="(max-width: 768px) 208px, 320px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="mt-2.5 text-center">
                <Badge variant="navy" icon={<Scale className="w-3 h-3 text-[#FAF7F2]" />}>
                  Rajasthan High Court
                </Badge>
              </div>
            </div>

            {/* Content Below (Mobile) / Right Column (Desktop) */}
            <div className="w-full md:w-2/3 space-y-3">
              {/* Header & Badges */}
              <div className="space-y-1 text-center md:text-left">
                <Badge variant="sage">About the Counsel</Badge>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1B2430]">
                  Advocate Rajeshwar Sharma
                </h2>
                <p className="text-xs font-semibold text-[#536455]">
                  12+ Years High Court & Trial Practice
                </p>
              </div>

              {/* Exact Copy - 71 Words (Under 90 Words Limit) */}
              <div className="space-y-2.5 text-xs sm:text-sm text-[#4B5A6C] leading-relaxed text-left">
                <p>
                  I am Advocate Rajeshwar Sharma, practicing at the Rajasthan High Court, Jaipur Bench for over 12 years.
                </p>
                <p>
                  I believe every client deserves clear, personalized legal advice without unnecessary litigation delays. My chambers focus on honest case evaluation, transparent guidance, and ethical representation in Civil, Criminal, and Family matters.
                </p>
                <p>
                  Whether defending your rights in High Court or resolving property disputes in District Courts, I stand by you with firm commitment and complete confidentiality.
                </p>
              </div>

              {/* Core Pillars Chips */}
              <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] sm:text-xs">
                <div className="p-2 rounded-xl bg-[#EFE9DE] border border-[#E2D7C5] flex items-center gap-1.5 font-medium text-[#1B2430]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#536455] shrink-0" />
                  <span>Ethical Representation</span>
                </div>
                <div className="p-2 rounded-xl bg-[#EFE9DE] border border-[#E2D7C5] flex items-center gap-1.5 font-medium text-[#1B2430]">
                  <HeartHandshake className="w-3.5 h-3.5 text-[#536455] shrink-0" />
                  <span>Personalized Advice</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
