import { cn } from "@/lib/utils";

// export const FeatureCard = ({ title, description, icon, className, iconClass }) => {
//   return (
//     <div
//       className={cn(
//         "flex flex-row justify-start items-start gap-4 p-6 rounded-lg",
//         className
//       )}
//     >
//       <Icon
//         icon={icon}
//         className={cn(
//           "size-12 rounded-full p-2 text-primary-500 bg-primary-100 dark:bg-primary-950",
//           iconClass
//         )}
//       />
//       <div>
//         <h6 className="text-md text-title font-title font-medium">{title}</h6>
//         <p className="text-sm text-muted">{description}</p>
//       </div>
//     </div>
//   );
// };

export function FeatureCard({ title, description, className, iconClass, step }) {
  return (
    <div className={cn("flex flex-col items-center text-center gap-3 p-6 rounded-lg", className)}>
      {/* green number badge */}
      <div
        className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center",
          "bg-primary-100 text-white font-semibold",
          iconClass
        )}
        aria-label={`Step ${step}`}
      >
        {step}
      </div>

      <h6 className="text-xl font-title font-semibold text-title">{title}</h6>
      <p className="text-md  max-w-[28rem]">{description}</p>
    </div>
  );
}
