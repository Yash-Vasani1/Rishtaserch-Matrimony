import Header from "@/components/Header";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import Footer from "@/components/Footer";
import theme from "@/theme/theme";
import { rootMetadata, structuredData } from "@/lib/seo";
import { Analytics } from '@vercel/analytics/react';

export const metadata = rootMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <ThemeProvider theme={theme}>
          <Header />
          <main style={{ minHeight: "70vh", padding: "37px 0" }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
