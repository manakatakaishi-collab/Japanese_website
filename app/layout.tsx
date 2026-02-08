import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP, Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://manaka-japanese.fr";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const notoSerifJp = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Manaka Japanese - Authentic Language Tutoring in Toulouse",
    template: "%s | Manaka Japanese",
  },
  description:
    "Personalized Japanese language tutoring in Toulouse with a native teacher. Master conversation, grammar, and JLPT preparation.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Manaka Japanese - Authentic Language Tutoring in Toulouse",
    description:
      "Personalized Japanese language tutoring with a native teacher. Master conversation, grammar, and JLPT preparation.",
    images: [{ url: "/images/profile-manaka.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manaka Japanese - Authentic Language Tutoring in Toulouse",
    description:
      "Personalized Japanese language tutoring with a native teacher. Master conversation, grammar, and JLPT preparation.",
    images: ["/images/profile-manaka.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${notoSansJp.variable} ${notoSerifJp.variable} antialiased bg-white text-slate-900`}
      >
        <div className="min-h-screen flex flex-col font-sans selection:bg-primary/20">
          <Navbar />
          <ScrollReveal />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
