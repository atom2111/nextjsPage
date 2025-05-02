import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "Anvar | Portofolio",

    description:
		"My name is Anvar, I'm a web developer and I'm passionate about it. I'm currently studying at Universitas Negeri Malang.",

    author: "Anvar Kurbanov",
    siteUrl: "https://www.alvalens.my.id",
    applicationName: "Anvar",

    keywords: [
		"anvars",
		"anvar",
		"anvar kurbanov",
		"kurbanov",
		"anvar kurbanov",
		"anvar kurbanov",
		"kurbanov",
		"anvar porto",
		"anvar um",
	],

    openGraph: {
		type: "website",
		url: "https://www.anvars.my.id",
		title: "Anvar | Portofolio",
		site_name: "Anvar | Portofolio",
		description: "My name is Anvar, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Anvar Portofolio",
			},
		],
		site_name: "Anvar | Portofolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
