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
import Head from "next/head";

// fonts
const display = Syne({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

// export const metadata = {
//   title: "Your Site Title",
//   description: "Your site description",
// };

export const metadata = {
  title: `IPO Grey Market Premium (GMP) Today – Live & Upcoming IPO GMP Updates | ${process.env.SITE_NAME}`,
  description: "Track real-time IPO Grey Market Premium (GMP) for live and upcoming IPOs. Stay updated with the latest unofficial premium, estimated listing gains, price trends, and market sentiment for ongoing and future IPOs.",
  keywords: [
    'IPO Grey Market',
    'GMP Today',
    'Upcoming IPO GMP',
    'Live IPO GMP',
    'IPO Grey Market Premium',
    'unofficial GMP',
    'IPO listing gain estimate',
    'latest IPO GMP',
    'new IPO GMP',
    process.env.SITE_NAME || 'GreymarketIPO',
  ],
  alternates: {
    canonical: `${process.env.SITE_URL}`,
  },

  openGraph: {
    title: `IPO Grey Market Premium (GMP) Today – Live & Upcoming IPO GMP | ${process.env.SITE_NAME}`,
    description:
      "Get accurate IPO Grey Market Premium (GMP) for live and upcoming IPOs. Check market trends, demand sentiment, and expected listing premiums.",
    url: `${process.env.SITE_URL}`,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${process.env.SITE_NAME} – Live & Upcoming IPO GMP`,
      },
    ],
  },
  icons: { icon: '/favicons.svg' },
  twitter: {
    card: 'summary_large_image',
    title: `Live & Upcoming IPO GMP – IPO Grey Market Premium Today | ${process.env.SITE_NAME}`,
    description: "Check real-time IPO Grey Market Premium (GMP) for ongoing and upcoming IPOs. Reliable and fast GMP updates.",
    images: ['/og-image.png'],
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <Head>
        <link rel="icon" href="/logo-mark.png" />
      </Head> */}
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
