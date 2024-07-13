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
import { useForm } from "react-hook-form";

export function RouteForm() {
	const form = useForm();
	return (
		<Form {...form}>
			<FormField
				name="name"
				control={form.control}
				render={({ field }) => (
					<FormItem>
						<FormLabel>Route Name</FormLabel>
						<FormControl>
							<Input {...field} placeholder="name" />
						</FormControl>
						<FormDescription>This is the name for your route.</FormDescription>
						<FormMessage />
					</FormItem>
				)}
			/>
			<Button>Clicks can now be done</Button>
		</Form>
	);
}
