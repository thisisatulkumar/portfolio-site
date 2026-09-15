import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://thisisatulkumar.vercel.app"),
  title: "Atul Kumar | Competitive Programming and Writing",
  description:
    "I am Atul Kumar, a sophomore at IET Lucknow pursuing a Bachelor's degree in Computer Science and Engineering. I am actively doing competitive programming and actively working on my mental health. I also write.",
  openGraph: {
    title: "Atul Kumar",
    description:
      "I am Atul Kumar, a sophomore at IET Lucknow pursuing a Bachelor's degree in Computer Science and Engineering. I am actively doing competitive programming and actively working on my mental health. I also write.",
    url: "https://thisisatulkumar.vercel.app",
    siteName: "Atul Kumar",
    type: "website",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/212378250?v=4",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Atul Kumar",
    description:
      "I am Atul Kumar, a sophomore at IET Lucknow pursuing a Bachelor's degree in Computer Science and Engineering. I am actively doing competitive programming and actively working on my mental health. I also write.",
    images: ["https://avatars.githubusercontent.com/u/212378250?v=4"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className="min-h-full flex flex-col px-4 md:px-40 lg:px-80 py-8">
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
