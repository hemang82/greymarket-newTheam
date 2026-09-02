"use client";

import React, { useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { ListedIpoCard } from "@/components/cards";
import DataNotFound from "@/components/common/DataNotFound";
import CustomPagination from "@/components/CustomPagination";
import ListedIpoContentSection from "@/components/listed-ipo/ListedIpoContentSection";
import ListedIpoFaqSection from "@/components/listed-ipo/ListedIpoFaqSection";
import { cn } from "@/lib/utils";

export default function ListedIpoClientPage({
  initialIpos = [],
  totalCount = 0,
  page = 1,
  pageSize = 40,
  currentType = "all",
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleTypeChange = useCallback(
    (newType) => {
      const params = new URLSearchParams(searchParams.toString());
      if (newType === "all") {
        params.delete("type");
      } else {
        params.set("type", newType);
      }
      params.set("page", "1");
      router.push(`${pathname}?${params.toString()}`, { scroll: true });
    },
    [router, pathname, searchParams]
  );

  const handlePageChange = useCallback(
    ({ page: newPage = 1, pageSize: newSize = pageSize }) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", String(newPage));
      params.set("pageSize", String(newSize));
      router.push(`${pathname}?${params.toString()}`, { scroll: true });
    },
    [router, pathname, searchParams, pageSize]
  );

  const categories = [
    { id: "all", label: "All" },
    { id: "mainboard", label: "Mainboard" },
    { id: "sme", label: "SME" },
  ];

  return (
    <>
      <section className="bg-base-100 dark:bg-base-900 pt-8 pb-16">
        <div className="mx-auto container px-2 sm:px-3 md:px-4 space-y-6">
          {/* Simple Tab Filters: All, Mainboard, SME */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isActive = currentType === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleTypeChange(cat.id)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition cursor-pointer border",
                    isActive
                      ? "bg-[#135c33] border-[#135c33] text-white shadow-sm"
                      : "bg-white dark:bg-base-950 border-base-200 dark:border-base-800 text-base-600 dark:text-base-400 hover:border-base-300 dark:hover:border-base-700 hover:text-base-900 dark:hover:text-base-100"
                  )}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Cards Grid Matching Homepage */}
          {initialIpos?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
              {initialIpos.map((p, i) => (
                <ListedIpoCard ipoListData={p} key={p?.symbol || i} />
              ))}
            </div>
          ) : (
            <DataNotFound
              title="No Listed IPOs Available"
              description="No listed IPO data found for the selected category."
            />
          )}

          {/* Pagination */}
          {totalCount > pageSize && (
            <div className="pt-4">
              <CustomPagination
                total={totalCount}
                current={page}
                pageSize={pageSize}
                onChange={(newPage) => {
                  handlePageChange(newPage);
                }}
                pageSizeOptions={[10, 20, 40, 60, 100]}
              />
            </div>
          )}

          {/* Guide & FAQs */}
          <ListedIpoContentSection />
          <ListedIpoFaqSection />
        </div>
      </section>
    </>
  );
}
