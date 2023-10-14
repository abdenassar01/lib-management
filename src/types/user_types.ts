import zod from "zod";

const userBookSchema = zod.object({
	id: zod.number({
		required_error: "id is required.",
	}),
	book_id: zod.number({
		required_error: "book_id is required.",
	}),
	user_id: zod.number({
		required_error: "user_id is required.",
	}),
	borrowed_date: zod.date({
		required_error: "borrowed date is required.",
	}),
	return_date: zod.date({
		required_error: "return date is required.",
	}),
});

export type UserBook = zod.infer<typeof userBookSchema>;
