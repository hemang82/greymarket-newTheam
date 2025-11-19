/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Brands = ({ clients, className, ...rest }) => {
  return (

    //  <div className="marquee-simple">

    //   {/* <div
    //     className={cn(
    //       "w-full flex justify-center items-center gap-px marquee-track",
    //       className
    //     )}
    //     {...rest}
    //   > */}
    //   <div
    //     className={cn(
    //       "marquee-track",
    //       className
    //     )}
    //     {...rest}
    //   >
    //     <div className="w-full flex justify-center items-center gap-5 ">


    //     {clients.map((client, index) => (
    //       <img
    //         key={index}
    //         src={client.src}
    //         alt={client.name}
    //         className="h-7 filter grayscale filter-none m-4 md:m-8"
    //       />
    //     ))}
    //             </div>
    //   </div>
    //   </div>  
    
    <div className="marquee-container max-w-screen-xl">
      <div className="marquee-track">
        <div className="marquee-group">
          {clients.map((client, index) => (
            <div className="w-36 h-14 rounded-md border border-base p-1 bg-white  overflow-hidden shrink-0 flex items-center justify-center" key={`dup-${index}`}>
              <Image
                src={client.src}
                alt={client.name}
                width={120}
                height={100}
                className="object-contain"
                unoptimized
              />
            </div>
          ))}
          {/* <img
              key={`dup-${index}`}
              src={client.src}
              alt={client.name}
              className="h-7 filter m-4 md:m-8"
            /> */}
          {/* DUPLICATE LIST FOR SEAMLESS LOOP */}
          {clients.map((client, index) => (

            <div className="w-36 h-14 rounded-md border border-base bg-white p-1 overflow-hidden shrink-0 flex items-center justify-center" key={`dup-${index}`}>
              <Image
                src={client.src}
                alt={client.name}
                width={120}
                height={100}
                className="object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </div>


  );
};
