"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TrendingUp, TrendingDown, Minus, ArrowUpRight, Calculator, Calendar } from "lucide-react";
import { formatIndianPrice, formatIndianNumber, formatDateTime } from "@/app_config/CommonFunction";
import { DateFormats } from "@/app_config/CommonVariable";
import { formatGmpValue } from "@/app_config/IPOCalculation";
import { cn } from "@/lib/utils";

export default function GmpTable({ ipoList = [], onSelectForCalculator }) {
  if (!ipoList || ipoList.length === 0) {
    return (
      <div className="w-full py-16 text-center rounded-2xl border border-dashed border-base-300 dark:border-base-800 bg-white/50 dark:bg-base-900/50">
        <p className="text-base font-medium text-base-600 dark:text-base-400">
          No IPOs found matching your search or filter.
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
                <th scope="col" className="py-3.5 px-4">Price Band</th>
                <th scope="col" className="py-3.5 px-4 text-center">Live GMP</th>
                <th scope="col" className="py-3.5 px-4 text-center">Est. Listing Price</th>
                <th scope="col" className="py-3.5 px-4 text-center">Est. Gain (%)</th>
                <th scope="col" className="py-3.5 px-4 text-center">Profit / Lot</th>
                <th scope="col" className="py-3.5 px-4">Start & Close Date</th>
                <th scope="col" className="py-3.5 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-base-200 dark:divide-base-800 font-medium">
              {ipoList.map((item) => {
                const maxPrice = Number(
                  item?.ipo_max_value ?? item?.offer_price_to ?? item?.offer_price_from ?? 0
                );
                const gmp = item?.gmp !== null && item?.gmp !== undefined ? Number(item?.gmp) : null;
                const isPositive = gmp > 0;
                const isNegative = gmp < 0;
                const isZero = gmp === 0 || gmp === null;

                const gainPercent =
                  gmp !== null && maxPrice > 0
                    ? ((gmp / maxPrice) * 100).toFixed(2)
                    : null;

                const estListingPrice =
                  gmp !== null && maxPrice > 0 ? maxPrice + gmp : null;

                const lotSize = Number(item?.bid_lot ?? item?.lot_size ?? 0);
                const profitPerLot =
                  gmp !== null && lotSize > 0 ? gmp * lotSize : null;

                const isSme =
                  (item?.security_type || "").toUpperCase() === "SME" ||
                  item?.type?.toLowerCase?.().includes("sme") ||
                  item?.company_name?.toLowerCase?.().includes("sme");

                const startDate = item?.start_date || item?.offer_date;
                const closeDate = item?.close_date || item?.end_date;

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
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[11px] font-mono text-base-400">
                              {item?.symbol}
                            </span>
                            <span
                              className={cn(
                                "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium text-white",
                                isSme ? "bg-amber-600" : "bg-[#135c33]"
                              )}
                            >
                              <span className="inline-block w-1 h-1 rounded-full bg-white ring-1 ring-white/60" />
                              {isSme ? "SME" : "MainBoard"}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </td>

                    {/* Price Band */}
                    <td className="py-3.5 px-4 whitespace-nowrap text-base-700 dark:text-base-300 text-xs">
                      {item?.price_range ? (
                        item.price_range
                      ) : item?.offer_price_from && item?.offer_price_to ? (
                        item.offer_price_from === item.offer_price_to ? (
                          `₹${formatIndianNumber(item.offer_price_to)}`
                        ) : (
                          `₹${formatIndianNumber(item.offer_price_from)} - ₹${formatIndianNumber(item.offer_price_to)}`
                        )
                      ) : (
                        "TBA"
                      )}
                    </td>

                    {/* GMP */}
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      {gmp !== null ? (
                        <div className="inline-flex items-center gap-1 font-bold text-sm">
                          {isPositive && <TrendingUp className="size-3.5 text-emerald-600" />}
                          {isNegative && <TrendingDown className="size-3.5 text-rose-500" />}
                          {isZero && <Minus className="size-3.5 text-base-400" />}
                          <span
                            className={cn(
                              isPositive && "text-emerald-600 dark:text-emerald-400",
                              isNegative && "text-rose-600 dark:text-rose-400",
                              isZero && "text-base-500"
                            )}
                          >
                            ₹{formatIndianNumber(Math.abs(gmp))}
                          </span>
                        </div>
                      ) : (
                        <span className="text-base-400 text-xs">--</span>
                      )}
                    </td>

                    {/* Estimated Listing Price */}
                    <td className="py-3.5 px-4 text-center whitespace-nowrap font-semibold text-base-800 dark:text-base-200">
                      {estListingPrice ? `₹${formatIndianNumber(estListingPrice)}` : "--"}
                    </td>

                    {/* Est. Gain % */}
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      {gainPercent !== null ? (
                        <span
                          className={cn(
                            "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold",
                            isPositive && "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-800",
                            isNegative && "bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-950/70 dark:text-rose-300 dark:border-rose-800",
                            isZero && "bg-base-100 text-base-600 dark:bg-base-800 dark:text-base-400"
                          )}
                        >
                          {isPositive ? `+${gainPercent}%` : `${gainPercent}%`}
                        </span>
                      ) : (
                        <span className="text-base-400 text-xs">--</span>
                      )}
                    </td>

                    {/* Profit per Lot */}
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      {profitPerLot !== null && profitPerLot !== 0 ? (
                        <div>
                          <div
                            className={cn(
                              "font-bold text-xs",
                              profitPerLot > 0 ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
                            )}
                          >
                            {profitPerLot > 0 ? `+₹${formatIndianNumber(profitPerLot)}` : `-₹${formatIndianNumber(Math.abs(profitPerLot))}`}
                          </div>
                          <div className="text-[10px] text-base-400">
                            {lotSize} shares/lot
                          </div>
                        </div>
                      ) : (
                        <span className="text-base-400 text-xs">
                          {lotSize > 0 ? `${lotSize} shs` : "--"}
                        </span>
                      )}
                    </td>

                    {/* Start & Close Dates */}
                    <td className="py-3.5 px-4 whitespace-nowrap text-xs">
                      {startDate ? (
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-1.5 text-base-900 dark:text-base-100 font-medium">
                            <span className="text-[10px] text-base-400 font-normal w-9">Start:</span>
                            <span>{formatDateTime(startDate, DateFormats.DATE_DD_MM_YYYY)}</span>
                          </div>
                          {closeDate && (
                            <div className="flex items-center gap-1.5 text-base-600 dark:text-base-400">
                              <span className="text-[10px] text-base-400 font-normal w-9">Close:</span>
                              <span>{formatDateTime(closeDate, DateFormats.DATE_DD_MM_YYYY)}</span>
                            </div>
                          )}
                        </div>
                      ) : (
                        <span className="text-base-400 text-xs">Dates TBA</span>
                      )}
                    </td>

                    {/* Action */}
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        {onSelectForCalculator && (
                          <button
                            onClick={() => onSelectForCalculator(item)}
                            title="Calculate Listing Profit"
                            className="p-1.5 rounded-lg border border-base-200 dark:border-base-800 text-base-500 hover:text-emerald-600 hover:border-emerald-600 transition cursor-pointer"
                          >
                            <Calculator className="size-3.5" />
                          </button>
                        )}
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

      {/* Mobile Card View */}
      <div className="block sm:hidden space-y-3">
        {ipoList.map((item) => {
          const maxPrice = Number(
            item?.ipo_max_value ?? item?.offer_price_to ?? item?.offer_price_from ?? 0
          );
          const gmp = item?.gmp !== null && item?.gmp !== undefined ? Number(item?.gmp) : null;
          const isPositive = gmp > 0;
          const isNegative = gmp < 0;
          const isZero = gmp === 0 || gmp === null;

          const gainPercent =
            gmp !== null && maxPrice > 0
              ? ((gmp / maxPrice) * 100).toFixed(2)
              : null;

          const estListingPrice =
            gmp !== null && maxPrice > 0 ? maxPrice + gmp : null;

          const lotSize = Number(item?.bid_lot ?? item?.lot_size ?? 0);
          const profitPerLot =
            gmp !== null && lotSize > 0 ? gmp * lotSize : null;

          const isSme =
            (item?.security_type || "").toUpperCase() === "SME" ||
            item?.type?.toLowerCase?.().includes("sme") ||
            item?.company_name?.toLowerCase?.().includes("sme");

          const startDate = item?.start_date || item?.offer_date;
          const closeDate = item?.close_date || item?.end_date;

          return (
            <div
              key={item?.symbol || item?.company_name}
              className="p-4 rounded-2xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-900 shadow-sm space-y-3"
            >
              {/* Header: Logo, Name, Badge */}
              <div className="flex items-start justify-between gap-3">
                <Link
                  href={`/ipo-details/${item?.symbol}`}
                  className="flex items-center gap-3 flex-1 min-w-0"
                >
                  <div className="w-11 h-11 rounded-lg border border-base-200 dark:border-base-800 p-1 bg-white dark:bg-base-950 overflow-hidden shrink-0 flex items-center justify-center">
                    {item?.ipo_image ? (
                      <Image
                        src={item?.ipo_image}
                        alt={item?.company_name || "IPO"}
                        width={40}
                        height={40}
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
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[11px] font-mono text-base-400">
                        {item?.symbol}
                      </span>
                      <span
                        className={cn(
                          "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium text-white",
                          isSme ? "bg-amber-600" : "bg-[#135c33]"
                        )}
                      >
                        <span className="inline-block w-1 h-1 rounded-full bg-white ring-1 ring-white/60" />
                        {isSme ? "SME" : "MainBoard"}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* GMP Badge */}
                <div className="text-right shrink-0">
                  {gmp !== null ? (
                    <div>
                      <div className="inline-flex items-center gap-1 font-bold text-sm">
                        {isPositive && <TrendingUp className="size-3.5 text-emerald-600" />}
                        {isNegative && <TrendingDown className="size-3.5 text-rose-500" />}
                        <span
                          className={cn(
                            isPositive && "text-emerald-600 dark:text-emerald-400",
                            isNegative && "text-rose-600 dark:text-rose-400",
                            isZero && "text-base-500"
                          )}
                        >
                          ₹{formatIndianNumber(Math.abs(gmp))}
                        </span>
                      </div>
                      {gainPercent !== null && (
                        <div
                          className={cn(
                            "text-[10px] font-bold mt-0.5",
                            isPositive && "text-emerald-600 dark:text-emerald-400",
                            isNegative && "text-rose-600 dark:text-rose-400",
                            isZero && "text-base-400"
                          )}
                        >
                          {isPositive ? `+${gainPercent}%` : `${gainPercent}%`}
                        </div>
                      )}
                    </div>
                  ) : (
                    <span className="text-xs text-base-400 font-medium">GMP TBA</span>
                  )}
                </div>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-3 gap-2 py-2 border-y border-base-100 dark:border-base-800/60 text-xs">
                <div>
                  <span className="text-[10px] text-base-400 block">Price Band</span>
                  <span className="font-semibold text-base-800 dark:text-base-200">
                    {item?.price_range || (maxPrice > 0 ? `₹${formatIndianNumber(maxPrice)}` : "TBA")}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-base-400 block">Est. Listing</span>
                  <span className="font-semibold text-base-800 dark:text-base-200">
                    {estListingPrice ? `₹${formatIndianNumber(estListingPrice)}` : "--"}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-base-400 block">Profit / Lot</span>
                  <span
                    className={cn(
                      "font-bold",
                      profitPerLot > 0 ? "text-emerald-600 dark:text-emerald-400" : "text-base-700 dark:text-base-300"
                    )}
                  >
                    {profitPerLot ? `₹${formatIndianNumber(profitPerLot)}` : "--"}
                  </span>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between text-xs pt-1">
                <div className="flex items-center gap-1.5 text-base-600 dark:text-base-400 text-[11px]">
                  <Calendar className="size-3 text-base-400 shrink-0" />
                  <span>
                    {startDate ? (
                      <>
                        Start: <strong>{formatDateTime(startDate, DateFormats.DATE_DD_MM_YYYY)}</strong>
                        {closeDate && <> | Close: <strong>{formatDateTime(closeDate, DateFormats.DATE_DD_MM_YYYY)}</strong></>}
                      </>
                    ) : (
                      "Dates TBA"
                    )}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {onSelectForCalculator && (
                    <button
                      onClick={() => onSelectForCalculator(item)}
                      className="px-2.5 py-1 rounded-lg border border-base-200 dark:border-base-800 text-[11px] font-semibold text-base-600 dark:text-base-300 flex items-center gap-1 hover:border-emerald-600 hover:text-emerald-600 transition"
                    >
                      <Calculator className="size-3" />
                      <span>Calc</span>
                    </button>
                  )}
                  <Link
                    href={`/ipo-details/${item?.symbol}`}
                    className="px-3 py-1 rounded-lg bg-[#135c33] hover:bg-[#16a34a] text-[11px] font-semibold text-white transition flex items-center gap-1"
                  >
                    <span>View</span>
                    <ArrowUpRight className="size-3" />
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
