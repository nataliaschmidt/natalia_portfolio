import type { Metadata } from "next";
import {ThemeProvider} from 'next-themes'
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";

const fontPoppins = Poppins({ 
  subsets: ["latin"], weight:["300", "400", "500", "700"],
  fallback: ["Arial", "sans-serif"],
});


export const metadata: Metadata = {
  title: "Portfolio NKS",
  description:
    "Portfolio de Natália Klein Schmidt contendo dados de contatos e projetos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <ThemeProvider attribute='class' >
      <body
        className={fontPoppins.className}
      >
      <Header />
        {children}
      </body>
      </ThemeProvider>
    </html>
  );
}
