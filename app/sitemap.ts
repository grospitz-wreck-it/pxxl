import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pxxl.com",
      lastModified: new Date(),
    },
    {
      url: "https://pxxl.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://pxxl.com/imprint",
      lastModified: new Date(),
    },
    {
      url: "https://pxxl.com/privacy",
      lastModified: new Date(),
    },
    {
      url: "https://pxxl.com/games/hard-way-up",
      lastModified: new Date(),
    },
  ];
}