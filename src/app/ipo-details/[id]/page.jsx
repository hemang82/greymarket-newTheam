

// ✅ FIXED: app/ipo-details/[id]/page.jsx

import { notFound } from 'next/navigation'; // ✅ Add karo
import { formatDateTime } from '@/app_config/CommonFunction';
import { DateFormats } from '@/app_config/CommonVariable';
import { formatGmpValue } from '@/app_config/IPOCalculation';
import { IpoDetailsPages } from '@/components/ipodetailspages/IpoDetailsPages';
import { getIPOAboutusServer, getIPODetailsGMPServer, getIPODetailsServer } from '@/lib/server/ServerApiCall'; // ✅ getIPOsServer remove karo
import React from 'react';

export async function generateMetadata({ params }) {
  const { id } = await params;
  try {
    const data = await getIPODetailsServer({ id });

    // ✅ null check
    if (!data || !data.company_name) {
      return {
        title: `IPO Not Found | ${process.env.SITE_NAME}`,
        description: `Details not available for this IPO.`,
      };
    }

    const company = data.company_name;
    const gmp = formatGmpValue(data) ?? 'N/A';
    const priceBand = data.price_range ?? '₹0';
    const openDate = formatDateTime(data.start_date, DateFormats?.DATE_DD_MM_YYYY) ?? '';
    const closeDate = formatDateTime(data.end_date, DateFormats?.DATE_DD_MM_YYYY) ?? '';
    const pageUrl = `${process.env.SITE_URL}ipo-details/${id}`; // ✅ path sahi karo
    const ogImage = data.ipo_image || '/og-image.png'; // ✅ duplicate hatavyu

    return {
      title: `${company} IPO Details — GMP: ${gmp} | ${process.env.SITE_NAME}`,
      description: `${company} IPO details: GMP ${gmp}, price band ${priceBand}, issue dates ${openDate} to ${closeDate}.`,
      keywords: [
        `${company} IPO`, `${company} GMP`, `${company} IPO price band`,
        'IPO Grey Market', 'live IPO', 'upcoming IPO', process.env.SITE_NAME,
      ],
      alternates: { canonical: pageUrl },
      openGraph: {
        title: `${company} IPO — GMP: ${gmp} | ${process.env.SITE_NAME}`,
        description: `Check ${company} IPO GMP, price band, issue dates, and live updates.`,
        url: pageUrl,
        images: [{ url: ogImage, width: 1200, height: 630, alt: `${company} IPO` }],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${company} IPO — ${process.env.SITE_NAME}`,
        description: `GMP: ${gmp}. Price band: ${priceBand}. Dates: ${openDate} — ${closeDate}.`,
        images: [ogImage],
      },
    };
  } catch (err) {
    return {
      title: `IPO Details | ${process.env.SITE_NAME}`,
      description: `IPO details and live GMP updates on ${process.env.SITE_NAME}.`,
    };
  }
}

export default async function page({ params }) {
  const { id } = await params;

  // ✅ id validate karo
  if (!id) notFound();

  try {
    const [IPODetailsResponse, IPOGMPResponse] = await Promise.all([
      getIPODetailsServer({ id }),
      getIPODetailsGMPServer({ id })
    ]);

    // ✅ Data na aave to 404 - 500 nahi
    if (!IPODetailsResponse) {
      notFound();
    }

    const IPODetailsUpdatedAboutUs = await getIPOAboutusServer({
      symbol: id,
      web: '1',
      topic: ''
    });

    // console.log('IPODetailsResponse', IPODetailsResponse);
    // console.log('IPODetailsUpdatedAboutUs', IPODetailsUpdatedAboutUs);
    // console.log('IPOGMPResponse', IPOGMPResponse);

    return (
      <IpoDetailsPages
        ipoDetailsData={IPODetailsResponse}
        IPODetailsUpdatedAboutUs={IPODetailsUpdatedAboutUs || []}
        IPOGMPResponse={IPOGMPResponse || {}}
      />
    );

  } catch (err) {
    console.error("IPO Details page error:", err);
    // ✅ Production ma 500 ni jagye proper error page
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error loading IPO details</h1>
          <p className="text-base-500 mb-6">Something went wrong. Please try again later.</p>
          <a href="/" className="text-[#135c33] font-bold hover:underline">Back to Home</a>
        </div>
      </div>
    );
  }
}