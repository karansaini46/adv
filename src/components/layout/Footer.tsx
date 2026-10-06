import React from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { MapPin, Phone, Scale, ShieldAlert } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#EFE9DE] border-t border-[#E2D7C5] pt-10 pb-8 mt-12 text-[#1B2430]">
      <Container className="space-y-8">
        {/* BCI Disclaimer Card */}
        <Card variant="default" className="border-[#E2D7C5]">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#536455] shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs text-[#4B5A6C] leading-relaxed">
              <p className="font-semibold text-[#1B2430]">
                Bar Council of India Disclaimer & Notice
              </p>
              <p>
                As per the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise. 
                This website is intended solely for general informational purposes about Adv. Deepak Gahlot&apos;s practice 
                at the Rajasthan High Court. By clicking on this site, the user acknowledges that there has been no advertisement, solicitation, or inducement.
              </p>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          {/* Practice Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#1B2430] flex items-center justify-center text-[#FAF7F2]">
                <Scale className="w-4 h-4" />
              </div>
              <span className="font-serif font-bold text-base text-[#1B2430]">
                Adv. Deepak Gahlot
              </span>
            </div>
            <p className="text-xs text-[#4B5A6C] leading-relaxed">
              Advocate at Rajasthan High Court. Qualification: LLM, LLB, PGDFS, PGDLL, M.COM, B.COM.
            </p>
          </div>

          {/* Chamber Location */}
          <div className="space-y-3">
            <h4 className="font-semibold text-xs uppercase tracking-wider text-[#536455]">
              High Court Chamber
            </h4>
            <ul className="space-y-2.5 text-xs text-[#4B5A6C]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#536455] shrink-0 mt-0.5" />
                <span>
                  <strong>High Court Chamber:</strong> Chamber No. 154, E-Block, Rajasthan High Court
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-semibold text-xs uppercase tracking-wider text-[#536455]">
              Direct Contact
            </h4>
            <ul className="space-y-2 text-xs text-[#4B5A6C]">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#536455] shrink-0" />
                <a href="tel:+917014438542" className="hover:text-[#1B2430] font-medium">
                  +91 70144 38542
                </a>
              </li>
              <li className="pt-1 text-[11px] text-[#4B5A6C]">
                Chamber Hours: Mon - Sat (9:30 AM - 7:00 PM)
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-4 border-t border-[#E2D7C5] flex flex-col sm:flex-row items-center justify-between text-xs text-[#4B5A6C] gap-2">
          <p>© {new Date().getFullYear()} Adv. Deepak Gahlot. All rights reserved.</p>
          <p className="text-[11px]">Rajasthan High Court Litigation Practice</p>
        </div>
      </Container>
    </footer>
  );
}
