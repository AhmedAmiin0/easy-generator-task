
import { z } from "zod";

export const signupSchema = z
    .object({
        email: z
            .string()
            .min(1, "Email is required")
            .email("Please enter a valid email address"),
        name: z
            .string()
            .min(1, "Name is required")
            .min(3, "Name must be at least 3 characters long"),
        password: z
            .string()
            .min(1, "Password is required")
            .min(8, "Password must be at least 8 characters long")
            .regex(/[a-zA-Z]/, "Password must contain at least one letter")
            .regex(/\d/, "Password must contain at least one number")
            .regex(
                /[!@#$%^&*(),.?":{}|<>]/,
                "Password must contain at least one special character"
            ),
        confirmPassword: z.string().min(1, "Please confirm your password"),
        terms: z.boolean().refine((val) => val === true, {
            message: "You must accept the terms and conditions",
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });
export type SignupFormData = z.infer<typeof signupSchema>;
