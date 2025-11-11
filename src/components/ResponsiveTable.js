// components/ResponsiveTable.js
"use client";

export default function ResponsiveTable({ title, columns = [], rows = [], getRowKey = (row, i) => row.id ?? i, className = "" }) {
    return (
        <div className={["rounded-2xl bg-white dark:bg-base-950 ring-1 ring-gray-200 dark:ring-base-800 overflow-hidden", className].join(" ")}>
            {/* Header */}
            {title && (
                <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-gray-50 dark:bg-base-900/60 border-b border-gray-200 dark:border-base-800">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
                </div>
            )}

            {/* Desktop table */}
            <div className="hidden md:block">
                <table className="w-full text-sm">
                    <thead className="text-left text-gray-600 dark:text-gray-300 bg-white dark:bg-base-950">
                        <tr className="[&>th]:px-4 [&>th]:sm:px-6 [&>th]:py-3 border-b border-gray-200 dark:border-base-800">
                            {columns.map((c) => (
                                <th key={c.key}>{c.label}</th>
                            ))}
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 dark:divide-base-800">
                        {rows.length === 0 && (
                            <tr>
                                <td colSpan={columns.length} className="px-6 py-6 text-center text-gray-500 dark:text-gray-400">
                                    No data available.
                                </td>
                            </tr>
                        )}

                        {rows.map((row, i) => (
                            <tr key={getRowKey(row, i)} className="odd:bg-gray-50/40 dark:odd:bg-base-900/30">
                                {columns.map((c) => (
                                    <td key={c.key} className="[&>div]:px-4 [&>div]:sm:px-6 py-3">
                                        <div>
                                            {c.render ? c.render(row[c.key], row) : (row[c.key] ?? "—")}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile stacked cards */}
            <div className="md:hidden divide-y divide-gray-200 dark:divide-base-800">
                {rows.length === 0 && (
                    <div className="px-4 py-6 text-center text-gray-500 dark:text-gray-400">No data available.</div>
                )}

                {rows.map((row, i) => (
                    <div key={getRowKey(row, i)} className="p-4 space-y-3">
                        {columns.map((c) => (
                            <div key={c.key} className="grid grid-cols-2 gap-2 text-sm">
                                <div className="text-xs text-gray-500">{c.label}</div>
                                <div className="font-medium">
                                    {c.render ? c.render(row[c.key], row) : (row[c.key] ?? "—")}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
