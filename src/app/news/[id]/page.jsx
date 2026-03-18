import { getNewsItemServer, getNewsListServer } from "@/lib/server/ServerApiCall";
import { NewsDetailsPage } from "@/components/news/NewsDetailsPage";
import { truncateText } from "@/app_config/CommonFunction";

export async function generateMetadata({ params }) {
    const { id } = await params;
    const newsItem = await getNewsItemServer(id);

    if (!newsItem) {
        return {
            title: truncateText(`News Not Found | ${process.env.SITE_NAME}`, 60),
            description: truncateText("The requested news update could not be found.", 150)
        };
    }

    return {
        title: truncateText(`${newsItem.title} | Latest IPO News - ${process.env.SITE_NAME}`, 60),
        description: truncateText(newsItem.short_description, 150),
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
            title: truncateText(newsItem.title, 60),
            description: truncateText(newsItem.short_description, 150),
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
            title: truncateText(newsItem.title, 60),
            description: truncateText(newsItem.short_description, 150),
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
