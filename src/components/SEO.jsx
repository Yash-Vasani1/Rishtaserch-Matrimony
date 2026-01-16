"use client";

import Head from "next/head";

export default function SEO({
  title,
  description,
  keywords,
  url,
  image,
}) {
  const defaultMeta = {
    title: "Rishtaserch Matrimony - Find Your Perfect Match",
    description: "Rishtaserch Matrimony helps you find the perfect life partner with personalized matchmaking, verified profiles, and long-term compatibility.",
    keywords: "rishtaserch, rishta search, rishtaserch matrimony, matrimonial, marriage, matchmaker, marriage site India",
    url: "https://www.rishtaserchmatrimony.com/",
    image: "/logo/logo_png.png",
  };

  const meta = {
    title: title || defaultMeta.title,
    description: description || defaultMeta.description,
    keywords: keywords || defaultMeta.keywords,
    url: url || defaultMeta.url,
    image: image || defaultMeta.image,
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="author" content="Rishtaserch Matrimony" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={meta.url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={meta.url} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Rishtaserch Matrimony",
            "url": meta.url,
            "logo": "https://www.rishtaserchmatrimony.com/logo/logo_png.png",
            "sameAs": [
              "https://www.instagram.com",
              "https://www.facebook.com",
              "https://wa.me/917862990641"
            ]
          }),
        }}
      />
    </Head>
  );
}
