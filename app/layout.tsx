import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "pxxl productions",
  description: "building digital products people actually enjoy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}