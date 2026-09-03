"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Award, MessageSquareCheck, Scale, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function StatsSection() {
  const stats = [
    {
      value: "12+",
      label: "Years Experience",
      subtext: "High Court & Trial Courts Litigation",
      icon: <Award className="w-4 h-4 text-[#536455]" />,
    },
    {
      value: "1000+",
      label: "Consultations",
      subtext: "Clients Advised & Guided",
      icon: <MessageSquareCheck className="w-4 h-4 text-[#536455]" />,
    },
    {
      value: "High Court",
      label: "Practice",
      subtext: "Rajasthan High Court, Jaipur Bench",
      icon: <Scale className="w-4 h-4 text-[#536455]" />,
    },
    {
      value: "Fast",
      label: "Response",
      subtext: "Urgent Matters & Same-Day Feedback",
      icon: <Zap className="w-4 h-4 text-[#536455]" />,
    },
  ];

  return (
    <section className="py-6 sm:py-10 bg-[#FAF7F2]">
      <Container size="default">
        {/* Compact Heading */}
        <div className="mb-4 sm:mb-6 text-center sm:text-left space-y-1">
          <Badge variant="sage">Chambers Overview</Badge>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1B2430]">
            Practice Track Record & Benefits
          </h2>
        </div>

        {/* 4 Statistics Grid - 2x2 on Mobile, 4-columns on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card
                variant="default"
                className="bg-[#FAF7F2] border-[#E2D7C5] p-3.5 sm:p-5 rounded-[16px] h-full flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-xl bg-[#E4EBE5] border border-[#C8D6CA] flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>

                  <div className="space-y-0.5 pt-1">
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1B2430] tracking-tight">
                      {item.value}
                    </div>
                    <div className="font-serif text-xs sm:text-sm font-semibold text-[#1B2430]">
                      {item.label}
                    </div>
                  </div>
                </div>

                <div className="pt-2 mt-2 border-t border-[#E2D7C5]/60 text-[11px] sm:text-xs text-[#4B5A6C] font-medium leading-snug">
                  {item.subtext}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
