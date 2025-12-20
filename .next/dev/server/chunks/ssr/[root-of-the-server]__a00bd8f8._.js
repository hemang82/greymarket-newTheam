module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/src/app_config/CommonVariable.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[externals]/jsdom [external] (jsdom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("jsdom", () => require("jsdom"));

module.exports = mod;
}),
"[project]/src/app_config/CommonFunction.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientOnly",
    ()=>ClientOnly,
    "IPODetailsSummary",
    ()=>IPODetailsSummary,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/moment/moment.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app_config/CommonVariable.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$isomorphic$2d$dompurify$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/isomorphic-dompurify/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-rsc] (ecmascript)");
;
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
function formatDateTime(date, format = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DateFormats"].DATE_DD_MM_YYYY) {
    if (!date) return "—";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(date).format(format);
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
    const safe = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$isomorphic$2d$dompurify$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].sanitize(cleanedHtml, {
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
    setLocalStorage(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].LOGIN_KEY, true);
    // setLocalStorage(STORAGE_KEYS.ACCESS_TOKEN_KEY, data?.token);
    // setLocalStorage(STORAGE_KEYS.REFRESH_TOKEN_KEY, data?.token);
    setLocalStorage(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].AUTH_KEY, JSON.stringify(data));
// setLocalStorage(STORAGE_KEYS.ROLE_KEY, data?.role);
};
const TOAST_SUCCESS = (message)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toast"].success(message);
};
const TOAST_ERROR = (message)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toast"].error(message);
};
const TOAST_INFO = (message)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toast"].info(message);
};
const TOAST_WARNING = (message)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toast"].warning(message);
};
const setLocalStorage = (key, value)=>{
    try {
        if ("TURBOPACK compile-time truthy", 1) return; // SSR safety
        //TURBOPACK unreachable
        ;
    } catch (error) {
        console.error("Error setting localStorage:", error);
    }
};
const getLocalStorage = (key)=>{
    try {
        if ("TURBOPACK compile-time truthy", 1) return null; // SSR safety
        //TURBOPACK unreachable
        ;
        const data = undefined;
    } catch (error) {
        console.error("Error getting localStorage:", error);
        return null;
    }
};
const removeLocalStorage = (key)=>{
    try {
        if ("TURBOPACK compile-time truthy", 1) return null; // SSR safety
        //TURBOPACK unreachable
        ;
    } catch (error) {
        console.error("Error removing localStorage:", error);
    }
};
function ClientOnly({ children, fallback = null }) {
    const [mounted, setMounted] = useState(false);
    useEffect(()=>setMounted(true), []);
    return mounted ? children : fallback;
}
function IPODetailsSummary(ipoDetailsData = {}, number = 0) {
    // date format constant (keeps your existing DateFormats usage)
    const dateFmtConst = typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DateFormats"] !== "undefined" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DateFormats"].DATE_DD_MM_YYYY : undefined;
    // formatted values used in all variants
    const name = ipoDetailsData?.company_name || "-";
    const issue = formatIndianPrice(ipoDetailsData?.issue_size);
    const fresh = formatIndianPrice(ipoDetailsData?.fresh_issue_value);
    const ofs = formatIndianPrice(ipoDetailsData?.offer_of_sale);
    const shares = ipoDetailsData?.bid_lot ?? "-";
    const openDate = formatDateTime(ipoDetailsData?.start_date, dateFmtConst);
    const closeDate = formatDateTime(ipoDetailsData?.end_date, dateFmtConst);
    const allot = formatDateTime(ipoDetailsData?.allotment_date, dateFmtConst);
    const listDate = formatDateTime(ipoDetailsData?.listing_date, dateFmtConst);
    // metrics rendering (commented out — enable if you want)
    // const metrics = Array.isArray(ipoDetailsData?.metrics) ? ipoDetailsData.metrics : [];
    // const MetricsGrid = () => (
    //   <div className="rounded-xl ring-1 ring-gray-200 dark:ring-base-800 p-4 sm:p-6 mt-3">
    //     <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
    //       {metrics.length === 0 ? (
    //         <div className="text-sm text-gray-500">No metrics available</div>
    //       ) : (
    //         metrics.map((m, idx) => (
    //           <div key={idx} className="flex flex-col gap-1 mb-2">
    //             <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{m.label}</span>
    //             <span
    //               className={[
    //                 `text-base text-sm font-semibold text-gray-900 dark:text-gray-100 break-words whitespace-normal ${m.customClass ? m.customClass : ""}`,
    //                 m.highlight ? "bg-gray-50 dark:bg-base-900 rounded-md px-3 py-2" : "",
    //               ].join(" ")}
    //               dangerouslySetInnerHTML={{ __html: m.label !== "GMP" ? breakBeforeBracket(m.value) : (m.value ?? "") }}
    //             />
    //           </div>
    //         ))
    //       )}
    //     </div>
    //   </div>
    // );
    const n = Number(number);
    switch(n){
        // 0 — Clear headline + short explainer (3–4 lines)
        case 0:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-600 dark:text-gray-300 px-3 pb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-900",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 273,
                                columnNumber: 25
                            }, this),
                            " is launching an IPO sized at",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-900",
                                children: [
                                    issue,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 274,
                                columnNumber: 25
                            }, this),
                            ". The raise comprises a fresh issue of",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-900",
                                children: [
                                    fresh,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 275,
                                columnNumber: 25
                            }, this),
                            " and an OFS of",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-900",
                                children: [
                                    ofs,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 276,
                                columnNumber: 25
                            }, this),
                            ", together representing roughly",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-900",
                                children: [
                                    shares,
                                    " shares"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 277,
                                columnNumber: 25
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app_config/CommonFunction.js",
                        lineNumber: 272,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-600 dark:text-gray-300 px-3 pb-3",
                        children: [
                            "Subscription is open from ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-900",
                                children: openDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 281,
                                columnNumber: 51
                            }, this),
                            " to",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-900",
                                children: closeDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 282,
                                columnNumber: 25
                            }, this),
                            ". The allotment is expected on",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-900",
                                children: allot
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 283,
                                columnNumber: 25
                            }, this),
                            ", and listing is targeted for",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-900",
                                children: listDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 284,
                                columnNumber: 25
                            }, this),
                            ". Note: fresh issue proceeds typically go to the company while OFS proceeds go to selling shareholders."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app_config/CommonFunction.js",
                        lineNumber: 280,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true);
        // 1 — Investor-friendly summary + quick tip
        case 1:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-600 dark:text-gray-300 px-3 pb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-900",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 296,
                                columnNumber: 25
                            }, this),
                            " plans to raise",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-900",
                                children: [
                                    issue,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 297,
                                columnNumber: 25
                            }, this),
                            " via IPO. That includes a fresh infusion of",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-900",
                                children: [
                                    fresh,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 298,
                                columnNumber: 25
                            }, this),
                            " and an OFS worth",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-900",
                                children: [
                                    ofs,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 299,
                                columnNumber: 25
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app_config/CommonFunction.js",
                        lineNumber: 295,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-600 dark:text-gray-300 px-3 pb-3",
                        children: [
                            "Apply from ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-900",
                                children: openDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 303,
                                columnNumber: 36
                            }, this),
                            " until",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-900",
                                children: closeDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 304,
                                columnNumber: 25
                            }, this),
                            ". Allotment and tentative listing are scheduled for",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-900",
                                children: allot
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 305,
                                columnNumber: 25
                            }, this),
                            " and",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-900",
                                children: listDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 306,
                                columnNumber: 25
                            }, this),
                            ". Quick tip: check lot size and valuation before bidding."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app_config/CommonFunction.js",
                        lineNumber: 302,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true);
        // 2 — Date-first variant, plus short explanation (3 lines)
        case 2:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-600 dark:text-gray-300 px-3 pb-2",
                        children: [
                            "Subscription runs from ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: openDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 316,
                                columnNumber: 48
                            }, this),
                            " to",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: closeDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 317,
                                columnNumber: 25
                            }, this),
                            ", with allotment expected on",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: allot
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 318,
                                columnNumber: 25
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app_config/CommonFunction.js",
                        lineNumber: 315,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-600 dark:text-gray-300 px-3 pb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 322,
                                columnNumber: 25
                            }, this),
                            " is seeking ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: [
                                    issue,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 322,
                                columnNumber: 96
                            }, this),
                            " — a fresh issue of",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: [
                                    fresh,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 323,
                                columnNumber: 25
                            }, this),
                            " plus OFS of",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: [
                                    ofs,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 324,
                                columnNumber: 25
                            }, this),
                            ". Expect market interest to determine final listing performance."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app_config/CommonFunction.js",
                        lineNumber: 321,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true);
        // 3 — Narrative + what it means to company/investor (3–4 lines)
        case 3:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-600 dark:text-gray-300 px-3 pb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 334,
                                columnNumber: 25
                            }, this),
                            " is going public with an issue of",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: [
                                    issue,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 335,
                                columnNumber: 25
                            }, this),
                            ". The fresh portion of",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: [
                                    fresh,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 336,
                                columnNumber: 25
                            }, this),
                            " typically funds growth or debt reduction."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app_config/CommonFunction.js",
                        lineNumber: 333,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-600 dark:text-gray-300 px-3 pb-3",
                        children: [
                            "The OFS of ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: [
                                    ofs,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 340,
                                columnNumber: 36
                            }, this),
                            " provides liquidity to selling shareholders. Apply between",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: openDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 341,
                                columnNumber: 25
                            }, this),
                            " and",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: closeDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 342,
                                columnNumber: 25
                            }, this),
                            "; allotment expected on",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: allot
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 343,
                                columnNumber: 25
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app_config/CommonFunction.js",
                        lineNumber: 339,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true);
        // 4 — FAQ / scannable format + small explanatory line
        case 4:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-600 dark:text-gray-300 px-3 pb-2",
                        children: [
                            "Size: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: [
                                    issue,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 353,
                                columnNumber: 31
                            }, this),
                            ". Fresh issue:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: [
                                    fresh,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 354,
                                columnNumber: 25
                            }, this),
                            ". OFS:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: [
                                    ofs,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 355,
                                columnNumber: 25
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app_config/CommonFunction.js",
                        lineNumber: 352,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-600 dark:text-gray-300 px-3 pb-3",
                        children: [
                            "When to apply: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: openDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 359,
                                columnNumber: 40
                            }, this),
                            " —",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: closeDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 360,
                                columnNumber: 25
                            }, this),
                            ". Allotment:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: allot
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 361,
                                columnNumber: 25
                            }, this),
                            ". Listing:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: listDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 362,
                                columnNumber: 25
                            }, this),
                            ". Note: OFS does not raise fresh capital for the company."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app_config/CommonFunction.js",
                        lineNumber: 358,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true);
        // 5 — Compact facts + short investor guidance (3 lines)
        case 5:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-600 dark:text-gray-300 px-3 pb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 372,
                                columnNumber: 25
                            }, this),
                            " — Issue: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: [
                                    issue,
                                    " cr"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 372,
                                columnNumber: 94
                            }, this),
                            ", Fresh:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: [
                                    fresh,
                                    " cr"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 373,
                                columnNumber: 25
                            }, this),
                            ", OFS: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: [
                                    ofs,
                                    " cr"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 373,
                                columnNumber: 95
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app_config/CommonFunction.js",
                        lineNumber: 371,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-600 dark:text-gray-300 px-3 pb-3",
                        children: [
                            "Total shares on offer: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: shares
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 377,
                                columnNumber: 48
                            }, this),
                            ". Apply from",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: openDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 378,
                                columnNumber: 25
                            }, this),
                            " to ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: closeDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 378,
                                columnNumber: 92
                            }, this),
                            ". Consider your investment horizon — IPOs can be volatile on listing day."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app_config/CommonFunction.js",
                        lineNumber: 376,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true);
        // 6 — Investor guidance + risk note (3–4 lines)
        case 6:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-600 dark:text-gray-300 px-3 pb-2",
                        children: [
                            "Investor note: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 388,
                                columnNumber: 40
                            }, this),
                            " aims to raise ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: [
                                    issue,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 388,
                                columnNumber: 114
                            }, this),
                            ". The fresh issue of",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: [
                                    fresh,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 389,
                                columnNumber: 25
                            }, this),
                            " goes to the company while the OFS of",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: [
                                    ofs,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 390,
                                columnNumber: 25
                            }, this),
                            " is an existing-shareholder sale."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app_config/CommonFunction.js",
                        lineNumber: 387,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-600 dark:text-gray-300 px-3 pb-3",
                        children: [
                            "Subscription window: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: openDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 394,
                                columnNumber: 46
                            }, this),
                            " to",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: closeDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 395,
                                columnNumber: 25
                            }, this),
                            ". Allotment and listing timelines:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: allot
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 396,
                                columnNumber: 25
                            }, this),
                            " / ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: listDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 396,
                                columnNumber: 88
                            }, this),
                            ". Tip: check promoter holding and recent financials before applying."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app_config/CommonFunction.js",
                        lineNumber: 393,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true);
        // 7 — Formal news-style + brief context (3–4 lines)
        case 7:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-600 dark:text-gray-300 px-3 pb-2",
                        children: [
                            "The company ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 406,
                                columnNumber: 37
                            }, this),
                            " has filed papers to raise ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: [
                                    issue,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 406,
                                columnNumber: 123
                            }, this),
                            " through a public issue. The offering includes a fresh tranche of",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: [
                                    fresh,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 407,
                                columnNumber: 25
                            }, this),
                            " and OFS of",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: [
                                    ofs,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 408,
                                columnNumber: 25
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app_config/CommonFunction.js",
                        lineNumber: 405,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-600 dark:text-gray-300 px-3 pb-3",
                        children: [
                            "Investors may apply between ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: openDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 412,
                                columnNumber: 53
                            }, this),
                            " and",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: closeDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 413,
                                columnNumber: 25
                            }, this),
                            ". Expected allotment is on ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: allot
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 413,
                                columnNumber: 116
                            }, this),
                            " and listing is aimed for",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: listDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 414,
                                columnNumber: 25
                            }, this),
                            ". This is a standard structure — fresh capital for growth, OFS for seller liquidity."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app_config/CommonFunction.js",
                        lineNumber: 411,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true);
        // 8 — Narrative emphasizing shares + short explanation (3–4 lines)
        case 8:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-600 dark:text-gray-300 px-3 pb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 424,
                                columnNumber: 25
                            }, this),
                            " targets ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: [
                                    issue,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 424,
                                columnNumber: 93
                            }, this),
                            ", split as fresh issue",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: [
                                    fresh,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 425,
                                columnNumber: 25
                            }, this),
                            " and OFS ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: [
                                    ofs,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 425,
                                columnNumber: 100
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app_config/CommonFunction.js",
                        lineNumber: 423,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-600 dark:text-gray-300 px-3 pb-3",
                        children: [
                            "The offer represents ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: [
                                    shares,
                                    " shares"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 429,
                                columnNumber: 46
                            }, this),
                            ". Apply from ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: openDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 429,
                                columnNumber: 127
                            }, this),
                            " to",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: closeDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 430,
                                columnNumber: 25
                            }, this),
                            ". Allotment on ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: allot
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 430,
                                columnNumber: 104
                            }, this),
                            ", listing expected on",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: listDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 431,
                                columnNumber: 25
                            }, this),
                            ". Remember: subscription demand will influence listing-day price movements."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app_config/CommonFunction.js",
                        lineNumber: 428,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true);
        // 9 — Detailed quick-summary + action oriented sentence (3–4 lines)
        case 9:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-600 dark:text-gray-300 px-3 pb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 441,
                                columnNumber: 25
                            }, this),
                            " seeks to raise ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: [
                                    issue,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 441,
                                columnNumber: 100
                            }, this),
                            " — fresh issue",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: [
                                    fresh,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 442,
                                columnNumber: 25
                            }, this),
                            ", OFS ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: [
                                    ofs,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 442,
                                columnNumber: 97
                            }, this),
                            ". Total shares offered:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: shares
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 443,
                                columnNumber: 25
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app_config/CommonFunction.js",
                        lineNumber: 440,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-600 dark:text-gray-300 px-3 pb-3",
                        children: [
                            "Subscribe between ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: openDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 447,
                                columnNumber: 43
                            }, this),
                            " and",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: closeDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 448,
                                columnNumber: 25
                            }, this),
                            ". Allotment is expected on ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: allot
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 448,
                                columnNumber: 116
                            }, this),
                            ", with listing on",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: listDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 449,
                                columnNumber: 25
                            }, this),
                            ". Action tip: if you’re unsure, consider starting with a small allocation and review the company’s prospectus."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app_config/CommonFunction.js",
                        lineNumber: 446,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true);
        // default — original detailed block (keeps full text)
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-600 dark:text-gray-300 px-3 pb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-900",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 459,
                                columnNumber: 25
                            }, this),
                            " is launching a public issue worth",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-900",
                                children: [
                                    issue,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 460,
                                columnNumber: 25
                            }, this),
                            ". The offer includes a fresh issue of",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-900",
                                children: [
                                    fresh,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 461,
                                columnNumber: 25
                            }, this),
                            " and an offer for sale (OFS) of",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-900",
                                children: [
                                    ofs,
                                    " crore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 462,
                                columnNumber: 25
                            }, this),
                            ". Together, this brings the total number of shares issued to",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-900",
                                children: [
                                    shares,
                                    " shares"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 463,
                                columnNumber: 25
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app_config/CommonFunction.js",
                        lineNumber: 458,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-600 dark:text-gray-300 px-3 pb-3",
                        children: [
                            "IPO opens on ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-900",
                                children: openDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 467,
                                columnNumber: 38
                            }, this),
                            " and closes on",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-900",
                                children: closeDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 468,
                                columnNumber: 25
                            }, this),
                            ". After the bidding ends, the allotment is expected to be declared on",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-900",
                                children: allot
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 469,
                                columnNumber: 25
                            }, this),
                            ". The company is proposed to be listed on BSE and NSE, with a tentative listing date of",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-900",
                                children: listDate
                            }, void 0, false, {
                                fileName: "[project]/src/app_config/CommonFunction.js",
                                lineNumber: 470,
                                columnNumber: 25
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app_config/CommonFunction.js",
                        lineNumber: 466,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true);
    }
}
}),
"[project]/src/app_config/IPOCalculation.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Format GMP (Grey Market Premium) with percentage gain.
 *
 * @param {Object} ele - Object containing gmp and ipo_max_value
 * @param {number|null} ele.gmp - Grey Market Premium value
 * @param {number|null} ele.ipo_max_value - IPO maximum price
 * @returns {string} Example: "₹14 (6.33%)" or "-"
 */ __turbopack_context__.s([
    "checkingNonZeroValueDistributionTable",
    ()=>checkingNonZeroValueDistributionTable,
    "formatGmpValue",
    ()=>formatGmpValue,
    "gmpTextColor",
    ()=>gmpTextColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app_config/CommonFunction.js [app-rsc] (ecmascript)");
;
const formatGmpValue = (ele = {})=>{
    const gmp = Number(ele?.gmp ?? 0);
    const maxValue = Number(ele?.ipo_max_value ?? 0);
    // Return dash if null/undefined
    if (ele.gmp === null || ele.gmp === undefined) return "-";
    // Calculate percentage safely
    const percent = maxValue > 0 ? (gmp / maxValue * 100).toFixed(2) : "0.00";
    // ✅ Use your shared function
    const formattedGmp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatIndianPrice"])(gmp);
    return `${formattedGmp} (${percent}%)`;
};
const gmpTextColor = (ele)=>{
    const ratio = ele?.ipo_max_value === 0 ? 0 : ele?.gmp / ele?.ipo_max_value * 100;
    if (ratio === 0) return "text-[#6c757d]"; // neutral grey
    if (ratio > 0) return "text-[#27AE60]"; // green for gain
    return "text-[#DC3545]"; // red for loss
};
const checkingNonZeroValueDistributionTable = (data)=>{
    if (data) {
        return data?.find((ele)=>ele?.reserved > 0) ? true : true;
    } else {
        return false;
    }
};
}),
"[project]/src/components/ipodetailspages/IpoDetailsPages.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "IpoDetailsPages",
    ()=>IpoDetailsPages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const IpoDetailsPages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call IpoDetailsPages() from the server but IpoDetailsPages is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx <module evaluation>", "IpoDetailsPages");
}),
"[project]/src/components/ipodetailspages/IpoDetailsPages.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "IpoDetailsPages",
    ()=>IpoDetailsPages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const IpoDetailsPages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call IpoDetailsPages() from the server but IpoDetailsPages is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx", "IpoDetailsPages");
}),
"[project]/src/components/ipodetailspages/IpoDetailsPages.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$IpoDetailsPages$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ipodetailspages/IpoDetailsPages.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$IpoDetailsPages$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ipodetailspages/IpoDetailsPages.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$IpoDetailsPages$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/ipo-details/[id]/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client"
__turbopack_context__.s([
    "default",
    ()=>page,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app_config/CommonFunction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app_config/CommonVariable.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$IPOCalculation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app_config/IPOCalculation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$IpoDetailsPages$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ipodetailspages/IpoDetailsPages.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2f$ServerApiCall$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/server/ServerApiCall.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
async function generateMetadata({ params }) {
    const { id } = await params;
    try {
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2f$ServerApiCall$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIPODetailsServer"])({
            id
        });
        if (!data || !data.company_name) {
            return {
                title: `IPO Not Found | ${process.env.SITE_NAME}`,
                description: `Details not available for this IPO.`
            };
        }
        const company = data?.company_name;
        const gmp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$IPOCalculation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatGmpValue"])(data) ?? 'N/A';
        const priceBand = data?.price_range ?? '₹0';
        const openDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDateTime"])(data?.start_date, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DateFormats"]?.DATE_DD_MM_YYYY) ?? '';
        const closeDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDateTime"])(data?.end_date, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DateFormats"]?.DATE_DD_MM_YYYY) ?? '';
        const ipoType = data?.listing_at_group ?? '';
        const pageUrl = `${process.env.SITE_URL}ipo/${id}`;
        const ogImage = data.ipo_image || data.ipo_image || '/og-image.png';
        return {
            title: `${company} IPO Details — GMP: ${gmp} | ${process.env.SITE_NAME}`,
            description: `${company} IPO details: Grey Market Premium (GMP) ${gmp}, price band ${priceBand}, issue dates ${openDate} to ${closeDate}. Live & upcoming IPO updates on ${process.env.SITE_NAME}.`,
            keywords: [
                `${company} IPO`,
                `${company} GMP`,
                `${company} IPO price band`,
                'IPO Grey Market',
                'live IPO',
                'upcoming IPO',
                process.env.SITE_NAME
            ],
            alternates: {
                canonical: pageUrl
            },
            openGraph: {
                title: `${company} IPO — GMP: ${gmp} | ${process.env.SITE_NAME}`,
                description: `Check ${company} IPO GMP, price band, issue dates, and live updates.`,
                url: pageUrl,
                images: [
                    {
                        url: ogImage,
                        width: 1200,
                        height: 630,
                        alt: `${company} IPO — ${process.env.SITE_NAME}`
                    }
                ]
            },
            twitter: {
                card: 'summary_large_image',
                title: `${company} IPO — ${process.env.SITE_NAME}`,
                description: `GMP: ${gmp}. ${company} IPO price band: ${priceBand}. Issue dates: ${openDate} — ${closeDate}.`,
                images: [
                    ogImage
                ]
            }
        };
    } catch (err) {
        // fallback metadata on error
        return {
            title: `IPO Details | ${process.env.SITE_NAME}`,
            description: `IPO details and live GMP updates on ${process.env.SITE_NAME}.`
        };
    }
}
async function page({ params }) {
    // =============== SEO ===================;
    // title : {{companyName}} IPO Details {{year}} – Price, GMP, Dates, Allotment, Review
    // Description : Get complete information on the {{companyName}} IPO including price band, issue size, dates, lot size, subscription status, GMP, allotment date, and listing details. Check latest updates, tips, and important insights before applying.
    const { id } = await params;
    const IPODetailsResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2f$ServerApiCall$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIPODetailsServer"])({
        id: id
    });
    const IPODetailsUpdatedAboutUs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2f$ServerApiCall$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIPOAboutusServer"])({
        symbol: IPODetailsResponse?.symbol,
        web: '1',
        topic: ''
    });
    // console.log('IPODetailsResponse Server',IPODetailsResponse);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    children: "IPO Details"
                }, void 0, false, {
                    fileName: "[project]/src/app/ipo-details/[id]/page.jsx",
                    lineNumber: 90,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/ipo-details/[id]/page.jsx",
                lineNumber: 89,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$IpoDetailsPages$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IpoDetailsPages"], {
                ipoDetailsData: IPODetailsResponse,
                IPODetailsUpdatedAboutUs: IPODetailsUpdatedAboutUs
            }, void 0, false, {
                fileName: "[project]/src/app/ipo-details/[id]/page.jsx",
                lineNumber: 93,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/ipo-details/[id]/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/ipo-details/[id]/page.jsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a00bd8f8._.js.map