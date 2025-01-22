import z from "zod";

// registration --------------------------------------------------------------
export const registrationSchema = z.object({
  username: z
    .string()
    .min(4)
    .max(20)
    .regex(/^\w+$/, "Username contains invalid characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  confirmPassword: z
    .string()
    .min(8, "Password must be at least 8 characters long"),
  firstName: z
    .string()
    .min(3)
    .regex(/^[a-zA-Z]+$/, "First name contains invalid characters"),
  lastName: z
    .string()
    .min(3)
    .regex(/^[a-zA-Z]+$/, "Last name contains invalid characters"),
  phoneNumber: z
    .string()
    .length(10, "Phone number must be 10 digits long")
    .regex(/^\d+$/, "Phone number must contain only digits"),
});

export type RegistrationFields = z.infer<typeof registrationSchema>;

// login --------------------------------------------------------------
export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export type LoginFields = z.infer<typeof loginSchema>;
