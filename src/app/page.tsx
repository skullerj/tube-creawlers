import { RouteForm } from "./form";
export default function Home() {
	return (
		<main className="flex w-screen h-screen flex-col items-center p-4">
			<h1>Create new route</h1>
			<RouteForm />
		</main>
	);
}
