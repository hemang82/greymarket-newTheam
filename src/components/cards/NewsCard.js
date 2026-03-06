/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export function NewsCard({ id, title, news_image, news_url, short_description, created_at, tag, className }) {
    const detailsUrl = `/news/${id}`;

    return (
        <article className={`group flex flex-col bg-white dark:bg-base-950 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-base-200 dark:border-base-800 ${className}`}>
            {/* Image Container */}
            <div className="relative aspect-[16/9] overflow-hidden">
                <Link href={detailsUrl} className="block w-full h-full">
                    <img
                        src={news_image || '/placeholder-news.jpg'}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                    />
                </Link>
                {tag && (
                    <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-[#135c33] text-white rounded-md shadow-sm">
                            {tag}
                        </span>
                    </div>
                )}
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-grow p-5">
                {/* Date */}
                <div className="flex items-center gap-2 mb-3 text-[11px] font-bold text-base-500 dark:text-base-400 uppercase tracking-tight">
                    <svg className="w-3.5 h-3.5 text-[#135c33]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <time dateTime={created_at}>{created_at}</time>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-bold leading-tight text-base-900 dark:text-white line-clamp-2 transition-colors duration-300 group-hover:text-[#135c33]">
                    <Link href={detailsUrl}>
                        {title}
                    </Link>
                </h3>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-base-600 dark:text-base-300 line-clamp-3">
                    {short_description}
                </p>

                {/* Footer/CTA */}
                <div className="mt-auto pt-4 border-t border-base-100 dark:border-base-800 flex justify-between items-center">
                    <Link
                        href={detailsUrl}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#135c33] hover:underline decoration-2 underline-offset-4 transition-all group/link"
                    >
                        Read More
                        <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    );
}
