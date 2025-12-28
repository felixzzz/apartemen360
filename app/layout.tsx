import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Apartemen360 - Sewa Apartemen Mudah & Cepat",
  description: "Temukan apartemen impian Anda dengan fitur 360 virtual tour hanya di Apartemen360.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${plusJakartaSans.variable} antialiased font-sans text-slate-900 bg-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}
