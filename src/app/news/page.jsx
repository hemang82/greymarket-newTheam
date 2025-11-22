import { getNewsListServer } from "@/lib/server/ServerApiCall";
import NewsClient from "./NewsClient";
export const metadata = {
    title: `Latest IPO News & Updates – Live & Upcoming IPO Announcements | ${process.env.SITE_NAME}`,

    description:
        "Read the latest IPO news and updates including new DRHP filings, issue openings, price bands, subscription updates, and key announcements for upcoming and live IPOs.",

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
        title: `Latest IPO News & Market Updates | ${process.env.SITE_NAME}`,
        description:
            "Stay updated with real-time IPO news, DRHP filings, issue announcements, subscription updates, and market insights for live and upcoming IPOs.",
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
        title: `IPO News Today – Latest Live & Upcoming IPO Updates | ${process.env.SITE_NAME}`,
        description:
            "Get real-time IPO news including issue announcements, DRHP updates, subscription status insights, and upcoming IPO developments.",
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