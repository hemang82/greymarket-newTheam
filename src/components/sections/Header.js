"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "../base/Button";
import Link from "next/link";
import { ThemeSwitch } from "../ThemeSwitch";
import { getSearchIPO } from "@/api";

export function Header({ logo, links, buttons, className, ...rest }) {
  const pathname = usePathname();
  const router = useRouter();

  // const localTokenData = getLocalStorage(STORAGE_KEYS.ACCESS_TOKEN_KEY);
  const localUserData = getLocalStorage(STORAGE_KEYS.AUTH_KEY);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const pathsToPrefetch = [
      '/',
      '/ipo-details',
    ];
    pathsToPrefetch.forEach((path) => {
      router.prefetch(path);
    });
  }, [router]);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const debounceRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    if (!query) {
      setResults([]);
      setShowDropdown(false);
      return;
    }

    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setResults(data || []);
        setShowDropdown(true);
      } catch (err) {
        console.error("Search error:", err);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(debounceRef.current);
  }, [query]);

  useEffect(() => {
    if (mobileSearchOpen) inputRef.current?.focus();
  }, [mobileSearchOpen]);

  // Debounced autocomplete fetch
  useEffect(() => {
    if (!query) {
      setResults([]);
      setShowDropdown(false);
      return;
    }
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await getSearchIPO({ search: query })//fetch(`/api/search?q=${encodeURIComponent(query)}`);
        console.log('resres', res);
        if (res?.meta?.status_code == 200) {
          setResults(data || []);
        } else {
          setResults([]);
        }
        setShowDropdown(true);
      } catch (e) {
        console.error("search error:", e);
      } finally {
        setLoading(false);
      }
    }, 250);
    return () => clearTimeout(debounceRef.current);
  }, [query]);

  function handleSelect(item) {
    setQuery("");
    setShowDropdown(false);
    router.push(`/company/${item.slug}`);
  }

  function handleSubmit(e) {
    e?.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    setShowDropdown(false);
    setMobileSearchOpen(false);
  }

  function clearSearch() {
    setQuery("");
    inputRef.current?.focus();
  }

  return (

    // <header className="fixed w-full bg-base-50/50 dark:bg-base-950/50 backdrop-blur-xl z-10">
    // <header className="fixed w-full bg-[rgba(255,255,255,0.5)] dark:bg-[rgba(17,17,17,0.5)] backdrop-blur-xl z-10">
    //   <nav className={cn("relative h-14 container px-0 mx-auto border-b border-base flex flex-wrap justify-start items-center gap-4 lg:gap-8", className)}
    //     {...rest} >
    //     <Link href={logo.href}>
    //       <img
    //         src={logo.src}
    //         alt={logo.alt}
    //         className="h-10 w-auto dark:invert"
    //       />
    //     </Link>
    //     <div
    //       className={cn(
    //         "hidden md:block md:w-auto",
    //         open &&
    //         "block absolute top-14 m-2 right-0 w-2/3 border border-base dark:border-base-900 rounded-lg overflow-hidden bg-base-50 dark:bg-base-900 shadow-xl"
    //       )}
    //     >
    //       {pathname == '/' &&
    //         <ul className="font-medium flex flex-col gap-2 p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
    //           {links.map((link, index) => (
    //             <a
    //               key={index}
    //               href={link.href}
    //               className={open ? "text-sm font-normal text-base-600 dark:text-base-400 hover:bg-base-100 dark:hover:bg-base-950 py-3 px-4 rounded-md" : "text-sm font-normal text-base-600 dark:text-base-400 hover:text-base-800 dark:hover:text-base-300"}
    //               onClick={() => setOpen(false)}
    //             >
    //               {link.label}
    //             </a>
    //           ))}
    //         </ul>
    //       }
    //     </div>
    //     <div className="flex gap-2 ml-auto">
    //       <ThemeSwitch />
    //       {buttons.map((button, index) => (
    //         <Button key={index} {...button} />
    //       ))}
    //     </div>
    //     <Button
    //       icon={open ? "tabler:x" : "tabler:menu-2"}
    //       color="transparent"
    //       className="p-2 md:hidden"
    //       onClick={() => setOpen(!open)}
    //     />
    //   </nav>
    // </header>

    <header className="fixed w-full bg-[rgba(255,255,255,0.5)] dark:bg-[rgba(17,17,17,0.5)] backdrop-blur-xl z-10">
      <nav
        className={cn(
          "relative h-14 container px-0 mx-auto border-b border-base flex flex-wrap justify-start items-center gap-4 lg:gap-8",
          className
        )}
        {...rest}
      >
        <Link href={logo.href}>
          <img src={logo.src} alt={logo.alt} className="h-10 w-auto dark:invert" />
        </Link>

        <div
          className={cn(
            "hidden md:block md:w-auto",
            open &&
            "block absolute top-14 m-2 right-0 w-2/3 border border-base dark:border-base-900 rounded-lg overflow-hidden bg-base-50 dark:bg-base-900 shadow-xl"
          )}
        >
          {pathname == "/" && (
            <ul className="font-medium flex flex-col gap-2 p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={
                    open
                      ? "text-sm font-normal text-base-600 dark:text-base-400 hover:bg-base-100 dark:hover:bg-base-950 py-3 px-4 rounded-md"
                      : "text-sm font-normal text-base-600 dark:text-base-400 hover:text-base-800 dark:hover:text-base-300"
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </ul>
          )}
        </div>

        {/* -------- RIGHT SIDE: search + existing controls (ThemeSwitch + Buttons) -------- */}
        <div className="flex gap-2 ml-auto items-center">

          {/* --- Search (visible md+) : placed on the right inside existing area --- */}
          <div className="relative hidden md:block">
            <form onSubmit={handleSubmit} role="search" className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
                {/* magnifier icon */}
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
              </span>

              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => query && setShowDropdown(true)}
                placeholder="Search for a company"
                className="w-72 lg:w-80 px-9 py-2 rounded-md border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#135c33]"
                aria-label="Search for a company"
              />

              {query && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}

              {/* dropdown */}
              {showDropdown && (
                <ul className="absolute right-0 left-0 mt-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md shadow-lg max-h-64 overflow-auto z-50">
                  {loading ? (
                    <li className="px-4 py-2 text-sm text-neutral-400">Loading...</li>
                  ) : results.length ? (
                    results.map((r, i) => (
                      <li
                        key={i}
                        onClick={() => handleSelect(r)}
                        className="px-4 py-3 text-sm cursor-pointer hover:bg-emerald-100 dark:hover:bg-neutral-800"
                      >
                        {r.name}
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-2 text-sm text-neutral-500">No results for "{query}"</li>
                  )}

                  {query && (
                    <li
                      onClick={() => router.push(`/search?q=${encodeURIComponent(query)}`)}
                      className="px-4 py-3 text-sm text-emerald-700 hover:bg-emerald-50 cursor-pointer border-t"
                    >
                      Search everywhere: {query}
                    </li>
                  )}
                </ul>
              )}
            </form>
          </div>

          {/* Keep your existing ThemeSwitch and buttons exactly as before */}
          {/* <ThemeSwitch /> */}

        
        </div>

        <Button
          icon={open ? "tabler:x" : "tabler:menu-2"}
          color="transparent"
          className="p-2 md:hidden"
          onClick={() => setOpen(!open)}
        />
      </nav>
    </header>
  );
}
