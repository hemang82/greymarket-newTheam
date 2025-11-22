import { SectionHeading } from "#/SectionHeading";
import { FeatureCard } from "../cards/FeatureCard";

// export function FeatureSection({ title, description, badge, features, ...rest }) {
//   return (
//     <section className={`bg-base-100 dark:bg-base-900 pt-24`} {...rest}>
//       <div className="container px-4 mx-auto">
//         <SectionHeading
//           align="center"
//           title={title}
//           description={description}
//           badge={badge}
//         />
//         {features?.length > 0 &&
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
//             {features.map((feature, index) => (
//               <FeatureCard key={index} {...feature} />
//             ))}
//           </div>
//         }
//       </div>
//     </section>
//   );
// }

export function FeatureSection({ title, description, badge, features = [], ...rest }) {
  return (
    <section className="bg-[#ffffff] dark:bg-base-900 py-16" {...rest}>
      <div className="container px-4 mx-auto">
        <SectionHeading align="center" title={title} description={description} badge={badge} />

        {features.length > 0 && (
          <div className="relative my-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
            {features.map((feature, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  step={index + 1}   // 1, 2, 3
                />

                {/* arrow between steps (only on md+ and not after the last card) */}
                {index < features.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-10 -translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="44"
                      height="44"
                      className="text-primary-100"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12h12M13 6l6 6-6 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}