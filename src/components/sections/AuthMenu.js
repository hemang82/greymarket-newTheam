"use client";

import { useEffect, useState } from "react";
import { getLocalStorage, removeLocalStorage, TOAST_SUCCESS } from "@/app_config/CommonFunction";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "../base/Button";
import { STORAGE_KEYS } from "@/app_config/CommonVariable";

export default function AuthMenu() {

  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = getLocalStorage(STORAGE_KEYS?.LOGIN_KEY);
    const user = getLocalStorage(STORAGE_KEYS?.AUTH_KEY); // you can store username/email here
    setIsLogin(!!token);
    setUsername(user?.user?.name || "User");
  }, []);

  if (!isLogin) {
    return (
      <Button
        key="signin"
        label="Sign In"
        href="/auth/login"
        color="dark"
        size="small"
      />
    );
  }

  const handleLogout = () => {
    // remove specific keys only
    removeLocalStorage();
    setIsLogin(false);

    // client-side navigation — no full reload
    // TOAST_SUCCESS("Logged out successfully");
    router.push("/");
    // DO NOT call router.refresh() here (removes client-only instantness)
  };

  return (
    <div className="relative group profile_hover">
      {/* Button that triggers dropdown */}
      <button className="px-3 py-2 text-sm font-medium flex items-center gap-1">
        👤 {username} ▾
      </button>

      {/* Dropdown menu */}
      <div className="absolute profile_hover_list right-0 mt-2 w-48 bg-white shadow-lg rounded-md border hidden group-hover:block z-[1000]">

        {/* <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">
          Profile
        </Link> */}

        {/* <Link href="/alerts" className="block px-4 py-2 hover:bg-gray-100">
          Alerts
        </Link>

        <Link href="/notebook" className="block px-4 py-2 hover:bg-gray-100">
          Notebook
        </Link>

        <Link href="/upgrade" className="block px-4 py-2 hover:bg-gray-100">
          Upgrade
        </Link>

        <Link href="/screener-ai" className="block px-4 py-2 hover:bg-gray-100">
          Screener AI
        </Link> */}

        <button
          onClick={handleLogout}
          className="block w-full text-left px-4 py-2 hover:bg-red-50 text-red-600 border-t"
        >
          Logout
        </button>

      </div>
    </div>
  );

}
