import axiosInstance from "@/lib/axiosInstance";

export function login(request) {
    return axiosInstance.post(`/authentication/google-login/?platform=Android`, request, true)
}

export function ipoListApi(request) {
    return axiosInstance.post(`ipo/new-ipo-list?categorys=live&categorys=upcoming&page_size=${request?.pageSize}&page=${request?.page}&platform=Android`, request, true)
}

export function getIPODetailsApi(request) {
    return axiosInstance.get(`ipo/${request?.id}/?platform=Android`, {}, true)
}

export function getSearchIPO(request) {
    let search = ""
    if (request?.search) {
        search = `&search=${request?.search}`
    }
    return axiosInstance.get(`ipo/ipo-list-for-dropdown?platform=Android${search}`, {}, true)
}

// {{local}}ipo/ipo-list-for-dropdown?search=968566&platform=Android
