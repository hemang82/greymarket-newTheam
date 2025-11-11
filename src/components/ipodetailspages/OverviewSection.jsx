// components/OverviewSection.jsx
"use client";

import { formatIndianPrice } from "@/app_config/CommonFunction";
import { formatGmpValue } from "@/app_config/IPOCalculation";

export default function OverviewSection({ id = "overview", ipoDetailsData }) {
    const metrics = [
        { label: "Start Date", value: `${ipoDetailsData?.start_date}` },
        { label: "End Date", value: `${ipoDetailsData?.end_date}` },
        { label: "Listing Date", value: `${ipoDetailsData?.listing_date}` },
        { label: "Current Price", value: `${formatIndianPrice(ipoDetailsData?.listed_price)}` },
        { label: "Issue Price", value: `${ipoDetailsData?.price_range}` },
        { label: "GMP", value: `${formatGmpValue(ipoDetailsData)}` },
        { label: "Lot Size", value: `${ipoDetailsData?.bid_lot} Shares` },
        { label: "Subscription", value: `${ipoDetailsData?.subscription}` },
        { label: "Face Value", value: `${ipoDetailsData?.face_value}` },
        { label: "Listing at", value: `${ipoDetailsData?.listing_at_group}` },
        { label: "Pre Issue", value: `${formatIndianPrice(ipoDetailsData?.pre_issue_share_holding)}` },
        { label: "Post Issue", value: `${formatIndianPrice(ipoDetailsData?.post_issue_share_holding)}` },
    ];

    return (
        <section id={id} className="scroll-mt-24">
            <div className="bg-white dark:bg-base-950 rounded-2xl shadow-sm ring-1 ring-gray-200 dark:ring-base-800 p-4 sm:p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                            {ipoDetailsData?.company_name}
                        </h1>
                        <a href={ipoDetailsData?.company_address?.Website} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 dark:text-indigo-400" >
                            <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80">
                                <path fill="currentColor" d="M10.9 2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6.02a1 1 0 1 0-2 0V17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6.02a1 1 0 1 0-.12-2Z" /><path fill="currentColor" d="M21 3h-6a1 1 0 1 0 0 2h3.59l-7.3 7.3a1 1 0 1 0 1.42 1.4L20 6.41V10a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1Z" />
                            </svg>
                            Company website
                        </a>
                    </div>
                    {/* <div className="flex flex-wrap gap-3">
                        {actions.map((a, i) => (
                            <button
                                key={i}
                                className={[
                                    "h-9 rounded-lg px-3 text-sm font-medium transition",
                                    a.variant === "ghost"
                                        ? "border border-gray-200 dark:border-base-800 bg-white/60 dark:bg-base-950/60 hover:bg-gray-50 dark:hover:bg-base-900"
                                        : "border border-gray-200 dark:border-base-800 bg-gray-50 dark:bg-base-900 hover:bg-gray-100 dark:hover:bg-base-800"
                                ].join(" ")}
                            >
                                {a.label}
                            </button>
                        ))}
                    </div> */}
                </div>

                {/* Content grid */}
                <div className="mt-6 grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-8">
                        <div className="rounded-xl ring-1 ring-gray-200 dark:ring-base-800 p-4 sm:p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {metrics.map((m, idx) => (
                                    <div key={idx} className="flex flex-col gap-1">
                                        <span className="text-[13px] text-gray-500 dark:text-gray-400">{m.label}</span>
                                        <span
                                            className={["text-base font-semibold text-gray-900 dark:text-gray-100",
                                                m.highlight ? "bg-gray-50 dark:bg-base-900 rounded-md px-3 py-2" : ""
                                            ].join(" ")}
                                        >
                                            {m.value}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Add ratio row */}
                            {/* <div className="mt-5">
                                <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                                    Add ratio to table
                                </label>
                                <div className="flex items-center gap-3">
                                    <input
                                        placeholder="eg. Promoter holding"
                                        className="w-full rounded-lg border border-gray-200 dark:border-base-800 bg-white dark:bg-base-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30"
                                    />
                                    <button className="text-sm text-indigo-600 hover:text-indigo-700 dark:text-indigo-400">
                                        • Edit Ratios
                                    </button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    {/* Right: about + key points */}
                    <div className="col-span-12 lg:col-span-4 space-y-6">
                        <div className="rounded-xl ring-1 ring-gray-200 dark:ring-base-800 p-5">
                            <h3 className="text-sm font-semibold tracking-wide text-gray-900 dark:text-gray-100">
                                ABOUT
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300 line-clamp-[8]">
                                {ipoDetailsData?.about_the_company}
                            </p>
                        </div>

                        {/* <div className="rounded-xl ring-1 ring-gray-200 dark:ring-base-800 p-5">
                            <h3 className="text-sm font-semibold tracking-wide text-gray-900 dark:text-gray-100">
                                KEY POINTS
                            </h3>
                            <ul className="mt-3 space-y-2">
                                {keyPoints.map((k, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                        <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                                        <span>{k}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="mt-3 text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400">
                                Read more →
                            </button>
                        </div> */}

                    </div>
                </div>
            </div>
        </section>
    );
}
