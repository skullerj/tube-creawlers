import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Nav from "./nav";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: "Tube Crawlers",
	description: "App to save and share your trip ideas inside London",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<UserProvider>
				<body
					className={cn(
						"flex w-screen h-screen flex-col items-center bg-background font-sans atialised",
						fontSans.variable,
					)}
				>
					<Nav />
					<main className="p-4">{children}</main>
				</body>
			</UserProvider>
		</html>
	);
}
