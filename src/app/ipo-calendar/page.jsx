import React from "react";
import Link from "next/link";
import Script from "next/script";
import { ChevronRight } from "lucide-react";
import { getIpoCalendarServer } from "@/lib/server/ServerApiCall";
import { truncateText } from "@/app_config/CommonFunction";
import CalendarClientPage from "./CalendarClientPage";
import { calendarFaqs } from "@/components/calendar/calendarFaqData";

export const dynamic = "force-dynamic";

export const metadata = {
  title: truncateText(
    `IPO Calendar 2026 – Upcoming IPO Open, Close, Allotment & Listing Dates | ${process.env.SITE_NAME || "GreyMarketIPO"}`,
    60
  ),
  description: truncateText(
    "Track live IPO calendar 2026 in India. Check issue opening, closing, allotment status finalization, and listing schedule for all Mainboard & SME IPOs.",
    150
  ),
  keywords: [
    "IPO Calendar 2026",
    "Upcoming IPO Calendar",
    "IPO Dates India",
    "IPO Opening Today",
    "IPO Closing Dates",
    "IPO Allotment Date Calendar",
    "IPO Listing Schedule",
    "Mainboard IPO Calendar",
    "SME IPO Calendar",
    process.env.SITE_NAME || "GreyMarketIPO",
  ],
  alternates: {
    canonical: `${process.env.SITE_URL || "https://greymarketipo.com"}/ipo-calendar`,
  },
  openGraph: {
    title: truncateText(
      `IPO Calendar 2026 – Live Issue Dates & Schedule | ${process.env.SITE_NAME || "GreyMarketIPO"}`,
      60
    ),
    description: truncateText(
      "Real-time IPO Calendar tracking issue opening, closing, allotment, and listing dates for ongoing and upcoming IPOs in India.",
      150
    ),
    url: `${process.env.SITE_URL || "https://greymarketipo.com"}/ipo-calendar`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${process.env.SITE_NAME || "GreyMarketIPO"} – IPO Calendar`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: truncateText(
      `IPO Calendar 2026 – Live Issue Dates & Schedule | ${process.env.SITE_NAME || "GreyMarketIPO"}`,
      60
    ),
    description: truncateText(
      "Track all IPO dates, bidding open/close times, and allotment schedules on the interactive IPO Calendar.",
      150
    ),
    images: ["/og-image.png"],
  },
};

export default async function IpoCalendarPage() {
  const currentYear = 2026;
  const currentMonth = 8;

  const initialEvents = await getIpoCalendarServer({
    year: currentYear,
    month: currentMonth,
  });

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
        name: "IPO Calendar",
        item: `${process.env.SITE_URL || "https://greymarketipo.com"}/ipo-calendar`,
      },
    ],
  };

  // 2. JSON-LD FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: calendarFaqs.map((faq) => ({
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
      {/* Schema.org Structured Data */}
      <Script
        id="calendar-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="calendar-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-base-100 dark:bg-base-900 pt-20 pb-12 sm:pt-20 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-1.5 text-xs text-base-500 dark:text-base-400 mb-3 sm:mb-6">
            <Link href="/" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition">
              Home
            </Link>
            <ChevronRight className="size-3.5 text-base-300 dark:text-base-700" />
            <span className="text-base-800 dark:text-base-200 font-semibold">
              IPO Calendar
            </span>
          </nav>

          {/* Page Hero Header */}
          <header className="space-y-1.5 sm:space-y-3 max-w-3xl mb-4 sm:mb-8">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-base-900 dark:text-base-100 font-display tracking-tight leading-tight">
              IPO Calendar & Schedule 2026
            </h1>

            <p className="text-xs sm:text-base text-base-600 dark:text-base-400 leading-relaxed">
              Track real-time <strong>IPO dates in India</strong>. Stay updated with issue opening dates, closing dates, basis of allotment status, and exchange listing schedules for Mainboard and SME IPOs.
            </p>
          </header>

          {/* Interactive Client Calendar */}
          <CalendarClientPage
            initialEvents={initialEvents}
            initialYear={currentYear}
            initialMonth={currentMonth}
          />
        </div>
      </main>
    </>
  );
}
