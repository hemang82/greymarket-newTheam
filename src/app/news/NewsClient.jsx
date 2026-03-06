"use client"
import React, { useCallback, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from 'next/link';
import { useIPOStore } from "@/stores/useAppStore";
import { NewsCard } from "@/components/cards";
import CustomPagination from "@/components/CustomPagination";

const EMPTY_ARRAY = [];

export default function NewsClient({ newsList, pageSize, page }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const setNews = useIPOStore((s) => s.setNews);
    const newslistZustend = useIPOStore((s) => s.news);

    useEffect(() => {
        if (newsList) {
            setNews(newsList);
        }
    }, [newsList, setNews]);

    const handlePageChange = useCallback(({ page: newPage = 1, pageSize: newSize = pageSize }) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", String(newPage));
        params.set("pageSize", String(newSize));
        router.push(`${pathname}?${params.toString()}`, { scroll: true });
    }, [router, pathname, searchParams, pageSize]);

    const data = newslistZustend?.data || EMPTY_ARRAY;
    const featuredNews = data[0];
    const otherNews = data.slice(1);

    return (
        <div className="bg-base-50 dark:bg-base-950 min-h-screen pb-20">

            <section className="relative pt-32 pb-24 overflow-hidden bg-white dark:bg-base-900 border-b border-base-200 dark:border-base-800">
                {/* Background Glows */}
                <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#135c33] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                </div>

                <div className="container relative mx-auto px-4">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center justify-start gap-2 text-sm text-base-500 mb-8 animate-fade-in font-medium">
                        <Link href="/" className="hover:text-[#135c33] transition-colors">Home</Link>
                        <span className="text-base-300">/</span>
                        <span className="text-base-900 dark:text-white font-bold">News</span>
                    </nav>

                    <div className="text-center">

                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-[#135c33] dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800 animate-fade-in shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#135c33]"></span>
                            </span>
                            <span className="text-xs font-black tracking-widest uppercase">IPO Market Feed</span>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-black tracking-tight text-base-900 dark:text-white mb-6 leading-tight">
                            Latest <span className="text-[#135c33]">IPO Trends</span> & Market Insights<br />
                            Delivered Fresh Every Day
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg text-base-600 dark:text-base-400 mb-8">
                            Get the latest updates on upcoming IPOs, DRHP filings, IPO GMP, and listing details.
                            Follow expert insights and market trends from the Indian stock market.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 -mt-12">
                {/* Featured News Section Label */}
                {/* {featuredNews && (
                    <div className="flex items-center gap-3 mb-6 animate-fade-in">
                        <span className="w-10 h-1 bg-[#135c33] rounded-full"></span>
                        <h2 className="text-sm font-black text-[#135c33] uppercase tracking-[0.2em]">Primary Highlight</h2>
                    </div>
                )} */}
                {/* Featured News */}
                {featuredNews && (
                    <div className="mb-20 animate-fade-in-up">
                        <article className="group relative flex flex-col lg:flex-row bg-white dark:bg-base-900 rounded-xl overflow-hidden shadow-lg border border-base-200 dark:border-base-800 hover:shadow-emerald-500/5 transition-all duration-500">
                            <div className="lg:w-3/5 relative overflow-hidden aspect-[16/9] lg:aspect-auto">
                                <Link href={`/news/${featuredNews.id}`} className="block w-full h-full">
                                    <img
                                        src={featuredNews.news_image}
                                        alt={featuredNews.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden"></div>
                                </Link>
                                {featuredNews.tag && (
                                    <span className="absolute top-6 left-6 px-5 py-2 bg-[#135c33] text-white text-[11px] font-black uppercase tracking-widest rounded-lg shadow-md shadow-black/10">
                                        {featuredNews.tag}
                                    </span>
                                )}
                            </div>
                            <div className="lg:w-2/5 p-8 lg:p-14 flex flex-col justify-center">
                                <div className="flex items-center gap-2 mb-6 text-[12px] font-black text-[#135c33] uppercase tracking-widest">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <time dateTime={featuredNews.created_at}>{featuredNews.created_at}</time>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-black text-base-900 dark:text-white mb-6 leading-tight group-hover:text-[#135c33] transition-colors">
                                    <Link href={`/news/${featuredNews.id}`}>
                                        {featuredNews.title}
                                    </Link>
                                </h2>
                                <p className="text-base-600 dark:text-base-300 text-lg mb-10 line-clamp-4 leading-relaxed">
                                    {featuredNews.short_description}
                                </p>
                                <div className="mt-auto">
                                    <Link
                                        href={`/news/${featuredNews.id}`}
                                        className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#135c33] hover:bg-[#0c4424] text-white font-bold rounded-2xl shadow-md shadow-emerald-900/10 transition-all duration-300 hover:-translate-y-0.5"
                                    >
                                        Read Analysis
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    </div>
                )}

                {/* News Grid Section Label */}
                <div className="flex flex-col gap-2 mb-10 animate-fade-in">
                    <div className="flex items-center gap-4">
                        <h3 className="text-2xl font-black text-base-900 dark:text-white uppercase tracking-tight">Recent Market Feed</h3>
                        <div className="h-px flex-grow bg-base-200 dark:bg-base-800 opacity-50"></div>
                    </div>
                    <p className="text-base-500 dark:text-base-400 font-medium text-sm">Explore the latest chronological updates from the stock market</p>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {otherNews.map((news, index) => (
                        <div key={index} className={`animate-fade-in-up`} style={{ animationDelay: `${(index % 6) * 100}ms` }}>
                            <NewsCard {...news} />
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-24">
                    <CustomPagination
                        total={newsList?.count || 0}
                        current={page}
                        pageSize={pageSize}
                        onChange={handlePageChange}
                        className="shadow-md ring-[#135c33]/5"
                    />
                </div>
            </div>

        </div>
    );
}