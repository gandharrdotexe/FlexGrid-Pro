import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FlexGrid Pro",
  description: "FlexGrid Pro is a web-based tool that lets users visually create responsive flexbox grid layouts. Users can either choose from a set of predefined grid templates or use the custom grid mode, where they draw boxes by connecting dots on a canvas-like grid. Once the layout is created, the app generates the corresponding HTML and CSS code—with the option to choose between plain CSS or Tailwind CSS—making it easy to integrate into any web project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
