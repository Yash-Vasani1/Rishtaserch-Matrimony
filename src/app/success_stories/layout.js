export const metadata = {
  title: "Success Stories – Happy Marriages | Rishtaserch Matrimony",
  description:
    "Read real success stories of couples who found love and lifelong companionship through Rishtaserch Matrimony. Genuine, verified matrimonial success journeys.",
  keywords: [
    "matrimony success stories",
    "happy marriages",
    "real matrimony success stories",
    "rishtaserch success stories",
    "rishta search matrimony stories",
    "marriage success stories india",
    "love stories matrimony",
  ],

  alternates: {
    canonical: "https://www.rishtaserchmatrimony.com/success_stories",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Matrimony Success Stories | Rishtaserch Matrimony",
    description:
      "Discover heartwarming marriage success stories from couples matched through Rishtaserch Matrimony.",
    url: "https://www.rishtaserchmatrimony.com/success_stories",
    siteName: "Rishtaserch Matrimony",
    images: [
      {
        url: "https://www.rishtaserchmatrimony.com/og/success-stories.jpg",
        width: 1200,
        height: 630,
        alt: "Rishtaserch Matrimony Success Stories",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Success Stories | Rishtaserch Matrimony",
    description:
      "Real couples, real love stories. Read how Rishtaserch Matrimony created happy marriages.",
    images: [
      "https://www.rishtaserchmatrimony.com/og/success-stories.jpg",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <main style={{ minHeight: "70vh" }}>
            {children}
          </main>
      </body>
    </html>
  );
}
