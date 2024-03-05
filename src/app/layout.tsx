import AppProviders from "@/components/AppProviders";
import "@/styles/globals.css";
import { Children } from "@/types";

import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "Create T3 App",
    description: "Generated by create-t3-app",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: Children) {
    return (
        <html lang="en" data-theme="light">
            <body className={`font-sans ${inter.variable}`}>
                <AppProviders>{children}</AppProviders>
            </body>
        </html>
    );
}
