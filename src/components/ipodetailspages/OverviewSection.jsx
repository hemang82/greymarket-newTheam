// components/OverviewSection.jsx

import { formatDateTime, formatIndianPrice } from "@/app_config/CommonFunction";
import { DateFormats } from "@/app_config/CommonVariable";
import { formatGmpValue } from "@/app_config/IPOCalculation";
import Image from "next/image";
import { Label } from "recharts";

const formatValue = (...values) => {
    const isValid = (v) => {
        if (v == null) return false;                       // null / undefined
        const s = String(v).trim();
        if (!s) return false;                              // empty string
        return !/^0+(\.0+)?$/.test(s);                     // 0, 0.0, 0.00
    };

    const filtered = values.filter(isValid);
    return filtered.length ? filtered.join(" ") : "-";
};

export default function OverviewSection({ id = "overview", ipoDetailsData }) {

    const metrics = [
        { label: "Start Date", value: `${formatDateTime(ipoDetailsData?.start_date, DateFormats?.DATE_DD_MM_YYYY)}` },
        { label: "End Date", value: `${formatDateTime(ipoDetailsData?.end_date, DateFormats?.DATE_DD_MM_YYYY)}` },
        { label: "Listing Date", value: `${formatDateTime(ipoDetailsData?.listing_date, DateFormats?.DATE_DD_MM_YYYY)}` },
        { label: "Current Price", value: `${formatIndianPrice(ipoDetailsData?.listed_price)}` },
        { label: "GMP", value: `${formatGmpValue(ipoDetailsData)}`, customClass: 'gmp_color' },
        { label: "Lot Size", value: `${ipoDetailsData?.bid_lot} Shares` },
        { label: "Subscription", value: `${ipoDetailsData?.subscription} Times` },
        { label: "Face Value", value: `${ipoDetailsData?.face_value}` },
        { label: "Listing at", value: `${ipoDetailsData?.listing_at_group}` },
        { label: "Issue Price", value: `${ipoDetailsData?.price_range}` },
        { label: "Pre Issue", value: `${formatIndianPrice(ipoDetailsData?.pre_issue_share_holding)}` },
        { label: "Post Issue", value: `${formatIndianPrice(ipoDetailsData?.post_issue_share_holding)}` },
        {
            label: "Issue Size", value: formatValue(
                ipoDetailsData?.issue_size ? formatIndianPrice(ipoDetailsData?.issue_size) : null,
                ipoDetailsData?.issue_amount ? `(aggregating up to ${ipoDetailsData?.issue_amount} Cr)` : null
            )
        },
        {
            label: "Fresh Issue", value: formatValue(ipoDetailsData?.fresh_issue_value ? formatIndianPrice(ipoDetailsData?.fresh_issue_value) : null,
                ipoDetailsData?.fresh_issue_size ? `(aggregating up to ${ipoDetailsData?.fresh_issue_size} Cr)` : null)
        },
        {
            label: "Offer For Sale", value: formatValue(ipoDetailsData?.offer_of_sale ? formatIndianPrice(ipoDetailsData?.offer_of_sale) : null,
                +ipoDetailsData?.offer_of_sale_value ? `(aggregating up to ${ipoDetailsData?.offer_of_sale_value} Cr)` : null
            )
        },

    ];

    const breakBeforeBracket = (text = "") => {
        return text.replace(/\s*\(/, "<br/>(");
    };

    console.log('ipoDetailsData', ipoDetailsData);

    return (
        <section id={id} className="scroll-mt-24">
            <div className="bg-white dark:bg-base-950 rounded-2xl shadow-sm ring-1 ring-gray-200 dark:ring-base-800 p-4 sm:p-6 md:p-8">
                {/* Header */}
                {/* <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
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
                    <div className="flex flex-wrap gap-3">
                        {ipoDetailsData?.ipo_doc_link?.length > 0 && ipoDetailsData?.ipo_doc_link.map((a, i) => (
                            <button
                                key={i}
                                onClick={() => window.open(a.link, "_blank")}
                                className={[
                                    "h-9 rounded-lg px-3 text-sm font-medium transition uppercase",
                                    a.variant === "ghost"
                                        ? "border border-gray-200 dark:border-base-800 bg-white/60 dark:bg-base-950/60 hover:bg-gray-50 dark:hover:bg-base-900"
                                        : "border border-gray-200 dark:border-base-800 bg-gray-50 dark:bg-base-900 hover:bg-gray-100 dark:hover:bg-base-800"
                                ].join(" ")}
                            >
                                {a.lable}
                            </button>
                        ))}
                    </div>
                </div> */}

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Left: logo + title + website */}
                    <div className="flex items-start md:items-center gap-3 min-w-0">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            {ipoDetailsData?.ipo_image ? (
                                <div className="w-16 h-16 rounded-lg overflow-hidden border border-base p-1 bg-gray-50 dark:bg-base-900 flex items-center justify-center">
                                    <Image
                                        src={ipoDetailsData?.ipo_image}
                                        alt={ipoDetailsData?.company_name || "Company logo"}
                                        width={65}
                                        height={70}
                                        className="object-contain"
                                        unoptimized
                                        priority={false}
                                    />
                                </div>
                            ) : (
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-indigo-50 dark:bg-indigo-900 flex items-center justify-center">
                                    <span className="text-lg font-semibold text-indigo-700 dark:text-indigo-200">
                                        {ipoDetailsData?.company_name}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Title + website */}
                        <div className="min-w-0">

                            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 ">
                                {ipoDetailsData?.company_name}
                            </h1>

                            <a href={ipoDetailsData?.company_address?.Website} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 dark:text-indigo-400" >
                                <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80" aria-hidden>
                                    <path fill="currentColor" d="M10.9 2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6.02a1 1 0 1 0-2 0V17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6.02a1 1 0 1 0-.12-2Z" />
                                    <path fill="currentColor" d="M21 3h-6a1 1 0 1 0 0 2h3.59l-7.3 7.3a1 1 0 1 0 1.42 1.4L20 6.41V10a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1Z" />
                                </svg>
                                Company website
                            </a>
                        </div>
                    </div>

                    {/* Right: action buttons */}
                    <div className="flex flex-wrap gap-3">
                        {ipoDetailsData?.ipo_doc_link?.length > 0 &&
                            ipoDetailsData.ipo_doc_link.map((a, i) => (
                                <button
                                    key={i}
                                    onClick={() => window.open(a.link, "_blank")}
                                    className={[
                                        "h-9 rounded-lg px-3 text-sm font-medium transition uppercase",
                                        a.variant === "ghost"
                                            ? "border border-gray-200 dark:border-base-800 bg-white/60 dark:bg-base-950/60 hover:bg-gray-50 dark:hover:bg-base-900"
                                            : "border border-gray-200 dark:border-base-800 bg-gray-50 dark:bg-base-900 hover:bg-gray-100 dark:hover:bg-base-800"
                                    ].join(" ")}
                                >
                                    {a.lable}
                                </button>
                            ))}
                    </div>
                </div>

                {/* Content grid */}
                <div className="mt-6 grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-12">
                        <div className="rounded-xl ring-1 ring-gray-200 dark:ring-base-800 p-4 sm:p-6">
                            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                {metrics.map((m, idx) => (
                                    <div key={idx} className="flex flex-col gap-1">
                                        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium ">{m.label}</span>
                                        <span className={[`text-base text-sm font-semibold text-gray-900 dark:text-gray-100 break-words break-all whitespace-normal ${m.customClass ? m.customClass : ""}`, m.highlight ? "bg-gray-50 dark:bg-base-900 rounded-md px-3 py-2" : ""].join(" ")}
                                            dangerouslySetInnerHTML={{ __html: m.label != "GMP" ? breakBeforeBracket(m.value) : m.value }}
                                        />
                                        {/* {m.value} */}

                                        {/* </span> */}
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
                    {/* <div className="col-span-12 lg:col-span-4 space-y-6">
                        <div className="rounded-xl ring-1 ring-gray-200 dark:ring-base-800 p-5">
                            <h3 className="text-sm font-semibold tracking-wide text-gray-900 dark:text-gray-100">
                                ABOUT
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300 line-clamp-[8]">
                                {ipoDetailsData?.about_the_company}
                            </p>
                        </div> */}

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

                    {/* </div> */}
                </div>
            </div>
        </section>
    );
}
