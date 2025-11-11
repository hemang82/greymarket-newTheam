
// sections/IpoDetailsPages.jsx
"use client";
import StickyTabs from "@/components/ipodetailspages/StickyTabs";
// import SectionHeading from "@/components/sections/SectionHeading";
import { footer } from "@/data";
import { gmpDetails } from "@/data/gmpdata";
import { Footer } from "../sections";
import { ApplicationBreakupTable, GmpTrendTable, IpoCompanyDetails, IPOReservationTable, LotDistributionTable, StrengthWeekness, SubscriptionDemandTable, SubscriptionDetailsTable } from "./IPOGmp";
import OverviewSection from "./OverviewSection";
// import Accordion from "@/components/Accordion";

const TABS = [
    { id: "overview", label: "Overview" },
    { id: "gmpDetails", label: "GMP" },
    { id: "subscriptionDetails", label: "Subscription" },
    { id: "ipoReservation", label: "IPO Reservation" },
    { id: "comapnyDetails", label: "Comapny Details" },
    // { id: "pnl", label: "Profit & Loss" },
    // { id: "balance-sheet", label: "Balance Sheet" },
    // { id: "cash-flow", label: "Cash Flow" },
    // { id: "ratios", label: "Ratios" },
    // { id: "investors", label: "Investors" },
    // { id: "documents", label: "Documents" },
];

export function IpoDetailsPages({ ipoDetailsData, ...rest }) {

    return (<>
        {/* <Header logo={header.logo} links={header.links} buttons={header.buttons} /> */}

        <StickyTabs items={TABS} />

        <section className="bg-base-100 dark:bg-base-900 pt-24" {...rest}>

            {/* Tabs */}
            <div className="container px-4 mx-auto space-y-10">

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
                <div id="gmpDetails" className="scroll-mt-20">
                    <Card title="">
                        <GmpTrendTable title="Gmp Details" rows={gmpDetails?.ipo_gmp?.length > 0 ? gmpDetails?.ipo_gmp : []} />
                    </Card>
                </div>

                {/* subscriptionDetails */}
                <div id="subscriptionDetails" className="scroll-mt-20">
                    <Card title="">
                        <SubscriptionDetailsTable title="Subscription Details (No. of Shares)" rows={ipoDetailsData?.ipo_subscription_detail?.length > 0 ? ipoDetailsData?.ipo_subscription_detail : []} />
                    </Card>

                    <Card title="">
                        <SubscriptionDemandTable title=" Subscription Demand (in ₹ Crore)" rows={ipoDetailsData?.subscription_demand?.length > 0 ? ipoDetailsData?.subscription_demand : []} />
                    </Card>

                    <Card title="">
                        <ApplicationBreakupTable title="Application Wise Breakup (Approx. no of Apps)" rows={ipoDetailsData?.appplication_wise_breakup?.data?.length > 0 ? ipoDetailsData?.appplication_wise_breakup?.data : []} />
                    </Card>
                </div>

                {/* ipoReservation */}
                <div id="ipoReservation" className="scroll-mt-20">
                    <Card title="">
                        <IPOReservationTable title="IPO Reservation" rows={ipoDetailsData?.ipo_reservation?.length > 0 ? ipoDetailsData?.ipo_reservation : []} />
                    </Card>
                    <Card title="">
                        <LotDistributionTable title="Lot(s) Distribution" rows={ipoDetailsData?.ipo_lot_description?.length > 0 ? ipoDetailsData?.ipo_lot_description : []} />
                    </Card>
                </div>

                {/* comapnyDetails */}
                <div id="comapnyDetails" className="scroll-mt-20 !mb-20">
                    <Card title="">
                        <IpoCompanyDetails companyDetails={ipoDetailsData?.company_address} registrarDetail={ipoDetailsData?.registrar_detail} />
                    </Card>
                    <Card title="">
                        <StrengthWeekness strength={ipoDetailsData?.company_strenght} weakness={ipoDetailsData?.company_weakness ? ipoDetailsData?.company_weakness : ""} />
                    </Card>
                </div>

            </div>
        </section>

        <Footer
            id="footer"
            copyright={footer.copyright}
            logo={footer.logo}
            social={footer.social}
            links={footer.links}
        />
    </>);
}

// tiny helper card
function Card({ title, children }) {
    return (
        <div className="bg-white dark:bg-base-950 p-6 rounded-2xl border border-gray-200 dark:border-base-800 mt-10">
            <h3 className="text-lg font-semibold mb-3">{title}</h3>
            <div className="text-sm text-gray-600 dark:text-gray-300">{children}</div>
        </div>
    );
}
