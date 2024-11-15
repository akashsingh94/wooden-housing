import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.scss";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../../theme";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const lexend_Deca = Lexend_Deca({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-lexend-deca",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend_Deca.variable}`}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
