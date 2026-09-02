"use client";

import React from "react";
import { DAYS_OF_WEEK, generateMonthGrid, groupEventsByDate } from "./calendarUtils";
import { cn } from "@/lib/utils";

export default function CalendarGrid({
  currentYear,
  currentMonth,
  events = [],
  onSelectDate,
}) {
  const days = generateMonthGrid(currentYear, currentMonth);
  const eventsByDate = groupEventsByDate(events);

  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <div className="w-full overflow-hidden rounded-3xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-900 shadow-sm">
      {/* Day of Week Headers */}
      <div className="grid grid-cols-7 border-b border-base-200 dark:border-base-800 bg-base-100/75 dark:bg-base-950/75 text-center text-xs font-bold uppercase tracking-wider text-base-500 dark:text-base-400 py-3">
        {DAYS_OF_WEEK.map((d, i) => (
          <div key={d} className={cn(i === 0 || i === 6 ? "text-rose-500/80" : "")}>
            {d}
          </div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 divide-x divide-y divide-base-200 dark:divide-base-800 border-b border-base-200 dark:border-base-800 font-sans">
        {days.map((day, idx) => {
          const dayEvents = eventsByDate[day.dateKey] || [];
          const isToday = day.dateKey === todayStr;

          return (
            <div
              key={idx}
              onClick={() => onSelectDate(day.dateKey, dayEvents)}
              className={cn(
                "min-h-[105px] sm:min-h-[125px] p-1.5 sm:p-2.5 transition flex flex-col justify-between cursor-pointer group",
                day.isCurrentMonth
                  ? "bg-white dark:bg-base-900 hover:bg-base-100/60 dark:hover:bg-base-800/40"
                  : "bg-base-100/40 dark:bg-base-950/40 text-base-300 dark:text-base-600 hover:bg-base-100/80",
                isToday && "ring-2 ring-emerald-500/40 inset-0 z-10 bg-emerald-50/20 dark:bg-emerald-950/20"
              )}
            >
              {/* Day Header: Day Number + Today Badge */}
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "inline-flex items-center justify-center size-6 sm:size-7 text-xs font-bold rounded-lg transition",
                    isToday
                      ? "bg-[#135c33] text-white shadow-sm"
                      : day.isCurrentMonth
                      ? "text-base-900 dark:text-base-100 group-hover:bg-base-200/60 dark:group-hover:bg-base-800"
                      : "text-base-400 dark:text-base-600"
                  )}
                >
                  {day.dayNumber}
                </span>

                {dayEvents.length > 0 && (
                  <span className="hidden sm:inline-flex px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-base-100 dark:bg-base-800 text-base-600 dark:text-base-300">
                    {dayEvents.length}
                  </span>
                )}
              </div>

              {/* Event Pills (Desktop / Tablet) */}
              <div className="hidden sm:flex flex-col gap-1 my-1">
                {dayEvents.slice(0, 2).map((ev, eIdx) => {
                  const meta = ev.eventMeta;
                  return (
                    <div
                      key={eIdx}
                      className={cn(
                        "flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium truncate border shadow-2xs",
                        meta.badgeClass
                      )}
                      title={`${ev.company_name} - ${meta.label}`}
                    >
                      <span className={cn("size-1.5 rounded-full shrink-0", meta.dotClass)} />
                      <span className="truncate font-semibold">{ev.company_name}</span>
                    </div>
                  );
                })}

                {dayEvents.length > 2 && (
                  <div className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 pl-1">
                    +{dayEvents.length - 2} more
                  </div>
                )}
              </div>

              {/* Mobile Dots Indicator */}
              <div className="flex sm:hidden items-center justify-center gap-1 mt-1 flex-wrap">
                {dayEvents.slice(0, 3).map((ev, eIdx) => (
                  <span
                    key={eIdx}
                    className={cn("size-1.5 rounded-full", ev.eventMeta.dotClass)}
                  />
                ))}
                {dayEvents.length > 3 && (
                  <span className="text-[8px] font-bold text-base-400">+</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
