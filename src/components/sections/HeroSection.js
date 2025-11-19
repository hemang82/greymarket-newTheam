/* eslint-disable @next/next/no-img-element */

import { Brands } from "../Brands";
import { SectionHeading } from "../SectionHeading";

export function HeroSection({
  badge,
  title,
  description,
  buttons,
  image,
  clientsLabel,
  clients,
  ...rest
}) {
  return (
    // min-height-screen
    <section {...rest} className="homebanner ">
      <div className="container px-2 mx-auto ">
        <div className="flex flex-col justify-center items-center my-5 ">
          <div className="flex flex-col justify-center items-center gap-4 text-center max-w-3xl mx-auto mt-20 mb-5">
            {/* <Badge {...badge} /> */}
            <SectionHeading align="center" title={title} description={description} badge={badge} />
            {/* {buttons.length > 0 && (
              <div className="flex justify-center items-center gap-4 mt-8">
                {buttons.map((button, index) => (
                  <Button key={index} {...button} />
                ))}
              </div>
            )} */}
          </div>
          <div>
            {/* <img
              src={image.src}
              alt={image.alt}
              className={cn("w-full h-auto", image.className)}
            /> */}
          </div>
          {/* <div className="text-sm">{clientsLabel}</div> */}
          <Brands clients={clients} />
        </div>
      </div>
    </section>
  );
}
