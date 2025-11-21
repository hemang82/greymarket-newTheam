// app/sitemap.js
export default function sitemap() {

    const baseUrl = process.env.SITE_URL;

    return [
        { url: `${baseUrl}/`, lastModified: new Date() },
        { url: `${baseUrl}/auth/login`, lastModified: new Date() },
        { url: `${baseUrl}/news`, lastModified: new Date() },
        { url: `${baseUrl}/PrivacyPolicy`, lastModified: new Date() },
        { url: `${baseUrl}/TermsConditions`, lastModified: new Date() },
    ];
}
