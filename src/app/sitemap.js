import { getIPOsServer, getNewsListServer } from "@/lib/server/ServerApiCall";

// app/sitemap.js
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

    try {
        // 1. Fetch IPOs for dynamic routes (Limit to 200 for now to keep sitemap generation fast)
        const iposData = await getIPOsServer({ page: 1, pageSize: 200 });
        const iposList = iposData?.results || [];

        iposList.forEach((ipo) => {
            if (ipo.id) {
                dynamicRoutes.push({
                    url: `${baseUrl}/ipo-details/${ipo.id}`,
                    // Some IPOs might not have updated_at, fallback to current date
                    lastModified: ipo.updated_at ? new Date(ipo.updated_at) : new Date(),
                });
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
        // Even if dynamic routes fail, we still have static ones
    }

    // Next.js expects a flat array of sitemap items
    return [...staticPages, ...dynamicRoutes];
}
