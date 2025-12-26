export const metadata = {
  title: "Kundli Matching for Marriage Compatibility | Rishtaserch Matrimony",
  description:
    "Get expert Kundli matching for marriage compatibility at Rishtaserch Matrimony. Accurate Guna Milan, Dosha analysis, family compatibility, and personalized astrological guidance.",
  keywords: [
    "kundli matching for marriage",
    "kundli matching matrimony",
    "astrology marriage compatibility",
    "guna milan kundli",
    "mangal dosha check",
    "vedic astrology marriage",
    "rishtaserch matrimony kundli",
    "rishta search kundli matching",
  ],

  alternates: {
    canonical: "https://www.rishtaserchmatrimony.com/services/kundli",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Kundli Matching Services | Rishtaserch Matrimony",
    description:
      "Ensure marital harmony with professional Kundli matching services at Rishtaserch Matrimony. Trusted Vedic astrology for informed matrimonial decisions.",
    url: "https://www.rishtaserchmatrimony.com/services/kundli",
    siteName: "Rishtaserch Matrimony",
    images: [
      {
        url: "https://www.rishtaserchmatrimony.com/Hero_img.png",
        width: 1200,
        height: 630,
        alt: "Kundli Matching Services - Rishtaserch Matrimony",
      },
    ],
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
