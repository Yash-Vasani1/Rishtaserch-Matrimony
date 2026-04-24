import HomeClient from "./HomeClient";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Trusted Matrimony Site for Verified Profiles",
  description:
    "Rishtaserch Matrimony is a trusted matrimony site for verified bride and groom profiles, personalized matchmaking, and serious marriage connections.",
  path: "/",
  keywords: [
    "Rishtaserch Matrimony",
    "Rishtaserch",
    "Rishta Search",
    "Rishta Serch",
    "matrimony site",
    "verified matrimony profiles",
    "trusted matchmaking service",
  ],
  image: "/Hero_img.png",
});

export default function HomePage() {
  return <HomeClient />;
}
