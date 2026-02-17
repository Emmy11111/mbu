import type { Metadata } from "next";
import localFont from "next/font/local"; // 1. Change to localFont
import "./globals.css";

// 2. Configure Supreme Local Font
const supreme = localFont({
  src: [
    {
      path: "../public/fonts/Supreme-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Supreme-Bold.woff2",
      weight: "700",
      style: "normal",
    },
        {
      path: "../public/fonts/Supreme-Medium.woff2",
      weight: "500",
      style: "normal",
    },
           {
      path: "../public/fonts/Supreme-Extrabold.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-supreme",
});

export const metadata: Metadata = {
  title: "MB&U Company",
  description: "Professional Property Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={supreme.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}