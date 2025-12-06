"use client";

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
          <main style={{ minHeight: "70vh", padding: "20px 0" }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
