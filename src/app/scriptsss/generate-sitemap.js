// scripts/generate-sitemap.js
const fs = require('fs');
const path = require('path');

const SITE_URL = process.env.SITE_URL || 'https://www.greymarketipo.com';
const API_IPO = process.env.API_IPO_LIST || `${process.env.API_URL || ''}/ipos`;
const API_NEWS = process.env.API_NEWS_LIST || `${process.env.API_URL || ''}/news`;

// Use global fetch (Node 18+) or node-fetch fallback
const fetchFn = global.fetch || require('node-fetch');

function asUrl(u) {
    // build absolute url without double slashes
    const trimmedSite = SITE_URL.replace(/\/$/, '');
    return `${trimmedSite}${u.startsWith('/') ? '' : '/'}${u}`.replace(/([^:]\/)\/+/g, '$1');
}

async function fetchJson(url) {
    try {
        if (!url || url === `${process.env.API_URL || ''}/ipos`) return []; // skip if not configured
        const res = await fetchFn(url);
        if (!res.ok) {
            console.warn('Fetch failed', url, res.status);
            return [];
        }
        return await res.json();
    } catch (err) {
        console.warn('Fetch error', url, err.message || err);
        return [];
    }
}

(async () => {
    try {
        // 1) Static routes
        const urls = [
            { loc: asUrl('/') },
            { loc: asUrl('/news') },
            { loc: asUrl('/PrivacyPolicy') },
            { loc: asUrl('/TermsConditions') },
        ];

        // 2) Dynamic IPOs
        // const ipos = await fetchJson(API_IPO);
        // (ipos || []).forEach(item => {
        //     if (item.slug) urls.push({ loc: asUrl(`/ipo/${item.slug}`), lastmod: item.updated_at });
        // });

        // 3) Dynamic news
        // const news = await fetchJson(API_NEWS);
        // (news || []).forEach(item => {
        //   if (item.slug) urls.push({ loc: asUrl(`/news/${item.slug}`), lastmod: item.updated_at });
        // });

        // 4) Build XML
        const xmlItems = urls.map(u => {
            const lastmod = u.lastmod ? `<lastmod>${new Date(u.lastmod).toISOString()}</lastmod>` : '';
            return `<url>\n    <loc>${u.loc}</loc>\n${lastmod ? `    ${lastmod}\n` : ''}  </url>`;
        }).join('\n');

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
            `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xmlItems}\n</urlset>\n`;

        // 5) Ensure public directory exists and write file
        const outDir = path.join(process.cwd(), 'public');
        if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

        const outPath = path.join(outDir, 'sitemap.xml');
        fs.writeFileSync(outPath, sitemap, 'utf8');

        console.log('sitemap written to', outPath, 'with', urls.length, 'urls');
    } catch (err) {
        console.error('Failed to generate sitemap:', err);
        process.exit(1);
    }
})();
