// app/sitemap.js
export default async function sitemap() {
    const baseUrl = (process.env.SITE_URL || '').replace(/\/$/, '');

    // Always include a small static set (fast)
    const staticPages = [
        { url: `${baseUrl}/`, lastModified: new Date() },
        { url: `${baseUrl}/gmp`, lastModified: new Date() },
        { url: `${baseUrl}/live-ipo`, lastModified: new Date() },
        { url: `${baseUrl}/upcoming-ipo`, lastModified: new Date() },
        { url: `${baseUrl}/news`, lastModified: new Date() },
        { url: `${baseUrl}/privacy-policy`, lastModified: new Date() },
        { url: `${baseUrl}/terms-and-conditions`, lastModified: new Date() },
    ];

    // In development we return only the static pages to avoid slow external calls
    if (process.env.NODE_ENV === 'development') {
        return staticPages;
    }

    // In production try to fetch dynamic routes, but fail gracefully
    const dynamicRoutes = [];

    // try {
    //     const iposRes = await fetch(`${process.env.API_URL}/ipos`, { next: { revalidate: 60 } });
    //     if (iposRes.ok) {
    //         const ipos = await iposRes.json();
    //         (ipos || []).forEach(i => {
    //             if (i.slug) dynamicRoutes.push({
    //                 url: `${baseUrl}/ipo/${i.slug}`,
    //                 lastModified: i.updated_at ? new Date(i.updated_at) : new Date(),
    //             });
    //         });
    //     }
    // } catch (err) {
    //     console.warn('sitemap: failed to fetch ipos', err);
    // }

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
    //     console.warn('sitemap: failed to fetch news', err);
    // }

    return [...staticPages];
}
