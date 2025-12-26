export const metadata = {
  title: {
    default: "Rishtaserch Matrimony",
    template: "%s | Rishtaserch Matrimony",
  },
  description:
    "Rishtaserch Matrimony is a trusted rishta search platform to find your perfect life partner.",
  keywords: [
    "rishtaserch",
    "rishta serch",
    "rishta search",
    "rishtadekho",
    "rishtaserch matrimony",
    "rishtasearch matrimony",
    "rishtadekho matrimony",
    "matrimony",
    "marriage",
    "shadi",
  ],
  metadataBase: new URL("https://www.rishtaserchmatrimony.com"),
  openGraph: {
    title: "Rishtaserch Matrimony",
    description:
      "Find your perfect match on Rishtaserch Matrimony – trusted rishta search platform.",
    url: "https://www.rishtaserchmatrimony.com",
    siteName: "Rishtaserch Matrimony",
    images: [
      {
        url: "logo/logo_png.png",   // 👈 MUST be public
        width: 512,
        height: 512,
        alt: "Rishtaserch Matrimony Logo",
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


import Header from "@/components/Header";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import Footer from "@/components/Footer";
import theme from "@/theme/theme";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <Header />
          <main style={{ minHeight: "70vh", padding: "37px 0" }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
