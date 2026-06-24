"use client"

import { PricingCard } from "#/cards";
import { useIPOStore } from "@/stores/useAppStore";
import React, { useCallback, useEffect, useState } from "react";
import CustomPagination from "../CustomPagination";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Spinner from "../common/Spinner";
import DataNotFound from "../common/DataNotFound";
import Image from "next/image";

export function PricingSection({ title, description, badge, pricing, ipoData, page, pageSize, ...rest }) {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setIPOs = useIPOStore((s) => s.setIPOs);
  const ipoListData = useIPOStore((s) => s.ipos);
  const setIPOLoader = useIPOStore((s) => s.setIpoLoader);
  // const ipoLoader = useIPOStore((s) => s.ipoLoader);

  useEffect(() => {
    // If IPO data is still loading (empty or undefined)
    if (ipoData?.length === 0 || ipoData?.results?.length === 0) {

      setIPOLoader(true);

      // Turn loader off after 1 second
      const timeout = setTimeout(() => {
        setIPOLoader(false);
      }, 5000);

      // Cleanup timeout to avoid memory leaks
      return () => clearTimeout(timeout);
    } else {
      setIPOLoader(false);
    }
  }, [ipoData, setIPOLoader]);

  useEffect(() => { (async () => { setIPOs(ipoData || {}) })() }, [ipoData, setIPOs]);

  const handlePageChange = useCallback(({ page: newPage = 1, pageSize: newSize = pageSize }) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", String(newPage));
    params.set("pageSize", String(newSize));
    // This works fine even when pathname === "/"
    router.push(`${pathname}?${params.toString()}`, { scroll: true });
  }, [router, pathname, searchParams, pageSize]);

  return (<>

    {/* {ipoLoader && <Spinner isActive={ipoLoader} message={'Please Wait...'} />} */}

    <section className="bg-base-100 dark:bg-base-900 pt-16 pb-16" {...rest}>

      <div className="mx-auto container px-2 sm:px-3 md:px-4">
        {ipoListData?.results?.length > 0 ? (() => {
          const sortedResults = [...ipoListData.results].sort((a, b) => {
            const gmpA = Number(a?.gmp ?? 0);
            const gmpB = Number(b?.gmp ?? 0);
            return gmpB - gmpA;
          });
          return (
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
              {sortedResults.map((p, i) => (
                <PricingCard ipoListData={p} key={i} />
              ))}
            </div>
          );
        })() : <>
            <DataNotFound
              title="No IPOs Available"
              description="No live or upcoming IPO data is available right now."
              // icon={
              //   <Image
              //     src="/ipo.png"
              //     alt="IPO Icon"
              //     width={60}
              //     height={60}
              //     className="opacity-80"
              //   />
              // }
            />
          </>}
      </div>

    </section>

    {
      ipoListData?.results?.length > 0 && <CustomPagination
        total={ipoListData?.count || 100}
        current={page}
        pageSize={pageSize}
        onChange={(newPage) => {
          handlePageChange(newPage);
        }} pageSizeOptions={[10, 20, 50, 100]}
      />
    }
  </>);

}