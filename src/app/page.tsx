import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Start() {
	return (
		<main className="pt-8">
			<div className="bg-card flex flex-col gap-3 text-center">
				<h1 className="text-4xl">Welcome Tube Crawlers!</h1>
				<h2 className="text-xl">To the route sharing website for Londoners</h2>
				<p>
					Identify yourself, fellow underground traveler, and share your <br />
					rumbling knowledge with the world
				</p>
				<Link href="/home">
					<Button>Identify Myself</Button>
				</Link>
			</div>
		</main>
	);
}
