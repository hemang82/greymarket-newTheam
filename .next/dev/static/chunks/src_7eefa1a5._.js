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
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group inline-flex gap-2 items-center rounded-full leading-none duration-200 ease-in-out", {
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
    setLocalStorage(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].ACCESS_TOKEN_KEY, data?.token);
    setLocalStorage(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].REFRESH_TOKEN_KEY, data?.token);
    setLocalStorage(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].AUTH_KEY, JSON.stringify(data));
    setLocalStorage(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].ROLE_KEY, data?.role);
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
        const data = typeof value === "object" ? JSON.stringify(value) : value;
        localStorage.setItem(key, data);
    } catch (error) {
        console.error("Error setting localStorage:", error);
    }
};
const getLocalStorage = (key)=>{
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error("Error getting localStorage:", error);
        return null;
    }
};
const removeLocalStorage = (key)=>{
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error("Error removing localStorage:", error);
    }
};
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "TOAST_SUCCESS");
__turbopack_context__.k.register(_c1, "TOAST_ERROR");
__turbopack_context__.k.register(_c2, "TOAST_INFO");
__turbopack_context__.k.register(_c3, "TOAST_WARNING");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Header.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app_config/CommonFunction.js [app-client] (ecmascript)");
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
;
function Header({ logo, links, buttons, className, ...rest }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // const localTokenData = getLocalStorage(STORAGE_KEYS.ACCESS_TOKEN_KEY);
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
    console.log('localUserData', localUserData);
    return(// <header className="fixed w-full bg-base-50/50 dark:bg-base-950/50 backdrop-blur-xl z-10">
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed w-full bg-[rgba(255,255,255,0.5)] dark:bg-[rgba(17,17,17,0.5)] backdrop-blur-xl z-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative h-14 container px-0 mx-auto border-b border-base flex flex-wrap justify-start items-center gap-4 lg:gap-8", className),
            ...rest,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: logo.href,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: logo.src,
                        alt: logo.alt,
                        className: "h-10 w-auto dark:invert"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Header.js",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Header.js",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("hidden md:block md:w-auto", open && "block absolute top-14 m-2 right-0 w-2/3 border border-base dark:border-base-900 rounded-lg overflow-hidden bg-base-50 dark:bg-base-900 shadow-xl"),
                    children: pathname == '/' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "font-medium flex flex-col gap-2 p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0",
                        children: links.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                className: open ? "text-sm font-normal text-base-600 dark:text-base-400 hover:bg-base-100 dark:hover:bg-base-950 py-3 px-4 rounded-md" : "text-sm font-normal text-base-600 dark:text-base-400 hover:text-base-800 dark:hover:text-base-300",
                                onClick: ()=>setOpen(false),
                                children: link.label
                            }, index, false, {
                                fileName: "[project]/src/components/sections/Header.js",
                                lineNumber: 54,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Header.js",
                        lineNumber: 52,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Header.js",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 ml-auto"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Header.js",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    icon: open ? "tabler:x" : "tabler:menu-2",
                    color: "transparent",
                    className: "p-2 md:hidden",
                    onClick: ()=>setOpen(!open)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Header.js",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Header.js",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Header.js",
        lineNumber: 34,
        columnNumber: 5
    }, this));
}
_s(Header, "1gEB6QqUz+KWUhy0VkD8KgvwPFQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_7eefa1a5._.js.map