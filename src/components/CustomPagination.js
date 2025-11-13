// components/Pagination.js
"use client";
import { useMemo } from "react";

function usePageRange({ total, pageSize, current }) {
    // returns an array like: [1, 2, 3, '…', 10]
    return useMemo(() => {
        const totalPages = Math.max(1, Math.ceil(total / pageSize));
        const c = Math.min(Math.max(1, current), totalPages);
        const delta = 1; // how many around current
        const range = [];
        const left = Math.max(2, c - delta);
        const right = Math.min(totalPages - 1, c + delta);

        range.push(1);
        if (left > 2) range.push("…");
        for (let i = left; i <= right; i++) range.push(i);
        if (right < totalPages - 1) range.push("…");
        if (totalPages > 1) range.push(totalPages);
        return { pages: range, totalPages };
    }, [total, pageSize, current]);
}

export default function CustomPagination({
    total = 0,
    pageSize = 10,
    current = 1,
    onChange = () => { },
    pageSizeOptions = [10, 20, 50],
    className = "",
}) {
    const { pages, totalPages } = usePageRange({ total, pageSize, current });

    const go = (p) => {
        if (p < 1 || p > totalPages || p === current) return;
        onChange({ page: p, pageSize });
    };

    const changeSize = (e) => {
        const newSize = Number(e.target.value) || 10;
        const newTotalPages = Math.max(1, Math.ceil(total / newSize));
        const newPage = Math.min(current, newTotalPages);
        onChange({ page: newPage, pageSize: newSize });
    };

    const baseBtn = "h-8 min-w-8 px-2 inline-flex items-center justify-center rounded-lg border text-sm transition";
    const neutral = "border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-base-700 dark:text-gray-200 dark:hover:bg-base-900";
    const active = "border-[#135c33] text-[#135c33] bg-[#135c3317] dark:border-[#135c33] dark:text-[#135c33] dark:bg-[#135c3317]";

    return (
        <div className="flex items-center justify-center w-full py-6  border-b bg-base-100 border-gray-200 dark:border-base-800">

            <div className={["w-[90%] lg:w-[68%] md:w-[68%] flex flex-wrap items-center justify-between gap-3 rounded-2xl", "bg-white dark:bg-base-950 ring-1 ring-gray-200 dark:ring-base-800 p-3", className,].join(" ")}
                role="navigation"
                aria-label="Pagination"
            >
                {/* Left: pager */}
                <div className="flex items-center gap-2">
                    <button
                        className={`${baseBtn} ${neutral}`}
                        disabled={current <= 1}
                        onClick={() => go(current - 1)}
                        aria-label="Previous page"
                    >
                        Previous
                    </button>

                    {pages.map((p, i) =>
                        p === "…" ? (
                            <span key={`ellipsis-${i}`} className="px-2 text-gray-500">
                                …
                            </span>
                        ) : (
                            <button
                                key={p}
                                className={`${baseBtn} ${p === current ? active : neutral}`}
                                onClick={() => go(p)}
                                aria-current={p === current ? "page" : undefined}
                            >
                                {p}
                            </button>
                        )
                    )}

                    <button
                        className={`${baseBtn} ${neutral}`}
                        disabled={current >= totalPages}
                        onClick={() => go(current + 1)}
                        aria-label="Next page"
                    >
                        Next
                    </button>
                </div>

                {/* Right: page size */}
                <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span>Rows</span>
                    <select
                        className="h-8 rounded-md border border-gray-300 dark:border-base-700 bg-white dark:bg-base-950 px-2"
                        value={pageSize}
                        onChange={changeSize}
                    >
                        {pageSizeOptions.map((n) => (
                            <option key={n} value={n}>
                                {n} / page
                            </option>
                        ))}
                    </select>
                </label>
            </div>

        </div>
    );
}
