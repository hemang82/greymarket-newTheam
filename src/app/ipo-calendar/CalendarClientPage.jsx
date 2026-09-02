"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Calendar, ArrowUpRight, Flame, Clock, CheckCircle2, TrendingUp } from "lucide-react";
import CalendarHeader from "@/components/calendar/CalendarHeader";
import CalendarGrid from "@/components/calendar/CalendarGrid";
import CalendarTimeline from "@/components/calendar/CalendarTimeline";
import CalendarDayModal from "@/components/calendar/CalendarDayModal";
import CalendarFaqSection from "@/components/calendar/CalendarFaqSection";
import MobileCalendarView from "@/components/calendar/MobileCalendarView";
import { getIpoCalendarApi } from "@/api";
import { parseEventType } from "@/components/calendar/calendarUtils";

export default function CalendarClientPage({ initialEvents = [], initialYear = 2026, initialMonth = 8 }) {
  const [currentYear, setCurrentYear] = useState(initialYear);
  const [currentMonth, setCurrentMonth] = useState(initialMonth);
  const [ipoType, setIpoType] = useState("all");
  const [eventTypeFilter, setEventTypeFilter] = useState("ALL");
  const [viewMode, setViewMode] = useState("grid");

  const [events, setEvents] = useState(initialEvents);
  const [loading, setLoading] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateEvents, setSelectedDateEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch data on month / year / ipoType change
  const fetchCalendarData = useCallback(async (year, month, type) => {
    setLoading(true);
    try {
      const res = await getIpoCalendarApi({
        year,
        month,
        ipo_type: type === "all" ? undefined : type,
      });
      if (res?.meta?.status_code === 200 || res?.meta?.status) {
        setEvents(res?.data?.results || []);
      } else {
        setEvents([]);
      }
    } catch (err) {
      console.error("Error fetching calendar events:", err);
      setEvents([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleMonthChange = (year, month) => {
    setCurrentYear(year);
    setCurrentMonth(month);
    fetchCalendarData(year, month, ipoType);
  };

  const handleIpoTypeChange = (type) => {
    setIpoType(type);
    fetchCalendarData(currentYear, currentMonth, type);
  };

  // Filter events by eventType (OPEN, CLOSE, ALLOTMENT, LISTING)
  const filteredEvents = useMemo(() => {
    if (eventTypeFilter === "ALL") return events;
    return events.filter((ev) => {
      const meta = parseEventType(ev.title);
      return meta.type === eventTypeFilter;
    });
  }, [events, eventTypeFilter]);

  // Compute month milestone counts
  const milestoneCounts = useMemo(() => {
    const counts = { open: 0, close: 0, allotment: 0, listing: 0 };
    events.forEach((ev) => {
      const meta = parseEventType(ev.title);
      if (meta.type === "OPEN") counts.open++;
      if (meta.type === "CLOSE") counts.close++;
      if (meta.type === "ALLOTMENT") counts.allotment++;
      if (meta.type === "LISTING") counts.listing++;
    });
    return counts;
  }, [events]);

  const handleSelectDate = (dateKey, dayEvents) => {
    setSelectedDate(dateKey);
    setSelectedDateEvents(dayEvents);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full">
      {/* MOBILE ONLY: 4-Column Compact Grid (Zero Scrolling, Fits 100% on Mobile) */}
      <div className="grid grid-cols-4 gap-1.5 md:hidden my-2.5 select-none">
        <div className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/70 dark:border-emerald-800 text-center">
          <div className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400">
            <Flame className="size-3 shrink-0" />
            <span className="text-xs font-extrabold font-sans">{milestoneCounts.open}</span>
          </div>
          <span className="text-[9px] font-bold text-emerald-800/80 dark:text-emerald-300/80 leading-tight">
            Opens
          </span>
        </div>

        <div className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200/70 dark:border-rose-800 text-center">
          <div className="flex items-center gap-1 text-rose-700 dark:text-rose-400">
            <Clock className="size-3 shrink-0" />
            <span className="text-xs font-extrabold font-sans">{milestoneCounts.close}</span>
          </div>
          <span className="text-[9px] font-bold text-rose-800/80 dark:text-rose-300/80 leading-tight">
            Closes
          </span>
        </div>

        <div className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200/70 dark:border-amber-800 text-center">
          <div className="flex items-center gap-1 text-amber-700 dark:text-amber-400">
            <CheckCircle2 className="size-3 shrink-0" />
            <span className="text-xs font-extrabold font-sans">{milestoneCounts.allotment}</span>
          </div>
          <span className="text-[9px] font-bold text-amber-800/80 dark:text-amber-300/80 leading-tight">
            Allot.
          </span>
        </div>

        <div className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-800 text-center">
          <div className="flex items-center gap-1 text-blue-700 dark:text-blue-400">
            <TrendingUp className="size-3 shrink-0" />
            <span className="text-xs font-extrabold font-sans">{milestoneCounts.listing}</span>
          </div>
          <span className="text-[9px] font-bold text-blue-800/80 dark:text-blue-300/80 leading-tight">
            Lists
          </span>
        </div>
      </div>

      {/* DESKTOP ONLY: 4 Detailed Milestone Cards */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-6">
        <div className="p-4 rounded-2xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-900 shadow-sm flex items-center gap-3">
          <div className="size-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center shrink-0">
            <Flame className="size-5" />
          </div>
          <div>
            <span className="text-[11px] text-base-500 dark:text-base-400 font-medium block">Issue Openings</span>
            <span className="text-base sm:text-lg font-bold text-base-900 dark:text-base-100 font-sans">
              {milestoneCounts.open} IPOs
            </span>
          </div>
        </div>

        <div className="p-4 rounded-2xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-900 shadow-sm flex items-center gap-3">
          <div className="size-10 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-800 flex items-center justify-center shrink-0">
            <Clock className="size-5" />
          </div>
          <div>
            <span className="text-[11px] text-base-500 dark:text-base-400 font-medium block">Issue Closings</span>
            <span className="text-base sm:text-lg font-bold text-base-900 dark:text-base-100 font-sans">
              {milestoneCounts.close} IPOs
            </span>
          </div>
        </div>

        <div className="p-4 rounded-2xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-900 shadow-sm flex items-center gap-3">
          <div className="size-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 flex items-center justify-center shrink-0">
            <CheckCircle2 className="size-5" />
          </div>
          <div>
            <span className="text-[11px] text-base-500 dark:text-base-400 font-medium block">Allotment Dates</span>
            <span className="text-base sm:text-lg font-bold text-base-900 dark:text-base-100 font-sans">
              {milestoneCounts.allotment} Dates
            </span>
          </div>
        </div>

        <div className="p-4 rounded-2xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-900 shadow-sm flex items-center gap-3">
          <div className="size-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800 flex items-center justify-center shrink-0">
            <TrendingUp className="size-5" />
          </div>
          <div>
            <span className="text-[11px] text-base-500 dark:text-base-400 font-medium block">Exchange Listings</span>
            <span className="text-base sm:text-lg font-bold text-base-900 dark:text-base-100 font-sans">
              {milestoneCounts.listing} Listings
            </span>
          </div>
        </div>
      </div>

      {/* Calendar Controls */}
      <CalendarHeader
        currentYear={currentYear}
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
        ipoType={ipoType}
        onIpoTypeChange={handleIpoTypeChange}
        eventTypeFilter={eventTypeFilter}
        onEventTypeFilterChange={setEventTypeFilter}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        totalEvents={filteredEvents.length}
        loading={loading}
      />

      {/* DESKTOP VIEW: Monthly Grid / Timeline Switcher */}
      <div className="hidden md:block">
        {viewMode === "grid" ? (
          <CalendarGrid
            currentYear={currentYear}
            currentMonth={currentMonth}
            events={filteredEvents}
            onSelectDate={handleSelectDate}
          />
        ) : (
          <CalendarTimeline
            events={filteredEvents}
            onSelectDate={handleSelectDate}
          />
        )}

        {/* Day Details Modal (Desktop) */}
        <CalendarDayModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedDate={selectedDate}
          events={selectedDateEvents}
        />
      </div>

      {/* MOBILE VIEW: Sleek Date Strip + Vertical Event List */}
      <div className="block md:hidden">
        <MobileCalendarView
          currentYear={currentYear}
          currentMonth={currentMonth}
          events={filteredEvents}
        />
      </div>

      {/* FAQs */}
      <CalendarFaqSection />
    </div>
  );
}
