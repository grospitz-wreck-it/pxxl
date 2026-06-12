import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pxxl-productions.de"),

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
    type: "website",
    locale: "de_DE",
  },

  twitter: {
    card: "summary_large_image",
    title: "pxxl productions",
    description:
      "webseiten, apps, ki-tools, browsergames und digitale produkte.",
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