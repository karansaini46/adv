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
  title: "Advocate Rajeshwar Sharma | Jaipur High Court Lawyer",
  description:
    "Official legal practice site of Advocate Rajeshwar Sharma. 12+ Years Experience in Civil, Criminal, and Family Law at Rajasthan High Court, Jaipur Bench.",
  keywords: [
    "Jaipur High Court Advocate",
    "Advocate Rajeshwar Sharma",
    "Rajasthan High Court Lawyer",
    "Civil Lawyer Jaipur",
    "Criminal Lawyer Jaipur",
    "Family Court Lawyer Jaipur",
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
