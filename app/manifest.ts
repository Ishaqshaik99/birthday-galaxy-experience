import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Birthday Galaxy Experience",
    short_name: "Birthday Galaxy",
    description: "A premium interactive birthday story experience.",
    start_url: "/",
    display: "standalone",
    background_color: "#04030b",
    theme_color: "#04030b",
    icons: [
      {
        src: "/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
