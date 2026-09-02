"use client";

import React from "react";
import { BookOpen, CheckCircle, TrendingUp, HelpCircle, ShieldCheck } from "lucide-react";

export default function ListedIpoContentSection() {
  return (
    <section className="w-full my-12 space-y-8 bg-white dark:bg-base-900 border border-base-200 dark:border-base-800 rounded-3xl p-6 sm:p-10 shadow-sm">
      {/* Title */}
      <div className="space-y-2 border-b border-base-200 dark:border-base-800 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
          <BookOpen className="size-3.5" />
          <span>Comprehensive Guide</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-base-900 dark:text-base-100 font-display">
          Understanding Listed IPOs & Post-Listing Performance
        </h2>
        <p className="text-sm text-base-600 dark:text-base-400">
          Track the live performance of recently listed Mainboard and SME IPOs on NSE and BSE.
        </p>
      </div>

      {/* Grid of Key Concepts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 1 */}
        <div className="space-y-2.5 p-5 rounded-2xl bg-base-50 dark:bg-base-950/50 border border-base-100 dark:border-base-800">
          <div className="flex items-center gap-2 text-[#135c33] dark:text-emerald-400 font-bold text-base">
            <TrendingUp className="size-4" />
            <h3>Issue Price vs. Listing Price</h3>
          </div>
          <p className="text-xs sm:text-sm text-base-600 dark:text-base-400 leading-relaxed">
            The <strong>Issue Price</strong> is the price at which investors applied and were allotted shares during the IPO subscription. The <strong>Listing Price</strong> is the opening price discovered during the listing day pre-open auction. The difference between the two determines whether the IPO listed at a <strong>Premium (gain)</strong> or at a <strong>Discount (loss)</strong>.
          </p>
        </div>

        {/* 2 */}
        <div className="space-y-2.5 p-5 rounded-2xl bg-base-50 dark:bg-base-950/50 border border-base-100 dark:border-base-800">
          <div className="flex items-center gap-2 text-[#135c33] dark:text-emerald-400 font-bold text-base">
            <CheckCircle className="size-4" />
            <h3>Pre-Open Auction Session</h3>
          </div>
          <p className="text-xs sm:text-sm text-base-600 dark:text-base-400 leading-relaxed">
            On the listing day, stock exchanges conduct a special pre-open call auction between 9:00 AM and 9:45 AM for Mainboard IPOs. During this window, buyers and sellers place orders to discover the fair equilibrium price before continuous normal trading begins at 10:00 AM.
          </p>
        </div>

        {/* 3 */}
        <div className="space-y-2.5 p-5 rounded-2xl bg-base-50 dark:bg-base-950/50 border border-base-100 dark:border-base-800">
          <div className="flex items-center gap-2 text-[#135c33] dark:text-emerald-400 font-bold text-base">
            <ShieldCheck className="size-4" />
            <h3>Mainboard vs. SME Listing Rules</h3>
          </div>
          <p className="text-xs sm:text-sm text-base-600 dark:text-base-400 leading-relaxed">
            Mainboard IPOs trade with no circuit limits during the first 45 minutes of pre-open and are traded in single share quantities. SME IPOs are traded in fixed lot sizes (e.g. 1,000 to 2,000 shares) and typically have a standard 90% listing day circuit band limit on NSE Emerge and BSE SME.
          </p>
        </div>

        {/* 4 */}
        <div className="space-y-2.5 p-5 rounded-2xl bg-base-50 dark:bg-base-950/50 border border-base-100 dark:border-base-800">
          <div className="flex items-center gap-2 text-[#135c33] dark:text-emerald-400 font-bold text-base">
            <HelpCircle className="size-4" />
            <h3>Taxation on Listing Gains</h3>
          </div>
          <p className="text-xs sm:text-sm text-base-600 dark:text-base-400 leading-relaxed">
            Profit booked by selling IPO shares on the listing day or anytime within 12 months is treated as <strong>Short-Term Capital Gain (STCG)</strong> and is taxed at 20% under Section 111A. Holding the stock for more than 12 months qualifies it for <strong>Long-Term Capital Gain (LTCG)</strong> taxed at 12.5% on profits exceeding ₹1.25 Lakh per financial year.
          </p>
        </div>
      </div>
    </section>
  );
}
