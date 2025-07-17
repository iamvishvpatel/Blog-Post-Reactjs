import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  bio: z.string().min(3, "Bio is required"),
  role: z.string()
});

export type SignupFormData = z.infer<typeof signupSchema>;
