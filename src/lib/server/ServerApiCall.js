
/**
 * Fetch IPO list (server-side)
 * Always fresh per request
 */

import { getIPODetailsApi, ipoListApi } from "@/api";

export async function getIPOs() {
    try {
        const res = await ipoListApi({});
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


export async function getIPODetails(request) {
    try {
        const res = await getIPODetailsApi(request);
        console.log('getIPODetailsApi res', res);
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