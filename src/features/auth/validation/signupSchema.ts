import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(2, "Username is required"),
  email: z.string().email("Invalid email address"),
  password: z.string(),
  bio: z.string().min(3, "Bio is required"),
  roleId: z.number()
});

export type SignupFormData = z.infer<typeof signupSchema>;
