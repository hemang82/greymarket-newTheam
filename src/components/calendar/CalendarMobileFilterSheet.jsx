"use client";

import React, { useState, useEffect } from "react";
import { X, SlidersHorizontal, Check, Building2, Rocket, Layers, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CalendarMobileFilterSheet({
  isOpen,
  onClose,
  ipoType,
  onIpoTypeChange,
  eventTypeFilter,
  onEventTypeFilterChange,
}) {
  const [tempIpoType, setTempIpoType] = useState(ipoType);
  const [tempEventType, setTempEventType] = useState(eventTypeFilter);

  useEffect(() => {
    if (isOpen) {
      setTempIpoType(ipoType);
      setTempEventType(eventTypeFilter);
    }
  }, [isOpen, ipoType, eventTypeFilter]);

  if (!isOpen) return null;

  const handleApply = () => {
    onIpoTypeChange(tempIpoType);
    onEventTypeFilterChange(tempEventType);
    onClose();
  };

  const handleReset = () => {
    setTempIpoType("all");
    setTempEventType("ALL");
  };

  const ipoTypes = [
    { id: "all", label: "All IPOs", icon: Layers, desc: "Mainboard & SME" },
    { id: "mainboard", label: "Mainboard IPOs", icon: Building2, desc: "NSE & BSE Regular" },
    { id: "sme", label: "SME IPOs", icon: Rocket, desc: "NSE Emerge & BSE SME" },
  ];

  const eventFilters = [
    { id: "ALL", label: "All Events", dotClass: "bg-base-400" },
    { id: "OPEN", label: "Issue Opens", dotClass: "bg-emerald-500" },
    { id: "CLOSE", label: "Issue Closes", dotClass: "bg-rose-500" },
    { id: "ALLOTMENT", label: "Allotment Dates", dotClass: "bg-amber-500" },
    { id: "LISTING", label: "Exchange Listings", dotClass: "bg-blue-500" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-xs animate-fade-in md:hidden">
      {/* Backdrop Click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Bottom Sheet Drawer (Zomato/Swiggy style) */}
      <div className="relative w-full max-h-[85vh] bg-white dark:bg-base-900 rounded-t-[32px] border-t border-base-200 dark:border-base-800 shadow-2xl p-5 flex flex-col z-10 animate-slide-up">
        {/* Top Drag Handle */}
        <div className="w-12 h-1.5 rounded-full bg-base-300 dark:bg-base-700 mx-auto mb-4 shrink-0" />

        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-base-200 dark:border-base-800">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-[#135c33] dark:text-emerald-400 flex items-center justify-center">
              <SlidersHorizontal className="size-4" />
            </div>
            <h3 className="text-base font-bold text-base-900 dark:text-base-100 font-sans">
              Filter IPO Calendar
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl border border-base-200 dark:border-base-800 text-base-400 hover:text-base-700 dark:hover:text-base-200 cursor-pointer"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Filter Content */}
        <div className="overflow-y-auto py-4 space-y-5 flex-1 scrollbar-none">
          {/* Section 1: IPO Category */}
          <div className="space-y-2.5">
            <label className="text-xs font-bold text-base-900 dark:text-base-100 uppercase tracking-wider block">
              1. IPO Category
            </label>
            <div className="grid grid-cols-1 gap-2">
              {ipoTypes.map((cat) => {
                const Icon = cat.icon;
                const isSelected = tempIpoType === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setTempIpoType(cat.id)}
                    className={cn(
                      "flex items-center justify-between p-3 rounded-2xl border text-left transition cursor-pointer",
                      isSelected
                        ? "bg-emerald-50/60 border-[#135c33] dark:bg-emerald-950/40 dark:border-emerald-600"
                        : "bg-base-50/40 border-base-200 dark:bg-base-950/40 dark:border-base-800 hover:bg-base-100"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "size-8 rounded-xl flex items-center justify-center",
                          isSelected
                            ? "bg-[#135c33] text-white"
                            : "bg-base-200 dark:bg-base-800 text-base-600 dark:text-base-400"
                        )}
                      >
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-base-900 dark:text-base-100 block">
                          {cat.label}
                        </span>
                        <span className="text-[11px] text-base-400 block">
                          {cat.desc}
                        </span>
                      </div>
                    </div>

                    <div
                      className={cn(
                        "size-5 rounded-full border flex items-center justify-center",
                        isSelected
                          ? "border-[#135c33] bg-[#135c33] text-white"
                          : "border-base-300 dark:border-base-700"
                      )}
                    >
                      {isSelected && <Check className="size-3" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 2: Event Type */}
          <div className="space-y-2.5">
            <label className="text-xs font-bold text-base-900 dark:text-base-100 uppercase tracking-wider block">
              2. Event Milestones
            </label>
            <div className="grid grid-cols-2 gap-2">
              {eventFilters.map((ef) => {
                const isSelected = tempEventType === ef.id;
                return (
                  <button
                    key={ef.id}
                    type="button"
                    onClick={() => setTempEventType(ef.id)}
                    className={cn(
                      "flex items-center gap-2 p-2.5 rounded-xl border text-xs font-semibold transition cursor-pointer",
                      isSelected
                        ? "bg-[#135c33] border-[#135c33] text-white shadow-sm"
                        : "bg-base-50/40 border-base-200 dark:bg-base-950/40 dark:border-base-800 text-base-700 dark:text-base-300"
                    )}
                  >
                    <span
                      className={cn(
                        "size-2 rounded-full shrink-0",
                        isSelected ? "bg-white" : ef.dotClass
                      )}
                    />
                    <span className="truncate">{ef.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-base-200 dark:border-base-800 flex items-center gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-2xl border border-base-200 dark:border-base-800 text-xs font-bold text-base-600 dark:text-base-400 hover:bg-base-100 dark:hover:bg-base-800 transition cursor-pointer"
          >
            <RotateCcw className="size-3.5" />
            <span>Reset</span>
          </button>

          <button
            type="button"
            onClick={handleApply}
            className="flex-1 py-3 rounded-2xl bg-[#135c33] hover:bg-[#16a34a] text-white text-xs font-bold transition cursor-pointer shadow-md text-center"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}
