"use client"
import { PricingCard } from "#/cards";
import { useIPOStore } from "@/stores/useAppStore";
import React, { useCallback, useEffect, useState } from "react";
import CustomPagination from "../CustomPagination";
import { useRouter, useSearchParams, usePathname } from "next/navigation";


export function PricingSection({ title, description, badge, pricing, ipoData, page, pageSize, ...rest }) {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setIPOs = useIPOStore((s) => s.setIPOs);
  const ipoListData = useIPOStore((s) => s.ipos);

  useEffect(() => { (async () => { setIPOs(ipoData || {}) })() }, [ipoData, setIPOs]);

  const handlePageChange = useCallback(({ page: newPage = 1, pageSize: newSize = pageSize }) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", String(newPage));
    params.set("pageSize", String(newSize));

    // This works fine even when pathname === "/"
    router.push(`${pathname}?${params.toString()}`, { scroll: true });
  }, [router, pathname, searchParams, pageSize]);

  return (<>

    <section className="bg-base-100 dark:bg-base-900 py-10" {...rest}>
      <div className="mx-auto max-w-screen-xl px-2 sm:px-3 md:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {ipoListData?.results?.length > 0 && ipoListData?.results?.map((p, i) => (
            <PricingCard ipoListData={p} key={i} />
          ))}
        </div>
      </div>
    </section>

    <CustomPagination
      total={ipoListData?.count || 100}
      current={page}
      pageSize={pageSize}
      onChange={(newPage) => {
        handlePageChange(newPage);
      }} pageSizeOptions={[10, 20, 50, 100]}
    />

  </>);
}