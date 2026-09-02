"use client";

import React, { useState, useMemo } from "react";
import { TrendingUp, Flame, DollarSign, Activity, RefreshCw } from "lucide-react";
import GmpFilterBar from "@/components/gmp/GmpFilterBar";
import GmpTable from "@/components/gmp/GmpTable";
import GmpCalculatorWidget from "@/components/gmp/GmpCalculatorWidget";
import GmpContentSection from "@/components/gmp/GmpContentSection";
import GmpFaqSection from "@/components/gmp/GmpFaqSection";
import { formatIndianNumber } from "@/app_config/CommonFunction";

export default function GmpClientPage({ initialIpos = [] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("gmp_desc");
  const [calculatorIpo, setCalculatorIpo] = useState(null);

  // Compute category counts
  const counts = useMemo(() => {
    const res = { all: initialIpos.length, main: 0, sme: 0, live: 0, upcoming: 0 };
    initialIpos.forEach((item) => {
      const isSme =
        (item?.security_type || "").toUpperCase() === "SME" ||
        item?.type?.toLowerCase?.().includes("sme") ||
        item?.company_name?.toLowerCase?.().includes("sme");

      if (isSme) res.sme++;
      else res.main++;

      const category = (item?.category || item?.ipo_status?.status || "").toLowerCase();
      if (category.includes("live") || category.includes("open") || item?.is_live) {
        res.live++;
      }
      if (category.includes("upcoming")) {
        res.upcoming++;
      }
    });
    return res;
  }, [initialIpos]);

  // Filter & Sort Logic
  const filteredAndSortedIpos = useMemo(() => {
    let list = [...initialIpos];

    // 1. Search Query Filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (i) =>
          i?.company_name?.toLowerCase().includes(q) ||
          i?.symbol?.toLowerCase().includes(q)
      );
    }

    // 2. Category Filter
    if (activeCategory === "main") {
      list = list.filter(
        (i) =>
          (i?.security_type || "").toUpperCase() !== "SME" &&
          !i?.type?.toLowerCase?.().includes("sme") &&
          !i?.company_name?.toLowerCase?.().includes("sme")
      );
    } else if (activeCategory === "sme") {
      list = list.filter(
        (i) =>
          (i?.security_type || "").toUpperCase() === "SME" ||
          i?.type?.toLowerCase?.().includes("sme") ||
          i?.company_name?.toLowerCase?.().includes("sme")
      );
    } else if (activeCategory === "live") {
      list = list.filter(
        (i) =>
          (i?.category || "").toLowerCase().includes("live") ||
          (i?.ipo_status?.status || "").toLowerCase().includes("live") ||
          i?.is_live
      );
    } else if (activeCategory === "upcoming") {
      list = list.filter(
        (i) =>
          (i?.category || "").toLowerCase().includes("upcoming") ||
          (i?.ipo_status?.status || "").toLowerCase().includes("upcoming")
      );
    }

    // 3. Sorting
    list.sort((a, b) => {
      const gmpA = Number(a?.gmp ?? -9999);
      const gmpB = Number(b?.gmp ?? -9999);
      const maxPriceA = Number(a?.ipo_max_value ?? a?.offer_price_to ?? a?.offer_price_from ?? 1);
      const maxPriceB = Number(b?.ipo_max_value ?? b?.offer_price_to ?? b?.offer_price_from ?? 1);
      const gainA = maxPriceA > 0 ? (gmpA / maxPriceA) * 100 : -9999;
      const gainB = maxPriceB > 0 ? (gmpB / maxPriceB) * 100 : -9999;

      if (sortBy === "gmp_desc") {
        return gainB - gainA;
      }
      if (sortBy === "gmp_price_desc") {
        return gmpB - gmpA;
      }
      if (sortBy === "closing_soon") {
        const dateA = a?.close_date || a?.listing_date ? new Date(a?.close_date || a?.listing_date).getTime() : Infinity;
        const dateB = b?.close_date || b?.listing_date ? new Date(b?.close_date || b?.listing_date).getTime() : Infinity;
        return dateA - dateB;
      }
      if (sortBy === "name_asc") {
        return (a?.company_name || "").localeCompare(b?.company_name || "");
      }
      return 0;
    });

    return list;
  }, [initialIpos, searchQuery, activeCategory, sortBy]);

  // Top stats calculations
  const { topGainer, highestGmpItem } = useMemo(() => {
    let top = null;
    let highestGain = -Infinity;
    let maxGmpVal = -Infinity;
    let maxGmpItem = null;

    initialIpos.forEach((item) => {
      const gmp = Number(item?.gmp ?? 0);
      const maxPrice = Number(item?.ipo_max_value ?? item?.offer_price_to ?? item?.offer_price_from ?? 0);
      
      if (gmp > maxGmpVal) {
        maxGmpVal = gmp;
        maxGmpItem = item;
      }

      if (maxPrice > 0 && gmp > 0) {
        const gain = (gmp / maxPrice) * 100;
        if (gain > highestGain) {
          highestGain = gain;
          top = { ...item, gainPercent: gain.toFixed(1) };
        }
      } else if (gmp > 0 && highestGain <= 0) {
        top = { ...item, gainPercent: null };
      }
    });

    return { topGainer: top, highestGmpItem: maxGmpItem };
  }, [initialIpos]);

  const handleSelectForCalc = (ipo) => {
    setCalculatorIpo(ipo);
    const element = document.getElementById("calculator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      {/* Top Stats Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-4 mb-8">
        <div className="p-4 rounded-2xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-900 shadow-sm flex items-center gap-3">
          <div className="size-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800 flex items-center justify-center shrink-0">
            <Activity className="size-5" />
          </div>
          <div>
            <span className="text-[11px] text-base-500 dark:text-base-400 font-medium block">Tracked IPOs</span>
            <span className="text-base sm:text-lg font-bold text-base-900 dark:text-base-100 font-sans">
              {initialIpos.length} Total
            </span>
          </div>
        </div>

        <div className="p-4 rounded-2xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-900 shadow-sm flex items-center gap-3">
          <div className="size-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-[#135c33] dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center shrink-0">
            <Flame className="size-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] text-base-500 dark:text-base-400 font-medium block">Top GMP Gainer</span>
            <span className="text-xs sm:text-sm font-bold text-emerald-700 dark:text-emerald-400 truncate block font-sans">
              {topGainer
                ? `${topGainer.company_name} ${topGainer.gainPercent ? `(+${topGainer.gainPercent}%)` : `(₹${topGainer.gmp})`}`
                : "Active"}
            </span>
          </div>
        </div>

        <div className="p-4 rounded-2xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-900 shadow-sm flex items-center gap-3">
          <div className="size-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-[#135c33] dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center shrink-0">
            <DollarSign className="size-5" />
          </div>
          <div>
            <span className="text-[11px] text-base-500 dark:text-base-400 font-medium block">Highest GMP</span>
            <span className="text-base sm:text-lg font-bold text-base-900 dark:text-base-100 font-sans">
              {highestGmpItem?.gmp ? `₹${formatIndianNumber(highestGmpItem.gmp)}` : "--"}
            </span>
          </div>
        </div>

        <div className="p-4 rounded-2xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-900 shadow-sm flex items-center gap-3">
          <div className="size-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 flex items-center justify-center shrink-0">
            <RefreshCw className="size-5" />
          </div>
          <div>
            <span className="text-[11px] text-base-500 dark:text-base-400 font-medium block">Rates Status</span>
            <span className="text-xs sm:text-sm font-bold text-base-800 dark:text-base-200">
              Live & Updated
            </span>
          </div>
        </div>
      </div>

      {/* Filter, Search & Tab Controls */}
      <GmpFilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        counts={counts}
      />

      {/* Table & Cards Component */}
      <GmpTable
        ipoList={filteredAndSortedIpos}
        onSelectForCalculator={handleSelectForCalc}
      />

      {/* Interactive Profit Calculator */}
      <GmpCalculatorWidget
        ipoList={initialIpos}
        preselectedIpo={calculatorIpo}
      />

      {/* Structured SEO Guide & Content */}
      <GmpContentSection />

      {/* FAQs Section with Accordion */}
      <GmpFaqSection />
    </div>
  );
}
