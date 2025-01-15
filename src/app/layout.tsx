import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIS PDCAO",
  description: "Sistema de Informação e Saude",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
