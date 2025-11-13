import Head from "next/head";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { Header, HeroSection, TestimonialSection, FaqSection, Footer, PricingSection, LargeFeatureSection, CtaSection } from "@/components/sections";
import { header, faqs, testimonials, features, pricing, clients, footer } from "@/data";
import { getIPOs } from "@/lib/server/ServerApiCall";
import CustomPagination from "@/components/CustomPagination";

export default async function Home({ searchParams }) {

  const resolvedSearchParams = await searchParams;

  console.log('searchParams', resolvedSearchParams);

  const page = Number(resolvedSearchParams?.page) || 1;
  const pageSize = Number(resolvedSearchParams?.pageSize) || 10;

  const ipos = await getIPOs({ page: page, pageSize: pageSize });

  return (
    <>

      <Head>
        <title>Unlisted IPO</title>
      </Head>

      <Header
        logo={header.logo}
        links={header.links}
        buttons={header.buttons}
      />

      <HeroSection
        id="home"
        badge={{
          href: "#",
          icon: "tabler:arrow-right",
          label: "😻 Learn What's New",
        }}
        title="Live/Upcoming IPOs"
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
        clients={clients}
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
        title="Process to Buy Unlisted Shares"
        description="Recommended for those interested in dealing with unlisted shares."
        features={features}
      />

      <TestimonialSection
        id="testimonials"
        title="Unlisted Shares News"
        description="Discover the latest updates and analysis from India’s unlisted share market, covering company news, pre-IPO performance, and exclusive investment insights."
        badge={{
          leading: true,
          icon: "tabler:heart",
          label: "TESTIMONIALS",
        }}
        testimonials={testimonials}
        button={{
          icon: "tabler:brand-x",
          label: "Share Your Feedback on",
          href: "#",
          color: "white",
        }}
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