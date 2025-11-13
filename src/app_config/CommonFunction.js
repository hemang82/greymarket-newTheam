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
    setLocalStorage(STORAGE_KEYS.ACCESS_TOKEN_KEY, data?.token);
    setLocalStorage(STORAGE_KEYS.REFRESH_TOKEN_KEY, data?.token);
    setLocalStorage(STORAGE_KEYS.AUTH_KEY, JSON.stringify(data));
    setLocalStorage(STORAGE_KEYS.ROLE_KEY, data?.role);
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
        const data = typeof value === "object" ? JSON.stringify(value) : value;
        localStorage.setItem(key, data);
    } catch (error) {
        console.error("Error setting localStorage:", error);
    }
};

export const getLocalStorage = (key) => {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error("Error getting localStorage:", error);
        return null;
    }
};

export const removeLocalStorage = (key) => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error("Error removing localStorage:", error);
    }
};