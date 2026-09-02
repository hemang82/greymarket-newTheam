"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { Calendar, ChevronLeft, ChevronRight, Clock, ArrowUpRight, PlusCircle } from "lucide-react";
import { DAYS_OF_WEEK, groupEventsByDate } from "./calendarUtils";
import { formatDateTime } from "@/app_config/CommonFunction";
import { DateFormats } from "@/app_config/CommonVariable";
import { cn } from "@/lib/utils";

export default function MobileCalendarView({
  currentYear,
  currentMonth,
  events = [],
}) {
  const eventsByDate = useMemo(() => groupEventsByDate(events), [events]);
  const sortedDatesWithEvents = useMemo(() => Object.keys(eventsByDate).sort(), [eventsByDate]);

  const todayStr = useMemo(() => new Date().toISOString().split("T")[0], []);

  // Compute all days in this month
  const monthDays = useMemo(() => {
    const daysCount = new Date(currentYear, currentMonth, 0).getDate();
    const daysList = [];
    for (let d = 1; d <= daysCount; d++) {
      const dateKey = `${currentYear}-${String(currentMonth).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      const dateObj = new Date(currentYear, currentMonth - 1, d);
      const dayOfWeek = DAYS_OF_WEEK[dateObj.getDay()];
      daysList.push({
        dayNumber: d,
        dateKey,
        dayOfWeek,
        events: eventsByDate[dateKey] || [],
      });
    }
    return daysList;
  }, [currentYear, currentMonth, eventsByDate]);

  // Selected date state (defaults to today if in current month, or first date with events)
  const [selectedDate, setSelectedDate] = useState(() => {
    if (eventsByDate[todayStr]) return todayStr;
    if (sortedDatesWithEvents.length > 0) return sortedDatesWithEvents[0];
    return `${currentYear}-${String(currentMonth).padStart(2, "0")}-01`;
  });

  // Update selected date when month or events change
  useEffect(() => {
    if (eventsByDate[todayStr] && todayStr.startsWith(`${currentYear}-${String(currentMonth).padStart(2, "0")}`)) {
      setSelectedDate(todayStr);
    } else if (sortedDatesWithEvents.length > 0) {
      setSelectedDate(sortedDatesWithEvents[0]);
    } else {
      setSelectedDate(`${currentYear}-${String(currentMonth).padStart(2, "0")}-01`);
    }
  }, [currentYear, currentMonth, eventsByDate, sortedDatesWithEvents, todayStr]);

  const activeDateRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Auto-scroll active date into view horizontally
  useEffect(() => {
    if (activeDateRef.current && scrollContainerRef.current) {
      activeDateRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [selectedDate]);

  const selectedDayEvents = eventsByDate[selectedDate] || [];
  const isTodaySelected = selectedDate === todayStr;

  const createGoogleCalendarUrl = (item) => {
    const title = encodeURIComponent(item.title || `${item.company_name} IPO`);
    const dateFormatted = selectedDate.replace(/-/g, "");
    const details = encodeURIComponent(
      `Check live GMP, subscription, and allotment for ${item.company_name} IPO on GreyMarketIPO: https://greymarketipo.com/ipo-details/${item.symbol}`
    );
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dateFormatted}/${dateFormatted}&details=${details}`;
  };

  return (
    <div className="w-full space-y-4">
      {/* 1. Horizontal Date Picker Strip */}
      <div className="rounded-2xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-900 p-3 shadow-sm">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-[11px] font-semibold text-base-500 dark:text-base-400 uppercase tracking-wider">
            Select Date
          </span>
          <span className="text-[11px] font-medium text-emerald-700 dark:text-emerald-400">
            {events.length} Events This Month
          </span>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-none scroll-smooth select-none"
        >
          {monthDays.map((day) => {
            const isSelected = day.dateKey === selectedDate;
            const isToday = day.dateKey === todayStr;
            const hasEvents = day.events.length > 0;

            return (
              <button
                key={day.dateKey}
                ref={isSelected ? activeDateRef : null}
                onClick={() => setSelectedDate(day.dateKey)}
                type="button"
                style={
                  isSelected
                    ? { backgroundColor: "#135c33", borderColor: "#135c33", color: "#ffffff" }
                    : isToday
                    ? { borderColor: "#135c33", borderWidth: "2px" }
                    : {}
                }
                className={cn(
                  "flex flex-col items-center justify-center min-w-[56px] h-[72px] py-2 px-1.5 rounded-2xl border transition cursor-pointer shrink-0 text-center outline-none focus:outline-none focus:ring-0",
                  isSelected
                    ? "shadow-md"
                    : isToday
                    ? "bg-emerald-50/50 dark:bg-emerald-950/40 text-base-900 dark:text-base-100"
                    : "bg-base-100/60 dark:bg-base-950/60 border-base-200 dark:border-base-800 text-base-700 dark:text-base-300 hover:bg-base-100"
                )}
              >
                <span
                  style={isSelected ? { color: "#ffffff", opacity: 0.9 } : {}}
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-wider",
                    isSelected ? "text-white" : isToday ? "text-[#135c33] dark:text-emerald-400 font-extrabold" : "text-base-500 dark:text-base-400"
                  )}
                >
                  {day.dayOfWeek}
                </span>

                <span
                  style={isSelected ? { color: "#ffffff" } : {}}
                  className={cn(
                    "text-base font-extrabold my-0.5 font-sans",
                    isSelected ? "text-white" : "text-base-900 dark:text-base-100"
                  )}
                >
                  {day.dayNumber}
                </span>

                {/* Event Dots */}
                <div className="flex items-center justify-center gap-1 h-2">
                  {hasEvents ? (
                    day.events.slice(0, 3).map((ev, eIdx) => (
                      <span
                        key={eIdx}
                        style={isSelected ? { backgroundColor: "#ffffff" } : {}}
                        className={cn(
                          "size-1.5 rounded-full",
                          isSelected ? "bg-white" : ev.eventMeta.dotClass
                        )}
                      />
                    ))
                  ) : (
                    <span className="size-1" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Selected Date Header Banner */}
      <div className="flex items-center justify-between p-3.5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 shadow-2xs">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0">
            <Calendar className="size-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-base-900 dark:text-base-100 font-sans">
                {formatDateTime(selectedDate, DateFormats.DATE_LONG) || selectedDate}
              </span>
              {isTodaySelected && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-indigo-600 text-white">
                  TODAY
                </span>
              )}
            </div>
          </div>
        </div>

        <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300">
          {selectedDayEvents.length} event{selectedDayEvents.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* 3. Vertical Event Cards List */}
      <div className="space-y-2.5">
        {selectedDayEvents.length === 0 ? (
          <div className="py-12 px-4 text-center rounded-2xl border border-dashed border-base-200 dark:border-base-800 bg-white/60 dark:bg-base-900/60">
            <p className="text-sm font-medium text-base-600 dark:text-base-400">
              No IPO events on this date.
            </p>
            <p className="text-xs text-base-400 dark:text-base-500 mt-1">
              Select another date from the strip above to view scheduled IPOs.
            </p>
          </div>
        ) : (
          selectedDayEvents.map((ev, idx) => {
            const meta = ev.eventMeta;
            const isSme =
              ev.company_name?.toLowerCase().includes("sme") ||
              ev.type?.toLowerCase().includes("sme") ||
              ev.security_type === "SME";

            return (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-white dark:bg-base-900 border border-base-200 dark:border-base-800 shadow-2xs hover:border-emerald-500 transition group space-y-2.5"
              >
                {/* Top Row: Name & Badges */}
                <div className="flex items-start justify-between gap-2">
                  <Link
                    href={`/ipo-details/${ev.symbol}`}
                    className="font-semibold text-sm text-base-900 dark:text-base-100 flex-1 min-w-0 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition"
                  >
                    <span className="block truncate">{ev.company_name}</span>
                    <span className="text-[11px] font-mono text-base-400 block font-normal">
                      Symbol: {ev.symbol}
                    </span>
                  </Link>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <span
                      className={cn(
                        "px-2 py-0.5 rounded-md text-[10px] font-bold border",
                        isSme
                          ? "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-800"
                          : "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/70 dark:text-purple-300 dark:border-purple-800"
                      )}
                    >
                      {isSme ? "SME" : "MAINBOARD"}
                    </span>

                    <span
                      className={cn(
                        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border",
                        meta.badgeClass
                      )}
                    >
                      <span className={cn("size-1.5 rounded-full", meta.dotClass)} />
                      <span>{meta.shortLabel?.toUpperCase() || meta.type}</span>
                    </span>
                  </div>
                </div>

                {/* Event Description */}
                <p className="text-xs text-base-600 dark:text-base-300 font-medium">
                  {ev.title}
                </p>

                {/* Actions: Google Calendar & IPO Details */}
                <div className="flex items-center justify-between gap-2 pt-2 border-t border-base-100 dark:border-base-800/80">
                  <a
                    href={createGoogleCalendarUrl(ev)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-base-200 dark:border-base-800 text-[11px] font-semibold text-base-600 dark:text-base-400 hover:border-emerald-600 hover:text-emerald-700 transition"
                  >
                    <PlusCircle className="size-3" />
                    <span>Reminder</span>
                  </a>

                  <Link
                    href={`/ipo-details/${ev.symbol}`}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[#135c33] hover:bg-[#16a34a] text-white text-[11px] font-semibold transition"
                  >
                    <span>View IPO</span>
                    <ArrowUpRight className="size-3" />
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
