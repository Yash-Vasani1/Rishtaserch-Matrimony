// app/about/layout.js
export const metadata = {
  title: "About Us – Rishtaserch Matrimony",
  description:
    "Learn about Rishtaserch Matrimony, a trusted matrimonial service dedicated to meaningful matchmaking, verified profiles, and family-oriented connections.",
  keywords: [
    "about rishtaserch matrimony",
    "rishtaserch matrimony company",
    "trusted matrimony service",
    "personalized matchmaking",
    "family oriented matrimony",
    "verified matrimony profiles",
  ],
  openGraph: {
    title: "About Rishtaserch Matrimony",
    description:
      "Discover the values, mission, and trusted matchmaking approach behind Rishtaserch Matrimony.",
    url: "https://www.rishtaserchmatrimony.com/about",
    siteName: "Rishtaserch Matrimony",
    images: [
      {
        url: "logo/logo_png.png",
        width: 512,
        height: 512,
        alt: "Rishtaserch Matrimony Logo",
      },
    ],
    type: "website",
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
