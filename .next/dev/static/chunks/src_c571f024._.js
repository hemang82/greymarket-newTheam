(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ipodetailspages/StickyTabs.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StickyTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function StickyTabs({ items = [] }) {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(items[0]?.id);
    const go = (id)=>{
        const el = document.getElementById(id);
        if (!el) return;
        // account for a fixed header (adjust 80 if your header is taller/shorter)
        const y = el.getBoundingClientRect().top + window.scrollY - 150;
        window.history.replaceState(null, "", `#${id}`);
        window.scrollTo({
            top: y,
            behavior: "smooth"
        });
    };
    const ids = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StickyTabs.useMemo[ids]": ()=>items.map({
                "StickyTabs.useMemo[ids]": (i)=>i.id
            }["StickyTabs.useMemo[ids]"])
    }["StickyTabs.useMemo[ids]"], [
        items
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StickyTabs.useEffect": ()=>{
            const obs = new IntersectionObserver({
                "StickyTabs.useEffect": (entries)=>{
                    const visible = entries.filter({
                        "StickyTabs.useEffect": (e)=>e.isIntersecting
                    }["StickyTabs.useEffect"]).sort({
                        "StickyTabs.useEffect": (a, b)=>a.boundingClientRect.top - b.boundingClientRect.top
                    }["StickyTabs.useEffect"])[0];
                    if (visible?.target?.id) setActive(visible.target.id);
                }
            }["StickyTabs.useEffect"], {
                rootMargin: "-50% 0px -40% 0px",
                threshold: [
                    0,
                    0.25,
                    0.5,
                    0.75,
                    1
                ]
            });
            ids.forEach({
                "StickyTabs.useEffect": (id)=>{
                    const el = document.getElementById(id);
                    if (el) obs.observe(el);
                }
            }["StickyTabs.useEffect"]);
            return ({
                "StickyTabs.useEffect": ()=>obs.disconnect()
            })["StickyTabs.useEffect"];
        }
    }["StickyTabs.useEffect"], [
        ids
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sticky top-14 border-top z-30 bg-white/80 dark:bg-base-950/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-base-950/60 border-b border-gray-200 dark:border-base-800",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 overflow-x-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex gap-2 py-4 min-w-max",
                children: items.map((it)=>{
                    const isActive = active === it.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>go(it.id),
                        className: [
                            "px-3 py-1.5 rounded-md text-sm transition",
                            isActive ? "bg-primary-100 text-white font-weight-600 dark:bg-primary-900/40 dark:text-primary-300" : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                        ].join(" "),
                        children: it.label
                    }, it.id, false, {
                        fileName: "[project]/src/components/ipodetailspages/StickyTabs.jsx",
                        lineNumber: 45,
                        columnNumber: 29
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/ipodetailspages/StickyTabs.jsx",
                lineNumber: 41,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ipodetailspages/StickyTabs.jsx",
            lineNumber: 40,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ipodetailspages/StickyTabs.jsx",
        lineNumber: 39,
        columnNumber: 9
    }, this);
}
_s(StickyTabs, "JSzexMzwdf44WclWB+p3LufRu+k=");
_c = StickyTabs;
var _c;
__turbopack_context__.k.register(_c, "StickyTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/clients.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clients",
    ()=>clients
]);
const clients = [
    {
        src: "./logoipsum-288.svg",
        name: "Logo"
    },
    {
        src: "./logoipsum-317.svg",
        name: "Logo"
    },
    {
        src: "./logoipsum-321.svg",
        name: "Logo"
    },
    {
        src: "./logoipsum-323.svg",
        name: "Logo"
    },
    {
        src: "./logoipsum-330.svg",
        name: "Logo"
    },
    {
        src: "./logoipsum-331.svg",
        name: "Logo"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/features.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "features",
    ()=>features
]);
const features = [
    {
        title: "Contact Us",
        description: "Connect with our RMs and Get Best Unlisted Share Prices.",
        icon: "tabler:users"
    },
    {
        title: "Deal Processing",
        description: "First, the buyer sends payment to our bank Then UnlistedZone team starts processing.",
        icon: "tabler:stack"
    },
    {
        title: "Deal Completion",
        description: "After Getting the payment our Team Transfer Shares with 24 hrs.",
        icon: "tabler:database"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/faqs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "faqs",
    ()=>faqs
]);
const faqs = [
    {
        title: "What is a FAQ?",
        body: "A FAQ is a list of frequently asked questions and answers on a particular topic."
    },
    {
        title: "Why do I need a FAQ?",
        body: "A FAQ can help your customers find answers to common questions without having to contact you."
    },
    {
        title: "How do I create a FAQ?",
        body: "You can create a FAQ by writing a list of questions and answers and displaying them on your website."
    },
    {
        title: "How do I display a FAQ?",
        body: "You can display a FAQ by using an accordion or toggle component to show and hide the answers."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/testimonials.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "testimonials",
    ()=>testimonials
]);
const testimonials = [
    {
        name: "John Doe",
        title: "CEO of  a Company",
        avatar: "https://i.pravatar.cc/150?img=1",
        testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita, ipsam nobis blanditiis provident ducimus aut"
    },
    {
        name: "Jane Doe",
        title: "CTO of a Company",
        avatar: "https://i.pravatar.cc/150?img=2",
        testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita, ipsam nobis blanditiis provident ducimus aut, velit facere fugit praesentium, necessitatibus voluptatem consequuntur amet ratione? Sint distinctio quod non quae?"
    },
    {
        name: "John Smith",
        title: "COO of a Company",
        avatar: "https://i.pravatar.cc/150?img=3",
        testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita, ipsam nobis blanditiis provident ducimus aut, velit facere fugit praesentium, necessitatibus voluptatem consequuntur amet ratione? Sint distinctio quod non quae?"
    },
    {
        name: "Jane Smith",
        title: "CFO of a Company",
        avatar: "https://i.pravatar.cc/150?img=4",
        testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita, ipsam nobis blanditiis provident ducimus aut, velit facere fugit praesentium"
    },
    {
        name: "John Doe",
        title: "CEO of  a Company",
        avatar: "https://i.pravatar.cc/150?img=5",
        testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. provident ducimus aut, velit facere fugit praesentium, necessitatibus voluptatem consequuntur amet ratione? Sint distinctio quod non quae?"
    },
    {
        name: "Jane Doe",
        title: "CTO of a Company",
        avatar: "https://i.pravatar.cc/150?img=6",
        testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita, ipsam nobis blanditiis provident ducimus aut, velit facere fugit praesent necessitatibus"
    },
    {
        name: "John Smith",
        title: "COO of a Company",
        avatar: "https://i.pravatar.cc/150?img=7",
        testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita, ipsam nobis blanditiis provident ducimus aut, velit facere fugit praesentium, necessitatibus voluptatem consequuntur amet ratione? Sint distinctio quod non quae?"
    },
    {
        name: "Jane Smith",
        title: "CFO of a Company",
        avatar: "https://i.pravatar.cc/150?img=8",
        testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita, ipsam nobis blanditiis provident ducimus aut, velit facere fugit praesentium"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/pricing.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pricing",
    ()=>pricing
]);
const pricing = [
    {
        name: "Free",
        description: "For small teams",
        value: {
            monthly: 0,
            yearly: 0
        },
        unit: "per user/month",
        currency: "$",
        features: [
            "Unlimited users",
            "Unlimited projects",
            "Unlimited storage",
            "Unlimited support"
        ],
        button: {
            label: "Get started",
            href: "#",
            color: "light",
            icon: "tabler:arrow-right"
        }
    },
    {
        name: "Pro",
        description: "For growing teams",
        value: {
            monthly: 15,
            yearly: 12
        },
        unit: "per user/month",
        currency: "$",
        features: [
            "All Free features",
            "Priority support",
            "Advanced analytics",
            "Custom branding"
        ],
        button: {
            label: "Start free trial",
            href: "#",
            icon: "tabler:rocket"
        }
    },
    {
        name: "Enterprise",
        description: "For large teams",
        value: {
            monthly: 29,
            yearly: 24
        },
        unit: "per user/month",
        currency: "$",
        features: [
            "All Pro features",
            "Dedicated account manager",
            "Custom integrations",
            "Data import & export"
        ],
        button: {
            label: "Contact sales",
            href: "#",
            color: "light",
            icon: "tabler:mail"
        }
    },
    {
        name: "Enterprise",
        description: "For large teams",
        value: {
            monthly: 29,
            yearly: 24
        },
        unit: "per user/month",
        currency: "$",
        features: [
            "All Pro features",
            "Dedicated account manager",
            "Custom integrations",
            "Data import & export"
        ],
        button: {
            label: "Contact sales",
            href: "#",
            color: "light",
            icon: "tabler:mail"
        }
    },
    {
        name: "Enterprise",
        description: "For large teams",
        value: {
            monthly: 29,
            yearly: 24
        },
        unit: "per user/month",
        currency: "$",
        features: [
            "All Pro features",
            "Dedicated account manager",
            "Custom integrations",
            "Data import & export"
        ],
        button: {
            label: "Contact sales",
            href: "#",
            color: "light",
            icon: "tabler:mail"
        }
    },
    {
        name: "Enterprise",
        description: "For large teams",
        value: {
            monthly: 29,
            yearly: 24
        },
        unit: "per user/month",
        currency: "$",
        features: [
            "All Pro features",
            "Dedicated account manager",
            "Custom integrations",
            "Data import & export"
        ],
        button: {
            label: "Contact sales",
            href: "#",
            color: "light",
            icon: "tabler:mail"
        }
    },
    {
        name: "Enterprise",
        description: "For large teams",
        value: {
            monthly: 29,
            yearly: 24
        },
        unit: "per user/month",
        currency: "$",
        features: [
            "All Pro features",
            "Dedicated account manager",
            "Custom integrations",
            "Data import & export"
        ],
        button: {
            label: "Contact sales",
            href: "#",
            color: "light",
            icon: "tabler:mail"
        }
    },
    {
        name: "Enterprise",
        description: "For large teams",
        value: {
            monthly: 29,
            yearly: 24
        },
        unit: "per user/month",
        currency: "$",
        features: [
            "All Pro features",
            "Dedicated account manager",
            "Custom integrations",
            "Data import & export"
        ],
        button: {
            label: "Contact sales",
            href: "#",
            color: "light",
            icon: "tabler:mail"
        }
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/header.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "header",
    ()=>header
]);
const header = {
    logo: {
        src: "/logo-mark.png",
        alt: "logo",
        href: "/"
    },
    links: [
        {
            label: "Home",
            href: "#home"
        },
        {
            label: "IPO List",
            href: "#pricing"
        },
        {
            label: "Process to Buy",
            href: "#features"
        },
        {
            label: "News",
            href: "#testimonials"
        },
        {
            label: "FAQs",
            href: "#faqs"
        }
    ],
    buttons: [
        {
            key: 'logout',
            label: "Logout",
            href: "#",
            color: "light",
            size: "small"
        },
        {
            key: 'signin',
            label: "Sign In",
            href: "/auth/login",
            color: "dark",
            size: "small"
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/footer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "footer",
    ()=>footer
]);
const footer = {
    copyright: "Copyright 2025 IPO Grey Market. All Rights Reserved by IPO Grey Market",
    logo: {
        src: "./logo.png",
        alt: "logo"
    },
    links: [
        {
            label: "Privacy Policy",
            href: "#"
        },
        {
            label: "Terms of Service",
            href: "#"
        }
    ],
    social: [
        {
            icon: "tabler:brand-x",
            url: "#"
        },
        {
            icon: "tabler:brand-instagram",
            url: "#"
        },
        {
            icon: "tabler:brand-youtube",
            url: "#"
        },
        {
            icon: "tabler:brand-linkedin",
            url: "#"
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/ipolist.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ipolist",
    ()=>ipolist
]);
const ipolist = [
    {
        "id": 3220,
        "subscription_history": [],
        "valuation": [
            {
                "company": "Pine Labs Limited",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "0"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "0"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "1.00"
                    }
                ]
            },
            {
                "company": "One97 Communications Limited (“Paytm”)",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "-110.98"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "0"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "1.00"
                    }
                ]
            },
            {
                "company": "Zaggle Prepaid Ocean Services Limited (“Zaggle”)",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "48.87"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "0"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "1.00"
                    }
                ]
            },
            {
                "company": "Adyen N.V.",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "46.23"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "0"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "0"
                    }
                ]
            },
            {
                "company": "Shopify Inc.",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "96.50"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "0"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "0"
                    }
                ]
            },
            {
                "company": "Block Inc.",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "16.10"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "0"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "0"
                    }
                ]
            },
            {
                "company": "Marqeta Inc.",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "101.20"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "0"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "0"
                    }
                ]
            }
        ],
        "financial_performance": [
            {
                "company": "Pine Labs Limited",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "-22.43"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "-4.15"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "-1.45"
                    }
                ]
            },
            {
                "company": "One97 Communications Limited (“Paytm”)",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "235.54"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "-4.69"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "-10.35"
                    }
                ]
            },
            {
                "company": "Zaggle Prepaid Ocean Services Limited (“Zaggle”)",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "99.25"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "9.64"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "6.99"
                    }
                ]
            },
            {
                "company": "Adyen N.V.",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "13,987.40"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "25.06"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "3,058.07"
                    }
                ]
            },
            {
                "company": "Shopify Inc.",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "761.60"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "19.58"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "133.45"
                    }
                ]
            },
            {
                "company": "Block Inc.",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "2,925.70"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "14.51"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "399.50"
                    }
                ]
            },
            {
                "company": "Marqeta Inc.",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "180.20"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "2.34"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "4.25"
                    }
                ]
            }
        ],
        "is_review": true,
        "company_name": "Pine Labs Limited",
        "symbol": "PINELABS",
        "security_type": "EQ",
        "start_date": "2025-11-07",
        "end_date": "2025-11-11",
        "allotment_date": "2025-11-12",
        "listing_date": "2025-11-14",
        "listing_at_group": "NSE, BSE",
        "face_value": "₹1 Per Share",
        "price_range": "₹210 - ₹221",
        "lead_managers": "Axis Capital Limited, Citigroup Global Markets India Private Limited, J.P. Morgan India Private Limited, Jefferies India Private Limited, Morgan Stanley India Company Private Limited",
        "issue_size": 176466426,
        "fresh_issue_size": "2080.00",
        "fresh_issue_value": 94117647,
        "offer_of_sale": 82348779,
        "offer_of_sale_value": "1819.91",
        "issue_amount": "3899.91",
        "issue_type": "Bookbuilding IPO",
        "bid_lot": 67,
        "ipo_max_value": 221,
        "ipo_min_value": 210,
        "max_investment": 14807,
        "min_investment": 14070,
        "subscription": 0.09,
        "about_the_company": "Founded in 1998 and headquartered in Noida, Pine Labs is a leading Indian merchant commerce platform that offers POS solutions, payment processing, and merchant financing services. It helps businesses of all sizes—from small retailers to large enterprises—adopt digital payment technologies and enhance customer experiences. The company’s offerings include smart POS devices that accept multiple payment modes, Buy Now Pay Later (BNPL) options, short-term financing for merchants, loyalty and gift solutions, and online payment tools for e-commerce platforms. As of December 31, 2024, Pine Labs served over 9 lakh merchants and worked with major brands like Amazon Pay, LG Electronics, Flipkart, and banks such as HDFC, Axis, and ICICI. Over the years, Pine Labs has grown from a simple card payment provider into a comprehensive fintech platform driving India’s cashless retail transformation.",
        "pre_issue_share_holding": 1054146853,
        "post_issue_share_holding": 1148264500,
        "company_promoter": "<p>NA</p>",
        "issue_objectives": "NA",
        "gmp": "3",
        "nii": "0.00",
        "employee": "0.00",
        "retail": "0.00",
        "gibs": "0.00",
        "s_hni_lot_size": 938,
        "b_hni_lot_size": 4556,
        "s_hni_subscription": "0.00",
        "b_hni_subscription": "0.00",
        "retail_portion": "NA",
        "company_financial_data": {
            "financial_data": [
                {
                    "assets": "Assets",
                    "revenue": "Revenue",
                    "net_worth": "Net Worth",
                    "period_ended": "Period Ended",
                    "total_borrowing": "Total Borrowing",
                    "profit_after_tax": "Profit after tax",
                    "reserves_and_surpluse": "Reserves And Surpluse"
                },
                {
                    "assets": "10,904.32",
                    "revenue": "653.08",
                    "net_worth": "2,327.55",
                    "period_ended": "Jun-25",
                    "total_borrowing": "888.74",
                    "profit_after_tax": "4.79",
                    "reserves_and_surpluse": "0"
                },
                {
                    "assets": "10,715.74",
                    "revenue": "2,327.09",
                    "net_worth": "-2,244.27",
                    "period_ended": "Mar-25",
                    "total_borrowing": "829.49",
                    "profit_after_tax": "-145.49",
                    "reserves_and_surpluse": "0"
                },
                {
                    "assets": "9,648.56",
                    "revenue": "1,824.16",
                    "net_worth": "-2,035.24",
                    "period_ended": "Mar-24",
                    "total_borrowing": "532.92",
                    "profit_after_tax": "-341.9",
                    "reserves_and_surpluse": "0"
                },
                {
                    "assets": "9,363.21",
                    "revenue": "1,690.44",
                    "net_worth": "-1,764.77",
                    "period_ended": "Mar-23",
                    "total_borrowing": "329.51",
                    "profit_after_tax": "-265.15",
                    "reserves_and_surpluse": "0"
                }
            ],
            "financial_amount_type": "In Crores"
        },
        "company_strenght": "<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Integrated Fintech Network:</strong> Unified ecosystem connecting merchants, brands, and financial partners for smooth digital transactions.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Advanced Cloud Infrastructure:</strong> Secure, scalable platform designed to handle large transaction volumes efficiently.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Robust Partner Ecosystem:</strong> Strong alliances with leading merchants and financial institutions driving consistent growth and customer retention.</li></ol>",
        "company_weakness": "<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Sustained Financial Losses:</strong> The company has incurred significant losses in recent years, raising concerns about near-term profitability.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Liquidity Concerns:</strong> Negative operating cash flows indicate potential pressure on liquidity if the trend continues.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Customer Concentration Risk:</strong> Dependence on retaining key merchants and clients makes the business vulnerable to revenue fluctuations.</li></ol>",
        "ipo_subscription_detail": [
            {
                "times": 0,
                "applied": 0,
                "offered": 52897083,
                "category": "QIB"
            },
            {
                "times": 0,
                "applied": 1178865,
                "offered": 26451214,
                "category": "NIB"
            },
            {
                "times": 0,
                "applied": 6879694,
                "offered": 17634143,
                "category": "RETAIL"
            },
            {
                "times": 0,
                "applied": 261903,
                "offered": 125000,
                "category": "EMPLOYEES"
            },
            {
                "times": 0,
                "applied": 391548,
                "offered": 17634143,
                "category": "HNIs(10L +)"
            },
            {
                "times": 0,
                "applied": 787317,
                "offered": 8817071,
                "category": "HNIs (2-10L)"
            }
        ],
        "status": "Active",
        "registrar": "Kfin Technologies Limited",
        "registrar_detail": "Kfin Technologies Limited, +914067162222, einward.ris@kfintech.com, https://ipostatus.kfintech.com/",
        "ipo_image": "https://s3.ap-south-1.amazonaws.com/ipo-img-bucket/media/ipo_images/1761898412587.png",
        "key_performance_indicator": [
            {
                "eps": "EPS",
                "kpi": "KPI",
                "roe": "ROE",
                "roec": "ROCE",
                "ronw": "RONW",
                "pre_ipo": "PRE IPO(PE)",
                "post_ipo": "POST IPO(PE)"
            },
            {
                "eps": "0.05",
                "kpi": "Jun-25",
                "roe": "0",
                "roec": "0",
                "ronw": "0",
                "pre_ipo": "0",
                "post_ipo": "0"
            },
            {
                "eps": "-1.45",
                "kpi": "Mar-25",
                "roe": "0",
                "roec": "0",
                "ronw": "0",
                "pre_ipo": "-160.13",
                "post_ipo": "0"
            },
            {
                "eps": "-3.46",
                "kpi": "Mar-24",
                "roe": "0",
                "roec": "0",
                "ronw": "0",
                "pre_ipo": "0",
                "post_ipo": "0"
            },
            {
                "eps": "-2.7",
                "kpi": "Mar-23",
                "roe": "0",
                "roec": "0",
                "ronw": "0",
                "pre_ipo": "0",
                "post_ipo": "0"
            }
        ],
        "ipo_reservation": [
            {
                "no_of_shares": 79358986,
                "shares_offered": 44.97,
                "investor_category": "Anchor"
            },
            {
                "no_of_shares": 52897083,
                "shares_offered": 29.98,
                "investor_category": "QIB"
            },
            {
                "no_of_shares": 26451214,
                "shares_offered": 14.99,
                "investor_category": "HNI"
            },
            {
                "no_of_shares": 17634143,
                "shares_offered": 9.99,
                "investor_category": "RETAIL"
            },
            {
                "no_of_shares": 125000,
                "shares_offered": 0.07,
                "investor_category": "Employee"
            }
        ],
        "qibs_offered": 52897083,
        "hnis_offered": 26451214,
        "hnis_ten_plus_offered": 17634143,
        "hnis_two_plus_offered": 8817071,
        "retail_offered": 17634143,
        "anchor_offered": 0,
        "shareholder_offered": 0,
        "market_maker_offered": 0,
        "employees_offered": 125000,
        "other_investors_offered": 0,
        "institutional_investors_offered": 0,
        "ipo_lot_description": [
            {
                "qty": 67,
                "amount": 14807,
                "lot(s)": 1,
                "category": "RETAIL",
                "reserved": 0
            },
            {
                "qty": 938,
                "amount": 207298,
                "lot(s)": 14,
                "category": "sHNI",
                "reserved": 0
            },
            {
                "qty": 4556,
                "amount": 1006876,
                "lot(s)": 68,
                "category": "bHNI",
                "reserved": 0
            }
        ],
        "appplication_wise_breakup": {
            "data": [
                {
                    "times": "Times",
                    "applied": "Applied",
                    "category": "Category",
                    "reserved": "Reserved"
                },
                {
                    "times": "0.0",
                    "applied": "68577",
                    "category": "RETAIL",
                    "reserved": "263196"
                },
                {
                    "times": "0.0",
                    "applied": "1682",
                    "category": "EMPLOYEES",
                    "reserved": "0.0"
                },
                {
                    "times": "0.0",
                    "applied": "74",
                    "category": "HNIs(10L +)",
                    "reserved": "18800"
                },
                {
                    "times": "0.0",
                    "applied": "644",
                    "category": "HNIs (2-10L)",
                    "reserved": "9400"
                }
            ],
            "count": "4"
        },
        "subscription_demand": [
            {
                "times": 0,
                "demand": 0,
                "offered": 1169.03,
                "category": "QIBs"
            },
            {
                "times": 0,
                "demand": 167.6,
                "offered": 389.71,
                "category": "RETAIL"
            },
            {
                "times": 0,
                "demand": 29,
                "offered": 584.57,
                "category": "NIB"
            },
            {
                "times": 0,
                "demand": 19.7,
                "offered": 194.86,
                "category": "HNIs 2+"
            },
            {
                "times": 0,
                "demand": 9.3,
                "offered": 389.71,
                "category": "HNIs 10+"
            },
            {
                "times": 0,
                "demand": 6.42,
                "offered": 2.76,
                "category": "EMPLOYEES"
            }
        ],
        "interest_cost_per_share": [],
        "company_address": {
            "Email": "cosecy@pinelabs.com",
            "Phone": "+91 22 6986 3600",
            "Website": "http://www.pinelabs.com/",
            "address": "Unit No. 408, 4th Floor, Time Tower, MG Road, DLF QE Gurgaon, Haryana, 122002"
        },
        "ipo_doc_link": [
            {
                "link": "https://docipo.ipo-trend.com/uploads/pine_labs_limited/1762145037679.pdf",
                "lable": "drhp"
            },
            {
                "link": "https://docipo.ipo-trend.com/uploads/pine_labs_limited/1762488641803.pdf",
                "lable": "anchor"
            }
        ],
        "updated_at": "2025-11-07T07:16:17.384604Z",
        "listed_price": "0.00",
        "allotment": false,
        "is_first_time_update": true,
        "buy_sell_notification": false,
        "buy_price": "0.00",
        "sell_price": "0.00",
        "recommendation": "May apply",
        "is_active": true,
        "issue_price": null,
        "current_price": null,
        "gain_or_lose": null,
        "scrip_code": null,
        "listing_day_gain": null,
        "listing_day_close": null,
        "new_symbol": "PINELABS",
        "reason": null,
        "is_hold": false,
        "allotment_date_time": null,
        "peer_comparison_source": null,
        "sector": "Financial Technology",
        "industry": "Digital Payments & Merchant Solutions",
        "basic_industry": "Financial Services",
        "macro_economic_sector": "Technology-Enabled Financial Services",
        "spreadx_ipo_id": 920,
        "anchor_investor_bid_date": null,
        "anchor_lockin_date_50": null,
        "anchor_lockin_date_remaining": null,
        "anchor_investor_amount": null,
        "anchor_investor_file_url": null,
        "categories": [
            2552,
            2553
        ],
        "ipo_status": {
            "status": "Live",
            "color": "#ff0000",
            "background_color": "#fadada"
        },
        "is_buy_sell_enable": false,
        "is_social_account_enable": true,
        "isandroidsocial": true,
        "is_available_for_apply": true,
        "registrar_data": {
            "id": 8,
            "name": "Kfin Technologies Limited"
        },
        "merchant_banker_data": [
            {
                "id": 15,
                "name": "Axis Capital Limited"
            },
            {
                "id": 17,
                "name": "Citigroup Global Markets India Private Limited"
            },
            {
                "id": 47,
                "name": "J.P. Morgan India Private Limited"
            },
            {
                "id": 38,
                "name": "Jefferies India Private Limited"
            },
            {
                "id": 39,
                "name": "Morgan Stanley India Company Private Limited"
            }
        ],
        "is_encrypt": true,
        "platform": null
    },
    {
        "id": 3219,
        "subscription_history": [],
        "valuation": [
            {
                "company": "Curis Lifesciences Limited",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "0"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "0"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "0"
                    }
                ]
            },
            {
                "company": "Sotac Pharmaceuticals Limited",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "18.30"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "0"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "0"
                    }
                ]
            },
            {
                "company": "Lincoln Pharmaceuticals Limited",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "12.21"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "0"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "0"
                    }
                ]
            }
        ],
        "financial_performance": [
            {
                "company": "Curis Lifesciences Limited",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "27.34"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "37.62"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "10.29"
                    }
                ]
            },
            {
                "company": "Sotac Pharmaceuticals Limited",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "47.99"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "9.00"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "4.32"
                    }
                ]
            },
            {
                "company": "Lincoln Pharmaceuticals Limited",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "335.34"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "12.27"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "41.11"
                    }
                ]
            }
        ],
        "is_review": false,
        "company_name": "Curis Lifesciences Limited",
        "symbol": "CURIS",
        "security_type": "SME",
        "start_date": "2025-11-07",
        "end_date": "2025-11-11",
        "allotment_date": "2025-11-12",
        "listing_date": "2025-11-14",
        "listing_at_group": "NSE",
        "face_value": "₹10 per share",
        "price_range": "₹120 - ₹128",
        "lead_managers": "Finaax Capital Advisors Private Limited",
        "issue_size": 2150000,
        "fresh_issue_size": "27.52",
        "fresh_issue_value": 2150000,
        "offer_of_sale": 0,
        "offer_of_sale_value": "0.00",
        "issue_amount": "27.52",
        "issue_type": "Bookbuilding IPO",
        "bid_lot": 1000,
        "ipo_max_value": 128,
        "ipo_min_value": 120,
        "max_investment": 128000,
        "min_investment": 120000,
        "subscription": 0,
        "about_the_company": "Curis Lifesciences Limited, founded in 2010, is a pharmaceutical company engaged in developing, manufacturing, and distributing a wide range of medicines. It produces pharmaceutical products for both domestic and global markets through loan license, contract manufacturing, and its own brand marketing. The company serves over 100 corporate clients under contract manufacturing and two clients for its own brands in Yemen and Kenya. Its product range includes tablets, capsules, oral liquids, external preparations, and sterile ophthalmic ointments. The company operates a modern manufacturing facility in Sanand, Gujarat, maintaining strict quality standards, and as of July 31, 2025, it employs 95 permanent staff.",
        "pre_issue_share_holding": 5934434,
        "post_issue_share_holding": 8084434,
        "company_promoter": "<ol><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Mr. Dharmesh Dashrathbhai Patel</li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Mr. Siddhant Jayantibhai Pawasia</li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Mr. Piyush Gordhanbhai Antala</li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Mr. Jaimik Mansukhbhai Patel</li></ol>",
        "issue_objectives": "NA",
        "gmp": "4",
        "nii": "0.00",
        "employee": "0.00",
        "retail": "0.00",
        "gibs": "0.00",
        "s_hni_lot_size": 3000,
        "b_hni_lot_size": 8000,
        "s_hni_subscription": "0.00",
        "b_hni_subscription": "0.00",
        "retail_portion": "NA",
        "company_financial_data": {
            "financial_data": [
                {
                    "assets": "Assets",
                    "revenue": "Revenue",
                    "net_worth": "Net Worth",
                    "period_ended": "Period Ended",
                    "total_borrowing": "Total Borrowing",
                    "profit_after_tax": "Profit after tax",
                    "reserves_and_surpluse": "Reserves And Surpluse"
                },
                {
                    "assets": "56.29",
                    "revenue": "19.51",
                    "net_worth": "19.10",
                    "period_ended": "Jul-25",
                    "total_borrowing": "15.32",
                    "profit_after_tax": "2.87",
                    "reserves_and_surpluse": "13.16"
                },
                {
                    "assets": "42.53",
                    "revenue": "49.65",
                    "net_worth": "16.23",
                    "period_ended": "Mar-25",
                    "total_borrowing": "15.62",
                    "profit_after_tax": "6.11",
                    "reserves_and_surpluse": "10.29"
                },
                {
                    "assets": "33.88",
                    "revenue": "35.87",
                    "net_worth": "5.87",
                    "period_ended": "Mar-24",
                    "total_borrowing": "17.09",
                    "profit_after_tax": "4.87",
                    "reserves_and_surpluse": "5.37"
                },
                {
                    "assets": "29.75",
                    "revenue": "36.42",
                    "net_worth": "1.01",
                    "period_ended": "Mar-23",
                    "total_borrowing": "16.19",
                    "profit_after_tax": "1.88",
                    "reserves_and_surpluse": "0.51"
                }
            ],
            "financial_amount_type": "In Crores"
        },
        "company_strenght": "<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Experienced Leadership and Skilled Management:</strong> Promoters with 13–15 years of experience in the pharmaceutical sector and medical expertise lead the company, ensuring informed strategic decisions, operational efficiency, and sustained client trust.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Broad and Diverse Product Range:</strong> Offers an extensive portfolio including tablets, capsules, oral liquids, external applications, and sterile ophthalmic ointments, supported by valid manufacturing licenses (G/25/2225 and G/28/1632).</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>WHO-GMP Certified Facility with Global Reach:</strong> The Sanand, Gujarat-based manufacturing unit is WHO-GMP certified, strategically located for logistics and skilled workforce access, and holds international product registrations in markets such as Yemen, Kenya, the Philippines, and Nigeria.</li></ol>",
        "company_weakness": "<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Operational Concentration Risk:</strong> Heavy reliance on a single manufacturing facility in Sanand, Ahmedabad (Gujarat) exposes the company to regional, environmental, and regulatory risks that could disrupt operations and impact financial performance.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Regulatory and Approval Challenges:</strong> As part of a highly regulated sector, delays or lapses in obtaining or renewing statutory licenses, certifications, or product approvals may hinder business continuity and affect profitability.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Debt Servicing and Compliance Risk:</strong> Previous delays in loan repayments pose potential reputational and financial risks; continued focus on disciplined financial management is crucial to maintain lender confidence and credit health.</li></ol>",
        "ipo_subscription_detail": [],
        "status": "Upcoming",
        "registrar": "Link Intime India Private Limited",
        "registrar_detail": "Link Intime India Private Limited, +91-22-4918 6270, curislifesciences.smeipo@in.mpms.mufg.com, https://linkintime.co.in/Initial_Offer/public-issues.html",
        "ipo_image": "https://s3.ap-south-1.amazonaws.com/ipo-img-bucket/media/ipo_images/1761886860964.jpeg",
        "key_performance_indicator": [
            {
                "eps": "EPS",
                "kpi": "KPI",
                "roe": "ROE",
                "roec": "ROCE",
                "ronw": "RONW",
                "pre_ipo": "PRE IPO(PE)",
                "post_ipo": "POST IPO(PE)"
            },
            {
                "eps": "0",
                "kpi": "Jul-25",
                "roe": "16.26",
                "roec": "11.65",
                "ronw": "0",
                "pre_ipo": "0",
                "post_ipo": "12.01"
            },
            {
                "eps": "0",
                "kpi": "Mar-25",
                "roe": "55.25",
                "roec": "27.83",
                "ronw": "0",
                "pre_ipo": "12.44",
                "post_ipo": "0"
            },
            {
                "eps": "0",
                "kpi": "Mar-24",
                "roe": "141.51",
                "roec": "33.57",
                "ronw": "0",
                "pre_ipo": "0",
                "post_ipo": "0"
            },
            {
                "eps": "0",
                "kpi": "Mar-23",
                "roe": "2752.56",
                "roec": "14.83",
                "ronw": "0",
                "pre_ipo": "0",
                "post_ipo": "0"
            }
        ],
        "ipo_reservation": [
            {
                "no_of_shares": 610000,
                "shares_offered": 28.37,
                "investor_category": "Anchor"
            },
            {
                "no_of_shares": 408000,
                "shares_offered": 18.98,
                "investor_category": "QIB"
            },
            {
                "no_of_shares": 308000,
                "shares_offered": 14.33,
                "investor_category": "HNI"
            },
            {
                "no_of_shares": 716000,
                "shares_offered": 33.3,
                "investor_category": "RETAIL"
            },
            {
                "no_of_shares": 108000,
                "shares_offered": 5.02,
                "investor_category": "Market Maker"
            }
        ],
        "qibs_offered": 0,
        "hnis_offered": 0,
        "hnis_ten_plus_offered": 0,
        "hnis_two_plus_offered": 0,
        "retail_offered": 0,
        "anchor_offered": 0,
        "shareholder_offered": 0,
        "market_maker_offered": 108000,
        "employees_offered": 0,
        "other_investors_offered": 0,
        "institutional_investors_offered": 0,
        "ipo_lot_description": [
            {
                "qty": 2000,
                "amount": 256000,
                "lot(s)": 2,
                "category": "RETAIL",
                "reserved": 0
            },
            {
                "qty": 3000,
                "amount": 384000,
                "lot(s)": 3,
                "category": "sHNI",
                "reserved": 0
            },
            {
                "qty": 8000,
                "amount": 1024000,
                "lot(s)": 8,
                "category": "bHNI",
                "reserved": 0
            }
        ],
        "appplication_wise_breakup": {
            "data": [],
            "count": ""
        },
        "subscription_demand": [],
        "interest_cost_per_share": [],
        "company_address": {
            "Email": "cs@curisls.com",
            "Phone": "+91 99045 22543",
            "Website": "https://curisls.com/",
            "address": "PF-23, GIDC Sanand - II, Industrial Estate, Sanand Ahmedabad, Gujarat, 382110"
        },
        "ipo_doc_link": [
            {
                "link": "https://docipo.ipo-trend.com/uploads/curis_lifesciences_limited/1761887767886.pdf",
                "lable": "drhp"
            }
        ],
        "updated_at": "2025-11-06T10:00:00.664405Z",
        "listed_price": "0.00",
        "allotment": false,
        "is_first_time_update": true,
        "buy_sell_notification": false,
        "buy_price": "0.00",
        "sell_price": "0.00",
        "recommendation": "May apply",
        "is_active": true,
        "issue_price": null,
        "current_price": null,
        "gain_or_lose": null,
        "scrip_code": null,
        "listing_day_gain": null,
        "listing_day_close": null,
        "new_symbol": "CURISLIFESCIENCE",
        "reason": null,
        "is_hold": false,
        "allotment_date_time": null,
        "peer_comparison_source": null,
        "sector": "Pharmaceuticals",
        "industry": "Pharmaceutical Formulations Manufacturing",
        "basic_industry": "Healthcare",
        "macro_economic_sector": "Healthcare & Life Sciences",
        "spreadx_ipo_id": 919,
        "anchor_investor_bid_date": null,
        "anchor_lockin_date_50": null,
        "anchor_lockin_date_remaining": null,
        "anchor_investor_amount": null,
        "anchor_investor_file_url": null,
        "categories": [
            2550,
            2551
        ],
        "ipo_status": {
            "status": "Upcoming",
            "color": "#0000FF",
            "background_color": "#EBEEF7"
        },
        "is_buy_sell_enable": false,
        "is_social_account_enable": true,
        "isandroidsocial": true,
        "is_available_for_apply": true,
        "registrar_data": {
            "id": 244,
            "name": "Link Intime India Private Limited"
        },
        "merchant_banker_data": [
            {
                "id": 253,
                "name": "Finaax Capital Advisors Private Limited"
            }
        ]
    },
    {
        "id": 3263,
        "subscription_history": [],
        "valuation": [
            {
                "company": "Shining Tools Limited",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "15.9"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "NA"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "10.00"
                    }
                ]
            },
            {
                "company": "Birla Precisions Technologies Limited",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "56.37"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "46.22"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "2.00"
                    }
                ]
            }
        ],
        "financial_performance": [
            {
                "company": "Shining Tools Limited",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "19.25"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "NA"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "7.17"
                    }
                ]
            },
            {
                "company": "Birla Precisions Technologies Limited",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "24.08"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "NA"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "0.82"
                    }
                ]
            }
        ],
        "is_review": false,
        "company_name": "Shining Tools Limited",
        "symbol": "SHININGTOOLSL",
        "security_type": "SME",
        "start_date": "2025-11-07",
        "end_date": "2025-11-11",
        "allotment_date": "2025-11-12",
        "listing_date": "2025-11-14",
        "listing_at_group": "BSE",
        "face_value": "₹10 per share",
        "price_range": "₹114 - ₹114",
        "lead_managers": "Sobhagya Capital Options Limited",
        "issue_size": 1500000,
        "fresh_issue_size": "17.10",
        "fresh_issue_value": 1500000,
        "offer_of_sale": 0,
        "offer_of_sale_value": "0.00",
        "issue_amount": "17.10",
        "issue_type": "Fixed Price IPO",
        "bid_lot": 1200,
        "ipo_max_value": 114,
        "ipo_min_value": 114,
        "max_investment": 136800,
        "min_investment": 136800,
        "subscription": 0,
        "about_the_company": "Shining Tools Limited, established in May 2013, is a Rajkot-based manufacturer of high-performance solid carbide cutting tools under the brand “Tixna”, offering a wide range of products like end mills, drills, reamers, and thread mills for industries such as automotive, engineering, aerospace, defense, agriculture, medical, casting, and power. Along with manufacturing, the company also provides reconditioning services to enhance tool life and offer cost-effective solutions to clients. With an ISO 9001:2015 certified quality management system and a modern manufacturing facility in Gujarat, Shining Tools supports both domestic and international markets with precision, durability, and innovative tooling solutions.",
        "pre_issue_share_holding": 4158400,
        "post_issue_share_holding": 5658400,
        "company_promoter": "<ol><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Mr. Vipulbhai Laljibhai Ghonia</li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Mr. Kamalbhai Laljibhai Ghonia</li></ol>",
        "issue_objectives": "NA",
        "gmp": "0",
        "nii": "0.00",
        "employee": "0.00",
        "retail": "0.00",
        "gibs": "0.00",
        "s_hni_lot_size": 3600,
        "b_hni_lot_size": 3600,
        "s_hni_subscription": "0.00",
        "b_hni_subscription": "0.00",
        "retail_portion": "NA",
        "company_financial_data": {
            "financial_data": [
                {
                    "assets": "Assets",
                    "revenue": "Revenue",
                    "net_worth": "Net Worth",
                    "period_ended": "Period Ended",
                    "total_borrowing": "Total Borrowing",
                    "profit_after_tax": "Profit After Tax",
                    "reserves_and_surpluse": "Reserves and Surplus"
                },
                {
                    "assets": "22.51",
                    "revenue": "5.42",
                    "net_worth": "9.47",
                    "period_ended": "Jul 25",
                    "total_borrowing": "8.87",
                    "profit_after_tax": "1.47",
                    "reserves_and_surpluse": "5.53"
                },
                {
                    "assets": "19.64",
                    "revenue": "14.77",
                    "net_worth": "8.01",
                    "period_ended": "Mar-25",
                    "total_borrowing": "8.18",
                    "profit_after_tax": "2.93",
                    "reserves_and_surpluse": "4.06"
                },
                {
                    "assets": "15.05",
                    "revenue": "10.6",
                    "net_worth": "3.6",
                    "period_ended": "Mar-24",
                    "total_borrowing": "7.54",
                    "profit_after_tax": "1.58",
                    "reserves_and_surpluse": "1.6"
                },
                {
                    "assets": "16.83",
                    "revenue": "10.46",
                    "net_worth": "2.02",
                    "period_ended": "Mar-23",
                    "total_borrowing": "9.45",
                    "profit_after_tax": "-0.08",
                    "reserves_and_surpluse": "0.02"
                }
            ],
            "financial_amount_type": "In Crores"
        },
        "company_strenght": "<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Customized Solutions:</strong> Designs tailor-made cutting tools for industry-specific needs.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Wide Product Range:</strong> Offers diverse cutting tools and accessories for multiple applications.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Experienced Team:</strong> Promoters bring 20+ years of technical and manufacturing expertise.</li></ol>",
        "company_weakness": "<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Single Location Dependence:</strong> The entire manufacturing is based in one facility at Rajkot, Gujarat — any disruption here can severely affect operations and revenue.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Business Continuity Risk:</strong> Production shutdowns or breakdowns at this single unit could directly impact profitability.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Regional Concentration:</strong> A major share of sales comes from the western region, mainly Gujarat, exposing the company to regional market risks.</li></ol>",
        "ipo_subscription_detail": [],
        "status": "Upcoming",
        "registrar": "Maashitla Securities Private Limited",
        "registrar_detail": "Maashitla Securities Private Limited, +91 9687693344,360311, cs@tixnatools.com, https://maashitla.com/allotment-status/public-issues",
        "ipo_image": "https://s3.ap-south-1.amazonaws.com/ipo-img-bucket/media/ipo_images/1762144123857.png",
        "key_performance_indicator": [
            {
                "eps": "EPS",
                "kpi": "KPI",
                "roe": "ROE",
                "roec": "ROCE",
                "ronw": "RONW",
                "pre_ipo": "PRE IPO(PE)",
                "post_ipo": "POST IPO(PE)"
            },
            {
                "eps": "10.59",
                "kpi": "Jul-25",
                "roe": "49.15",
                "roec": "35.70",
                "ronw": "0",
                "pre_ipo": "0",
                "post_ipo": "0"
            },
            {
                "eps": "7.17",
                "kpi": "Mar-25",
                "roe": "49.59",
                "roec": "29.61",
                "ronw": "0",
                "pre_ipo": "0",
                "post_ipo": "0"
            },
            {
                "eps": "3.94",
                "kpi": "Mar-24",
                "roe": "56.08",
                "roec": "26.64",
                "ronw": "0",
                "pre_ipo": "0",
                "post_ipo": "0"
            },
            {
                "eps": "-0.2",
                "kpi": "Mar-23",
                "roe": "-3.85",
                "roec": "8.32",
                "ronw": "0",
                "pre_ipo": "0",
                "post_ipo": "0"
            }
        ],
        "ipo_reservation": [
            {
                "no_of_shares": 712600,
                "shares_offered": 47.48,
                "investor_category": "HNI"
            },
            {
                "no_of_shares": 712600,
                "shares_offered": 47.48,
                "investor_category": "RETAIL"
            },
            {
                "no_of_shares": 75600,
                "shares_offered": 5.04,
                "investor_category": "Market Maker"
            }
        ],
        "qibs_offered": 0,
        "hnis_offered": 0,
        "hnis_ten_plus_offered": 0,
        "hnis_two_plus_offered": 0,
        "retail_offered": 0,
        "anchor_offered": 0,
        "shareholder_offered": 0,
        "market_maker_offered": 75600,
        "employees_offered": 0,
        "other_investors_offered": 0,
        "institutional_investors_offered": 0,
        "ipo_lot_description": [
            {
                "qty": 2400,
                "amount": 273600,
                "lot(s)": 2,
                "category": "RETAIL",
                "reserved": 0
            },
            {
                "qty": 3600,
                "amount": 410400,
                "lot(s)": 3,
                "category": "HNI",
                "reserved": 0
            }
        ],
        "appplication_wise_breakup": {
            "data": [],
            "count": ""
        },
        "subscription_demand": [],
        "interest_cost_per_share": [],
        "company_address": {
            "Email": "cs@tixnatools.com",
            "Phone": "+91 9687693344",
            "Website": "https://www.tixnatools.com/",
            "address": "Survey no. 63/2, Plot No. 2, Rajkot, Gondal Highway paliya, , Gondal, Gujarat, 360311"
        },
        "ipo_doc_link": [
            {
                "link": "https://docipo.ipo-trend.com/uploads/shining_tools_limited/1762146001242.pdf",
                "lable": "drhp"
            }
        ],
        "updated_at": "2025-11-06T10:00:00.391516Z",
        "listed_price": "0.00",
        "allotment": false,
        "is_first_time_update": true,
        "buy_sell_notification": false,
        "buy_price": "0.00",
        "sell_price": "0.00",
        "recommendation": "May apply",
        "is_active": true,
        "issue_price": null,
        "current_price": null,
        "gain_or_lose": null,
        "scrip_code": null,
        "listing_day_gain": null,
        "listing_day_close": null,
        "new_symbol": "SHININGTOOLSL",
        "reason": null,
        "is_hold": false,
        "allotment_date_time": null,
        "peer_comparison_source": null,
        "sector": "Engineering & Industrial Manufacturing",
        "industry": "Cutting Tools & Precision Tools",
        "basic_industry": "CNC Cutting Tools Manufacturing",
        "macro_economic_sector": "Manufacturing",
        "spreadx_ipo_id": 922,
        "anchor_investor_bid_date": null,
        "anchor_lockin_date_50": null,
        "anchor_lockin_date_remaining": null,
        "anchor_investor_amount": null,
        "anchor_investor_file_url": null,
        "categories": [
            2578,
            2579
        ],
        "ipo_status": {
            "status": "Upcoming",
            "color": "#0000FF",
            "background_color": "#EBEEF7"
        },
        "is_buy_sell_enable": false,
        "is_social_account_enable": true,
        "isandroidsocial": true,
        "is_available_for_apply": true,
        "registrar_data": {
            "id": 246,
            "name": "Maashitla Securities Private Limited"
        },
        "merchant_banker_data": [
            {
                "id": 208,
                "name": "Sobhagya Capital Options Limited"
            }
        ]
    },
    {
        "id": 3294,
        "subscription_history": [],
        "valuation": [
            {
                "company": "Emmvee Photovoltaic Power Limited",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "0"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "0"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "0"
                    }
                ]
            },
            {
                "company": "Websol Energy System Ltd",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "33.83"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "0"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "0"
                    }
                ]
            },
            {
                "company": "Waaree energies limited",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "50.47"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "0"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "0"
                    }
                ]
            },
            {
                "company": "R S premier energies limited",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "51.30"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "0"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "0"
                    }
                ]
            },
            {
                "company": "Vikram Solar Limited",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "70.97"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "0"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "0"
                    }
                ]
            },
            {
                "company": "Saatvik Green Energy Limited",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "27.49"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "0"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "0"
                    }
                ]
            }
        ],
        "financial_performance": [
            {
                "company": "Emmvee Photovoltaic Power Limited",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "8.95"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "69.44"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "6.22"
                    }
                ]
            },
            {
                "company": "Websol Energy System Ltd",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "65.88"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "55.65"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "36.66"
                    }
                ]
            },
            {
                "company": "Waaree energies limited",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "329.96"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "20.34"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "68.24"
                    }
                ]
            },
            {
                "company": "R S premier energies limited",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "62.61"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "55.65"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "21.35"
                    }
                ]
            },
            {
                "company": "Vikram Solar Limited",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "39.24"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "11.26"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "4.61"
                    }
                ]
            },
            {
                "company": "Saatvik Green Energy Limited",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "30.14"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "63.41"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "19.09"
                    }
                ]
            }
        ],
        "is_review": false,
        "company_name": "Emmvee Photovoltaic Power Limited",
        "symbol": "EMMVEEPHOTOVOLTAIC",
        "security_type": "EQ",
        "start_date": "2025-11-11",
        "end_date": "2025-11-13",
        "allotment_date": "2025-11-14",
        "listing_date": "2025-11-18",
        "listing_at_group": "NSE, BSE",
        "face_value": "₹2 Per Share",
        "price_range": "₹206 - ₹217",
        "lead_managers": "Jm Financial Limited, IIFL Securities Limited, Jefferies India Private Limited, Kotak Mahindra Capital Company",
        "issue_size": 133640553,
        "fresh_issue_size": "2143.86",
        "fresh_issue_value": 98795484,
        "offer_of_sale": 34845069,
        "offer_of_sale_value": "756.14",
        "issue_amount": "2900.00",
        "issue_type": "Bookbuilding IPO",
        "bid_lot": 69,
        "ipo_max_value": 217,
        "ipo_min_value": 206,
        "max_investment": 14973,
        "min_investment": 14214,
        "subscription": 0,
        "about_the_company": "Founded in March 2007, Emmvee Photovoltaic Power Limited is an integrated manufacturer of solar PV modules and cells. As of May 31, 2025, the company has a production capacity of 7.80 GW for modules and 2.94 GW for solar cells. Its product range includes bifacial and mono-facial TOPCon modules and cells, as well as Mono PERC modules. Emmvee operates four manufacturing units across two locations in Karnataka, covering 22.44 acres. Its solar cell unit at Dobbaspet, Bengaluru, is among the largest TOPCon solar cell facilities in India by capacity. The company serves a wide range of customers, including independent power producers, commercial and industrial clients, and EPC service providers from both public and private sectors. Key clients include Ayana Renewable Power, Hero Rooftop Energy, Aditya Birla Renewables, KPI Green Energy, and Clean Max Enviro Energy, among others, serving a total of 525 customers in 2023. As of March 31, 2025, Emmvee employed 611 full-time staff members.",
        "pre_issue_share_holding": 593549550,
        "post_issue_share_holding": 692345033,
        "company_promoter": "<ol><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 13, 80);\">Manjunatha Donthi Venkatarathnaiah</span></li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 13, 80);\">Shubha Manjunatha Donthi</span></li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 13, 80);\">Suhas Donthi Manjunatha</span></li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 13, 80);\">Sumanth Manjunatha Donthi</span></li></ol>",
        "issue_objectives": "NA",
        "gmp": "17",
        "nii": "0.00",
        "employee": "0.00",
        "retail": "0.00",
        "gibs": "0.00",
        "s_hni_lot_size": 966,
        "b_hni_lot_size": 4623,
        "s_hni_subscription": "0.00",
        "b_hni_subscription": "0.00",
        "retail_portion": "NA",
        "company_financial_data": {
            "financial_data": [
                {
                    "assets": "Assets",
                    "revenue": "Revenue",
                    "net_worth": "Net Worth",
                    "period_ended": "Period Ended",
                    "total_borrowing": "Total Borrowing",
                    "profit_after_tax": "Profit after tax",
                    "reserves_and_surpluse": "Reserves And Surpluse"
                },
                {
                    "assets": "4,347.7",
                    "revenue": "1,042.2",
                    "net_worth": "718.8",
                    "period_ended": "Jun-25",
                    "total_borrowing": "2,032.1",
                    "profit_after_tax": "187.7",
                    "reserves_and_surpluse": "608.8"
                },
                {
                    "assets": "3,913.9",
                    "revenue": "2,360.3",
                    "net_worth": "531.4",
                    "period_ended": "Mar-25",
                    "total_borrowing": "1,949.7",
                    "profit_after_tax": "369.0",
                    "reserves_and_surpluse": "529.4"
                },
                {
                    "assets": "2,190.0",
                    "revenue": "954.4",
                    "net_worth": "162.8",
                    "period_ended": "Mar-24",
                    "total_borrowing": "1,441.3",
                    "profit_after_tax": "28.9",
                    "reserves_and_surpluse": "160.7"
                },
                {
                    "assets": "840.8",
                    "revenue": "644.4",
                    "net_worth": "134.0",
                    "period_ended": "Mar-23",
                    "total_borrowing": "519.6",
                    "profit_after_tax": "9.0",
                    "reserves_and_surpluse": "131.9"
                }
            ],
            "financial_amount_type": "In Crores"
        },
        "company_strenght": "<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Integrated and Scalable Operations:</strong> Among India’s second-largest pure-play integrated solar PV module and cell manufacturers, the company offers comprehensive, end-to-end production capabilities from cells to modules.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Proven Manufacturing Excellence:</strong> Built a strong brand reputation through consistent product quality, reliability, and timely delivery, catering to major renewable energy developers and EPC players nationwide.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Advanced Technological Competence:</strong> An early adopter of high-efficiency TOPCon solar cell technology, providing superior power generation, enhanced durability, and a strong competitive edge in the fast-evolving solar industry.</li></ol>",
        "company_weakness": "<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Revenue Concentration Risk:</strong> A major portion of revenue is derived from a limited set of clients, with the top 10 customers contributing over 80–90% of total income. Loss or reduced orders from any key customer could significantly affect business performance.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Narrow Product Portfolio Exposure:</strong> Heavy dependence on specific solar technologies such as TOPCon and Mono PERC modules makes the company vulnerable to rapid technological changes or market preference shifts.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Operational Efficiency Constraints:</strong> Delays in achieving optimal capacity utilization or ramping up production could reduce efficiency, profitability, and overall cash flow stability.</li></ol>",
        "ipo_subscription_detail": [],
        "status": "Upcoming",
        "registrar": "Kfin Technologies Limited",
        "registrar_detail": "Kfin Technologies Limited, 04067162222, Emmvee.ipo@kotak.com, https://ipostatus.kfintech.com/",
        "ipo_image": "https://s3.ap-south-1.amazonaws.com/ipo-img-bucket/media/ipo_images/1762324345044.jpeg",
        "key_performance_indicator": [
            {
                "eps": "EPS",
                "kpi": "KPI",
                "roe": "ROE",
                "roec": "ROCE",
                "ronw": "RONW",
                "pre_ipo": "PRE IPO(PE)",
                "post_ipo": "POST IPO(PE)"
            },
            {
                "eps": "3.16",
                "kpi": "Jun-25",
                "roe": "29.85",
                "roec": "10.30",
                "ronw": "26.11",
                "pre_ipo": "0",
                "post_ipo": "0"
            },
            {
                "eps": "6.22",
                "kpi": "Mar-25",
                "roe": "104.60",
                "roec": "23.33",
                "ronw": "69.44",
                "pre_ipo": "0",
                "post_ipo": "0"
            },
            {
                "eps": "0.49",
                "kpi": "Mar-24",
                "roe": "18.69",
                "roec": "5.03",
                "ronw": "17.75",
                "pre_ipo": "0",
                "post_ipo": "0"
            }
        ],
        "ipo_reservation": [
            {
                "no_of_shares": 100230415,
                "shares_offered": 75,
                "investor_category": "QIB"
            },
            {
                "no_of_shares": 20046083,
                "shares_offered": 15,
                "investor_category": "HNI"
            },
            {
                "no_of_shares": 13364055,
                "shares_offered": 10,
                "investor_category": "RETAIL"
            }
        ],
        "qibs_offered": 0,
        "hnis_offered": 0,
        "hnis_ten_plus_offered": 0,
        "hnis_two_plus_offered": 0,
        "retail_offered": 0,
        "anchor_offered": 0,
        "shareholder_offered": 0,
        "market_maker_offered": 0,
        "employees_offered": 0,
        "other_investors_offered": 0,
        "institutional_investors_offered": 0,
        "ipo_lot_description": [
            {
                "qty": 69,
                "amount": 14973,
                "lot(s)": 1,
                "category": "RETAIL",
                "reserved": 0
            },
            {
                "qty": 966,
                "amount": 209622,
                "lot(s)": 14,
                "category": "sHNI",
                "reserved": 0
            },
            {
                "qty": 4623,
                "amount": 1003191,
                "lot(s)": 67,
                "category": "bHNI",
                "reserved": 0
            }
        ],
        "appplication_wise_breakup": {
            "data": [],
            "count": ""
        },
        "subscription_demand": [],
        "interest_cost_per_share": [],
        "company_address": {
            "Email": "investorrelations@emmvee.in",
            "Phone": "+91 80 2217 4524",
            "Website": "https://www.emmveepv.com/",
            "address": "13/1, International Airport Road Bettahalasur Post Bengaluru, Karnataka, 562157"
        },
        "ipo_doc_link": [
            {
                "link": "https://docipo.ipo-trend.com/uploads/emmvee_photovoltaic_power_limited/1762325362719.pdf",
                "lable": "drhp"
            }
        ],
        "updated_at": "2025-11-06T10:01:57.532517Z",
        "listed_price": "0.00",
        "allotment": false,
        "is_first_time_update": true,
        "buy_sell_notification": false,
        "buy_price": "0.00",
        "sell_price": "0.00",
        "recommendation": "May apply",
        "is_active": true,
        "issue_price": null,
        "current_price": null,
        "gain_or_lose": null,
        "scrip_code": null,
        "listing_day_gain": null,
        "listing_day_close": null,
        "new_symbol": "EMMVEEPHOTOVOLTAIC",
        "reason": null,
        "is_hold": false,
        "allotment_date_time": null,
        "peer_comparison_source": null,
        "sector": "Energy",
        "industry": "Solar Photovoltaic Modules & Cells Manufacturing",
        "basic_industry": "Solar Module",
        "macro_economic_sector": "Manufacturing",
        "spreadx_ipo_id": 925,
        "anchor_investor_bid_date": null,
        "anchor_lockin_date_50": null,
        "anchor_lockin_date_remaining": null,
        "anchor_investor_amount": null,
        "anchor_investor_file_url": null,
        "categories": [
            2590,
            2591
        ],
        "ipo_status": {
            "status": "Upcoming",
            "color": "#0000FF",
            "background_color": "#EBEEF7"
        },
        "is_buy_sell_enable": false,
        "is_social_account_enable": true,
        "isandroidsocial": true,
        "is_available_for_apply": true,
        "registrar_data": {
            "id": 8,
            "name": "Kfin Technologies Limited"
        },
        "merchant_banker_data": [
            {
                "id": 21,
                "name": "Jm Financial Limited"
            },
            {
                "id": 77,
                "name": "IIFL Securities Limited"
            },
            {
                "id": 38,
                "name": "Jefferies India Private Limited"
            },
            {
                "id": 160,
                "name": "Kotak Mahindra Capital Company"
            }
        ]
    },
    {
        "id": 3135,
        "subscription_history": [],
        "valuation": [],
        "financial_performance": [],
        "is_review": false,
        "company_name": "PhysicsWallah Limited",
        "symbol": "PHYSICSWALLAH2025",
        "security_type": "EQ",
        "start_date": "2025-11-11",
        "end_date": "2025-11-13",
        "allotment_date": "2025-11-14",
        "listing_date": "2025-11-18",
        "listing_at_group": "NSE, BSE",
        "face_value": "₹1 Per Share",
        "price_range": "₹103 - ₹109",
        "lead_managers": "Axis Capital Limited, Goldman Sachs (India) Securities Private Limited, J.P. Morgan India Private Limited, Kotak Mahindra Capital Company Limited",
        "issue_size": 319266055,
        "fresh_issue_size": "3100.00",
        "fresh_issue_value": 284403670,
        "offer_of_sale": 34862385,
        "offer_of_sale_value": "380.00",
        "issue_amount": "3480.00",
        "issue_type": "Bookbuilding IPO",
        "bid_lot": 137,
        "ipo_max_value": 109,
        "ipo_min_value": 103,
        "max_investment": 14933,
        "min_investment": 14111,
        "subscription": 0,
        "about_the_company": "The company is a leading EdTech platform offering online, offline, and hybrid test preparation for exams like JEE, NEET, and UPSC, along with upskilling courses in Data Science, Finance, and Software Development. As of July 15, 2025, it had 13.7 million YouTube subscribers, 4.13 million online transacting users, and 0.33 million offline enrolled students, totaling 4.46 million paid users with a CAGR of 59.19% from FY23 to FY25. It operates 198 tech-enabled hybrid centers, has 5,096 faculty members, and employs 15,775 people. The company has published 3,582 books and ranks among the top five EdTech firms in India by revenue. IPO proceeds will primarily be used for expanding offline and hybrid centers (₹1,056 crore), upgrading server and cloud infrastructure (₹200 crore), marketing (₹710 crore), acquisitions and investments (₹107 crore), and other corporate purposes.",
        "pre_issue_share_holding": 2607956938,
        "post_issue_share_holding": 2892360607,
        "company_promoter": "<ol><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: rgb(68, 66, 66);\">Alakh Pandey</span></li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: rgb(68, 66, 66);\">Prateek Boob</span></li></ol>",
        "issue_objectives": "NA",
        "gmp": "6",
        "nii": "0.00",
        "employee": "0.00",
        "retail": "0.00",
        "gibs": "0.00",
        "s_hni_lot_size": 1918,
        "b_hni_lot_size": 9179,
        "s_hni_subscription": "0.00",
        "b_hni_subscription": "0.00",
        "retail_portion": "NA",
        "company_financial_data": {
            "financial_data": [
                {
                    "assets": "Assets",
                    "revenue": "Revenue",
                    "net_worth": "Net Worth",
                    "period_ended": "Period Ended",
                    "total_borrowing": "Total Borrowing",
                    "profit_after_tax": "Profit after tax",
                    "reserves_and_surpluse": "Reserves And Surpluse"
                },
                {
                    "assets": "5,075.67",
                    "revenue": "905.41",
                    "net_worth": "1,867.92",
                    "period_ended": "Jun-25",
                    "total_borrowing": "1.54",
                    "profit_after_tax": "-127.9",
                    "reserves_and_surpluse": "787.92"
                },
                {
                    "assets": "4,156.4",
                    "revenue": "3,039.1",
                    "net_worth": "1,945.4",
                    "period_ended": "Mar-25",
                    "total_borrowing": "0.3",
                    "profit_after_tax": "-243.3",
                    "reserves_and_surpluse": "467.1"
                },
                {
                    "assets": "2,480.7",
                    "revenue": "2,015.4",
                    "net_worth": "-861.8",
                    "period_ended": "Mar-24",
                    "total_borrowing": "1,687.4",
                    "profit_after_tax": "-1,131.1",
                    "reserves_and_surpluse": "-1,254.7"
                },
                {
                    "assets": "2,082.2",
                    "revenue": "772.5",
                    "net_worth": "62.3",
                    "period_ended": "Mar-23",
                    "total_borrowing": "956.2",
                    "profit_after_tax": "-84.1",
                    "reserves_and_surpluse": "-187.7"
                }
            ],
            "financial_amount_type": "In Crores"
        },
        "company_strenght": "<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Omni-Channel Learning:</strong> Offers online, offline, and hybrid modes, covering diverse student needs and maximizing reach.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Strong User Base &amp; Brand Trust:</strong> 13.7M YouTube subscribers and 4.46M paid users demonstrate high brand recognition and engagement across India.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Proprietary Technology:</strong> In-house platforms improve learning experience, reduce external reliance, and support cost-efficient scaling.</li></ol>",
        "company_weakness": "<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Ongoing Losses &amp; Negative Net Worth:</strong> Reported losses of ₹2,432.58M (FY25), ₹11,311.30M (FY24), and ₹840.75M (FY23) may strain liquidity and affect investor confidence.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Dependence on Students &amp; Faculty:</strong> Performance relies on student enrolments and faculty retention; any decline could hurt revenue and growth.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Competitive &amp; Costly Expansion:</strong> Faces strong competition from EdTech leaders and financial pressure from capital and lease costs of new centers.</li></ol>",
        "ipo_subscription_detail": [],
        "status": "Upcoming",
        "registrar": "Link Intime India Private Limited",
        "registrar_detail": "Link Intime India Private Limited, +912249186270, physicswallah.ipo@in.mpms.mufg.com, https://in.mpms.mufg.com/Initial_Offer/public-issues.html",
        "ipo_image": "https://s3.ap-south-1.amazonaws.com/ipo-img-bucket/media/ipo_images/1760517955425.jpeg",
        "key_performance_indicator": [
            {
                "eps": "EPS",
                "kpi": "KPI",
                "roe": "ROE",
                "roec": "ROCE",
                "ronw": "RONW",
                "pre_ipo": "PRE IPO(PE)",
                "post_ipo": "POST IPO(PE)"
            },
            {
                "eps": "-0.46",
                "kpi": "Jun-25",
                "roe": "0",
                "roec": "0",
                "ronw": "-6.80",
                "pre_ipo": "0",
                "post_ipo": "0"
            },
            {
                "eps": "-0.86",
                "kpi": "Mar-25",
                "roe": "0",
                "roec": "0",
                "ronw": "-12.50",
                "pre_ipo": "0",
                "post_ipo": "0"
            },
            {
                "eps": "-4.79",
                "kpi": "Mar-24",
                "roe": "0",
                "roec": "0",
                "ronw": "0",
                "pre_ipo": "0",
                "post_ipo": "0"
            }
        ],
        "ipo_reservation": [
            {
                "no_of_shares": 238919238,
                "shares_offered": 74.83,
                "investor_category": "QIB"
            },
            {
                "no_of_shares": 47783848,
                "shares_offered": 14.97,
                "investor_category": "HNI"
            },
            {
                "no_of_shares": 31855898,
                "shares_offered": 9.98,
                "investor_category": "RETAIL"
            },
            {
                "no_of_shares": 707071,
                "shares_offered": 0.22,
                "investor_category": "Employee"
            }
        ],
        "qibs_offered": 0,
        "hnis_offered": 0,
        "hnis_ten_plus_offered": 0,
        "hnis_two_plus_offered": 0,
        "retail_offered": 0,
        "anchor_offered": 0,
        "shareholder_offered": 0,
        "market_maker_offered": 0,
        "employees_offered": 0,
        "other_investors_offered": 0,
        "institutional_investors_offered": 0,
        "ipo_lot_description": [
            {
                "qty": 137,
                "amount": 14933,
                "lot(s)": 1,
                "category": "RETAIL",
                "reserved": 0
            },
            {
                "qty": 1918,
                "amount": 209062,
                "lot(s)": 14,
                "category": "sHNI",
                "reserved": 0
            },
            {
                "qty": 9179,
                "amount": 1000511,
                "lot(s)": 67,
                "category": "bHNI",
                "reserved": 0
            }
        ],
        "appplication_wise_breakup": {
            "data": [],
            "count": "4"
        },
        "subscription_demand": [],
        "interest_cost_per_share": [],
        "company_address": {
            "Email": "investorsrelation@pw.live",
            "Phone": "+91 9289926531",
            "Website": "https://www.pw.live/",
            "address": "B 8, Block B, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309 Noida, Uttar Pradesh, 201309"
        },
        "ipo_doc_link": [
            {
                "link": "https://docipo.ipo-trend.com/uploads/physicswallah_limited/1762405110303.pdf",
                "lable": "drhp"
            }
        ],
        "updated_at": "2025-11-06T10:04:49.883096Z",
        "listed_price": "0.00",
        "allotment": false,
        "is_first_time_update": true,
        "buy_sell_notification": false,
        "buy_price": "0.00",
        "sell_price": "0.00",
        "recommendation": "May apply",
        "is_active": true,
        "issue_price": null,
        "current_price": null,
        "gain_or_lose": null,
        "scrip_code": null,
        "listing_day_gain": null,
        "listing_day_close": null,
        "new_symbol": "PHYSICSWALLAH2025",
        "reason": null,
        "is_hold": false,
        "allotment_date_time": null,
        "peer_comparison_source": null,
        "sector": "Education Technology",
        "industry": "EdTech / Online & Offline Test-Prep Services",
        "basic_industry": "Academic Tutoring & Coaching Services",
        "macro_economic_sector": "Tertiary Sector",
        "spreadx_ipo_id": 924,
        "anchor_investor_bid_date": null,
        "anchor_lockin_date_50": null,
        "anchor_lockin_date_remaining": null,
        "anchor_investor_amount": null,
        "anchor_investor_file_url": null,
        "categories": [
            2582,
            2583
        ],
        "ipo_status": {
            "status": "Upcoming",
            "color": "#0000FF",
            "background_color": "#EBEEF7"
        },
        "is_buy_sell_enable": false,
        "is_social_account_enable": true,
        "isandroidsocial": true,
        "is_available_for_apply": true,
        "registrar_data": {
            "id": 244,
            "name": "Link Intime India Private Limited"
        },
        "merchant_banker_data": [
            {
                "id": 15,
                "name": "Axis Capital Limited"
            },
            {
                "id": 108,
                "name": "Goldman Sachs (India) Securities Private Limited"
            },
            {
                "id": 47,
                "name": "J.P. Morgan India Private Limited"
            },
            {
                "id": 22,
                "name": "Kotak Mahindra Capital Company Limited"
            }
        ]
    },
    {
        "id": 3276,
        "subscription_history": [],
        "valuation": [
            {
                "company": "Mahamaya Lifesciences Limited",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "0"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "0"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "0"
                    }
                ]
            },
            {
                "company": "Nova Agritech Limited",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "16.93"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "0"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "0"
                    }
                ]
            },
            {
                "company": "Bhagiradha Chemicals & Industries Ltd",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "247.63"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "0"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "0"
                    }
                ]
            }
        ],
        "financial_performance": [
            {
                "company": "Mahamaya Lifesciences Limited",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "27.82"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "26.19"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "7.60"
                    }
                ]
            },
            {
                "company": "Nova Agritech Limited",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "23.76"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "12.47"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "3.05"
                    }
                ]
            },
            {
                "company": "Bhagiradha Chemicals & Industries Ltd",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "52.61"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "2.03"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "1.14"
                    }
                ]
            }
        ],
        "is_review": false,
        "company_name": "Mahamaya Lifesciences Limited",
        "symbol": "MAHAMAYALIFESCIENCES",
        "security_type": "SME",
        "start_date": "2025-11-11",
        "end_date": "2025-11-13",
        "allotment_date": "2025-11-14",
        "listing_date": "2025-11-18",
        "listing_at_group": "BSE",
        "face_value": "₹10 per share",
        "price_range": "₹108 - ₹114",
        "lead_managers": "Oneview Corporate Advisors Private Limited",
        "issue_size": 6178800,
        "fresh_issue_size": "60.75",
        "fresh_issue_value": 5329200,
        "offer_of_sale": 540000,
        "offer_of_sale_value": "6.16",
        "issue_amount": "70.44",
        "issue_type": "Bookbuilding IPO",
        "bid_lot": 1200,
        "ipo_max_value": 114,
        "ipo_min_value": 108,
        "max_investment": 136800,
        "min_investment": 129600,
        "subscription": 0,
        "about_the_company": "Incorporated in 2002, Mahamaya Lifesciences Limited is engaged in the manufacturing, registration, and export of high-quality crop protection products and bioproducts designed to enhance soil and crop health. The company specializes in pesticide formulations and supplies bulk products to leading Indian agrochemical players as well as multinational corporations (MNCs). Mahamaya imports global research-based molecules, registers them with the Central Insecticides Board, and markets both technical and value-added formulations. The company has invested significantly in global registrations and currently exports to markets such as the Dominican Republic, Egypt, Ethiopia, Jordan, UAE, and Turkey. Its portfolio spans bulk formulations, technical grade molecules, branded products, and export-focused formulations.",
        "pre_issue_share_holding": 17766200,
        "post_issue_share_holding": 23405000,
        "company_promoter": "<ol><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Mr. Krishnamurthy Ganesan</li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Mrs. Lalitha Krishnamurthy</li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Mr. Prashant Krishnamurthy</li></ol>",
        "issue_objectives": "NA",
        "gmp": "0",
        "nii": "0.00",
        "employee": "0.00",
        "retail": "0.00",
        "gibs": "0.00",
        "s_hni_lot_size": 3600,
        "b_hni_lot_size": 9600,
        "s_hni_subscription": "0.00",
        "b_hni_subscription": "0.00",
        "retail_portion": "NA",
        "company_financial_data": {
            "financial_data": [
                {
                    "assets": "Assets",
                    "revenue": "Revenue",
                    "net_worth": "Net Worth",
                    "period_ended": "Period Ended",
                    "total_borrowing": "Total Borrowing",
                    "profit_after_tax": "Profit After Tax",
                    "reserves_and_surpluse": "Reserves and Surplus"
                },
                {
                    "assets": "218.87",
                    "revenue": "84.04",
                    "net_worth": "53.50",
                    "period_ended": "Jun-25",
                    "total_borrowing": "57.72",
                    "profit_after_tax": "4.10",
                    "reserves_and_surpluse": "35.73"
                },
                {
                    "assets": "188.35",
                    "revenue": "267.17",
                    "net_worth": "49.42",
                    "period_ended": "Mar-25",
                    "total_borrowing": "58.11",
                    "profit_after_tax": "12.94",
                    "reserves_and_surpluse": "31.66"
                },
                {
                    "assets": "112.07",
                    "revenue": "162.83",
                    "net_worth": "24.66",
                    "period_ended": "Mar-24",
                    "total_borrowing": "54.63",
                    "profit_after_tax": "5.22",
                    "reserves_and_surpluse": "23.41"
                },
                {
                    "assets": "77.88",
                    "revenue": "137.40",
                    "net_worth": "19.44",
                    "period_ended": "Mar-23",
                    "total_borrowing": "24.37",
                    "profit_after_tax": "3.75",
                    "reserves_and_surpluse": "18.19"
                }
            ],
            "financial_amount_type": "In Crores"
        },
        "company_strenght": "<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Experienced Leadership:</strong> Managed by a skilled team with deep expertise in agrochemicals, R&amp;D, exports, and regulatory affairs, driving strategic and operational efficiency.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Comprehensive Product Range:</strong> Diverse lineup of insecticides, herbicides, fungicides, and bioproducts across technical, branded, and export formats ensures wide market presence.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Robust R&amp;D and Regulatory Strength:</strong> Strong capability in molecule discovery and registration with Indian and global authorities enhances innovation, compliance, and market expansion potential.</li></ol>",
        "company_weakness": "<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>High Customer Dependence:</strong> The company’s revenue relies heavily on a limited number of clients, with the top 10 customers contributing 71.35%, 76.26%, 83.14%, and 71.12% of total sales for the quarter ended June 30, 2025, and fiscal years 2025, 2024, and 2023, respectively, reflecting a notable concentration risk.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Absence of Long-Term Agreements:</strong> The company operates without long-term contracts with customers or suppliers, exposing it to potential fluctuations in demand, pricing, and supply continuity.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Volatility in Raw Material Costs:</strong> As raw materials constitute a significant portion of total expenses, any increase in prices or disruption in availability could adversely affect profitability and operational stability.</li></ol>",
        "ipo_subscription_detail": [],
        "status": "Upcoming",
        "registrar": "Kfin Technologies Limited",
        "registrar_detail": "Kfin Technologies Limited, 04067162222, mahamaya.ipo@kfintech.com, https://ipostatus.kfintech.com/",
        "ipo_image": "https://s3.ap-south-1.amazonaws.com/ipo-img-bucket/media/ipo_images/1762230278312.png",
        "key_performance_indicator": [
            {
                "eps": "EPS",
                "kpi": "KPI",
                "roe": "ROE",
                "roec": "ROCE",
                "ronw": "RONW",
                "pre_ipo": "PRE IPO(PE)",
                "post_ipo": "POST IPO(PE)"
            },
            {
                "eps": "2.31",
                "kpi": "Jun-25",
                "roe": "7.97",
                "roec": "7.30",
                "ronw": "0",
                "pre_ipo": "0",
                "post_ipo": "16.25"
            },
            {
                "eps": "7.6",
                "kpi": "Mar-25",
                "roe": "34.94",
                "roec": "23.15",
                "ronw": "0",
                "pre_ipo": "15.65",
                "post_ipo": "0"
            },
            {
                "eps": "3.26",
                "kpi": "Mar-24",
                "roe": "23.67",
                "roec": "16.16",
                "ronw": "0",
                "pre_ipo": "0",
                "post_ipo": "0"
            }
        ],
        "ipo_reservation": [
            {
                "no_of_shares": 1752000,
                "shares_offered": 28.36,
                "investor_category": "Anchor"
            },
            {
                "no_of_shares": 1176000,
                "shares_offered": 19.03,
                "investor_category": "QIB"
            },
            {
                "no_of_shares": 882000,
                "shares_offered": 14.27,
                "investor_category": "HNI"
            },
            {
                "no_of_shares": 2059200,
                "shares_offered": 33.33,
                "investor_category": "RETAIL"
            },
            {
                "no_of_shares": 309600,
                "shares_offered": 5.01,
                "investor_category": "Market Maker"
            }
        ],
        "qibs_offered": 0,
        "hnis_offered": 0,
        "hnis_ten_plus_offered": 0,
        "hnis_two_plus_offered": 0,
        "retail_offered": 0,
        "anchor_offered": 0,
        "shareholder_offered": 0,
        "market_maker_offered": 309600,
        "employees_offered": 0,
        "other_investors_offered": 0,
        "institutional_investors_offered": 0,
        "ipo_lot_description": [
            {
                "qty": 2400,
                "amount": 273600,
                "lot(s)": 2,
                "category": "RETAIL",
                "reserved": 0
            },
            {
                "qty": 3600,
                "amount": 410400,
                "lot(s)": 3,
                "category": "sHNI",
                "reserved": 0
            },
            {
                "qty": 9600,
                "amount": 1094400,
                "lot(s)": 8,
                "category": "bHNI",
                "reserved": 0
            }
        ],
        "appplication_wise_breakup": {
            "data": [],
            "count": ""
        },
        "subscription_demand": [],
        "interest_cost_per_share": [],
        "company_address": {
            "Email": "cs@mahamayalifesciences.com",
            "Phone": "+91-1146561474",
            "Website": "https://www.mahamayalifesciences.com/",
            "address": "Unit No: DPT – 033, Ground Floor, Plot No: 79 – 80, DLF Prime Tower, Block, Okhla, Phase – 1 Delhi, New Delhi, 110020"
        },
        "ipo_doc_link": [
            {
                "link": "https://docipo.ipo-trend.com/uploads/mahamaya_lifesciences_limited/1762231540837.pdf",
                "lable": "drhp"
            }
        ],
        "updated_at": "2025-11-06T10:07:05.454948Z",
        "listed_price": "0.00",
        "allotment": false,
        "is_first_time_update": true,
        "buy_sell_notification": false,
        "buy_price": "0.00",
        "sell_price": "0.00",
        "recommendation": "May apply",
        "is_active": true,
        "issue_price": null,
        "current_price": null,
        "gain_or_lose": null,
        "scrip_code": null,
        "listing_day_gain": null,
        "listing_day_close": null,
        "new_symbol": "MAHAMAYALIFESCIENCES",
        "reason": null,
        "is_hold": false,
        "allotment_date_time": null,
        "peer_comparison_source": null,
        "sector": "Chemicals & Agrochemicals",
        "industry": "Crop Protection Chemicals",
        "basic_industry": "Agrochemical Formulations",
        "macro_economic_sector": "Manufacturing",
        "spreadx_ipo_id": 923,
        "anchor_investor_bid_date": null,
        "anchor_lockin_date_50": null,
        "anchor_lockin_date_remaining": null,
        "anchor_investor_amount": null,
        "anchor_investor_file_url": null,
        "categories": [
            2584,
            2585
        ],
        "ipo_status": {
            "status": "Upcoming",
            "color": "#0000FF",
            "background_color": "#EBEEF7"
        },
        "is_buy_sell_enable": false,
        "is_social_account_enable": true,
        "isandroidsocial": true,
        "is_available_for_apply": true,
        "registrar_data": {
            "id": 8,
            "name": "Kfin Technologies Limited"
        },
        "merchant_banker_data": [
            {
                "id": 137,
                "name": "Oneview Corporate Advisors Private Limited"
            }
        ]
    },
    {
        "id": 3290,
        "subscription_history": [],
        "valuation": [
            {
                "company": "Workmates Core2Cloud Solution Ltd",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "0"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "0"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "0"
                    }
                ]
            },
            {
                "company": "Persistent System Ltd",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "63.10"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "0"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "0"
                    }
                ]
            },
            {
                "company": "Orient Technologies Ltd",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "27.64"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "0"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "0"
                    }
                ]
            },
            {
                "company": "LTIMindtree Ltd",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "33.10"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "0"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "0"
                    }
                ]
            }
        ],
        "financial_performance": [
            {
                "company": "Workmates Core2Cloud Solution Ltd",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "22.86"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "60.85"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "13.91"
                    }
                ]
            },
            {
                "company": "Persistent System Ltd",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "405.46"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "24.80"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "91.22"
                    }
                ]
            },
            {
                "company": "Orient Technologies Ltd",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "79.17"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "20.00"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "12.85"
                    }
                ]
            },
            {
                "company": "LTIMindtree Ltd",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "767.28"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "21.50"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "155.29"
                    }
                ]
            }
        ],
        "is_review": false,
        "company_name": "Workmates Core2Cloud Solution Limited",
        "symbol": "WORKMATESCORE2CLOUDSOLUTION",
        "security_type": "SME",
        "start_date": "2025-11-11",
        "end_date": "2025-11-13",
        "allotment_date": "2025-11-14",
        "listing_date": "2025-11-18",
        "listing_at_group": "BSE",
        "face_value": "₹10 per share",
        "price_range": "₹200 - ₹204",
        "lead_managers": "Horizon Financial Private Limited",
        "issue_size": 3423600,
        "fresh_issue_size": "59.34",
        "fresh_issue_value": 2908800,
        "offer_of_sale": 514800,
        "offer_of_sale_value": "10.50",
        "issue_amount": "69.84",
        "issue_type": "Bookbuilding IPO",
        "bid_lot": 600,
        "ipo_max_value": 204,
        "ipo_min_value": 200,
        "max_investment": 122400,
        "min_investment": 120000,
        "subscription": 0,
        "about_the_company": "Incorporated in 2018 and based in Kolkata, Workmates Core2Cloud Solution Limited is an AWS Premier Consulting Partner offering scalable cloud solutions across India. The company has completed over 350 projects for more than 200 clients across sectors such as finance, healthcare, retail, e-commerce, and media. Its services include cloud migration, managed services, DevOps automation, cybersecurity, data analytics, application development, SAP workload management, and emerging technologies like IoT, Blockchain, AI/ML, VR, and AR. Workmates Core2Cloud helps businesses move to the cloud, optimize costs, improve performance, and enhance security. As of March 31, 2025, the company employed 129 professionals across various functions.",
        "pre_issue_share_holding": 10010000,
        "post_issue_share_holding": 12918800,
        "company_promoter": "<ol><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Debasish Sarkar</li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Prajnashree Mohapatra</li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Shilpa Mohta</li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Anindya Sen</li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Anjali Awasthi</li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Anirban Dasgupta</li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Kamal Nath</li></ol>",
        "issue_objectives": "NA",
        "gmp": "0",
        "nii": "0.00",
        "employee": "0.00",
        "retail": "0.00",
        "gibs": "0.00",
        "s_hni_lot_size": 1800,
        "b_hni_lot_size": 5400,
        "s_hni_subscription": "0.00",
        "b_hni_subscription": "0.00",
        "retail_portion": "NA",
        "company_financial_data": {
            "financial_data": [
                {
                    "assets": "Assets",
                    "revenue": "Revenue",
                    "net_worth": "Net Worth",
                    "period_ended": "Period Ended",
                    "total_borrowing": "Total Borrowing",
                    "profit_after_tax": "Profit After Tax",
                    "reserves_and_surpluse": "Reserves and Surplus"
                },
                {
                    "assets": "69.44",
                    "revenue": "59.55",
                    "net_worth": "30.10",
                    "period_ended": "Aug-25",
                    "total_borrowing": "8.68",
                    "profit_after_tax": "7.22",
                    "reserves_and_surpluse": "20.09"
                },
                {
                    "assets": "62.16",
                    "revenue": "108.39",
                    "net_worth": "22.89",
                    "period_ended": "Mar-25",
                    "total_borrowing": "8.79\t",
                    "profit_after_tax": "13.93",
                    "reserves_and_surpluse": "22.88"
                },
                {
                    "assets": "24.57",
                    "revenue": "53.53",
                    "net_worth": "8.96",
                    "period_ended": "Mar-24",
                    "total_borrowing": "0",
                    "profit_after_tax": "5.35",
                    "reserves_and_surpluse": "8.95"
                },
                {
                    "assets": "11.14",
                    "revenue": "29.14",
                    "net_worth": "3.61",
                    "period_ended": "Mar-23",
                    "total_borrowing": "0",
                    "profit_after_tax": "1.86",
                    "reserves_and_surpluse": "3.60"
                }
            ],
            "financial_amount_type": " In Crores"
        },
        "company_strenght": "<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Strong Client Relationships:</strong> Proven history of customer satisfaction and long-term partnerships with leading enterprises across diverse sectors.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Expert Leadership Team:</strong> Guided by experienced promoters and a management team with deep domain knowledge in cloud technologies and the AWS ecosystem.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Efficient and Scalable Business Model:</strong> Asset-light and flexible operational model supporting sustainable growth with minimal infrastructure investment.</li></ol>",
        "company_weakness": "<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>High Revenue Concentration:</strong> Significant reliance on a limited number of key clients; absence of long-term contracts may lead to revenue volatility if major customers discontinue services.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Supplier Reliance:</strong> Dependence on select technology and service vendors could disrupt operations or cash flow in case of supply delays or pricing changes.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Dependence on AWS Partnership:</strong> Heavy reliance on collaboration with AWS; any alteration or termination of this partnership could hinder business performance and future growth.</li></ol>",
        "ipo_subscription_detail": [],
        "status": "Upcoming",
        "registrar": "Link Intime India Private Limited",
        "registrar_detail": "Link Intime India Private Limited, +91-22-4918 6270, workmatescore.smeipo@in.mpms.mufg.com, https://linkintime.co.in/Initial_Offer/public-issues.html",
        "ipo_image": "https://s3.ap-south-1.amazonaws.com/ipo-img-bucket/media/ipo_images/1762316775123.png",
        "key_performance_indicator": [
            {
                "eps": "EPS",
                "kpi": "KPI",
                "roe": "ROE",
                "roec": "ROCE",
                "ronw": "RONW",
                "pre_ipo": "PRE IPO(PE)",
                "post_ipo": "POST IPO(PE)"
            },
            {
                "eps": "7.21",
                "kpi": "Aug-25",
                "roe": "27.24",
                "roec": "30.14",
                "ronw": "23.97",
                "pre_ipo": "0",
                "post_ipo": "15.21"
            },
            {
                "eps": "13.91",
                "kpi": "Mar-25",
                "roe": "67.44",
                "roec": "64.61",
                "ronw": "60.85",
                "pre_ipo": "14.66",
                "post_ipo": "0"
            },
            {
                "eps": "5.34",
                "kpi": "Mar-24",
                "roe": "85.10",
                "roec": "122.44",
                "ronw": "59.70",
                "pre_ipo": "0",
                "post_ipo": "0"
            }
        ],
        "ipo_reservation": [
            {
                "no_of_shares": 960000,
                "shares_offered": 28.04,
                "investor_category": "Anchor"
            },
            {
                "no_of_shares": 662400,
                "shares_offered": 19.35,
                "investor_category": "QIB"
            },
            {
                "no_of_shares": 489600,
                "shares_offered": 14.3,
                "investor_category": "HNI"
            },
            {
                "no_of_shares": 1140000,
                "shares_offered": 33.3,
                "investor_category": "RETAIL"
            },
            {
                "no_of_shares": 171600,
                "shares_offered": 5.01,
                "investor_category": "Market Maker"
            }
        ],
        "qibs_offered": 0,
        "hnis_offered": 0,
        "hnis_ten_plus_offered": 0,
        "hnis_two_plus_offered": 0,
        "retail_offered": 0,
        "anchor_offered": 0,
        "shareholder_offered": 0,
        "market_maker_offered": 171600,
        "employees_offered": 0,
        "other_investors_offered": 0,
        "institutional_investors_offered": 0,
        "ipo_lot_description": [
            {
                "qty": 1200,
                "amount": 244800,
                "lot(s)": 2,
                "category": "RETAIL",
                "reserved": 0
            },
            {
                "qty": 1800,
                "amount": 367200,
                "lot(s)": 3,
                "category": "sHNI",
                "reserved": 0
            },
            {
                "qty": 5400,
                "amount": 1101600,
                "lot(s)": 9,
                "category": "bHNI",
                "reserved": 0
            }
        ],
        "appplication_wise_breakup": {
            "data": [],
            "count": ""
        },
        "subscription_demand": [],
        "interest_cost_per_share": [],
        "company_address": {
            "Email": "cs@cloudworkmates.com",
            "Phone": "+ 91 33 450 8492",
            "Website": "http://www.cloudworkmates.com/",
            "address": "Flat 7, 3rd Floor, 3A Rammohan Mullick Garden Lane Kolkata, West Bengal, 700010"
        },
        "ipo_doc_link": [
            {
                "link": "https://docipo.ipo-trend.com/uploads/workmates_core2cloud_solution_limited/1762317728566.pdf",
                "lable": "drhp"
            }
        ],
        "updated_at": "2025-11-06T10:00:00.545019Z",
        "listed_price": "0.00",
        "allotment": false,
        "is_first_time_update": true,
        "buy_sell_notification": false,
        "buy_price": "0.00",
        "sell_price": "0.00",
        "recommendation": "May apply",
        "is_active": true,
        "issue_price": null,
        "current_price": null,
        "gain_or_lose": null,
        "scrip_code": null,
        "listing_day_gain": null,
        "listing_day_close": null,
        "new_symbol": "WORKMATESCORE2CLOUDSOLUTION",
        "reason": null,
        "is_hold": false,
        "allotment_date_time": null,
        "peer_comparison_source": null,
        "sector": "Information Technology & Software Services",
        "industry": "Cloud Services & IT Consulting",
        "basic_industry": "AWS-based Cloud Managed Services",
        "macro_economic_sector": "Services",
        "spreadx_ipo_id": 926,
        "anchor_investor_bid_date": null,
        "anchor_lockin_date_50": null,
        "anchor_lockin_date_remaining": null,
        "anchor_investor_amount": null,
        "anchor_investor_file_url": null,
        "categories": [
            2586,
            2587
        ],
        "ipo_status": {
            "status": "Upcoming",
            "color": "#0000FF",
            "background_color": "#EBEEF7"
        },
        "is_buy_sell_enable": false,
        "is_social_account_enable": true,
        "isandroidsocial": true,
        "is_available_for_apply": true,
        "registrar_data": {
            "id": 244,
            "name": "Link Intime India Private Limited"
        },
        "merchant_banker_data": [
            {
                "id": 103,
                "name": "Horizon Financial Private Limited"
            }
        ]
    },
    {
        "id": 3267,
        "subscription_history": [],
        "valuation": [
            {
                "company": "Tenneco Clean Air India Ltd",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "0"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "0"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "10.00"
                    }
                ]
            },
            {
                "company": "Bosch Ltd",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "46.21"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "31575.00"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "10.00"
                    }
                ]
            },
            {
                "company": "Timken India Ltd",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "54.61"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "3248.00"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "10.00"
                    }
                ]
            },
            {
                "company": "SKF India Ltd",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "40.2"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "4603.00"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "10.00"
                    }
                ]
            },
            {
                "company": "ZF Commercial Vehicle Control System India Ltd",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "53.71"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "13047.00"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "5.00"
                    }
                ]
            },
            {
                "company": "Sharda Motor Industries Ltd",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "16.92"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "1856.40"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "2.00"
                    }
                ]
            },
            {
                "company": "Gabriel India Ltd",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "34.73"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "592.20"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "1.00"
                    }
                ]
            },
            {
                "company": "Uno Minda Ltd",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "64.51"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "1056.00"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "2.00"
                    }
                ]
            },
            {
                "company": "Sona BLW Precision Forgings Ltd",
                "valuation": [
                    {
                        "title": "P/E(X)",
                        "value": "48.12"
                    },
                    {
                        "title": "CMP* (₹)",
                        "value": "477.35"
                    },
                    {
                        "title": "Face value (₹)",
                        "value": "10.00"
                    }
                ]
            }
        ],
        "financial_performance": [
            {
                "company": "Tenneco Clean Air India Ltd",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "31.1"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "46.65"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "13.68"
                    }
                ]
            },
            {
                "company": "Bosch Ltd",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "4683.48"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "15.56"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "683.25"
                    }
                ]
            },
            {
                "company": "Timken India Ltd",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "378.21"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "17"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "59.48"
                    }
                ]
            },
            {
                "company": "SKF India Ltd",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "525.5"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "21.43"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "114.5"
                    }
                ]
            },
            {
                "company": "ZF Commercial Vehicle Control System India Ltd",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "1694.75"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "15.35"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "242.9"
                    }
                ]
            },
            {
                "company": "Sharda Motor Industries Ltd",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "369.92"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "30.46"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "109.71"
                    }
                ]
            },
            {
                "company": "Gabriel India Ltd",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "82.38"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "22.42"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "17.05"
                    }
                ]
            },
            {
                "company": "Uno Minda Ltd",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "99.75"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "17.66"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "16.42"
                    }
                ]
            },
            {
                "company": "Sona BLW Precision Forgings Ltd",
                "financial_performance": [
                    {
                        "title": "NAV/Share (₹)",
                        "value": "88.38"
                    },
                    {
                        "title": "RONW(%)",
                        "value": "14.76"
                    },
                    {
                        "title": "EPS (Basic) (₹)",
                        "value": "9.92"
                    }
                ]
            }
        ],
        "is_review": false,
        "company_name": "Tenneco Clean Air India Limited",
        "symbol": "TENNECO",
        "security_type": "EQ",
        "start_date": "2025-11-12",
        "end_date": "2025-11-14",
        "allotment_date": "2025-11-17",
        "listing_date": "2025-11-19",
        "listing_at_group": "NSE, BSE",
        "face_value": "₹10 per share",
        "price_range": "₹0 - ₹0",
        "lead_managers": "Jm Financial Limited, Citigroup Global Markets India Private Limited, Axis Bank Limited, Hsbc Securities & Capital Markets Private Limited",
        "issue_size": 0,
        "fresh_issue_size": "0.00",
        "fresh_issue_value": 0,
        "offer_of_sale": 0,
        "offer_of_sale_value": "3000.00",
        "issue_amount": "3000.00",
        "issue_type": "Bookbuilding IPO",
        "bid_lot": 0,
        "ipo_max_value": 0,
        "ipo_min_value": 0,
        "max_investment": 0,
        "min_investment": 0,
        "subscription": 0,
        "about_the_company": "Founded in 2018, Tenneco Clean Air India Limited is a subsidiary of Tenneco Inc., a global company known for its clean air and powertrain products used in automobiles. The company operates under the Clean Air division, focusing on emission control systems for both light and commercial vehicles. In India, it provides advanced exhaust and after-treatment solutions such as catalytic converters, diesel particulate filters, mufflers, and exhaust pipes to help manufacturers comply with Bharat Stage VI emission standards. Tenneco Clean Air has 12 manufacturing facilities across seven states and one union territory, supporting OEMs and Tier 1 customers. Its operations include two main divisions: Clean Air & Powertrain Solutions, and Advanced Ride Technologies, which produces shock absorbers, struts, and suspension systems. As of March 31, 2025, the company had 145 employees working in design, engineering, and R&D, with a strong focus on sustainability and innovation.",
        "pre_issue_share_holding": 403604309,
        "post_issue_share_holding": 403604309,
        "company_promoter": "<ol><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Tenneco Mauritius Holdings Limited</li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Tenneco (Mauritius) Limited</li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Federal-Mogul Investments B.V.</li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Federal-Mogul Pty Ltd</li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Tenneco LLC</li></ol>",
        "issue_objectives": "NA",
        "gmp": "85",
        "nii": "0.00",
        "employee": "0.00",
        "retail": "0.00",
        "gibs": "0.00",
        "s_hni_lot_size": 0,
        "b_hni_lot_size": 0,
        "s_hni_subscription": "0.00",
        "b_hni_subscription": "0.00",
        "retail_portion": "NA",
        "company_financial_data": {
            "financial_data": [
                {
                    "assets": "Assets",
                    "revenue": "Revenue",
                    "net_worth": "Net Worth",
                    "period_ended": "Period Ended",
                    "total_borrowing": "Total Borrowing",
                    "profit_after_tax": "Profit after tax",
                    "reserves_and_surpluse": "Reserves And Surpluse"
                },
                {
                    "assets": "2,831.58",
                    "revenue": "4,931.45",
                    "net_worth": "1,255.09",
                    "period_ended": "Mar-25",
                    "total_borrowing": "0",
                    "profit_after_tax": "553.14",
                    "reserves_and_surpluse": "1,208.76"
                },
                {
                    "assets": "2,136.26",
                    "revenue": " 5,537.39",
                    "net_worth": " 1,116.59",
                    "period_ended": "Mar-24",
                    "total_borrowing": "0",
                    "profit_after_tax": "416.79",
                    "reserves_and_surpluse": "767.26"
                },
                {
                    "assets": "2,429.65",
                    "revenue": "4,886.96",
                    "net_worth": "1,378.82",
                    "period_ended": "Mar-23",
                    "total_borrowing": "13.97",
                    "profit_after_tax": "381.04",
                    "reserves_and_surpluse": " 896.05"
                }
            ],
            "financial_amount_type": "In Crores"
        },
        "company_strenght": "<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Leading Automotive Supplier:</strong> A top-tier provider of advanced clean air, powertrain, and suspension solutions with strong market presence across multiple automotive segments.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Comprehensive Product Range:</strong> Offers a wide variety of proprietary and customized components aligned with modern automotive trends and emission standards.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Robust Manufacturing Network:</strong> Operates 12 strategically located plants across India, ensuring cost efficiency, supply chain reliability, and timely service to OEM clients.</li></ol>",
        "company_weakness": "<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Absence of Fixed Customer Commitments:</strong> The company’s contracts lack firm volume guarantees, which may result in unpredictable sales and affect revenue stability.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Regulatory Dependence:</strong> Growth is closely tied to emission standards; any delay or relaxation in government regulations could dampen product demand.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Reliance on Parent Group:</strong> Dependence on the Tenneco Group for branding, technology, and materials exposes the company to operational and profitability risks if this partnership is altered or terminated.</li></ol>",
        "ipo_subscription_detail": [],
        "status": "Upcoming",
        "registrar": "Link Intime India Private Limited",
        "registrar_detail": "Link Intime India Private Limited, +912249186270, tennecocleanair.ipo@in.mpms.mufg.com, http://www.tennecoindia.com/",
        "ipo_image": "https://s3.ap-south-1.amazonaws.com/ipo-img-bucket/media/ipo_images/1762145747630.jpeg",
        "key_performance_indicator": [
            {
                "eps": "EPS",
                "kpi": "KPI",
                "roe": "ROE",
                "roec": "ROCE",
                "ronw": "RONW",
                "pre_ipo": "PRE IPO(PE)",
                "post_ipo": "POST IPO(PE)"
            },
            {
                "eps": "13.68",
                "kpi": "Mar-25",
                "roe": "42.65",
                "roec": "56.78",
                "ronw": "0",
                "pre_ipo": "0",
                "post_ipo": "0"
            },
            {
                "eps": "8.9",
                "kpi": "Mar-24",
                "roe": "38.05",
                "roec": "45.40",
                "ronw": "0",
                "pre_ipo": "0",
                "post_ipo": "0"
            },
            {
                "eps": "7.58",
                "kpi": "Mar-23",
                "roe": "32.88",
                "roec": "33.51",
                "ronw": "0",
                "pre_ipo": "0",
                "post_ipo": "0"
            }
        ],
        "ipo_reservation": [],
        "qibs_offered": 0,
        "hnis_offered": 0,
        "hnis_ten_plus_offered": 0,
        "hnis_two_plus_offered": 0,
        "retail_offered": 0,
        "anchor_offered": 0,
        "shareholder_offered": 0,
        "market_maker_offered": 0,
        "employees_offered": 0,
        "other_investors_offered": 0,
        "institutional_investors_offered": 0,
        "ipo_lot_description": [],
        "appplication_wise_breakup": {
            "data": [],
            "count": ""
        },
        "subscription_demand": [],
        "interest_cost_per_share": [],
        "company_address": {
            "Email": "TennecoIndiaInvestors@tenneco.com",
            "Phone": "+91 124 4784 530",
            "Website": "http://www.tennecoindia.com/",
            "address": "RNS2, Nissan Supplier Park SIPCOT Industrial Park, Oragadam Industrial Corridor Sriperumbudur Taluk, Kancheepuram, Tamil Nadu, 602105"
        },
        "ipo_doc_link": [
            {
                "link": "https://docipo.ipo-trend.com/uploads/tenneco_clean_air_india_limited/1762147280930.pdf",
                "lable": "drhp"
            }
        ],
        "updated_at": "2025-11-06T04:09:35.885170Z",
        "listed_price": "0.00",
        "allotment": false,
        "is_first_time_update": false,
        "buy_sell_notification": false,
        "buy_price": "0.00",
        "sell_price": "0.00",
        "recommendation": "May apply",
        "is_active": true,
        "issue_price": null,
        "current_price": null,
        "gain_or_lose": null,
        "scrip_code": null,
        "listing_day_gain": null,
        "listing_day_close": null,
        "new_symbol": "TENNECO",
        "reason": null,
        "is_hold": false,
        "allotment_date_time": null,
        "peer_comparison_source": null,
        "sector": "Consumer Discretionary",
        "industry": "Automobile and Auto Components",
        "basic_industry": "Auto Components & Equipments",
        "macro_economic_sector": "Consumer Discretionary",
        "spreadx_ipo_id": null,
        "anchor_investor_bid_date": null,
        "anchor_lockin_date_50": null,
        "anchor_lockin_date_remaining": null,
        "anchor_investor_amount": null,
        "anchor_investor_file_url": null,
        "categories": [
            2580,
            2581
        ],
        "ipo_status": {
            "status": "Upcoming",
            "color": "#0000FF",
            "background_color": "#EBEEF7"
        },
        "is_buy_sell_enable": false,
        "is_social_account_enable": true,
        "isandroidsocial": true,
        "is_available_for_apply": true,
        "registrar_data": {
            "id": 244,
            "name": "Link Intime India Private Limited"
        },
        "merchant_banker_data": [
            {
                "id": 21,
                "name": "Jm Financial Limited"
            },
            {
                "id": 17,
                "name": "Citigroup Global Markets India Private Limited"
            },
            {
                "id": 53,
                "name": "Hsbc Securities & Capital Markets Private Limited"
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$clients$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/clients.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$features$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/features.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$faqs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/faqs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$testimonials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/testimonials.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pricing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/pricing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/header.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/footer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$ipolist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/ipolist.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/gmpdata.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gmpDetails",
    ()=>gmpDetails
]);
const gmpDetails = {
    "id": 3220,
    "company_name": "Pine Labs Limited",
    "start_date": "2025-11-07",
    "end_date": "2025-11-11",
    "allotment_date": "2025-11-12",
    "listing_date": "2025-11-14",
    "ipo_gmp": [
        {
            "id": 3519,
            "ipo": 3220,
            "gmp_date": "2025-11-06",
            "gmp": "14",
            "updated_at": "2025-11-06T11:17:39.160670Z",
            "estimated_listing_price": "235.00",
            "ipo_price": "221"
        },
        {
            "id": 3433,
            "ipo": 3220,
            "gmp_date": "2025-11-05",
            "gmp": "18",
            "updated_at": "2025-11-05T04:16:45.737191Z",
            "estimated_listing_price": "239.00",
            "ipo_price": "221"
        },
        {
            "id": 3408,
            "ipo": 3220,
            "gmp_date": "2025-11-04",
            "gmp": "30",
            "updated_at": "2025-11-04T11:15:24.722943Z",
            "estimated_listing_price": "251.00",
            "ipo_price": "221"
        },
        {
            "id": 3326,
            "ipo": 3220,
            "gmp_date": "2025-11-03",
            "gmp": "30",
            "updated_at": "2025-11-03T05:50:43.717934Z",
            "estimated_listing_price": "251.00",
            "ipo_price": "221"
        },
        {
            "id": 3282,
            "ipo": 3220,
            "gmp_date": "2025-11-01",
            "gmp": "48",
            "updated_at": "2025-11-01T04:42:34.770367Z",
            "estimated_listing_price": "48.00",
            "ipo_price": "221"
        },
        {
            "id": 3267,
            "ipo": 3220,
            "gmp_date": "2025-10-31",
            "gmp": "0",
            "updated_at": "2025-10-31T09:41:29.936872Z",
            "estimated_listing_price": "0.00",
            "ipo_price": "221"
        }
    ],
    "listed_price": "0.00",
    "status": "Upcoming",
    "ipo_max_value": 221,
    "is_encrypt": true,
    "platform": "Web"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Brands.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @next/next/no-img-element */ __turbopack_context__.s([
    "Brands",
    ()=>Brands
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
;
;
const Brands = ({ clients, className, ...rest })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full flex flex-wrap justify-center items-center gap-px", className),
        ...rest,
        children: clients.map((client, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: client.src,
                alt: client.name,
                className: "h-7 filter grayscale filter-none m-4 md:m-8"
            }, index, false, {
                fileName: "[project]/src/components/Brands.js",
                lineNumber: 14,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/Brands.js",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Brands;
var _c;
__turbopack_context__.k.register(_c, "Brands");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/HeroSection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @next/next/no-img-element */ __turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Brands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Brands.js [app-client] (ecmascript)");
;
;
function HeroSection({ badge, title, description, buttons, image, clientsLabel, clients, ...rest }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ...rest,
        className: "homebanner",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container px-2 mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col justify-center items-center mt-10 mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-center items-center gap-4 text-center max-w-3xl mx-auto mt-12 pb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl font-display font-semibold title-gradient",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/HeroSection.js",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/HeroSection.js",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/HeroSection.js",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                        fileName: "[project]/src/components/sections/HeroSection.js",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Brands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Brands"], {
                        clients: clients
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/HeroSection.js",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/HeroSection.js",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/HeroSection.js",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/HeroSection.js",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
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
"[project]/src/components/cards/PricingCard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PricingCard",
    ()=>PricingCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const PricingCard = ({ className, // company = "Company Name",
logoUrl, company = "Company Name", price, changeText, fields = {
    offerDate: "26-01-2025",
    listedAt: "26-01-2025",
    listedAt: '26-01-2025',
    allotmentDate: "26-01-2025",
    offerPrice: "200",
    listingDate: "200",
    lotSize: "200",
    price: "500"
}, ipoListData })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const ipoDetailsNavigation = (id)=>{
        router.push(`/ipo-details/${id}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-full flex-col rounded-2xl border border-base bg-white dark:bg-base-950 p-4 shadow-sm hover:shadow-xl  transition", className),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 min-w-0 hover:cursor-pointer",
                            onClick: ()=>ipoDetailsNavigation(ipoListData?.symbol),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-md bg-base-100 overflow-hidden shrink-0 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: ipoListData?.ipo_image,
                                        alt: company,
                                        width: 48,
                                        height: 48,
                                        className: "object-contain",
                                        unoptimized: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cards/PricingCard.js",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cards/PricingCard.js",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-base font-semibold text-title truncate max-w-[58vw] sm:max-w-[280px] md:max-w-[360px] lg:max-w-[460px] ",
                                            children: ipoListData?.company_name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cards/PricingCard.js",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        price ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-0.5 flex items-baseline gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-title",
                                                    children: price
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cards/PricingCard.js",
                                                    lineNumber: 61,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                changeText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-green-600",
                                                    children: changeText
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cards/PricingCard.js",
                                                    lineNumber: 63,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cards/PricingCard.js",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cards/PricingCard.js",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cards/PricingCard.js",
                            lineNumber: 40,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "h-9 px-3 rounded-full min-w-max border border-1 buyButton",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                            className: "mr-2 h-4 w-4 hidden sm:inline"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cards/PricingCard.js",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: "Buy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cards/PricingCard.js",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                            className: "h-4 w-4 sm:hidden",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cards/PricingCard.js",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cards/PricingCard.js",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "h-9 px-3 rounded-full min-w-max border border-1 sellButton",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                            className: "mr-2 h-4 w-4 hidden sm:inline"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cards/PricingCard.js",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: "Sell"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cards/PricingCard.js",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                            className: "h-4 w-4 sm:hidden",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cards/PricingCard.js",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cards/PricingCard.js",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cards/PricingCard.js",
                            lineNumber: 71,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cards/PricingCard.js",
                    lineNumber: 38,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "my-3 w-full border-b border-base"
                }, void 0, false, {
                    fileName: "[project]/src/components/cards/PricingCard.js",
                    lineNumber: 89,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-2 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                            label: "Offer Date",
                            value: ipoListData?.start_date
                        }, void 0, false, {
                            fileName: "[project]/src/components/cards/PricingCard.js",
                            lineNumber: 93,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                            label: "Listed At",
                            value: ipoListData.listing_date
                        }, void 0, false, {
                            fileName: "[project]/src/components/cards/PricingCard.js",
                            lineNumber: 94,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                            label: "Allotment Date",
                            value: ipoListData.allotment_date
                        }, void 0, false, {
                            fileName: "[project]/src/components/cards/PricingCard.js",
                            lineNumber: 95,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                            label: "Offer Price",
                            value: ipoListData.listed_price
                        }, void 0, false, {
                            fileName: "[project]/src/components/cards/PricingCard.js",
                            lineNumber: 96,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                            label: "Listing Date",
                            value: ipoListData.listingDate
                        }, void 0, false, {
                            fileName: "[project]/src/components/cards/PricingCard.js",
                            lineNumber: 97,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                            label: "Lot Size",
                            value: ipoListData.bid_lot
                        }, void 0, false, {
                            fileName: "[project]/src/components/cards/PricingCard.js",
                            lineNumber: 98,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cards/PricingCard.js",
                    lineNumber: 92,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/cards/PricingCard.js",
            lineNumber: 36,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/cards/PricingCard.js",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PricingCard, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = PricingCard;
function Field({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start justify-between sm:block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/cards/PricingCard.js",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-body font-medium sm:mt-0.5",
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/cards/PricingCard.js",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cards/PricingCard.js",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_c1 = Field;
var _c, _c1;
__turbopack_context__.k.register(_c, "PricingCard");
__turbopack_context__.k.register(_c1, "Field");
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
    const active = "border-indigo-500 text-indigo-700 bg-indigo-50 dark:border-indigo-400 dark:text-indigo-300 dark:bg-indigo-950/40";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center w-full py-6 border-t border-gray-200 dark:border-base-800",
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
                            lineNumber: 61,
                            columnNumber: 21
                        }, this),
                        pages.map((p, i)=>p === "…" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 text-gray-500",
                                children: "…"
                            }, `ellipsis-${i}`, false, {
                                fileName: "[project]/src/components/CustomPagination.js",
                                lineNumber: 72,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${baseBtn} ${p === current ? active : neutral}`,
                                onClick: ()=>go(p),
                                "aria-current": p === current ? "page" : undefined,
                                children: p
                            }, p, false, {
                                fileName: "[project]/src/components/CustomPagination.js",
                                lineNumber: 76,
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
                            lineNumber: 87,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CustomPagination.js",
                    lineNumber: 60,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Rows"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CustomPagination.js",
                            lineNumber: 99,
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
                                    lineNumber: 106,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/CustomPagination.js",
                            lineNumber: 100,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CustomPagination.js",
                    lineNumber: 98,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CustomPagination.js",
            lineNumber: 55,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/CustomPagination.js",
        lineNumber: 53,
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
"[project]/src/components/SectionHeading.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionHeading",
    ()=>SectionHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/Button.js [app-client] (ecmascript)");
;
;
;
function SectionHeading({ align = "center", title, description, badge, buttons = [], ...rest }) {
    const alignClass = {
        center: "items-center text-center mx-auto",
        left: "items-start text-left",
        right: "items-end text-right ml-auto"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center gap-3 max-w-3xl", alignClass[align]),
        ...rest,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-4xl lg:text-5xl font-display text-title font-semibold title-gradient",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/SectionHeading.js",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/SectionHeading.js",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            buttons.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex justify-center items-center gap-4 mt-8", {
                    "justify-center": align === "center",
                    "justify-start": align === "left",
                    "justify-end": align === "right"
                }),
                children: buttons.map((button, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        ...button
                    }, index, false, {
                        fileName: "[project]/src/components/SectionHeading.js",
                        lineNumber: 35,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/SectionHeading.js",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SectionHeading.js",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = SectionHeading;
var _c;
__turbopack_context__.k.register(_c, "SectionHeading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/TestimonialSection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @next/next/no-img-element */ __turbopack_context__.s([
    "TestimonialSection",
    ()=>TestimonialSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionHeading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SectionHeading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/cards/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2f$TestimonialCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cards/TestimonialCard.js [app-client] (ecmascript)");
;
;
;
function TestimonialSection({ title, description, badge, testimonials, button, ...rest }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-base-100 dark:bg-base-900 py-10 min-h-screen",
        ...rest,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container px-4 mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionHeading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                    align: "center",
                    title: title,
                    description: description,
                    badge: badge
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/TestimonialSection.js",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10",
                    children: testimonials && testimonials.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2f$TestimonialCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TestimonialCard"], {
                            ...item
                        }, index, false, {
                            fileName: "[project]/src/components/sections/TestimonialSection.js",
                            lineNumber: 28,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/TestimonialSection.js",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/TestimonialSection.js",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/TestimonialSection.js",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = TestimonialSection;
var _c;
__turbopack_context__.k.register(_c, "TestimonialSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/LargeFeatureSection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @next/next/no-img-element */ __turbopack_context__.s([
    "LargeFeatureSection",
    ()=>LargeFeatureSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionHeading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SectionHeading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2f$FeatureCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cards/FeatureCard.js [app-client] (ecmascript)");
;
;
;
;
function LargeFeatureSection({ reverse = false, title, description, list, image }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-base-100 dark:bg-base-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container px-4 mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionHeading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                                align: "left",
                                title: title,
                                description: description
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/LargeFeatureSection.js",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4 mt-4 lg:mt-10",
                                children: list.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2f$FeatureCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeatureCard"], {
                                        ...item,
                                        className: "p-0 bg-transparent",
                                        icon: "tabler:check",
                                        iconClass: "size-8 p-1"
                                    }, index, false, {
                                        fileName: "[project]/src/components/sections/LargeFeatureSection.js",
                                        lineNumber: 25,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/LargeFeatureSection.js",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/LargeFeatureSection.js",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative flex items-center isolate", {
                            "md:order-first": reverse
                        }),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 group-hover:w-2/3 aspect-square rounded-full bg-base-200 dark:bg-base-800 duration-200 ease-in-out"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/LargeFeatureSection.js",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: image.src,
                                alt: image.alt,
                                className: image.className
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/LargeFeatureSection.js",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/LargeFeatureSection.js",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/LargeFeatureSection.js",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/LargeFeatureSection.js",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/LargeFeatureSection.js",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = LargeFeatureSection;
var _c;
__turbopack_context__.k.register(_c, "LargeFeatureSection");
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
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group flex flex-1 cursor-pointer items-center justify-between leading-none outline-none", "text-2xl text-title h-20 hover:text-muted font-normal font-display "),
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
"[project]/src/components/sections/FaqSection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaqSection",
    ()=>FaqSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionHeading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SectionHeading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/Accordion.js [app-client] (ecmascript)");
;
;
;
function FaqSection({ title, description, buttons, faqs, ...rest }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-base-100 dark:bg-base-900 pb-10",
        ...rest,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container px-4 mx-auto ",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-12 gap-4 lg:gap-20 bg-white dark:bg-base-950 p-4 sm:p-8 md:p-20 rounded-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-12 lg:col-span-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionHeading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                            align: "left",
                            title: title,
                            description: description,
                            buttons: buttons
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/FaqSection.js",
                            lineNumber: 10,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/FaqSection.js",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-12 lg:col-span-7",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Accordion"], {
                            items: faqs
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/FaqSection.js",
                            lineNumber: 18,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/FaqSection.js",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/FaqSection.js",
                lineNumber: 8,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/FaqSection.js",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/FaqSection.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = FaqSection;
var _c;
__turbopack_context__.k.register(_c, "FaqSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/CtaSection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CtaSection",
    ()=>CtaSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionHeading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SectionHeading.js [app-client] (ecmascript)");
;
;
function CtaSection({ title, description, buttons, ...rest }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-base-100 dark:bg-base-900 py-20 md:px-4",
        ...rest,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-10 rounded-2xl ",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl flex flex-col justify-center items-center mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionHeading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                    align: "center",
                    title: title,
                    description: description,
                    buttons: buttons
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/CtaSection.js",
                    lineNumber: 8,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/CtaSection.js",
                lineNumber: 7,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/CtaSection.js",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/CtaSection.js",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = CtaSection;
var _c;
__turbopack_context__.k.register(_c, "CtaSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SocialLinks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SocialLinks",
    ()=>SocialLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/Button.js [app-client] (ecmascript)");
;
;
;
const SocialLinks = ({ links, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex gap-2 items-center", className),
        children: links.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                icon: link.icon,
                href: link.url,
                color: "white",
                className: "p-3"
            }, index, false, {
                fileName: "[project]/src/components/SocialLinks.js",
                lineNumber: 8,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/SocialLinks.js",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SocialLinks;
var _c;
__turbopack_context__.k.register(_c, "SocialLinks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Footer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @next/next/no-img-element */ __turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SocialLinks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SocialLinks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
;
;
;
;
function Footer({ copyright, logo, links, social, ...rest }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-base-100 dark:bg-base-900 pt-6",
        ...rest,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container px-4 mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col md:flex-row justify-between items-center gap-4 py-6"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "./logo.png",
                            alt: "logo",
                            className: "h-10 w-auto opacity-70 hover:opacity-100 dark:invert"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Footer.js",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row gap-4 text-sm",
                            children: links.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    children: link.label
                                }, index, false, {
                                    fileName: "[project]/src/components/sections/Footer.js",
                                    lineNumber: 22,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Footer.js",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SocialLinks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialLinks"], {
                            links: social
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Footer.js",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Footer.js",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-base py-4 text-center flex justify-between",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: [
                            "© ",
                            copyright
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Footer.js",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Footer.js",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Footer.js",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Footer.js",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/Header.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$HeroSection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/HeroSection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$PricingSection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/PricingSection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$TestimonialSection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/TestimonialSection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$LargeFeatureSection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/LargeFeatureSection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$FaqSection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/FaqSection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$CtaSection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/CtaSection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/Footer.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ResponsiveTable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ResponsiveTable.js
__turbopack_context__.s([
    "default",
    ()=>ResponsiveTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function ResponsiveTable({ title, columns = [], rows = [], getRowKey = (row, i)=>row.id ?? i, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: [
            "rounded-2xl bg-white dark:bg-base-950 ring-1 ring-gray-200 dark:ring-base-800 overflow-hidden",
            className
        ].join(" "),
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 sm:px-6 py-3 bg-gray-50 dark:bg-base-900/60 border-b border-gray-200 dark:border-base-800",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-base font-semibold text-gray-900 dark:text-gray-100",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/ResponsiveTable.js",
                    lineNumber: 10,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ResponsiveTable.js",
                lineNumber: 9,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "text-left text-gray-600 dark:text-gray-300 bg-white dark:bg-base-950",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "[&>th]:px-4 [&>th]:sm:px-6 [&>th]:py-3 border-b border-gray-200 dark:border-base-800",
                                children: columns.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: c.label
                                    }, c.key, false, {
                                        fileName: "[project]/src/components/ResponsiveTable.js",
                                        lineNumber: 20,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ResponsiveTable.js",
                                lineNumber: 18,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ResponsiveTable.js",
                            lineNumber: 17,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-gray-200 dark:divide-base-800",
                            children: [
                                rows.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: columns.length,
                                        className: "px-6 py-6 text-center text-gray-500 dark:text-gray-400",
                                        children: "No data available."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ResponsiveTable.js",
                                        lineNumber: 28,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ResponsiveTable.js",
                                    lineNumber: 27,
                                    columnNumber: 29
                                }, this),
                                rows.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "odd:bg-gray-50/40 dark:odd:bg-base-900/30",
                                        children: columns.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "[&>div]:px-4 [&>div]:sm:px-6 py-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: c.render ? c.render(row[c.key], row) : row[c.key] ?? "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ResponsiveTable.js",
                                                    lineNumber: 38,
                                                    columnNumber: 41
                                                }, this)
                                            }, c.key, false, {
                                                fileName: "[project]/src/components/ResponsiveTable.js",
                                                lineNumber: 37,
                                                columnNumber: 37
                                            }, this))
                                    }, getRowKey(row, i), false, {
                                        fileName: "[project]/src/components/ResponsiveTable.js",
                                        lineNumber: 35,
                                        columnNumber: 29
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ResponsiveTable.js",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ResponsiveTable.js",
                    lineNumber: 16,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ResponsiveTable.js",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden divide-y divide-gray-200 dark:divide-base-800",
                children: [
                    rows.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-6 text-center text-gray-500 dark:text-gray-400",
                        children: "No data available."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ResponsiveTable.js",
                        lineNumber: 52,
                        columnNumber: 21
                    }, this),
                    rows.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 space-y-3",
                            children: columns.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-500",
                                            children: c.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ResponsiveTable.js",
                                            lineNumber: 59,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-medium",
                                            children: c.render ? c.render(row[c.key], row) : row[c.key] ?? "—"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ResponsiveTable.js",
                                            lineNumber: 60,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, c.key, true, {
                                    fileName: "[project]/src/components/ResponsiveTable.js",
                                    lineNumber: 58,
                                    columnNumber: 29
                                }, this))
                        }, getRowKey(row, i), false, {
                            fileName: "[project]/src/components/ResponsiveTable.js",
                            lineNumber: 56,
                            columnNumber: 21
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ResponsiveTable.js",
                lineNumber: 50,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ResponsiveTable.js",
        lineNumber: 6,
        columnNumber: 9
    }, this);
}
_c = ResponsiveTable;
var _c;
__turbopack_context__.k.register(_c, "ResponsiveTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app_config/IPOCalculation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app_config/CommonFunction.js [app-client] (ecmascript)");
;
const formatGmpValue = (ele = {})=>{
    const gmp = Number(ele?.gmp ?? 0);
    const maxValue = Number(ele?.ipo_max_value ?? 0);
    // Return dash if null/undefined
    if (ele.gmp === null || ele.gmp === undefined) return "-";
    // Calculate percentage safely
    const percent = maxValue > 0 ? (gmp / maxValue * 100).toFixed(2) : "0.00";
    // ✅ Use your shared function
    const formattedGmp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianPrice"])(gmp);
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ipodetailspages/IPOGmp.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApplicationBreakupTable",
    ()=>ApplicationBreakupTable,
    "GmpTrendTable",
    ()=>GmpTrendTable,
    "IPOReservationTable",
    ()=>IPOReservationTable,
    "IpoCompanyDetails",
    ()=>IpoCompanyDetails,
    "LotDistributionTable",
    ()=>LotDistributionTable,
    "StrengthWeekness",
    ()=>StrengthWeekness,
    "SubscriptionDemandTable",
    ()=>SubscriptionDemandTable,
    "SubscriptionDetailsTable",
    ()=>SubscriptionDetailsTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app_config/CommonFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResponsiveTable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ResponsiveTable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app_config/CommonVariable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$IPOCalculation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app_config/IPOCalculation.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function formatINR(n) {
    if (n === null || n === undefined || n === "") return "—";
    const num = Number(n);
    if (Number.isNaN(num)) return n;
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(num);
}
const toNum = (v)=>{
    const n = Number(v);
    return Number.isFinite(n) ? n : 0;
};
function GmpTrendTable({ title = "", rows = [] }) {
    const tableColumns = [
        {
            key: "last_update",
            label: "Last Updated"
        },
        {
            key: "ipo_price",
            label: "IPO Price"
        },
        {
            key: "gmp",
            label: "GMP"
        },
        {
            key: "estimate",
            label: "Estimated Listing Price",
            render: (v, row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: formatINR(v)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                            lineNumber: 31,
                            columnNumber: 21
                        }, this),
                        row.estimated_pct ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500 dark:text-gray-400",
                            children: [
                                "(",
                                Number(row.estimated_pct).toFixed(2),
                                "%)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                            lineNumber: 32,
                            columnNumber: 43
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, this)
        }
    ];
    function transformIPOData(data) {
        if (data) {
            const result = [
                ...data
            ].reverse().map((item, index, arr)=>{
                const currentGmp = parseFloat(item.gmp);
                const prevGmp = index > 0 ? parseFloat(arr[index - 1].gmp) : null;
                let trend = null;
                if (prevGmp !== null) {
                    if (currentGmp > prevGmp) trend = "green";
                    else if (currentGmp < prevGmp) trend = "red";
                }
                return {
                    ...item,
                    trend
                };
            }).reverse();
            return result?.map((item)=>{
                const gmpValue = parseFloat(item.gmp) || 0; // Convert GMP to number
                const ipoPrice = item.ipo_price ? parseFloat(item.ipo_price) : 0; // Default IPO price
                const estimatedPrice = ipoPrice + gmpValue; // Calculate estimated listing price
                const percentageChange = ipoPrice > 0 ? ((estimatedPrice - ipoPrice) / ipoPrice * 100).toFixed(2) : '0.00';
                return {
                    gmp_date: item.gmp_date,
                    ipo_price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianPrice"])(ipoPrice),
                    gmp: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianPrice"])(gmpValue)}`,
                    sub_2: '--',
                    trend: item.trend,
                    estimate: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianPrice"])(estimatedPrice)} (${percentageChange}%)`,
                    // last_update: new Date(item.updated_at).toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }).replace(',', ''),
                    last_update: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateTime"])(item.updated_at, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonVariable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DateFormats"]?.DATE_DD_MMM_YYYY_TIME_24H)
                };
            });
        } else {
            return [];
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResponsiveTable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: title,
        columns: tableColumns,
        rows: transformIPOData(rows)
    }, void 0, false, {
        fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
        lineNumber: 77,
        columnNumber: 9
    }, this);
}
_c = GmpTrendTable;
function SubscriptionDetailsTable({ title = "", rows = [] }) {
    const tableColumns = [
        {
            key: "category",
            label: "Category"
        },
        {
            key: "Shares_Offered",
            label: "Offered"
        },
        {
            key: "Shares_bid",
            label: "Applied"
        },
        {
            key: "Subscription",
            label: "Times"
        }
    ];
    const transformIPOData = (data)=>{
        if (!Array.isArray(data) || data.length === 0) return [];
        const rows = data.map(({ category, applied, offered, total_amount })=>{
            const off = +offered || 0;
            const app = +applied || 0;
            return {
                category: category || "",
                Subscription: off ? `${(app / off).toFixed(2)}x` : "0.00x",
                Shares_Offered: off.toLocaleString("en-IN"),
                Shares_bid: app.toLocaleString("en-IN"),
                amount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianPrice"])(+total_amount || 0),
                // meta for totals
                _off: off,
                _app: app,
                _include: String(category || "").toLowerCase() !== "nib" && off > 0 && app > 0
            };
        });
        const totals = rows.reduce((a, r)=>r._include ? {
                off: a.off + r._off,
                app: a.app + r._app
            } : a, {
            off: 0,
            app: 0
        });
        const totalAmount = data.reduce((s, { total_amount })=>s + (+total_amount || 0), 0);
        const totalRow = {
            category: "Total",
            Subscription: totals.off ? `${(totals.app / totals.off).toFixed(2)}x` : "0.00x",
            Shares_Offered: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(totals.off),
            Shares_bid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(totals.app),
            amount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianPrice"])(totalAmount)
        };
        // strip meta
        return [
            ...rows.map(({ _off, _app, _include, ...r })=>r),
            totalRow
        ];
    };
    console.log('SubscriptionDetailsTable', rows);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResponsiveTable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: title,
        columns: tableColumns,
        rows: transformIPOData(rows)
    }, void 0, false, {
        fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
        lineNumber: 136,
        columnNumber: 9
    }, this);
}
_c1 = SubscriptionDetailsTable;
function SubscriptionDemandTable({ title = "", rows = [] }) {
    const tableColumns = [
        {
            key: "category",
            label: "Category"
        },
        {
            key: "offered",
            label: "Offered",
            render: (text)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianPrice"])(text)
        },
        {
            key: "demand",
            label: "Demand"
        },
        {
            key: "times",
            label: "Times"
        }
    ];
    const transformIPOData = (data)=>{
        if (!Array.isArray(data) || data.length === 0) return [];
        let formattedDataReservation = data?.map((item)=>({
                category: item?.category,
                demand: Number(item?.demand) || 0,
                offered: Number(item?.offered) || 0,
                times: item?.offered ? (Number(item.demand) / Number(item.offered)).toFixed(2) : "0.00" // Calculate times per row
            }));
        const totalReservation = formattedDataReservation?.length > 0 ? formattedDataReservation.reduce((total, item, index)=>{
            if (item?.category === "NIB" || item?.offered === 0 || item?.demand === 0 || item?.times === 0) {
                return {
                    demand: total.demand,
                    offered: total.offered,
                    times: total.times
                };
            } else {
                return {
                    demand: total.demand + (Number(item.demand) || 0),
                    offered: total.offered + (Number(item.offered) || 0),
                    times: (total.demand + (Number(item.demand) || 0)) / (total.offered + (Number(item.offered) || 0)) || 0
                };
            }
        }, {
            demand: 0,
            offered: 0,
            times: 0
        }) : {
            demand: 0,
            offered: 0,
            times: 0
        };
        totalReservation.times = totalReservation.offered ? (totalReservation.demand / totalReservation.offered).toFixed(2) : "0.00";
        let finalReservation = [
            ...formattedDataReservation,
            {
                category: "Total",
                demand: totalReservation?.demand.toFixed(2),
                offered: totalReservation?.offered?.toFixed(2),
                times: totalReservation?.times // Already calculated above
            }
        ];
        // finalReservation = finalReservation?.map((ele, ind) => {
        //     let obj = cloneDeep(ele);
        //     if (+obj.demand === 0) {
        //         obj.demand = "-"
        //     }
        //     if (+obj.offered === 0) {
        //         obj.offered = "-"
        //     }
        //     if (+obj.times === 0) {
        //         obj.times = "-"
        //     }
        //     return obj
        // })
        return finalReservation;
    };
    // console.log('SubscriptionDetailsTable', rows);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResponsiveTable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: title,
        columns: tableColumns,
        rows: transformIPOData(rows)
    }, void 0, false, {
        fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
        lineNumber: 219,
        columnNumber: 9
    }, this);
}
_c2 = SubscriptionDemandTable;
function ApplicationBreakupTable({ title = "", rows = [] }) {
    const tableColumns = [
        {
            key: "category",
            label: "Category"
        },
        {
            key: "reserved",
            label: "Reserved",
            render: (text)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(text)
        },
        {
            key: "applied",
            label: "Applied",
            render: (text)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(text)
        },
        {
            key: "times",
            label: "Times",
            render: (text)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatToFixed"])(text)
        }
    ];
    const transformIPOData = (data)=>{
        if (!Array.isArray(data) || data.length === 0) return [];
        const applicationData = data?.slice(1)?.map((item)=>({
                category: item?.category,
                applied: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(parseInt(item?.applied, 10)),
                appliedd: parseInt(item?.applied, 10),
                reserved: parseInt(item?.reserved, 10),
                times: item?.applied > 0 && item?.reserved > 0 ? parseInt(item?.applied, 10) / parseInt(item?.reserved, 10) : 0
            }));
        const totalApplication = applicationData?.length > 0 ? applicationData.reduce((total, item, index)=>{
            if (item?.category?.toLowerCase() === "nib" || item?.appliedd === 0 || item?.reserved === 0 || item?.times === 0) {
                return {
                    appliedd: total.appliedd,
                    reserved: total.reserved,
                    times: total.times
                };
            } else {
                return {
                    appliedd: (parseInt(total.appliedd, 10) || 0) + (parseInt(item.appliedd, 10) || 0),
                    reserved: (parseInt(total.reserved, 10) || 0) + (parseInt(item.reserved, 10) || 0),
                    times: ((parseInt(total.appliedd, 10) || 0) + (parseInt(item.appliedd, 10) || 0)) / ((parseInt(total.reserved, 10) || 0) + (parseInt(item.reserved, 10) || 0)) || 0
                };
            }
        }, {
            appliedd: 0,
            reserved: 0,
            times: 0
        }) : {
            appliedd: 0,
            reserved: 0,
            times: 0
        };
        let finalApplication = [
            ...applicationData,
            {
                category: "Total",
                applied: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(totalApplication?.appliedd),
                reserved: parseInt(totalApplication?.reserved, 10),
                times: totalApplication?.times
            }
        ];
        // finalApplication = finalApplication?.map((ele, ind) => {
        //     let obj = cloneDeep(ele);
        //     if (obj?.appliedd === 0) {
        //         obj.applied = "-"
        //     }
        //     if (obj?.reserved === 0) {
        //         obj.reserved = "-"
        //     }
        //     return obj;
        // })
        return finalApplication;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResponsiveTable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: title,
        columns: tableColumns,
        rows: transformIPOData(rows)
    }, void 0, false, {
        fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
        lineNumber: 306,
        columnNumber: 9
    }, this);
}
_c3 = ApplicationBreakupTable;
function LotDistributionTable({ title = "", rows = [] }) {
    const tableColumns = [
        {
            key: "application",
            label: "Category"
        },
        {
            key: "lot",
            label: "Lot(s)"
        },
        {
            key: "share",
            label: "Qty"
        },
        {
            key: "ammount",
            label: "Amount",
            render: (v, row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: formatINR(v)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                            lineNumber: 326,
                            columnNumber: 21
                        }, this),
                        row.estimated_pct ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500 dark:text-gray-400",
                            children: [
                                "(",
                                Number(row.estimated_pct).toFixed(2),
                                "%)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                            lineNumber: 327,
                            columnNumber: 43
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                    lineNumber: 325,
                    columnNumber: 17
                }, this)
        }
    ];
    const transformIPOData = (data)=>{
        if (data?.length > 0) {
            const updatedArray = data?.length > 0 && data?.map((item)=>({
                    label: 'IPO Date',
                    application: item?.category === "RETAIL" ? "Retail (Min)" : item?.category,
                    lot: item["lot(s)"]?.toString(),
                    share: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(item?.qty),
                    ammount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianPrice"])(item?.amount),
                    reserved: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(item?.reserved)
                }));
            return updatedArray;
        } else {
            return [];
        }
    };
    let checking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$IPOCalculation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkingNonZeroValueDistributionTable"])(transformIPOData(rows));
    if (checking) {
        tableColumns.push({
            label: "Reserved",
            dataIndex: "reserved",
            key: "reserved",
            width: "50%",
            render: (text)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        display: "flex",
                        justifyContent: "flex-start",
                        whiteSpace: "nowrap",
                        // textDecoration: "underline",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    },
                    className: "company-name-table table-cell-typo text-center",
                    children: text
                }, void 0, false, {
                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                    lineNumber: 358,
                    columnNumber: 17
                }, this)
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResponsiveTable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: title,
        columns: tableColumns,
        rows: transformIPOData(rows)
    }, void 0, false, {
        fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
        lineNumber: 376,
        columnNumber: 9
    }, this);
}
_c4 = LotDistributionTable;
function IPOReservationTable({ title = "", rows = [] }) {
    const tableColumns = [
        {
            key: "investor_category",
            label: "Inventory Category"
        },
        {
            key: "shares_offered",
            label: "Shares Offers"
        },
        {
            key: "no_of_shares",
            label: "No. of Shares"
        }
    ];
    const transformIPOData = (data)=>{
        if (!Array.isArray(data) || data.length === 0) return [];
        // Totals from raw inputs
        const totalSharesOffered = data?.reduce((sum, r)=>sum + toNum(r.shares_offered), 0);
        const totalNoOfShares = data?.reduce((sum, r)=>sum + toNum(r.no_of_shares), 0);
        // Map data → percentage for shares_offered + numeric no_of_shares
        const updated = data.map((r)=>{
            const so = toNum(r.shares_offered);
            const pct = totalSharesOffered > 0 ? so / totalSharesOffered * 100 : 0;
            return {
                investor_category: r?.investor_category ?? "",
                shares_offered: `${pct.toFixed(2)}%`,
                no_of_shares: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(toNum(r.no_of_shares))
            };
        });
        // Append TOTAL row
        updated.push({
            investor_category: "TOTAL",
            shares_offered: totalSharesOffered > 0 ? "100.00%" : "0%",
            no_of_shares: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(totalNoOfShares)
        });
        return updated;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResponsiveTable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: title,
        columns: tableColumns,
        rows: transformIPOData(rows)
    }, void 0, false, {
        fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
        lineNumber: 424,
        columnNumber: 9
    }, this);
}
_c5 = IPOReservationTable;
function IpoCompanyDetails({ companyDetails = {}, registrarDetail = "" }) {
    // Parse registrar details from comma-separated string
    const [registrarName, registrarPhone, registrarEmail, registrarWebsite] = registrarDetail?.split(",").map((item)=>item.trim()) || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "scroll-mt-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl ring-1 ring-gray-200 dark:ring-base-800 bg-white dark:bg-base-950",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-50 dark:bg-base-900/40 rounded-t-xl px-4 py-3 border-b border-gray-200 dark:border-base-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold ",
                                children: "Company Details"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                lineNumber: 444,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                            lineNumber: 443,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5 text-sm text-gray-700 dark:text-gray-300 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Email:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                            lineNumber: 451,
                                            columnNumber: 29
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `mailto:${companyDetails?.Email}`,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-indigo-600 hover:underline",
                                            children: companyDetails?.Email || "—"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                            lineNumber: 452,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                    lineNumber: 450,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Phone:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                            lineNumber: 461,
                                            columnNumber: 29
                                        }, this),
                                        " ",
                                        companyDetails?.Phone || "—"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                    lineNumber: 460,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Website:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                            lineNumber: 464,
                                            columnNumber: 29
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: companyDetails.Website,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-indigo-600 hover:underline",
                                            children: companyDetails.Website || "—"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                            lineNumber: 465,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                    lineNumber: 463,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Address:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                            lineNumber: 475,
                                            columnNumber: 29
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block whitespace-pre-line",
                                            children: companyDetails.address || "—"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                            lineNumber: 476,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                    lineNumber: 474,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                            lineNumber: 449,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                    lineNumber: 442,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl ring-1 ring-gray-200 dark:ring-base-800 bg-white dark:bg-base-950",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-50 dark:bg-base-900/40 rounded-t-xl px-4 py-3 border-b border-gray-200 dark:border-base-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold ",
                                children: "IPO Registrar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                lineNumber: 486,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                            lineNumber: 485,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5 text-sm text-gray-700 dark:text-gray-300 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Name:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                            lineNumber: 496,
                                            columnNumber: 29
                                        }, this),
                                        " ",
                                        registrarName || "—"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                    lineNumber: 495,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Phone:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                            lineNumber: 499,
                                            columnNumber: 29
                                        }, this),
                                        " ",
                                        registrarPhone || "—"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                    lineNumber: 498,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Email:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                            lineNumber: 502,
                                            columnNumber: 29
                                        }, this),
                                        " ",
                                        registrarEmail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `mailto:${registrarEmail}`,
                                            className: "text-indigo-600 hover:underline",
                                            children: registrarEmail
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                            lineNumber: 504,
                                            columnNumber: 33
                                        }, this) : "—"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                    lineNumber: 501,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Website:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                            lineNumber: 515,
                                            columnNumber: 29
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: registrarWebsite,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-indigo-600 hover:underline",
                                            children: registrarWebsite || "—"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                            lineNumber: 516,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                    lineNumber: 514,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                            lineNumber: 491,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                    lineNumber: 484,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
            lineNumber: 440,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
        lineNumber: 439,
        columnNumber: 9
    }, this);
}
_c6 = IpoCompanyDetails;
function StrengthWeekness({ strength = "", weakness = "", note = "The pros and cons are machine generated.", showNote = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "scroll-mt-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl bg-white dark:bg-base-950 p-5 ring-1 ring-emerald-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold tracking-widest text-emerald-600",
                                children: "Strength Factors"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                lineNumber: 539,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "prose prose-sm max-w-none text-gray-700 dark:prose-invert dark:text-gray-300 prose-ul:list-disc prose-ol:list-decimal prose-li:my-1",
                                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanHTMLContent"])(strength)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                    lineNumber: 541,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                lineNumber: 540,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                        lineNumber: 538,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl bg-white dark:bg-base-950 p-5 ring-1 ring-rose-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold tracking-widest text-rose-600",
                                children: "Risk Factors"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                lineNumber: 549,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "prose prose-sm max-w-none text-gray-700 dark:prose-invert dark:text-gray-300 prose-ul:list-disc prose-ol:list-decimal prose-li:my-1",
                                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanHTMLContent"])(weakness)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                    lineNumber: 551,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                                lineNumber: 550,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                        lineNumber: 548,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                lineNumber: 535,
                columnNumber: 13
            }, this),
            showNote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block h-4 w-4 rounded-full border border-gray-300 dark:border-base-700 grid place-items-center text-[10px]",
                        children: "i"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                        lineNumber: 560,
                        columnNumber: 21
                    }, this),
                    note
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
                lineNumber: 559,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ipodetailspages/IPOGmp.jsx",
        lineNumber: 534,
        columnNumber: 9
    }, this);
}
_c7 = StrengthWeekness;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "GmpTrendTable");
__turbopack_context__.k.register(_c1, "SubscriptionDetailsTable");
__turbopack_context__.k.register(_c2, "SubscriptionDemandTable");
__turbopack_context__.k.register(_c3, "ApplicationBreakupTable");
__turbopack_context__.k.register(_c4, "LotDistributionTable");
__turbopack_context__.k.register(_c5, "IPOReservationTable");
__turbopack_context__.k.register(_c6, "IpoCompanyDetails");
__turbopack_context__.k.register(_c7, "StrengthWeekness");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ipodetailspages/OverviewSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/OverviewSection.jsx
__turbopack_context__.s([
    "default",
    ()=>OverviewSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app_config/CommonFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$IPOCalculation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app_config/IPOCalculation.js [app-client] (ecmascript)");
;
;
;
function OverviewSection({ id = "overview", ipoDetailsData }) {
    const metrics = [
        {
            label: "Start Date",
            value: `${ipoDetailsData?.start_date}`
        },
        {
            label: "End Date",
            value: `${ipoDetailsData?.end_date}`
        },
        {
            label: "Listing Date",
            value: `${ipoDetailsData?.listing_date}`
        },
        {
            label: "Current Price",
            value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianPrice"])(ipoDetailsData?.listed_price)}`
        },
        {
            label: "Issue Price",
            value: `${ipoDetailsData?.price_range}`
        },
        {
            label: "GMP",
            value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$IPOCalculation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatGmpValue"])(ipoDetailsData)}`
        },
        {
            label: "Lot Size",
            value: `${ipoDetailsData?.bid_lot} Shares`
        },
        {
            label: "Subscription",
            value: `${ipoDetailsData?.subscription}`
        },
        {
            label: "Face Value",
            value: `${ipoDetailsData?.face_value}`
        },
        {
            label: "Listing at",
            value: `${ipoDetailsData?.listing_at_group}`
        },
        {
            label: "Pre Issue",
            value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianPrice"])(ipoDetailsData?.pre_issue_share_holding)}`
        },
        {
            label: "Post Issue",
            value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app_config$2f$CommonFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianPrice"])(ipoDetailsData?.post_issue_share_holding)}`
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        className: "scroll-mt-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-base-950 rounded-2xl shadow-sm ring-1 ring-gray-200 dark:ring-base-800 p-4 sm:p-6 md:p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100",
                                children: ipoDetailsData?.company_name
                            }, void 0, false, {
                                fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                                lineNumber: 28,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: ipoDetailsData?.company_address?.Website,
                                target: "_blank",
                                rel: "noreferrer",
                                className: "mt-1 inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 dark:text-indigo-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        className: "opacity-80",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fill: "currentColor",
                                                d: "M10.9 2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6.02a1 1 0 1 0-2 0V17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6.02a1 1 0 1 0-.12-2Z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                                                lineNumber: 33,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fill: "currentColor",
                                                d: "M21 3h-6a1 1 0 1 0 0 2h3.59l-7.3 7.3a1 1 0 1 0 1.42 1.4L20 6.41V10a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1Z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                                                lineNumber: 33,
                                                columnNumber: 214
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                                        lineNumber: 32,
                                        columnNumber: 29
                                    }, this),
                                    "Company website"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                                lineNumber: 31,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                        lineNumber: 27,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 grid grid-cols-12 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-12 lg:col-span-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl ring-1 ring-gray-200 dark:ring-base-800 p-4 sm:p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",
                                    children: metrics.map((m, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[13px] text-gray-500 dark:text-gray-400",
                                                    children: m.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                                                    lineNumber: 62,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: [
                                                        "text-base font-semibold text-gray-900 dark:text-gray-100",
                                                        m.highlight ? "bg-gray-50 dark:bg-base-900 rounded-md px-3 py-2" : ""
                                                    ].join(" "),
                                                    children: m.value
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                                                    lineNumber: 63,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                                            lineNumber: 61,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                                    lineNumber: 59,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                                lineNumber: 58,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                            lineNumber: 57,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-12 lg:col-span-4 space-y-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl ring-1 ring-gray-200 dark:ring-base-800 p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold tracking-wide text-gray-900 dark:text-gray-100",
                                        children: "ABOUT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                                        lineNumber: 94,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300 line-clamp-[8]",
                                        children: ipoDetailsData?.about_the_company
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                                        lineNumber: 97,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                                lineNumber: 93,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                            lineNumber: 92,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
                    lineNumber: 56,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
            lineNumber: 24,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ipodetailspages/OverviewSection.jsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
_c = OverviewSection;
var _c;
__turbopack_context__.k.register(_c, "OverviewSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ipodetailspages/IpoDetailsPages.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// sections/IpoDetailsPages.jsx
__turbopack_context__.s([
    "IpoDetailsPages",
    ()=>IpoDetailsPages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$StickyTabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ipodetailspages/StickyTabs.jsx [app-client] (ecmascript)");
// import SectionHeading from "@/components/sections/SectionHeading";
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/footer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$gmpdata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/gmpdata.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/sections/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/Footer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$IPOGmp$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ipodetailspages/IPOGmp.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$OverviewSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ipodetailspages/OverviewSection.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
// import Accordion from "@/components/Accordion";
const TABS = [
    {
        id: "overview",
        label: "Overview"
    },
    {
        id: "gmpDetails",
        label: "GMP"
    },
    {
        id: "subscriptionDetails",
        label: "Subscription"
    },
    {
        id: "ipoReservation",
        label: "IPO Reservation"
    },
    {
        id: "comapnyDetails",
        label: "Comapny Details"
    }
];
function IpoDetailsPages({ ipoDetailsData, ...rest }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$StickyTabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                items: TABS
            }, void 0, false, {
                fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                lineNumber: 32,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-base-100 dark:bg-base-900 pt-24",
                ...rest,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container px-4 mx-auto space-y-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$OverviewSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            id: "overview",
                            title: "Lenskart Solutions Ltd",
                            ipoDetailsData: ipoDetailsData
                        }, void 0, false, {
                            fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                            lineNumber: 40,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "gmpDetails",
                            className: "scroll-mt-20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                title: "",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$IPOGmp$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GmpTrendTable"], {
                                    title: "Gmp Details",
                                    rows: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$gmpdata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gmpDetails"]?.ipo_gmp?.length > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$gmpdata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gmpDetails"]?.ipo_gmp : []
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                    lineNumber: 68,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                lineNumber: 67,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                            lineNumber: 66,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "subscriptionDetails",
                            className: "scroll-mt-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    title: "",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$IPOGmp$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubscriptionDetailsTable"], {
                                        title: "Subscription Details (No. of Shares)",
                                        rows: ipoDetailsData?.ipo_subscription_detail?.length > 0 ? ipoDetailsData?.ipo_subscription_detail : []
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                        lineNumber: 75,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                    lineNumber: 74,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    title: "",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$IPOGmp$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubscriptionDemandTable"], {
                                        title: " Subscription Demand (in ₹ Crore)",
                                        rows: ipoDetailsData?.subscription_demand?.length > 0 ? ipoDetailsData?.subscription_demand : []
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                        lineNumber: 79,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                    lineNumber: 78,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    title: "",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$IPOGmp$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApplicationBreakupTable"], {
                                        title: "Application Wise Breakup (Approx. no of Apps)",
                                        rows: ipoDetailsData?.appplication_wise_breakup?.data?.length > 0 ? ipoDetailsData?.appplication_wise_breakup?.data : []
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                        lineNumber: 83,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                    lineNumber: 82,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                            lineNumber: 73,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "ipoReservation",
                            className: "scroll-mt-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    title: "",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$IPOGmp$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IPOReservationTable"], {
                                        title: "IPO Reservation",
                                        rows: ipoDetailsData?.ipo_reservation?.length > 0 ? ipoDetailsData?.ipo_reservation : []
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                        lineNumber: 90,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                    lineNumber: 89,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    title: "",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$IPOGmp$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LotDistributionTable"], {
                                        title: "Lot(s) Distribution",
                                        rows: ipoDetailsData?.ipo_lot_description?.length > 0 ? ipoDetailsData?.ipo_lot_description : []
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                        lineNumber: 93,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                    lineNumber: 92,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                            lineNumber: 88,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "comapnyDetails",
                            className: "scroll-mt-20 !mb-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    title: "",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$IPOGmp$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IpoCompanyDetails"], {
                                        companyDetails: ipoDetailsData?.company_address,
                                        registrarDetail: ipoDetailsData?.registrar_detail
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                        lineNumber: 100,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                    lineNumber: 99,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    title: "",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ipodetailspages$2f$IPOGmp$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrengthWeekness"], {
                                        strength: ipoDetailsData?.company_strenght,
                                        weakness: ipoDetailsData?.company_weakness ? ipoDetailsData?.company_weakness : ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                        lineNumber: 103,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                                    lineNumber: 102,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                            lineNumber: 98,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                    lineNumber: 37,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                lineNumber: 34,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {
                id: "footer",
                copyright: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["footer"].copyright,
                logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["footer"].logo,
                social: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["footer"].social,
                links: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["footer"].links
            }, void 0, false, {
                fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                lineNumber: 110,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_c = IpoDetailsPages;
// tiny helper card
function Card({ title, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-base-950 p-6 rounded-2xl border border-gray-200 dark:border-base-800 mt-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold mb-3",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                lineNumber: 124,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-gray-600 dark:text-gray-300",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
                lineNumber: 125,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ipodetailspages/IpoDetailsPages.jsx",
        lineNumber: 123,
        columnNumber: 9
    }, this);
}
_c1 = Card;
var _c, _c1;
__turbopack_context__.k.register(_c, "IpoDetailsPages");
__turbopack_context__.k.register(_c1, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_c571f024._.js.map