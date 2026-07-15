import z from "zod";

//login schema
export const loginSchema = z.object({
  email: z
    .string({ error: "Email is required" })
    .trim()
    .email("Invalid email address"),
  password: z
    .string({ error: "Password is required" })
    .trim()
    .min(8, "Password must be at least 8 characters long"),
});

//signup schema
export const signupSchema = loginSchema.extend({
  username: z
    .string({
      error: "Name is required",
    })
    .trim()
    .min(3, "Name must be at least 3 characters long")
    .max(255, "Name must not be more than 255 characters long"),

  phone: z
    .string({ error: "Phone number is required" })
    .trim()
    .regex(/^\+?[0-9]{10,15}$/, "Invalid phone number"),
});

export const contactSchema = z.object({
  username: z
    .string({
      error: "Name is required",
    })
    .trim()
    .min(3, "Name must be at least 3 characters long")
    .max(255, "Name must not be more than 255 characters long"),
  email: z
    .string({ error: "Email is required" })
    .trim()
    .email("Invalid email address")
    .min(5, "Email must be at least 5 characters long")
    .max(255, "Email must not be more than 255 characters long"),
  message: z
    .string({ error: "Message is required" })
    .trim()
    .min(8, "Message must be at least 8 characters long")
    .max(255, "Message must not be more than 255 characters long"),
});
