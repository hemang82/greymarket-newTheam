"use client";

import Image from 'next/image'
import React from 'react'
import { GoogleLogin } from "@react-oauth/google";

export default function page() {

    function base64UrlDecode(str) {
        // Convert base64url -> base64
        str = str.replace(/-/g, '+').replace(/_/g, '/');
        // Pad the string to be a multiple of 4
        while (str.length % 4) {
            str += '=';
        }
        try {
            return atob(str); // decode base64
        } catch (err) {
            console.error('base64 decode failed:', err);
            return null;
        }
    }

    function decodeJwt(token) {
        try {
            if (!token || typeof token !== 'string') return null;
            const parts = token.split('.');
            if (parts.length !== 3) {
                console.error('Invalid token format');
                return null;
            }

            const payload = parts[1];
            const decodedPayload = base64UrlDecode(payload);
            if (!decodedPayload) return null;

            return JSON.parse(decodedPayload);
        } catch (e) {
            console.error('decodeJwt error:', e);
            return null;
        }
    }

    const handleGoogleLogin = async (data) => {
        const updatedUserData = await decodeJwt(data.credential);
        console.log('updatedUserData', updatedUserData);

        // example: await signIn("google");
    };

    return (
        <>
            <main className="min-h-screen w-full bg-neutral-50 dark:bg-neutral-950 flex items-center justify-center px-4 py-10">
                <div className="w-full max-w-5xl">
                    {/* card */}
                    <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden bg-white/80 dark:bg-neutral-900/80 shadow-[0_10px_40px_rgba(0,0,0,.08)] ring-1 ring-black/5 backdrop-blur-md">

                        {/* brand / left */}
                        <section className="relative p-10 sm:p-12 text-white">
                            {/* dotted grid */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 opacity-20"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(circle at 1px 1px, rgba(255,255,255,.6) 1px, transparent 0)",
                                    backgroundSize: "22px 22px",
                                }}
                            />
                            {/* gradient overlay */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #0f4f33 0%, #115b3a 35%, #0f6b41 100%)",
                                }}
                            />

                            <div className="relative flex h-full flex-col items-center justify-center text-center gap-5">
                                <div className="space-y-3">
                                    <p className="tracking-[0.2em] text-lg  font-semibold text-white/95 sm:text-sm uppercase ">
                                        Welcome Back
                                    </p>
                                    <div className="mx-auto h-0.5 w-16 rounded-full bg-white/70" />
                                </div>

                                <div className="flex flex-col items-center gap-3">
                                    <Image
                                        src="/white_logo.png"
                                        alt="Grey Market IPO"
                                        width={100}
                                        height={150}
                                        className="object-contain"
                                    />
                                    {/* <h1 className="text-4xl font-extrabold tracking-tight">Grey</h1>
                                    <p className="text-lg font-semibold text-white/80 tracking-wide">
                                        MARKET IPO
                                    </p> */}
                                </div>

                                {/* <ul className="mt-2 space-y-2 text-white/90 text-sm sm:text-[15px]">
                                    <li className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                                        Real-time grey market insights
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                                        IPO price trends & analytics
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                                        Alerts, watchlists & more
                                    </li>
                                </ul> */}
                            </div>
                        </section>

                        {/* login / right */}
                        <section className="p-6 sm:p-10 bg-neutral-50/60 dark:bg-neutral-950/60">
                            <div className="mx-auto w-full max-w-md px-4">
                                <div className="rounded-2xl bg-white dark:bg-neutral-900 p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,.06)] ring-1 ring-neutral-200/70 dark:ring-white/10">
                                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#115b3a] dark:text-emerald-300">
                                        Login
                                    </h2>
                                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                                        Login to access your Grey Market account
                                    </p>

                                    <div className="mt-8">
                                        <button
                                            onClick={() => login()}
                                            className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-neutral-200 hover:shadow-sm transition
                       text-sm font-medium bg-white dark:bg-neutral-800 dark:border-neutral-700"
                                            aria-label="Continue with Google"
                                        >
                                            {/* Google icon (simple SVG) */}
                                            <span className="h-5 w-5 shrink-0">
                                                <svg viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                                                    <path fill="#4285F4" d="M533.5 278.4c0-18.7-1.5-37.7-4.7-55.9H272v105.7h147.2c-6.3 34-25.6 62.8-54.6 82.1v68h88.2c51.6-47.6 81.7-117.7 81.7-199.9z" />
                                                    <path fill="#34A853" d="M272 544.3c73.6 0 135.4-24.4 180.6-66.1l-88.2-68c-24.5 16.5-56 26.2-92.4 26.2-71 0-131.2-47.9-152.6-112.1h-90.4v70.5C83.5 484.1 168.5 544.3 272 544.3z" />
                                                    <path fill="#FBBC05" d="M119.4 326.3c-7-20.9-11-43.1-11-65.8s4-44.9 11-65.8V124.2h-90.4C6 179.9 0 224.2 0 260.5s6 80.6 28.9 136.3l90.5-70.5z" />
                                                    <path fill="#EA4335" d="M272 107.1c39.9 0 75.6 13.7 103.8 40.9l77.9-77.9C409.6 24.4 347.8 0 272 0 168.5 0 83.5 60.2 28.9 152.4l90.5 70.5C140.8 154.9 201 107.1 272 107.1z" />
                                                </svg>
                                            </span>

                                            {/* responsive label: hides text on tiny screens if you want */}
                                            <span className="truncate">
                                                <span className="hidden sm:inline">Continue with Google</span>
                                                <span className="inline sm:hidden">Sign in</span>
                                            </span>
                                        </button>
                                    </div>

                                    <p className="mt-6 text-[11px] leading-relaxed text-neutral-500">
                                        By continuing, you agree to our{" "}
                                        <a className="underline hover:text-neutral-700" href="/terms">Terms</a>{" "}
                                        and{" "}
                                        <a className="underline hover:text-neutral-700" href="/privacy">Privacy Policy</a>.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
}
