/**
 * Format GMP (Grey Market Premium) with percentage gain.
 *
 * @param {Object} ele - Object containing gmp and ipo_max_value
 * @param {number|null} ele.gmp - Grey Market Premium value
 * @param {number|null} ele.ipo_max_value - IPO maximum price
 * @returns {string} Example: "₹14 (6.33%)" or "-"
 */

import { formatIndianPrice } from "./CommonFunction";

export const formatGmpValue = (ele = {}) => {
    const gmp = Number(ele?.gmp ?? 0);
    const maxValue = Number(ele?.ipo_max_value ?? 0);
    // Return dash if null/undefined
    if (ele.gmp === null || ele.gmp === undefined) return "-";
    // Calculate percentage safely
    const percent = maxValue > 0 ? ((gmp / maxValue) * 100).toFixed(2) : "0.00";
    // ✅ Use your shared function
    const formattedGmp = formatIndianPrice(gmp);
    return `${formattedGmp} (${percent}%)`;
};

/**
 * Returns Tailwind color class for GMP percentage ratio.
 * @param {Object} ele - object with gmp and ipo_max_value
 * @returns {string} Tailwind class
 */

export const gmpTextColor = (ele) => {
    const ratio =
        ele?.ipo_max_value === 0
            ? 0
            : (ele?.gmp / ele?.ipo_max_value) * 100;

    if (ratio === 0) return "text-[#6c757d]"; // neutral grey
    if (ratio > 0) return "text-[#27AE60]";   // green for gain
    return "text-[#DC3545]";                  // red for loss
};

// checking lot's distribution has any reserved non zero value
export const checkingNonZeroValueDistributionTable = (data) => {
    if(data){
        return data?.find((ele) => ele?.reserved > 0) ? true : true
    }else{
        return false
    }
}