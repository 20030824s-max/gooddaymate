import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
