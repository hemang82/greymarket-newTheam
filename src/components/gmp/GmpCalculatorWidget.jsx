"use client";

import React, { useState, useEffect } from "react";
import { Calculator, Info } from "lucide-react";
import { formatIndianNumber } from "@/app_config/CommonFunction";
import { cn } from "@/lib/utils";

export default function GmpCalculatorWidget({ ipoList = [], preselectedIpo = null }) {
  const getIpoPrice = (item) => Number(item?.ipo_max_value ?? item?.offer_price_to ?? item?.offer_price_from ?? 100);
  const getIpoGmp = (item) => Number(item?.gmp ?? 0);
  const getIpoLot = (item) => Number(item?.bid_lot ?? item?.lot_size ?? 100);

  const [selectedIpoSymbol, setSelectedIpoSymbol] = useState(
    preselectedIpo?.symbol || (ipoList.length > 0 ? ipoList[0]?.symbol : "")
  );
  const [issuePrice, setIssuePrice] = useState(
    preselectedIpo ? getIpoPrice(preselectedIpo) : (ipoList.length > 0 ? getIpoPrice(ipoList[0]) : 100)
  );
  const [gmp, setGmp] = useState(
    preselectedIpo ? getIpoGmp(preselectedIpo) : (ipoList.length > 0 ? getIpoGmp(ipoList[0]) : 25)
  );
  const [lotSize, setLotSize] = useState(
    preselectedIpo ? getIpoLot(preselectedIpo) : (ipoList.length > 0 ? getIpoLot(ipoList[0]) : 100)
  );
  const [numberOfLots, setNumberOfLots] = useState(1);

  // Sync when preselectedIpo changes
  useEffect(() => {
    if (preselectedIpo) {
      setSelectedIpoSymbol(preselectedIpo.symbol);
      setIssuePrice(getIpoPrice(preselectedIpo));
      setGmp(getIpoGmp(preselectedIpo));
      setLotSize(getIpoLot(preselectedIpo));
    }
  }, [preselectedIpo]);

  // Handle IPO dropdown change
  const handleIpoSelect = (symbol) => {
    setSelectedIpoSymbol(symbol);
    const found = ipoList.find((i) => i.symbol === symbol);
    if (found) {
      setIssuePrice(getIpoPrice(found));
      setGmp(getIpoGmp(found));
      setLotSize(getIpoLot(found));
    }
  };

  const numPrice = Number(issuePrice) || 0;
  const numGmp = Number(gmp) || 0;
  const numLotSize = Number(lotSize) || 1;
  const numLots = Number(numberOfLots) || 1;

  const totalShares = numLotSize * numLots;
  const totalInvestment = numPrice * totalShares;
  const estimatedProfit = numGmp * totalShares;
  const expectedListingPrice = numPrice + numGmp;
  const totalEstimatedValue = totalInvestment + estimatedProfit;
  const percentageGain = numPrice > 0 ? ((numGmp / numPrice) * 100).toFixed(2) : "0.00";

  return (
    <div id="calculator" className="w-full my-12 p-6 sm:p-8 rounded-3xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-900 shadow-lg relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-base-200 dark:border-base-800">
        <div className="flex items-center gap-3">
          <div className="size-11 rounded-2xl bg-[#135c33] text-white flex items-center justify-center shadow-sm shrink-0">
            <Calculator className="size-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-base-900 dark:text-base-100 font-display">
              IPO GMP & Listing Gain Calculator
            </h3>
            <p className="text-xs text-base-500 dark:text-base-400">
              Calculate expected returns, total profit, and listing price based on live grey market premium.
            </p>
          </div>
        </div>

        {/* IPO Quick Picker */}
        {ipoList.length > 0 && (
          <div className="sm:w-64">
            <label className="text-[10px] font-semibold uppercase tracking-wider text-base-400 block mb-1">
              Select Preset IPO
            </label>
            <select
              value={selectedIpoSymbol}
              onChange={(e) => handleIpoSelect(e.target.value)}
              className="w-full px-3 py-2 text-xs font-medium rounded-xl border border-base-200 dark:border-base-800 bg-base-100 dark:bg-base-950 text-base-800 dark:text-base-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 cursor-pointer"
            >
              {ipoList.map((ipo) => (
                <option key={ipo.symbol} value={ipo.symbol}>
                  {ipo.company_name} (GMP: ₹{ipo.gmp ?? 0})
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Calculator Body: Inputs & Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Left: Inputs */}
        <div className="lg:col-span-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Issue Price */}
            <div>
              <label className="text-xs font-semibold text-base-700 dark:text-base-300 block mb-1.5">
                Issue Price (₹ per share)
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-base-400">₹</span>
                <input
                  type="number"
                  min="1"
                  value={issuePrice}
                  onChange={(e) => setIssuePrice(e.target.value)}
                  className="w-full pl-8 pr-3 py-2.5 rounded-xl border border-base-200 dark:border-base-800 bg-base-100 dark:bg-base-950 text-sm font-semibold text-base-900 dark:text-base-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition"
                />
              </div>
            </div>

            {/* GMP */}
            <div>
              <label className="text-xs font-semibold text-base-700 dark:text-base-300 block mb-1.5">
                Live GMP (₹ per share)
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-base-400">₹</span>
                <input
                  type="number"
                  value={gmp}
                  onChange={(e) => setGmp(e.target.value)}
                  className="w-full pl-8 pr-3 py-2.5 rounded-xl border border-base-200 dark:border-base-800 bg-base-100 dark:bg-base-950 text-sm font-semibold text-base-900 dark:text-base-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition"
                />
              </div>
            </div>

            {/* Lot Size */}
            <div>
              <label className="text-xs font-semibold text-base-700 dark:text-base-300 block mb-1.5">
                Lot Size (Shares per lot)
              </label>
              <input
                type="number"
                min="1"
                value={lotSize}
                onChange={(e) => setLotSize(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-base-200 dark:border-base-800 bg-base-100 dark:bg-base-950 text-sm font-semibold text-base-900 dark:text-base-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition"
              />
            </div>

            {/* Number of Lots */}
            <div>
              <label className="text-xs font-semibold text-base-700 dark:text-base-300 block mb-1.5">
                Number of Lots
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  max="1000"
                  value={numberOfLots}
                  onChange={(e) => setNumberOfLots(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-base-200 dark:border-base-800 bg-base-100 dark:bg-base-950 text-sm font-semibold text-base-900 dark:text-base-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition"
                />
                {/* Preset buttons */}
                {[1, 2, 5].map((l) => (
                  <button
                    key={l}
                    onClick={() => setNumberOfLots(l)}
                    className={cn(
                      "px-2.5 py-2.5 text-xs font-bold rounded-xl border transition cursor-pointer shrink-0",
                      numberOfLots === l
                        ? "bg-[#135c33] border-[#135c33] text-white"
                        : "border-base-200 dark:border-base-800 text-base-600 dark:text-base-400 hover:bg-base-100 dark:hover:bg-base-800"
                    )}
                  >
                    {l}L
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2 p-3 rounded-xl bg-base-100 dark:bg-base-800/50 text-[11px] text-base-500 dark:text-base-400">
            <Info className="size-4 shrink-0 text-emerald-600 mt-0.5" />
            <span>
              Total Shares: <strong>{formatIndianNumber(totalShares)}</strong> ({numLots} lot{numLots > 1 ? "s" : ""} × {numLotSize} shares).
            </span>
          </div>
        </div>

        {/* Right: Calculation Output Card */}
        <div className="lg:col-span-6 flex flex-col justify-between p-6 rounded-2xl bg-base-100 dark:bg-base-950 border border-base-200 dark:border-base-800">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-base-400 block mb-1">
              Estimated Listing Gain
            </span>
            <div className="flex items-baseline gap-3">
              <div className={cn(
                "text-3xl sm:text-4xl font-bold font-sans tracking-tight",
                estimatedProfit >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
              )}>
                {estimatedProfit >= 0 ? `+₹${formatIndianNumber(estimatedProfit)}` : `-₹${formatIndianNumber(Math.abs(estimatedProfit))}`}
              </div>
              <span className={cn(
                "px-2.5 py-1 rounded-full text-xs font-bold",
                Number(percentageGain) >= 0
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/80 dark:text-emerald-300 dark:border-emerald-800"
                  : "bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-950/80 dark:text-rose-300 dark:border-rose-800"
              )}>
                {Number(percentageGain) >= 0 ? `+${percentageGain}%` : `${percentageGain}%`}
              </span>
            </div>
          </div>

          {/* Breakdown Grid */}
          <div className="grid grid-cols-2 gap-3 my-6 pt-4 border-t border-base-200 dark:border-base-800 text-xs">
            <div className="p-3 rounded-xl bg-white dark:bg-base-900 border border-base-200 dark:border-base-800">
              <span className="text-[10px] text-base-400 block">Total Investment</span>
              <span className="text-sm font-bold text-base-800 dark:text-base-200">
                ₹{formatIndianNumber(totalInvestment)}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white dark:bg-base-900 border border-base-200 dark:border-base-800">
              <span className="text-[10px] text-base-400 block">Est. Listing Price</span>
              <span className="text-sm font-bold text-base-800 dark:text-base-200">
                ₹{formatIndianNumber(expectedListingPrice)} / sh
              </span>
            </div>

            <div className="col-span-2 p-3 rounded-xl bg-white dark:bg-base-900 border border-base-200 dark:border-base-800 flex items-center justify-between">
              <span className="text-xs text-base-500 dark:text-base-400">Total Portfolio Value upon Listing</span>
              <span className="text-base font-extrabold text-emerald-700 dark:text-emerald-400">
                ₹{formatIndianNumber(totalEstimatedValue)}
              </span>
            </div>
          </div>

          <p className="text-[10px] text-base-400 text-center">
            *GMP figures are unofficial and subject to market volatility. Calculation assumes 100% allotment.
          </p>
        </div>
      </div>
    </div>
  );
}
