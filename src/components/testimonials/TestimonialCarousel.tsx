"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rakesh Sharma",
      location: "Jaipur • Property Dispute",
      court: "High Court Stay Order",
      text: "Advocate Rajeshwar sir handled our ancestral property dispute in the High Court. He explained the legal process clearly and got our stay order quickly without making false promises. Very grounded advocate.",
    },
    {
      name: "Neha Gupta",
      location: "Mansarovar • Family Matter",
      court: "Jaipur Family Court",
      text: "Legal issues are very stressful, but sir gave honest advice from day one. He helped resolve our family settlement peacefully out of court. Highly respect his calm approach.",
    },
    {
      name: "Imran Khan",
      location: "C-Scheme, Jaipur • Urgent Bail",
      court: "Sessions & High Court Bench",
      text: "When my brother needed urgent bail in a commercial case, Advocate Sharma prepared the papers overnight and presented the facts strongly before the High Court bench. Got relief in first hearing.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -40) {
      handleNext();
    } else if (info.offset.x > 40) {
      handlePrev();
    }
  };

  return (
    <section className="py-6 sm:py-10 bg-[#FAF7F2]">
      <Container size="default">
        {/* Section Header */}
        <div className="space-y-1 mb-4 sm:mb-6 text-center sm:text-left">
          <Badge variant="sage">Client Experiences</Badge>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1B2430]">
            Feedback from Clients Served
          </h2>
          <p className="text-xs sm:text-sm text-[#4B5A6C]">
            Swipe across to read honest words from individuals represented in Jaipur courts.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-2xl mx-auto">
          {/* Main Swipeable Card */}
          <div className="overflow-hidden p-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className="cursor-grab active:cursor-grabbing touch-pan-y"
              >
                <Card
                  variant="default"
                  className="bg-[#FAF7F2] border-[#E2D7C5] p-5 sm:p-7 rounded-[16px] space-y-4 shadow-sm relative"
                >
                  {/* Quote Icon Background Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#536455]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#536455]" />
                      ))}
                    </div>
                    <Badge variant="sandstone">{testimonials[currentIndex].court}</Badge>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-xs sm:text-sm text-[#1B2430] leading-relaxed font-medium">
                    &ldquo;{testimonials[currentIndex].text}&rdquo;
                  </p>

                  {/* Client Info Footer */}
                  <div className="pt-3 border-t border-[#E2D7C5]/70 flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-sm font-bold text-[#1B2430]">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-[11px] text-[#4B5A6C]">
                        {testimonials[currentIndex].location}
                      </p>
                    </div>

                    <div className="text-[11px] text-[#536455] font-semibold">
                      Swipe &rarr;
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls & Pagination Dots */}
          <div className="mt-4 flex items-center justify-between">
            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    idx === currentIndex
                      ? "w-6 bg-[#1B2430]"
                      : "w-2 bg-[#E2D7C5] hover:bg-[#536455]"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="p-2 rounded-xl bg-[#EFE9DE] border border-[#E2D7C5] text-[#1B2430] hover:bg-[#E2D7C5] active:scale-95 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="p-2 rounded-xl bg-[#EFE9DE] border border-[#E2D7C5] text-[#1B2430] hover:bg-[#E2D7C5] active:scale-95 transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
