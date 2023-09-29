import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Data Scraper",
	description: "Scraping data from the web",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr">
			<body
				className={`flex bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 ${inter.className}`}
			>
				<Sidebar />
				{children}
			</body>
		</html>
	);
}
