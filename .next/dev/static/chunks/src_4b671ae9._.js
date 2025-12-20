(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ThemeProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.module.js [app-client] (ecmascript)");
"use client";
;
;
;
function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ThemeProvider.js",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/base/Button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@iconify/react/dist/iconify.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function Button({ href, icon, leading, label, size = "base", color = "dark", variant = "solid", block = false, onClick, className }) {
    const iconClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])({
        "size-5": size === "base"
    }, {
        "size-4": size === "small"
    }, {
        "group-hover:translate-x-1 duration-100 ease-in-out": variant === "link"
    });
    const Tag = href ? "a" : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        href: href,
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group inline-flex gap-2 items-center rounded-md leading-none duration-200 ease-in-out", {
            "text-sm px-6 py-4": size === "base",
            "text-sm px-4 py-2": size === "small"
        }, {
            "bg-primary-500 text-primary-50 hover:bg-primary-600": color === "primary" && variant === "solid",
            "text-primary-500 bg-transparent px-0 py-1": color === "primary" && variant === "link",
            "bg-base-800 text-base-50 hover:bg-base-950 dark:invert": color === "dark",
            "bg-base-200 text-base-600 hover:bg-white dark:invert": color === "light",
            "bg-white text-base-600 hover:bg-base-200": color === "white",
            "bg-transparent text-base-600 ": color === "transparent"
        }, {
            "hover:scale-95": variant !== "link"
        }, {
            "w-full justify-center": block
        }, className),
        children: [
            leading && icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                icon: icon,
                className: iconClass
            }, void 0, false, {
                fileName: "[project]/src/components/base/Button.js",
                lineNumber: 52,
                columnNumber: 27
            }, this),
            label,
            !leading && icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                icon: icon,
                className: iconClass
            }, void 0, false, {
                fileName: "[project]/src/components/base/Button.js",
                lineNumber: 54,
                columnNumber: 28
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/base/Button.js",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ThemeSwitch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeSwitch",
    ()=>ThemeSwitch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/Button.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ThemeSwitch = ()=>{
    _s();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        icon: theme === "dark" ? "tabler:moon" : "tabler:sun",
        color: "transparent",
        className: "p-1",
        onClick: ()=>setTheme(theme === "dark" ? "light" : "dark")
    }, void 0, false, {
        fileName: "[project]/src/components/ThemeSwitch.js",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ThemeSwitch, "5ABGV54qnXKp6rHn7MS/8MjwRhQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeSwitch;
var _c;
__turbopack_context__.k.register(_c, "ThemeSwitch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/axiosInstance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
let REQ_SEQ = 0;
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/api/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getIPODetailsApi",
    ()=>getIPODetailsApi,
    "getSearchIPO",
    ()=>getSearchIPO,
    "ipoListApi",
    ()=>ipoListApi,
    "login",
    ()=>login
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axiosInstance.js [app-client] (ecmascript)");
;
function login(request) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/authentication/google-login/?platform=Android`, request, true);
}
function ipoListApi(request) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`ipo/new-ipo-list?categorys=live&categorys=upcoming&page_size=${request?.pageSize}&page=${request?.page}&platform=Android`, request, true);
}
function getIPODetailsApi(request) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`ipo/${request?.id}/?platform=Android`, {}, true);
}
function getSearchIPO(request) {
    let search = "";
    if (request?.search) {
        search = `&search=${request?.search}`;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`ipo/ipo-list-for-dropdown?platform=Android${search}`, {}, true);
} // {{local}}ipo/ipo-list-for-dropdown?search=968566&platform=Android
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app_config/CommonVariable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// dateFormats.js
__turbopack_context__.s([
    "AWS_FOLDER",
    ()=>AWS_FOLDER,
    "CODES",
    ()=>CODES,
    "DateFormats",
    ()=>DateFormats,
    "STORAGE_KEYS",
    ()=>STORAGE_KEYS,
    "TimeFormats",
    ()=>TimeFormats,
    "USER_ROLES",
    ()=>USER_ROLES
]);
const DateFormats = {
    DATE_DD_MM_YYYY: "DD-MM-YYYY",
    DATE_DD_MMM: "D MMM",
    DATE_DD_MMM_YYYY: "DD MMM YYYY",
    DATE_DD_SLASH_MM_SLASH_YYYY: "DD/MM/YYYY",
    DATE_DD_SLASH_MM_SLASH_YYYY_TIME: "DD/MM/YYYY h:mm A",
    DATE_DD_MMM_YYYY_TIME_24H: "DD MMM YYYY, HH:mm",
    DATE_DD_MMM_YYYY_TIME: "DD MMM YYYY, hh:mm A",
    DATE_MMM_DD_YYYY_TIME: "MMM DD YYYY, hh:mm A",
    DATE_D_M_YYYY_TIME: "D-M-YYYY h:mm A",
    DATE_ISO_LOCAL: "YYYY-MM-DD",
    DATE_DOT_FORMAT: "DD.MM.YYYY H:mm",
    DATE_DAY_MONTH_NAME: "ddd, MMMM DD"
};
const TimeFormats = {
    TIME_12_HOUR: "hh:mm A",
    TIME_24_HOUR: "HH:mm",
    TIME_12_HOUR_WITH_SECONDS: "hh:mm:ss A",
    TIME_24_HOUR_WITH_SECONDS: "HH:mm:ss",
    DATE_SHORT: "MM/DD/YYYY",
    DATE_LONG: "MMMM D, YYYY",
    DATETIME_12_HOUR: "MMMM D, YYYY h:mm A",
    DATETIME_24_HOUR: "MMMM D, YYYY HH:mm",
    FULL_DATETIME_12_HOUR: "dddd, MMMM D, YYYY h:mm A",
    FULL_DATETIME_24_HOUR: "dddd, MMMM D, YYYY HH:mm"
};
const CODES = {
    SUCCESS: 200,
    VALIDATION_ERROR: 400,
    ACCESS_TOKEN_EXPIRE: 403,
    INACTIVE: 423,
    NOT_FOUND: 404,
    ERROR: 550,
    INTERNAL_ERROR: 500,
    UNAUTHORIZED: 401,
    REFRESH_TOKEN_EXPIRED: 410,
    CREATED: 201
};
const USER_ROLES = {
    AGENT: 'sub_admin',
    ADMIN: 'admin'
};
const STORAGE_KEYS = {
    LOGIN_KEY: "GMI_is_login",
    AUTH_KEY: 'GMI_auth',
    ACCESS_TOKEN_KEY: 'GMI_access_token',
    REFRESH_TOKEN_KEY: 'GMI_refresh_token',
    LANGUAGE_KEY: 'GMI_language',
    ROLE_KEY: 'GMI_role'
};
const AWS_FOLDER = {
    PROFILE_IMAGE: 'profile_image'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app_config/CommonFunction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TOAST_ERROR",
    ()=>TOAST_ERROR,
    "TOAST_INFO",
    ()=>TOAST_INFO,
    "TOAST_SUCCESS",
    ()=>TOAST_SUCCESS,
    "TOAST_WARNING",
    ()=>TOAST_WARNING,
    "cleanHTMLContent",
    ()=>cleanHTMLContent,
    "default",
    ()=>ClientOnly,
    "formatDateTime",
    ()=>formatDateTime,
    "formatIndianNumber",
    ()=>formatIndianNumber,
    "formatIndianPrice",
    ()=>formatIndianPrice,
    "formatOrDash",
    ()=>formatOrDash,
    "formatToFixed",
    ()=>formatToFixed,
    "getLocalStorage",
    ()=>getLocalStorage,
    "loginRedirection",
    ()=>loginRedirection,
    "removeLocalStorage",
    ()=>removeLocalStorage,
    "setLocalStorage",
    ()=>setLocalStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/moment/moment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app_config/CommonVariable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$isomorphic$2d$dompurify$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/isomorphic-dompurify/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
function formatIndianPrice(price) {
    try {
        let number = 0;
        if (typeof price === "string") {
            number = parseFloat(price) || 0;
        } else if (typeof price === "number") {
            number = price;
        }
        // Detect if the number has decimal part
        const hasDecimal = number % 1 !== 0;
        return number.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
            minimumFractionDigits: hasDecimal ? 2 : 0,
            maximumFractionDigits: hasDecimal ? 2 : 0
        });
    } catch (e) {
        return "₹0";
    }
}
function formatIndianNumber(value, showDecimals = true) {
    if (value === null || value === undefined || value === "") return "0";
    const num = Number(value);
    if (Number.isNaN(num)) return String(value);
    const hasDecimal = num % 1 !== 0;
    return num.toLocaleString("en-IN", {
        minimumFractionDigits: showDecimals && hasDecimal ? 2 : 0,
        maximumFractionDigits: showDecimals && hasDecimal ? 2 : 0
    });
}
function formatToFixed(value, decimals = 2) {
    const num = Number(value);
    // handle invalid or empty input
    if (isNaN(num)) return "0.00";
    return num.toFixed(decimals);
}
function formatOrDash(value, decimals = 2) {
    const num = Number(value);
    // if invalid or explicitly zero
    if (!Number.isFinite(num) || num === 0) return "-";
    // format to given decimals
    return num.toFixed(decimals);
}
function formatDateTime(date, format = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DateFormats"].DATE_DD_MM_YYYY) {
    if (!date) return "—";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(date).format(format);
}
function cleanHTMLContent(html = "") {
    if (!html || typeof html !== "string") {
        return {
            dangerouslySetInnerHTML: {
                __html: ""
            }
        };
    }
    const cleanedHtml = html.replace(/<span[^>]*class="ql-ui"[^>]*><\/span>/g, "").replace(/\sdata-[a-zA-Z-]+="[^"]*"/g, "").replace(/\scontenteditable="[^"]*"/g, "").replace(/<p><br><\/p>/g, "").replace(/\s{2,}/g, " ").trim();
    const safe = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$isomorphic$2d$dompurify$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sanitize(cleanedHtml, {
        // keep it strict; loosen as needed:
        ALLOWED_TAGS: [
            "a",
            "b",
            "i",
            "em",
            "strong",
            "u",
            "p",
            "br",
            "ul",
            "ol",
            "li",
            "span",
            "div",
            "img",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6"
        ],
        ALLOWED_ATTR: [
            "href",
            "target",
            "rel",
            "title",
            "alt",
            "src",
            "width",
            "height",
            "loading",
            "class"
        ],
        ALLOW_DATA_ATTR: false
    });
    return {
        dangerouslySetInnerHTML: {
            __html: safe
        }
    };
}
const loginRedirection = (data)=>{
    setLocalStorage(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].LOGIN_KEY, true);
    // setLocalStorage(STORAGE_KEYS.ACCESS_TOKEN_KEY, data?.token);
    // setLocalStorage(STORAGE_KEYS.REFRESH_TOKEN_KEY, data?.token);
    setLocalStorage(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].AUTH_KEY, JSON.stringify(data));
// setLocalStorage(STORAGE_KEYS.ROLE_KEY, data?.role);
};
const TOAST_SUCCESS = (message)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(message);
};
_c = TOAST_SUCCESS;
const TOAST_ERROR = (message)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(message);
};
_c1 = TOAST_ERROR;
const TOAST_INFO = (message)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(message);
};
_c2 = TOAST_INFO;
const TOAST_WARNING = (message)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].warning(message);
};
_c3 = TOAST_WARNING;
const setLocalStorage = (key, value)=>{
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
         // SSR safety
        if (typeof value === "object") {
            localStorage.setItem(key, JSON.stringify(value));
        } else {
            localStorage.setItem(key, String(value));
        }
    } catch (error) {
        console.error("Error setting localStorage:", error);
    }
};
const getLocalStorage = (key)=>{
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
         // SSR safety
        const data = localStorage.getItem(key);
        if (!data) return null;
        try {
            return JSON.parse(data);
        } catch  {
            return data;
        }
    } catch (error) {
        console.error("Error getting localStorage:", error);
        return null;
    }
};
const removeLocalStorage = (key)=>{
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
         // SSR safety
        localStorage.clear();
    } catch (error) {
        console.error("Error removing localStorage:", error);
    }
};
function ClientOnly({ children, fallback = null }) {
    _s();
    const [mounted, setMounted] = useState(false);
    useEffect({
        "ClientOnly.useEffect": ()=>setMounted(true)
    }["ClientOnly.useEffect"], []);
    return mounted ? children : fallback;
}
_s(ClientOnly, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c4 = ClientOnly;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "TOAST_SUCCESS");
__turbopack_context__.k.register(_c1, "TOAST_ERROR");
__turbopack_context__.k.register(_c2, "TOAST_INFO");
__turbopack_context__.k.register(_c3, "TOAST_WARNING");
__turbopack_context__.k.register(_c4, "ClientOnly");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/AuthMenu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app_config/CommonFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app_config/CommonVariable.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function AuthMenu() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isLogin, setIsLogin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthMenu.useEffect": ()=>{
            const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalStorage"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"]?.LOGIN_KEY);
            const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalStorage"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"]?.AUTH_KEY); // you can store username/email here
            setIsLogin(!!token);
            console.log('useruser', user);
            setUsername(user?.user?.name || "User");
        }
    }["AuthMenu.useEffect"], []);
    if (!isLogin) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            label: "Sign In",
            href: "/auth/login",
            color: "dark",
            size: "small"
        }, "signin", false, {
            fileName: "[project]/src/components/sections/AuthMenu.js",
            lineNumber: 26,
            columnNumber: 7
        }, this);
    }
    const handleLogout = ()=>{
        // remove specific keys only
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeLocalStorage"])();
        setIsLogin(false);
        // client-side navigation — no full reload
        // TOAST_SUCCESS("Logged out successfully");
        router.push("/");
    // DO NOT call router.refresh() here (removes client-only instantness)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative group profile_hover",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "px-3 py-2 text-sm font-medium flex items-center gap-1",
                children: [
                    "👤 ",
                    username,
                    " ▾"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/AuthMenu.js",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute profile_hover_list right-0 mt-2 w-48 bg-white shadow-lg rounded-md border hidden group-hover:block z-[1000]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleLogout,
                    className: "block w-full text-left px-4 py-2 hover:bg-red-50 text-red-600 border-t",
                    children: "Logout"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/AuthMenu.js",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/AuthMenu.js",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/AuthMenu.js",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(AuthMenu, "cJFk4AgiDdOz3sn8AFkxVQUc2No=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthMenu;
var _c;
__turbopack_context__.k.register(_c, "AuthMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/cards/PricingCard.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/components/cards/PricingCard.js'\n\nExpected '</', got ':'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/src/components/sections/Header.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header,
    "default",
    ()=>ClientOnly
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeSwitch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ThemeSwitch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app_config/CommonVariable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app_config/CommonFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$AuthMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/AuthMenu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2f$PricingCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cards/PricingCard.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function ClientOnly({ children, fallback = null }) {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientOnly.useEffect": ()=>setMounted(true)
    }["ClientOnly.useEffect"], []);
    return mounted ? children : fallback;
}
_s(ClientOnly, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = ClientOnly;
function Header({ logo, links, buttons, className, ...rest }) {
    _s1();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const is_login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalStorage"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].LOGIN_KEY);
    const localUserData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalStorage"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].AUTH_KEY);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const pathsToPrefetch = [
                '/',
                '/ipo-details'
            ];
            pathsToPrefetch.forEach({
                "Header.useEffect": (path)=>{
                    router.prefetch(path);
                }
            }["Header.useEffect"]);
        }
    }["Header.useEffect"], [
        router
    ]);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showDropdown, setShowDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileSearchOpen, setMobileSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const debounceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (!query) {
                setResults([]);
                setShowDropdown(false);
                return;
            }
            clearTimeout(debounceRef.current);
            debounceRef.current = setTimeout({
                "Header.useEffect": async ()=>{
                    try {
                        setLoading(true);
                        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
                        const data = await res.json();
                        setResults(data || []);
                        setShowDropdown(true);
                    } catch (err) {
                        console.error("Search error:", err);
                    } finally{
                        setLoading(false);
                    }
                }
            }["Header.useEffect"], 300);
            return ({
                "Header.useEffect": ()=>clearTimeout(debounceRef.current)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        query
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (mobileSearchOpen) inputRef.current?.focus();
        }
    }["Header.useEffect"], [
        mobileSearchOpen
    ]);
    // Debounced autocomplete fetch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (!query) {
                setResults([]);
                setShowDropdown(false);
                return;
            }
            clearTimeout(debounceRef.current);
            debounceRef.current = setTimeout({
                "Header.useEffect": async ()=>{
                    setLoading(true);
                    try {
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSearchIPO"])({
                            search: query
                        }) //fetch(`/api/search?q=${encodeURIComponent(query)}`);
                        ;
                        console.log('resres', res);
                        if (res?.meta?.status_code == 200) {
                            setResults(res?.data?.results || []);
                        } else {
                            setResults([]);
                        }
                        setShowDropdown(true);
                    } catch (e) {
                        console.error("search error:", e);
                    } finally{
                        setLoading(false);
                    }
                }
            }["Header.useEffect"], 250);
            return ({
                "Header.useEffect": ()=>clearTimeout(debounceRef.current)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        query
    ]);
    function handleSelect(item) {
        setQuery("");
        setShowDropdown(false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2f$PricingCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ipoDetailsNavigation"])(router, item.symbol);
    }
    function handleSubmit(e) {
        e?.preventDefault();
        if (!query.trim()) return;
        // router.push(`/search?q=${encodeURIComponent(query.trim())}`);
        setShowDropdown(false);
        setMobileSearchOpen(false);
    }
    function clearSearch() {
        setQuery("");
        inputRef.current?.focus();
    }
    return(// <header className="fixed w-full bg-base-50/50 dark:bg-base-950/50 backdrop-blur-xl z-10">
    // <header className="fixed w-full bg-[rgba(255,255,255,0.5)] dark:bg-[rgba(17,17,17,0.5)] backdrop-blur-xl z-10">
    //   <nav className={cn("relative h-14 container px-0 mx-auto border-b border-base flex flex-wrap justify-start items-center gap-4 lg:gap-8", className)}
    //     {...rest} >
    //     <Link href={logo.href}>
    //       <img
    //         src={logo.src}
    //         alt={logo.alt}
    //         className="h-10 w-auto dark:invert"
    //       />
    //     </Link>
    //     <div
    //       className={cn(
    //         "hidden md:block md:w-auto",
    //         open &&
    //         "block absolute top-14 m-2 right-0 w-2/3 border border-base dark:border-base-900 rounded-lg overflow-hidden bg-base-50 dark:bg-base-900 shadow-xl"
    //       )}
    //     >
    //       {pathname == '/' &&
    //         <ul className="font-medium flex flex-col gap-2 p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
    //           {links.map((link, index) => (
    //             <a
    //               key={index}
    //               href={link.href}
    //               className={open ? "text-sm font-normal text-base-600 dark:text-base-400 hover:bg-base-100 dark:hover:bg-base-950 py-3 px-4 rounded-md" : "text-sm font-normal text-base-600 dark:text-base-400 hover:text-base-800 dark:hover:text-base-300"}
    //               onClick={() => setOpen(false)}
    //             >
    //               {link.label}
    //             </a>
    //           ))}
    //         </ul>
    //       }
    //     </div>
    // <div className="flex gap-2 ml-auto">
    //   <ThemeSwitch />
    //   {buttons.map((button, index) => (
    //     <Button key={index} {...button} />
    //   ))}
    // </div>
    //     <Button
    //       icon={open ? "tabler:x" : "tabler:menu-2"}
    //       color="transparent"
    //       className="p-2 md:hidden"
    //       onClick={() => setOpen(!open)}
    //     />
    //   </nav>
    // </header>
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed w-full bg-[rgba(255,255,255,0.5)] dark:bg-[rgba(17,17,17,0.5)] backdrop-blur-xl z-[31]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative h-14 container px-0 mx-auto border-b border-base flex flex-wrap justify-start items-center gap-4 lg:gap-8", className),
            ...rest,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cursor-pointer",
                    onClick: ()=>{
                        router.push('/');
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: logo.src,
                        alt: logo.alt,
                        className: "h-10 w-auto dark:invert"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Header.js",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Header.js",
                    lineNumber: 183,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("hidden md:block md:w-auto", open && "block absolute top-14 m-2 right-0 w-2/3 border border-base dark:border-base-900 rounded-lg overflow-hidden bg-base-50 dark:bg-base-900 shadow-xl"),
                    children: pathname == "/" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "font-medium flex flex-col gap-2 p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0",
                        children: links.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                className: open ? "text-sm font-normal text-base-600 dark:text-base-400 hover:bg-base-100 dark:hover:bg-base-950 py-3 px-4 rounded-md" : "text-sm font-normal text-base-600 dark:text-base-400 hover:text-base-800 dark:hover:text-base-300",
                                onClick: ()=>setOpen(false),
                                children: link.label
                            }, index, false, {
                                fileName: "[project]/src/components/sections/Header.js",
                                lineNumber: 197,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Header.js",
                        lineNumber: 195,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Header.js",
                    lineNumber: 187,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 ml-auto items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative hidden md:block me-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                role: "search",
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "h-4 w-4",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Header.js",
                                                lineNumber: 223,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Header.js",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Header.js",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: inputRef,
                                        value: query,
                                        onChange: (e)=>setQuery(e.target.value),
                                        onFocus: ()=>query && setShowDropdown(true),
                                        placeholder: "Search for a company",
                                        className: "w-72 lg:w-80 px-9 py-2 rounded-md border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#135c33]",
                                        "aria-label": "Search for a company"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Header.js",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this),
                                    query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: clearSearch,
                                        className: "absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400",
                                        "aria-label": "Clear search",
                                        children: "✕"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Header.js",
                                        lineNumber: 238,
                                        columnNumber: 17
                                    }, this),
                                    showDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "absolute right-0 left-0 mt-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md shadow-lg max-h-64 overflow-auto z-50",
                                        children: [
                                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "px-4 py-2 text-sm text-neutral-400",
                                                children: "Loading..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Header.js",
                                                lineNumber: 252,
                                                columnNumber: 21
                                            }, this) : results.length ? results.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    onClick: ()=>handleSelect(r),
                                                    className: "px-2 py-2 text-sm cursor-pointer hover:bg-emerald-100 dark:hover:bg-neutral-800",
                                                    children: r.company_name
                                                }, i, false, {
                                                    fileName: "[project]/src/components/sections/Header.js",
                                                    lineNumber: 255,
                                                    columnNumber: 23
                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "px-4 py-2 text-sm text-neutral-500",
                                                children: [
                                                    'No results for "',
                                                    query,
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Header.js",
                                                lineNumber: 264,
                                                columnNumber: 21
                                            }, this),
                                            query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                // onClick={() => router.push(`/search?q=${encodeURIComponent(query)}`)}
                                                className: "px-4 py-3 text-sm text-emerald-700 hover:bg-emerald-50 cursor-pointer border-t",
                                                children: [
                                                    "Search everywhere: ",
                                                    query
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Header.js",
                                                lineNumber: 268,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Header.js",
                                        lineNumber: 250,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Header.js",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Header.js",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 ml-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$AuthMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/sections/Header.js",
                                lineNumber: 299,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Header.js",
                            lineNumber: 283,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Header.js",
                    lineNumber: 215,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    icon: open ? "tabler:x" : "tabler:menu-2",
                    color: "transparent",
                    className: "p-2 md:hidden",
                    onClick: ()=>setOpen(!open)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Header.js",
                    lineNumber: 305,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Header.js",
            lineNumber: 175,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Header.js",
        lineNumber: 174,
        columnNumber: 5
    }, this));
}
_s1(Header, "hefNrwI9088dHwOZRG2lwdnC50o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = Header;
var _c, _c1;
__turbopack_context__.k.register(_c, "ClientOnly");
__turbopack_context__.k.register(_c1, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/cards/TestimonialCard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @next/next/no-img-element */ __turbopack_context__.s([
    "TestimonialCard",
    ()=>TestimonialCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function TestimonialCard(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group bg-white dark:bg-base-950 rounded-xl p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: props.avatar,
                        alt: props.name,
                        className: "size-9 rounded-full ring-3 ring-primary-300 border-burple-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cards/TestimonialCard.js",
                        lineNumber: 6,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-base font-display text-title font-semibold leading-none",
                                children: props.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/cards/TestimonialCard.js",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs leading-none text-muted",
                                children: props.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/cards/TestimonialCard.js",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/cards/TestimonialCard.js",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cards/TestimonialCard.js",
                lineNumber: 5,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-base-600 font-body mt-4",
                children: props.testimonial
            }, void 0, false, {
                fileName: "[project]/src/components/cards/TestimonialCard.js",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cards/TestimonialCard.js",
        lineNumber: 4,
        columnNumber: 5
    }, this);
}
_c = TestimonialCard;
var _c;
__turbopack_context__.k.register(_c, "TestimonialCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/cards/FeatureCard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeatureCard",
    ()=>FeatureCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
;
;
function FeatureCard({ title, description, className, iconClass, step }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center text-center gap-3 p-6 rounded-lg", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-10 h-10 rounded-full flex items-center justify-center", "bg-primary-100 text-white font-semibold", iconClass),
                "aria-label": `Step ${step}`,
                children: step
            }, void 0, false, {
                fileName: "[project]/src/components/cards/FeatureCard.js",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                className: "text-xl font-title font-semibold text-title",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/cards/FeatureCard.js",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-md  max-w-[28rem]",
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/cards/FeatureCard.js",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cards/FeatureCard.js",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = FeatureCard;
var _c;
__turbopack_context__.k.register(_c, "FeatureCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/cards/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2f$TestimonialCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cards/TestimonialCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2f$PricingCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cards/PricingCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2f$FeatureCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cards/FeatureCard.js [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/stores/useAppStore.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import { create } from "zustand";
// export const useIPOStore = create((set) => ({
//   ipos: [],
//   setIPOs: (list) => set({ ipos: list }),
//   // handy if you later add loading/error states
//   reset: () => set({ ipos: [] }),
// }));
__turbopack_context__.s([
    "useIPOStore",
    ()=>useIPOStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
"use client";
;
;
const useIPOStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        ipos: [],
        setIPOs: (list)=>set({
                ipos: list || []
            }),
        reset: ()=>set({
                ipos: []
            })
    }), {
    name: "ipo-store",
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>sessionStorage),
    partialize: (state)=>({
            ipos: state.ipos
        })
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CustomPagination.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Pagination.js
__turbopack_context__.s([
    "default",
    ()=>CustomPagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
function usePageRange({ total, pageSize, current }) {
    _s();
    // returns an array like: [1, 2, 3, '…', 10]
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePageRange.useMemo": ()=>{
            const totalPages = Math.max(1, Math.ceil(total / pageSize));
            const c = Math.min(Math.max(1, current), totalPages);
            const delta = 1; // how many around current
            const range = [];
            const left = Math.max(2, c - delta);
            const right = Math.min(totalPages - 1, c + delta);
            range.push(1);
            if (left > 2) range.push("…");
            for(let i = left; i <= right; i++)range.push(i);
            if (right < totalPages - 1) range.push("…");
            if (totalPages > 1) range.push(totalPages);
            return {
                pages: range,
                totalPages
            };
        }
    }["usePageRange.useMemo"], [
        total,
        pageSize,
        current
    ]);
}
_s(usePageRange, "nwk+m61qLgjDVUp4IGV/072DDN4=");
function CustomPagination({ total = 0, pageSize = 10, current = 1, onChange = ()=>{}, pageSizeOptions = [
    10,
    20,
    50
], className = "" }) {
    _s1();
    const { pages, totalPages } = usePageRange({
        total,
        pageSize,
        current
    });
    const go = (p)=>{
        if (p < 1 || p > totalPages || p === current) return;
        onChange({
            page: p,
            pageSize
        });
    };
    const changeSize = (e)=>{
        const newSize = Number(e.target.value) || 10;
        const newTotalPages = Math.max(1, Math.ceil(total / newSize));
        const newPage = Math.min(current, newTotalPages);
        onChange({
            page: newPage,
            pageSize: newSize
        });
    };
    const baseBtn = "h-8 min-w-8 px-2 inline-flex items-center justify-center rounded-lg border text-sm transition";
    const neutral = "border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-base-700 dark:text-gray-200 dark:hover:bg-base-900";
    const active = "border-[#135c33] text-[#135c33] bg-[#135c3317] dark:border-[#135c33] dark:text-[#135c33] dark:bg-[#135c3317]";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center w-full py-6  border-b bg-base-100 border-gray-200 dark:border-base-800",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: [
                "w-[90%] lg:w-[68%] md:w-[68%] flex flex-wrap items-center justify-between gap-3 rounded-2xl",
                "bg-white dark:bg-base-950 ring-1 ring-gray-200 dark:ring-base-800 p-3",
                className
            ].join(" "),
            role: "navigation",
            "aria-label": "Pagination",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${baseBtn} ${neutral}`,
                            disabled: current <= 1,
                            onClick: ()=>go(current - 1),
                            "aria-label": "Previous page",
                            children: "Previous"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CustomPagination.js",
                            lineNumber: 59,
                            columnNumber: 21
                        }, this),
                        pages.map((p, i)=>p === "…" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 text-gray-500",
                                children: "…"
                            }, `ellipsis-${i}`, false, {
                                fileName: "[project]/src/components/CustomPagination.js",
                                lineNumber: 70,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${baseBtn} ${p === current ? active : neutral}`,
                                onClick: ()=>go(p),
                                "aria-current": p === current ? "page" : undefined,
                                children: p
                            }, p, false, {
                                fileName: "[project]/src/components/CustomPagination.js",
                                lineNumber: 74,
                                columnNumber: 29
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${baseBtn} ${neutral}`,
                            disabled: current >= totalPages,
                            onClick: ()=>go(current + 1),
                            "aria-label": "Next page",
                            children: "Next"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CustomPagination.js",
                            lineNumber: 85,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CustomPagination.js",
                    lineNumber: 58,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Rows"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CustomPagination.js",
                            lineNumber: 97,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            className: "h-8 rounded-md border border-gray-300 dark:border-base-700 bg-white dark:bg-base-950 px-2",
                            value: pageSize,
                            onChange: changeSize,
                            children: pageSizeOptions.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: n,
                                    children: [
                                        n,
                                        " / page"
                                    ]
                                }, n, true, {
                                    fileName: "[project]/src/components/CustomPagination.js",
                                    lineNumber: 104,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/CustomPagination.js",
                            lineNumber: 98,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CustomPagination.js",
                    lineNumber: 96,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CustomPagination.js",
            lineNumber: 53,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/CustomPagination.js",
        lineNumber: 51,
        columnNumber: 9
    }, this);
}
_s1(CustomPagination, "k/7zjsvzMaE4SyN+/rwuo3O2jXc=", false, function() {
    return [
        usePageRange
    ];
});
_c = CustomPagination;
var _c;
__turbopack_context__.k.register(_c, "CustomPagination");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/PricingSection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PricingSection",
    ()=>PricingSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/cards/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2f$PricingCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cards/PricingCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAppStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAppStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CustomPagination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CustomPagination.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function PricingSection({ title, description, badge, pricing, ipoData, page, pageSize, ...rest }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const setIPOs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAppStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIPOStore"])({
        "PricingSection.useIPOStore[setIPOs]": (s)=>s.setIPOs
    }["PricingSection.useIPOStore[setIPOs]"]);
    const ipoListData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAppStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIPOStore"])({
        "PricingSection.useIPOStore[ipoListData]": (s)=>s.ipos
    }["PricingSection.useIPOStore[ipoListData]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PricingSection.useEffect": ()=>{
            ({
                "PricingSection.useEffect": async ()=>{
                    setIPOs(ipoData || {});
                }
            })["PricingSection.useEffect"]();
        }
    }["PricingSection.useEffect"], [
        ipoData,
        setIPOs
    ]);
    const handlePageChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PricingSection.useCallback[handlePageChange]": ({ page: newPage = 1, pageSize: newSize = pageSize })=>{
            const params = new URLSearchParams(searchParams.toString());
            params.set("page", String(newPage));
            params.set("pageSize", String(newSize));
            // This works fine even when pathname === "/"
            router.push(`${pathname}?${params.toString()}`, {
                scroll: true
            });
        }
    }["PricingSection.useCallback[handlePageChange]"], [
        router,
        pathname,
        searchParams,
        pageSize
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-base-100 dark:bg-base-900 py-10",
                ...rest,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-screen-xl px-2 sm:px-3 md:px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4",
                        children: ipoListData?.results?.length > 0 && ipoListData?.results?.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2f$PricingCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PricingCard"], {
                                ipoListData: p
                            }, i, false, {
                                fileName: "[project]/src/components/sections/PricingSection.js",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/PricingSection.js",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/PricingSection.js",
                    lineNumber: 33,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/PricingSection.js",
                lineNumber: 32,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CustomPagination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                total: ipoListData?.count || 100,
                current: page,
                pageSize: pageSize,
                onChange: (newPage)=>{
                    handlePageChange(newPage);
                },
                pageSizeOptions: [
                    10,
                    20,
                    50,
                    100
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/sections/PricingSection.js",
                lineNumber: 42,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
}
_s(PricingSection, "8E+HekP2dDQHUe4BbSoDvGoWwNg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAppStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIPOStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAppStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIPOStore"]
    ];
});
_c = PricingSection;
var _c;
__turbopack_context__.k.register(_c, "PricingSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/base/Accordion.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Accordion",
    ()=>Accordion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@iconify/react/dist/iconify.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Accordion({ items = [] }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: "w-full rounded-md divide-y divide-base-200 dark:divide-base-800",
        type: "single",
        collapsible: true,
        children: items?.length > 0 && items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10"),
                value: index + 1,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                        className: "flex",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group flex flex-1 cursor-pointer items-center justify-between leading-none outline-none", "text-xl text-title h-20 hover:text-muted font-normal font-display "),
                            children: [
                                item.title,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    icon: "tabler:chevron-down",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180", "size-6"),
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/base/Accordion.js",
                                    lineNumber: 25,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/base/Accordion.js",
                            lineNumber: 21,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/base/Accordion.js",
                        lineNumber: 20,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-5",
                            children: item.body
                        }, void 0, false, {
                            fileName: "[project]/src/components/base/Accordion.js",
                            lineNumber: 37,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/base/Accordion.js",
                        lineNumber: 32,
                        columnNumber: 13
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/src/components/base/Accordion.js",
                lineNumber: 13,
                columnNumber: 11
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/base/Accordion.js",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Accordion;
var _c;
__turbopack_context__.k.register(_c, "Accordion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_4b671ae9._.js.map