/* eslint-disable @next/next/no-img-element */
export function TestimonialCard(props) {
  return (
    // <div className="group bg-white dark:bg-base-950 rounded-xl p-6">
    //   <div className="flex items-center gap-2">
    //     <img
    //       src={props.avatar}
    //       alt={props.name}
    //       className="size-9 rounded-full ring-3 ring-primary-300 border-burple-500"
    //     />
    //     <div className="flex flex-col gap-1">
    //       <h2 className="text-base font-display text-title font-semibold leading-none">
    //         {props.name}
    //       </h2>
    //       <span className="text-xs leading-none text-muted">{props.title}</span>
    //     </div>
    //   </div>
    //   <p className="text-base-600 font-body mt-4">{props.testimonial}</p>
    // </div>

    <article className={["group bg-white dark:bg-base-950 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition cursor:pointer", "border hover:border-base dark:hover:border-base-800", props?.className,].join(" ")} >
      <a href={props?.news_url} aria-label={props?.title} target="_blank" rel="noopener noreferrer" className="block overflow-hidden">
        <img
          src={props?.news_image}
          alt={props?.title || "news image"}
          loading="lazy"
          className="w-full h-44 sm:h-52 object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          style={{ backgroundColor: "#f3f4f6" }}
        />
      </a>

      {/* Content */}
      <div className="p-5">
        {/* optional tiny tag */}
        {props?.tag ? (
          <div className="mb-2">
            <span className="text-xs inline-block px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 font-medium">
              {props?.tag}
            </span>
          </div>
        ) : null}

        {/* Title */}
        <h3 className="text-lg sm:text-[1.05rem] font-semibold text-gray-900 dark:text-gray-100 leading-snug mb-2">
          <a
            href={props?.news_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:underline line-clamp-2"
          >
            {props?.title}
          </a>
        </h3>

        {/* Meta row */}
        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
          {/* <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" className="opacity-80" aria-hidden>
              <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4z" />
              <path fill="currentColor" d="M12 14c-4.418 0-8 1.79-8 4v1h16v-1c0-2.21-3.582-4-8-4z" />
            </svg>
            <span>{props?.author}</span>
          </div> */}

          <span aria-hidden>•</span>

          <div>
            <time dateTime={props?.created_at}>{props?.created_at}</time>
          </div>
        </div>

        {/* Excerpt */}
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-5 line-clamp-3">
          {props?.short_description}
        </p>

        {/* CTA */}
        <div>
          <a
            href={props?.news_url}
            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700"
            aria-label={`Read more: ${props?.title}`}
            target="_blank" rel="noopener noreferrer"
          >
            Read More
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
              <path fill="currentColor" d="M10 17l5-5-5-5v10z" />
            </svg>
          </a>
        </div>
        
      </div>
    </article>
  );
}
