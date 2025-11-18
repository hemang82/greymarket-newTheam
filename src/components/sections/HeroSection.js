/* eslint-disable @next/next/no-img-element */

import { Brands } from "../Brands";

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
    <section {...rest} className="homebanner border-b">
      <div className="container px-2 mx-auto">
        <div className="flex flex-col justify-center items-center mt-10 mb-5">
          <div className="flex flex-col justify-center items-center gap-4 text-center max-w-3xl mx-auto mt-12 pb-12">
            {/* <Badge {...badge} /> */}
            <h1 className="text-4xl font-display font-semibold ">
              {title}
            </h1>
            <p className="text-xl">{description}</p>
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
