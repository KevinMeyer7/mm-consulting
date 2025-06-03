"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  leadFormSchema,
  type LeadFormData,
} from "@/app/components/lib/schemas";
import { supabase } from "./integrations/supabase";

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    email: "",
    company: "",
    companySize: "",
    urgency: "",
    budget: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validatedData = leadFormSchema.parse(formData);

      // Submit to Supabase
      const { error } = await supabase.from("leads").insert({
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company,
        company_size: validatedData.companySize,
        urgency: validatedData.urgency,
        budget: validatedData.budget,
        notes: validatedData.notes || null,
      });

      if (error) {
        console.error("Supabase error:", error);
        throw new Error("Failed to submit lead information");
      }

      // Open Calendly link in a new tab
      window.open(
        "https://calendly.com/d/cq83-75r-3py/introduction-call-m-m-consulting",
        "_blank",
        "noopener,noreferrer"
      );
    } catch (error) {
      console.error("Form submission error:", error);

      if (error instanceof Error && error.message.includes("validation")) {
        // Handle validation errors
        setErrors({ general: "Please check all required fields" });
      } else {
        setErrors({ general: "Something went wrong. Please try again." });
      }

      toast("Failed to submit your information. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof LeadFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear field error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <section id="lead" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-[32px] tracking-[-0.03em] font-bold text-brand-textDim mb-4">
              Book Your Discovery Call
            </h2>
            <p className="text-base leading-relaxed text-brand-textDim">
              Let&apos;s discuss how we can transform your team&apos;s
              productivity with AI. No commitment required.
            </p>
          </div>

          <Card className="bg-brand-bg border border-brand-border/10 rounded-3xl shadow-sm p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {errors.general && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  {errors.general}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-brand-textDim">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className="mt-1"
                    placeholder="Arhant Mathur"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-brand-textDim">
                    Work Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="mt-1"
                    placeholder="arhant@mm-consulting.ai"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="company" className="text-brand-textDim">
                  Company *
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => updateField("company", e.target.value)}
                  className="mt-1"
                  placeholder="MM Consulting Ltd"
                  required
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <Label className="text-brand-textDim">Company Size *</Label>
                  <Select
                    onValueChange={(value) => updateField("companySize", value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50-100">50-100 employees</SelectItem>
                      <SelectItem value="100-250">100-250 employees</SelectItem>
                      <SelectItem value="250-500">250-500 employees</SelectItem>
                      <SelectItem value="500-1000">
                        500-1000 employees
                      </SelectItem>
                      <SelectItem value="1000+">1000+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-brand-textDim">
                    Training Urgency *
                  </Label>
                  <Select
                    onValueChange={(value) => updateField("urgency", value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">
                        ASAP (within 30 days)
                      </SelectItem>
                      <SelectItem value="quarter">This quarter</SelectItem>
                      <SelectItem value="6months">Next 6 months</SelectItem>
                      <SelectItem value="exploring">Just exploring</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-brand-textDim">Budget Range *</Label>
                  <Select
                    onValueChange={(value) => updateField("budget", value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                      <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                      <SelectItem value="100k-250k">$100k - $250k</SelectItem>
                      <SelectItem value="250k+">$250k+</SelectItem>
                      <SelectItem value="tbd">To be determined</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="notes" className="text-brand-textDim">
                  Additional Information
                </Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => updateField("notes", e.target.value)}
                  className="mt-1"
                  placeholder="Tell us about your current AI initiatives, challenges, or specific goals..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full transition"
              >
                {isSubmitting
                  ? "Scheduling Your Call..."
                  : "Book Discovery Call"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
