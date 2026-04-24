import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Success Stories",
  description:
    "Read real success stories of couples who found meaningful marriage connections through Rishtaserch Matrimony.",
  path: "/success_stories",
  keywords: [
    "matrimony success stories",
    "happy marriages",
    "Rishtaserch success stories",
    "real matrimony couples",
  ],
  image: "/Hero_img.png",
});

export default function SuccessStoriesLayout({ children }) {
  return children;
}
