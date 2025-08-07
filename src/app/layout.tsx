import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WhatsappPopup } from "@/components/ui/whatsapp-popup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brennda-advocacia.vercel.app"),
  title: {
    default: "Dra. Brennda - Advocacia Especializada",
    template: "%s | Dra. Brennda - Advocacia",
  },
  description: "Advocacia especializada em Direito de Família, Civil, Contratos e Direito do Consumidor. Atendimento personalizado e soluções jurídicas eficazes em São Paulo.",
  keywords: ["advocacia", "direito de família", "direito civil", "contratos", "direito do consumidor", "advogada", "são paulo"],
  authors: [{ name: "Dra. Brennda" }],
  creator: "Dra. Brennda",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon-16x16.svg",
        sizes: "16x16",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://brennda-advocacia.vercel.app",
    siteName: "Dra. Brennda - Advocacia",
    title: "Dra. Brennda - Advocacia Especializada",
    description: "Advocacia especializada em Direito de Família, Civil, Contratos e Direito do Consumidor.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Brennda - Advocacia Especializada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Brennda - Advocacia Especializada",
    description: "Advocacia especializada em Direito de Família, Civil, Contratos e Direito do Consumidor.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
        <WhatsappPopup />
      </body>
    </html>
  );
}
