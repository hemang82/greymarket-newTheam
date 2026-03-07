"use client";

import DOMPurify from "dompurify";

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
