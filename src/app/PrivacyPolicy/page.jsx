
export default function PrivacyPolicy({
    title = "Privacy Policy",
    lastUpdated = "Jun 4, 2025",
    content = null,
    contact = {
        emailBiz: "info@greymarketipo.com",
        emailSupport: "support@gmail.com",
    },
}) {
    // fallback default content (simple, readable)
    const defaultContent = [
        {
            id: "info",
            title: "1. Information We Collect",
            html: `<p> We collect information to provide and improve our services. This includes personal information such as your name and email, as well as non-personal data like browser type and pages visited.</p> `,
        },
        {
            id: "use",
            title: "2. How We Use Your Information",
            // html: `<ul>
            //     <li>To provide and improve our services (IPO data, calculators, tools).</li>
            //     <li>To respond to your inquiries and support requests.</li>
            //     <li>To send updates, educational content, or promotional messages (if you subscribe).</li>
            //     <li>To analyze site performance and improve user experience.</li>
            //  </ul>`,
            html: `<p> We use your information to operate our services, personalize your experience, improve performance, and ensure security.</p>`
        },
        {
            id: "cookies",
            title: "3. Cookies and Tracking",
            html: `<p>We use cookies to improve your experience and gather analytics. You can manage cookie preferences in your browser settings.</p>`,
        },
        {
            id: "sharing",
            title: "4. Sharing Your Information",
            html: `<p>We do not sell or rent your personal data. We may share limited data with trusted third-party services (analytics, hosting, email providers) to operate our website. We may disclose information if required by law.</p>`,
        },
        {
            id: "security",
            title: "5. Data Security",
            html: `<p>While we implement security measures, no system is fully secure. Use the Website acknowledging this risk.</p>`,
        },
        {
            id: "youreright",
            title: "6. Your Rights",
            html: `<p>You may have rights such as accessing, correcting, or deleting your personal data, depending on your location.</p>`,
        },
        {
            id: "children",
            title: "7.  Changes to This Policy",
            html: `<p>We may update this policy periodically. Changes will be posted on this page with the effective date.</p>`,
        },
        {
            id: "contact",
            title: "8. Contact Us",
            html: `<p>For any privacy-related questions or concerns, please contact us at:</p>
             <ul>
               <li>Business & Promotions: <a href="mailto:${contact.emailBiz}">${contact.emailBiz}</a></li>
             </ul>`,
        },
    ];

    const sections = content && Array.isArray(content) && content.length ? content : defaultContent;

    return (
        <section className="bg-base-100  dark:bg-base-950 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#2d6d4b26] dark:bg-indigo-900 mb-4">
                            {/* icon */}
                            <svg className="w-8 h-8 text-[#135c33e0] dark:text-indigo-200" viewBox="0 0 24 24" fill="none" aria-hidden>
                                <path d="M12 1L3 5v6c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V5l-9-4z" stroke="currentColor" strokeWidth="0" fill="currentColor" />
                            </svg>
                        </div>

                        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100">
                            {title}
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            Last updated: <time dateTime={new Date(lastUpdated).toISOString()}>{lastUpdated}</time>
                        </p>
                    </div>

                    {/* Body */}
                    <div className="prose prose-sm dark:prose-invert max-w-none lg:prose-base">
                        {sections.map((s) => (
                            <article id={s.id} key={s.id} className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{s.title}</h3>
                                <div
                                    className="mt-2 text-md text-gray-600 dark:text-gray-300"
                                    // render trusted HTML (if you pass html strings). Keep content sanitized if user-supplied.
                                    dangerouslySetInnerHTML={{ __html: s.html }}
                                />
                            </article>
                        ))}

                        {/* small footer */}
                        <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                            <p>
                                If you have questions about this policy, please contact us at{" "}
                                <a href={`mailto:${contact.emailSupport}`} className="text-indigo-600 hover:underline">
                                    {contact.emailBiz}
                                </a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}