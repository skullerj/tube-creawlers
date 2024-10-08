"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
	const pathname = usePathname();
	return (
		<nav className="h-12 w-full flex items-center px-4 drop-shadow-sm bg-card text-card-foreground border-b">
			<h1 className="text-lg flex-1">Tube Crawlers</h1>
			<div>
				<Link href="/" className={pathname === "/" ? "underline" : ""}>
					Home
				</Link>
			</div>
		</nav>
	);
}
