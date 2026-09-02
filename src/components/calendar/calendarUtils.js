/**
 * IPO Calendar Utilities and Helpers
 */

export function parseEventType(title = "") {
  const lower = title.toLowerCase();
  if (lower.includes("opening on") || lower.includes("opens on") || lower.includes("open on")) {
    return {
      type: "OPEN",
      label: "Issue Opens",
      shortLabel: "Open",
      color: "emerald",
      dotClass: "bg-emerald-500",
      badgeClass:
        "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-800",
    };
  }
  if (lower.includes("closes on") || lower.includes("closing on") || lower.includes("close on")) {
    return {
      type: "CLOSE",
      label: "Issue Closes",
      shortLabel: "Close",
      color: "rose",
      dotClass: "bg-rose-500",
      badgeClass:
        "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/70 dark:text-rose-300 dark:border-rose-800",
    };
  }
  if (lower.includes("allotment status on") || lower.includes("allotment on")) {
    return {
      type: "ALLOTMENT",
      label: "Allotment Date",
      shortLabel: "Allotment",
      color: "amber",
      dotClass: "bg-amber-500",
      badgeClass:
        "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-800",
    };
  }
  if (lower.includes("listing on") || lower.includes("listed on")) {
    return {
      type: "LISTING",
      label: "Listing Date",
      shortLabel: "Listing",
      color: "blue",
      dotClass: "bg-blue-500",
      badgeClass:
        "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/70 dark:text-blue-300 dark:border-blue-800",
    };
  }
  return {
    type: "EVENT",
    label: "IPO Event",
    shortLabel: "Event",
    color: "gray",
    dotClass: "bg-gray-400",
    badgeClass:
      "bg-base-100 text-base-700 border-base-200 dark:bg-base-800 dark:text-base-300 dark:border-base-700",
  };
}

/**
 * Group events array into a date-keyed dictionary
 * { "2026-08-03": [ ...events ] }
 */
export function groupEventsByDate(events = []) {
  const map = {};
  events.forEach((ev) => {
    if (!ev?.date) return;
    const dateKey = ev.date; // "YYYY-MM-DD"
    if (!map[dateKey]) {
      map[dateKey] = [];
    }
    map[dateKey].push({
      ...ev,
      eventMeta: parseEventType(ev.title),
    });
  });
  return map;
}

/**
 * Generate 35-42 days grid matrix for a given month and year
 */
export function generateMonthGrid(year, month) {
  // month is 1-indexed (1 to 12)
  const firstDayOfMonth = new Date(year, month - 1, 1);
  const lastDayOfMonth = new Date(year, month, 0);

  const daysInMonth = lastDayOfMonth.getDate();
  const startDayOfWeek = firstDayOfMonth.getDay(); // 0 = Sun, 1 = Mon, ...

  const days = [];

  // Previous month trailing days
  const prevMonthLastDay = new Date(year, month - 1, 0).getDate();
  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    const d = prevMonthLastDay - i;
    const prevMonth = month === 1 ? 12 : month - 1;
    const prevYear = month === 1 ? year - 1 : year;
    const dateKey = `${prevYear}-${String(prevMonth).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    days.push({
      dayNumber: d,
      dateKey,
      isCurrentMonth: false,
    });
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    const dateKey = `${year}-${String(month).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    days.push({
      dayNumber: d,
      dateKey,
      isCurrentMonth: true,
    });
  }

  // Next month leading days to complete grid (multiples of 7)
  const remainingDays = (7 - (days.length % 7)) % 7;
  for (let d = 1; d <= remainingDays; d++) {
    const nextMonth = month === 12 ? 1 : month + 1;
    const nextYear = month === 12 ? year + 1 : year;
    const dateKey = `${nextYear}-${String(nextMonth).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    days.push({
      dayNumber: d,
      dateKey,
      isCurrentMonth: false,
    });
  }

  return days;
}

export const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
