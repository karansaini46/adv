import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Adv. Deepak Gahlot | Rajasthan High Court Advocate",
  description:
    "Official legal practice site of Adv. Deepak Gahlot. Chamber No. 154, E-Block, Rajasthan High Court. Qualification: LLM LLB PGDFS PGDLL M.COM B.COM.",
  keywords: [
    "Rajasthan High Court Advocate",
    "Adv Deepak Gahlot",
    "Rajasthan High Court Lawyer",
    "High Court Chamber E-Block",
    "Advocate Deepak Gahlot",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="bg-[#FAF7F2] text-[#1B2430] min-h-screen flex flex-col font-sans antialiased selection:bg-[#E4EBE5] selection:text-[#536455]">
        {children}
      </body>
    </html>
  );
}
