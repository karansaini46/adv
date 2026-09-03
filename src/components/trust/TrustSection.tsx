"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Scale, HeartHandshake, Lock, FileCheck2 } from "lucide-react";
import { motion } from "framer-motion";

export function TrustSection() {
  const trustPillars = [
    {
      title: "High Court Practice",
      subtitle: "Rajasthan High Court, Jaipur Bench",
      icon: <Scale className="w-5 h-5 text-[#536455]" />,
    },
    {
      title: "Client-First Approach",
      subtitle: "Personal attention to every case",
      icon: <HeartHandshake className="w-5 h-5 text-[#536455]" />,
    },
    {
      title: "Confidential Consultation",
      subtitle: "Strict attorney-client privilege",
      icon: <Lock className="w-5 h-5 text-[#536455]" />,
    },
    {
      title: "Transparent Guidance",
      subtitle: "Honest advice & procedural clarity",
      icon: <FileCheck2 className="w-5 h-5 text-[#536455]" />,
    },
  ];

  return (
    <section className="py-4 sm:py-6">
      <Container size="default">
        {/* Compact Header */}
        <div className="mb-3 text-center sm:text-left">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#536455]">
            Core Legal Values
          </span>
          <h2 className="font-serif text-lg sm:text-xl font-bold text-[#1B2430]">
            Why Clients Choose Our Chambers
          </h2>
        </div>

        {/* 4 Premium Icon Cards - 2x2 on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
          {trustPillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
            >
              <Card
                variant="default"
                hoverable
                className="p-3.5 sm:p-4.5 bg-[#FAF7F2] border-[#E2D7C5] rounded-[16px] h-full flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-[#E4EBE5] border border-[#C8D6CA] flex items-center justify-center shrink-0">
                    {pillar.icon}
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="font-serif text-xs sm:text-sm font-bold text-[#1B2430] leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#4B5A6C] leading-normal">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
