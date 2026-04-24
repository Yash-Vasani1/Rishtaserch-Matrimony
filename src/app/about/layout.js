import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about Rishtaserch Matrimony, a trusted matrimony site focused on verified profiles, personalized matchmaking, and family-oriented marriage connections.",
  path: "/about",
  keywords: [
    "about Rishtaserch Matrimony",
    "trusted matrimony company",
    "family-oriented matrimony service",
    "personalized matchmaking",
  ],
});

export default function AboutLayout({ children }) {
  return children;
}
