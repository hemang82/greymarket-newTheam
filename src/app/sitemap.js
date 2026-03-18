import { getIPOsServer, getNewsListServer } from "@/lib/server/ServerApiCall";
import axios from "axios";

// app/sitemap.js

const transformCompanyName = (name) => {
    return name
        ?.toLowerCase()
        ?.replace(/[^a-zA-Z0-9\s]/g, "") // Remove special characters except spaces
        ?.trim()
        ?.replace(/\s+/g, "-"); // Replace spaces with hyphens
};

export default async function sitemap() {

    let baseUrl = process.env.SITE_URL || "https://greymarketipo.com";

    // Remove trailing slash if present
    if (baseUrl.endsWith("/")) {
        baseUrl = baseUrl.slice(0, -1);
    }

    // Static pages
    const staticPages = [
        { url: `${baseUrl}`, lastModified: new Date() },
        { url: `${baseUrl}/news`, lastModified: new Date() },
        { url: `${baseUrl}/auth/login`, lastModified: new Date() },
        { url: `${baseUrl}/PrivacyPolicy`, lastModified: new Date() },
        { url: `${baseUrl}/TermsConditions`, lastModified: new Date() },
        { url: `${baseUrl}/Contact-us`, lastModified: new Date() },
    ];

    const dynamicRoutes = [];
    let allIPO = [];

    try {
        const response = await axios.get(`https://api.ipo-trend.com/ipo/sitemap/`);

        allIPO = response?.data?.data?.results?.ipo_data?.map(company => {
            const encodedSymbol = encodeURIComponent(company.symbol || "");
            const url = `${baseUrl}/ipo-details/${encodedSymbol}`;
            return {
                url: url,
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: 1.0
            };
        }) || [];

        // 1. Fetch IPOs for dynamic routes (backup/additional)
        const iposData = await getIPOsServer({ page: 1, pageSize: 200 });
        const iposList = iposData?.results || [];

        iposList.forEach((ipo) => {
            if (ipo.id) {
                const encodedSymbol = encodeURIComponent(ipo.symbol || "");
                const url = `${baseUrl}/ipo-details/${encodedSymbol}`;
                // Avoid duplication if already in allIPO
                if (!allIPO.some(item => item.url == url)) {
                    dynamicRoutes.push({
                        url: url,
                        lastModified: ipo.updated_at ? new Date(ipo.updated_at) : new Date(),
                    });
                }
            }
        });

        // 2. Fetch News for dynamic routes
        const newsData = await getNewsListServer({ page: 1, pageSize: 200 });
        const newsItems = newsData?.data || [];

        newsItems.forEach((news) => {
            if (news.id) {
                dynamicRoutes.push({
                    url: `${baseUrl}/news/${news.id}`,
                    lastModified: news.updated_at ? new Date(news.updated_at) : new Date(),
                });
            }
        });

    } catch (err) {

        console.error("Sitemap generation error:", err);
    }

    // Next.js expects a flat array of sitemap items
    return [...staticPages, ...allIPO, ...dynamicRoutes];
}
