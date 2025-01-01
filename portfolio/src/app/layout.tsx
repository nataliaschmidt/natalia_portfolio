import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

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
      <body
        className={fontPoppins.className}
      >
        {children}
      </body>
    </html>
  );
}
