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

"use client";

import { cn } from "@/lib/utils";
import React from "react";
// import cn from "classnames";

/**
 * ResponsiveTable
 *
 * Props:
 * - title: string
 * - columns: [{ key: string, label: string, render?: (value, row) => ReactNode }] 
 * - rows: array of row objects
 * - getRowKey: (row, i) => string|number
 * - className: additional wrapper classes
 * - mobileMode: "scroll" | "stacked" | "both"  (default "scroll")
 * - columnMinWidth: number (px) used to compute min-table-width on mobile; default 160
 */

export default function ResponsiveTable({
    title,
    columns = [],
    rows = [],
    getRowKey = (row, i) => row.id ?? i,
    className = "",
    mobileMode = "scroll",
    columnMinWidth = 160,
    stickyFirstColumn = true,
}) {
    // computed min width for the table when in scroll mode
    const minTableWidth = Math.max(columns.length * columnMinWidth, 400);

    // Single table markup used for both desktop and mobile scroll
    const TableMarkup = () => (
        <table
            className="min-w-full w-full text-sm table-auto"
            style={{ minWidth: `${minTableWidth}px` }}
        >
            <thead className="text-left text-gray-600 dark:text-gray-300 bg-white dark:bg-base-950">
                <tr className="[&>th]:px-4 [&>th]:sm:px-6 [&>th]:py-3 border-b border-gray-200 dark:border-base-800">
                    {columns.map((c, colIndex) => (
                        <th
                            key={c.key}
                            className={cn(
                                "whitespace-nowrap bg-white dark:bg-base-950",
                                stickyFirstColumn && colIndex === 0 && "sticky left-0 z-[6] bg-white dark:bg-base-950 shadow-sm"
                            )}
                            style={{ minWidth: `${columnMinWidth}px` }}
                        >
                            {c.label}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-base-800">
                {rows.length === 0 ? (
                    <tr>
                        <td colSpan={columns.length} className="px-6 py-6 text-center text-gray-500 dark:text-gray-400">
                            No data available.
                        </td>
                    </tr>
                ) : (
                    rows.map((row, i) => (
                        <tr key={getRowKey(row, i)} className="odd:bg-gray-50/40 dark:odd:bg-base-900/30">
                            {columns.map((c, colIndex) => (
                                <td
                                    key={c.key}
                                    className={cn(
                                        "[&>div]:px-4 [&>div]:sm:px-6 py-3 align-top bg-white dark:bg-base-950 font-medium",
                                        stickyFirstColumn && colIndex === 0 && "sticky left-0 z-[5] shadow-sm bg-white dark:bg-base-950"
                                    )}
                                    style={{
                                        minWidth: colIndex === 0 ? `${columnMinWidth}px` : undefined,
                                        left: colIndex === 0 ? 0 : undefined,
                                    }}
                                >
                                    <div>
                                        {c.render ? c.render(row[c.key], row) : (row[c.key] ?? "—")}
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );

    // Mobile stacked cards markup (fallback)
    const StackedMarkup = () => (
        <div className="space-y-3">
            {rows.length === 0 ? (
                <div className="px-4 py-6 text-center text-gray-500 dark:text-gray-400">No data available.</div>
            ) : rows.map((row, i) => (
                <div key={getRowKey(row, i)} className="p-4 rounded-lg ring-1 ring-gray-200 dark:ring-base-800 bg-white dark:bg-base-950">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                        {columns.map((c) => (
                            <div key={c.key} className="py-1">
                                <div className="text-xs text-gray-500">{c.label}</div>
                                <div className="font-medium">{c.render ? c.render(row[c.key], row) : (row[c.key] ?? "—")}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className={cn("rounded-2xl bg-white dark:bg-base-950 ring-1 ring-gray-200 dark:ring-base-800 overflow-hidden", className)}>

            {/* Header */}
            {title && (
                <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-gray-50 dark:bg-base-900/60 border-b border-gray-200 dark:border-base-800">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
                </div>
            )}

            {/* Mobile region */}
            <div className="md:hidden">
                {/* If mobileMode includes "scroll", show swipeable table */}
                {(mobileMode === "scroll" || mobileMode === "both") && (
                    <div className="w-full overflow-x-auto scroll-x-smooth scrollbar-thin -mx-4 px-4">
                        <div className="min-w-full">
                            <TableMarkup />
                        </div>
                    </div>
                )}

                {/* If mobileMode includes "stacked", also show stacked cards (below or instead) */}
                {(mobileMode === "stacked" || mobileMode === "both") && (
                    <div className="px-4 sm:px-6 mt-3">
                        <StackedMarkup />
                    </div>
                )}
            </div>

            {/* Desktop/tablet region */}
            <div className="hidden md:block">
                <div className="w-full overflow-x-auto">
                    <TableMarkup />
                </div>
            </div>
        </div>
    );
}
