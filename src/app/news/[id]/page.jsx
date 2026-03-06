import { getNewsItemServer, getNewsListServer } from "@/lib/server/ServerApiCall";
import { NewsDetailsPage } from "@/components/news/NewsDetailsPage";

export async function generateMetadata({ params }) {
    const { id } = await params;
    const newsItem = await getNewsItemServer(id);

    if (!newsItem) {
        return {
            title: `News Not Found | ${process.env.SITE_NAME}`,
            description: "The requested news update could not be found."
        };
    }

    return {
        title: `${newsItem.title} | Latest IPO News - ${process.env.SITE_NAME}`,
        description: newsItem.short_description,
        keywords: [
            'IPO News',
            'Market Updates',
            newsItem.tag || 'Updates',
            process.env.SITE_NAME
        ],
        alternates: {
            canonical: `${process.env.SITE_URL}news/${id}`,
        },
        openGraph: {
            title: newsItem.title,
            description: newsItem.short_description,
            url: `${process.env.SITE_URL}news/${id}`,
            images: [
                {
                    url: newsItem.news_image,
                    width: 1200,
                    height: 630,
                    alt: newsItem.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: newsItem.title,
            description: newsItem.short_description,
            images: [newsItem.news_image],
        },
    };
}

export default async function NewsDetailPage({ params }) {
    const { id } = await params;

    // Fetch both the item and some recent items for the "Related" section
    const [newsItem, recentNewsList] = await Promise.all([
        getNewsItemServer(id),
        getNewsListServer({ page: 1, pageSize: 4 })
    ]);

    return (
        <NewsDetailsPage
            newsItemServer={newsItem}
            recentNews={recentNewsList?.data?.filter(n => String(n.id) !== String(id)).slice(0, 3) || []}
        />
    );
}
