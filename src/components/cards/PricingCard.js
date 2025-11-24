"use client"

import { formatDateTime, formatIndianNumber, formatIndianPrice, getLocalStorage } from "@/app_config/CommonFunction";
import { DateFormats, STORAGE_KEYS } from "@/app_config/CommonVariable";
import { formatGmpValue } from "@/app_config/IPOCalculation";
import { cn } from "@/lib/utils";
import { DollarSign, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Labels from "./Labels";
import { safePrefetch } from "../sections/Header";

export const ipoDetailsNavigation = (router, id) => {
  router.push(`/ipo-details/${id}`);
}

export const ipoDetailsNavigationPrefetch = (router, id) => {
  // router.push(`/ipo-details/${id}`);
  safePrefetch(router, `/ipo-details/${id}`)
}

export const PricingCard = ({ className,
  // company = "Company Name",
  logoUrl,
  company = "Company Name",
  price,
  changeText,
  fields = {
    offerDate: "26-01-2025",
    listedAt: "26-01-2025",
    listedAt: '26-01-2025',
    allotmentDate: "26-01-2025",
    offerPrice: "200",
    listingDate: "200",
    lotSize: "200",
    price: "500"
  },
  ipoListData
}) => {

  const router = useRouter();
  const login_user = getLocalStorage(STORAGE_KEYS.LOGIN_KEY);

  const phoneNumber = '+918529247605'
  const message1 = 'Hello, I want to Buy this IPO:'
  const message2 = 'Hello, I want to Sell this IPO:'

  const buyButtonChange = (data) => {
    if (login_user) {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message1 + " " + data?.company_name)}`;
      window.open(url, "_blank");
    } else {
      router.push('/auth/login')
    }
  };

  const shellButtonChange = (data) => {
    if (login_user) {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message2 + " " + data?.company_name)}`;
      window.open(url, "_blank");
    } else {
      router.push('/auth/login')
    }
  };

  return (
    <React.Fragment >
      <div className={cn("flex h-full flex-col rounded-2xl border border-base bg-white dark:bg-base-950 p-4 shadow-sm hover:shadow-xl transition", className)} >
        {/* Top row: logo + name (left) | buttons (right) */}

        <div className="flex items-center justify-between gap-3">
          {/* Left cluster */}
          <div className="flex items-center gap-3 min-w-0 hover:cursor-pointer" onMouseEnter={() => ipoDetailsNavigationPrefetch(router, ipoListData?.symbol)} onFocus={() => ipoDetailsNavigationPrefetch(router, ipoListData?.symbol)} onClick={() => ipoDetailsNavigation(router, ipoListData?.symbol)}>
            <div className="w-12 h-12 rounded-md border border-base p-1 overflow-hidden shrink-0 flex items-center justify-center">
              <Image
                src={ipoListData?.ipo_image}
                alt={company}
                width={48}
                height={48}
                className="object-contain"
                unoptimized
              />
            </div>

            <div className="min-w-0">

              {/* Keep name from pushing buttons off-screen */}
              <h3 className="text-base font-semibold text-title truncate  max-w-[58vw] sm:max-w-[280px] md:max-w-[360px] lg:max-w-[460px] mb-2">
                {ipoListData?.company_name}
              </h3>

              {/* {price ? (
                <div className="mt-0.5 flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-gray-900 text-title">{price}</span>
                  {changeText ? (
                    <span className="text-xs text-green-600">{changeText}</span>
                  ) : null}
                </div>
              ) : null} */}

              <Labels data={ipoListData} live={false} className={'mb-1'} position={"left"} />
            </div>
          </div>

          <div className="flex gap-2">
            {/* icon + text on sm+, icon-only on xs to save space */}
            <button className="h-9 px-3 rounded-full min-w-max border border-1 buyButton" onClick={() => { buyButtonChange(ipoListData) }}>
              {/* <ShoppingCart className="mr-2 h-4 w-4 hidden sm:inline" /> */}
              <span className="">Buy</span>
              {/* Buy */}
              {/* <ShoppingCart className="h-4 w-4 sm:hidden" aria-hidden /> */}
            </button>
            <button className="h-9 px-3 rounded-full min-w-max border border-1 sellButton" onClick={() => { shellButtonChange(ipoListData) }}>
              {/* <DollarSign className="mr-2 h-4 w-4 hidden sm:inline" /> */}
              <span className="">Sell</span>
              {/* Sell */}
              {/* <DollarSign className="h-4 w-4 sm:hidden" aria-hidden /> */}
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-3 w-full border-b border-base" />
        {/* Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-2 text-sm">
          <Field label="Offer Date" value={formatDateTime(ipoListData?.start_date, DateFormats?.DATE_DD_MM_YYYY)} />
          <Field label="Listed At" value={formatDateTime(ipoListData?.listing_date, DateFormats?.DATE_DD_MM_YYYY)} />
          <Field label="Allotment Date" value={formatDateTime(ipoListData?.allotment_date, DateFormats?.DATE_DD_MM_YYYY)} />
          <Field label="Lot Size" value={formatIndianNumber(ipoListData.bid_lot)} />
          <Field label="Price Range" value={ipoListData.price_range} />
          <Field label="GMP" value={formatGmpValue(ipoListData)} className={'gmp_color'} />
        </div>
      </div>
    </React.Fragment>
  );
};

function Field({ label, value, className }) {
  return (
    <div className="flex items-start justify-between sm:block">
      <p className="text-muted font-medium">{label}</p>
      <p className={`text-body font-semibold text-sm text-base sm:mt-0.5 ${className}`}>{value}</p>
    </div>
  );
}