"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { X, Calendar, Phone, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export function ConsultationModal({ isOpen, onClose, defaultCategory }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: defaultCategory || "Civil Litigation",
    preferredTime: "Morning (10 AM - 1 PM)",
    notes: "",
  });

  useEffect(() => {
    if (defaultCategory) {
      setFormData((prev) => ({ ...prev, category: defaultCategory }));
    }
  }, [defaultCategory]);

  const handleSafeClose = useCallback(() => {
    if (window.location.hash === "#consultation") {
      window.history.back();
    } else {
      setSubmitted(false);
      onClose();
    }
  }, [onClose]);

  // Sync with browser history so pressing Back button closes modal without closing tab/leaving site
  useEffect(() => {
    if (isOpen) {
      window.history.pushState({ consultationModal: true }, "", "#consultation");
      const handlePopState = () => {
        setSubmitted(false);
        onClose();
      };
      window.addEventListener("popstate", handlePopState);
      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    handleSafeClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B2430]/60 backdrop-blur-xs"
        onClick={handleSafeClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-lg overflow-hidden max-h-[92vh] overflow-y-auto"
        >
          <Card variant="default" className="bg-[#FAF7F2] border-[#E2D7C5] p-5 sm:p-7 shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={handleSafeClose}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-[#EFE9DE] text-[#1B2430] hover:bg-[#E2D7C5] transition-colors"
              aria-label="Close consultation modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#E4EBE5] text-[#536455] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-bold text-[#1B2430]">
                    Consultation Request Registered
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5A6C]">
                    Adv. Deepak Gahlot&apos;s chamber will confirm your slot at {formData.phone}.
                  </p>
                </div>
                <div className="p-3 bg-[#EFE9DE] rounded-xl text-xs text-[#1B2430] space-y-1 text-left">
                  <div className="font-semibold">Direct Chamber Connect:</div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#536455]" />
                    <span>+91 70144 38542</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#536455]" />
                    <span>Chamber No. 154, E-Block, Rajasthan High Court</span>
                  </div>
                </div>
                <Button variant="primary" size="md" fullWidth onClick={handleReset}>
                  Done
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#536455]">
                    <Calendar className="w-4 h-4" />
                    <span>Direct Chamber Appointment</span>
                  </div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1B2430]">
                    Schedule Legal Consultation
                  </h2>
                  <p className="text-xs text-[#4B5A6C]">
                    Confidential evaluation for Rajasthan High Court & District matters.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-[#1B2430] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2D7C5] bg-[#FAF7F2] text-sm text-[#1B2430] focus:outline-none focus:ring-2 focus:ring-[#1B2430]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1B2430] mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 70144XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2D7C5] bg-[#FAF7F2] text-sm text-[#1B2430] focus:outline-none focus:ring-2 focus:ring-[#1B2430]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#1B2430] mb-1">
                        Legal Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-[#E2D7C5] bg-[#FAF7F2] text-xs sm:text-sm text-[#1B2430] focus:outline-none focus:ring-2 focus:ring-[#1B2430]"
                      >
                        <option value="Civil Litigation">Civil Litigation</option>
                        <option value="Criminal Matters">Criminal Defense</option>
                        <option value="Cyber Law & IT Frauds">Cyber Law & IT Frauds</option>
                        <option value="MACT (Accident Claims)">MACT (Accident Claims)</option>
                        <option value="Family & Divorce">Family & Divorce Law</option>
                        <option value="Property Disputes">Property & Revenue</option>
                        <option value="Bail Applications">Bail Application</option>
                        <option value="Consumer Cases">Consumer Protection</option>
                        <option value="High Court Writ">High Court Writ Petition</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1B2430] mb-1">
                        Preferred Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-[#E2D7C5] bg-[#FAF7F2] text-xs sm:text-sm text-[#1B2430] focus:outline-none focus:ring-2 focus:ring-[#1B2430]"
                      >
                        <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                        <option value="Afternoon (2 PM - 5 PM)">Afternoon (2 PM - 5 PM)</option>
                        <option value="Evening (5 PM - 7:30 PM)">Evening (5 PM - 7:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1B2430] mb-1">
                      Brief Case Summary (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Briefly describe your legal query..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2D7C5] bg-[#FAF7F2] text-sm text-[#1B2430] focus:outline-none focus:ring-2 focus:ring-[#1B2430]"
                    />
                  </div>

                  <div className="pt-2">
                    <Button variant="primary" size="md" fullWidth type="submit">
                      Confirm Appointment Request
                    </Button>
                  </div>
                </form>

                <div className="pt-2 border-t border-[#E2D7C5]/60 flex items-center justify-between text-[11px] text-[#4B5A6C]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#536455]" />
                    Chambers: Mon-Sat
                  </span>
                  <span>Strict Confidentiality Guaranteed</span>
                </div>
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
