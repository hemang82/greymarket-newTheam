import axiosInstance from "@/lib/axiosInstance";

export function ipoListApi(request) {
    return axiosInstance.post(`ipo/new-ipo-list?categorys=live&categorys=upcoming&page_size=${request?.pageSize}&page=${request?.page}&platform=Android`, request, true)
}

export function getIPODetailsApi(request) {
    return axiosInstance.get(`ipo/${request?.id}/?platform=Android`, {}, true)
}

// https://api.ipo-trend.com/ipo/PINELABS/
