import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const benzin = localFont({
  src: [
    {
      path: "./fonts/Benzin-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/Benzin-Medium.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "./fonts/Benzin-Semibold.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "./fonts/Benzin-Bold.woff2",
      weight: "700",
      style: "normal"
    },
    {
      path: "./fonts/Benzin-ExtraBold.woff2",
      weight: "800",
      style: "normal"
    }
  ],
  variable: "--font-benzin",
  display: "swap"
});

export const metadata: Metadata = {
  title: "SØM△",
  description: "Progressive ritual nights & radioshow from Tulum."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${benzin.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
