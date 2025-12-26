export const metadata = {
  title: "Personalized Matchmaking Services | Rishtaserch Matrimony",
  description:
    "Experience personalized matchmaking services at Rishtaserch Matrimony. Handpicked profiles, family-focused approach, and dedicated relationship managers.",
  keywords: [
    "personalized matchmaking",
    "elite matchmaking service",
    "private matchmaking india",
    "family oriented matrimony",
    "rishtaserch matchmaking",
    "rishta search matrimony services",
    "premium matrimony service",
  ],

  alternates: {
    canonical: "https://www.rishtaserchmatrimony.com/services/matchmaking",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Personalized Matchmaking | Rishtaserch Matrimony",
    description:
      "High-touch personalized matchmaking focused on values, family compatibility and long-term harmony.",
    url: "https://www.rishtaserchmatrimony.com/services/matchmaking",
    siteName: "Rishtaserch Matrimony",
    images: [
      {
        url: "https://www.rishtaserchmatrimony.com/og/matchmaking.jpg",
        width: 1200,
        height: 630,
        alt: "Personalized Matchmaking Services - Rishtaserch Matrimony",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Personalized Matchmaking | Rishtaserch Matrimony",
    description:
      "Elite personalized matchmaking services with verified profiles and family-first approach.",
    images: [
      "https://www.rishtaserchmatrimony.com/og/matchmaking.jpg",
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
