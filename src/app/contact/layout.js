// app/contact/layout.js

export const metadata = {
  title: "Contact Us – Rishtaserch Matrimony",
  description:
    "Get in touch with Rishtaserch Matrimony for profile support, membership inquiries, or assistance. Contact us via phone, email, or WhatsApp.",
  keywords: [
    "rishtaserch matrimony contact",
    "contact rishtaserch matrimony",
    "rishtaserch support",
    "rishtaserch matrimony phone number",
    "matrimony customer support",
    "matchmaking contact page",
  ],
  openGraph: {
    title: "Contact Rishtaserch Matrimony",
    description:
      "Need help with your profile or membership? Contact Rishtaserch Matrimony for trusted matchmaking support and assistance.",
    url: "https://www.rishtaserchmatrimony.com/contact",
    siteName: "Rishtaserch Matrimony",
    images: [
      {
        url: "/logo.png",
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
