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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
	name: z.string().min(2, "Needs to have at least 2 characters"),
});
export function RouteForm() {
	const form = useForm({
		resolver: zodResolver(schema),
		defaultValues: {
			name: "",
		},
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
								<Input {...field} placeholder="name" />
							</FormControl>
							<FormDescription>
								This is the name for your route.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Create Route</Button>
			</form>
		</Form>
	);
}
