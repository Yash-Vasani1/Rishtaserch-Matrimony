import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Personalized Matchmaking Services",
  description:
    "Explore personalized matchmaking services with verified profiles, family-focused introductions, and dedicated matrimony guidance.",
  path: "/services/matchmaking",
  keywords: [
    "personalized matchmaking",
    "private matchmaking",
    "premium matrimony service",
    "family-focused matrimony",
  ],
  image: "/Hero_img.png",
});

export default function MatchmakingLayout({ children }) {
  return children;
}
