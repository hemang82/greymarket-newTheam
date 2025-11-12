"use client"

import { cn } from "@/lib/utils";
import { DollarSign, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

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

  const ipoDetailsNavigation = (id) => {
    router.push(`/ipo-details/${id}`);
  }

  return (
    <React.Fragment >
      <div className={cn("flex h-full flex-col rounded-2xl border border-base bg-white dark:bg-base-950 p-4 shadow-sm hover:shadow-xl  transition", className)} >
        {/* Top row: logo + name (left) | buttons (right) */}
        <div className="flex items-center justify-between gap-3">
          {/* Left cluster */}
          <div className="flex items-center gap-3 min-w-0 hover:cursor-pointer" onClick={() => ipoDetailsNavigation(ipoListData?.symbol)}>

            <div className="w-12 h-12 rounded-md bg-base-100 overflow-hidden shrink-0 flex items-center justify-center">
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
              <h3 className="text-base font-semibold text-title truncate max-w-[58vw] sm:max-w-[280px] md:max-w-[360px] lg:max-w-[460px] ">
                {ipoListData?.company_name}
              </h3>

              {price ? (
                <div className="mt-0.5 flex items-baseline gap-2">
                  <span className="text-sm font-medium text-title">{price}</span>
                  {changeText ? (
                    <span className="text-xs text-green-600">{changeText}</span>
                  ) : null}
                </div>
              ) : null}
            </div>

          </div>

          <div className="flex gap-2">
            {/* icon + text on sm+, icon-only on xs to save space */}
            <button className="h-9 px-3 rounded-full min-w-max border border-1 buyButton">
              <ShoppingCart className="mr-2 h-4 w-4 hidden sm:inline" />
              <span className="hidden sm:inline">Buy</span>
              {/* Buy */}
              <ShoppingCart className="h-4 w-4 sm:hidden" aria-hidden />
            </button>
            <button className="h-9 px-3 rounded-full min-w-max border border-1 sellButton">
              <DollarSign className="mr-2 h-4 w-4 hidden sm:inline" />
              <span className="hidden sm:inline">Sell</span>
              {/* Sell */}
              <DollarSign className="h-4 w-4 sm:hidden" aria-hidden />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-3 w-full border-b border-base" />

        {/* Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-2 text-sm">
          <Field label="Offer Date" value={ipoListData?.start_date} />
          <Field label="Listed At" value={ipoListData.listing_date} />
          <Field label="Allotment Date" value={ipoListData.allotment_date} />
          <Field label="Offer Price" value={ipoListData.listed_price} />
          <Field label="Listing Date" value={ipoListData.listingDate} />
          <Field label="Lot Size" value={ipoListData.bid_lot} />
        </div>

      </div>
    </React.Fragment>
  );
};

function Field({ label, value }) {
  return (
    <div className="flex items-start justify-between sm:block">
      <p className="text-muted">{label}</p>
      <p className="text-body font-medium sm:mt-0.5">{value}</p>
    </div>
  );
}