import Head from "next/head";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { Header, HeroSection, TestimonialSection, FaqSection, Footer, PricingSection, LargeFeatureSection, CtaSection } from "@/components/sections";
import { header, faqs, testimonials, features, pricing, clients, footer } from "@/data";
import { getIPOsServer, getNewsListServer } from "@/lib/server/ServerApiCall";
import CustomPagination from "@/components/CustomPagination";

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
  twitter: {
    card: 'summary_large_image',
    title: `Live & Upcoming IPO GMP – IPO Grey Market Premium Today | ${process.env.SITE_NAME}`,
    description: "Check real-time IPO Grey Market Premium (GMP) for ongoing and upcoming IPOs. Reliable and fast GMP updates.",
    images: ['/og-image.png'],
  },
};

export default async function Home({ searchParams }) {

  const resolvedSearchParams = await searchParams;

  const page = Number(resolvedSearchParams?.page) || 1;
  const pageSize = Number(resolvedSearchParams?.pageSize) || 20;

  const ipos = await getIPOsServer({ page: page, pageSize: pageSize });

  const newsList = await getNewsListServer({ page: 1, pageSize: 4 })

  return (
    <>
      
      {/* <Header
        logo={header.logo}
        links={header.links}
        buttons={header.buttons}
      /> */}

      <HeroSection
        id="home"
        badge={{
          href: "#",
          icon: "tabler:arrow-right",
          label: "😻 Learn What's New",
        }}
        title="Live-Hello/Upcoming IPOs"
        description="Explore all live and upcoming IPOs with detailed insights - issue price, dates, lot size, and Grey Market Premium (GMP) updates."
        buttons={[
          {
            href: "#",
            label: "Start Free Trail",
            color: "dark",
          },
          {
            href: "#",
            label: "Learn More",
            color: "transparent",
            variant: "link",
            icon: "tabler:arrow-right",
          },
        ]}
        image={{
          // src: "./tablet-mockup.png",
          alt: "Product Screenshot on Tablet",
          className: "w-full h-auto",
        }}
        clientsLabel="Trusted by 100+ Brands"
        clients={ipos?.results?.length > 0 ? ipos.results.slice(0, 8).map((ipo, index) => ({
          src: ipo.ipo_image,
          name: ipo.company_name,
          symbol: ipo.symbol,
        }))
          : []}
      />

      {/* <FeatureSection
        id="features"
        title="Buy Or Sell Unlisted Shares"
        description="You can easily find list of unlisted shares which are available for trading, buy and sell Unlisted Shares at best prices."
        features={[]}
      /> */}
      {/* <div className="container"> */}

      <PricingSection
        id="pricing"
        title="Pricing for Everyone"
        description="Choose a plan that works for you. All plans include a 7-day free trial."
        badge={{
          leading: true,
          icon: "tabler:credit-card",
          label: "Plans",
        }}
        pricing={pricing}
        page={page}
        pageSize={pageSize}
        ipoData={ipos}
      />

      {/* </div> */}
      {/* <IpoListSection
        id="faqs"
        title="Frequently Asked Questions"
        description="Here are some of our most frequently asked questions. If you have a question that isn't answered here, please feel free to contact us."
        buttons={[
          {
            label: "Contact Support",
            href: "#",
            color: "primary",
            variant: "link",
            icon: "tabler:arrow-right",
          },
        ]}
        faqs={faqs}
      /> */}

      {/* <LargeFeatureSection
        title="Stay on top of your business"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique"
        list={features.slice(0, 3)}
        image={{
          src: "./phone-mockup.png",
          alt: "Image",
          className:
            "w-full aspect-square object-contain rotate-6 hover:rotate-0 duration-300 ease-in-out",
        }}
      /> */}

      {/* <LargeFeatureSection
        reverse={true}
        title="Stay on top of your business"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique"
        list={features.slice(0, 3)}
        image={{
          src: "./phone-mockup.png",
          alt: "Image",
          className:
            "w-full aspect-square object-contain -rotate-6 hover:rotate-0 duration-300 ease-in-out",
        }}
      /> */}

      <FeatureSection
        id="features"
        title="Process to Buy"
        description="Recommended for those interested in dealing with unlisted shares."
        features={features}
      />

      <TestimonialSection
        id="testimonials"
        title="IPO News & Market Updates"
        description="Discover the latest updates and analysis from India’s unlisted share market, covering company news, pre-IPO performance, and exclusive investment insights."
        badge={{
          leading: true,
          icon: "tabler:heart",
          label: "TESTIMONIALS",
        }}
        testimonials={testimonials}
        button={{
          // icon: "tabler:brand-x",
          label: "Read All",
          href: "/news",
          color: "white",
        }}
        newsList={newsList}
        paginationShow={false}
      />

      <FaqSection
        id="faqs"
        title="Frequently Asked Questions"
        description="Here are some of our most frequently asked questions. If you have a question that isn't answered here, please feel free to contact us."
        buttons={[
          {
            label: "Contact Support",
            href: "#",
            color: "primary",
            variant: "link",
            icon: "tabler:arrow-right",
          },
        ]}
        faqs={faqs}
      />

      {/* <CtaSection
        title="Ready to get started?"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique"
        buttons={[{ label: "Start for Free", href: "#", color: "dark" }]}
      /> */}
    </>
  );
}