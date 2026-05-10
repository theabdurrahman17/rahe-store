import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "RAHÉ | Comfort in Modesty",
    template: "%s | RAHÉ"
  },
  description:
    "Modern modest wear including men's thobes, women's abayas, hijabs, and signature fragrances.",
  keywords: [
    "modest wear",
    "thobes",
    "abayas",
    "hijabs",
    "Islamic clothing",
    "luxury modest fashion"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ivory text-charcoal antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
