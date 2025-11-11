// "use client"
import { IpoDetailsPages } from '@/components/ipodetailspages/IpoDetailsPages';
import { getIPODetails, getIPOs } from '@/lib/server/ServerApiCall';
import Head from 'next/head';
import React from 'react'

export default async function IpoDetails({ params }) {


  const IPODetailsResponse = await getIPODetails({ id: params?.id });

  return (<>
    <Head>
      <title>IPO Details</title>
    </Head>

    <IpoDetailsPages ipoDetailsData={IPODetailsResponse} />

  </>);
}