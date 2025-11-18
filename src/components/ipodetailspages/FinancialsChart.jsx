// components/FinancialsChart.jsx
"use client";

import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

const COLORS = [
    "#4F46E5", // indigo
    "#06B6D4", // cyan
    "#10B981", // emerald
    "#F59E0B", // amber
    "#EF4444", // red
    "#8B5CF6", // purple
];

function NumberTooltip({ value }) {
    if (value == null) return "-";
    // format Indian style with 2 decimals
    return value.toLocaleString("en-IN", { maximumFractionDigits: 2 });
}

// lib/financeUtils.js
// Parse numeric string like "10,904.32" or "-145.49" -> number
export function parseNumber(val) {
    if (val == null) return null;
    // Remove commas, whitespace, and non-digit except leading minus and dot
    const cleaned = String(val).replace(/,/g, "").trim();
    const n = Number(cleaned);
    return Number.isFinite(n) ? n : null;
}

// Remove any header/meta row (where period_ended looks like 'Period Ended' or 'Period Ended')
// and transform into array of objects with numeric values
export function normalizeFinancialData(raw = []) {
    if (!Array.isArray(raw) || raw.length === 0) return { rows: [], seriesKeys: [] };

    // detect header-like row (first row often contains column labels)
    const first = raw[0] || {};
    const looksLikeHeader =
        Object.values(first).some((v) =>
            /Period Ended|Period Ended|Assets|Revenue|Net Worth/i.test(String(v))
        );

    const rows = raw
        .filter((r, idx) => !(looksLikeHeader && idx === 0))
        .map((r) => {
            // map each row's numeric fields
            const mapped = {};
            Object.entries(r).forEach(([k, v]) => {
                if (k === "period_ended") mapped.period = String(v);
                else mapped[k] = parseNumber(v) ?? v; // numeric if parseable, else keep original
            });
            return mapped;
        });

    // Collect keys that are numeric series (exclude 'period' and any string values)
    const sample = rows[0] || {};
    const seriesKeys = Object.keys(sample).filter(
        (k) => k !== "period" && typeof sample[k] === "number"
    );

    return { rows, seriesKeys };
}


export default function FinancialsChart({ financialData = [], amountType = "In Crores" }) {
    const { rows, seriesKeys } = normalizeFinancialData(financialData);

    // reverse rows so time flows left-to-right (if needed). Comment if not needed.
    const chartData = [...rows].reverse();

    return (
        <section className="bg-white dark:bg-base-950 rounded-2xl ring-1 ring-gray-200 dark:ring-base-800 p-6">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h3 className="text-lg font-semibold text-title">Profit &amp; Loss</h3>
                    <p className="text-sm text-gray-500">Consolidated Figures {amountType}</p>
                </div>
                <div className="text-sm text-gray-500">Last periods: {chartData.length}</div>
            </div>

            <div className="w-full h-64">
                {seriesKeys.length === 0 ? (
                    <div className="flex items-center justify-center h-full text-gray-400">No numeric series available</div>
                ) : (
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                            <XAxis dataKey="period" tick={{ fontSize: 12 }} />
                            <YAxis tickFormatter={(v) => (v == null ? "" : v.toLocaleString("en-IN"))} />
                            <Tooltip formatter={(value) => NumberTooltip({ value })} />
                            <Legend verticalAlign="top" />
                            {seriesKeys.map((key, i) => (
                                <Line
                                    key={key}
                                    type="monotone"
                                    dataKey={key}
                                    name={formatSeriesKey(key)}
                                    stroke={COLORS[i % COLORS.length]}
                                    strokeWidth={2}
                                    dot={{ r: 2 }}
                                    activeDot={{ r: 5 }}
                                />
                            ))}
                        </LineChart>
                    </ResponsiveContainer>
                )}
            </div>

            {/* table summary below chart */}
            <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead>
                        <tr className="text-xs text-gray-500">
                            <th className="py-2">Metric</th>
                            {chartData.map((r) => (
                                <th key={r.period} className="py-2">{r.period}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {seriesKeys.map((key) => (
                            <tr key={key} className="border-t">
                                <td className="py-2 font-medium">{formatSeriesKey(key)}</td>
                                {chartData.map((r) => (
                                    <td key={r.period + key} className="py-2">
                                        {r[key] == null ? "-" : r[key].toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

// small helper to make labels prettier
function formatSeriesKey(k) {
    return k
        .replace(/_/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
}
