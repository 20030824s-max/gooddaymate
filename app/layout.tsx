import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Good Day Mate | 沖縄の特別な体験を、あなたに",
    template: "%s | Good Day Mate",
  },
  description:
    "沖縄・恩納村で貸別荘「Sharrows」「Aniversario」を運営するGood Day Mate。非日常のプライベート空間で、最高の時間を。",
  keywords: [
    "沖縄",
    "貸別荘",
    "民泊",
    "恩納村",
    "Sharrows",
    "Aniversario",
    "Good Day Mate",
    "沖縄旅行",
    "プライベートヴィラ",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "Good Day Mate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
