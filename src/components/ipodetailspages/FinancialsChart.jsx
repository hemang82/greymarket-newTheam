// // components/StyledGroupedBarChartFinal.jsx
// "use client";

// import React, { useMemo } from "react";

// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from "chart.js";

// import { Bar } from "react-chartjs-2";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// // ---------- helpers (keep keys unchanged) ----------
// const toNumber = (v) => {
//     if (v === null || v === undefined) return 0;
//     const s = String(v).replace(/,/g, "").trim();
//     if (s === "" || s === "-") return 0;
//     const n = parseFloat(s);
//     return Number.isNaN(n) ? 0 : n;
// };

// const monthIndex = {
//     Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
//     Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12,
// };
// const sortKey = (period) => {
//     if (!period || typeof period !== "string") return 0;
//     const parts = period.split("-");
//     const mon = (parts[0] || "").substring(0, 3);
//     const yr = (parts[1] || "");
//     const y = parseInt(yr.length === 2 ? "20" + yr : yr, 10) || 0;
//     const m = monthIndex[mon] || 0;
//     return y * 100 + m;
// };

// const hexToRgba = (hex, alpha = 1) => {
//     const h = hex.replace("#", "");
//     const r = parseInt(h.substring(0, 2), 16);
//     const g = parseInt(h.substring(2, 4), 16);
//     const b = parseInt(h.substring(4, 6), 16);
//     return `rgba(${r}, ${g}, ${b}, ${alpha})`;
// };

// // ---------- component ----------
// export default function StyledGroupedBarChartFinal({
//     financialData = [],
//     amountType = "In Crores",
// }) {
//     // parse & sort DESC (newest first) and keep your key names intact
//     const parsed = useMemo(() => {
//         const arr = Array.isArray(financialData) ? financialData : [];

//         // filter header-like rows (period_ended = "Period Ended")
//         const rows = arr.filter((r) => {
//             if (!r || typeof r.period_ended !== "string") return false;
//             return r.period_ended.toLowerCase().indexOf("period") === -1;
//         });

//         // sort descending (newest first)
//         rows.sort((a, b) => sortKey(b.period_ended) - sortKey(a.period_ended));

//         return {
//             periods: rows.map((r) => r.period_ended || ""),
//             assets: rows.map((r) => toNumber(r.assets)),
//             revenue: rows.map((r) => toNumber(r.revenue)),
//             net_worth: rows.map((r) => toNumber(r.net_worth)),
//             profit_after_tax: rows.map((r) => toNumber(r.profit_after_tax)),
//             reserves_and_surpluse: rows.map((r) => toNumber(r.reserves_and_surpluse)),
//             total_borrowing: rows.map((r) => toNumber(r.total_borrowing)),
//         };
//     }, [financialData]);

//     // palette: border color + light fill (alpha ~0.06) to match your screenshot
//     const PALETTE = [
//         "#9ebae9", // Total Assets (blue)
//         "#dc6967", // Total Revenue (red)
//         "#85e3c9", // Profit After Tax (cyan)
//         "#e3db85", // Net Worth (yellow)
//         "#ace99e", // Reserves And Surplus (pink)
//         "#ffd08a", // Total Borrowing (light orange)
//     ];

//     // order & friendly labels to match screenshot
//     const KEYS = [
//         { key: "assets", label: "Total Assets" },
//         { key: "revenue", label: "Total Revenue" },
//         { key: "profit_after_tax", label: "Profit After Tax" },
//         { key: "net_worth", label: "Net Worth" },
//         { key: "reserves_and_surpluse", label: "Reserves And Surplus" },
//         { key: "total_borrowing", label: "Total Borrowing" },
//     ];

//     // build datasets (outlined + light fill)
//     const buildDatasets = () => {
//         return KEYS.map((k, i) => {
//             const col = PALETTE[i % PALETTE.length];
//             return {
//                 label: k.label,
//                 data: parsed[k.key] || [],
//                 borderColor: col,
//                 borderWidth: 2,
//                 backgroundColor: hexToRgba(col, 0.06), // subtle fill
//                 borderRadius: 6,
//                 // barThickness controlled responsively via options.datasets.bar.barThickness
//             };
//         });
//     };

//     const data = {
//         labels: parsed.periods || [],
//         datasets: buildDatasets(),
//     };

//     // options tuned to match screenshot: more group spacing, slim bars, top legend
//     const options = {
//         responsive: true,
//         maintainAspectRatio: false,
//         plugins: {
//             legend: {
//                 position: "top",
//                 labels: {
//                     usePointStyle: true,
//                     pointStyle: "rectRounded",
//                     padding: 12,
//                     boxWidth: 18,
//                     boxHeight: 12,
//                 },
//             },
//             title: {
//                 display: true,
//                 text: `Financial Overview (${amountType})`,
//             },
//             tooltip: {
//                 backgroundColor: "#fff",
//                 borderColor: "rgba(0,0,0,0.1)",
//                 borderWidth: 1,
//                 titleColor: "#111",
//                 bodyColor: "#333",
//             },
//         },
//         scales: {
//             x: {
//                 grid: { display: false },
//             },
//             y: {
//                 beginAtZero: true,
//                 grid: { color: "rgba(0,0,0,0.06)" },
//             },
//         },

//         // ⭐ Normal spacing settings ⭐
//         categoryPercentage: 0.75,    // space between GROUPS
//         datasetPercentage: 0.85,     // space between BARS inside group

//         // Clean bar thickness for normal layout
//         datasets: {
//             bar: {
//                 barThickness: 22,
//             },
//         },
//     };
//     return (
//         <div style={{
//             width: "100%",
//             height: 470,
//             padding: 8,
//             background: "#fff",
//             borderRadius: 8,
//             boxShadow: "0 6px 20px rgba(0,0,0,0.03)",
//             border: "1px solid rgba(0,0,0,0.03)",
//         }}>
//             <Bar data={data} options={options} />
//         </div>
//     );
// }

// components/StyledGroupedBarChartApex.jsx
"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// helpers (same as you had)
const toNumber = (v) => {
    if (v === null || v === undefined) return 0;
    const s = String(v).replace(/,/g, "").trim();
    if (s === "" || s === "-") return 0;
    const n = parseFloat(s);
    return Number.isNaN(n) ? 0 : n;
};
const monthIndex = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };
const sortKey = (period) => {
    if (!period || typeof period !== "string") return 0;
    const parts = period.split("-");
    const mon = (parts[0] || "").substring(0, 3);
    const yr = (parts[1] || "");
    const y = parseInt(yr.length === 2 ? "20" + yr : yr, 10) || 0;
    const m = monthIndex[mon] || 0;
    return y * 100 + m;
};

const hexToRgba = (hex, alpha = 1) => {
    const h = hex.replace("#", ""); const r = parseInt(h.substring(0, 2), 16);
    const g = parseInt(h.substring(2, 4), 16); const b = parseInt(h.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export function StyledGroupedBarChartApex({
    financialData = [],
    amountType = "In Crores",
    height = 470,
}) {
    // parse & sort
    const parsed = useMemo(() => {
        const arr = Array.isArray(financialData) ? financialData : [];
        const rows = arr.filter(r => r && typeof r.period_ended === "string" && r.period_ended.toLowerCase().indexOf("period") === -1);
        rows.sort((a, b) => sortKey(b.period_ended) - sortKey(a.period_ended));
        return {
            periods: rows.map(r => r.period_ended || ""),
            assets: rows.map(r => toNumber(r.assets)),
            revenue: rows.map(r => toNumber(r.revenue)),
            net_worth: rows.map(r => toNumber(r.net_worth)),
            profit_after_tax: rows.map(r => toNumber(r.profit_after_tax)),
            reserves_and_surpluse: rows.map(r => toNumber(r.reserves_and_surpluse)),
            total_borrowing: rows.map(r => toNumber(r.total_borrowing)),
        };
    }, [financialData]);

    // pastel palette
    const PALETTE = ["#6EA8FE", "#FFA3AB", "#7CE7D9", "#FDE68A", "#C7F0B6", "#FFD4A8"];
    const KEYS = [
        { key: "assets", label: "Total Assets" },
        { key: "revenue", label: "Total Revenue" },
        { key: "profit_after_tax", label: "Profit After Tax" },
        { key: "net_worth", label: "Net Worth" },
        { key: "reserves_and_surpluse", label: "Reserves And Surplus" },
        { key: "total_borrowing", label: "Total Borrowing" },
    ];

    const series = KEYS.map(k => ({ name: k.label, data: parsed[k.key] || [] }));

    // compute y bounds including zero
    const allValues = series.flatMap(s => s.data || []);
    const dataMin = allValues.length ? Math.min(...allValues) : 0;
    const dataMax = allValues.length ? Math.max(...allValues) : 0;
    const padFactor = (Math.abs(dataMax - dataMin) > 0) ? 0.12 : 0.1;
    const computedMin = Math.min(0, dataMin) + (Math.min(0, dataMin) * padFactor);
    const computedMax = Math.max(0, dataMax) + Math.max(0, dataMax) * padFactor;
    const yMin = computedMin === computedMax ? computedMin - 1 : computedMin;
    const yMax = computedMax === computedMin ? computedMax + 1 : computedMax;

    // NEW: column width calc tuned to produce thin bars when seriesCount>1
    const calcColumnWidth = (periodCount, seriesCount) => {
        // base group width depends on periods count (groups)
        const base =
            !periodCount || periodCount <= 3 ? 48 :
                periodCount <= 6 ? 44 :
                    periodCount <= 10 ? 40 :
                        periodCount <= 14 ? 36 : 32;

        // now compute per-bar percentage inside group, bias to narrow bars when seriesCount > 1
        // smaller min/max to keep bars thin: clamp to [9, 24]
        const raw = Math.floor(base / Math.max(1, seriesCount));
        const perBar = Math.max(9, Math.min(24, raw));
        return `${perBar}%`;
    };

    // const baseColumnWidth = calcColumnWidth((parsed.periods || []).length, series.length);
    const baseColumnWidth = 30;


    // colors: stroke (solid) + light fill
    const strokeColors = PALETTE.map(c => hexToRgba(c, 0.95));
    const fillColors = PALETTE.map(c => hexToRgba(c, 0.12));

    const wrapperStyle = {
        width: "100%",
        height,
        padding: 8,
        background: "#fff",
        borderRadius: 8,
        boxShadow: "0 6px 20px rgba(0,0,0,0.03)",
        border: "1px solid rgba(0,0,0,0.03)",
    };

    const options = {
        chart: { type: "bar", stacked: false, toolbar: { show: false }, zoom: { enabled: false }, animations: { enabled: true } },
        title: { text: `Financial Overview (${amountType})`, align: "left", style: { fontSize: "14px", fontWeight: 600 } },

        legend: { position: "top", horizontalAlign: "left", offsetY: 8, markers: { width: 12, height: 12, radius: 3 } },

        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 6,                  // slightly smaller radius for thin bars
                borderRadiusApplication: "end",   // round only top
                columnWidth: baseColumnWidth,     // thinner now
                barGap: "6%",                     // more visible gap between bars
                barGapRatio: 0.12,                // small gap between groups
                distributed: false,
            },
        },

        dataLabels: { enabled: false },

        stroke: { show: true, width: 1.2, colors: strokeColors }, // thinner stroke

        // Apex uses 'colors' for fills; we pass fillColors (light) and use stroke for outline
        colors: fillColors,

        fill: { opacity: 1, colors: fillColors },

        tooltip: {
            theme: "light",
            y: { formatter: (val) => (val === null || val === undefined ? "-" : `${Number(val).toLocaleString()} ${amountType}`) }
        },

        xaxis: {
            categories: parsed.periods || [],
            labels: { rotate: -12, style: { fontSize: "12px", colors: "#666" } },
            axisBorder: { show: false }, axisTicks: { show: false },
        },

        yaxis: {
            min: typeof yMin === "number" ? yMin : undefined,
            max: typeof yMax === "number" ? yMax : undefined,
            labels: { formatter: v => Number(v).toLocaleString() }
        },

        grid: { borderColor: "rgba(0,0,0,0.06)" },

        states: { hover: { filter: { type: "lighten", value: 0.06 } } },

        responsive: [
            {
                breakpoint: 1200,
                options: {
                    plotOptions: {
                        bar: { columnWidth: baseColumnWidth, barGap: "6%", borderRadius: 6 }
                    },
                    xaxis: { labels: { rotate: -10, style: { fontSize: "11px" } } }
                }
            },
            {
                breakpoint: 1100,
                options: {
                    plotOptions: {
                        bar: { columnWidth: 20, barGap: "6%", borderRadius: 6 }
                    },
                    xaxis: { labels: { rotate: -10, style: { fontSize: "11px" } } }
                }
            },
            {
                breakpoint: 900,
                options: {
                    plotOptions: {
                        bar: {
                            // ensure bars remain tap-friendly but still thin: slightly wider on small screens
                            columnWidth: 10,
                            barGap: "6%",
                            borderRadius: 6
                        }
                    },
                    xaxis: { labels: { rotate: -18, style: { fontSize: "11px" } } },
                    legend: { position: "bottom", horizontalAlign: "center" }
                }
            },
            {
                breakpoint: 480,
                options: {
                    plotOptions: { bar: { columnWidth: "65%", barGap: "6%", borderRadius: 6 } },
                    xaxis: { labels: { rotate: -45, style: { fontSize: "10px" } } },
                    legend: { position: "bottom", horizontalAlign: "center" }
                }
            }
        ]
    };

    return (
        <div style={wrapperStyle}>
            <div style={{ height: "100%" }}>
                <Chart
                    options={options}
                    series={series}
                    type="bar"
                    height={"100%"}
                />
            </div>
        </div>
    );
}



export function transformSubscriptionRecords(records = []) {
    // records: [{ ipo_subscription_detail: [{ category, times? , applied?, offered? }...], created_at }, ...]
    // returns: [{ date: "2025-11-21", stats: [{ category, times, applied, offered }, ...] }, ...]
    return (records || []).map((rec) => {
        const d = new Date(rec.created_at);
        // format date for x-axis (you can change the format)
        const dateLabel = d.toLocaleDateString(undefined, { day: "2-digit", month: "short", year: "numeric" }); // e.g. "21 Nov 2025"

        const stats = (rec.ipo_subscription_detail || []).map((s) => ({
            category: s.category,
            // use times if provided, else fallback to compute if applied/offered exist
            times: typeof s.times === "number" ? s.times : undefined,
            applied: s.applied !== undefined ? Number(s.applied) : undefined,
            offered: s.offered !== undefined ? Number(s.offered) : undefined,
        }));

        return { date: dateLabel, stats };
    });
}

export function SubscriptionLineChartTimes({
    timeSeries = [],        // output of transformSubscriptionRecords
    height = 360,
    title = "Subscription (times)"
}) {

    const raw = transformSubscriptionRecords(timeSeries);
    // derive ordered categories from first date (keeps consistent order)
    const categoriesList = useMemo(() => {
        if (!raw || raw.length === 0) return [];
        const first = raw[0].stats || [];
        return first.map((s) => s.category);
    }, [raw]);

    // build series: for each category, collect times per date (fallback compute if needed)
    const { series, xCategories } = useMemo(() => {
        const dates = raw.map((t) => t.date);

        // build quick maps per date for lookup
        const dateMaps = raw.map((t) => {
            const m = new Map();
            (t.stats || []).forEach((s) => {
                m.set(s.category, s);
            });
            return m;
        });

        // union of categories (preserve initial order)
        const allCats = Array.from(
            raw.reduce((set, t) => {
                (t.stats || []).forEach((s) => set.add(s.category));
                return set;
            }, new Set())
        );
        const orderedCats = categoriesList.length ? categoriesList : allCats;

        const catSeries = orderedCats.map((cat) => {
            const data = dateMaps.map((m) => {
                const s = m.get(cat);
                if (!s) return 0;
                if (typeof s.times === "number") return Math.round(s.times * 1000) / 1000;
                // fallback: compute times = applied / offered (if provided)
                if (s.applied !== undefined && s.offered) {
                    const v = Number(s.applied) / Number(s.offered);
                    return Math.round(v * 1000) / 1000;
                }
                return 0;
            });
            return { name: cat, data };
        });

        // compute TOTAL if not present (or preserve if present)
        const hasTotal = orderedCats.some((c) => /total/i.test(c));
        if (!hasTotal) {
            const total = {
                name: "Total",
                data: dateMaps.map((m) => {
                    let sumApplied = 0,
                        sumOffered = 0,
                        totalTimes = 0,
                        hasTimes = false;
                    for (const [k, s] of m.entries()) {
                        if (typeof s.times === "number") {
                            totalTimes += s.times;
                            hasTimes = true;
                        }
                        if (s.applied !== undefined) sumApplied += Number(s.applied) || 0;
                        if (s.offered !== undefined) sumOffered += Number(s.offered) || 0;
                    }
                    if (hasTimes) {
                        return Math.round(totalTimes * 1000) / 1000;
                    }
                    if (sumOffered) {
                        const v = sumApplied / sumOffered;
                        return Math.round(v * 1000) / 1000;
                    }
                    return 0;
                }),
            };
            return { series: [...catSeries, total], xCategories: dates };
        }

        return { series: catSeries, xCategories: dates };
    }, [raw, categoriesList]);

    // palette + total color
    const palette = ["#30704c", "#ff5c7c", "#2ac1a9", "#f7b267", "#7bd389"];
    const totalColor = "#2b2b2b";
    const colors = series.map((s, idx) =>
        idx === series.length - 1 ? totalColor : palette[idx % palette.length]
    );

    const options = {
        chart: { type: "line", height, zoom: { enabled: false }, toolbar: { show: false } },
        colors,
        stroke: { width: series.map((s, i) => (i === series.length - 1 ? 3 : 2)), curve: "smooth" },
        markers: { size: 3, hover: { sizeOffset: 4 } },
        legend: { position: "top", horizontalAlign: "right", offsetY: 8 },
        grid: { borderColor: "rgba(0,0,0,0.06)" },
        xaxis: { categories: xCategories, labels: { rotate: -20 }, title: { text: "Date" } },
        yaxis: { title: { text: title }, min: 0 },
        tooltip: {
            theme: "light",
            y: {
                formatter: (val) =>
                    val === null || val === undefined ? "-" : `${Number(val).toLocaleString(undefined, { maximumFractionDigits: 2 })} times`,
            },
        },
        responsive: [{ breakpoint: 900, options: { legend: { position: "bottom" } } }],
    };

    // small series override so Total is visually bolder
    const finalSeries = series.map((s, i) => (i === series.length - 1 ? { ...s, strokeWidth: 3 } : s));

    return (
        <div style={{ background: "#fff", padding: 12, borderRadius: 10 }}>
            <Chart options={options} series={finalSeries} type="line" height={height} />
        </div>
    );
}