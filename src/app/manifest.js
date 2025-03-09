/** @type {import('next').MetadataRoute.Manifest} */
export default function manifest() {
  return {
    name: "NEXTJS CRUD",
    short_name: "NEXT CRUD",
    description: "A Progressive Web App built with Next.js",
    start_url: "/",
    display: "standalone",
    background_color: "#3D3D3D",
    theme_color: "#3D3D3D",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
