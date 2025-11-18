// "use client"
import { IpoDetailsPages } from '@/components/ipodetailspages/IpoDetailsPages';
import { getIPODetails, getIPOs } from '@/lib/server/ServerApiCall';
import Head from 'next/head';
import React from 'react'

export default async function page({ params }) {

  // console.log('====================================');
  // console.log(params);
  // console.log('====================================');

  const { id } = await params;
  const IPODetailsResponse = await getIPODetails({ id: id });

  return (<>
    <Head>
      <title>IPO Details</title>
    </Head>

    <IpoDetailsPages ipoDetailsData={IPODetailsResponse} />

  </>);
}