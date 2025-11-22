
/**
 * Fetch IPO list (server-side)
 * Always fresh per request
 */

import { getIPODetailsApi, getNewsListApi, ipoListApi } from "@/api";

export async function getIPOsServer(request) {
    try {
        const res = await ipoListApi(request);
        if (res?.meta?.status_code == 200) {
            return res?.data?.results?.length > 0 ? res?.data : [];
        } else {
            return [];
        }
    } catch (err) {
        console.error("Error fetching IPO list:", err);
        return [];
    }
}

export async function getIPODetailsServer(request) {
    try {
        const res = await getIPODetailsApi(request);
        if (res?.meta?.status_code == 200) {
            return res?.data || {};
        } else {
            return {};
        }
    } catch (err) {
        console.error("Error fetching IPO details:");
        return {};
    }
}

export async function getNewsListServer(request) {
    try {
        const res = await getNewsListApi(request);
        if (res?.meta?.status_code == 200) {
            return res?.data || {};
        } else {
            return {};
        }
    } catch (err) {
        console.error("Error fetching IPO details:");
        return {};
    }
}