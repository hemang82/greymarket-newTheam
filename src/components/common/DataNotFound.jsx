"use client";

import Image from "next/image";

export default function DataNotFound({
    title = "No Data Found",
    description = "We couldn’t find any IPO records. Please try again later.",
    icon = <Image
        src="/question-mark.png"
        alt="IPO Icon"
        width={65}
        height={65}
        className="opacity-80"
    />
}) {
    return (
        <div className="w-full flex flex-col items-center justify-center text-center py-10 px-4 dark:bg-base-900">
            <div className="text-5xl mb-4 ">{icon}</div>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {title}
            </h3>

            <p className="text-gray-500 dark:text-gray-400 max-w-md">
                {description}
            </p>
        </div>
    );
}
