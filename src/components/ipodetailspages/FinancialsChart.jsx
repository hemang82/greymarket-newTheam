// components/StyledGroupedBarChartFinal.jsx
"use client";

import React, { useMemo } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// ---------- helpers (keep keys unchanged) ----------
const toNumber = (v) => {
    if (v === null || v === undefined) return 0;
    const s = String(v).replace(/,/g, "").trim();
    if (s === "" || s === "-") return 0;
    const n = parseFloat(s);
    return Number.isNaN(n) ? 0 : n;
};

const monthIndex = {
    Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
    Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12,
};
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
    const h = hex.replace("#", "");
    const r = parseInt(h.substring(0, 2), 16);
    const g = parseInt(h.substring(2, 4), 16);
    const b = parseInt(h.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// ---------- component ----------
export default function StyledGroupedBarChartFinal({
    financialData = [],
    amountType = "In Crores",
}) {
    // parse & sort DESC (newest first) and keep your key names intact
    const parsed = useMemo(() => {
        const arr = Array.isArray(financialData) ? financialData : [];

        // filter header-like rows (period_ended = "Period Ended")
        const rows = arr.filter((r) => {
            if (!r || typeof r.period_ended !== "string") return false;
            return r.period_ended.toLowerCase().indexOf("period") === -1;
        });

        // sort descending (newest first)
        rows.sort((a, b) => sortKey(b.period_ended) - sortKey(a.period_ended));

        return {
            periods: rows.map((r) => r.period_ended || ""),
            assets: rows.map((r) => toNumber(r.assets)),
            revenue: rows.map((r) => toNumber(r.revenue)),
            net_worth: rows.map((r) => toNumber(r.net_worth)),
            profit_after_tax: rows.map((r) => toNumber(r.profit_after_tax)),
            reserves_and_surpluse: rows.map((r) => toNumber(r.reserves_and_surpluse)),
            total_borrowing: rows.map((r) => toNumber(r.total_borrowing)),
        };
    }, [financialData]);

    // palette: border color + light fill (alpha ~0.06) to match your screenshot
    const PALETTE = [
        "#9ebae9", // Total Assets (blue)
        "#dc6967", // Total Revenue (red)
        "#85e3c9", // Profit After Tax (cyan)
        "#e3db85", // Net Worth (yellow)
        "#ace99e", // Reserves And Surplus (pink)
        "#ffd08a", // Total Borrowing (light orange)
    ];

    // order & friendly labels to match screenshot
    const KEYS = [
        { key: "assets", label: "Total Assets" },
        { key: "revenue", label: "Total Revenue" },
        { key: "profit_after_tax", label: "Profit After Tax" },
        { key: "net_worth", label: "Net Worth" },
        { key: "reserves_and_surpluse", label: "Reserves And Surplus" },
        { key: "total_borrowing", label: "Total Borrowing" },
    ];

    // build datasets (outlined + light fill)
    const buildDatasets = () => {
        return KEYS.map((k, i) => {
            const col = PALETTE[i % PALETTE.length];
            return {
                label: k.label,
                data: parsed[k.key] || [],
                borderColor: col,
                borderWidth: 2,
                backgroundColor: hexToRgba(col, 0.06), // subtle fill
                borderRadius: 6,
                // barThickness controlled responsively via options.datasets.bar.barThickness
            };
        });
    };

    const data = {
        labels: parsed.periods || [],
        datasets: buildDatasets(),
    };

    // options tuned to match screenshot: more group spacing, slim bars, top legend
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
                labels: {
                    usePointStyle: true,
                    pointStyle: "rectRounded",
                    padding: 12,
                    boxWidth: 18,
                    boxHeight: 12,
                },
            },
            title: {
                display: true,
                text: `Financial Overview (${amountType})`,
            },
            tooltip: {
                backgroundColor: "#fff",
                borderColor: "rgba(0,0,0,0.1)",
                borderWidth: 1,
                titleColor: "#111",
                bodyColor: "#333",
            },
        },
        scales: {
            x: {
                grid: { display: false },
            },
            y: {
                beginAtZero: true,
                grid: { color: "rgba(0,0,0,0.06)" },
            },
        },

        // ⭐ Normal spacing settings ⭐
        categoryPercentage: 0.75,    // space between GROUPS
        datasetPercentage: 0.85,     // space between BARS inside group

        // Clean bar thickness for normal layout
        datasets: {
            bar: {
                barThickness: 22,
            },
        },
    };
    return (
        <div style={{
            width: "100%",
            height: 470,
            padding: 8,
            background: "#fff",
            borderRadius: 8,
            boxShadow: "0 6px 20px rgba(0,0,0,0.03)",
            border: "1px solid rgba(0,0,0,0.03)",
        }}>
            <Bar data={data} options={options} />
        </div>
    );
}
