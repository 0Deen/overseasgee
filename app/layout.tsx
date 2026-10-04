import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/chat/ChatWidget";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800", "900"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://ajiramajuu.com"; // update once your domain is live

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Ajira Majuu",
    template: "%s | Ajira Majuu",
  },

  description:
    "Ajira Majuu is a trusted overseas recruitment agency in Kenya connecting job seekers with verified employment opportunities in Saudi Arabia, UAE, Qatar, Kuwait, Bahrain and Oman. Find caregiver, housemaid, driver, security, hospitality, construction and cleaning jobs abroad. Njoo, Tusafiri Ughaibuni.",

  keywords: [
    "Ajira Majuu",
    "recruitment agency in Kenya",
    "overseas recruitment agency Kenya",
    "jobs abroad Kenya",
    "jobs abroad for Kenyans",
    "Gulf jobs Kenya",
    "Kenya to Saudi Arabia jobs",
    "Kenya to Qatar jobs",
    "Kenya to UAE jobs",
    "Kenya to Dubai jobs",
    "Kenya to Kuwait jobs",
    "Kenya to Bahrain jobs",
    "Kenya to Oman jobs",
    "caregiver jobs Qatar",
    "caregiver jobs Saudi Arabia",
    "housemaid jobs Saudi Arabia",
    "domestic worker jobs Gulf",
    "driver jobs Saudi Arabia",
    "security jobs Gulf",
    "hospitality jobs Dubai",
    "construction jobs Gulf",
    "cleaning jobs abroad",
    "licensed recruitment agency Kenya",
    "manpower agency Kenya",
    "labour export agency Kenya",
    "employment agency Nairobi",
    "how to get a job abroad from Kenya",
    "safe overseas recruitment Kenya",
  ],

  applicationName: "Ajira Majuu",
  authors: [{ name: "Ajira Majuu" }],
  creator: "Ajira Majuu",
  publisher: "Ajira Majuu",
  category: "Recruitment / Employment Services",

  alternates: {
    canonical: "/",
    // languages: {
    //   "en-KE": "/",
    //   "sw-KE": "/sw",
    // },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_KE",
    url: SITE_URL,
    siteName: "Ajira Majuu",
    title: "Ajira Majuu — Overseas Recruitment Agency in Kenya | Gulf Jobs",
    description:
      "Connect with verified overseas job opportunities in Saudi Arabia, UAE, Qatar, Kuwait, Bahrain and Oman. Trusted, safe, and professional recruitment for Kenyan talent.",
    images: [
      {
        url: "/logo.jpeg",
        width: 512,
        height: 512,
        alt: "Ajira Majuu logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ajira Majuu",
    description:
      "Verified overseas job opportunities in the Gulf for Kenyan talent. Safe, professional, trusted recruitment.",
    images: ["/logo.png"],
  },

  icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },

  // Add these once you register with Google Search Console / Bing Webmaster Tools
  // verification: {
  //   google: "your-google-site-verification-code",
  //   other: { "msvalidate.01": "your-bing-verification-code" },
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <LanguageProvider>
          {/* Navbar and Footer now live here, once, so every new route
              (destinations, jobs, about, etc.) gets them automatically
              instead of each page re-importing and duplicating them. */}
          <Navbar />
          {children}
          <Footer />
          <ChatWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}