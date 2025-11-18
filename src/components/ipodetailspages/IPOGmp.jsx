"use client";

import { cleanHTMLContent, formatDateTime, formatIndianNumber, formatIndianPrice, formatToFixed } from "@/app_config/CommonFunction";
import ResponsiveTable from "../ResponsiveTable";
import { DateFormats } from "@/app_config/CommonVariable";
import { checkingNonZeroValueDistributionTable } from "@/app_config/IPOCalculation";

function formatINR(n) {
    if (n === null || n === undefined || n === "") return "—";
    const num = Number(n);
    if (Number.isNaN(num)) return n;
    return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(num);
}

const toNum = (v) => {
    const n = Number(v);
    return Number.isFinite(n) ? n : 0;
};

export function GmpTrendTable({ title = "", rows = [] }) {

    const tableColumns = [
        { key: "last_update", label: "Last Updated" },
        { key: "ipo_price", label: "IPO Price" },
        { key: "gmp", label: "GMP" },
        {
            key: "estimate",
            label: "Estimated Listing Price",
            render: (v, row) => (
                <span className="flex items-center gap-2">
                    <span className="font-medium">{formatINR(v)}</span>
                    {row.estimated_pct ? (<span className="text-gray-500 dark:text-gray-400">({Number(row.estimated_pct).toFixed(2)}%)</span>) : null}
                </span>
            ),
        },
    ];

    function transformIPOData(data) {
        if (data) {
            const result = [...data].reverse().map((item, index, arr) => {
                const currentGmp = parseFloat(item.gmp);
                const prevGmp = index > 0 ? parseFloat(arr[index - 1].gmp) : null;
                let trend = null;
                if (prevGmp !== null) {
                    if (currentGmp > prevGmp) trend = "green";
                    else if (currentGmp < prevGmp) trend = "red";
                }
                return {
                    ...item,
                    trend,
                };
            }).reverse();

            return result?.map(item => {
                const gmpValue = parseFloat(item.gmp) || 0; // Convert GMP to number
                const ipoPrice = item.ipo_price ? parseFloat(item.ipo_price) : 0; // Default IPO price
                const estimatedPrice = ipoPrice + gmpValue; // Calculate estimated listing price
                const percentageChange = ipoPrice > 0 ? ((estimatedPrice - ipoPrice) / ipoPrice * 100).toFixed(2) : '0.00';
                return {
                    gmp_date: item.gmp_date, // Convert to DD-MM-YYYY
                    ipo_price: formatIndianPrice(ipoPrice),
                    gmp: `${formatIndianPrice(gmpValue)}`,
                    sub_2: '--',
                    trend: item.trend,
                    estimate: `${formatIndianPrice(estimatedPrice)} (${percentageChange}%)`,
                    // last_update: new Date(item.updated_at).toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }).replace(',', ''),
                    last_update: formatDateTime(item.updated_at, DateFormats?.DATE_DD_MMM_YYYY_TIME_24H),

                };
            });
        } else {
            return []
        }
    }

    return (
        <ResponsiveTable
            title={title}
            columns={tableColumns}
            rows={transformIPOData(rows)}
            mobileMode="scroll"        // default, mobile shows scrollable table
            columnMinWidth={40}       // smaller width per column
        />
    );
}

export function FinancialTable({ title = "", rows = [] }) {

    const tableColumns = [
        { key: `metric`, label: "Period Ended" },
        ...(rows?.slice(1) || []).map(
            (row, index) => ({
                key: `col${index}`,
                label: row.period_ended,
            })
        ),
    ];
    const transposeFinancialData = (data) => {
        if (!data || data.length < 2) return [];

        const headers = data[0]; // first object = labels
        const rows = data.slice(1); // remaining = data rows

        let datas = Object.keys(headers)
            .map((key) => {
                const row = {
                    metric: headers[key],
                    ...rows.reduce((acc, row, index) => {
                        acc[`col${index}`] = row[key];
                        return acc;
                    }, {}),
                };

                return row;
            })
            .filter((row) => {
                // check if all col values are numeric
                const values = Object.entries(row)
                    .filter(([k]) => k.startsWith("col"))
                    .map(([_, v]) => v);

                return values.every((v) => !isNaN(parseFloat(v)));
            });
        datas = [
            ...datas.filter(item => item.metric !== "Total Borrowing"),
            ...datas.filter(item => item.metric === "Total Borrowing")
        ];

        return datas

    };

    return (
        <ResponsiveTable
            title={title}
            columns={tableColumns}
            rows={transposeFinancialData(rows)}
            mobileMode="scroll"
            columnMinWidth={40}
        />
    );
}

export function KeyPerfomanceTable({ title = "", rows = [] }) {

    const tableColumns = [
        { key: `metric`, label: "KPI" },
        ...(rows?.slice(1) || []).map(
            (row, index) => ({
                key: `col_${index + 1}`,
                label: row.kpi,
            })
        ),
    ];

    const transformIPOData = (data) => {
        if (!data || data.length < 2) return [];

        // First row = header names
        const header = data[0]; // {eps:"EPS", kpi:"KPI", ...}
        const body = data.slice(1); // actual values

        // All keys except "kpi" (because kpi is year/label)
        const keys = Object.keys(header).filter((k) => k !== "kpi");

        // Build transposed rows
        return keys.map((key) => {
            let row = { metric: header[key] }; // e.g. "ROE"
            body.forEach((item, idx) => {
                row[`col_${idx + 1}`] = item[key];
            });
            return row;
        });
    };

    return (
        <ResponsiveTable
            title={title}
            columns={tableColumns}
            rows={transformIPOData(rows)}
            mobileMode="scroll"
            columnMinWidth={40}
        />
    );
}

export function SubscriptionDetailsTable({ title = "", rows = [] }) {

    const tableColumns = [
        { key: "category", label: "Category" },
        { key: "Shares_Offered", label: "Offered" },
        { key: "Shares_bid", label: "Applied" },
        { key: "Subscription", label: "Times" },
    ];

    const transformIPOData = (data) => {

        if (!Array.isArray(data) || data.length === 0) return [];

        const rows = data.map(({ category, applied, offered, total_amount }) => {
            const off = +offered || 0;
            const app = +applied || 0;
            return {
                category: category || "",
                Subscription: off ? `${(app / off).toFixed(2)}x` : "0.00x",
                Shares_Offered: off.toLocaleString("en-IN"),
                Shares_bid: app.toLocaleString("en-IN"),
                amount: formatIndianPrice(+total_amount || 0),
                // meta for totals
                _off: off,
                _app: app,
                _include: String(category || "").toLowerCase() !== "nib" && off > 0 && app > 0,
            };
        });

        const totals = rows.reduce((a, r) => (r._include ? { off: a.off + r._off, app: a.app + r._app } : a), { off: 0, app: 0 });

        const totalAmount = data.reduce(
            (s, { total_amount }) => s + (+total_amount || 0),
            0
        );

        const totalRow = {
            category: "Total",
            Subscription: totals.off ? `${(totals.app / totals.off).toFixed(2)}x` : "0.00x",
            Shares_Offered: formatIndianNumber(totals.off),
            Shares_bid: formatIndianNumber(totals.app),
            amount: formatIndianPrice(totalAmount),
        };

        // strip meta
        return [...rows.map(({ _off, _app, _include, ...r }) => r), totalRow];
    }

    console.log('SubscriptionDetailsTable', rows);

    return (
        <ResponsiveTable
            title={title}
            columns={tableColumns}
            rows={transformIPOData(rows)}
            mobileMode="scroll"
            columnMinWidth={40}
        />
    );
}

export function SubscriptionDemandTable({ title = "", rows = [] }) {
    const tableColumns = [
        { key: "category", label: "Category" },
        {
            key: "offered", label: "Offered",
            render: (text) => (
                formatIndianPrice(text)
            ),
        },
        { key: "demand", label: "Demand" },
        { key: "times", label: "Times" },
    ];

    const transformIPOData = (data) => {

        if (!Array.isArray(data) || data.length === 0) return [];

        let formattedDataReservation = data?.map(item => ({
            category: item?.category,
            demand: Number(item?.demand) || 0, // Ensure numeric values
            offered: Number(item?.offered) || 0,
            times: item?.offered ? (Number(item.demand) / Number(item.offered)).toFixed(2) : "0.00" // Calculate times per row
        }))

        const totalReservation = formattedDataReservation?.length > 0
            ? formattedDataReservation.reduce((total, item, index) => {
                if (item?.category === "NIB" || item?.offered === 0 || item?.demand === 0 || item?.times === 0) {
                    return {
                        demand: total.demand,
                        offered: total.offered,
                        times: total.times,
                    };
                } else {
                    return {
                        demand: total.demand + (Number(item.demand) || 0),
                        offered: total.offered + (Number(item.offered) || 0),
                        times: ((total.demand + (Number(item.demand) || 0)) / (total.offered + (Number(item.offered) || 0))) || 0,
                    };
                }
            }, { demand: 0, offered: 0, times: 0 })
            : { demand: 0, offered: 0, times: 0 };

        totalReservation.times = totalReservation.offered ? (totalReservation.demand / totalReservation.offered).toFixed(2) : "0.00";

        let finalReservation = [
            ...formattedDataReservation,
            {
                category: "Total",
                demand: totalReservation?.demand.toFixed(2),
                offered: totalReservation?.offered?.toFixed(2),
                times: totalReservation?.times // Already calculated above
            }
        ];

        // finalReservation = finalReservation?.map((ele, ind) => {
        //     let obj = cloneDeep(ele);
        //     if (+obj.demand === 0) {
        //         obj.demand = "-"
        //     }
        //     if (+obj.offered === 0) {
        //         obj.offered = "-"
        //     }
        //     if (+obj.times === 0) {
        //         obj.times = "-"
        //     }
        //     return obj
        // })
        return finalReservation
    }

    // console.log('SubscriptionDetailsTable', rows);

    return (
        <ResponsiveTable
            title={title}
            columns={tableColumns}
            rows={transformIPOData(rows)}
            mobileMode="scroll"
            columnMinWidth={40}
        />
    );
}

export function ApplicationBreakupTable({ title = "", rows = [] }) {
    const tableColumns = [
        { key: "category", label: "Category" },
        {
            key: "reserved", label: "Reserved",
            render: (text) => (
                formatIndianNumber(text)
            ),
        },
        {
            key: "applied", label: "Applied",
            render: (text) => (
                formatIndianNumber(text)
            ),
        },
        {
            key: "times", label: "Times",
            render: (text) => (
                formatToFixed(text)
            ),
        },
    ];

    const transformIPOData = (data) => {

        if (!Array.isArray(data) || data.length === 0) return [];

        const applicationData = data?.slice(1)?.map(item => ({
            category: item?.category,
            applied: formatIndianNumber(parseInt(item?.applied, 10)),
            appliedd: parseInt(item?.applied, 10),
            reserved: parseInt(item?.reserved, 10),
            times: item?.applied > 0 && item?.reserved > 0 ? parseInt(item?.applied, 10) / parseInt(item?.reserved, 10) : 0,
        }));

        const totalApplication = applicationData?.length > 0 ? applicationData.reduce((total, item, index) => {
            if ((item?.category)?.toLowerCase() === "nib" || item?.appliedd === 0 || item?.reserved === 0 || item?.times === 0) {
                return {
                    appliedd: total.appliedd,
                    reserved: total.reserved,
                    times: total.times,
                };
            } else {
                return {
                    appliedd: (parseInt(total.appliedd, 10) || 0) + (parseInt(item.appliedd, 10) || 0),
                    reserved: (parseInt(total.reserved, 10) || 0) + (parseInt(item.reserved, 10) || 0),
                    times: ((parseInt(total.appliedd, 10) || 0) + (parseInt(item.appliedd, 10) || 0)) / ((parseInt(total.reserved, 10) || 0) + (parseInt(item.reserved, 10) || 0)) || 0,
                };
            }
        }, { appliedd: 0, reserved: 0, times: 0 }) : { appliedd: 0, reserved: 0, times: 0 };

        let finalApplication = [
            ...applicationData,
            {
                category: "Total",
                applied: formatIndianNumber(totalApplication?.appliedd),
                reserved: parseInt(totalApplication?.reserved, 10),
                times: totalApplication?.times
            }
        ];

        // finalApplication = finalApplication?.map((ele, ind) => {
        //     let obj = cloneDeep(ele);
        //     if (obj?.appliedd === 0) {
        //         obj.applied = "-"
        //     }
        //     if (obj?.reserved === 0) {
        //         obj.reserved = "-"
        //     }

        //     return obj;
        // })

        return finalApplication
    }

    return (
        <ResponsiveTable
            title={title}
            columns={tableColumns}
            rows={transformIPOData(rows)}
            mobileMode="scroll"
            columnMinWidth={40}
        />
    );
}

export function LotDistributionTable({ title = "", rows = [] }) {

    const tableColumns = [
        { key: "application", label: "Category" },
        { key: "lot", label: "Lot(s)" },
        { key: "share", label: "Qty" },
        {
            key: "ammount",
            label: "Amount",
            render: (v, row) => (
                <span className="flex items-center gap-2">
                    <span className="font-medium">{formatINR(v)}</span>
                    {row.estimated_pct ? (<span className="text-gray-500 dark:text-gray-400">({Number(row.estimated_pct).toFixed(2)}%)</span>) : null}
                </span>
            ),
        },
    ];

    const transformIPOData = (data) => {
        if (data?.length > 0) {
            const updatedArray = data?.length > 0 && data?.map(item => ({
                label: 'IPO Date',
                application: item?.category === "RETAIL" ? "Retail (Min)" : item?.category,
                lot: item["lot(s)"]?.toString(),
                share: formatIndianNumber(item?.qty),
                ammount: formatIndianPrice(item?.amount),
                reserved: formatIndianNumber(item?.reserved)
            }));
            return updatedArray;
        } else {
            return [];
        }
    }

    let checking = checkingNonZeroValueDistributionTable(transformIPOData(rows));

    if (checking) {
        tableColumns.push({
            label: "Reserved",
            dataIndex: "reserved",
            key: "reserved",
            width: "50%",
            render: (text) => (
                <span
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        whiteSpace: "nowrap",
                        // textDecoration: "underline",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                    className="company-name-table table-cell-typo text-center"
                >
                    {text}
                </span>
            ),
        },)
    }

    return (
        <ResponsiveTable
            title={title}
            columns={tableColumns}
            rows={transformIPOData(rows)}
            mobileMode="scroll"
            columnMinWidth={40}
        />
    );
}

export function IPOReservationTable({ title = "", rows = [] }) {

    const tableColumns = [
        { key: "investor_category", label: "Category" },
        { key: "shares_offered", label: "Shares Offers" },
        { key: "no_of_shares", label: "No. of Shares" },
    ];

    const transformIPOData = (data) => {

        if (!Array.isArray(data) || data.length === 0) return [];

        // Totals from raw inputs
        const totalSharesOffered = data?.reduce((sum, r) => sum + toNum(r.shares_offered), 0);
        const totalNoOfShares = data?.reduce((sum, r) => sum + toNum(r.no_of_shares), 0);

        // Map data → percentage for shares_offered + numeric no_of_shares
        const updated = data.map((r) => {
            const so = toNum(r.shares_offered);
            const pct = totalSharesOffered > 0 ? (so / totalSharesOffered) * 100 : 0;
            return {
                investor_category: r?.investor_category ?? "",
                shares_offered: `${pct.toFixed(2)}%`,   // percent of total shares_offered
                no_of_shares: formatIndianNumber(toNum(r.no_of_shares)),    // keep as number
            };
        });

        // Append TOTAL row
        updated.push({
            investor_category: "TOTAL",
            shares_offered: totalSharesOffered > 0 ? "100.00%" : "0%",
            no_of_shares: formatIndianNumber(totalNoOfShares),
        });

        return updated;

    }

    return (
        <ResponsiveTable
            title={title}
            columns={tableColumns}
            rows={transformIPOData(rows)}
            mobileMode="scroll"
            columnMinWidth={40}
        />
    );
}

export function IpoCompanyDetails({ companyDetails = {}, registrarDetail = "" }) {
    // Parse registrar details from comma-separated string
    const [registrarName, registrarPhone, registrarEmail, registrarWebsite] =
        registrarDetail?.split(",").map((item) => item.trim()) || [];

    return (
        <section className="scroll-mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Company Details Card */}
                <div className="rounded-xl ring-1 ring-gray-200 dark:ring-base-800 bg-white dark:bg-base-950">
                    <div className="bg-gray-50 dark:bg-base-900/40 rounded-t-xl px-4 py-3 border-b border-gray-200 dark:border-base-800">
                        <h3 className="text-sm font-semibold ">
                            Company Details
                        </h3>
                    </div>

                    <div className="p-5 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                        <div>
                            <strong>Email:</strong>{" "}
                            <a
                                href={`mailto:${companyDetails?.Email}`}
                                target="_blank" rel="noopener noreferrer"
                                className="text-indigo-600 hover:underline"
                            >
                                {companyDetails?.Email || "—"}
                            </a>
                        </div>
                        <div>
                            <strong>Phone:</strong> {companyDetails?.Phone || "—"}
                        </div>
                        <div>
                            <strong>Website:</strong>{" "}
                            <a
                                href={companyDetails.Website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:underline"
                            >
                                {companyDetails.Website || "—"}
                            </a>
                        </div>
                        <div>
                            <strong>Address:</strong>{" "}
                            <span className="block whitespace-pre-line">
                                {companyDetails.address || "—"}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Registrar Details Card */}
                <div className="rounded-xl ring-1 ring-gray-200 dark:ring-base-800 bg-white dark:bg-base-950">
                    <div className="bg-gray-50 dark:bg-base-900/40 rounded-t-xl px-4 py-3 border-b border-gray-200 dark:border-base-800">
                        <h3 className="text-sm font-semibold ">
                            IPO Registrar
                        </h3>
                    </div>

                    <div className="p-5 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                        {/* <h4 className="font-semibold text-base text-gray-900 dark:text-gray-100">
                            {registrarName || "-"}
                        </h4> */}
                        <div>
                            <strong>Name:</strong> {registrarName || "—"}
                        </div>
                        <div>
                            <strong>Phone:</strong> {registrarPhone || "—"}
                        </div>
                        <div>
                            <strong>Email:</strong>{" "}
                            {registrarEmail ? (
                                <a
                                    href={`mailto:${registrarEmail}`}
                                    className="text-indigo-600 hover:underline"
                                >
                                    {registrarEmail}
                                </a>
                            ) : (
                                "—"
                            )}
                        </div>
                        <div>
                            <strong>Website:</strong>{" "}
                            <a
                                href={registrarWebsite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:underline"
                            >
                                {registrarWebsite || "—"}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function StrengthWeekness({ strength = "", weakness = "", note = "The pros and cons are machine generated.", showNote = false }) {
    return (
        <section className="scroll-mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Strengths */}
                <div className="rounded-xl bg-white dark:bg-base-950 p-5 ring-1 ring-emerald-600">
                    <h3 className="text-sm font-semibold tracking-widest text-emerald-600">Strength Factors</h3>
                    <div className="mt-3">
                        <div className="prose prose-sm max-w-none text-gray-700 dark:prose-invert dark:text-gray-300 prose-ul:list-disc prose-ol:list-decimal prose-li:my-1"
                            {...cleanHTMLContent(strength)}
                        />
                    </div>
                </div>

                {/* Weaknesses */}
                <div className="rounded-xl bg-white dark:bg-base-950 p-5 ring-1 ring-rose-600">
                    <h3 className="text-sm font-semibold tracking-widest text-rose-600">Risk Factors</h3>
                    <div className="mt-3">
                        <div className="prose prose-sm max-w-none text-gray-700 dark:prose-invert dark:text-gray-300 prose-ul:list-disc prose-ol:list-decimal prose-li:my-1"
                            {...cleanHTMLContent(weakness)}
                        />
                    </div>
                </div>
            </div>

            {showNote && (
                <p className="mt-3 text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <span className="inline-block h-4 w-4 rounded-full border border-gray-300 dark:border-base-700 grid place-items-center text-[10px]">i</span>
                    {note}
                </p>
            )}
        </section>
    );
}