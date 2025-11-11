"use client"
import { PricingCard } from "#/cards";
import { useIPOStore } from "@/stores/useAppStore";
import React from "react";

export function PricingSection({ title, description, badge, pricing, ...rest }) {

  const ipoListData = useIPOStore((s) => s.ipos);


  return (
    <section className="bg-base-100 dark:bg-base-900 py-10" {...rest}>
      <div className="mx-auto max-w-screen-xl px-2 sm:px-3 md:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {ipoListData?.results?.length > 0 && ipoListData?.results?.map((p, i) => (
              <PricingCard  ipoListData={p} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}