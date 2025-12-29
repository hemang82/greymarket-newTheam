import { getIPOsServer } from "@/lib/server/ServerApiCall";
const axios = require("axios");

// app/sitemap.js
export default async function sitemap() {

    const baseUrl = ('https://greymarketipo.com/' || '-----');
    const escapeXml = (url) => url.replace(/&/g, "&amp;");

    // Always include a small static set (fast)
    const staticPages = [
        { url: `${baseUrl}`, lastModified: new Date() },
        { url: `${baseUrl}auth/login`, lastModified: new Date() },
        { url: `${baseUrl}news`, lastModified: new Date() },
        { url: `${baseUrl}PrivacyPolicy`, lastModified: new Date() },
        { url: `${baseUrl}TermsConditions`, lastModified: new Date() },
        { url: `${baseUrl}Contact-us`, lastModified: new Date() },
    ];

    // In development we return only the static pages to avoid slow external calls
    // if (process.env.NODE_ENV === 'development') {
    //     return staticPages;
    // }
    // In production try to fetch dynamic routes, but fail gracefully

    const dynamicRoutes = [];
    const ipoPageData = [];
    const perpage = 40;

    try {

        const iposRes = await axios.get(`https://api.ipo-trend.com/ipo/sitemap/`);

        (iposRes?.data?.data?.results?.ipo_data || []).forEach(i => {
            if (i.symbol) dynamicRoutes.push({
                url: `${baseUrl}ipo-details/${i.symbol}`,
                lastModified: i.updated_at ? new Date(i.updated_at) : new Date(),
            });
        });

        // 🔹 Pagination pages (IMPORTANT FIX)
        // const totalCount = iposRes?.count || 0;   // total IPO records
        // const pageSize = perpage;                 // per page items

        // const totalPages = Math.ceil(totalCount / pageSize);
        // console.log('totalPages', totalPages);

        // Array.from({ length: totalPages }).forEach((_, i) => {
        //     ipoPageData.push({
        //         url: escapeXml(`${baseUrl}?page=${i + 1}&pageSize=${perpage}`),
        //         lastModified: new Date(),
        //         // priority: 0.5,
        //     });
        // });

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
    return [...staticPages, ...dynamicRoutes];
}
