import { getNewsListServer } from "@/lib/server/ServerApiCall";
import NewsClient from "./NewsClient";
import { truncateText } from "@/app_config/CommonFunction";
export const metadata = {
    title: truncateText(`Latest IPO News & Updates – Live & Upcoming IPO Announcements | ${process.env.SITE_NAME}`, 60),

    description: truncateText(
        "Read the latest IPO news and updates including new DRHP filings, issue openings, price bands, subscription updates, and key announcements for upcoming and live IPOs.", 150),

    keywords: [
        'IPO News',
        'Latest IPO Updates',
        'Upcoming IPO News',
        'Live IPO News',
        'IPO announcements',
        'DRHP updates',
        'RHP news',
        'IPO market news',
        'new IPO filings',
        process.env.SITE_NAME || 'GreymarketIPO',
    ],

    alternates: {
        canonical: `${process.env.SITE_URL}news`,
    },

    openGraph: {
        title: truncateText(`Latest IPO News & Market Updates | ${process.env.SITE_NAME}`, 60),
        description: truncateText(
            "Stay updated with real-time IPO news, DRHP filings, issue announcements, subscription updates, and market insights for live and upcoming IPOs.", 150),
        url: `${process.env.SITE_URL}news`,
        images: [
            {
                url: '/og-news.png',
                width: 1200,
                height: 630,
                alt: `${process.env.SITE_NAME} – IPO News & Updates`,
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: truncateText(`IPO News Today – Latest Live & Upcoming IPO Updates | ${process.env.SITE_NAME}`, 60),
        description: truncateText(
            "Get real-time IPO news including issue announcements, DRHP updates, subscription status insights, and upcoming IPO developments.", 150),
        images: ['/og-news.png'],
    },
};

export default async function newsPage({ searchParams }) {

    const resolvedSearchParams = await searchParams;
    const page = Number(resolvedSearchParams?.page) || 1;
    const pageSize = Number(resolvedSearchParams?.pageSize) || 12;

    const newsList = await getNewsListServer({ page: page, pageSize: pageSize })
    return (<>
        <NewsClient newsList={newsList} pageSize={pageSize} page={page} />
    </>)
}