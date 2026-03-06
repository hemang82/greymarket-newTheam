
/**
 * Fetch IPO list (server-side)
 * Always fresh per request
 */

import { getIPODetailsApi, getIPOGmpApi, getNewsListApi, ipoListApi } from "@/api";
import { useIPOStore } from "@/stores/useAppStore";

export async function getIPOsServer(request) {
    try {
        const res = await ipoListApi(request);
        if (res?.meta?.status_code == 200) {
            return res?.data || { results: [], count: 0 };
        } else {
            return { results: [], count: 0 };
        }
    } catch (err) {
        console.error("Error fetching IPO list:", err?.message || err);
        return { results: [], count: 0 };
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
        console.error("Error fetching IPO details:", err?.message || err);
        return {};
    }
}

export async function getIPODetailsGMPServer(request) {
    try {
        const res = await getIPOGmpApi(request);
        if (res?.meta?.status_code == 200) {
            return res?.data || {};
        } else {
            return {};
        }
    } catch (err) {
        console.error("Error fetching IPO GMP data:", err?.message || err);
        return {};
    }
}

// export async function getNewsListServer(request) {
//     try {
//         const res = await getNewsListApi(request);
//         if (res?.meta?.status_code == 200) {
//             return res?.data || {};
//         } else {
//             return {};
//         }
//     } catch (err) {
//         console.error("Error fetching IPO details:");
//         return {};
//     }
// }

export async function getNewsListServer(request = {}) {
    try {
        const res = await fetch('https://docipo.ipo-trend.com/api/v1/common/getNewsList', {
            method: 'POST', headers: { 'Content-Type': 'application/json', }, cache: 'no-store',
            body: JSON.stringify(request)
        });
        if (!res.ok) return [];
        const json = await res.json();
        if (json?.code == '1') {
            return json?.data || [];
        } else {
            return [];
        }
    } catch (err) {
        console.error("Error fetching News List:", err?.message || err);
        return [];
    }
}

export async function getNewsItemServer(id) {
    try {
        const res = await fetch('https://docipo.ipo-trend.com/api/v1/common/getNewsList', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            cache: 'no-store',
            body: JSON.stringify({ page: 1, pageSize: 150 })
        });
        if (!res.ok) return null;
        const json = await res.json();
        if (json?.code == '1' && json?.data?.data) {
            const item = json.data.data.find(n => String(n.id) === String(id));
            if (item) return item;
        }
        return null;
    } catch (err) {
        console.error("Error fetching News Item:", err?.message || err);
        return null;
    }
}

export async function getIPOAboutusServer(request = {}) {
    try {
        const res = await fetch('https://docipo.ipo-trend.com/api/v1/common/rewritecontentlisting', {
            method: 'POST', headers: { 'Content-Type': 'application/json', }, cache: 'no-store',
            body: JSON.stringify(request)
        });
        if (!res.ok) return [];
        const json = await res.json();
        if (json?.code == '1') {
            return json?.data || [];
        } else {
            return [];
        }
    } catch (err) {
        console.error("Error fetching IPO About Us:", err?.message || err);
        return [];
    }
}