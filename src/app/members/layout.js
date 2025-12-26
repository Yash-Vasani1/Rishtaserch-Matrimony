export const metadata = {
  title: "Browse Matrimony Profiles – Verified Members | Rishtaserch Matrimony",
  description:
    "Browse verified matrimony profiles of brides and grooms on Rishtaserch Matrimony. Find trusted, family-oriented members and your ideal life partner.",
  keywords: [
    "matrimony profiles",
    "verified matrimony members",
    "bride groom profiles",
    "indian matrimony members",
    "rishtaserch matrimony members",
    "find life partner online",
  ],
  openGraph: {
    title: "Verified Matrimony Profiles | Rishtaserch Matrimony",
    description:
      "Explore verified bride and groom profiles on Rishtaserch Matrimony and find meaningful matches.",
    url: "https://www.rishtaserchmatrimony.com/members",
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
