import { ROLE } from "@/constant/role";
import zod from "zod";

const userSchema = zod.object({
	id: zod.number({
		required_error: "id is required.",
	}),
	email: zod
		.string({
			required_error: "email is required.",
		})
		.email("email not valid: example@mail.com"),
	firstname: zod.string({
		required_error: "firstname is required.",
	}),
	lastname: zod.string({
		required_error: "lastname is required.",
	}),
	role: zod.enum([ROLE.LIBRARIAN, ROLE.MEMBER]).default(ROLE.MEMBER),
});

export type User = zod.infer<typeof userSchema>;
