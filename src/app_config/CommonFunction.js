import moment from "moment";
import { DateFormats, STORAGE_KEYS } from "./CommonVariable";
import DOMPurify from "isomorphic-dompurify";
import { toast } from "sonner";


export function formatIndianPrice(price) {
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
            maximumFractionDigits: hasDecimal ? 2 : 0,
        });
    } catch (e) {
        return "₹0";
    }
}

/**
 * Format a number using Indian number system commas.
 * Example: 1000000 → "10,00,000"
 * 
 * @param {number|string} value - Input number
 * @param {boolean} showDecimals - Whether to show decimals if present (default: true)
 * @returns {string} Formatted number
 */

export function formatIndianNumber(value, showDecimals = true) {
    if (value === null || value === undefined || value === "") return "0";

    const num = Number(value);
    if (Number.isNaN(num)) return String(value);

    const hasDecimal = num % 1 !== 0;

    return num.toLocaleString("en-IN", {
        minimumFractionDigits: showDecimals && hasDecimal ? 2 : 0,
        maximumFractionDigits: showDecimals && hasDecimal ? 2 : 0,
    });
}


/**
 * Safely convert any value to a number and format it to fixed decimals.
 *
 * @param {string|number|null|undefined} value - Input value
 * @param {number} decimals - Number of decimal places (default: 2)
 * @returns {string} Formatted number like "12.34"
 */
export function formatToFixed(value, decimals = 2) {
    const num = Number(value);
    // handle invalid or empty input
    if (isNaN(num)) return "0.00";

    return num.toFixed(decimals);
}

/**
 * Format a number to 2 decimals, but show "-" if the value is 0, null, or invalid.
 *
 * @param {number|string} value - The number to format
 * @param {number} decimals - Number of decimal places (default: 2)
 * @returns {string} Formatted string or "-"
 */
export function formatOrDash(value, decimals = 2) {
    const num = Number(value);

    // if invalid or explicitly zero
    if (!Number.isFinite(num) || num === 0) return "-";

    // format to given decimals
    return num.toFixed(decimals);
}


/**
 * Format any date/time using a given Moment.js pattern.
 * 
 * @param {string|Date|number} date - The input date or timestamp.
 * @param {string} format - A format string from DateFormats or TimeFormats.
 * @returns {string} Formatted date string.
 */

export function formatDateTime(date, format = DateFormats.DATE_DD_MM_YYYY) {
    if (!date) return "—";
    return moment(date).format(format);
}

/**
 * Clean HTML content and return a ready-to-use object
 * for React's dangerouslySetInnerHTML.
 *
 * Usage:
 *   <div {...cleanHTMLContent(htmlString)} />
 */

export function cleanHTMLContent(html = "") {
    if (!html || typeof html !== "string") {
        return { dangerouslySetInnerHTML: { __html: "" } };
    }

    const cleanedHtml = html
        .replace(/<span[^>]*class="ql-ui"[^>]*><\/span>/g, "")
        .replace(/\sdata-[a-zA-Z-]+="[^"]*"/g, "")
        .replace(/\scontenteditable="[^"]*"/g, "")
        .replace(/<p><br><\/p>/g, "")
        .replace(/\s{2,}/g, " ")
        .trim();

    const safe = DOMPurify.sanitize(cleanedHtml, {
        // keep it strict; loosen as needed:
        ALLOWED_TAGS: [
            "a", "b", "i", "em", "strong", "u", "p", "br", "ul", "ol", "li", "span", "div", "img", "h1", "h2", "h3", "h4", "h5", "h6"
        ],
        ALLOWED_ATTR: [
            "href", "target", "rel", "title", "alt", "src", "width", "height", "loading", "class"
        ],
        ALLOW_DATA_ATTR: false,
    });

    return { dangerouslySetInnerHTML: { __html: safe } };
}

export const loginRedirection = (data) => {
    setLocalStorage(STORAGE_KEYS.LOGIN_KEY, true);
    // setLocalStorage(STORAGE_KEYS.ACCESS_TOKEN_KEY, data?.token);
    // setLocalStorage(STORAGE_KEYS.REFRESH_TOKEN_KEY, data?.token);
    setLocalStorage(STORAGE_KEYS.AUTH_KEY, JSON.stringify(data));
    // setLocalStorage(STORAGE_KEYS.ROLE_KEY, data?.role);
}

export const TOAST_SUCCESS = (message) => {
    return toast.success(message);
};

export const TOAST_ERROR = (message) => {
    return toast.error(message);
};

export const TOAST_INFO = (message) => {
    return toast.info(message);
};

export const TOAST_WARNING = (message) => {
    return toast.warning(message);
};

export const setLocalStorage = (key, value) => {
    try {
        if (typeof window === "undefined") return; // SSR safety

        if (typeof value === "object") {
            localStorage.setItem(key, JSON.stringify(value));
        } else {
            localStorage.setItem(key, String(value));
        }
    } catch (error) {
        console.error("Error setting localStorage:", error);
    }
};

export const getLocalStorage = (key) => {
    try {
        if (typeof window === "undefined") return null; // SSR safety
        const data = localStorage.getItem(key);
        if (!data) return null;

        try {
            return JSON.parse(data);
        } catch {
            return data;
        }
    } catch (error) {
        console.error("Error getting localStorage:", error);
        return null;
    }
};

export const removeLocalStorage = (key) => {
    try {
        if (typeof window === "undefined") return null; // SSR safety
        localStorage.clear();
    } catch (error) {
        console.error("Error removing localStorage:", error);
    }
};

export function ClientOnly({ children, fallback = null }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    return mounted ? children : fallback;
}

// export function staticSummary(ipoDetailsData, number) {
//     switch (number) {
//         case 0:
//             return (
//                 <>

//                 </>
//             );
//         default:
//             return (<>
//                 <div className="text-sm text-gray-600 dark:text-gray-300 px-3 pb-2">
//                     <span className="text-sm font-semibold text-gray-900">{ipoDetailsData?.company_name} </span> is launching a public issue worth <span className="text-sm font-semibold text-gray-900">{formatIndianPrice(ipoDetailsData?.issue_size)} crore </span>. The offer includes a fresh issue of <span className="text-sm font-semibold text-gray-900"> {formatIndianPrice(ipoDetailsData?.fresh_issue_value)} </span> crore and an offer for sale (OFS) of <span className="text-sm font-semibold text-gray-900">{formatIndianPrice(ipoDetailsData?.offer_of_sale)} crore </span>. Together, this brings the total number of shares issued to <span className="text-sm font-semibold text-gray-900">{ipoDetailsData?.bid_lot} shares</span> .
//                 </div>
//                 <div className="text-sm text-gray-600 dark:text-gray-300 px-3 pb-3">
//                     IPO opens on <span className="text-sm font-semibold text-gray-900">{formatDateTime(ipoDetailsData?.start_date, DateFormats?.DATE_DD_MM_YYYY)}</span> and closes on <span className="text-sm font-semibold text-gray-900">{formatDateTime(ipoDetailsData?.end_date, DateFormats?.DATE_DD_MM_YYYY)}</span>. After the bidding ends, the allotment is expected to be declared on <span className="text-sm font-semibold text-gray-900">{formatDateTime(ipoDetailsData?.allotment_date, DateFormats?.DATE_DD_MM_YYYY)}</span>. The company is proposed to be listed on BSE and NSE, with a tentative listing date of <span className="text-sm font-semibold text-gray-900">{formatDateTime(ipoDetailsData?.listing_date, DateFormats?.DATE_DD_MM_YYYY)}</span>. </div>
//             </>);
//     }
// }

export function IPODetailsSummary(ipoDetailsData = {}, number = 0) {
    // date format constant (keeps your existing DateFormats usage)
    const dateFmtConst = typeof DateFormats !== "undefined" ? DateFormats.DATE_DD_MM_YYYY : undefined;

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

    switch (n) {
        // 0 — Clear headline + short explainer (3–4 lines)
        case 0:
            return (
                <>
                    <div className="text-sm text-gray-600 dark:text-gray-300 px-3 pb-2">
                        <span className="text-sm font-semibold text-gray-900">{name}</span> is launching an IPO sized at{" "}
                        <span className="text-sm font-semibold text-gray-900">{issue} crore</span>. The raise comprises a fresh issue of{" "}
                        <span className="text-sm font-semibold text-gray-900">{fresh} crore</span> and an OFS of{" "}
                        <span className="text-sm font-semibold text-gray-900">{ofs} crore</span>, together representing roughly{" "}
                        <span className="text-sm font-semibold text-gray-900">{shares} shares</span>.
                    </div>

                    <div className="text-sm text-gray-600 dark:text-gray-300 px-3 pb-3">
                        Subscription is open from <span className="text-sm font-semibold text-gray-900">{openDate}</span> to{" "}
                        <span className="text-sm font-semibold text-gray-900">{closeDate}</span>. The allotment is expected on{" "}
                        <span className="text-sm font-semibold text-gray-900">{allot}</span>, and listing is targeted for{" "}
                        <span className="text-sm font-semibold text-gray-900">{listDate}</span>. Note: fresh issue proceeds typically go to the company while OFS proceeds go to selling shareholders.
                    </div>

                    {/* {metrics.length > 0 && <MetricsGrid />} */}
                </>
            );

        // 1 — Investor-friendly summary + quick tip
        case 1:
            return (
                <>
                    <div className="text-sm text-gray-600 dark:text-gray-300 px-3 pb-2">
                        <span className="text-sm font-semibold text-gray-900">{name}</span> plans to raise{" "}
                        <span className="text-sm font-semibold text-gray-900">{issue} crore</span> via IPO. That includes a fresh infusion of{" "}
                        <span className="text-sm font-semibold text-gray-900">{fresh} crore</span> and an OFS worth{" "}
                        <span className="text-sm font-semibold text-gray-900">{ofs} crore</span>.
                    </div>

                    <div className="text-sm text-gray-600 dark:text-gray-300 px-3 pb-3">
                        Apply from <span className="text-sm font-semibold text-gray-900">{openDate}</span> until{" "}
                        <span className="text-sm font-semibold text-gray-900">{closeDate}</span>. Allotment and tentative listing are scheduled for{" "}
                        <span className="text-sm font-semibold text-gray-900">{allot}</span> and{" "}
                        <span className="text-sm font-semibold text-gray-900">{listDate}</span>. Quick tip: check lot size and valuation before bidding.
                    </div>
                </>
            );

        // 2 — Date-first variant, plus short explanation (3 lines)
        case 2:
            return (
                <>
                    <div className="text-sm text-gray-600 dark:text-gray-300 px-3 pb-2">
                        Subscription runs from <span className="font-semibold text-gray-900">{openDate}</span> to{" "}
                        <span className="font-semibold text-gray-900">{closeDate}</span>, with allotment expected on{" "}
                        <span className="font-semibold text-gray-900">{allot}</span>.
                    </div>

                    <div className="text-sm text-gray-600 dark:text-gray-300 px-3 pb-3">
                        <span className="font-semibold text-gray-900">{name}</span> is seeking <span className="font-semibold text-gray-900">{issue} crore</span> — a fresh issue of{" "}
                        <span className="font-semibold text-gray-900">{fresh} crore</span> plus OFS of{" "}
                        <span className="font-semibold text-gray-900">{ofs} crore</span>. Expect market interest to determine final listing performance.
                    </div>
                </>
            );

        // 3 — Narrative + what it means to company/investor (3–4 lines)
        case 3:
            return (
                <>
                    <div className="text-sm text-gray-600 dark:text-gray-300 px-3 pb-2">
                        <span className="font-semibold text-gray-900">{name}</span> is going public with an issue of{" "}
                        <span className="font-semibold text-gray-900">{issue} crore</span>. The fresh portion of{" "}
                        <span className="font-semibold text-gray-900">{fresh} crore</span> typically funds growth or debt reduction.
                    </div>

                    <div className="text-sm text-gray-600 dark:text-gray-300 px-3 pb-3">
                        The OFS of <span className="font-semibold text-gray-900">{ofs} crore</span> provides liquidity to selling shareholders. Apply between{" "}
                        <span className="font-semibold text-gray-900">{openDate}</span> and{" "}
                        <span className="font-semibold text-gray-900">{closeDate}</span>; allotment expected on{" "}
                        <span className="font-semibold text-gray-900">{allot}</span>.
                    </div>
                </>
            );

        // 4 — FAQ / scannable format + small explanatory line
        case 4:
            return (
                <>
                    <div className="text-sm text-gray-600 dark:text-gray-300 px-3 pb-2">
                        Size: <span className="font-semibold text-gray-900">{issue} crore</span>. Fresh issue:{" "}
                        <span className="font-semibold text-gray-900">{fresh} crore</span>. OFS:{" "}
                        <span className="font-semibold text-gray-900">{ofs} crore</span>.
                    </div>

                    <div className="text-sm text-gray-600 dark:text-gray-300 px-3 pb-3">
                        When to apply: <span className="font-semibold text-gray-900">{openDate}</span> —{" "}
                        <span className="font-semibold text-gray-900">{closeDate}</span>. Allotment:{" "}
                        <span className="font-semibold text-gray-900">{allot}</span>. Listing:{" "}
                        <span className="font-semibold text-gray-900">{listDate}</span>. Note: OFS does not raise fresh capital for the company.
                    </div>
                </>
            );

        // 5 — Compact facts + short investor guidance (3 lines)
        case 5:
            return (
                <>
                    <div className="text-sm text-gray-600 dark:text-gray-300 px-3 pb-2">
                        <span className="font-semibold text-gray-900">{name}</span> — Issue: <span className="font-semibold text-gray-900">{issue} cr</span>, Fresh:{" "}
                        <span className="font-semibold text-gray-900">{fresh} cr</span>, OFS: <span className="font-semibold text-gray-900">{ofs} cr</span>.
                    </div>

                    <div className="text-sm text-gray-600 dark:text-gray-300 px-3 pb-3">
                        Total shares on offer: <span className="font-semibold text-gray-900">{shares}</span>. Apply from{" "}
                        <span className="font-semibold text-gray-900">{openDate}</span> to <span className="font-semibold text-gray-900">{closeDate}</span>. Consider your investment horizon — IPOs can be volatile on listing day.
                    </div>
                </>
            );

        // 6 — Investor guidance + risk note (3–4 lines)
        case 6:
            return (
                <>
                    <div className="text-sm text-gray-600 dark:text-gray-300 px-3 pb-2">
                        Investor note: <span className="font-semibold text-gray-900">{name}</span> aims to raise <span className="font-semibold text-gray-900">{issue} crore</span>. The fresh issue of{" "}
                        <span className="font-semibold text-gray-900">{fresh} crore</span> goes to the company while the OFS of{" "}
                        <span className="font-semibold text-gray-900">{ofs} crore</span> is an existing-shareholder sale.
                    </div>

                    <div className="text-sm text-gray-600 dark:text-gray-300 px-3 pb-3">
                        Subscription window: <span className="font-semibold text-gray-900">{openDate}</span> to{" "}
                        <span className="font-semibold text-gray-900">{closeDate}</span>. Allotment and listing timelines:{" "}
                        <span className="font-semibold text-gray-900">{allot}</span> / <span className="font-semibold text-gray-900">{listDate}</span>. Tip: check promoter holding and recent financials before applying.
                    </div>
                </>
            );

        // 7 — Formal news-style + brief context (3–4 lines)
        case 7:
            return (
                <>
                    <div className="text-sm text-gray-600 dark:text-gray-300 px-3 pb-2">
                        The company <span className="font-semibold text-gray-900">{name}</span> has filed papers to raise <span className="font-semibold text-gray-900">{issue} crore</span> through a public issue. The offering includes a fresh tranche of{" "}
                        <span className="font-semibold text-gray-900">{fresh} crore</span> and OFS of{" "}
                        <span className="font-semibold text-gray-900">{ofs} crore</span>.
                    </div>

                    <div className="text-sm text-gray-600 dark:text-gray-300 px-3 pb-3">
                        Investors may apply between <span className="font-semibold text-gray-900">{openDate}</span> and{" "}
                        <span className="font-semibold text-gray-900">{closeDate}</span>. Expected allotment is on <span className="font-semibold text-gray-900">{allot}</span> and listing is aimed for{" "}
                        <span className="font-semibold text-gray-900">{listDate}</span>. This is a standard structure — fresh capital for growth, OFS for seller liquidity.
                    </div>
                </>
            );

        // 8 — Narrative emphasizing shares + short explanation (3–4 lines)
        case 8:
            return (
                <>
                    <div className="text-sm text-gray-600 dark:text-gray-300 px-3 pb-2">
                        <span className="font-semibold text-gray-900">{name}</span> targets <span className="font-semibold text-gray-900">{issue} crore</span>, split as fresh issue{" "}
                        <span className="font-semibold text-gray-900">{fresh} crore</span> and OFS <span className="font-semibold text-gray-900">{ofs} crore</span>.
                    </div>

                    <div className="text-sm text-gray-600 dark:text-gray-300 px-3 pb-3">
                        The offer represents <span className="font-semibold text-gray-900">{shares} shares</span>. Apply from <span className="font-semibold text-gray-900">{openDate}</span> to{" "}
                        <span className="font-semibold text-gray-900">{closeDate}</span>. Allotment on <span className="font-semibold text-gray-900">{allot}</span>, listing expected on{" "}
                        <span className="font-semibold text-gray-900">{listDate}</span>. Remember: subscription demand will influence listing-day price movements.
                    </div>
                </>
            );

        // 9 — Detailed quick-summary + action oriented sentence (3–4 lines)
        case 9:
            return (
                <>
                    <div className="text-sm text-gray-600 dark:text-gray-300 px-3 pb-2">
                        <span className="font-semibold text-gray-900">{name}</span> seeks to raise <span className="font-semibold text-gray-900">{issue} crore</span> — fresh issue{" "}
                        <span className="font-semibold text-gray-900">{fresh} crore</span>, OFS <span className="font-semibold text-gray-900">{ofs} crore</span>. Total shares offered:{" "}
                        <span className="font-semibold text-gray-900">{shares}</span>.
                    </div>

                    <div className="text-sm text-gray-600 dark:text-gray-300 px-3 pb-3">
                        Subscribe between <span className="font-semibold text-gray-900">{openDate}</span> and{" "}
                        <span className="font-semibold text-gray-900">{closeDate}</span>. Allotment is expected on <span className="font-semibold text-gray-900">{allot}</span>, with listing on{" "}
                        <span className="font-semibold text-gray-900">{listDate}</span>. Action tip: if you’re unsure, consider starting with a small allocation and review the company’s prospectus.
                    </div>
                </>
            );

        // default — original detailed block (keeps full text)
        default:
            return (
                <>
                    <div className="text-sm text-gray-600 dark:text-gray-300 px-3 pb-2">
                        <span className="text-sm font-semibold text-gray-900">{name}</span> is launching a public issue worth{" "}
                        <span className="text-sm font-semibold text-gray-900">{issue} crore</span>. The offer includes a fresh issue of{" "}
                        <span className="text-sm font-semibold text-gray-900">{fresh} crore</span> and an offer for sale (OFS) of{" "}
                        <span className="text-sm font-semibold text-gray-900">{ofs} crore</span>. Together, this brings the total number of shares issued to{" "}
                        <span className="text-sm font-semibold text-gray-900">{shares} shares</span>.
                    </div>

                    <div className="text-sm text-gray-600 dark:text-gray-300 px-3 pb-3">
                        IPO opens on <span className="text-sm font-semibold text-gray-900">{openDate}</span> and closes on{" "}
                        <span className="text-sm font-semibold text-gray-900">{closeDate}</span>. After the bidding ends, the allotment is expected to be declared on{" "}
                        <span className="text-sm font-semibold text-gray-900">{allot}</span>. The company is proposed to be listed on BSE and NSE, with a tentative listing date of{" "}
                        <span className="text-sm font-semibold text-gray-900">{listDate}</span>.
                    </div>

                    {/* {metrics.length > 0 && <MetricsGrid />} */}
                </>
            );
    }
}
