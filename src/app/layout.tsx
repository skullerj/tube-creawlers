import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "An app to help Londoners crawl the tube effeciently.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"main-h-screen bg-background font-sans atialised",
					fontSans.variable,
				)}
			>
				{children}
			</body>
		</html>
	);
}
