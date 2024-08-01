import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
	return (
		<main>
			<Button>
				<Link href="/create"> Create new Route</Link>
			</Button>
		</main>
	);
}
