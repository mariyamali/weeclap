import { Inter, Literata } from "next/font/google";
import "../globals.css";
import type { Metadata } from "next";
import Proivder from "./Provider";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const literata = Literata({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-literata",
});

//const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Solid | Next.js Template for Startup and SaaS",
  description: "Built with Next.js and TypeScript",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${literata.variable}`}>
        <Proivder>{children}</Proivder>
      </body>
    </html>
  );
}






