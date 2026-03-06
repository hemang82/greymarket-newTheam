"use client"
import Link from 'next/link';
import { SectionHeading } from "#/SectionHeading";
import { NewsCard } from "#/cards";
import { useIPOStore } from "@/stores/useAppStore";
import { useCallback, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CustomPagination from "../CustomPagination";

export function TestimonialSection({ title, description, badge, testimonials, button, paginationShow, newsList, page, pageSize, ...rest }) {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setNews = useIPOStore((s) => s.setNews);
  const newslistZustend = useIPOStore((s) => s.news);

  useEffect(() => { (async () => { setNews(newsList || {}) })() }, [newsList, setNews]);

  const handlePageChange = useCallback(({ page: newPage = 1, pageSize: newSize = pageSize }) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", String(newPage));
    params.set("pageSize", String(newSize));

    // This works fine even when pathname === "/"
    router.push(`${pathname}?${params.toString()}`, { scroll: true });
  }, [router, pathname, searchParams, pageSize]);

  return (
    <section
      className={`bg-base-100 dark:bg-base-900 py-16 ${!paginationShow && ''}`}
      {...rest}
    >
      <div className="container px-4 mx-auto">
        <SectionHeading
          align="center"
          title={title}
          description={description}
          badge={badge}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-12">
          {newslistZustend?.data?.length > 0 &&
            newslistZustend?.data.map((item, index) => (
              <NewsCard key={index} {...item} />
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
            :
            newslistZustend?.data?.length > 0 ? (
              <div className="text-center mt-12 animate-fade-in-up">
                <Link
                  href="/news"
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#135c33] hover:bg-[#0c4424] text-white font-bold rounded-xl shadow-md shadow-emerald-900/10 transition-all duration-300 hover:-translate-y-0.5"
                >
                  View More News
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ) : null
        }

      </div>
    </section>
  );
}
