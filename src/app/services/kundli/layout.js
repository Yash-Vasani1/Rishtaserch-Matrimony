import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Kundli Matching for Marriage Compatibility",
  description:
    "Get kundli matching for marriage compatibility with guna milan, dosha analysis, and guided matrimonial astrology support.",
  path: "/services/kundli",
  keywords: [
    "kundli matching for marriage",
    "kundli matching matrimony",
    "guna milan",
    "vedic astrology marriage",
  ],
  image: "/Hero_img.png",
});

export default function KundliLayout({ children }) {
  return children;
}
