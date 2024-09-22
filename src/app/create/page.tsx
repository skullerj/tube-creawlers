"use client";

import { Button } from "@/components/ui/button";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { z } from "zod";

import StopSelector from "./components/stop-selector";

const schema = z.object({
	name: z.string().min(2, "Needs to have at least 2 characters"),
	stops: z
		.array(
			z.object({
				name: z.string({ message: "You need to select a stop" }),
			}),
		)
		.min(2, "You need to add at least 2 stops"),
});

export default function Create() {
	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: {
			name: "",
			stops: [{ name: "" }],
		},
	});
	const stops = useFieldArray({
		control: form.control,
		name: "stops",
	});

	const stopsWatch = useWatch({
		name: "stops",
		control: form.control,
	});
	return (
		<Form {...form}>
			<form
				className="w-full max-w-lg flex flex-col gap-2"
				onSubmit={form.handleSubmit((data) => console.log(data))}
			>
				<FormField
					name="name"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Route Name</FormLabel>
							<FormControl>
								<Input {...field} placeholder="My favourite route" />
							</FormControl>
							<FormDescription>
								This is the name for your route.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				{stops.fields.map((item, index) => (
					<FormField
						name={`stops.${index}.name`}
						key={item.id}
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Stop number {index + 1}</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="From" />
										</SelectTrigger>
									</FormControl>
									<StopSelector />
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
				))}

				<Button
					disabled={!stopsWatch[stopsWatch.length - 1]?.name}
					onClick={() => stops.append({ name: "" })}
				>
					Add Stop
				</Button>
				<Button type="submit">Create Route</Button>
			</form>
		</Form>
	);
}
