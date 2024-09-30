"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
	const pathname = usePathname();
	const { user } = useUser();
	return (
		<nav className="h-12 w-full flex items-center px-4 drop-shadow-sm bg-card text-card-foreground border-b">
			<h1 className="text-lg flex-1">Tube Crawlers</h1>
			<div className="flex gap-2">
				<Link href="/home" className={pathname === "/home" ? "underline" : ""}>
					Home
				</Link>
				{user && <a href="/api/auth/logout">Log Out</a>}
			</div>
		</nav>
	);
}
