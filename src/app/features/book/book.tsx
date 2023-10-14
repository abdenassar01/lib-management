import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { bookSchema } from "@/types/book";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import CategorySelect from "@/components/commen/category-select";

type FormValues = z.infer<typeof bookSchema>;

function Book() {
	const onSubmit = (data: FormValues) => {
		console.log("Data: ", data);
	};

	const form = useForm<FormValues>({
		mode: "onChange",
		resolver: zodResolver(bookSchema),
	});

	return (
		<div className="w-full flex justify-center items-center">
			<Card className="w-[60%]">
				<CardHeader>
					<CardTitle>Add new book</CardTitle>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-8 gap-2">
							<div className="grid grid-cols-2 gap-2">
								<FormField
									control={form.control}
									name="title"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Title</FormLabel>
											<FormControl>
												<Input
													{...field}
													placeholder="title"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="author"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Author</FormLabel>
											<FormControl>
												<Input
													{...field}
													placeholder="author"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className="grid grid-cols-2 gap-2">
								<FormField
									control={form.control}
									name="publish_date"
									render={({ field }) => (
										<FormItem className="flex flex-col justify-between">
											<FormLabel className="mt-[6px]">
												Publish Date:
											</FormLabel>
											<Popover>
												<PopoverTrigger asChild>
													<FormControl>
														<Button
															variant={"outline"}
															className={cn(
																"w-full pl-3 text-left font-normal",
																!field.value &&
																	"text-muted-foreground"
															)}>
															{field.value ? (
																format(
																	field.value,
																	"PPP"
																)
															) : (
																<span>
																	Pick a date
																</span>
															)}
															<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
														</Button>
													</FormControl>
												</PopoverTrigger>
												<PopoverContent
													className="w-auto p-0"
													align="start">
													<Calendar
														mode="single"
														selected={field.value}
														onSelect={
															field.onChange
														}
														disabled={(date) =>
															date > new Date() ||
															date <
																new Date(
																	"1900-01-01"
																)
														}
														initialFocus
													/>
												</PopoverContent>
											</Popover>
											<FormMessage />
										</FormItem>
									)}
								/>
								<CategorySelect
									control={form.control}
									name="category"
								/>
							</div>
							<div className="flex items-end gap-2">
								<FormField
									control={form.control}
									name="cover"
									render={({ field }) => (
										<FormItem className="w-full">
											<FormLabel>Cover</FormLabel>
											<FormControl>
												<Input
													{...field}
													type="file"
													placeholder="cover"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Button
									className="w-full"
									type="submit">
									Submit
								</Button>
							</div>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
}

export default Book;
