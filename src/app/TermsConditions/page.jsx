
export const metadata = {
    title: `Terms & Conditions | ${process.env.SITE_NAME}`,
    description: `Read the Terms & Conditions of ${process.env.SITE_NAME}. Understand the rules, limitations, disclaimers, and acceptable use of our platform providing IPO Grey Market Premium (GMP) updates and IPO-related information.`,
    keywords: [
        'Terms and Conditions',
        'Website terms',
        'User agreement',
        'Legal terms',
        `${process.env.SITE_NAME} terms`,
    ],
    alternates: {
        canonical: `${process.env.SITE_URL}terms-and-conditions`,
    },
    openGraph: {
        title: `Terms & Conditions | ${process.env.SITE_NAME}`,
        description:
            `Learn about the usage terms, disclaimers, and service conditions for accessing IPO Grey Market data and IPO information on ${process.env.SITE_NAME}.`,
        url: `${process.env.SITE_URL}terms-and-conditions`,
        images: [
            {
                url: '/og-default.png',
                width: 1200,
                height: 630,
                alt: `${process.env.SITE_NAME} – Terms & Conditions`,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `Terms & Conditions | ${process.env.SITE_NAME}`,
        description:
            `Read the Terms & Conditions of ${process.env.SITE_NAME} covering user responsibilities, limitations, and service rules.`,
        images: ['/og-default.png'],
    },
};

export default function TermsConditions({
    title = "Terms And Conditions",
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
            title: "1. Accounts and membership",
            html: `<p> If you create an account in the Mobile Application, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it. We may, but have no obligation to, monitor and review new accounts before you may sign in and start using the Services. Providing false contact information of any kind may result in the termination of your account. You must immediately notify us of any unauthorized uses of your account or any other breaches of security. We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions. We may suspend, disable, or delete your account (or any part thereof) if we determine that you have violated any provision of this Agreement or that your conduct or content would tend to damage our reputation and goodwill. If we delete your account for the foregoing reasons, you may not re-register for our Services. We may block your email address and Internet protocol address to prevent further registration.</p> `,
        },
        {
            id: "User content",
            title: "2. How We Use Your Information",
            // html: `<ul>
            //     <li>To provide and improve our services (IPO data, calculators, tools).</li>
            //     <li>To respond to your inquiries and support requests.</li>
            //     <li>To send updates, educational content, or promotional messages (if you subscribe).</li>
            //     <li>To analyze site performance and improve user experience.</li>
            //  </ul>`,
            html: `<p> We do not own any data, information or material (collectively, “Content”) that you submit in the Mobile Application in the course of using the Service. You shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, and intellectual property ownership or right to use of all submitted Content. We may monitor and review the Content in the Mobile Application submitted or created using our Services by you. You grant us permission to access, copy, distribute, store, transmit, reformat, display and perform the Content of your user account solely as required for the purpose of providing the Services to you. Without limiting any of those representations or warranties, we have the right, though not the obligation, to, in our own sole discretion, refuse or remove any Content that, in our reasonable opinion, violates any of our policies or is in any way harmful or objectionable. Unless specifically permitted by you, your use of the Mobile Application and Services does not grant us the license to use, reproduce, adapt, modify, publish or distribute the Content created by you or stored in your user account for commercial, marketing or any similar purpose.</p>`
        },
        {
            id: "cookies",
            title: "3. Cookies and Tracking",
            html: `<p>We use cookies to improve your experience and gather analytics. You can manage cookie preferences in your browser settings.</p>`,
        },
        {
            id: "sharing",
            title: "4. Backups",
            html: `<p>We are not responsible for the Content residing in the Mobile Application. In no event shall we be held liable for any loss of any Content. It is your sole responsibility to maintain appropriate backup of your Content. Notwithstanding the foregoing, on some occasions and in certain circumstances, with absolutely no obligation, we may be able to restore some or all of your data that has been deleted as of a certain date and time when we may have backed up data for our own purposes. We make no guarantee that the data you need will be available.</p>`,
        },
        {
            id: "security",
            title: "5. Links to other resources",
            html: `<p>Although the Mobile Application and Services may link to other resources (such as websites, mobile applications, etc.), we are not, directly or indirectly, implying any approval, association, sponsorship, endorsement, or affiliation with any linked resource, unless specifically stated herein. We are not responsible for examining or evaluating, and we do not warrant the offerings of, any businesses or individuals or the content of their resources. We do not assume any responsibility or liability for the actions, products, services, and content of any other third parties. You should carefully review the legal statements and other conditions of use of any resource which you access through a link in the Mobile Application. Your linking to any other off-site resources is at your own risk.</p>`,
        },
        {
            id: "youreright",
            title: "6. Changes and amendments",
            html: `<p>We reserve the right to modify this Agreement or its terms related to the Mobile Application and Services at any time at our discretion. When we do, we will post a notification in the Mobile Application. We may also provide notice to you in other ways at our discretion, such as through the contact information you have provided. An updated version of this Agreement will be effective immediately upon the posting of the revised Agreement unless otherwise specified. Your continued use of the Mobile Application and Services after the effective date of the revised Agreement (or such other act specified at that time) will constitute your consent to those changes.</p>`,
        },
        {
            id: "children",
            title: "7.  Acceptance of these terms",
            html: `<p>You acknowledge that you have read this Agreement and agree to all its terms and conditions. By accessing and using the Mobile Application and Services you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, you are not authorized to access or use the Mobile Application and Services. This policy has been created with the help of the terms and conditions generator.</p>`,
        },
        {
            id: "contact",
            title: "8. Contact Us",
            html: `<p>If you have any questions, concerns, or complaints regarding this Agreement, please contact us at:</p>
             <ul>
               <li>Business & Promotions: <a href="mailto:${contact.emailBiz}">${contact.emailBiz}</a></li>
             </ul>`,
        },
    ];

    const sections = content && Array.isArray(content) && content.length ? content : defaultContent;

    return (
        <section className="bg-base-100  dark:bg-base-950 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="px-20 mx-auto">
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
                            {/* <p>
                                If you have questions about this policy, please contact us at{" "}
                                <a href={`mailto:${contact.emailSupport}`} className="text-indigo-600 hover:underline">
                                    {contact.emailBiz}
                                </a>.
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}