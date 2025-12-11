import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Space_Grotesk, Manrope } from "next/font/google";
import Script from "next/script";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-space",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-manrope",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lovableewebsite.vercel.app";

const ogImage = `${siteUrl}/assets/paywall.gif`;

const keywords = [
  "couples app",
  "shared pet app",
  "couple doodle widget",
  "love notes app",
  "shared plant care",
  "lock screen doodle",
  "couple rituals",
  "lovablee",
  "cozy couple app",
  "android ios couple app",
];

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "lovablee - your shared pet space",
  description:
    "lovablee is a cozy space for couples to care, create, and stay close every day. Raise your shared pet, send sweet gestures, doodle, and keep your bond warm.",
  keywords,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "lovablee - cozy couple space with a shared pet",
    description:
      "Care for a shared pet, send doodles and love notes, and keep each other close with gentle rituals.",
    url: siteUrl,
    siteName: "lovablee",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 1200,
        alt: "lovablee shared pet and doodle app for couples",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "lovablee - cozy couple space with a shared pet",
    description:
      "Water, feed, and play together, send doodles and love notes, and keep your pet and partner close.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "lovablee",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android",
  description:
    "A cozy space for couples to care for a shared pet, send doodles and love notes, and keep daily rituals close.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Shared pet care: water, feed, and play together",
    "Daily mood check-ins and quick love notes",
    "Hand-drawn doodles and home screen widgets",
    "Live lock-screen updates and notifications",
    "Hearts, gifts, and treats to keep affection flowing",
    "Cozy shared plant care",
    "Light or dark cozy mode",
  ],
  url: siteUrl,
  image: ogImage,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        {children}
        <Analytics />
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
