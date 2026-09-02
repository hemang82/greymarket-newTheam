"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TrendingUp, TrendingDown, Minus, ArrowUpRight, CheckCircle, ExternalLink } from "lucide-react";
import { formatIndianPrice, formatIndianNumber, formatDateTime } from "@/app_config/CommonFunction";
import { DateFormats } from "@/app_config/CommonVariable";
import { cn } from "@/lib/utils";

export default function ListedIpoTable({ ipoList = [] }) {
  if (!ipoList || ipoList.length === 0) {
    return (
      <div className="w-full py-16 text-center rounded-2xl border border-dashed border-base-300 dark:border-base-800 bg-white/50 dark:bg-base-900/50">
        <p className="text-base font-medium text-base-600 dark:text-base-400">
          No listed IPOs found matching your search or filter.
        </p>
        <p className="text-xs text-base-400 dark:text-base-500 mt-1">
          Try adjusting your search query or switching category tabs.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full space-y-4">
      {/* Desktop & Tablet Table (visible sm and up) */}
      <div className="hidden sm:block overflow-hidden rounded-2xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-900 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-base-200 dark:border-base-800 bg-base-100/80 dark:bg-base-950/75 text-xs font-semibold uppercase tracking-wider text-base-500 dark:text-base-400">
                <th scope="col" className="py-3.5 px-4">IPO & Type</th>
                <th scope="col" className="py-3.5 px-4 text-center">Issue Price</th>
                <th scope="col" className="py-3.5 px-4 text-center">Listing Price</th>
                <th scope="col" className="py-3.5 px-4 text-center">Listing Gain</th>
                <th scope="col" className="py-3.5 px-4 text-center">Current Price</th>
                <th scope="col" className="py-3.5 px-4">Listing Date</th>
                <th scope="col" className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-base-200 dark:divide-base-800 font-medium">
              {ipoList.map((item) => {
                const issuePrice = Number(
                  item?.ipo_max_value ?? item?.offer_price_to ?? item?.offer_price_from ?? 0
                );
                const listedPrice = Number(item?.listed_price ?? 0);
                const currentPrice = Number(item?.current_price ?? listedPrice);

                const hasListingPrice = listedPrice > 0;
                const gainAmount = hasListingPrice && issuePrice > 0 ? listedPrice - issuePrice : 0;
                const gainPercent =
                  hasListingPrice && issuePrice > 0
                    ? ((gainAmount / issuePrice) * 100).toFixed(2)
                    : null;

                const isPositive = gainAmount > 0;
                const isNegative = gainAmount < 0;
                const isZero = gainAmount === 0;

                const isSme =
                  (item?.security_type || "").toUpperCase() === "SME" ||
                  item?.type?.toLowerCase?.().includes("sme") ||
                  item?.company_name?.toLowerCase?.().includes("sme");

                const listingDate = item?.listing_date;

                return (
                  <tr
                    key={item?.symbol || item?.company_name}
                    className="hover:bg-base-100/60 dark:hover:bg-base-800/40 transition group"
                  >
                    {/* IPO Name & Logo */}
                    <td className="py-3.5 px-4">
                      <Link
                        href={`/ipo-details/${item?.symbol}`}
                        className="flex items-center gap-3 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition"
                      >
                        <div className="w-10 h-10 rounded-lg border border-base-200 dark:border-base-800 p-1 bg-white dark:bg-base-950 overflow-hidden shrink-0 flex items-center justify-center">
                          {item?.ipo_image ? (
                            <Image
                              src={item?.ipo_image}
                              alt={item?.company_name || "IPO"}
                              width={36}
                              height={36}
                              className="object-contain"
                              unoptimized
                            />
                          ) : (
                            <span className="text-xs font-bold text-base-400">IPO</span>
                          )}
                        </div>
                        <div className="min-w-0 max-w-[220px]">
                          <div className="font-semibold text-base-900 dark:text-base-100 truncate text-sm">
                            {item?.company_name}
                          </div>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="text-[11px] text-base-400 font-mono">
                              {item?.symbol}
                            </span>
                            <span
                              className={cn(
                                "px-1.5 py-0.2 rounded text-[10px] font-bold uppercase",
                                isSme
                                  ? "bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-800"
                                  : "bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800"
                              )}
                            >
                              {isSme ? "SME" : "Mainboard"}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </td>

                    {/* Issue Price */}
                    <td className="py-3.5 px-4 text-center whitespace-nowrap text-base-800 dark:text-base-200 font-semibold">
                      {issuePrice > 0 ? `₹${formatIndianNumber(issuePrice)}` : "--"}
                    </td>

                    {/* Listing Price */}
                    <td className="py-3.5 px-4 text-center whitespace-nowrap text-base-900 dark:text-base-100 font-bold">
                      {hasListingPrice ? `₹${formatIndianNumber(listedPrice)}` : "--"}
                    </td>

                    {/* Listing Gain / Loss */}
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      {gainPercent !== null ? (
                        <div>
                          <span
                            className={cn(
                              "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold",
                              isPositive && "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-800",
                              isNegative && "bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-950/70 dark:text-rose-300 dark:border-rose-800",
                              isZero && "bg-base-100 text-base-600 dark:bg-base-800 dark:text-base-400"
                            )}
                          >
                            {isPositive && <TrendingUp className="size-3" />}
                            {isNegative && <TrendingDown className="size-3" />}
                            {isPositive ? `+${gainPercent}%` : `${gainPercent}%`}
                          </span>
                          <div className={cn(
                            "text-[10px] font-medium mt-0.5",
                            isPositive ? "text-emerald-600 dark:text-emerald-400" : isNegative ? "text-rose-600 dark:text-rose-400" : "text-base-400"
                          )}>
                            {isPositive ? `+₹${formatIndianNumber(gainAmount)}` : `₹${formatIndianNumber(gainAmount)}`}
                          </div>
                        </div>
                      ) : (
                        <span className="text-base-400 text-xs">--</span>
                      )}
                    </td>

                    {/* Current Market Price */}
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      {currentPrice > 0 ? (
                        <div>
                          <div className="font-bold text-sm text-base-900 dark:text-base-100">
                            ₹{formatIndianNumber(currentPrice)}
                          </div>
                          {issuePrice > 0 && currentPrice !== listedPrice && (
                            <div className={cn(
                              "text-[10px] font-semibold",
                              currentPrice >= issuePrice ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
                            )}>
                              {currentPrice >= issuePrice ? "+" : ""}
                              {(((currentPrice - issuePrice) / issuePrice) * 100).toFixed(1)}% vs Issue
                            </div>
                          )}
                        </div>
                      ) : (
                        <span className="text-base-400 text-xs">--</span>
                      )}
                    </td>

                    {/* Listing Date */}
                    <td className="py-3.5 px-4 whitespace-nowrap text-xs text-base-700 dark:text-base-300 font-medium">
                      {listingDate ? formatDateTime(listingDate, DateFormats.DATE_DD_MM_YYYY) : "Listed"}
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <a
                          href="https://allotmentstatus.com/"
                          target="_blank"
                          rel="noopener"
                          title="Check IPO Allotment Status"
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-emerald-600/30 bg-emerald-50 hover:bg-emerald-600 hover:text-white dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold transition"
                        >
                          <span>Allotment</span>
                          <ExternalLink className="size-3 opacity-80" />
                        </a>

                        <Link
                          href={`/ipo-details/${item?.symbol}`}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-base-100 hover:bg-emerald-50 dark:bg-base-800 dark:hover:bg-emerald-950/40 text-xs font-semibold text-base-700 dark:text-base-200 hover:text-emerald-700 dark:hover:text-emerald-300 transition"
                        >
                          <span>Details</span>
                          <ArrowUpRight className="size-3" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View (visible only on xs/mobile) */}
      <div className="sm:hidden space-y-3">
        {ipoList.map((item) => {
          const issuePrice = Number(
            item?.ipo_max_value ?? item?.offer_price_to ?? item?.offer_price_from ?? 0
          );
          const listedPrice = Number(item?.listed_price ?? 0);
          const currentPrice = Number(item?.current_price ?? listedPrice);

          const hasListingPrice = listedPrice > 0;
          const gainAmount = hasListingPrice && issuePrice > 0 ? listedPrice - issuePrice : 0;
          const gainPercent =
            hasListingPrice && issuePrice > 0
              ? ((gainAmount / issuePrice) * 100).toFixed(2)
              : null;

          const isPositive = gainAmount > 0;
          const isNegative = gainAmount < 0;

          const isSme =
            (item?.security_type || "").toUpperCase() === "SME" ||
            item?.type?.toLowerCase?.().includes("sme") ||
            item?.company_name?.toLowerCase?.().includes("sme");

          return (
            <div
              key={item?.symbol || item?.company_name}
              className="p-4 rounded-2xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-900 shadow-sm space-y-3"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg border border-base-200 dark:border-base-800 p-1 bg-white dark:bg-base-950 overflow-hidden shrink-0 flex items-center justify-center">
                    {item?.ipo_image ? (
                      <Image
                        src={item?.ipo_image}
                        alt={item?.company_name || "IPO"}
                        width={36}
                        height={36}
                        className="object-contain"
                        unoptimized
                      />
                    ) : (
                      <span className="text-xs font-bold text-base-400">IPO</span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm text-base-900 dark:text-base-100 truncate">
                      {item?.company_name}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[10px] text-base-400 font-mono">
                        {item?.symbol}
                      </span>
                      <span
                        className={cn(
                          "px-1.5 py-0.2 rounded text-[9px] font-bold uppercase",
                          isSme
                            ? "bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300"
                            : "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300"
                        )}
                      >
                        {isSme ? "SME" : "Mainboard"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Gain Badge */}
                {gainPercent !== null && (
                  <span
                    className={cn(
                      "px-2 py-0.5 rounded-full text-xs font-bold shrink-0 inline-flex items-center gap-0.5",
                      isPositive && "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/70 dark:text-emerald-300",
                      isNegative && "bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-950/70 dark:text-rose-300"
                    )}
                  >
                    {isPositive ? `+${gainPercent}%` : `${gainPercent}%`}
                  </span>
                )}
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-3 gap-2 py-2 border-y border-base-100 dark:border-base-800 text-xs">
                <div>
                  <span className="text-[10px] text-base-400 block">Issue Price</span>
                  <span className="font-semibold text-base-900 dark:text-base-100">
                    {issuePrice > 0 ? `₹${formatIndianNumber(issuePrice)}` : "--"}
                  </span>
                </div>
                <div className="text-center">
                  <span className="text-[10px] text-base-400 block">Listing Price</span>
                  <span className="font-bold text-base-900 dark:text-base-100">
                    {hasListingPrice ? `₹${formatIndianNumber(listedPrice)}` : "--"}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-base-400 block">Current Price</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    {currentPrice > 0 ? `₹${formatIndianNumber(currentPrice)}` : "--"}
                  </span>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-base-400">
                  Listed: {item?.listing_date ? formatDateTime(item.listing_date, DateFormats.DATE_DD_MM_YYYY) : "Recently"}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://allotmentstatus.com/"
                    target="_blank"
                    rel="noopener"
                    className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    Check Allotment &nearr;
                  </a>
                  <Link
                    href={`/ipo-details/${item?.symbol}`}
                    className="px-3 py-1 bg-[#135c33] text-white text-xs font-semibold rounded-lg"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
