import "@/styles/custom.css";
import "@/styles/globals.css";

import { Inter, Syne } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "../components/sections/Header";
import { footer, header } from "@/data";
import { getIPOsServer } from "@/lib/server/ServerApiCall";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Constant from "@/app_config/Constant";
import { Toaster, toast } from "sonner";
import { Footer } from "@/components/sections";

// fonts
const display = Syne({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "Your Site Title",
  description: "Your site description",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable} flex min-h-screen flex-col font-body text-base-600 dark:text-base-500 bg-base-50 dark:bg-base-950`} >
        <GoogleOAuthProvider clientId={Constant?.GOOGLE_CLIENT_ID || ""} >
          <Toaster richColors position="top-right"
            toastOptions={{
              style: {
                fontSize: "1rem",
              }
            }} />
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Header logo={header.logo} links={header.links} buttons={header.buttons} />
            {children}
            <Footer
              id="footer"
              copyright={footer.copyright}
              logo={footer.logo}
              social={footer.social}
              links={footer.links}
            />
          </ThemeProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
