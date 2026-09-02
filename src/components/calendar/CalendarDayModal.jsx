"use client";

import React from "react";
import Link from "next/link";
import { X, Calendar, ArrowUpRight, PlusCircle, CheckCircle2 } from "lucide-react";
import { formatDateTime } from "@/app_config/CommonFunction";
import { DateFormats } from "@/app_config/CommonVariable";
import { cn } from "@/lib/utils";

export default function CalendarDayModal({
  isOpen,
  onClose,
  selectedDate,
  events = [],
}) {
  if (!isOpen || !selectedDate) return null;

  const createGoogleCalendarUrl = (item) => {
    const title = encodeURIComponent(item.title || `${item.company_name} IPO`);
    const dateFormatted = selectedDate.replace(/-/g, "");
    const details = encodeURIComponent(
      `Check live GMP, subscription, and allotment for ${item.company_name} IPO on GreyMarketIPO: https://greymarketipo.com/ipo-details/${item.symbol}`
    );
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dateFormatted}/${dateFormatted}&details=${details}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-900 shadow-2xl p-6 overflow-hidden max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-base-200 dark:border-base-800">
          <div className="flex items-center gap-2.5">
            <div className="size-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-[#135c33] dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center shrink-0">
              <Calendar className="size-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-base-900 dark:text-base-100 font-sans">
                {formatDateTime(selectedDate, DateFormats.DATE_LONG) || selectedDate}
              </h3>
              <p className="text-xs text-base-500 dark:text-base-400">
                {events.length} Event{events.length !== 1 ? "s" : ""} Scheduled
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl border border-base-200 dark:border-base-800 text-base-400 hover:text-base-700 dark:hover:text-base-200 hover:bg-base-100 dark:hover:bg-base-800 transition cursor-pointer"
            aria-label="Close"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Event List */}
        <div className="overflow-y-auto py-4 space-y-3 flex-1 scrollbar-thin">
          {events.length === 0 ? (
            <p className="text-center py-8 text-sm text-base-400">
              No IPO events scheduled for this date.
            </p>
          ) : (
            events.map((ev, idx) => {
              const meta = ev.eventMeta;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl border border-base-200 dark:border-base-800 bg-base-100/50 dark:bg-base-950/50 hover:bg-base-100 dark:hover:bg-base-800/40 transition space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border mb-1.5",
                          meta.badgeClass
                        )}
                      >
                        <span className={cn("size-1.5 rounded-full", meta.dotClass)} />
                        <span>{meta.label}</span>
                      </span>
                      <h4 className="text-sm font-semibold text-base-900 dark:text-base-100 truncate">
                        {ev.company_name}
                      </h4>
                      <p className="text-xs text-base-400 font-mono mt-0.5">
                        Symbol: {ev.symbol}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-base-600 dark:text-base-300 font-medium">
                    {ev.title}
                  </p>

                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-base-200/60 dark:border-base-800">
                    <a
                      href={createGoogleCalendarUrl(ev)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-base-200 dark:border-base-800 hover:border-emerald-600 text-[11px] font-semibold text-base-600 dark:text-base-300 hover:text-emerald-700 transition"
                    >
                      <PlusCircle className="size-3" />
                      <span>Google Calendar</span>
                    </a>

                    <Link
                      href={`/ipo-details/${ev.symbol}`}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[#135c33] hover:bg-[#16a34a] text-white text-[11px] font-semibold transition"
                    >
                      <span>IPO Details</span>
                      <ArrowUpRight className="size-3" />
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-base-200 dark:border-base-800 text-center">
          <button
            onClick={onClose}
            className="w-full py-2 rounded-xl bg-base-100 dark:bg-base-800 hover:bg-base-200 text-xs font-semibold text-base-700 dark:text-base-200 transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
