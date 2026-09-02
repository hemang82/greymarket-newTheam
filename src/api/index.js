import axiosInstance from "@/lib/axiosInstance";

export function login(request) {
    return axiosInstance.post(`/authentication/google-login/?platform=Android`, request, true)
}

export function ipoListApi(request) {
    let query = '';
    if (request?.pageSize) {
        query += `&page_size=${request?.pageSize}`
    }

    if (request?.page) {
        query += `&page=${request?.page}`
    }

    if (request?.ipo_type && request.ipo_type !== 'all') {
        query += `&ipo_type=${encodeURIComponent(request.ipo_type)}`;
    }

    let catQuery = 'categorys=live&categorys=upcoming';
    if (request?.categories) {
        if (Array.isArray(request.categories)) {
            catQuery = request.categories.map(c => `categorys=${encodeURIComponent(c)}`).join('&');
        } else {
            catQuery = `categorys=${encodeURIComponent(request.categories)}`;
        }
    } else if (request?.categorys) {
        if (Array.isArray(request.categorys)) {
            catQuery = request.categorys.map(c => `categorys=${encodeURIComponent(c)}`).join('&');
        } else {
            catQuery = `categorys=${encodeURIComponent(request.categorys)}`;
        }
    }

    return axiosInstance.post(`ipo/new-ipo-list?${catQuery}&platform=Android${query}`, request, true)
}

export function getIPODetailsApi(request) {
    return axiosInstance.get(`ipo/${request?.id}/?platform=Android`, {}, true)
}

// https://api.ipo-trend.com/ipo/ipo-gmp-detail/SHADOWFAX/?platform=Web

export function getIPOGmpApi(request) {
    return axiosInstance.get(`ipo/ipo-gmp-detail/${request?.id}/?platform=Android`, {}, true)
}

export function getSearchIPO(request) {
    let search = ""
    if (request?.search) {
        search = `&search=${request?.search}`
    }
    return axiosInstance.get(`ipo/ipo-list-for-dropdown?platform=Android${search}`, {}, true)
}

export function getNewsListApi(request) {
    return axiosInstance.get(`news/?page=${request?.page}&page_size=${request?.pageSize}&platform=Android`, {}, true)
}

export function getIpoCalendarApi(request) {
    const month = request?.month || (new Date().getMonth() + 1);
    const year = request?.year || new Date().getFullYear();
    let query = `?platform=Android&month=${month}&year=${year}`;
    if (request?.ipo_type && request.ipo_type !== "all") {
        query += `&ipo_type=${request.ipo_type}`;
    }
    return axiosInstance.get(`ipo/year-wise-list-of-upcoming-ipo${query}`, {}, true);
}