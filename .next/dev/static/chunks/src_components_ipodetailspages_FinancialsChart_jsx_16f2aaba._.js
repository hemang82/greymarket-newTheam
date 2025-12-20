(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ipodetailspages/FinancialsChart.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
__turbopack_context__.s([
    "StyledGroupedBarChartApex",
    ()=>StyledGroupedBarChartApex,
    "SubscriptionLineChart",
    ()=>SubscriptionLineChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const Chart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-apexcharts/dist/react-apexcharts.min.js [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-apexcharts/dist/react-apexcharts.min.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = Chart;
const toNumber = (v)=>{
    if (v === null || v === undefined) return 0;
    const s = String(v).replace(/,/g, "").trim();
    if (s === "" || s === "-") return 0;
    const n = parseFloat(s);
    return Number.isNaN(n) ? 0 : n;
};
const monthIndex = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12
};
const sortKey = (period)=>{
    if (!period || typeof period !== "string") return 0;
    const parts = period.split("-");
    const mon = (parts[0] || "").substring(0, 3);
    const yr = parts[1] || "";
    const y = parseInt(yr.length === 2 ? "20" + yr : yr, 10) || 0;
    const m = monthIndex[mon] || 0;
    return y * 100 + m;
};
const hexToRgba = (hex, alpha = 1)=>{
    const h = hex.replace("#", "");
    const r = parseInt(h.substring(0, 2), 16);
    const g = parseInt(h.substring(2, 4), 16);
    const b = parseInt(h.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
function StyledGroupedBarChartApex({ financialData = [], amountType = "In Crores", height = 470 }) {
    _s();
    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StyledGroupedBarChartApex.useMemo[parsed]": ()=>{
            const arr = Array.isArray(financialData) ? financialData : [];
            const rows = arr.filter({
                "StyledGroupedBarChartApex.useMemo[parsed].rows": (r)=>{
                    if (!r || typeof r.period_ended !== "string") return false;
                    return r.period_ended.toLowerCase().indexOf("period") === -1;
                }
            }["StyledGroupedBarChartApex.useMemo[parsed].rows"]);
            rows.sort({
                "StyledGroupedBarChartApex.useMemo[parsed]": (a, b)=>sortKey(b.period_ended) - sortKey(a.period_ended)
            }["StyledGroupedBarChartApex.useMemo[parsed]"]);
            return {
                periods: rows.map({
                    "StyledGroupedBarChartApex.useMemo[parsed]": (r)=>r.period_ended || ""
                }["StyledGroupedBarChartApex.useMemo[parsed]"]),
                assets: rows.map({
                    "StyledGroupedBarChartApex.useMemo[parsed]": (r)=>toNumber(r.assets)
                }["StyledGroupedBarChartApex.useMemo[parsed]"]),
                revenue: rows.map({
                    "StyledGroupedBarChartApex.useMemo[parsed]": (r)=>toNumber(r.revenue)
                }["StyledGroupedBarChartApex.useMemo[parsed]"]),
                net_worth: rows.map({
                    "StyledGroupedBarChartApex.useMemo[parsed]": (r)=>toNumber(r.net_worth)
                }["StyledGroupedBarChartApex.useMemo[parsed]"]),
                profit_after_tax: rows.map({
                    "StyledGroupedBarChartApex.useMemo[parsed]": (r)=>toNumber(r.profit_after_tax)
                }["StyledGroupedBarChartApex.useMemo[parsed]"]),
                reserves_and_surpluse: rows.map({
                    "StyledGroupedBarChartApex.useMemo[parsed]": (r)=>toNumber(r.reserves_and_surpluse)
                }["StyledGroupedBarChartApex.useMemo[parsed]"]),
                total_borrowing: rows.map({
                    "StyledGroupedBarChartApex.useMemo[parsed]": (r)=>toNumber(r.total_borrowing)
                }["StyledGroupedBarChartApex.useMemo[parsed]"])
            };
        }
    }["StyledGroupedBarChartApex.useMemo[parsed]"], [
        financialData
    ]);
    const PALETTE = [
        "#4f7bdc",
        "#e05f5a",
        "#4ec9b2",
        "#e7cf67",
        "#9fd37a",
        "#f6c97a"
    ];
    const KEYS = [
        {
            key: "assets",
            label: "Total Assets"
        },
        {
            key: "revenue",
            label: "Total Revenue"
        },
        {
            key: "profit_after_tax",
            label: "Profit After Tax"
        },
        {
            key: "net_worth",
            label: "Net Worth"
        },
        {
            key: "reserves_and_surpluse",
            label: "Reserves And Surplus"
        },
        {
            key: "total_borrowing",
            label: "Total Borrowing"
        }
    ];
    const series = KEYS.map((k)=>({
            name: k.label,
            data: parsed[k.key] || []
        }));
    // compute sensible Y min/max but always include 0 (so baseline shows)
    const allValues = series.flatMap((s)=>s.data || []);
    const dataMin = allValues.length ? Math.min(...allValues) : 0;
    const dataMax = allValues.length ? Math.max(...allValues) : 0;
    // if all positive -> min 0, else include negative min but keep zero visible
    // add 10% padding to top/bottom so bars don't touch edges
    const padFactor = 0.10;
    const computedMin = Math.min(0, dataMin) + Math.min(0, dataMin) * padFactor;
    const computedMax = Math.max(0, dataMax) + Math.max(0, dataMax) * padFactor;
    // fallback: if computedMin === computedMax (flat data) expand a little
    const yMin = computedMin === computedMax ? computedMin - 1 : computedMin;
    const yMax = computedMax === computedMin ? computedMax + 1 : computedMax;
    const solidColors = PALETTE.map((c)=>hexToRgba(c, 1));
    const wrapperStyle = {
        width: "100%",
        height,
        padding: 8,
        background: "#fff",
        borderRadius: 8,
        boxShadow: "0 6px 20px rgba(0,0,0,0.03)",
        border: "1px solid rgba(0,0,0,0.03)"
    };
    const options = {
        chart: {
            type: "bar",
            stacked: false,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        legend: {
            position: "top",
            horizontalAlign: "left",
            offsetY: 6,
            markers: {
                width: 12,
                height: 12,
                radius: 3
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                // rounded only at the end so base stays flat
                borderRadius: 8,
                borderRadiusApplication: "end",
                // make bars wide so groups are compact, but keep a tiny gap between bars
                // columnWidth controls bar width relative to available group width
                columnWidth: "20%",
                // small gap between bars inside a group (use "1%" for a tiny gap)
                barGap: "2%",
                // small gap between groups (barGapRatio is an additional control)
                barGapRatio: 0.08,
                distributed: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 1.5,
            colors: solidColors
        },
        colors: solidColors,
        fill: {
            opacity: 0.12
        },
        tooltip: {
            theme: "light",
            y: {
                formatter: (val)=>val ? `${Number(val).toLocaleString()} ${amountType}` : "-"
            }
        },
        xaxis: {
            categories: parsed.periods || [],
            labels: {
                rotate: -15,
                style: {
                    fontSize: "12px"
                }
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            min: yMin,
            max: yMax,
            labels: {
                formatter: (val)=>Number(val).toLocaleString()
            }
        },
        grid: {
            borderColor: "rgba(0,0,0,0.06)"
        },
        responsive: [
            {
                breakpoint: 1200,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 8,
                            borderRadiusApplication: "end",
                            // make bars wide so groups are compact, but keep a tiny gap between bars
                            // columnWidth controls bar width relative to available group width
                            columnWidth: "20%",
                            // small gap between bars inside a group (use "1%" for a tiny gap)
                            barGap: "2%",
                            // small gap between groups (barGapRatio is an additional control)
                            barGapRatio: 0.08,
                            distributed: false
                        }
                    },
                    xaxis: {
                        labels: {
                            rotate: -12,
                            style: {
                                fontSize: "11px"
                            }
                        }
                    }
                }
            },
            {
                breakpoint: 900,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 8,
                            borderRadiusApplication: "end",
                            // make bars wide so groups are compact, but keep a tiny gap between bars
                            // columnWidth controls bar width relative to available group width
                            columnWidth: "20%",
                            // small gap between bars inside a group (use "1%" for a tiny gap)
                            barGap: "2%",
                            // small gap between groups (barGapRatio is an additional control)
                            barGapRatio: 0.08,
                            distributed: false
                        }
                    },
                    xaxis: {
                        labels: {
                            rotate: -20,
                            style: {
                                fontSize: "11px"
                            }
                        }
                    },
                    legend: {
                        position: "bottom",
                        horizontalAlign: "center"
                    }
                }
            },
            {
                breakpoint: 480,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 8,
                            borderRadiusApplication: "end",
                            // make bars wide so groups are compact, but keep a tiny gap between bars
                            // columnWidth controls bar width relative to available group width
                            columnWidth: "20%",
                            // small gap between bars inside a group (use "1%" for a tiny gap)
                            barGap: "2%",
                            // small gap between groups (barGapRatio is an additional control)
                            barGapRatio: 0.08,
                            distributed: false
                        }
                    },
                    xaxis: {
                        labels: {
                            rotate: -40,
                            style: {
                                fontSize: "10px"
                            }
                        }
                    },
                    legend: {
                        position: "bottom",
                        horizontalAlign: "center"
                    }
                }
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: wrapperStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                height: "100%"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chart, {
                options: {
                    ...options,
                    title: {
                        text: `Financial Overview (${amountType})`,
                        align: "left",
                        style: {
                            fontSize: "14px",
                            fontWeight: 600
                        }
                    }
                },
                series: series,
                type: "bar",
                height: "100%"
            }, void 0, false, {
                fileName: "[project]/src/components/ipodetailspages/FinancialsChart.jsx",
                lineNumber: 448,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ipodetailspages/FinancialsChart.jsx",
            lineNumber: 447,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ipodetailspages/FinancialsChart.jsx",
        lineNumber: 446,
        columnNumber: 9
    }, this);
}
_s(StyledGroupedBarChartApex, "Lrxp5JSR4Ml2hkh0+ImT+ML6qGo=");
_c1 = StyledGroupedBarChartApex;
function SubscriptionLineChart({ timeSeries = [], height = 360, title = "Subscription (times)" }) {
    _s1();
    // list of categories to keep order consistent (we can derive from first row too)
    const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SubscriptionLineChart.useMemo[categories]": ()=>{
            if (!timeSeries || timeSeries.length === 0) return [];
            const first = timeSeries[0].stats || [];
            return first.map({
                "SubscriptionLineChart.useMemo[categories]": (s)=>s.category
            }["SubscriptionLineChart.useMemo[categories]"]);
        }
    }["SubscriptionLineChart.useMemo[categories]"], [
        timeSeries
    ]);
    // Build series: for each category build array of subscription values per date.
    const { series, categoriesLabels } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SubscriptionLineChart.useMemo": ()=>{
            const dates = timeSeries.map({
                "SubscriptionLineChart.useMemo.dates": (t)=>t.date
            }["SubscriptionLineChart.useMemo.dates"]);
            // set of all categories across all dates (in case some date misses a category)
            const allCats = Array.from(timeSeries.reduce({
                "SubscriptionLineChart.useMemo.allCats": (set, t)=>{
                    (t.stats || []).forEach({
                        "SubscriptionLineChart.useMemo.allCats": (s)=>set.add(s.category)
                    }["SubscriptionLineChart.useMemo.allCats"]);
                    return set;
                }
            }["SubscriptionLineChart.useMemo.allCats"], new Set()));
            // ensure stable order: prefer categories derived earlier, else allCats
            const orderedCats = categories.length ? categories : allCats;
            // prepare a map for quick lookup per date
            const dateToMap = timeSeries.map({
                "SubscriptionLineChart.useMemo.dateToMap": (t)=>{
                    const map = new Map();
                    (t.stats || []).forEach({
                        "SubscriptionLineChart.useMemo.dateToMap": (s)=>{
                            map.set(s.category, {
                                applied: Number(s.applied) || 0,
                                offered: Number(s.offered) || 0,
                                times: s.times || 0
                            });
                        }
                    }["SubscriptionLineChart.useMemo.dateToMap"]);
                    return map;
                }
            }["SubscriptionLineChart.useMemo.dateToMap"]);
            // compute per-category series
            const catSeries = orderedCats.map({
                "SubscriptionLineChart.useMemo.catSeries": (cat)=>{
                    const data = dateToMap.map({
                        "SubscriptionLineChart.useMemo.catSeries.data": (map)=>{
                            const s = map.get(cat);
                            if (!s) return 0;
                            if (!s.offered || Number(s.offered) === 0) return 0;
                            // subscription times = applied / offered
                            const val = Number(s.applied) / Number(s.offered);
                            // round to 3 decimal places (or keep as integer if you prefer)
                            return Math.round(val * 1000) / 1000;
                        }
                    }["SubscriptionLineChart.useMemo.catSeries.data"]);
                    return {
                        name: cat,
                        data
                    };
                }
            }["SubscriptionLineChart.useMemo.catSeries"]);
            // compute TOTAL series (sum applied / sum offered per date)
            const totalSeries = {
                name: "Total",
                data: dateToMap.map({
                    "SubscriptionLineChart.useMemo": (map)=>{
                        let sumApplied = 0;
                        let sumOffered = 0;
                        for (const [k, s] of map.entries()){
                            sumApplied += Number(s.applied) || 0;
                            sumOffered += Number(s.offered) || 0;
                        }
                        if (!sumOffered) return 0;
                        const v = sumApplied / sumOffered;
                        return Math.round(v * 1000) / 1000;
                    }
                }["SubscriptionLineChart.useMemo"])
            };
            return {
                series: [
                    ...catSeries,
                    totalSeries
                ],
                categoriesLabels: dates
            };
        }
    }["SubscriptionLineChart.useMemo"], [
        timeSeries,
        categories
    ]);
    // nice color palette — one per category, plus a stronger color for total
    const palette = [
        "#0b84ff",
        "#ff5c7c",
        "#2ac1a9",
        "#f7b267",
        "#7bd389"
    ];
    const totalColor = "#2b2b2b"; // dark gray for Total
    // Map colors to series by index; last series is Total
    const seriesColors = series.map((s, idx)=>idx === series.length - 1 ? totalColor : palette[idx % palette.length]);
    const options = {
        chart: {
            type: "line",
            height,
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            }
        },
        colors: seriesColors,
        stroke: {
            width: series.map((s, i)=>i === series.length - 1 ? 3 : 2),
            curve: "smooth"
        },
        markers: {
            size: 3,
            hover: {
                sizeOffset: 4
            }
        },
        legend: {
            position: "top",
            horizontalAlign: "right",
            offsetY: 8,
            markers: {
                width: 12,
                height: 12,
                radius: 12
            }
        },
        grid: {
            borderColor: "rgba(0,0,0,0.06)"
        },
        xaxis: {
            categories: categoriesLabels,
            labels: {
                rotate: -20,
                style: {
                    fontSize: "12px"
                }
            },
            title: {
                text: "Date"
            }
        },
        yaxis: {
            title: {
                text: title
            },
            labels: {
                formatter: function(val) {
                    // Show small precision if fractional, else integer
                    return Number(val) % 1 === 0 ? Number(val).toLocaleString() : Number(val).toFixed(2);
                }
            },
            min: 0
        },
        tooltip: {
            theme: "light",
            x: {
                show: true
            },
            y: {
                formatter: function(val, opts) {
                    if (val === null || val === undefined) return "-";
                    // If fractional, show with 2 decimals;
                    // also show multiplier label 'times'
                    return `${Number(val).toLocaleString(undefined, {
                        maximumFractionDigits: 2
                    })} times`;
                }
            }
        },
        responsive: [
            {
                breakpoint: 900,
                options: {
                    legend: {
                        position: "bottom",
                        horizontalAlign: "center"
                    },
                    stroke: {
                        width: series.map((s, i)=>i === series.length - 1 ? 3 : 2)
                    }
                }
            }
        ]
    };
    // small series override for Total (thicker line + marker)
    const finalSeries = series.map((s, idx)=>idx === series.length - 1 ? {
            ...s,
            strokeWidth: 3
        } : s);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "#fff",
            padding: 12,
            borderRadius: 10
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chart, {
            options: options,
            series: finalSeries,
            type: "line",
            height: height
        }, void 0, false, {
            fileName: "[project]/src/components/ipodetailspages/FinancialsChart.jsx",
            lineNumber: 632,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ipodetailspages/FinancialsChart.jsx",
        lineNumber: 631,
        columnNumber: 5
    }, this);
}
_s1(SubscriptionLineChart, "6OR1hBv4GzMfETocC+nUKU6nKxw=");
_c2 = SubscriptionLineChart;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Chart");
__turbopack_context__.k.register(_c1, "StyledGroupedBarChartApex");
__turbopack_context__.k.register(_c2, "SubscriptionLineChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ipodetailspages/FinancialsChart.jsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/ipodetailspages/FinancialsChart.jsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_ipodetailspages_FinancialsChart_jsx_16f2aaba._.js.map