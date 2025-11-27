// "use client"
import { formatDateTime } from '@/app_config/CommonFunction';
import { DateFormats } from '@/app_config/CommonVariable';
import { formatGmpValue } from '@/app_config/IPOCalculation';
import { IpoDetailsPages } from '@/components/ipodetailspages/IpoDetailsPages';
import { getIPODetailsServer, getIPOsServer } from '@/lib/server/ServerApiCall';
import Head from 'next/head';
import React from 'react'

export async function generateMetadata({ params }) {
  const { id } = await params;
  try {
    const data = await getIPODetailsServer({ id });

    if (!data || !data.company_name) {
      return {
        title: `IPO Not Found | ${process.env.SITE_NAME}`,
        description: `Details not available for this IPO.`,
      };
    }

    const company = data?.company_name;
    const gmp = formatGmpValue(data) ?? 'N/A';
    const priceBand = data?.price_range ?? '₹0';
    const openDate = formatDateTime(data?.start_date, DateFormats?.DATE_DD_MM_YYYY) ?? '';
    const closeDate = formatDateTime(data?.end_date, DateFormats?.DATE_DD_MM_YYYY) ?? '';
    const ipoType = data?.listing_at_group ?? '';

    const pageUrl = `${process.env.SITE_URL}ipo/${id}`;
    const ogImage = data.ipo_image || data.ipo_image || '/og-image.png';

    return {
      title: `${company} IPO Details — GMP: ${gmp} | ${process.env.SITE_NAME}`,
      description: `${company} IPO details: Grey Market Premium (GMP) ${gmp}, price band ${priceBand}, issue dates ${openDate} to ${closeDate}. Live & upcoming IPO updates on ${process.env.SITE_NAME}.`,
      keywords: [
        `${company} IPO`,
        `${company} GMP`,
        `${company} IPO price band`,
        'IPO Grey Market',
        'live IPO',
        'upcoming IPO',
        process.env.SITE_NAME,
      ],
      alternates: {
        canonical: pageUrl,
      },
      openGraph: {
        title: `${company} IPO — GMP: ${gmp} | ${process.env.SITE_NAME}`,
        description: `Check ${company} IPO GMP, price band, issue dates, and live updates.`,
        url: pageUrl,
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: `${company} IPO — ${process.env.SITE_NAME}`,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${company} IPO — ${process.env.SITE_NAME}`,
        description: `GMP: ${gmp}. ${company} IPO price band: ${priceBand}. Issue dates: ${openDate} — ${closeDate}.`,
        images: [ogImage],
      },
    };
  } catch (err) {
    // fallback metadata on error
    return {
      title: `IPO Details | ${process.env.SITE_NAME}`,
      description: `IPO details and live GMP updates on ${process.env.SITE_NAME}.`,
    };
  }
}

export default async function page({ params }) {
  // =============== SEO ===================;
  // title : {{companyName}} IPO Details {{year}} – Price, GMP, Dates, Allotment, Review
  // Description : Get complete information on the {{companyName}} IPO including price band, issue size, dates, lot size, subscription status, GMP, allotment date, and listing details. Check latest updates, tips, and important insights before applying.
  const { id } = await params;
  const IPODetailsResponse = await getIPODetailsServer({ id: id });

  // console.log('IPODetailsResponse Server',IPODetailsResponse);

  return (<>

    <Head>
      <title>IPO Details</title>
    </Head>

    <IpoDetailsPages ipoDetailsData={IPODetailsResponse} />

  </>);
}