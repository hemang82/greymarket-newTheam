
// sections/IpoDetailsPages.jsx
"use client";
import StickyTabs from "@/components/ipodetailspages/StickyTabs";
// import SectionHeading from "@/components/sections/SectionHeading";
import { gmpDetails } from "@/data/gmpdata";
import { ApplicationBreakupTable, DetailsCommonCard, FinancialTable, GmpTrendTable, IpoCompanyDetails, IPOReservationTable, KeyPerfomanceTable, LotDistributionTable, StrengthWeekness, SubscriptionDemandTable, SubscriptionDetailsTable } from "./IPOGmp";
import OverviewSection from "./OverviewSection";
import dynamic from "next/dynamic";
import { useState } from "react";
// import GroupedBarChart from "./FinancialsChart";
const GroupedBarChart = dynamic(() => import("./FinancialsChart"), { ssr: false }
);
import { BsGraphDown, BsTable } from "react-icons/bs";

// import Accordion from "@/components/Accordion";

const TABS = [
    { id: "overview", label: "Overview" },
    { id: "gmpDetails", label: "GMP" },
    { id: "financial_data", label: "Financial Data" },
    { id: "subscriptionDetails", label: "Subscription" },
    { id: "ipoReservation", label: "IPO Reservation" },
    { id: "comapnyDetails", label: "Comapny Details" },
    // { id: "balance-sheet", label: "Balance Sheet" },
    // { id: "cash-flow", label: "Cash Flow" },
    // { id: "ratios", label: "Ratios" },
    // { id: "investors", label: "Investors" },
    // { id: "documents", label: "Documents" },
];

export function IpoDetailsPages({ ipoDetailsData, ...rest }) {
    const [fincialGraphShow, setFinancialGraphShow] = useState("")

    return (<>
        <StickyTabs items={TABS} />

        <section className="bg-base-100 dark:bg-base-900 pt-20" {...rest}>

            {/* Tabs */}
            <div className="container mx-auto space-y-10">

                {/* Overview */}
                <OverviewSection
                    id="overview"
                    title="Lenskart Solutions Ltd"
                    ipoDetailsData={ipoDetailsData}
                />

                {/* Chart */}

                {/* <div id="chart" className="scroll-mt-20">
                    <div className="bg-white dark:bg-base-950 p-6 rounded-2xl border border-gray-200 dark:border-base-800">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Price Chart</h3>
                            <div className="flex gap-2 text-sm">
                                {["1M", "6M", "1Yr", "3Yr", "5Yr", "10Yr", "Max"].map((t) => (
                                    <button key={t} className="px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-base-800">
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="h-72 rounded-md bg-gray-50 dark:bg-base-900 border border-dashed border-gray-200 dark:border-base-800 grid place-items-center text-gray-400">
                            Chart goes here
                        </div>
                    </div>
                </div> */}



                {/* Gmp */}
                {
                    gmpDetails?.ipo_gmp?.length > 0 && <div id="gmpDetails" className="scroll-mt-20 !mt-0 sm:!mt-[2.5rem]">
                        <Card title="">
                            <GmpTrendTable title="Gmp Details" rows={gmpDetails?.ipo_gmp?.length > 0 ? gmpDetails?.ipo_gmp : []} />
                        </Card>
                    </div>
                }
                {
                    ipoDetailsData?.company_financial_data?.financial_data?.length > 0 && <div id="financial_data" className="scroll-mt-20 !mt-0 sm:!mt-[2.5rem]">
                        <div id="financial_data" className="scroll-mt-20">
                            <Card title={`Financials overview ${ipoDetailsData?.company_financial_data?.financial_amount_type}`} showModes={true} onGraphClick={() => setFinancialGraphShow("graph")} onTableClick={() => setFinancialGraphShow("table")}>

                                {
                                    fincialGraphShow == 'table' ?
                                        <FinancialTable title="Financials ( In Crores )" rows={ipoDetailsData?.company_financial_data?.financial_data?.length > 0 ? ipoDetailsData?.company_financial_data?.financial_data : []} />
                                        : <GroupedBarChart financialData={ipoDetailsData?.company_financial_data?.financial_data} amountType={ipoDetailsData?.company_financial_data?.financial_amount_type} />
                                }
                            </Card>
                        </div>
                    </div>
                }

                {
                    ipoDetailsData?.key_performance_indicator?.length > 0 && <div id="financial_data" className="scroll-mt-20 !mt-0 sm:!mt-[2.5rem]">
                        <Card title="" >
                            <KeyPerfomanceTable title="Key Performance" rows={ipoDetailsData?.key_performance_indicator?.length > 0 ? ipoDetailsData?.key_performance_indicator : []} />
                        </Card>
                    </div>
                }

                {/* subscriptionDetails */}
                <div id="subscriptionDetails" className="scroll-mt-20 !mt-0 sm:!mt-[2.5rem]">
                    {
                        ipoDetailsData?.ipo_subscription_detail?.length > 0 && <Card title="">
                            <SubscriptionDetailsTable title="Subscription Details (No. of Shares)" rows={ipoDetailsData?.ipo_subscription_detail?.length > 0 ? ipoDetailsData?.ipo_subscription_detail : []} />
                        </Card>
                    }
                    {
                        ipoDetailsData?.subscription_demand?.length > 0 && <Card title="">
                            <SubscriptionDemandTable title=" Subscription Demand (in ₹ Crore)" rows={ipoDetailsData?.subscription_demand?.length > 0 ? ipoDetailsData?.subscription_demand : []} />
                        </Card>
                    }
                    {
                        ipoDetailsData?.appplication_wise_breakup?.data?.length > 0 && <Card title="">
                            <ApplicationBreakupTable title="Application Wise Breakup (Approx. no of Apps)" rows={ipoDetailsData?.appplication_wise_breakup?.data?.length > 0 ? ipoDetailsData?.appplication_wise_breakup?.data : []} />
                        </Card>
                    }
                </div>

                {/* ipoReservation */}
                <div id="ipoReservation" className="scroll-mt-20 !mt-0 sm:!mt-[2.5rem]">
                    {
                        ipoDetailsData?.ipo_reservation?.length > 0 &&
                        <Card title="">
                            <IPOReservationTable title="IPO Reservation" rows={ipoDetailsData?.ipo_reservation?.length > 0 ? ipoDetailsData?.ipo_reservation : []} />
                        </Card>
                    }
                    {
                        ipoDetailsData?.ipo_lot_description?.length > 0 && <Card title="">
                            <LotDistributionTable title="Lot(s) Distribution" rows={ipoDetailsData?.ipo_lot_description?.length > 0 ? ipoDetailsData?.ipo_lot_description : []} />
                        </Card>
                    }
                </div>

                {/* comapnyDetails */}
                <div id="comapnyDetails" className="scroll-mt-20 !mb-20  !mt-0 sm:!mt-[2.5rem]">
                    <Card title="">
                        <IpoCompanyDetails companyDetails={ipoDetailsData?.company_address} registrarDetail={ipoDetailsData?.registrar_detail} />
                    </Card>

                    <Card title="">
                        <DetailsCommonCard title={"About Company"} data={ipoDetailsData?.about_the_company} />
                    </Card>

                    {
                        ipoDetailsData?.company_weakness && <Card title="">
                            <StrengthWeekness strength={ipoDetailsData?.company_strenght} weakness={ipoDetailsData?.company_weakness ? ipoDetailsData?.company_weakness : ""} />
                        </Card>
                    }
                </div>
            </div>
        </section>
    </>);
}

function Card({ title, children, showModes = false, onGraphClick, onTableClick }) {
    return (
        <div className="bg-white dark:bg-base-950 p-3 sm:p-6 rounded-2xl border border-gray-200 dark:border-base-800 !mt-5 sm:!mt-10">

            {title && (
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold">{title}</h3>

                    {showModes && (
                        <div className="flex items-center gap-2">
                            {/* Graph View Button */}
                            <button
                                onClick={onGraphClick}
                                className="p-2 rounded-lg border  bg-[#135c331c] dark:border-base-700 hover:border-[#135c33e0] dark:hover:bg-base-900 transition"
                            >
                                <BsGraphDown color="#135c33e0"/>
                            </button>

                            {/* Table View Button */}
                            <button
                                onClick={onTableClick}
                                className="p-2 rounded-lg border dark:border-base-700 bg-[#135c331c] hover:border-[#135c33e0] dark:hover:bg-base-900 transition"
                            >
                                <BsTable color="#135c33e0"/>
                            </button>
                        </div>
                    )}
                </div>
            )}

            <div className="text-sm text-gray-600 dark:text-gray-300">
                {children}
            </div>
        </div>
    );
}

