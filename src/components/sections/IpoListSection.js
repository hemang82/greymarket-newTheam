
export function IpoListSection({ title, description, buttons, faqs, pricing, ...rest }) {
  // console.log("FaqSection -> faqs", buttons);
  return (
    <section className="bg-base-100 dark:bg-base-900 pt-24" {...rest}>
      <div className="container px-2 mx-auto ">
        <div className="grid grid-cols-12 lg:gap-20 bg-white dark:bg-base-950 p-2 sm:p-2 md:p-8 rounded-2xl">
          <h1>Test</h1>
          {/* <div className="col-span-12 lg:col-span-5">
            <SectionHeading
              align="left"
              title={title}
              description={description}
              buttons={buttons}
            />
          </div>
          <div className="col-span-12 lg:col-span-7">
            <Accordion items={faqs} />
          </div> */}
        </div>
      </div>
    </section>
  );
}
