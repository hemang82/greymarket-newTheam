/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { SocialLinks } from "../SocialLinks";
import { cn } from "@/lib/utils";
import React from "react";

export function Footer({ copyright, logo, links, social, ...rest }) {
  return (
    <footer className="bg-[#ffffff] dark:bg-base-900 pt-6" {...rest}>
      <div className="container px-4 mx-auto">
        <div
          className={cn(
            "flex flex-col md:flex-row justify-between items-center gap-4 py-6"
          )}
        >
          <img
            src="/logo.png"
            alt="logo"
            className="h-10 w-auto   dark:invert"
          />
          <div className="flex flex-row gap-2 text-sm">
            {links.map((link, index) => (
              <React.Fragment key={index}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
                {index < links.length - 1 && <span>|</span>}
              </React.Fragment>
            ))}
          </div>

          {/* <SocialLinks links={social} /> */}
        </div>

        <div className="border-t border-base py-4 text-center flex justify-between items-center flex-wrap gap-2">
          <p className="text-sm">&copy; {copyright}</p>

          <p className="text-sm">
            <a href="mailto:info@greymarketipo.com" className="hover:underline">
              info@greymarketipo.com
            </a>{' '}
            |{' '}
            <a href="tel:+919529327230" className="hover:underline">
              +91 95293 27230
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
