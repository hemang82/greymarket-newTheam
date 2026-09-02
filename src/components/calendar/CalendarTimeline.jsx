"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Calendar, PlusCircle } from "lucide-react";
import { formatDateTime } from "@/app_config/CommonFunction";
import { DateFormats } from "@/app_config/CommonVariable";
import { groupEventsByDate } from "./calendarUtils";
import { cn } from "@/lib/utils";

export default function CalendarTimeline({ events = [], onSelectDate }) {
  const eventsByDate = groupEventsByDate(events);
  const sortedDates = Object.keys(eventsByDate).sort();

  if (sortedDates.length === 0) {
    return (
      <div className="w-full py-16 text-center rounded-3xl border border-dashed border-base-300 dark:border-base-800 bg-white/50 dark:bg-base-900/50">
        <p className="text-base font-medium text-base-600 dark:text-base-400">
          No IPO events scheduled for this month.
        </p>
        <p className="text-xs text-base-400 dark:text-base-500 mt-1">
          Try switching months or selecting a different IPO category.
        </p>
      </div>
    );
  }

  const todayStr = new Date().toISOString().split("T")[0];

  const createGoogleCalendarUrl = (item) => {
    const title = encodeURIComponent(item.title || `${item.company_name} IPO`);
    const dateFormatted = item.date.replace(/-/g, "");
    const details = encodeURIComponent(
      `Check live GMP, subscription, and allotment for ${item.company_name} IPO on GreyMarketIPO: https://greymarketipo.com/ipo-details/${item.symbol}`
    );
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dateFormatted}/${dateFormatted}&details=${details}`;
  };

  return (
    <div className="w-full space-y-6">
      {sortedDates.map((dateKey) => {
        const dayEvents = eventsByDate[dateKey] || [];
        const isToday = dateKey === todayStr;

        return (
          <div
            key={dateKey}
            className={cn(
              "rounded-3xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-900 shadow-sm p-4 sm:p-6 transition",
              isToday && "ring-2 ring-emerald-500/40 border-emerald-500/40"
            )}
          >
            {/* Date Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-base-200 dark:border-base-800">
              <div className="flex items-center gap-2.5">
                <div className="size-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-[#135c33] dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center shrink-0">
                  <Calendar className="size-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-base-900 dark:text-base-100 font-sans">
                      {formatDateTime(dateKey, DateFormats.DATE_LONG) || dateKey}
                    </h3>
                    {isToday && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#135c33] text-white">
                        TODAY
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-base-400">
                    {dayEvents.length} Event{dayEvents.length !== 1 ? "s" : ""}
                  </span>
                </div>
              </div>
            </div>

            {/* Event Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {dayEvents.map((ev, idx) => {
                const meta = ev.eventMeta;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border border-base-200 dark:border-base-800 bg-base-100/50 dark:bg-base-950/50 hover:bg-base-100 dark:hover:bg-base-800/40 transition flex flex-col justify-between gap-3"
                  >
                    <div className="space-y-1.5">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border",
                          meta.badgeClass
                        )}
                      >
                        <span className={cn("size-1.5 rounded-full", meta.dotClass)} />
                        <span>{meta.label}</span>
                      </span>

                      <h4 className="text-sm font-semibold text-base-900 dark:text-base-100">
                        {ev.company_name}
                      </h4>
                      <p className="text-xs text-base-500 dark:text-base-400 font-medium">
                        {ev.title}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-2 pt-2 border-t border-base-200/60 dark:border-base-800">
                      <a
                        href={createGoogleCalendarUrl(ev)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-base-200 dark:border-base-800 hover:border-emerald-600 text-[11px] font-semibold text-base-600 dark:text-base-300 hover:text-emerald-700 transition"
                      >
                        <PlusCircle className="size-3" />
                        <span>Add Reminder</span>
                      </a>

                      <Link
                        href={`/ipo-details/${ev.symbol}`}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[#135c33] hover:bg-[#16a34a] text-white text-[11px] font-semibold transition"
                      >
                        <span>Details</span>
                        <ArrowUpRight className="size-3" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
