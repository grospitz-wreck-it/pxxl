import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pxxl.com"),

  title: {
    default: "pxxl productions",
    template: "%s | pxxl productions",
  },

  description:
    "entwicklung von webseiten, apps, ki-tools, browsergames, fussballspielen und digitalen produkten. tätig in kirchlengern, bünde, löhne, herford, bielefeld, osnabrück und ganz ostwestfalen.",

  keywords: [
    "webseiten",
    "webdesign",
    "webentwicklung",
    "apps",
    "app entwicklung",
    "ki tools",
    "ai tools",
    "widgets",
    "digitale produkte",
    "browsergames",
    "onlinespiele",
    "games",
    "fussballspiele",
    "fussball simulator",
    "kirchlengern",
    "bünde",
    "löhne",
    "herford",
    "bielefeld",
    "osnabrück",
    "ostwestfalen",
  ],

  openGraph: {
    title: "pxxl productions",
    description:
      "webseiten, apps, ki-tools, browsergames und digitale produkte aus ostwestfalen.",
    url: "https://pxxl.com",
    siteName: "pxxl productions",
    type: "website",
    locale: "de_DE",

    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "pxxl productions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "pxxl productions",
    description:
      "webseiten, apps, ki-tools, browsergames und digitale produkte.",

    images: ["/og-image.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
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