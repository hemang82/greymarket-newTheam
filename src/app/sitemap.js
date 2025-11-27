import { getIPOsServer } from "@/lib/server/ServerApiCall";

// app/sitemap.js
export default async function sitemap() {

    const baseUrl = (process.env.SITE_URL || '-----');

    // Always include a small static set (fast)
    const staticPages = [
        { url: `${baseUrl}`, lastModified: new Date() },
        { url: `${baseUrl}auth/login`, lastModified: new Date() },
        { url: `${baseUrl}news`, lastModified: new Date() },
        { url: `${baseUrl}PrivacyPolicy`, lastModified: new Date() },
        { url: `${baseUrl}TermsConditions`, lastModified: new Date() },
    ];

    // In development we return only the static pages to avoid slow external calls
    // if (process.env.NODE_ENV === 'development') {
    //     return staticPages;
    // }
    // In production try to fetch dynamic routes, but fail gracefully

    const dynamicRoutes = [];

    try {
        const iposRes = await getIPOsServer({ page: 1, pageSize: 50 });
        console.log('iposRes', iposRes);
        // if (iposRes.ok) {
        // const ipos = await iposRes.json();
        (iposRes?.results || []).forEach(i => {
            console.log('i.symbol', i.symbol);

            if (i.symbol) dynamicRoutes.push({
                url: `${baseUrl}ipo-details/${i.symbol}`,
                lastModified: i.updated_at ? new Date(i.updated_at) : new Date(),
            });
        });
        // }
    } catch (err) {
        console.warn('sitemap: failed to fetch ipos', err);
    }

    // try {
    //     const newsRes = await fetch(`${process.env.API_URL}/news`, { next: { revalidate: 60 } });
    //     if (newsRes.ok) {
    //         const news = await newsRes.json();
    //         (news || []).forEach(n => {
    //             if (n.slug) dynamicRoutes.push({
    //                 url: `${baseUrl}/news/${n.slug}`,
    //                 lastModified: n.updated_at ? new Date(n.updated_at) : new Date(),
    //             });
    //         });
    //     }
    // } catch (err) {
    //     console.warn(
    // 'sitemap: failed to fetch news', err);
    // }

    console.log('dynamicRoutes', ...dynamicRoutes);

    return [...staticPages, ...dynamicRoutes];
}
