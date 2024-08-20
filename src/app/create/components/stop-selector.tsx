import { SelectContent, SelectItem } from "@/components/ui/select";
import { fetcher } from "@/lib/utils";
import useSWR from "swr";

export default function StopSelector({ id }: { id?: string }) {
	const { data, error, isLoading } = useSWR("/api/stops", fetcher);

	if (error) return <div>Something went wrong...</div>;
	if (isLoading) return <div>Loading ...</div>;
	return (
		<SelectContent>
			{data.stops.map(({ name }: { name: string }) => (
				<SelectItem key={name} value={name}>
					{name}
				</SelectItem>
			))}
		</SelectContent>
	);
}
