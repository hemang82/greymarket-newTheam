"use client";

import React from "react";
import { Search, X, SlidersHorizontal, Building2, Rocket, Clock, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

export default function GmpFilterBar({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  sortBy,
  setSortBy,
  counts = { all: 0, main: 0, sme: 0, live: 0, upcoming: 0 },
}) {
  const categories = [
    { id: "all", label: "All Active", icon: Layers, count: counts.all },
    { id: "main", label: "Mainboard", icon: Building2, count: counts.main },
    { id: "sme", label: "SME IPOs", icon: Rocket, count: counts.sme },
    { id: "live", label: "Live Now", icon: Clock, count: counts.live },
    { id: "upcoming", label: "Upcoming", icon: Clock, count: counts.upcoming },
  ];

  return (
    <div className="w-full space-y-4 mb-6">
      {/* Search & Sort Row */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        {/* Search Bar */}
        <div className="relative w-full sm:flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-base-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search IPO by name or symbol (e.g. Tata, NTPC, SME)..."
            className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-900 text-sm text-base-900 dark:text-base-100 placeholder:text-base-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-base-400 hover:text-base-600 dark:hover:text-base-200 transition"
              aria-label="Clear search"
            >
              <X className="size-4" />
            </button>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="w-full sm:w-auto flex items-center gap-2 self-end sm:self-auto">
          <div className="relative w-full sm:w-48">
            <SlidersHorizontal className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-base-400 pointer-events-none" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full pl-8 pr-8 py-2.5 rounded-xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-900 text-xs font-medium text-base-800 dark:text-base-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition shadow-sm cursor-pointer appearance-none"
            >
              <option value="gmp_desc">Highest GMP (%)</option>
              <option value="gmp_price_desc">Highest GMP (₹)</option>
              <option value="closing_soon">Closing Soonest</option>
              <option value="name_asc">Name (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer border",
                isActive
                  ? "bg-[#135c33] border-[#135c33] text-white shadow-sm"
                  : "bg-white dark:bg-base-900 border-base-200 dark:border-base-800 text-base-600 dark:text-base-400 hover:border-base-300 dark:hover:border-base-700 hover:text-base-900 dark:hover:text-base-100"
              )}
            >
              <Icon className="size-3.5" />
              <span>{cat.label}</span>
              {cat.count > 0 && (
                <span
                  className={cn(
                    "px-1.5 py-0.5 rounded-full text-[10px] font-bold",
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-base-100 dark:bg-base-800 text-base-600 dark:text-base-400"
                  )}
                >
                  {cat.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
