import React from "react";
import Link from "next/link";
import Script from "next/script";
import { HeroSection } from "@/components/sections";
import { getIPOsServer } from "@/lib/server/ServerApiCall";
import { truncateText } from "@/app_config/CommonFunction";
import ListedIpoClientPage from "./ListedIpoClientPage";
import { listedIpoFaqs } from "@/components/listed-ipo/listedIpoFaqData";

export const dynamic = "force-dynamic";

export const metadata = {
  title: truncateText(
    `Listed IPOs – Real-Time IPO Listing Gains, Prices & Returns | ${process.env.SITE_NAME || "GreyMarketIPO"}`,
    60
  ),
  description: truncateText(
    "Check recently listed IPOs on NSE and BSE with actual listing prices, listing day gains, profit per lot, and current market returns for Mainboard and SME IPOs.",
    150
  ),
  keywords: [
    "Listed IPOs",
    "IPO Listing Gain",
    "Recent Listed IPOs",
    "IPO Listing Price",
    "SME IPO Listing Price",
    "IPO Listing Performance",
    "Mainboard Listed IPOs",
    "IPO Returns",
    process.env.SITE_NAME || "GreyMarketIPO",
  ],
  alternates: {
    canonical: `${process.env.SITE_URL || "https://greymarketipo.com"}/listed-ipos`,
  },
  openGraph: {
    title: truncateText(
      `Listed IPOs – Real-Time IPO Listing Gains & Prices | ${process.env.SITE_NAME || "GreyMarketIPO"}`,
      60
    ),
    description: truncateText(
      "Track recently listed IPO performance, opening listing prices, percentage returns, and current prices for all Indian Mainboard and SME IPOs.",
      150
    ),
    url: `${process.env.SITE_URL || "https://greymarketipo.com"}/listed-ipos`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${process.env.SITE_NAME || "GreyMarketIPO"} – Listed IPOs`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: truncateText(
      `Listed IPOs & Listing Gains | ${process.env.SITE_NAME || "GreyMarketIPO"}`,
      60
    ),
    description: truncateText(
      "Check recent IPO listing performance, opening listing gains, and current stock price returns on NSE and BSE.",
      150
    ),
    images: ["/og-image.png"],
  },
};

export default async function ListedIposPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const page = Number(resolvedSearchParams?.page) || 1;
  const pageSize = Number(resolvedSearchParams?.pageSize) || 40;
  const type = resolvedSearchParams?.type || "all";

  const ipoResponse = await getIPOsServer({
    page: page,
    pageSize: pageSize,
    categories: ["listed"],
    ipo_type: type !== "all" ? type : undefined,
  });

  const ipos = ipoResponse?.results || [];
  const totalCount = ipoResponse?.count || ipos.length;

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
        name: "Listed IPOs",
        item: `${process.env.SITE_URL || "https://greymarketipo.com"}/listed-ipos`,
      },
    ],
  };

  // 2. JSON-LD FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: listedIpoFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* Schema Injection */}
      <Script
        id="breadcrumb-schema-listed-ipo"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="faq-schema-listed-ipo"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Banner with exact homepage styling */}
      <HeroSection
        id="listed-hero"
        badge={{
          href: "#",
          icon: "tabler:trending-up",
          label: "📈 Listing Performance",
        }}
        title={
          <>
            Recently Listed IPOs &{" "}
            <span className="text-[#135c33] dark:text-emerald-400">
              Listing Gains
            </span>
          </>
        }
        description="Explore all recently listed Mainboard & SME IPOs with issue price, opening listing price, listing day returns, and real-time market performance."
        buttons={[]}
        image={{
          alt: "Listed IPOs",
          className: "w-full h-auto",
        }}
        clientsLabel="Recently Listed Companies"
        clients={
          ipos.length > 0
            ? ipos.slice(0, 8).map((ipo) => ({
                src: ipo.ipo_image,
                name: ipo.company_name,
                symbol: ipo.symbol,
              }))
            : []
        }
      />

      {/* Main Client Content Section */}
      <ListedIpoClientPage
        initialIpos={ipos}
        totalCount={totalCount}
        page={page}
        pageSize={pageSize}
        currentType={type}
      />
    </>
  );
}
