export const metadata = {
  title: "Background Verification for Matrimony Profiles | Rishtaserch Matrimony",
  description:
    "Ensure safe and trustworthy matrimonial matches with Rishtaserch Matrimony’s background verification services. ID checks, address verification, education and employment screening for peace of mind.",
  keywords: [
    "background verification matrimony",
    "matrimonial background check",
    "verified matrimony profiles",
    "safe matrimony service",
    "rishtaserch matrimony verification",
    "rishta search background verification",
    "secure matchmaking India",
  ],

  alternates: {
    canonical: "https://www.rishtaserchmatrimony.com/services/background",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Background Verification Services | Rishtaserch Matrimony",
    description:
      "Protect families and build trust with our professional background verification for matrimonial profiles at Rishtaserch Matrimony.",
    url: "https://www.rishtaserchmatrimony.com/services/background",
    siteName: "Rishtaserch Matrimony",
    images: [
      {
        url: "https://www.rishtaserchmatrimony.com/logo/logo_png.png",
        width: 1200,
        height: 630,
        alt: "Background Verification Services - Rishtaserch Matrimony",
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
