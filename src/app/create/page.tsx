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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import stations from "../../stations.json";

const schema = z.object({
	name: z.string().min(2, "Needs to have at least 2 characters"),
	from: z.string({ message: "Select the starting station" }),
	to: z.string({ message: "Select the ending station" }),
});
export default function Create() {
	const form = useForm({
		resolver: zodResolver(schema),
		defaultValues: {
			name: "",
			from: "",
			to: "",
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
				<FormField
					name="from"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>From</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="From" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{stations.stations.map(({ name }) => (
										<SelectItem key={name} value={name}>
											{name}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					name="to"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>To</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="To" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{stations.stations.map(({ name }) => (
										<SelectItem key={name} value={name}>
											{name}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Create Route</Button>
			</form>
		</Form>
	);
}
