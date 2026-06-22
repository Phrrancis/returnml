import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const DESCRIPTION =
  "ReturnML is the real-time API that predicts which e-commerce carts will be returned before checkout — and tells you the most profitable action to take. Cut returns 3–6% without hurting conversion.";

export const metadata: Metadata = {
  title: "ReturnML — Predict Returns. Keep Profit.",
  description: DESCRIPTION,
  metadataBase: new URL("https://returnml.com"),
  icons: {
    icon: "/favicon.ico",
    apple: [{ url: "/favicon.ico" }],
  },
  openGraph: {
    title: "ReturnML — Predict Returns. Keep Profit.",
    description: DESCRIPTION,
    url: "https://returnml.com",
    siteName: "ReturnML",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReturnML — Predict Returns. Keep Profit.",
    description: DESCRIPTION,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "ReturnML",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description: DESCRIPTION,
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/PreOrder",
                price: "0",
                priceCurrency: "EUR",
              },
              provider: {
                "@type": "Organization",
                name: "CloudsWeave AB",
                url: "https://returnml.com",
              },
            }),
          }}
        />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
