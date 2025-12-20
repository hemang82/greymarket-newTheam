module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/src/app/PrivacyPolicy/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PrivacyPolicy,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const metadata = {
    title: `Privacy Policy | ${process.env.SITE_NAME}`,
    description: `Read the Privacy Policy of ${process.env.SITE_NAME}. Learn how we collect, use, store, and protect your personal information when accessing IPO grey market updates, live GMP data, and upcoming IPO insights.`,
    keywords: [
        'Privacy Policy',
        'data protection',
        'user privacy',
        'personal data',
        `${process.env.SITE_NAME} privacy`
    ],
    alternates: {
        canonical: `${process.env.SITE_URL}privacy-policy`
    },
    openGraph: {
        title: `Privacy Policy | ${process.env.SITE_NAME}`,
        description: `Understand how ${process.env.SITE_NAME} handles user data, privacy practices, cookies, and security when you use our IPO Grey Market and IPO updates platform.`,
        url: `${process.env.SITE_URL}privacy-policy`,
        images: [
            {
                url: '/og-default.png',
                width: 1200,
                height: 630,
                alt: `${process.env.SITE_NAME} – Privacy Policy`
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: `Privacy Policy | ${process.env.SITE_NAME}`,
        description: `Read how ${process.env.SITE_NAME} protects your privacy, data usage, and cookie practices.`,
        images: [
            '/og-default.png'
        ]
    }
};
function PrivacyPolicy({ title = "Privacy Policy", lastUpdated = "Jun 4, 2025", content = null, contact = {
    emailBiz: "info@greymarketipo.com",
    emailSupport: "support@gmail.com"
} }) {
    // fallback default content (simple, readable)
    const defaultContent = [
        {
            id: "info",
            title: "1. Information We Collect",
            html: `<p> We collect information to provide and improve our services. This includes personal information such as your name and email, as well as non-personal data like browser type and pages visited.</p> `
        },
        {
            id: "use",
            title: "2. How We Use Your Information",
            // html: `<ul>
            //     <li>To provide and improve our services (IPO data, calculators, tools).</li>
            //     <li>To respond to your inquiries and support requests.</li>
            //     <li>To send updates, educational content, or promotional messages (if you subscribe).</li>
            //     <li>To analyze site performance and improve user experience.</li>
            //  </ul>`,
            html: `<p> We use your information to operate our services, personalize your experience, improve performance, and ensure security.</p>`
        },
        {
            id: "cookies",
            title: "3. Cookies and Tracking",
            html: `<p>We use cookies to improve your experience and gather analytics. You can manage cookie preferences in your browser settings.</p>`
        },
        {
            id: "sharing",
            title: "4. Sharing Your Information",
            html: `<p>We do not sell or rent your personal data. We may share limited data with trusted third-party services (analytics, hosting, email providers) to operate our website. We may disclose information if required by law.</p>`
        },
        {
            id: "security",
            title: "5. Data Security",
            html: `<p>While we implement security measures, no system is fully secure. Use the Website acknowledging this risk.</p>`
        },
        {
            id: "youreright",
            title: "6. Your Rights",
            html: `<p>You may have rights such as accessing, correcting, or deleting your personal data, depending on your location.</p>`
        },
        {
            id: "children",
            title: "7.  Changes to This Policy",
            html: `<p>We may update this policy periodically. Changes will be posted on this page with the effective date.</p>`
        },
        {
            id: "contact",
            title: "8. Contact Us",
            html: `<p>For any privacy-related questions or concerns, please contact us at:</p>
             <ul>
               <li>Business & Promotions: <a href="mailto:${contact.emailBiz}">${contact.emailBiz}</a></li>
             </ul>`
        }
    ];
    const sections = content && Array.isArray(content) && content.length ? content : defaultContent;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-base-100 dark:bg-base-950 py-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-20 mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#2d6d4b26] dark:bg-indigo-900 mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-8 h-8 text-[#135c33e0] dark:text-indigo-200",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    "aria-hidden": true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12 1L3 5v6c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V5l-9-4z",
                                        stroke: "currentColor",
                                        strokeWidth: "0",
                                        fill: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/PrivacyPolicy/page.jsx",
                                        lineNumber: 118,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/PrivacyPolicy/page.jsx",
                                    lineNumber: 117,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/PrivacyPolicy/page.jsx",
                                lineNumber: 115,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/app/PrivacyPolicy/page.jsx",
                                lineNumber: 122,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 dark:text-gray-400 mt-2",
                                children: [
                                    "Last updated: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                        dateTime: new Date(lastUpdated).toISOString(),
                                        children: lastUpdated
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/PrivacyPolicy/page.jsx",
                                        lineNumber: 126,
                                        columnNumber: 43
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/PrivacyPolicy/page.jsx",
                                lineNumber: 125,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/PrivacyPolicy/page.jsx",
                        lineNumber: 114,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "prose prose-sm dark:prose-invert max-w-none lg:prose-base",
                        children: [
                            sections.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    id: s.id,
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold text-gray-800 dark:text-gray-100",
                                            children: s.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/PrivacyPolicy/page.jsx",
                                            lineNumber: 134,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-md text-gray-600 dark:text-gray-300",
                                            // render trusted HTML (if you pass html strings). Keep content sanitized if user-supplied.
                                            dangerouslySetInnerHTML: {
                                                __html: s.html
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/PrivacyPolicy/page.jsx",
                                            lineNumber: 135,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, s.id, true, {
                                    fileName: "[project]/src/app/PrivacyPolicy/page.jsx",
                                    lineNumber: 133,
                                    columnNumber: 29
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 text-sm text-gray-500 dark:text-gray-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "If you have questions about this policy, please contact us at",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `mailto:${contact.emailSupport}`,
                                            className: "text-indigo-600 hover:underline",
                                            children: contact.emailBiz
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/PrivacyPolicy/page.jsx",
                                            lineNumber: 147,
                                            columnNumber: 33
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/PrivacyPolicy/page.jsx",
                                    lineNumber: 145,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/PrivacyPolicy/page.jsx",
                                lineNumber: 144,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/PrivacyPolicy/page.jsx",
                        lineNumber: 131,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/PrivacyPolicy/page.jsx",
                lineNumber: 112,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/PrivacyPolicy/page.jsx",
            lineNumber: 111,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/PrivacyPolicy/page.jsx",
        lineNumber: 110,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/PrivacyPolicy/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/PrivacyPolicy/page.jsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0d4dc1a5._.js.map