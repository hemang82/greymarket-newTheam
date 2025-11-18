"use client"
/* eslint-disable @next/next/no-img-element */

import { SectionHeading } from "#/SectionHeading";
import { TestimonialCard } from "#/cards";
import { useIPOStore } from "@/stores/useAppStore";
import { useCallback, useEffect } from "react";
import { Button } from "../base/Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CustomPagination from "../CustomPagination";

export function TestimonialSection({ title, description, badge, testimonials, button, paginationShow, newsList, page, pageSize, ...rest }) {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setNews = useIPOStore((s) => s.setNews);
  const newslistZustend = useIPOStore((s) => s.news);

  useEffect(() => { (async () => { setNews(newsList || {}) })() }, [newsList, setNews]);

  console.log('newslistZustend', newslistZustend);

  const handleNavigation = (data) => {
    router.push('/news')
  }

  const handlePageChange = useCallback(({ page: newPage = 1, pageSize: newSize = pageSize }) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", String(newPage));
    params.set("pageSize", String(newSize));

    // This works fine even when pathname === "/"
    router.push(`${pathname}?${params.toString()}`, { scroll: true });
  }, [router, pathname, searchParams, pageSize]);

  return (
    <section
      className={`bg-base-100 dark:bg-base-900 py-10   ${!paginationShow && 'border-b'}`}
      {...rest}
    >
      <div className="container px-4 mx-auto">
        <SectionHeading
          align="center"
          title={title}
          description={description}
          badge={badge}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10">
          {newslistZustend?.results?.length > 0 &&
            newslistZustend?.results.map((item, index) => (
              <TestimonialCard key={index} {...item} />
            ))}
        </div>
        {
          paginationShow ? <>
            <CustomPagination
              total={newsList?.count || 10}
              current={page}
              pageSize={pageSize}
              onChange={(newPage) => {
                handlePageChange(newPage);
              }}
              pageSizeOptions={[20, 50, 100]}
            />
          </>
            : <div className="text-center mt-10">
              <Button label={'View All  -> '} color={'dark'} onClick={handleNavigation} className={'py-2'} />
            </div>
        }

      </div>
    </section>
  );
}
