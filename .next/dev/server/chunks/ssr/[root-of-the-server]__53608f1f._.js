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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/moment/moment.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app_config/CommonVariable.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$isomorphic$2d$dompurify$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/isomorphic-dompurify/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-rsc] (ecmascript)");
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
async function generateMetadata({ params }) {
    const { id } = await params;
    try {
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2f$ServerApiCall$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIPODetailsServer"])({
            id
        });
        console.log('generateMetadata', data);
        if (!data || !data.company_name) {
            return {
                title: `IPO Not Found | ${process.env.SITE_NAME}`,
                description: `Details not available for this IPO.`
            };
        }
        const company = data?.company_name;
        const gmp = formatGmpValue(data?.gmp) ?? 'N/A';
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
        console.log('Metadata error', err);
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
                ipoDetailsData: IPODetailsResponse
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

//# sourceMappingURL=%5Broot-of-the-server%5D__53608f1f._.js.map