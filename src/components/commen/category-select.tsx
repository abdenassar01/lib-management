import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import React from "react";
import { useController } from "react-hook-form";
import { Control } from "react-hook-form";
import { FormLabel } from "../ui/form";
import { CATEGORIES } from "@/constant/categories";

type Props = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	control: Control<any>;
	name: string;
};

function CategorySelect({ control, name }: Props) {
	const {
		field: { onChange, value },
	} = useController({
		name: name,
		control: control,
	});

	return (
		<div className="flex flex-col items-start justify-between">
			<FormLabel className="mt-[5px]">Cover</FormLabel>
			<Select
				onValueChange={onChange}
				value={value}>
				<SelectTrigger className="">
					<SelectValue placeholder="Select a category" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Categories</SelectLabel>
						{Object.keys(CATEGORIES).map((item) => (
							<SelectItem
								key={`category-${item}`}
								value={item}>
								{CATEGORIES[item as keyof typeof CATEGORIES]}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
}

export default CategorySelect;
