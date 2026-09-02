"use client";

import { formatDateTime, formatIndianNumber, formatIndianPrice, getLocalStorage } from "@/app_config/CommonFunction";
import { DateFormats, STORAGE_KEYS } from "@/app_config/CommonVariable";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Labels from "./Labels";
import { safePrefetch } from "../sections/Header";
import Link from "next/link";
import { useIPOStore } from "@/stores/useAppStore";

export function PrefetchIPO({ id }) {
  const router = useRouter();

  useEffect(() => {
    if (id) {
      router.prefetch(`/ipo-details/${id}`);
    }
  }, [id, router]);

  return null;
}

export const ListedIpoCard = ({ className, ipoListData }) => {
  const router = useRouter();
  const login_user = getLocalStorage(STORAGE_KEYS.LOGIN_KEY);
  const setIPOLoader = useIPOStore((s) => s.setIpoLoader);

  const phoneNumber = "+918529247605";
  const message1 = "Hello, I want to Buy this IPO:";
  const message2 = "Hello, I want to Sell this IPO:";

  const buyButtonChange = (data) => {
    if (login_user) {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message1 + " " + data?.company_name)}`;
      window.open(url, "_blank");
    } else {
      router.push("/auth/login");
    }
  };

  const shellButtonChange = (data) => {
    if (login_user) {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message2 + " " + data?.company_name)}`;
      window.open(url, "_blank");
    } else {
      router.push("/auth/login");
    }
  };

  // Calculations for listed metrics
  const issuePrice = Number(
    ipoListData?.ipo_max_value ?? ipoListData?.offer_price_to ?? ipoListData?.offer_price_from ?? 0
  );
  const listedPrice = Number(ipoListData?.listed_price ?? 0);
  const currentPrice = Number(ipoListData?.current_price ?? listedPrice);

  const hasListingPrice = listedPrice > 0;
  const gainAmount = hasListingPrice && issuePrice > 0 ? listedPrice - issuePrice : 0;
  const gainPercent =
    hasListingPrice && issuePrice > 0
      ? ((gainAmount / issuePrice) * 100).toFixed(2)
      : null;

  const isPositive = gainAmount > 0;
  const isNegative = gainAmount < 0;

  return (
    <React.Fragment>
      <div
        className={cn(
          "flex h-full flex-col rounded-2xl border border-base bg-white dark:bg-base-950 p-4 shadow-sm hover:shadow-xl transition",
          className
        )}
      >
        {/* Top row: logo + name (left) | buttons (right) */}
        <div className="flex items-center justify-between gap-2">
          {/* Left cluster */}
          <PrefetchIPO id={ipoListData?.symbol} />
          <Link
            onClick={() => {
              setIPOLoader(true);
            }}
            key={ipoListData?.symbol}
            href={`/ipo-details/${ipoListData?.symbol}`}
            prefetch
            className="cursor-pointer min-w-0"
          >
            <div className="flex items-center gap-3 min-w-0 hover:cursor-pointer">
              <div className="w-12 h-12 rounded-md border border-base p-1 overflow-hidden shrink-0 flex items-center justify-center">
                <Image
                  src={ipoListData?.ipo_image}
                  alt={ipoListData?.company_name || "IPO"}
                  width={48}
                  height={48}
                  className="object-contain"
                  unoptimized
                />
              </div>

              <div className="min-w-0">
                <h3
                  className="text-base font-semibold text-title 
                    whitespace-normal
                    sm:truncate
                    max-w-full 
                    sm:max-w-[280px] 
                    md:max-w-[360px] 
                    lg:max-w-[460px] 
                    mb-2"
                >
                  {ipoListData?.company_name}
                </h3>

                <Labels data={ipoListData} live={false} className={"mb-1"} position={"left"} />
              </div>
            </div>
          </Link>

          {/* Watch Live Button */}
          {ipoListData?.symbol && (
            <div className="shrink-0">
              <a
                href={`https://ipotrending.com/ipo-live-market/${ipoListData.symbol.toLowerCase()}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-xs font-semibold bg-[#135c33] hover:bg-[#16a34a] text-white shadow-sm transition-all cursor-pointer whitespace-nowrap"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300"></span>
                </span>
                <span>Watch Live</span>
                <svg className="w-3.5 h-3.5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}
        </div>

        {/* Divider & Details */}
        <Link
          onClick={() => {
            setIPOLoader(true);
          }}
          key={ipoListData?.symbol}
          href={`/ipo-details/${ipoListData?.symbol}`}
          prefetch
          className="cursor-pointer"
        >
          <div className="my-3 w-full border-b border-base" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-2 text-sm">
            <Field
              label="Offer Date"
              value={formatDateTime(ipoListData?.start_date, DateFormats?.DATE_DD_MM_YYYY)}
            />
            <Field
              label="Listed At"
              value={formatDateTime(ipoListData?.listing_date, DateFormats?.DATE_DD_MM_YYYY)}
            />
            <Field
              label="Issue Price"
              value={
                ipoListData?.price_range ||
                (issuePrice > 0 ? `₹${formatIndianNumber(issuePrice)}` : "-")
              }
            />
            <Field
              label="Listed Price"
              value={hasListingPrice ? `₹${formatIndianNumber(listedPrice)}` : "-"}
              className="font-bold"
            />
            <Field
              label="Current Price"
              value={currentPrice > 0 ? `₹${formatIndianNumber(currentPrice)}` : "-"}
            />
            <Field
              label="Listing Gain"
              value={
                gainPercent !== null
                  ? `${isPositive ? "+" : ""}${gainPercent}% (${isPositive ? "+₹" : "₹"}${formatIndianNumber(gainAmount)})`
                  : "-"
              }
              className={
                isPositive
                  ? "text-emerald-600 dark:text-emerald-400 font-bold"
                  : isNegative
                  ? "text-rose-600 dark:text-rose-400 font-bold"
                  : ""
              }
            />
          </div>
        </Link>

        {/* Bottom Allotment Action Link */}
        <div className="mt-3 pt-2.5 border-t border-base flex items-center justify-end text-xs">
          <a
            href="https://allotmentstatus.com/"
            target="_blank"
            rel="noopener"
            title="Check IPO Allotment Status on AllotmentStatus.com"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 hover:underline transition-colors"
          >
            <span>Check Allotment</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

function Field({ label, value, className }) {
  return (
    <div className="flex items-start justify-between sm:block">
      <p className="text-muted font-medium">{label}</p>
      <p className={`text-body font-semibold text-sm text-base sm:mt-0.5 ${className || ""}`}>
        {value}
      </p>
    </div>
  );
}

export default ListedIpoCard;
