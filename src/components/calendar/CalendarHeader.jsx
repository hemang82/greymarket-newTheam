"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, List, Building2, Rocket, Layers, SlidersHorizontal } from "lucide-react";
import { MONTH_NAMES } from "./calendarUtils";
import CalendarMobileFilterSheet from "./CalendarMobileFilterSheet";
import { cn } from "@/lib/utils";

export default function CalendarHeader({
  currentYear,
  currentMonth,
  onMonthChange,
  ipoType,
  onIpoTypeChange,
  eventTypeFilter,
  onEventTypeFilterChange,
  viewMode,
  onViewModeChange,
  totalEvents = 0,
  loading = false,
}) {
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
  const handlePrevMonth = () => {
    if (currentMonth === 1) {
      onMonthChange(currentYear - 1, 12);
    } else {
      onMonthChange(currentYear, currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 12) {
      onMonthChange(currentYear + 1, 1);
    } else {
      onMonthChange(currentYear, currentMonth + 1);
    }
  };

  const handleTodayClick = () => {
    const now = new Date();
    onMonthChange(now.getFullYear(), now.getMonth() + 1);
  };

  const ipoTypes = [
    { id: "all", label: "All IPOs", icon: Layers },
    { id: "mainboard", label: "Mainboard", icon: Building2 },
    { id: "sme", label: "SME IPOs", icon: Rocket },
  ];

  const eventFilters = [
    { id: "ALL", label: "All Events", dotClass: "bg-base-400" },
    { id: "OPEN", label: "Issue Opens", dotClass: "bg-emerald-500" },
    { id: "CLOSE", label: "Issue Closes", dotClass: "bg-rose-500" },
    { id: "ALLOTMENT", label: "Allotment", dotClass: "bg-amber-500" },
    { id: "LISTING", label: "Listing Day", dotClass: "bg-blue-500" },
  ];

  return (
    <div className="w-full space-y-3 sm:space-y-5 mb-4 sm:mb-8">
      {/* Top Bar: Month Navigator, Today Button, View Switcher */}
      <div className="flex items-center justify-between gap-3 p-3 sm:p-5 rounded-2xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-900 shadow-sm">
        {/* Month Navigator */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrevMonth}
              disabled={loading}
              className="p-1.5 sm:p-2 rounded-xl border border-base-200 dark:border-base-800 hover:bg-base-100 dark:hover:bg-base-800 text-base-700 dark:text-base-300 transition cursor-pointer disabled:opacity-50"
              aria-label="Previous Month"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={handleNextMonth}
              disabled={loading}
              className="p-1.5 sm:p-2 rounded-xl border border-base-200 dark:border-base-800 hover:bg-base-100 dark:hover:bg-base-800 text-base-700 dark:text-base-300 transition cursor-pointer disabled:opacity-50"
              aria-label="Next Month"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>

          {/* Month & Year Title */}
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-2xl font-bold text-base-900 dark:text-base-100 font-sans tracking-tight">
              {MONTH_NAMES[currentMonth - 1]} {currentYear}
            </h2>
            {loading && (
              <span className="inline-block size-2 rounded-full bg-[#135c33] animate-ping" />
            )}
          </div>

          <button
            onClick={handleTodayClick}
            className="hidden sm:inline-block px-3 py-1.5 rounded-lg border border-base-200 dark:border-base-800 text-xs font-semibold text-base-600 dark:text-base-400 hover:text-emerald-700 hover:border-emerald-600 dark:hover:text-emerald-400 transition cursor-pointer"
          >
            Today
          </button>
        </div>

        {/* Mobile Filter Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setIsFilterSheetOpen(true)}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition cursor-pointer shrink-0",
              ipoType !== "all" || eventTypeFilter !== "ALL"
                ? "bg-[#135c33] border-[#135c33] text-white shadow-sm"
                : "bg-base-50 dark:bg-base-800 border-base-200 dark:border-base-700 text-base-700 dark:text-base-300"
            )}
          >
            <SlidersHorizontal className="size-3.5" />
            <span>Filter</span>
            {(ipoType !== "all" || eventTypeFilter !== "ALL") && (
              <span className="size-2 rounded-full bg-amber-400" />
            )}
          </button>
        </div>

        {/* Desktop View Toggle: Grid vs Timeline */}
        <div className="hidden md:flex items-center justify-end gap-3">
          <span className="text-xs font-medium text-base-500 dark:text-base-400">
            <strong>{totalEvents}</strong> Events
          </span>

          <div className="inline-flex p-1 rounded-xl bg-base-100 dark:bg-base-800 border border-base-200 dark:border-base-700">
            <button
              onClick={() => onViewModeChange("grid")}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer",
                viewMode === "grid"
                  ? "bg-white dark:bg-base-900 text-base-900 dark:text-base-100 shadow-sm"
                  : "text-base-500 hover:text-base-900 dark:hover:text-base-100"
              )}
            >
              <CalendarIcon className="size-3.5" />
              <span>Calendar</span>
            </button>
            <button
              onClick={() => onViewModeChange("timeline")}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer",
                viewMode === "timeline"
                  ? "bg-white dark:bg-base-900 text-base-900 dark:text-base-100 shadow-sm"
                  : "text-base-500 hover:text-base-900 dark:hover:text-base-100"
              )}
            >
              <List className="size-3.5" />
              <span>Timeline</span>
            </button>
          </div>
        </div>
      </div>

      {/* DESKTOP ONLY Filter Row: Category Tabs (Mainboard/SME) + Event Type Filters */}
      <div className="hidden md:flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {ipoTypes.map((cat) => {
            const Icon = cat.icon;
            const isActive = ipoType === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onIpoTypeChange(cat.id)}
                className={cn(
                  "flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer border",
                  isActive
                    ? "bg-[#135c33] border-[#135c33] text-white shadow-sm"
                    : "bg-white dark:bg-base-900 border-base-200 dark:border-base-800 text-base-600 dark:text-base-400 hover:border-base-300 dark:hover:border-base-700 hover:text-base-900 dark:hover:text-base-100"
                )}
              >
                <Icon className="size-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Event Legend & Quick Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {eventFilters.map((ef) => {
            const isActive = eventTypeFilter === ef.id;
            return (
              <button
                key={ef.id}
                onClick={() => onEventTypeFilterChange(ef.id)}
                className={cn(
                  "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition cursor-pointer whitespace-nowrap",
                  isActive
                    ? "bg-base-900 border-base-900 text-white dark:bg-base-100 dark:border-base-100 dark:text-base-900"
                    : "bg-white dark:bg-base-900 border-base-200 dark:border-base-800 text-base-600 dark:text-base-400 hover:border-base-300"
                )}
              >
                <span className={cn("size-2 rounded-full", ef.dotClass)} />
                <span>{ef.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Bottom Sheet Filter (Swiggy / Zomato style) */}
      <CalendarMobileFilterSheet
        isOpen={isFilterSheetOpen}
        onClose={() => setIsFilterSheetOpen(false)}
        ipoType={ipoType}
        onIpoTypeChange={onIpoTypeChange}
        eventTypeFilter={eventTypeFilter}
        onEventTypeFilterChange={onEventTypeFilterChange}
      />
    </div>
  );
}
