import { CATEGORIES } from "@/constant/categories";
import { STATUS } from "@/constant/status";
import zod from "zod";

export const bookSchema = zod.object({
	id: zod.number().optional(),
	title: zod.string({
		required_error: "title is required.",
	}),
	author: zod.string({
		required_error: "author is required.",
	}),
	cover: zod.string().optional(),
	publish_date: zod.date({
		required_error: "publish date is required.",
	}),
	status: zod
		.enum([STATUS.AVAILABLE, STATUS.BORROWED, STATUS.OVERDUE])
		.default(STATUS.AVAILABLE),
	category: zod.enum([
		CATEGORIES.COMICS,
		CATEGORIES.FANTAZY,
		CATEGORIES.MYSTERY,
		CATEGORIES.SCIENCE,
		CATEGORIES.THRILLER,
		CATEGORIES.YOUNG,
	]),
});

export type Book = zod.infer<typeof bookSchema>;
