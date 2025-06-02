import { z } from "zod";

export const leadFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid work email address"),
  company: z.string().min(2, "Company name is required"),
  companySize: z.string().min(1, "Please select company size"),
  urgency: z.string().min(1, "Please select training urgency"),
  budget: z.string().min(1, "Please select budget range"),
  notes: z.string().optional(),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
