"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, Navigation } from "lucide-react";
import { motion } from "framer-motion";

interface ContactSectionProps {
  onBookConsultation?: () => void;
}

export function ContactSection({ onBookConsultation }: ContactSectionProps) {
  const whatsappUrl =
    "https://wa.me/919829012345?text=Hello%20Advocate%20Rajeshwar%20Sharma,%20I%20need%20legal%20guidance.";

  return (
    <section className="py-6 sm:py-10 bg-[#FAF7F2]">
      <Container size="default">
        {/* Section Header */}
        <div className="space-y-1 mb-4 sm:mb-6 text-center sm:text-left">
          <Badge variant="sage">Chambers & Reachability</Badge>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#1B2430]">
            Visit Chambers or Connect Direct
          </h2>
          <p className="text-xs sm:text-sm text-[#4B5A6C]">
            Located at the Rajasthan High Court premises & C-Scheme in Jaipur.
          </p>
        </div>

        {/* 2-Column Desktop / Stacked Mobile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Column: Office & Contact Info Card */}
          <Card
            variant="default"
            className="bg-[#FAF7F2] border-[#E2D7C5] p-4 sm:p-6 rounded-[16px] space-y-4 shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Header Badges */}
              <div className="flex items-center justify-between border-b border-[#E2D7C5]/70 pb-3">
                <span className="font-serif font-bold text-base text-[#1B2430]">
                  Advocate Rajeshwar Sharma
                </span>
                <Badge variant="sandstone">Jaipur Bench</Badge>
              </div>

              {/* Contact Information List */}
              <ul className="space-y-3 text-xs sm:text-sm text-[#4B5A6C]">
                {/* Office Addresses */}
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#536455] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1B2430] block">High Court Chamber:</strong>
                    Chamber No. 114, Lawyers Block, Rajasthan High Court Premises, Jaipur - 302005
                    <strong className="text-[#1B2430] block mt-1">Main Office:</strong>
                    42, Lawyers Enclave, C-Scheme, Jaipur - 302001
                  </div>
                </li>

                {/* Phone */}
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#536455] shrink-0" />
                  <div>
                    <strong className="text-[#1B2430] mr-1.5">Phone:</strong>
                    <a href="tel:+919829012345" className="hover:text-[#1B2430] font-semibold">
                      +91 98290 12345
                    </a>
                  </div>
                </li>

                {/* Email */}
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#536455] shrink-0" />
                  <div>
                    <strong className="text-[#1B2430] mr-1.5">Email:</strong>
                    <a href="mailto:advocate.rsharma.jaipur@gmail.com" className="hover:text-[#1B2430]">
                      advocate.rsharma.jaipur@gmail.com
                    </a>
                  </div>
                </li>

                {/* Office Hours */}
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#536455] shrink-0" />
                  <div>
                    <strong className="text-[#1B2430] mr-1.5">Chamber Hours:</strong>
                    <span>Mon - Sat: 9:30 AM - 7:00 PM</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Mobile Action Buttons: Call & WhatsApp ALWAYS Side-by-Side */}
            <div className="pt-3 border-t border-[#E2D7C5] grid grid-cols-2 gap-2">
              <a href="tel:+919829012345" className="w-full">
                <Button variant="primary" size="md" fullWidth leftIcon={<Phone className="w-4 h-4" />}>
                  Call Now
                </Button>
              </a>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="sage" size="md" fullWidth leftIcon={<MessageSquare className="w-4 h-4" />}>
                  WhatsApp
                </Button>
              </a>
            </div>
          </Card>

          {/* Right Column: Styled Google Maps Placeholder Card */}
          <Card
            variant="default"
            className="bg-[#EFE9DE] border-[#E2D7C5] p-4 sm:p-6 rounded-[16px] space-y-4 shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#536455] uppercase tracking-wider">
                  Interactive Location Map
                </span>
                <Badge variant="outline">Jaipur Court District</Badge>
              </div>

              {/* Styled Map Container Placeholder */}
              <div className="relative w-full h-48 sm:h-56 rounded-[14px] bg-[#E4EBE5] border border-[#C5D5C8] overflow-hidden flex flex-col items-center justify-center p-4 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#1B2430] text-[#FAF7F2] flex items-center justify-center shadow-md">
                  <MapPin className="w-5 h-5 text-[#FAF7F2]" />
                </div>
                <div className="space-y-0.5">
                  <p className="font-serif text-sm font-bold text-[#1B2430]">
                    Rajasthan High Court Premises & C-Scheme Office
                  </p>
                  <p className="text-[11px] text-[#4B5A6C]">
                    Jaipur - 302005, Rajasthan, India
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=Rajasthan+High+Court+Jaipur+Bench"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1B2430] text-[#FAF7F2] text-xs font-medium hover:bg-[#273444] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open Directions in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E2D7C5] text-xs text-[#4B5A6C] flex items-center justify-between">
              <span className="font-medium text-[#1B2430]">Need an in-person meeting?</span>
              <button
                onClick={onBookConsultation}
                className="text-xs font-semibold text-[#536455] underline hover:text-[#1B2430]"
              >
                Schedule Appointment
              </button>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
