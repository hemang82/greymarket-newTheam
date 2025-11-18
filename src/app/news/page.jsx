import { getNewsListServer } from "@/lib/server/ServerApiCall";
import NewsClient from "./NewsClient";

export default async function newsPage({ searchParams }) {

    const resolvedSearchParams = await searchParams;
    const page = Number(resolvedSearchParams?.page) || 1;
    const pageSize = Number(resolvedSearchParams?.pageSize) || 12;

    const newsList = await getNewsListServer({ page: page, pageSize: pageSize })
    return (<>
        <NewsClient newsList={newsList} pageSize={pageSize} page={page} />
    </>)
}