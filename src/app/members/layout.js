import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Browse Verified Matrimony Profiles",
  description:
    "Browse verified bride and groom profiles on Rishtaserch Matrimony and discover meaningful, family-oriented marriage matches.",
  path: "/members",
  keywords: [
    "matrimony profiles",
    "verified bride and groom profiles",
    "Rishtaserch members",
    "find life partner online",
  ],
});

export default function MembersLayout({ children }) {
  return children;
}
