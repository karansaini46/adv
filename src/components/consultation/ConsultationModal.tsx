"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { X, Calendar, Phone, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "Civil Law",
    preferredTime: "Morning (10 AM - 1 PM)",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B2430]/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-lg overflow-hidden"
        >
          <Card variant="default" className="bg-[#FAF7F2] border-[#E2D7C5] p-5 sm:p-7 shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={onClose}
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
                    Consultation Request Received
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5A6C]">
                    Thank you, {formData.name}. Our chamber office will call you back shortly on{" "}
                    <strong className="text-[#1B2430]">{formData.phone}</strong> to confirm your slot.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-[#EFE9DE] text-xs text-[#4B5A6C] text-left space-y-1">
                  <p className="font-semibold text-[#1B2430]">Chamber Address for In-Person Meeting:</p>
                  <p>42, Lawyers Enclave, C-Scheme, Jaipur (Mon-Sat, 9:30 AM - 7 PM)</p>
                </div>
                <Button variant="primary" fullWidth onClick={handleReset}>
                  Done
                </Button>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#536455]">
                    Rajasthan High Court Advocate
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1B2430]">
                    Book a Legal Consultation
                  </h2>
                  <p className="text-xs text-[#4B5A6C]">
                    Fill in your details below to request a meeting at our Jaipur chambers or a phone discussion.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-[#1B2430] mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2D7C5] bg-[#FAF7F2] text-sm text-[#1B2430] focus:outline-none focus:ring-2 focus:ring-[#1B2430]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1B2430] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98290XXXXX"
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
                        <option value="Civil Law">Civil Litigation</option>
                        <option value="Criminal Law">Criminal Defense</option>
                        <option value="Family Law">Family & Divorce Law</option>
                        <option value="High Court Writ">High Court Writ / Appeal</option>
                        <option value="Property Dispute">Property & Revenue</option>
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
                      placeholder="Briefly state your matter (e.g. Land dispute in Jaipur court, High Court bail application)"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E2D7C5] bg-[#FAF7F2] text-xs sm:text-sm text-[#1B2430] focus:outline-none focus:ring-2 focus:ring-[#1B2430]"
                    />
                  </div>

                  <div className="pt-2">
                    <Button variant="primary" size="md" fullWidth type="submit">
                      Confirm Consultation Request
                    </Button>
                  </div>
                </form>

                <div className="pt-2 border-t border-[#E2D7C5] text-center">
                  <p className="text-xs text-[#4B5A6C]">
                    Need urgent assistance?{" "}
                    <a href="tel:+919829012345" className="font-semibold text-[#1B2430] underline">
                      Call Chambers Directly (+91 98290 12345)
                    </a>
                  </p>
                </div>
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
