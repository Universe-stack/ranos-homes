import type { Metadata } from "next";
import { Newsreader, Manrope, Lato } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-headline",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const lato = Lato({
  variable: "--font-fallback",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ranoshomes.com"),
  title: {
    default: "Ranos Homes | Premium Furniture & Interior Design Nigeria",
    template: "%s | Ranos Homes Nigeria",
  },
  description:
    "Ranos Homes designs and builds premium furniture and interior spaces for Nigerian homes and businesses, with WhatsApp-first enquiries and nationwide delivery.",
  alternates: {
    canonical: "https://ranoshomes.com",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Ranos Homes",
    title: "Ranos Homes | Premium Furniture & Interior Design Nigeria",
    description:
      "Premium furniture, custom interiors, and WhatsApp-first enquiries for high-intent buyers in Nigeria.",
    url: "https://ranoshomes.com",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${manrope.variable} ${lato.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <style>{`
          .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
          }
          .material-symbols-outlined.fill {
            font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </head>
      <body className="min-h-full flex flex-col bg-[#fcf9f8] text-[#1c1b1b] font-[family:var(--font-body)] overflow-x-hidden">{children}</body>
    </html>
  );
}
