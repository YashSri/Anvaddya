import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, Manrope } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { StickyCta } from "@/components/StickyCta";
import { SitePreloader } from "@/components/preloader/SitePreloader";
import { AmbientBlueprintLayer } from "@/components/shared/AmbientBlueprintLayer";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Anvaddya Orbit | Applied STEM & Innovation for Schools",
    template: "%s | Anvaddya Orbit",
  },
  description: site.description,
  applicationName: site.programme,
  openGraph: {
    siteName: site.programme,
    type: "website",
    locale: "en_IN",
    title: "Anvaddya Orbit | Applied STEM & Innovation for Schools",
    description: site.description,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#FF6A00",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${manrope.variable} ${serif.variable}`}>
      <body>
        <SitePreloader />
        <AmbientBlueprintLayer />
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-brand-700 px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <StickyCta />
        <Analytics />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${site.url}/#organization`,
                name: site.company,
                legalName: site.legalName,
                url: site.url,
                email: site.contact.email,
                logo: `${site.url}/icon.svg`,
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Greater Noida",
                  addressRegion: "Uttar Pradesh",
                  addressCountry: "IN",
                },
              },
              {
                "@type": "WebSite",
                "@id": `${site.url}/#website`,
                name: site.programme,
                url: site.url,
                inLanguage: "en-IN",
                publisher: { "@id": `${site.url}/#organization` },
              },
            ],
          }}
        />
      </body>
    </html>
  );
}
