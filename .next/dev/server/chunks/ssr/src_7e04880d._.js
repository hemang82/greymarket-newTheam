module.exports = [
"[project]/src/components/ipodetailspages/StickyTabs.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StickyTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function StickyTabs({ items = [] }) {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(items[0]?.id);
    const go = (id)=>{
        const el = document.getElementById(id);
        if (!el) return;
        // account for a fixed header (adjust 80 if your header is taller/shorter)
        const y = el.getBoundingClientRect().top + window.scrollY - 150;
        window.history.replaceState(null, "", `#${id}`);
        window.scrollTo({
            top: y,
            behavior: "smooth"
        });
    };
    const ids = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>items.map((i)=>i.id), [
        items
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const obs = new IntersectionObserver((entries)=>{
            const visible = entries.filter((e)=>e.isIntersecting).sort((a, b)=>a.boundingClientRect.top - b.boundingClientRect.top)[0];
            if (visible?.target?.id) setActive(visible.target.id);
        }, {
            rootMargin: "-50% 0px -40% 0px",
            threshold: [
                0,
                0.25,
                0.5,
                0.75,
                1
            ]
        });
        ids.forEach((id)=>{
            const el = document.getElementById(id);
            if (el) obs.observe(el);
        });
        return ()=>obs.disconnect();
    }, [
        ids
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sticky top-14 border-top z-30 bg-white/80 dark:bg-base-950/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-base-950/60 border-b border-gray-200 dark:border-base-800",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 overflow-x-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex gap-2 py-4 min-w-max",
                children: items.map((it)=>{
                    const isActive = active === it.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>go(it.id),
                        className: [
                            "px-3 py-1.5 rounded-md text-sm transition",
                            isActive ? "bg-primary-100 text-white font-weight-600 dark:bg-primary-900/40 dark:text-primary-300" : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                        ].join(" "),
                        children: it.label
                    }, it.id, false, {
                        fileName: "[project]/src/components/ipodetailspages/StickyTabs.jsx",
                        lineNumber: 45,
                        columnNumber: 29
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/ipodetailspages/StickyTabs.jsx",
                lineNumber: 41,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ipodetailspages/StickyTabs.jsx",
            lineNumber: 40,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ipodetailspages/StickyTabs.jsx",
        lineNumber: 39,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/data/gmpdata.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gmpDetails",
    ()=>gmpDetails
]);
const gmpDetails = {
    "id": 3220,
    "company_name": "Pine Labs Limited",
    "start_date": "2025-11-07",
    "end_date": "2025-11-11",
    "allotment_date": "2025-11-12",
    "listing_date": "2025-11-14",
    "ipo_gmp": [
        {
            "id": 3519,
            "ipo": 3220,
            "gmp_date": "2025-11-06",
            "gmp": "14",
            "updated_at": "2025-11-06T11:17:39.160670Z",
            "estimated_listing_price": "235.00",
            "ipo_price": "221"
        },
        {
            "id": 3433,
            "ipo": 3220,
            "gmp_date": "2025-11-05",
            "gmp": "18",
            "updated_at": "2025-11-05T04:16:45.737191Z",
            "estimated_listing_price": "239.00",
            "ipo_price": "221"
        },
        {
            "id": 3408,
            "ipo": 3220,
            "gmp_date": "2025-11-04",
            "gmp": "30",
            "updated_at": "2025-11-04T11:15:24.722943Z",
            "estimated_listing_price": "251.00",
            "ipo_price": "221"
        },
        {
            "id": 3326,
            "ipo": 3220,
            "gmp_date": "2025-11-03",
            "gmp": "30",
            "updated_at": "2025-11-03T05:50:43.717934Z",
            "estimated_listing_price": "251.00",
            "ipo_price": "221"
        },
        {
            "id": 3282,
            "ipo": 3220,
            "gmp_date": "2025-11-01",
            "gmp": "48",
            "updated_at": "2025-11-01T04:42:34.770367Z",
            "estimated_listing_price": "48.00",
            "ipo_price": "221"
        },
        {
            "id": 3267,
            "ipo": 3220,
            "gmp_date": "2025-10-31",
            "gmp": "0",
            "updated_at": "2025-10-31T09:41:29.936872Z",
            "estimated_listing_price": "0.00",
            "ipo_price": "221"
        }
    ],
    "listed_price": "0.00",
    "status": "Upcoming",
    "ipo_max_value": 221,
    "is_encrypt": true,
    "platform": "Web"
};
}),
"[project]/src/components/ResponsiveTable.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// // components/ResponsiveTable.js
// "use client";
// export default function ResponsiveTable({ title, columns = [], rows = [], getRowKey = (row, i) => row.id ?? i, className = "" }) {
//     return (
//         <div className={["rounded-2xl bg-white dark:bg-base-950 ring-1 ring-gray-200 dark:ring-base-800 overflow-hidden", className].join(" ")}>
//             {/* Header */}
//             {title && (
//                 <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-gray-50 dark:bg-base-900/60 border-b border-gray-200 dark:border-base-800">
//                     <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
//                 </div>
//             )}
//             {/* Desktop table */}
//             <div className="hidden md:block">
//                 <table className="w-full text-sm">
//                     <thead className="text-left text-gray-600 dark:text-gray-300 bg-white dark:bg-base-950">
//                         <tr className="[&>th]:px-4 [&>th]:sm:px-6 [&>th]:py-3 border-b border-gray-200 dark:border-base-800">
//                             {columns.map((c) => (
//                                 <th key={c.key}>{c.label}</th>
//                             ))}
//                         </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-200 dark:divide-base-800">
//                         {rows.length === 0 && (
//                             <tr>
//                                 <td colSpan={columns.length} className="px-6 py-6 text-center text-gray-500 dark:text-gray-400">
//                                     No data available.
//                                 </td>
//                             </tr>
//                         )}
//                         {rows.map((row, i) => (
//                             <tr key={getRowKey(row, i)} className="odd:bg-gray-50/40 dark:odd:bg-base-900/30">
//                                 {columns.map((c) => (
//                                     <td key={c.key} className="[&>div]:px-4 [&>div]:sm:px-6 py-3">
//                                         <div>
//                                             {c.render ? c.render(row[c.key], row) : (row[c.key] ?? "—")}
//                                         </div>
//                                     </td>
//                                 ))}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//             {/* Mobile stacked cards */}
//             {/* <div className="md:hidden divide-y divide-gray-200 dark:divide-base-800">
//                 {rows.length === 0 && (
//                     <div className="px-4 py-6 text-center text-gray-500 dark:text-gray-400">No data available.</div>
//                 )}
//                 {rows.map((row, i) => (
//                     <div key={getRowKey(row, i)} className="p-4 space-y-3">
//                         {columns.map((c) => (
//                             <div key={c.key} className="grid grid-cols-2 gap-2 text-sm">
//                                 <div className="text-xs text-gray-500">{c.label}</div>
//                                 <div className="font-medium">
//                                     {c.render ? c.render(row[c.key], row) : (row[c.key] ?? "—")}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div> */}
//             {/* Responsive table with horizontal scroll on small screens */}
//             <div className="w-full overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
//                 <table className="min-w-[800px] w-full text-sm table-auto">
//                     <thead className="text-left text-gray-600 dark:text-gray-300 bg-white dark:bg-base-950">
//                         <tr className="[&>th]:px-4 [&>th]:sm:px-6 [&>th]:py-3 border-b border-gray-200 dark:border-base-800">
//                             {columns.map((c) => <th key={c.key}>{c.label}</th>)}
//                         </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-200 dark:divide-base-800">
//                         {rows.length === 0 ? (
//                             <tr>
//                                 <td colSpan={columns.length} className="px-6 py-6 text-center text-gray-500 dark:text-gray-400">
//                                     No data available.
//                                 </td>
//                             </tr>
//                         ) : rows.map((row, i) => (
//                             <tr key={getRowKey(row, i)} className="odd:bg-gray-50/40 dark:odd:bg-base-900/30">
//                                 {columns.map((c) => (
//                                     <td key={c.key} className="[&>div]:px-4 [&>div]:sm:px-6 py-3">
//                                         <div>{c.render ? c.render(row[c.key], row) : (row[c.key] ?? "—")}</div>
//                                     </td>
//                                 ))}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }
// components/ResponsiveTable.jsx
__turbopack_context__.s([
    "default",
    ()=>ResponsiveTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function ResponsiveTable({ title, columns = [], rows = [], getRowKey = (row, i)=>row.id ?? i, className = "", mobileMode = "scroll", columnMinWidth = 160, stickyFirstColumn = true }) {
    // computed min width for the table when in scroll mode
    const minTableWidth = Math.max(columns.length * columnMinWidth, 400);
    // Single table markup used for both desktop and mobile scroll
    const TableMarkup = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "min-w-full w-full text-sm table-auto",
            style: {
                minWidth: `${minTableWidth}px`
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    className: "text-left text-gray-600 dark:text-gray-300 bg-white dark:bg-base-950",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        className: "[&>th]:px-4 [&>th]:sm:px-6 [&>th]:py-3 border-b border-gray-200 dark:border-base-800",
                        children: columns.map((c, colIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("whitespace-nowrap bg-white dark:bg-base-950", stickyFirstColumn && colIndex === 0 && "sticky left-0 z-[6] bg-white dark:bg-base-950 shadow-sm"),
                                style: {
                                    minWidth: `${columnMinWidth}px`
                                },
                                children: c.label
                            }, c.key, false, {
                                fileName: "[project]/src/components/ResponsiveTable.js",
                                lineNumber: 144,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ResponsiveTable.js",
                        lineNumber: 142,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ResponsiveTable.js",
                    lineNumber: 141,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    className: "divide-y divide-gray-200 dark:divide-base-800",
                    children: rows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            colSpan: columns.length,
                            className: "px-6 py-6 text-center text-gray-500 dark:text-gray-400",
                            children: "No data available."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ResponsiveTable.js",
                            lineNumber: 161,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ResponsiveTable.js",
                        lineNumber: 160,
                        columnNumber: 21
                    }, this) : rows.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "odd:bg-gray-50/40 dark:odd:bg-base-900/30",
                            children: columns.map((c, colIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&>div]:px-4 [&>div]:sm:px-6 py-3 align-top bg-white dark:bg-base-950", stickyFirstColumn && colIndex === 0 && "sticky left-0 z-[5] shadow-sm bg-white dark:bg-base-950"),
                                    style: {
                                        minWidth: colIndex === 0 ? `${columnMinWidth}px` : undefined,
                                        left: colIndex === 0 ? 0 : undefined
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: c.render ? c.render(row[c.key], row) : row[c.key] ?? "—"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ResponsiveTable.js",
                                        lineNumber: 180,
                                        columnNumber: 37
                                    }, this)
                                }, c.key, false, {
                                    fileName: "[project]/src/components/ResponsiveTable.js",
                                    lineNumber: 169,
                                    columnNumber: 33
                                }, this))
                        }, getRowKey(row, i), false, {
                            fileName: "[project]/src/components/ResponsiveTable.js",
                            lineNumber: 167,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/ResponsiveTable.js",
                    lineNumber: 158,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ResponsiveTable.js",
            lineNumber: 137,
            columnNumber: 9
        }, this);
    // Mobile stacked cards markup (fallback)
    const StackedMarkup = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: rows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-6 text-center text-gray-500 dark:text-gray-400",
                children: "No data available."
            }, void 0, false, {
                fileName: "[project]/src/components/ResponsiveTable.js",
                lineNumber: 196,
                columnNumber: 17
            }, this) : rows.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 rounded-lg ring-1 ring-gray-200 dark:ring-base-800 bg-white dark:bg-base-950",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2 text-sm",
                        children: columns.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-500",
                                        children: c.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ResponsiveTable.js",
                                        lineNumber: 202,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-medium",
                                        children: c.render ? c.render(row[c.key], row) : row[c.key] ?? "—"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ResponsiveTable.js",
                                        lineNumber: 203,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, c.key, true, {
                                fileName: "[project]/src/components/ResponsiveTable.js",
                                lineNumber: 201,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ResponsiveTable.js",
                        lineNumber: 199,
                        columnNumber: 21
                    }, this)
                }, getRowKey(row, i), false, {
                    fileName: "[project]/src/components/ResponsiveTable.js",
                    lineNumber: 198,
                    columnNumber: 17
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/ResponsiveTable.js",
            lineNumber: 194,
            columnNumber: 9
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-2xl bg-white dark:bg-base-950 ring-1 ring-gray-200 dark:ring-base-800 overflow-hidden", className),
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 sm:px-6 py-3 bg-gray-50 dark:bg-base-900/60 border-b border-gray-200 dark:border-base-800",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-base font-semibold text-gray-900 dark:text-gray-100",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/ResponsiveTable.js",
                    lineNumber: 217,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ResponsiveTable.js",
                lineNumber: 216,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden",
                children: [
                    (mobileMode === "scroll" || mobileMode === "both") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full overflow-x-auto scroll-x-smooth scrollbar-thin -mx-4 px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableMarkup, {}, void 0, false, {
                                fileName: "[project]/src/components/ResponsiveTable.js",
                                lineNumber: 227,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ResponsiveTable.js",
                            lineNumber: 226,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ResponsiveTable.js",
                        lineNumber: 225,
                        columnNumber: 21
                    }, this),
                    (mobileMode === "stacked" || mobileMode === "both") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 sm:px-6 mt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StackedMarkup, {}, void 0, false, {
                            fileName: "[project]/src/components/ResponsiveTable.js",
                            lineNumber: 235,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ResponsiveTable.js",
                        lineNumber: 234,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ResponsiveTable.js",
                lineNumber: 222,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableMarkup, {}, void 0, false, {
                        fileName: "[project]/src/components/ResponsiveTable.js",
                        lineNumber: 243,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ResponsiveTable.js",
                    lineNumber: 242,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ResponsiveTable.js",
                lineNumber: 241,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ResponsiveTable.js",
        lineNumber: 213,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app_config/IPOCalculation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Format GMP (Grey Market Premium) with percentage gain.
 *
 * @param {Object} ele - Object containing gmp and ipo_max_value
 * @param {number|null} ele.gmp - Grey Market Premium value
 * @param {number|null} ele.ipo_max_value - IPO maximum price
 * @returns {string} Example: "₹14 (6.33%)" or "-"
 */ __turbopack_context__.s([
    "checkingNonZeroValueDistributionTable",
    ()=>checkingNonZeroValueDistributionTable,
    "formatGmpValue",
    ()=>formatGmpValue,
    "gmpTextColor",
    ()=>gmpTextColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app_config/CommonFunction.js [app-ssr] (ecmascript)");
;
const formatGmpValue = (ele = {})=>{
    const gmp = Number(ele?.gmp ?? 0);
    const maxValue = Number(ele?.ipo_max_value ?? 0);
    // Return dash if null/undefined
    if (ele.gmp === null || ele.gmp === undefined) return "-";
    // Calculate percentage safely
    const percent = maxValue > 0 ? (gmp / maxValue * 100).toFixed(2) : "0.00";
    // ✅ Use your shared function
    const formattedGmp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIndianPrice"])(gmp);
    return `${formattedGmp} (${percent}%)`;
};
const gmpTextColor = (ele)=>{
    const ratio = ele?.ipo_max_value === 0 ? 0 : ele?.gmp / ele?.ipo_max_value * 100;
    if (ratio === 0) return "text-[#6c757d]"; // neutral grey
    if (ratio > 0) return "text-[#27AE60]"; // green for gain
    return "text-[#DC3545]"; // red for loss
};
const checkingNonZeroValueDistributionTable = (data)=>{
    if (data) {
        return data?.find((ele)=>ele?.reserved > 0) ? true : true;
    } else {
        return false;
    }
};
}),
"[project]/src/components/ipodetailspages/IPOGmp.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApplicationBreakupTable",
    ()=>ApplicationBreakupTable,
    "FinancialTable",
    ()=>FinancialTable,
    "GmpTrendTable",
    ()=>GmpTrendTable,
    "IPOReservationTable",
    ()=>IPOReservationTable,
    "IpoCompanyDetails",
    ()=>IpoCompanyDetails,
    "KeyPerfomanceTable",
    ()=>KeyPerfomanceTable,
    "LotDistributionTable",
    ()=>LotDistributionTable,
    "StrengthWeekness",
    ()=>StrengthWeekness,
    "SubscriptionDemandTable",
    ()=>SubscriptionDemandTable,
    "SubscriptionDetailsTable",
    ()=>SubscriptionDetailsTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app_config/CommonFunction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResponsiveTable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ResponsiveTable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app_config/CommonVariable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$IPOCalculation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app_config/IPOCalculation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function formatINR(n) {
    if (n === null || n === undefined || n === "") return "—";
    const num = Number(n);
    if (Number.isNaN(num)) return n;
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(num);
}
const toNum = (v)=>{
    const n = Number(v);
    return Number.isFinite(n) ? n : 0;
};
function GmpTrendTable({ title = "", rows = [] }) {
    const tableColumns = [
        {
            key: "last_update",
            label: "Last Updated"
        },
        {
            key: "ipo_price",
            label: "IPO Price"
        },
        {
            key: "gmp",
            label: "GMP"
        },
        {
            key: "estimate",
            label: "Estimated Listing Price",
            render: (v, row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: formatINR(v)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                            lineNumber: 31,
                            columnNumber: 21
                        }, this),
                        row.estimated_pct ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500 dark:text-gray-400",
                            children: [
                                "(",
                                Number(row.estimated_pct).toFixed(2),
                                "%)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                            lineNumber: 32,
                            columnNumber: 43
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, this)
        }
    ];
    function transformIPOData(data) {
        if (data) {
            const result = [
                ...data
            ].reverse().map((item, index, arr)=>{
                const currentGmp = parseFloat(item.gmp);
                const prevGmp = index > 0 ? parseFloat(arr[index - 1].gmp) : null;
                let trend = null;
                if (prevGmp !== null) {
                    if (currentGmp > prevGmp) trend = "green";
                    else if (currentGmp < prevGmp) trend = "red";
                }
                return {
                    ...item,
                    trend
                };
            }).reverse();
            return result?.map((item)=>{
                const gmpValue = parseFloat(item.gmp) || 0; // Convert GMP to number
                const ipoPrice = item.ipo_price ? parseFloat(item.ipo_price) : 0; // Default IPO price
                const estimatedPrice = ipoPrice + gmpValue; // Calculate estimated listing price
                const percentageChange = ipoPrice > 0 ? ((estimatedPrice - ipoPrice) / ipoPrice * 100).toFixed(2) : '0.00';
                return {
                    gmp_date: item.gmp_date,
                    ipo_price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIndianPrice"])(ipoPrice),
                    gmp: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIndianPrice"])(gmpValue)}`,
                    sub_2: '--',
                    trend: item.trend,
                    estimate: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIndianPrice"])(estimatedPrice)} (${percentageChange}%)`,
                    // last_update: new Date(item.updated_at).toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }).replace(',', ''),
                    last_update: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateTime"])(item.updated_at, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DateFormats"]?.DATE_DD_MMM_YYYY_TIME_24H)
                };
            });
        } else {
            return [];
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResponsiveTable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        title: title,
        columns: tableColumns,
        rows: transformIPOData(rows),
        mobileMode: "scroll",
        columnMinWidth: 40
    }, void 0, false, {
        fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
        lineNumber: 77,
        columnNumber: 9
    }, this);
}
function FinancialTable({ title = "", rows = [] }) {
    const tableColumns = [
        {
            key: `metric`,
            label: "Period Ended"
        },
        ...(rows?.slice(1) || []).map((row, index)=>({
                key: `col${index}`,
                label: row.period_ended
            }))
    ];
    const transposeFinancialData = (data)=>{
        if (!data || data.length < 2) return [];
        const headers = data[0]; // first object = labels
        const rows = data.slice(1); // remaining = data rows
        let datas = Object.keys(headers).map((key)=>{
            const row = {
                metric: headers[key],
                ...rows.reduce((acc, row, index)=>{
                    acc[`col${index}`] = row[key];
                    return acc;
                }, {})
            };
            return row;
        }).filter((row)=>{
            // check if all col values are numeric
            const values = Object.entries(row).filter(([k])=>k.startsWith("col")).map(([_, v])=>v);
            return values.every((v)=>!isNaN(parseFloat(v)));
        });
        datas = [
            ...datas.filter((item)=>item.metric !== "Total Borrowing"),
            ...datas.filter((item)=>item.metric === "Total Borrowing")
        ];
        return datas;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResponsiveTable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        title: title,
        columns: tableColumns,
        rows: transposeFinancialData(rows),
        mobileMode: "scroll",
        columnMinWidth: 40
    }, void 0, false, {
        fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
        lineNumber: 134,
        columnNumber: 9
    }, this);
}
function KeyPerfomanceTable({ title = "", rows = [] }) {
    const tableColumns = [
        {
            key: `metric`,
            label: "KPI"
        },
        ...(rows?.slice(1) || []).map((row, index)=>({
                key: `col_${index + 1}`,
                label: row.kpi
            }))
    ];
    const transformIPOData = (data)=>{
        if (!data || data.length < 2) return [];
        // First row = header names
        const header = data[0]; // {eps:"EPS", kpi:"KPI", ...}
        const body = data.slice(1); // actual values
        // All keys except "kpi" (because kpi is year/label)
        const keys = Object.keys(header).filter((k)=>k !== "kpi");
        // Build transposed rows
        return keys.map((key)=>{
            let row = {
                metric: header[key]
            }; // e.g. "ROE"
            body.forEach((item, idx)=>{
                row[`col_${idx + 1}`] = item[key];
            });
            return row;
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResponsiveTable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        title: title,
        columns: tableColumns,
        rows: transformIPOData(rows),
        mobileMode: "scroll",
        columnMinWidth: 40
    }, void 0, false, {
        fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
        lineNumber: 177,
        columnNumber: 9
    }, this);
}
function SubscriptionDetailsTable({ title = "", rows = [] }) {
    const tableColumns = [
        {
            key: "category",
            label: "Category"
        },
        {
            key: "Shares_Offered",
            label: "Offered"
        },
        {
            key: "Shares_bid",
            label: "Applied"
        },
        {
            key: "Subscription",
            label: "Times"
        }
    ];
    const transformIPOData = (data)=>{
        if (!Array.isArray(data) || data.length === 0) return [];
        const rows = data.map(({ category, applied, offered, total_amount })=>{
            const off = +offered || 0;
            const app = +applied || 0;
            return {
                category: category || "",
                Subscription: off ? `${(app / off).toFixed(2)}x` : "0.00x",
                Shares_Offered: off.toLocaleString("en-IN"),
                Shares_bid: app.toLocaleString("en-IN"),
                amount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIndianPrice"])(+total_amount || 0),
                // meta for totals
                _off: off,
                _app: app,
                _include: String(category || "").toLowerCase() !== "nib" && off > 0 && app > 0
            };
        });
        const totals = rows.reduce((a, r)=>r._include ? {
                off: a.off + r._off,
                app: a.app + r._app
            } : a, {
            off: 0,
            app: 0
        });
        const totalAmount = data.reduce((s, { total_amount })=>s + (+total_amount || 0), 0);
        const totalRow = {
            category: "Total",
            Subscription: totals.off ? `${(totals.app / totals.off).toFixed(2)}x` : "0.00x",
            Shares_Offered: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIndianNumber"])(totals.off),
            Shares_bid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIndianNumber"])(totals.app),
            amount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIndianPrice"])(totalAmount)
        };
        // strip meta
        return [
            ...rows.map(({ _off, _app, _include, ...r })=>r),
            totalRow
        ];
    };
    console.log('SubscriptionDetailsTable', rows);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResponsiveTable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        title: title,
        columns: tableColumns,
        rows: transformIPOData(rows),
        mobileMode: "scroll",
        columnMinWidth: 40
    }, void 0, false, {
        fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
        lineNumber: 238,
        columnNumber: 9
    }, this);
}
function SubscriptionDemandTable({ title = "", rows = [] }) {
    const tableColumns = [
        {
            key: "category",
            label: "Category"
        },
        {
            key: "offered",
            label: "Offered",
            render: (text)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIndianPrice"])(text)
        },
        {
            key: "demand",
            label: "Demand"
        },
        {
            key: "times",
            label: "Times"
        }
    ];
    const transformIPOData = (data)=>{
        if (!Array.isArray(data) || data.length === 0) return [];
        let formattedDataReservation = data?.map((item)=>({
                category: item?.category,
                demand: Number(item?.demand) || 0,
                offered: Number(item?.offered) || 0,
                times: item?.offered ? (Number(item.demand) / Number(item.offered)).toFixed(2) : "0.00" // Calculate times per row
            }));
        const totalReservation = formattedDataReservation?.length > 0 ? formattedDataReservation.reduce((total, item, index)=>{
            if (item?.category === "NIB" || item?.offered === 0 || item?.demand === 0 || item?.times === 0) {
                return {
                    demand: total.demand,
                    offered: total.offered,
                    times: total.times
                };
            } else {
                return {
                    demand: total.demand + (Number(item.demand) || 0),
                    offered: total.offered + (Number(item.offered) || 0),
                    times: (total.demand + (Number(item.demand) || 0)) / (total.offered + (Number(item.offered) || 0)) || 0
                };
            }
        }, {
            demand: 0,
            offered: 0,
            times: 0
        }) : {
            demand: 0,
            offered: 0,
            times: 0
        };
        totalReservation.times = totalReservation.offered ? (totalReservation.demand / totalReservation.offered).toFixed(2) : "0.00";
        let finalReservation = [
            ...formattedDataReservation,
            {
                category: "Total",
                demand: totalReservation?.demand.toFixed(2),
                offered: totalReservation?.offered?.toFixed(2),
                times: totalReservation?.times // Already calculated above
            }
        ];
        // finalReservation = finalReservation?.map((ele, ind) => {
        //     let obj = cloneDeep(ele);
        //     if (+obj.demand === 0) {
        //         obj.demand = "-"
        //     }
        //     if (+obj.offered === 0) {
        //         obj.offered = "-"
        //     }
        //     if (+obj.times === 0) {
        //         obj.times = "-"
        //     }
        //     return obj
        // })
        return finalReservation;
    };
    // console.log('SubscriptionDetailsTable', rows);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResponsiveTable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        title: title,
        columns: tableColumns,
        rows: transformIPOData(rows),
        mobileMode: "scroll",
        columnMinWidth: 40
    }, void 0, false, {
        fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
        lineNumber: 321,
        columnNumber: 9
    }, this);
}
function ApplicationBreakupTable({ title = "", rows = [] }) {
    const tableColumns = [
        {
            key: "category",
            label: "Category"
        },
        {
            key: "reserved",
            label: "Reserved",
            render: (text)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIndianNumber"])(text)
        },
        {
            key: "applied",
            label: "Applied",
            render: (text)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIndianNumber"])(text)
        },
        {
            key: "times",
            label: "Times",
            render: (text)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatToFixed"])(text)
        }
    ];
    const transformIPOData = (data)=>{
        if (!Array.isArray(data) || data.length === 0) return [];
        const applicationData = data?.slice(1)?.map((item)=>({
                category: item?.category,
                applied: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIndianNumber"])(parseInt(item?.applied, 10)),
                appliedd: parseInt(item?.applied, 10),
                reserved: parseInt(item?.reserved, 10),
                times: item?.applied > 0 && item?.reserved > 0 ? parseInt(item?.applied, 10) / parseInt(item?.reserved, 10) : 0
            }));
        const totalApplication = applicationData?.length > 0 ? applicationData.reduce((total, item, index)=>{
            if (item?.category?.toLowerCase() === "nib" || item?.appliedd === 0 || item?.reserved === 0 || item?.times === 0) {
                return {
                    appliedd: total.appliedd,
                    reserved: total.reserved,
                    times: total.times
                };
            } else {
                return {
                    appliedd: (parseInt(total.appliedd, 10) || 0) + (parseInt(item.appliedd, 10) || 0),
                    reserved: (parseInt(total.reserved, 10) || 0) + (parseInt(item.reserved, 10) || 0),
                    times: ((parseInt(total.appliedd, 10) || 0) + (parseInt(item.appliedd, 10) || 0)) / ((parseInt(total.reserved, 10) || 0) + (parseInt(item.reserved, 10) || 0)) || 0
                };
            }
        }, {
            appliedd: 0,
            reserved: 0,
            times: 0
        }) : {
            appliedd: 0,
            reserved: 0,
            times: 0
        };
        let finalApplication = [
            ...applicationData,
            {
                category: "Total",
                applied: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIndianNumber"])(totalApplication?.appliedd),
                reserved: parseInt(totalApplication?.reserved, 10),
                times: totalApplication?.times
            }
        ];
        // finalApplication = finalApplication?.map((ele, ind) => {
        //     let obj = cloneDeep(ele);
        //     if (obj?.appliedd === 0) {
        //         obj.applied = "-"
        //     }
        //     if (obj?.reserved === 0) {
        //         obj.reserved = "-"
        //     }
        //     return obj;
        // })
        return finalApplication;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResponsiveTable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        title: title,
        columns: tableColumns,
        rows: transformIPOData(rows),
        mobileMode: "scroll",
        columnMinWidth: 40
    }, void 0, false, {
        fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
        lineNumber: 408,
        columnNumber: 9
    }, this);
}
function LotDistributionTable({ title = "", rows = [] }) {
    const tableColumns = [
        {
            key: "application",
            label: "Category"
        },
        {
            key: "lot",
            label: "Lot(s)"
        },
        {
            key: "share",
            label: "Qty"
        },
        {
            key: "ammount",
            label: "Amount",
            render: (v, row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: formatINR(v)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                            lineNumber: 429,
                            columnNumber: 21
                        }, this),
                        row.estimated_pct ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500 dark:text-gray-400",
                            children: [
                                "(",
                                Number(row.estimated_pct).toFixed(2),
                                "%)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                            lineNumber: 430,
                            columnNumber: 43
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                    lineNumber: 428,
                    columnNumber: 17
                }, this)
        }
    ];
    const transformIPOData = (data)=>{
        if (data?.length > 0) {
            const updatedArray = data?.length > 0 && data?.map((item)=>({
                    label: 'IPO Date',
                    application: item?.category === "RETAIL" ? "Retail (Min)" : item?.category,
                    lot: item["lot(s)"]?.toString(),
                    share: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIndianNumber"])(item?.qty),
                    ammount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIndianPrice"])(item?.amount),
                    reserved: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIndianNumber"])(item?.reserved)
                }));
            return updatedArray;
        } else {
            return [];
        }
    };
    let checking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$IPOCalculation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkingNonZeroValueDistributionTable"])(transformIPOData(rows));
    if (checking) {
        tableColumns.push({
            label: "Reserved",
            dataIndex: "reserved",
            key: "reserved",
            width: "50%",
            render: (text)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        display: "flex",
                        justifyContent: "flex-start",
                        whiteSpace: "nowrap",
                        // textDecoration: "underline",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    },
                    className: "company-name-table table-cell-typo text-center",
                    children: text
                }, void 0, false, {
                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                    lineNumber: 461,
                    columnNumber: 17
                }, this)
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResponsiveTable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        title: title,
        columns: tableColumns,
        rows: transformIPOData(rows),
        mobileMode: "scroll",
        columnMinWidth: 40
    }, void 0, false, {
        fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
        lineNumber: 479,
        columnNumber: 9
    }, this);
}
function IPOReservationTable({ title = "", rows = [] }) {
    const tableColumns = [
        {
            key: "investor_category",
            label: "Category"
        },
        {
            key: "shares_offered",
            label: "Shares Offers"
        },
        {
            key: "no_of_shares",
            label: "No. of Shares"
        }
    ];
    const transformIPOData = (data)=>{
        if (!Array.isArray(data) || data.length === 0) return [];
        // Totals from raw inputs
        const totalSharesOffered = data?.reduce((sum, r)=>sum + toNum(r.shares_offered), 0);
        const totalNoOfShares = data?.reduce((sum, r)=>sum + toNum(r.no_of_shares), 0);
        // Map data → percentage for shares_offered + numeric no_of_shares
        const updated = data.map((r)=>{
            const so = toNum(r.shares_offered);
            const pct = totalSharesOffered > 0 ? so / totalSharesOffered * 100 : 0;
            return {
                investor_category: r?.investor_category ?? "",
                shares_offered: `${pct.toFixed(2)}%`,
                no_of_shares: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIndianNumber"])(toNum(r.no_of_shares))
            };
        });
        // Append TOTAL row
        updated.push({
            investor_category: "TOTAL",
            shares_offered: totalSharesOffered > 0 ? "100.00%" : "0%",
            no_of_shares: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIndianNumber"])(totalNoOfShares)
        });
        return updated;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResponsiveTable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        title: title,
        columns: tableColumns,
        rows: transformIPOData(rows),
        mobileMode: "scroll",
        columnMinWidth: 40
    }, void 0, false, {
        fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
        lineNumber: 528,
        columnNumber: 9
    }, this);
}
function IpoCompanyDetails({ companyDetails = {}, registrarDetail = "" }) {
    // Parse registrar details from comma-separated string
    const [registrarName, registrarPhone, registrarEmail, registrarWebsite] = registrarDetail?.split(",").map((item)=>item.trim()) || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "scroll-mt-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl ring-1 ring-gray-200 dark:ring-base-800 bg-white dark:bg-base-950",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-50 dark:bg-base-900/40 rounded-t-xl px-4 py-3 border-b border-gray-200 dark:border-base-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold ",
                                children: "Company Details"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                lineNumber: 549,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                            lineNumber: 548,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5 text-sm text-gray-700 dark:text-gray-300 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Email:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                            lineNumber: 556,
                                            columnNumber: 29
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `mailto:${companyDetails?.Email}`,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-indigo-600 hover:underline",
                                            children: companyDetails?.Email || "—"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                            lineNumber: 557,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                    lineNumber: 555,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Phone:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                            lineNumber: 566,
                                            columnNumber: 29
                                        }, this),
                                        " ",
                                        companyDetails?.Phone || "—"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                    lineNumber: 565,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Website:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                            lineNumber: 569,
                                            columnNumber: 29
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: companyDetails.Website,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-indigo-600 hover:underline",
                                            children: companyDetails.Website || "—"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                            lineNumber: 570,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                    lineNumber: 568,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Address:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                            lineNumber: 580,
                                            columnNumber: 29
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block whitespace-pre-line",
                                            children: companyDetails.address || "—"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                            lineNumber: 581,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                    lineNumber: 579,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                            lineNumber: 554,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                    lineNumber: 547,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl ring-1 ring-gray-200 dark:ring-base-800 bg-white dark:bg-base-950",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-50 dark:bg-base-900/40 rounded-t-xl px-4 py-3 border-b border-gray-200 dark:border-base-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold ",
                                children: "IPO Registrar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                lineNumber: 591,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                            lineNumber: 590,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5 text-sm text-gray-700 dark:text-gray-300 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Name:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                            lineNumber: 601,
                                            columnNumber: 29
                                        }, this),
                                        " ",
                                        registrarName || "—"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                    lineNumber: 600,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Phone:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                            lineNumber: 604,
                                            columnNumber: 29
                                        }, this),
                                        " ",
                                        registrarPhone || "—"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                    lineNumber: 603,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Email:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                            lineNumber: 607,
                                            columnNumber: 29
                                        }, this),
                                        " ",
                                        registrarEmail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `mailto:${registrarEmail}`,
                                            className: "text-indigo-600 hover:underline",
                                            children: registrarEmail
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                            lineNumber: 609,
                                            columnNumber: 33
                                        }, this) : "—"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                    lineNumber: 606,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Website:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                            lineNumber: 620,
                                            columnNumber: 29
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: registrarWebsite,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-indigo-600 hover:underline",
                                            children: registrarWebsite || "—"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                            lineNumber: 621,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                    lineNumber: 619,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                            lineNumber: 596,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                    lineNumber: 589,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
            lineNumber: 545,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
        lineNumber: 544,
        columnNumber: 9
    }, this);
}
function StrengthWeekness({ strength = "", weakness = "", note = "The pros and cons are machine generated.", showNote = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "scroll-mt-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl bg-white dark:bg-base-950 p-5 ring-1 ring-emerald-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold tracking-widest text-emerald-600",
                                children: "Strength Factors"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                lineNumber: 644,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "prose prose-sm max-w-none text-gray-700 dark:prose-invert dark:text-gray-300 prose-ul:list-disc prose-ol:list-decimal prose-li:my-1",
                                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cleanHTMLContent"])(strength)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                    lineNumber: 646,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                lineNumber: 645,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                        lineNumber: 643,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl bg-white dark:bg-base-950 p-5 ring-1 ring-rose-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold tracking-widest text-rose-600",
                                children: "Risk Factors"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                lineNumber: 654,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "prose prose-sm max-w-none text-gray-700 dark:prose-invert dark:text-gray-300 prose-ul:list-disc prose-ol:list-decimal prose-li:my-1",
                                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cleanHTMLContent"])(weakness)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                    lineNumber: 656,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                lineNumber: 655,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                        lineNumber: 653,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                lineNumber: 640,
                columnNumber: 13
            }, this),
            showNote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block h-4 w-4 rounded-full border border-gray-300 dark:border-base-700 grid place-items-center text-[10px]",
                        children: "i"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                        lineNumber: 665,
                        columnNumber: 21
                    }, this),
                    note
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                lineNumber: 664,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
        lineNumber: 639,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/ipodetailspages/OverviewSection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/OverviewSection.jsx
__turbopack_context__.s([
    "default",
    ()=>OverviewSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app_config/CommonFunction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app_config/CommonVariable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$IPOCalculation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app_config/IPOCalculation.js [app-ssr] (ecmascript)");
;
;
;
;
;
const formatValue = (...values)=>{
    const isValid = (v)=>{
        if (v == null) return false; // null / undefined
        const s = String(v).trim();
        if (!s) return false; // empty string
        return !/^0+(\.0+)?$/.test(s); // 0, 0.0, 0.00
    };
    const filtered = values.filter(isValid);
    return filtered.length ? filtered.join(" ") : "-";
};
function OverviewSection({ id = "overview", ipoDetailsData }) {
    const metrics = [
        {
            label: "Start Date",
            value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateTime"])(ipoDetailsData?.start_date, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DateFormats"]?.DATE_DD_MM_YYYY)}`
        },
        {
            label: "End Date",
            value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateTime"])(ipoDetailsData?.end_date, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DateFormats"]?.DATE_DD_MM_YYYY)}`
        },
        {
            label: "Listing Date",
            value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateTime"])(ipoDetailsData?.listing_date, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DateFormats"]?.DATE_DD_MM_YYYY)}`
        },
        {
            label: "Current Price",
            value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIndianPrice"])(ipoDetailsData?.listed_price)}`
        },
        {
            label: "GMP",
            value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$IPOCalculation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGmpValue"])(ipoDetailsData)}`
        },
        {
            label: "Lot Size",
            value: `${ipoDetailsData?.bid_lot} Shares`
        },
        {
            label: "Subscription",
            value: `${ipoDetailsData?.subscription} Times`
        },
        {
            label: "Face Value",
            value: `${ipoDetailsData?.face_value}`
        },
        {
            label: "Listing at",
            value: `${ipoDetailsData?.listing_at_group}`
        },
        {
            label: "Issue Price",
            value: `${ipoDetailsData?.price_range}`
        },
        {
            label: "Pre Issue",
            value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIndianPrice"])(ipoDetailsData?.pre_issue_share_holding)}`
        },
        {
            label: "Post Issue",
            value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIndianPrice"])(ipoDetailsData?.post_issue_share_holding)}`
        },
        {
            label: "Issue Size",
            value: formatValue(ipoDetailsData?.issue_size ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIndianPrice"])(ipoDetailsData?.issue_size) : null, ipoDetailsData?.issue_amount ? `(aggregating up to ${ipoDetailsData?.issue_amount} Cr)` : null)
        },
        {
            label: "Fresh Issue",
            value: formatValue(ipoDetailsData?.fresh_issue_value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIndianPrice"])(ipoDetailsData?.fresh_issue_value) : null, ipoDetailsData?.fresh_issue_size ? `(aggregating up to ${ipoDetailsData?.fresh_issue_size} Cr)` : null)
        },
        {
            label: "Offer For Sale",
            value: formatValue(ipoDetailsData?.offer_of_sale ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIndianPrice"])(ipoDetailsData?.offer_of_sale) : null, +ipoDetailsData?.offer_of_sale_value ? `(aggregating up to ${ipoDetailsData?.offer_of_sale_value} Cr)` : null)
        }
    ];
    const breakBeforeBracket = (text = "")=>{
        return text.replace(/\s*\(/, "<br/>(");
    };
    console.log('ipoDetailsData', ipoDetailsData);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        className: "scroll-mt-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-base-950 rounded-2xl shadow-sm ring-1 ring-gray-200 dark:ring-base-800 p-4 sm:p-6 md:p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100",
                                    children: ipoDetailsData?.company_name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                                    lineNumber: 65,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: ipoDetailsData?.company_address?.Website,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "mt-1 inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 dark:text-indigo-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            className: "opacity-80",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fill: "currentColor",
                                                    d: "M10.9 2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6.02a1 1 0 1 0-2 0V17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6.02a1 1 0 1 0-.12-2Z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                                                    lineNumber: 71,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fill: "currentColor",
                                                    d: "M21 3h-6a1 1 0 1 0 0 2h3.59l-7.3 7.3a1 1 0 1 0 1.42 1.4L20 6.41V10a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1Z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                                                    lineNumber: 71,
                                                    columnNumber: 214
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                                            lineNumber: 70,
                                            columnNumber: 29
                                        }, this),
                                        "Company website"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                                    lineNumber: 69,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-3",
                            children: ipoDetailsData?.ipo_doc_link?.length > 0 && ipoDetailsData?.ipo_doc_link.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>window.open(a.link, "_blank"),
                                    className: [
                                        "h-9 rounded-lg px-3 text-sm font-medium transition uppercase",
                                        a.variant === "ghost" ? "border border-gray-200 dark:border-base-800 bg-white/60 dark:bg-base-950/60 hover:bg-gray-50 dark:hover:bg-base-900" : "border border-gray-200 dark:border-base-800 bg-gray-50 dark:bg-base-900 hover:bg-gray-100 dark:hover:bg-base-800"
                                    ].join(" "),
                                    children: a.lable
                                }, i, false, {
                                    fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                                    lineNumber: 79,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                            lineNumber: 77,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                    lineNumber: 63,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 grid grid-cols-12 gap-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-12 lg:col-span-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl ring-1 ring-gray-200 dark:ring-base-800 p-4 sm:p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3",
                                children: metrics.map((m, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[13px] text-gray-500 dark:text-gray-400",
                                                children: m.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                                                lineNumber: 103,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: [
                                                    "text-base font-semibold text-gray-900 dark:text-gray-100 break-words break-all whitespace-normal",
                                                    m.highlight ? "bg-gray-50 dark:bg-base-900 rounded-md px-3 py-2" : ""
                                                ].join(" "),
                                                dangerouslySetInnerHTML: {
                                                    __html: m.label != "GMP" ? breakBeforeBracket(m.value) : m.value
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                                                lineNumber: 104,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                                        lineNumber: 102,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                                lineNumber: 100,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                            lineNumber: 99,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                        lineNumber: 98,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                    lineNumber: 97,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
            lineNumber: 61,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
        lineNumber: 60,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/ipodetailspages/IpoDetailsPages.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// sections/IpoDetailsPages.jsx
__turbopack_context__.s([
    "IpoDetailsPages",
    ()=>IpoDetailsPages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$StickyTabs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ipodetailspages/StickyTabs.jsx [app-ssr] (ecmascript)");
// import SectionHeading from "@/components/sections/SectionHeading";
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$gmpdata$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/gmpdata.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$IPOGmp$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ipodetailspages/IPOGmp.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$OverviewSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ipodetailspages/OverviewSection.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// import Accordion from "@/components/Accordion";
const TABS = [
    {
        id: "overview",
        label: "Overview"
    },
    {
        id: "gmpDetails",
        label: "GMP"
    },
    {
        id: "financial_data",
        label: "Financial Data"
    },
    {
        id: "subscriptionDetails",
        label: "Subscription"
    },
    {
        id: "ipoReservation",
        label: "IPO Reservation"
    },
    {
        id: "comapnyDetails",
        label: "Comapny Details"
    }
];
function IpoDetailsPages({ ipoDetailsData, ...rest }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$StickyTabs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                items: TABS
            }, void 0, false, {
                fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                lineNumber: 29,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-base-100 dark:bg-base-900 pt-20",
                ...rest,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto space-y-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$OverviewSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            id: "overview",
                            title: "Lenskart Solutions Ltd",
                            ipoDetailsData: ipoDetailsData
                        }, void 0, false, {
                            fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                            lineNumber: 36,
                            columnNumber: 17
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$gmpdata$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gmpDetails"]?.ipo_gmp?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "gmpDetails",
                            className: "scroll-mt-20 !mt-0 sm:!mt-[2.5rem]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                title: "",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$IPOGmp$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GmpTrendTable"], {
                                    title: "Gmp Details",
                                    rows: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$gmpdata$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gmpDetails"]?.ipo_gmp?.length > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$gmpdata$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gmpDetails"]?.ipo_gmp : []
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                    lineNumber: 72,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                lineNumber: 71,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                            lineNumber: 70,
                            columnNumber: 56
                        }, this),
                        ipoDetailsData?.company_financial_data?.financial_data?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "financial_data",
                            className: "scroll-mt-20 !mt-0 sm:!mt-[2.5rem]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                title: "",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$IPOGmp$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FinancialTable"], {
                                    title: "Financials ( In Crores )",
                                    rows: ipoDetailsData?.company_financial_data?.financial_data?.length > 0 ? ipoDetailsData?.company_financial_data?.financial_data : []
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                    lineNumber: 80,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                lineNumber: 79,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                            lineNumber: 78,
                            columnNumber: 91
                        }, this),
                        ipoDetailsData?.key_performance_indicator?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "financial_data",
                            className: "scroll-mt-20 !mt-0 sm:!mt-[2.5rem]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                title: "",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$IPOGmp$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KeyPerfomanceTable"], {
                                    title: "Key Performance",
                                    rows: ipoDetailsData?.key_performance_indicator?.length > 0 ? ipoDetailsData?.key_performance_indicator : []
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                    lineNumber: 88,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                lineNumber: 87,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                            lineNumber: 86,
                            columnNumber: 78
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "subscriptionDetails",
                            className: "scroll-mt-20 !mt-0 sm:!mt-[2.5rem]",
                            children: [
                                ipoDetailsData?.ipo_subscription_detail?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    title: "",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$IPOGmp$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubscriptionDetailsTable"], {
                                        title: "Subscription Details (No. of Shares)",
                                        rows: ipoDetailsData?.ipo_subscription_detail?.length > 0 ? ipoDetailsData?.ipo_subscription_detail : []
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                        lineNumber: 97,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                    lineNumber: 96,
                                    columnNumber: 80
                                }, this),
                                ipoDetailsData?.subscription_demand?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    title: "",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$IPOGmp$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubscriptionDemandTable"], {
                                        title: " Subscription Demand (in ₹ Crore)",
                                        rows: ipoDetailsData?.subscription_demand?.length > 0 ? ipoDetailsData?.subscription_demand : []
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                        lineNumber: 102,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                    lineNumber: 101,
                                    columnNumber: 76
                                }, this),
                                ipoDetailsData?.appplication_wise_breakup?.data?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    title: "",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$IPOGmp$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApplicationBreakupTable"], {
                                        title: "Application Wise Breakup (Approx. no of Apps)",
                                        rows: ipoDetailsData?.appplication_wise_breakup?.data?.length > 0 ? ipoDetailsData?.appplication_wise_breakup?.data : []
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                        lineNumber: 107,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                    lineNumber: 106,
                                    columnNumber: 88
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                            lineNumber: 94,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "ipoReservation",
                            className: "scroll-mt-20 !mt-0 sm:!mt-[2.5rem]",
                            children: [
                                ipoDetailsData?.ipo_reservation?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    title: "",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$IPOGmp$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IPOReservationTable"], {
                                        title: "IPO Reservation",
                                        rows: ipoDetailsData?.ipo_reservation?.length > 0 ? ipoDetailsData?.ipo_reservation : []
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                        lineNumber: 117,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                    lineNumber: 116,
                                    columnNumber: 25
                                }, this),
                                ipoDetailsData?.ipo_lot_description?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    title: "",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$IPOGmp$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LotDistributionTable"], {
                                        title: "Lot(s) Distribution",
                                        rows: ipoDetailsData?.ipo_lot_description?.length > 0 ? ipoDetailsData?.ipo_lot_description : []
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                        lineNumber: 122,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                    lineNumber: 121,
                                    columnNumber: 76
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                            lineNumber: 113,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "comapnyDetails",
                            className: "scroll-mt-20 !mb-20  !mt-0 sm:!mt-[2.5rem]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    title: "",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$IPOGmp$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IpoCompanyDetails"], {
                                        companyDetails: ipoDetailsData?.company_address,
                                        registrarDetail: ipoDetailsData?.registrar_detail
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                        lineNumber: 130,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                    lineNumber: 129,
                                    columnNumber: 21
                                }, this),
                                ipoDetailsData?.company_weakness && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    title: "",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$IPOGmp$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StrengthWeekness"], {
                                        strength: ipoDetailsData?.company_strenght,
                                        weakness: ipoDetailsData?.company_weakness ? ipoDetailsData?.company_weakness : ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                        lineNumber: 134,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                    lineNumber: 133,
                                    columnNumber: 61
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    title: "About Company",
                                    children: ipoDetailsData?.about_the_company
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                    lineNumber: 137,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                            lineNumber: 128,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                    lineNumber: 33,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
// tiny helper card
function Card({ title, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-base-950 p-3 sm:p-6 rounded-2xl border border-gray-200 dark:border-base-800 !mt-5 sm:!mt-10",
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold mb-3",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                lineNumber: 151,
                columnNumber: 23
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-gray-600 dark:text-gray-300",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                lineNumber: 152,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
        lineNumber: 150,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_7e04880d._.js.map