// "use client"
import { IpoDetailsPages } from '@/components/ipodetailspages/IpoDetailsPages';
import { getIPODetailsServer, getIPOsServer } from '@/lib/server/ServerApiCall';
import Head from 'next/head';
import React from 'react'

export default async function page({ params }) {

  // =============== SEO ===================;
  // title : {{companyName}} IPO Details {{year}} – Price, GMP, Dates, Allotment, Review
  // Description : Get complete information on the {{companyName}} IPO including price band, issue size, dates, lot size, subscription status, GMP, allotment date, and listing details. Check latest updates, tips, and important insights before applying.

  const { id } = await params;
  const IPODetailsResponse = await getIPODetailsServer({ id: id });

  return (<>

    <Head>
      <title>IPO Details</title>
    </Head>

    <IpoDetailsPages ipoDetailsData={IPODetailsResponse} />

  </>);
}