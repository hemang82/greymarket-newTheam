(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ipodetailspages/FinancialsChart.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/StyledGroupedBarChart.jsx
__turbopack_context__.s([
    "default",
    ()=>StyledGroupedBarChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
// numeric parser (keeps naming exactly as in your JSON)
const toNum = (v)=>{
    if (v === null || v === undefined) return 0;
    const s = String(v).replace(/,/g, "").trim();
    if (s === "" || s === "-") return 0;
    const n = parseFloat(s);
    return Number.isNaN(n) ? 0 : n;
};
// month index to sort periods like "Mar-23"
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
    if (!period) return 0;
    const parts = String(period).split("-");
    const mon = (parts[0] || "").substring(0, 3);
    const yr = parts[1] || "";
    const y = parseInt(yr.length === 2 ? "20" + yr : yr, 10) || 0;
    const m = monthIndex[mon] || 0;
    return y * 100 + m;
};
function StyledGroupedBarChart({ financialData = [], amountType = "In Crores" }) {
    _s();
    // Keep JSON keys exactly: assets, revenue, net_worth, profit_after_tax, reserves_and_surpluse, total_borrowing, period_ended
    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StyledGroupedBarChart.useMemo[parsed]": ()=>{
            // remove header-like row(s) where period_ended === "Period Ended"
            const rows = (Array.isArray(financialData) ? financialData : []).filter({
                "StyledGroupedBarChart.useMemo[parsed].rows": (r)=>r && String(r.period_ended).toLowerCase().indexOf("period") === -1
            }["StyledGroupedBarChart.useMemo[parsed].rows"]);
            // sort chronologically
            rows.sort({
                "StyledGroupedBarChart.useMemo[parsed]": (a, b)=>sortKey(a.period_ended) - sortKey(b.period_ended)
            }["StyledGroupedBarChart.useMemo[parsed]"]);
            return {
                periods: rows.map({
                    "StyledGroupedBarChart.useMemo[parsed]": (r)=>r.period_ended
                }["StyledGroupedBarChart.useMemo[parsed]"]),
                assets: rows.map({
                    "StyledGroupedBarChart.useMemo[parsed]": (r)=>toNum(r.assets)
                }["StyledGroupedBarChart.useMemo[parsed]"]),
                revenue: rows.map({
                    "StyledGroupedBarChart.useMemo[parsed]": (r)=>toNum(r.revenue)
                }["StyledGroupedBarChart.useMemo[parsed]"]),
                net_worth: rows.map({
                    "StyledGroupedBarChart.useMemo[parsed]": (r)=>toNum(r.net_worth)
                }["StyledGroupedBarChart.useMemo[parsed]"]),
                profit_after_tax: rows.map({
                    "StyledGroupedBarChart.useMemo[parsed]": (r)=>toNum(r.profit_after_tax)
                }["StyledGroupedBarChart.useMemo[parsed]"]),
                reserves_and_surpluse: rows.map({
                    "StyledGroupedBarChart.useMemo[parsed]": (r)=>toNum(r.reserves_and_surpluse)
                }["StyledGroupedBarChart.useMemo[parsed]"]),
                total_borrowing: rows.map({
                    "StyledGroupedBarChart.useMemo[parsed]": (r)=>toNum(r.total_borrowing)
                }["StyledGroupedBarChart.useMemo[parsed]"])
            };
        }
    }["StyledGroupedBarChart.useMemo[parsed]"], [
        financialData
    ]);
    // WOW gradient palette aligned with each dataset (keeps label keys intact)
    const COLORS = [
        [
            "#ffdd87",
            "#ffb300"
        ],
        [
            "#ff9f87",
            "#ff5b2e"
        ],
        [
            "#82c8ff",
            "#1f9bff"
        ],
        [
            "#d0a6ff",
            "#944dff"
        ],
        [
            "#94f6d5",
            "#00d3a9"
        ],
        [
            "#9df3ff",
            "#3cdcff"
        ]
    ];
    // Build datasets with gradients (ctx provided by react-chartjs-2 when data is a function)
    const buildDatasets = (ctx)=>{
        const keys = [
            "assets",
            "revenue",
            "net_worth",
            "profit_after_tax",
            "reserves_and_surpluse",
            "total_borrowing"
        ];
        return keys.map((key, i)=>{
            const base = COLORS[i] || [
                "#ccc",
                "#999"
            ];
            // default color for SSR or before chartArea available
            let bg = base[0];
            // create gradient if ctx/chartArea available
            if (ctx && ctx.chart && ctx.chart.ctx && ctx.chart.chartArea) {
                const c = ctx.chart.ctx;
                const area = ctx.chart.chartArea;
                const g = c.createLinearGradient(0, area.bottom, 0, area.top);
                g.addColorStop(0, base[0]);
                g.addColorStop(1, base[1]);
                bg = g;
            }
            // label: show friendly label but DO NOT change your keys in data structure
            const label = key.replace(/_/g, " ").replace(/\b\w/g, (ch)=>ch.toUpperCase());
            return {
                label,
                data: parsed[key],
                backgroundColor: bg,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: "rgba(0,0,0,0.06)"
            };
        });
    };
    // data as function so react-chartjs-2 passes chart context to create gradients
    const dataFn = (ctx)=>({
            labels: parsed?.periods,
            datasets: buildDatasets(ctx)
        });
    // options (polished)
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
                labels: {
                    usePointStyle: true,
                    pointStyle: "rectRounded",
                    padding: 14,
                    boxWidth: 14,
                    boxHeight: 14,
                    color: "#222"
                }
            },
            title: {
                display: true,
                text: `Financial Overview (${amountType})`,
                font: {
                    size: 18,
                    weight: "600"
                }
            },
            tooltip: {
                backgroundColor: "#ffffff",
                titleColor: "#111",
                bodyColor: "#222",
                borderColor: "rgba(0,0,0,0.08)",
                borderWidth: 1,
                padding: 10,
                callbacks: {
                    label: (ctx)=>{
                        const val = ctx.raw;
                        return `${ctx.dataset.label}: ${Number(val).toLocaleString()} ${amountType}`;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: "#333"
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: "rgba(0,0,0,0.06)",
                    borderDash: [
                        4,
                        4
                    ]
                },
                ticks: {
                    color: "#333"
                }
            }
        },
        // scriptable bar thickness via dataset options (Chart.js supports dataset defaults)
        datasets: {
            bar: {
                barThickness: (ctx)=>{
                    const w = ctx.chart.width || 800;
                    if (w < 480) return 10;
                    if (w < 768) return 14;
                    if (w < 1024) return 20;
                    return 28;
                }
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            height: 520,
            padding: 16,
            borderRadius: 12,
            background: "linear-gradient(180deg,#fbfbfd,#ffffff)",
            boxShadow: "0 8px 24px rgba(12,22,40,0.06)",
            border: "1px solid rgba(15,15,15,0.03)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            data: dataFn,
            options: options
        }, void 0, false, {
            fileName: "[project]/src/components/ipodetailspages/FinancialsChart.jsx",
            lineNumber: 191,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ipodetailspages/FinancialsChart.jsx",
        lineNumber: 182,
        columnNumber: 5
    }, this);
}
_s(StyledGroupedBarChart, "Lrxp5JSR4Ml2hkh0+ImT+ML6qGo=");
_c = StyledGroupedBarChart;
var _c;
__turbopack_context__.k.register(_c, "StyledGroupedBarChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_ipodetailspages_FinancialsChart_jsx_30bf3a55._.js.map