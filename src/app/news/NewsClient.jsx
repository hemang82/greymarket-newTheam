"use client"

import { TestimonialSection } from "@/components/sections";


export default function NewsClient({ newsList, pageSize, page }) {

    return (<>
        <div className="my-7">
        </div>
        <TestimonialSection
            id="testimonials"
            title="IPO News & Market Updates"
            description="Discover the latest updates and analysis from India’s unlisted share market, covering company news, pre-IPO performance, and exclusive investment insights."
            // badge={{
            //     leading: true,
            //     icon: "tabler:heart",
            //     label: "TESTIMONIALS",
            // }}
            button={{
                // icon: "tabler:brand-x",
                label: "Read All",
                href: "/news",
                color: "white",
            }}
            newsList={newsList}
            paginationShow={true}
            pageSize={pageSize}
            page={page}
        />
    </>)
}