import React from "react";
import Link from "next/link";
import Script from "next/script";
import { ChevronRight, TrendingUp } from "lucide-react";
import { getIPOsServer } from "@/lib/server/ServerApiCall";
import { truncateText } from "@/app_config/CommonFunction";
import GmpClientPage from "./GmpClientPage";
import { gmpFaqs } from "@/components/gmp/gmpFaqData";

export const dynamic = "force-dynamic";

export const metadata = {
  title: truncateText(
    `IPO GMP Today Live – Grey Market Premium for Live & Upcoming IPOs | ${process.env.SITE_NAME || "GreyMarketIPO"}`,
    60
  ),
  description: truncateText(
    "Check real-time IPO GMP today with live grey market rates, expected listing price, percentage gains, and lot size profit for all Mainboard & SME IPOs.",
    150
  ),
  keywords: [
    "IPO GMP Today",
    "Live IPO GMP",
    "IPO Grey Market Premium Today",
    "Grey Market Premium",
    "SME IPO GMP",
    "Upcoming IPO GMP",
    "IPO Listing Gain Estimate",
    "IPO GMP Live",
    "IPO Profit Calculator",
    process.env.SITE_NAME || "GreyMarketIPO",
  ],
  alternates: {
    canonical: `${process.env.SITE_URL || "https://greymarketipo.com"}/ipo-gmp-today`,
  },
  openGraph: {
    title: truncateText(
      `IPO GMP Today Live – Grey Market Premium Rates | ${process.env.SITE_NAME || "GreyMarketIPO"}`,
      60
    ),
    description: truncateText(
      "Real-time IPO GMP, expected listing price, percentage gain, and lot profit for ongoing and upcoming Mainboard & SME IPOs in India.",
      150
    ),
    url: `${process.env.SITE_URL || "https://greymarketipo.com"}/ipo-gmp-today`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${process.env.SITE_NAME || "GreyMarketIPO"} – Live IPO GMP Today`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: truncateText(
      `Live IPO GMP Today – Grey Market Premium Updates | ${process.env.SITE_NAME || "GreyMarketIPO"}`,
      60
    ),
    description: truncateText(
      "Track live IPO Grey Market Premium (GMP) for all Mainboard and SME IPOs with expected listing price and profit calculations.",
      150
    ),
    images: ["/og-image.png"],
  },
};

export default async function IpoGmpTodayPage() {
  const ipoResponse = await getIPOsServer({ page: 1, pageSize: 100 });
  const ipos = ipoResponse?.results || [];

  // 1. JSON-LD Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${process.env.SITE_URL || "https://greymarketipo.com"}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "IPO GMP Today",
        item: `${process.env.SITE_URL || "https://greymarketipo.com"}/ipo-gmp-today`,
      },
    ],
  };

  // 2. JSON-LD FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: gmpFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // 3. JSON-LD ItemList Schema
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Live IPO Grey Market Premium (GMP) Table",
    description: "Live track of IPO Grey Market Premium, issue prices, and estimated listing profits.",
    itemListElement: ipos.slice(0, 20).map((ipo, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${ipo.company_name} IPO GMP`,
      url: `${process.env.SITE_URL || "https://greymarketipo.com"}/ipo-details/${ipo.symbol}`,
    })),
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <Script
        id="gmp-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="gmp-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="gmp-itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <main className="min-h-screen bg-base-100 dark:bg-base-900 pt-20 pb-12 sm:pt-20 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-1.5 text-xs text-base-500 dark:text-base-400 mb-6">
            <Link href="/" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition">
              Home
            </Link>
            <ChevronRight className="size-3.5 text-base-300 dark:text-base-700" />
            <span className="text-base-800 dark:text-base-200 font-semibold">
              IPO GMP Today
            </span>
          </nav>

          {/* Page Hero Header */}
          <header className="space-y-3 max-w-3xl mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-base-900 dark:text-base-100 font-display tracking-tight leading-tight">
              IPO GMP Today Live Updates
            </h1>

            <p className="text-sm sm:text-base text-base-600 dark:text-base-400 leading-relaxed">
              Track live <strong>IPO Grey Market Premium (GMP)</strong>, expected listing prices, percentage gains, and estimated profit per application for all ongoing and upcoming Mainboard and SME IPOs in India.
            </p>
          </header>

          {/* Interactive Client Hub */}
          <GmpClientPage initialIpos={ipos} />
        </div>
      </main>
    </>
  );
}
