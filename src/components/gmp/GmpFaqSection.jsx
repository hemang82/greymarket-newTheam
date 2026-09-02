"use client";

import React from "react";
import * as RAccordion from "@radix-ui/react-accordion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { gmpFaqs } from "./gmpFaqData";

export default function GmpFaqSection() {
  return (
    <section className="w-full my-16 space-y-6">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#135c33] text-white">
          <HelpCircle className="size-3.5" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-base-900 dark:text-base-100 font-display">
          IPO GMP & Grey Market FAQs
        </h2>
        <p className="text-xs sm:text-sm text-base-500 dark:text-base-400">
          Everything you need to know about understanding and tracking IPO Grey Market Premium.
        </p>
      </div>

      <div className="max-w-3xl mx-auto rounded-3xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-900 p-4 sm:p-6 shadow-sm">
        <RAccordion.Root type="single" collapsible className="w-full divide-y divide-base-200 dark:divide-base-800">
          {gmpFaqs.map((faq, index) => (
            <RAccordion.Item key={index} value={`item-${index}`} className="py-2 first:pt-0 last:pb-0">
              <RAccordion.Header>
                <RAccordion.Trigger className="group flex w-full items-center justify-between py-3 text-left text-sm sm:text-base font-semibold text-base-900 dark:text-base-100 hover:text-emerald-700 dark:hover:text-emerald-400 transition cursor-pointer outline-none">
                  <span>{faq.question}</span>
                  <ChevronDown className="size-4 text-base-400 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </RAccordion.Trigger>
              </RAccordion.Header>
              <RAccordion.Content className="text-xs sm:text-sm text-base-600 dark:text-base-400 pb-4 leading-relaxed data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                {faq.answer}
              </RAccordion.Content>
            </RAccordion.Item>
          ))}
        </RAccordion.Root>
      </div>
    </section>
  );
}
