"use client";
import { useEffect, useMemo, useState } from "react";

export default function StickyTabs({ items = [] }) {

    const [active, setActive] = useState(items[0]?.id);

    const go = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        // account for a fixed header (adjust 80 if your header is taller/shorter)
        const y = el.getBoundingClientRect().top + window.scrollY - 150;
        window.history.replaceState(null, "", `#${id}`);
        window.scrollTo({ top: y, behavior: "smooth" });
    };

    const ids = useMemo(() => items.map((i) => i.id), [items]);

    useEffect(() => {
        const obs = new IntersectionObserver((entries) => {
            const visible = entries
                .filter((e) => e.isIntersecting)
                .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
            if (visible?.target?.id) setActive(visible.target.id);
        },
            { rootMargin: "-50% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
        );

        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) obs.observe(el);
        });

        return () => obs.disconnect();

    }, [ids]);

    return (
        <div className="sticky top-14 border-top z-30 bg-white/80 dark:bg-base-950/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-base-950/60 border-b border-gray-200 dark:border-base-800">
            <div className="container mx-auto px-4 overflow-x-auto">
                <nav className="flex gap-2 py-4 min-w-max">
                    {items.map((it) => {
                        const isActive = active === it.id;
                        return (
                            <button
                                key={it.id}
                                onClick={() => go(it.id)}
                                className={[
                                    "px-3 py-1.5 rounded-md text-sm transition",
                                    isActive
                                        ? "bg-primary-100 text-white font-weight-600 dark:bg-primary-900/40 dark:text-primary-300"
                                        : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                                ].join(" ")}
                            >
                                {it.label}
                            </button>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}
