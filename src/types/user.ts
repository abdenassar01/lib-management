import { ROLE } from "@/constant/role";
import z from "zod";

export const userSchema = z.object({
  id: z.number().optional(),
  email: z
    .string({
      required_error: "email is required.",
    })
    .email("email not valid: example@mail.com"),
  password: z
    .string({ required_error: "Password is required!" })
    .min(8, {
      message: "min length 8 character",
    })
    .max(32, {
      message: "max length 32 character",
    }),
  firstname: z.string({
    required_error: "firstname is required.",
  }),

  lastname: z.string({
    required_error: "lastname is required.",
  }),
  role: z.enum([ROLE.LIBRARIAN, ROLE.MEMBER]).default(ROLE.MEMBER),
});

export const loginSchema = userSchema.pick({ email: true, password: true });

export const credentials = z.object({
  accessToken: z.string(),
  user: userSchema,
});

export type User = z.infer<typeof userSchema>;
export type Credentials = z.infer<typeof credentials>;
export type Signin = z.infer<typeof loginSchema>;


export type UserWithRole = User & { role: typeof ROLE[keyof typeof ROLE] };
