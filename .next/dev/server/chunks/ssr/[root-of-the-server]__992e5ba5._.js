module.exports = [
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/src/lib/axiosInstance.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
let REQ_SEQ = 0;
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "https://api.ipo-trend.com/") || "https://api.example.com",
    timeout: 60000,
    headers: {
        "Content-Type": "application/json"
    }
});
// ====== REQUEST INTERCEPTOR ======
axiosInstance.interceptors.request.use((config)=>{
    const id = ++REQ_SEQ;
    config.metadata = {
        id,
        start: new Date()
    };
    return config;
}, (error)=>Promise.reject(error));
// ====== RESPONSE INTERCEPTOR ======
axiosInstance.interceptors.response.use((response)=>{
    const { id, start } = response?.config?.metadata || {};
    const duration = start ? new Date() - start : 0;
    const method = (response?.config?.method || "GET").toUpperCase();
    const fullUrl = `${response?.config?.baseURL || ""}${response?.config?.url || ""}`;
    const status = response?.status;
    console.log("\n========================= API CALL START =========================");
    console.log(`[#${id}] ✅ STATUS  : ${status}`);
    // Request body (if present)
    if (response.config?.data) {
        try {
            const body = JSON.parse(response.config.data);
            console.log(`📦 Request Body: ${JSON.stringify(body, null, 2)}`);
        } catch  {
            console.log(`📦 Request Body: ${response.config.data}`);
        }
    }
    // Response data
    console.log(`[#${id}] ⚙️  Method : ${method} 🔗 API URL : ${fullUrl} (✅ STATUS  : ${status}) (⏱️ Duration: ${duration} ms)`);
    console.log("========================== API CALL END ==========================\n");
    return response.data;
}, (error)=>{
    const { id, start } = error?.config?.metadata || {};
    const duration = start ? new Date() - start : 0;
    const method = (error?.config?.method || "UNKNOWN").toUpperCase();
    const fullUrl = `${error?.config?.baseURL || ""}${error?.config?.url || ""}`;
    const status = error?.response?.status || "No Response";
    console.log("\n========================= API CALL START =========================");
    console.log(`[#${id}] ❌ STATUS   : ${status}`);
    if (error.config?.data) {
        try {
            const body = JSON.parse(error.config.data);
            console.log(`📦 Request Body: ${JSON.stringify(body, null, 2)}`);
        } catch  {
            console.log(`📦 Request Body: ${error.config.data}`);
        }
    }
    console.log(`[#${id}] ⚙️ Method : ${method} 🔗 API URL : ${fullUrl} (⏱️ Duration: ${duration} ms)`);
    if (error.response?.data) {
        console.log("🧾 Response:", error.response.data);
    }
    console.log("========================== API CALL END ==========================\n");
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = axiosInstance;
}),
"[project]/src/api/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getIPODetailsApi",
    ()=>getIPODetailsApi,
    "ipoListApi",
    ()=>ipoListApi,
    "login",
    ()=>login
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axiosInstance.js [app-ssr] (ecmascript)");
;
function login(request) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`/authentication/google-login/?platform=Android`, request, true);
}
function ipoListApi(request) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`ipo/new-ipo-list?categorys=live&categorys=upcoming&page_size=${request?.pageSize}&page=${request?.page}&platform=Android`, request, true);
}
function getIPODetailsApi(request) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`ipo/${request?.id}/?platform=Android`, {}, true);
} // https://api.ipo-trend.com/ipo/PINELABS/
}),
"[project]/src/app/auth/login/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$oauth$2f$google$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-oauth/google/dist/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app_config/CommonVariable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app_config/CommonFunction.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function page() {
    function base64UrlDecode(str) {
        // Convert base64url -> base64
        str = str.replace(/-/g, '+').replace(/_/g, '/');
        // Pad the string to be a multiple of 4
        while(str.length % 4){
            str += '=';
        }
        try {
            return atob(str); // decode base64
        } catch (err) {
            console.error('base64 decode failed:', err);
            return null;
        }
    }
    function decodeJwt(token) {
        try {
            if (!token || typeof token !== 'string') return null;
            const parts = token.split('.');
            if (parts.length !== 3) {
                console.error('Invalid token format');
                return null;
            }
            const payload = parts[1];
            const decodedPayload = base64UrlDecode(payload);
            if (!decodedPayload) return null;
            return JSON.parse(decodedPayload);
        } catch (e) {
            console.error('decodeJwt error:', e);
            return null;
        }
    }
    const handleGoogleLogin = async (data)=>{
        const updatedUserData = await decodeJwt(data.credential);
        console.log('updatedUserData', updatedUserData);
        let datas = {
            email: updatedUserData?.email,
            register_type: 'google',
            login_domain: 'check-allotment'
        };
        let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["login"])(datas);
        if (response?.meta?.status_code == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CODES"]?.SUCCESS) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loginRedirection"])({
                token: updatedUserData?.aud,
                user: {
                    name: updatedUserData?.given_name,
                    email: updatedUserData?.email,
                    picture: updatedUserData?.picture
                },
                role: 'user'
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOAST_SUCCESS"])("Login Successful");
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOAST_ERROR"])("Login Failed");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen w-full bg-neutral-50 dark:bg-neutral-950 flex items-center justify-center px-4 py-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-5xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden bg-white/80 dark:bg-neutral-900/80 shadow-[0_10px_40px_rgba(0,0,0,.08)] ring-1 ring-black/5 backdrop-blur-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "relative p-10 sm:p-12 text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "aria-hidden": "true",
                                    className: "absolute inset-0 opacity-20",
                                    style: {
                                        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,.6) 1px, transparent 0)",
                                        backgroundSize: "22px 22px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/auth/login/page.jsx",
                                    lineNumber: 85,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "aria-hidden": "true",
                                    className: "absolute inset-0",
                                    style: {
                                        background: "linear-gradient(135deg, #0f4f33 0%, #115b3a 35%, #0f6b41 100%)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/auth/login/page.jsx",
                                    lineNumber: 95,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex h-full flex-col items-center justify-center text-center gap-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "tracking-[0.2em] text-lg  font-semibold text-white/95 sm:text-sm uppercase ",
                                                    children: "Welcome Back"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/auth/login/page.jsx",
                                                    lineNumber: 106,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mx-auto h-0.5 w-16 rounded-full bg-white/70"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/auth/login/page.jsx",
                                                    lineNumber: 109,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/auth/login/page.jsx",
                                            lineNumber: 105,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center gap-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/white_logo.png",
                                                alt: "Grey Market IPO",
                                                width: 100,
                                                height: 150,
                                                className: "object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/auth/login/page.jsx",
                                                lineNumber: 113,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/auth/login/page.jsx",
                                            lineNumber: 112,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/auth/login/page.jsx",
                                    lineNumber: 104,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/auth/login/page.jsx",
                            lineNumber: 83,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "p-6 sm:p-10 bg-neutral-50/60 dark:bg-neutral-950/60",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto w-full max-w-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl bg-white dark:bg-neutral-900 p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,.06)] ring-1 ring-neutral-200/70 dark:ring-white/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl sm:text-3xl font-semibold tracking-tight text-[#115b3a] dark:text-emerald-300",
                                            children: "Login"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/auth/login/page.jsx",
                                            lineNumber: 147,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-neutral-600 dark:text-neutral-400",
                                            children: "Login to access your Grey Market account"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/auth/login/page.jsx",
                                            lineNumber: 150,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$oauth$2f$google$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GoogleLogin"], {
                                                onSuccess: handleGoogleLogin,
                                                // onError={handleGoogleError}
                                                size: "large",
                                                text: "continue_with",
                                                shape: "circle",
                                                width: "370"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/auth/login/page.jsx",
                                                lineNumber: 171,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/auth/login/page.jsx",
                                            lineNumber: 170,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-6 text-[11px] leading-relaxed text-neutral-500",
                                            children: [
                                                "By continuing, you agree to our",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: "underline hover:text-neutral-700",
                                                    href: "/terms",
                                                    children: "Terms"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/auth/login/page.jsx",
                                                    lineNumber: 183,
                                                    columnNumber: 41
                                                }, this),
                                                " ",
                                                "and",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: "underline hover:text-neutral-700",
                                                    href: "/privacy",
                                                    children: "Privacy Policy"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/auth/login/page.jsx",
                                                    lineNumber: 185,
                                                    columnNumber: 41
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/auth/login/page.jsx",
                                            lineNumber: 181,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/auth/login/page.jsx",
                                    lineNumber: 146,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/auth/login/page.jsx",
                                lineNumber: 145,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/login/page.jsx",
                            lineNumber: 144,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/auth/login/page.jsx",
                    lineNumber: 80,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/auth/login/page.jsx",
                lineNumber: 78,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/auth/login/page.jsx",
            lineNumber: 77,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__992e5ba5._.js.map