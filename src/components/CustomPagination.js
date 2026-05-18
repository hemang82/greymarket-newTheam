// components/Pagination.js
"use client";
import { useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

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
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const getHref = (pageNumber) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", String(pageNumber));
        params.set("pageSize", String(pageSize));
        return `${pathname}?${params.toString()}`;
    };

    const baseBtn = "h-8 min-w-8 px-2 inline-flex items-center justify-center rounded-lg border text-sm transition";
    const neutral = "border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-base-700 dark:text-gray-200 dark:hover:bg-base-900";
    const active = "border-[#135c33] text-[#135c33] bg-[#135c3317] dark:border-[#135c33] dark:text-[#135c33] dark:bg-[#135c3317]";

    return (<>
        {
            total > pageSize ?
                <div className="flex items-center justify-center w-full py-6 bg-base-100 border-gray-200 dark:border-base-800">
                    <div className={[" flex flex-wrap items-center justify-between gap-3 rounded-xl", "bg-white dark:bg-base-950 ring-1 ring-gray-200 dark:ring-base-800 p-3", className,].join(" ")}
                        role="navigation"
                        aria-label="Pagination"
                    >
                        {/* Left: pager */}
                        <div className="flex items-center gap-2">
                            <Link
                                className={`${baseBtn} ${neutral} ${current <= 1 ? "pointer-events-none opacity-50" : ""}`}
                                href={current > 1 ? getHref(current - 1) : "#"}
                                onClick={(e) => {
                                    if (current <= 1) {
                                        e.preventDefault();
                                        return;
                                    }
                                    onChange({ page: current - 1, pageSize });
                                }}
                                aria-label="Previous page"
                            >
                                Previous
                            </Link>

                            {pages.map((p, i) =>
                                p === "…" ? (
                                    <span key={`ellipsis-${i}`} className="px-2 text-gray-500">
                                        …
                                    </span>
                                ) : (
                                    <Link
                                        key={p}
                                        className={`${baseBtn} ${p === current ? active : neutral}`}
                                        href={getHref(p)}
                                        onClick={() => {
                                            onChange({ page: p, pageSize });
                                        }}
                                        aria-current={p === current ? "page" : undefined}
                                    >
                                        {p}
                                    </Link>
                                )
                            )}

                            <Link
                                className={`${baseBtn} ${neutral} ${current >= totalPages ? "pointer-events-none opacity-50" : ""}`}
                                href={current < totalPages ? getHref(current + 1) : "#"}
                                onClick={(e) => {
                                    if (current >= totalPages) {
                                        e.preventDefault();
                                        return;
                                    }
                                    onChange({ page: current + 1, pageSize });
                                }}
                                aria-label="Next page"
                            >
                                Next
                            </Link>
                        </div>
                    </div>
                </div>
                : null
        }
    </>);
}
