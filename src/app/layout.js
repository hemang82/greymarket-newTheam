import "@/styles/custom.css";
import "@/styles/globals.css";

import { Inter, Syne } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@radix-ui/react-accordion";
import { header } from "@/data";
import { getIPOs } from "@/lib/server/ServerApiCall";

// fonts
const display = Syne({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "Your Site Title",
  description: "Your site description",
};

export default async function RootLayout({ children }) {

  const ipos = await getIPOs();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable} flex min-h-screen flex-col font-body text-base-600 dark:text-base-500 bg-base-50 dark:bg-base-950`} >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
