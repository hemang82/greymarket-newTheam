
import React, { useEffect } from "react";
import { SectionHeading } from "#/SectionHeading";
import { Tabs } from "#/base";
import { PricingCard } from "#/cards";
import { ipoListApi } from "@/api";
import { useIPOStore } from "@/stores/useAppStore";

export function PricingSection({ title, description, badge, pricing, ...rest }) {
  // const [ipoListData, setIpoListData] = React.useState([]);
  const ipoListData = useIPOStore((s) => s.ipos);

  // console.log('Zustend List ipos', ipoListData);

  // useEffect(() => {
  //   ipoList().then((response) => {
  //     console.log('response', response);
  //     if (response?.meta?.status_code == 200) {
  //       setIpoListData(response?.data?.results)
  //     } else {
  //       setIpoListData([])
  //     }
  //   })
  // }, [])

  // console.log('ipoListData', ipoListData);

  return (
    <section className="bg-base-100 dark:bg-base-900 py-10" {...rest}>
      <div className="mx-auto max-w-screen-xl px-2 sm:px-3 md:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {ipoListData?.results?.length > 0 && ipoListData?.results?.map((p, i) => (<>
            <PricingCard key={i} ipoListData={p} />
          </>))}
        </div>
      </div>
    </section>
  );
}