import { getCleanSiteUrl } from "@/lib/utils";

export default function robots() {
    const cleanSiteUrl = getCleanSiteUrl();
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/auth/', '/api/'],
            },
        ],
        sitemap: `${cleanSiteUrl}/sitemap.xml`,
    };
}
