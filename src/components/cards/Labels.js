// components/Labels.jsx
import React, { memo } from "react";

/**
 * Props:
 * - data: object (ipo data)
 * - className: extra classes for wrapper
 * - live: boolean (hide status badge if live)
 * - position: "left" | "right" (align badges)
 */
const Labels = ({ data = {}, className = "", live = false, position = "left" }) => {
    if (!data) return null;

    const listing = (data.listing_at_group || "").toUpperCase();
    const showGroup = listing === "NSE" || listing === "BSE";
    const isBoth = listing.includes("NSE") && listing.includes("BSE") || listing === "NSE, BSE";
    const isSME = (data.security_type || "").toUpperCase() === "SME";

    const status = data.ipo_status || {};
    const badgeColor = status.background_color || "#E6F3FF"; // light fallback
    const textColor = status.color || "#0B6FF0"; // text fallback

    // inline style helper
    const badgeStyle = (bg, color) => ({
        backgroundColor: bg,
        color,
    });

    // Tailwind wrapper classes; position right will justify to end
    const wrapperBase = "flex flex-wrap items-center gap-2";
    const wrapperPos = position === "right" ? "justify-end" : "justify-start";

    return (
        <div className={`${wrapperBase} ${wrapperPos} ${className}`}>
            {/* Listing group badge */}
            {(showGroup || isBoth) && (
                <span role="status"
                    aria-label={isBoth ? (isSME ? "SME - Mainboard" : "MainBoard (NSE & BSE)") : (isSME ? `${listing} - SME` : "MainBoard")}
                    className="inline-flex items-center gap-2 px-2 py-1 rounded-full text-[0.55rem] sm:text-[0.60rem] md:text-[0.60rem] lg:text-[0.75rem] font-medium leading-[1.0]"
                    style={{ background: "#135c33", color: "#ffff" }}
                >
                    {/* small white dot inside for visual */}
                    <span className="inline-block w-1 h-1 rounded-full bg-[#ffff] ring-1 ring-white/60" />
                    {isBoth ? (isSME ? "SME" : "MainBoard") : (showGroup && isSME ? `${listing} - SME` : "MainBoard")}
                </span>
            )}

            {/* Status badge (hide on live) */}
            {!live && status?.status && (
                <span
                    role="note"
                    aria-label={`Status: ${status.status}`}
                    className="inline-flex items-center gap-2 px-2 py-1 rounded-full rounded-full text-[0.55rem] sm:text-[0.60rem] md:text-[0.60rem] lg:text-[0.75rem] font-medium leading-[1.0]"
                    style={badgeStyle(badgeColor, textColor)}
                >
                    <span className="inline-block w-1 h-1 rounded-full" style={{ background: textColor }} />
                    {status.status}
                </span>
            )}
        </div>
    );
};

export default memo(Labels);
