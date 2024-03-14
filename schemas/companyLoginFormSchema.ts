import z from "zod";

export const companyLoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  rememberFor30Days: z.boolean(),
});
