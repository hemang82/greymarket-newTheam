import React from "react";
import { BookOpen, AlertTriangle, TrendingUp, HelpCircle } from "lucide-react";

export default function GmpContentSection() {
  return (
    <section className="w-full my-16 space-y-12">
      {/* Educational Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1: What is GMP */}
        <div className="p-6 sm:p-8 rounded-3xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-900 shadow-sm space-y-4">
          <div className="size-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-[#135c33] dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center">
            <BookOpen className="size-5" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-base-900 dark:text-base-100 font-display">
            What is IPO Grey Market Premium (GMP)?
          </h3>
          <p className="text-xs sm:text-sm text-base-600 dark:text-base-400 leading-relaxed">
            The <strong>IPO Grey Market Premium (GMP)</strong> represents the unofficial price premium at which shares of an upcoming Initial Public Offering (IPO) are bid and offered before they officially list on the stock exchanges (NSE and BSE).
          </p>
          <p className="text-xs sm:text-sm text-base-600 dark:text-base-400 leading-relaxed">
            GMP is widely considered a leading indicator of investor sentiment and anticipated demand. If an IPO with an issue price of ₹100 is trading with a GMP of ₹30, buyers in the unofficial market are expecting the stock to open around ₹130 on listing day.
          </p>
        </div>

        {/* Card 2: How is Listing Price Calculated */}
        <div className="p-6 sm:p-8 rounded-3xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-900 shadow-sm space-y-4">
          <div className="size-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-[#135c33] dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center">
            <TrendingUp className="size-5" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-base-900 dark:text-base-100 font-display">
            How to Calculate IPO Listing Gain & Profit
          </h3>
          <p className="text-xs sm:text-sm text-base-600 dark:text-base-400 leading-relaxed">
            Estimating your listing returns using GMP involves three simple financial formulas:
          </p>
          <div className="space-y-2 p-4 rounded-2xl bg-base-100 dark:bg-base-950 border border-base-200 dark:border-base-800 text-xs font-mono text-base-800 dark:text-base-200">
            <div>• <strong>Est. Listing Price</strong> = Issue Price (Cap) + Live GMP</div>
            <div>• <strong>Est. Listing Gain (%)</strong> = (GMP ÷ Issue Price) × 100</div>
            <div>• <strong>Est. Profit Per Lot</strong> = GMP × Lot Size</div>
          </div>
          <p className="text-xs text-base-500 dark:text-base-400">
            Use our interactive calculator above to simulate multiple lots and HNI bidding brackets in one tap.
          </p>
        </div>
      </div>

      {/* Kostak vs Sauda vs GMP Info Banner */}
      <div className="p-6 sm:p-8 rounded-3xl border border-base-200 dark:border-base-800 bg-base-100 dark:bg-base-950 space-y-6">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-[#135c33] dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center">
            <HelpCircle className="size-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-base-900 dark:text-base-100 font-display">
              Kostak Rate vs Subject to Sauda vs GMP
            </h3>
            <p className="text-xs text-base-500 dark:text-base-400">
              Understanding the key terminology used in India&apos;s IPO Grey Market.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-2xl bg-white dark:bg-base-900 border border-base-200 dark:border-base-800 space-y-2">
            <h4 className="font-bold text-base-900 dark:text-base-100">1. Grey Market Premium (GMP)</h4>
            <p className="text-base-600 dark:text-base-400 text-xs">
              The expected premium per share above the issue price. Realized on listing day upon selling allotted shares.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-base-900 border border-base-200 dark:border-base-800 space-y-2">
            <h4 className="font-bold text-base-900 dark:text-base-100">2. Kostak Rate</h4>
            <p className="text-base-600 dark:text-base-400 text-xs">
              A fixed amount paid to an IPO applicant for their application form, regardless of whether shares are allotted.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-base-900 border border-base-200 dark:border-base-800 space-y-2">
            <h4 className="font-bold text-base-900 dark:text-base-100">3. Subject to Sauda</h4>
            <p className="text-base-600 dark:text-base-400 text-xs">
              A pre-agreed profit amount paid to the applicant only if allotment is successfully confirmed.
            </p>
          </div>
        </div>
      </div>

      {/* SEBI Compliance & Risk Notice */}
      <div className="p-6 rounded-3xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/60 dark:bg-amber-950/20 flex items-start gap-4">
        <div className="size-10 rounded-xl bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 flex items-center justify-center shrink-0">
          <AlertTriangle className="size-5" />
        </div>
        <div className="space-y-1.5 text-xs text-amber-900/90 dark:text-amber-200/90">
          <h4 className="font-bold text-sm">Regulatory Notice & Disclaimer</h4>
          <p className="leading-relaxed">
            The grey market is an unofficial and unregulated market. <strong>Grey Market Premium (GMP) data published on this website is for informational and educational purposes only.</strong> We do not facilitate grey market trading, nor do we advise buying or selling IPO shares based purely on GMP quotes. Investors must review the company’s Draft Red Herring Prospectus (DRHP/RHP) and consult a SEBI-registered financial advisor before investing.
          </p>
        </div>
      </div>
    </section>
  );
}
