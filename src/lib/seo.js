export const SITE_NAME = "Rishtaserch Matrimony";
export const PRIMARY_SITE_URL = "https://www.rishtaserchmatrimony.com";
export const SECONDARY_SITE_URL = "https://www.rishtasearchmatrimony.com";
export const DEFAULT_OG_IMAGE = "/logo/logo_png.png";

export const BASE_KEYWORDS = [
  "Rishtaserch Matrimony",
  "Rishtaserch",
  "Rishtasearch Matrimony",
  "Rishta Serch",
  "Rishta Search",
  "matrimony site",
  "matrimony service",
  "matchmaking service",
  "marriage bureau",
  "verified matrimony profiles",
  "Indian matrimony",
];

export const SITE_DESCRIPTION =
  "Rishtaserch Matrimony is a trusted matrimony site for verified bride and groom profiles, personalized matchmaking, kundli matching, and meaningful marriage connections.";

export function absoluteUrl(path = "/") {
  return new URL(path, PRIMARY_SITE_URL).toString();
}

function buildTitle(title) {
  return title ? `${title} | ${SITE_NAME}` : SITE_NAME;
}

export function buildMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "/",
  keywords = [],
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noIndex = false,
} = {}) {
  const fullTitle = buildTitle(title);
  const canonicalUrl = absoluteUrl(path);

  return {
    title,
    description,
    keywords: [...new Set([...BASE_KEYWORDS, ...keywords])],
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "en_IN",
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export const rootMetadata = {
  metadataBase: new URL(PRIMARY_SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  applicationName: SITE_NAME,
  description: SITE_DESCRIPTION,
  keywords: BASE_KEYWORDS,
  alternates: {
    canonical: PRIMARY_SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: PRIMARY_SITE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: "Rishtasearch Matrimony",
    url: PRIMARY_SITE_URL,
    logo: absoluteUrl("/logo/logo_png.png"),
    description: SITE_DESCRIPTION,
    sameAs: [SECONDARY_SITE_URL],
    knowsAbout: [
      "Matrimony service",
      "Matchmaking",
      "Marriage bureau",
      "Kundli matching",
      "Background verification",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: "Rishta Search Matrimony",
    url: PRIMARY_SITE_URL,
    description: SITE_DESCRIPTION,
    keywords: BASE_KEYWORDS.join(", "),
  },
];
