"use client";

import Image from 'next/image'
import React from 'react'
import { GoogleLogin } from "@react-oauth/google";
import { login } from '@/api';
import { CODES } from '@/app_config/CommonVariable';
import { loginRedirection, TOAST_ERROR, TOAST_SUCCESS } from '@/app_config/CommonFunction';
import { useRouter } from 'next/navigation';

export default function page() {

    const router = useRouter();

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
        let datas = {
            email: updatedUserData?.email,
            register_type: 'google',
            login_domain: 'check-allotment'
        }
        let response = await login(datas);
        if (response?.meta?.status_code == CODES?.SUCCESS) {
            loginRedirection({
                token: updatedUserData?.aud,
                user: {
                    name: updatedUserData?.given_name,
                    email: updatedUserData?.email,
                    picture: updatedUserData?.picture
                },
                role: 'user'
            })
            router.push('/');
            // TOAST_SUCCESS("Login Successful");
        } else {
            TOAST_ERROR("Login Failed");
        }
    };

    return (
        <>
            <main className="min-h-[calc(100vh-165px)] w-full bg-neutral-50 dark:bg-neutral-950 flex items-center justify-center px-4 py-10">

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
                                    backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,.6) 1px, transparent 0)",
                                    backgroundSize: "22px 22px",
                                }}
                            />

                            {/* gradient overlay */}
                            <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0f4f33 0%, #115b3a 35%, #0f6b41 100%)" }} />

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
                            <div className="mx-auto w-full max-w-md">
                                <div className="rounded-2xl bg-white dark:bg-neutral-900 p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,.06)] ring-1 ring-neutral-200/70 dark:ring-white/10">
                                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#115b3a] dark:text-emerald-300">
                                        Login
                                    </h2>
                                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                                        Login to access your Grey Market account
                                    </p>

                                    {/* Google only */}
                                    {/* <button
                                        // onClick={handleGoogle}
                                        type="button"
                                        className="mt-8 w-full inline-flex items-center justify-center gap-3 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3 text-sm font-medium shadow-sm hover:shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:opacity-60"
                                    > */}
                                    {/* <Image
                                            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                                            alt="Google"
                                            width={18}
                                            height={18}
                                            className="shrink-0"
                                        />
                                    Continue with Google */}

                                    {/* </button> */}
                                    <div className='mt-8 goole_login'>
                                        <GoogleLogin
                                            onSuccess={handleGoogleLogin}
                                            // onError={handleGoogleError}
                                            size="large"  // medium | large
                                            text="continue_with" // customize button text
                                            shape="circle"  // rect | pill | circle
                                            width="370"
                                        />
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