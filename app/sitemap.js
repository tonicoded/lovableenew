const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lovableewebsite.vercel.app";

export default function sitemap() {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
    },
  ];
}
