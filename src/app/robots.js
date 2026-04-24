import { PRIMARY_SITE_URL } from "@/lib/seo";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${PRIMARY_SITE_URL}/sitemap.xml`,
    host: PRIMARY_SITE_URL,
  };
}
