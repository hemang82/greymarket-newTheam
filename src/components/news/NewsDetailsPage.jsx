"use client"
import React from 'react';
import Link from 'next/link';
import { useIPOStore } from "@/stores/useAppStore";
import { NewsCard } from "@/components/cards";

const EMPTY_ARRAY = [];

export function NewsDetailsPage({ newsItemServer, recentNews }) {
    // Try to get from store first
    const newsData = useIPOStore((s) => s.news?.data);
    const storeNews = newsData || EMPTY_ARRAY;
    const newsItem = storeNews.find(n => String(n.id) === String(newsItemServer?.id)) || newsItemServer;

    if (!newsItem) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-base-50 dark:bg-base-950">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">News not found</h1>
                    <Link href="/news" className="text-primary-600 hover:underline">Back to News</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-base-50 dark:bg-base-950 min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4 max-w-8xl">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm text-base-500 mb-8 animate-fade-in">
                    <Link href="/" className="hover:text-[#135c33]">Home</Link>
                    <span>/</span>
                    <Link href="/news" className="hover:text-[#135c33]">News</Link>
                    <span>/</span>
                    <span className="text-base-900 dark:text-white truncate max-w-[200px]">{newsItem.title}</span>
                </nav>

                <article className="animate-fade-in-up">
                    {/* Header */}
                    <header className="mb-10 text-center">
                        {newsItem.tag && (
                            <span className="inline-block px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-[#135c33] dark:text-emerald-400 text-xs font-black uppercase tracking-widest rounded-full mb-6">
                                {newsItem.tag}
                            </span>
                        )}
                        <h1 className="text-2xl md:text-3xl font-black text-base-900 dark:text-white leading-tight mb-8">
                            {newsItem.title}
                        </h1>

                        <div className="flex items-center justify-center gap-6 text-sm font-bold text-base-500 uppercase tracking-widest">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-[#135c33]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <time dateTime={newsItem.created_at}>{newsItem.created_at}</time>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-[#135c33]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>3 min read</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg mb-12 border border-base-200 dark:border-base-800">
                        <img
                            src={newsItem.news_image}
                            alt={newsItem.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="bg-white dark:bg-base-900 rounded-xl p-8 md:p-12 shadow-sm border border-base-200 dark:border-base-800">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p className="text-xl font-medium text-base-900 dark:text-white mb-8 leading-relaxed">
                                {newsItem.short_description}
                            </p>

                            <div className="text-base-700 dark:text-base-300 space-y-6 leading-relaxed text-lg">
                                {/* Using description as the main body if available */}
                                {newsItem.description ? (
                                    <div dangerouslySetInnerHTML={{ __html: newsItem.description.replace(/\n/g, '<br/>') }} />
                                ) : (
                                    <p>Detailed analysis of this news is currently being processed. Please check back shortly for full market insights.</p>
                                )}
                            </div>
                        </div>

                        {/* CTA / Source Link */}
                        {newsItem.news_url && (
                            <div className="mt-12 pt-10 border-t border-base-100 dark:border-base-800 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <h4 className="text-sm font-black text-base-900 dark:text-white uppercase tracking-wider mb-1">Source Information</h4>
                                    <p className="text-sm text-base-500">Originally published on major financial portals.</p>
                                </div>
                                <a
                                    href={newsItem.news_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-6 py-3 bg-[#135c33] hover:bg-[#0c4424] text-white font-black rounded-xl shadow-md shadow-emerald-900/10 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    Read Original Source
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        )}
                    </div>
                </article>

                {/* Back Link */}
                <div className="mt-12 text-center pb-12 border-b border-base-100 dark:border-base-800">
                    <Link
                        href="/news"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-base-200 dark:border-base-800 hover:border-[#135c33] hover:text-[#135c33] transition-all font-bold text-sm"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to All News
                    </Link>
                </div>

                {/* Related News Section */}
                {recentNews && recentNews.length > 0 && (
                    <div className="mt-16 animate-fade-in">
                        <div className="flex items-center gap-4 mb-10">
                            <h3 className="text-xl font-black text-base-900 dark:text-white uppercase tracking-wider">More Recent Updates</h3>
                            <div className="h-px flex-grow bg-base-200 dark:bg-base-800 opacity-50"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {recentNews.map((news, index) => (
                                <NewsCard key={index} {...news} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
