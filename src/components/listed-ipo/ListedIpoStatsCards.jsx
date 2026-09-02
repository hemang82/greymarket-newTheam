"use client";

import React from "react";
import { TrendingUp, Award, CheckCircle2, Building } from "lucide-react";
import { formatIndianNumber } from "@/app_config/CommonFunction";

export default function ListedIpoStatsCards({ ipos = [] }) {
  if (!ipos || ipos.length === 0) return null;

  let totalGain = 0;
  let gainCount = 0;
  let positiveCount = 0;
  let topGainer = null;
  let topGainPercent = -Infinity;

  ipos.forEach((item) => {
    const issuePrice = Number(
      item?.ipo_max_value ?? item?.offer_price_to ?? item?.offer_price_from ?? 0
    );
    const listedPrice = Number(item?.listed_price ?? 0);

    if (issuePrice > 0 && listedPrice > 0) {
      const gainPercent = ((listedPrice - issuePrice) / issuePrice) * 100;
      totalGain += gainPercent;
      gainCount++;

      if (gainPercent > 0) {
        positiveCount++;
      }

      if (gainPercent > topGainPercent) {
        topGainPercent = gainPercent;
        topGainer = {
          name: item?.company_name || item?.symbol,
          gain: gainPercent.toFixed(2),
          listedPrice: listedPrice,
        };
      }
    }
  });

  const avgGain = gainCount > 0 ? (totalGain / gainCount).toFixed(2) : "0.00";
  const successRate = gainCount > 0 ? Math.round((positiveCount / gainCount) * 100) : 0;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
      {/* 1. Total Listed */}
      <div className="p-4 rounded-2xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-900 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-base-500 dark:text-base-400">Total Listed</span>
          <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
            <Building className="size-4" />
          </div>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl sm:text-2xl font-bold text-base-900 dark:text-base-100">
            {ipos.length}
          </span>
          <span className="text-xs text-base-500 dark:text-base-400">IPOs</span>
        </div>
      </div>

      {/* 2. Avg Listing Gain */}
      <div className="p-4 rounded-2xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-900 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-base-500 dark:text-base-400">Avg Listing Gain</span>
          <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
            <TrendingUp className="size-4" />
          </div>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400">
            {Number(avgGain) >= 0 ? `+${avgGain}%` : `${avgGain}%`}
          </span>
          <span className="text-xs text-base-500 dark:text-base-400">Average</span>
        </div>
      </div>

      {/* 3. Top Gainer */}
      <div className="p-4 rounded-2xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-900 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-base-500 dark:text-base-400">Top Gainer</span>
          <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400">
            <Award className="size-4" />
          </div>
        </div>
        <div className="mt-2">
          {topGainer ? (
            <div>
              <div className="text-sm font-bold text-base-900 dark:text-base-100 truncate" title={topGainer.name}>
                {topGainer.name}
              </div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                +{topGainer.gain}%
              </span>
            </div>
          ) : (
            <span className="text-sm font-semibold text-base-400">--</span>
          )}
        </div>
      </div>

      {/* 4. Positive Listing Rate */}
      <div className="p-4 rounded-2xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-900 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-base-500 dark:text-base-400">Premium Listing Rate</span>
          <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
            <CheckCircle2 className="size-4" />
          </div>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">
            {successRate}%
          </span>
          <span className="text-xs text-base-500 dark:text-base-400">
            ({positiveCount}/{gainCount})
          </span>
        </div>
      </div>
    </div>
  );
}
