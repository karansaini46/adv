import React from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Scale, ShieldCheck, Users, FileText, ArrowRight } from "lucide-react";

interface PracticeOverviewProps {
  onSelectCategory?: (category: string) => void;
}

export function PracticeOverview({ onSelectCategory }: PracticeOverviewProps) {
  const practices = [
    {
      title: "Civil Litigation & Writs",
      icon: <Scale className="w-5 h-5 text-[#536455]" />,
      badge: "High Court & Revenue",
      description:
        "Handling property title disputes, breach of contract, stay orders, and Constitutional Writ petitions before the Rajasthan High Court, Jaipur Bench.",
      highlights: ["Property Title & Boundary Suits", "High Court Writ Petitions (Art. 226)", "Stay Orders & Injunctions"],
    },
    {
      title: "Criminal Defense & Bails",
      icon: <ShieldCheck className="w-5 h-5 text-[#536455]" />,
      badge: "Session & High Court",
      description:
        "Representing clients in anticipatory bail, regular bail applications, criminal revisions, and FIR quashing (Section 482 CrPC / 528 BNSS).",
      highlights: ["Anticipatory & Regular Bail", "FIR Quashing & Revision", "Sessions Trial Representation"],
    },
    {
      title: "Family & Matrimonial Law",
      icon: <Users className="w-5 h-5 text-[#536455]" />,
      badge: "Family Courts Jaipur",
      description:
        "Compassionate yet firm legal counsel in divorce proceedings, child custody, alimony, and domestic violence proceedings.",
      highlights: ["Divorce & Mutual Consent Petitions", "Child Custody & Maintenance", "Domestic Violence Protection"],
    },
  ];

  return (
    <section className="py-6 sm:py-10">
      <Container>
        <div className="space-y-6">
          {/* Section Heading */}
          <div className="space-y-1 text-center sm:text-left">
            <Badge variant="sage">Primary Practice Areas</Badge>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B2430]">
              Key Areas of Legal Practice
            </h2>
            <p className="text-xs sm:text-sm text-[#4B5A6C] max-w-2xl">
              Focusing on trial preparation, legal strategy, and effective representation across Jaipur courts.
            </p>
          </div>

          {/* Practice Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {practices.map((item, index) => (
              <Card
                key={index}
                variant="default"
                hoverable
                className="flex flex-col justify-between space-y-4 border-[#E2D7C5]"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#E4EBE5] flex items-center justify-center">
                      {item.icon}
                    </div>
                    <Badge variant="sandstone">{item.badge}</Badge>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1B2430]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#4B5A6C] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E2D7C5]/60 space-y-2">
                  <p className="text-[11px] font-semibold text-[#536455] uppercase tracking-wider">
                    Common Matters:
                  </p>
                  <ul className="space-y-1">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-[#1B2430] flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#536455]"></span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
