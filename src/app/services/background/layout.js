import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Background Verification for Matrimony Profiles",
  description:
    "Build trust with background verification for matrimony profiles, including ID, address, education, and employment checks.",
  path: "/services/background",
  keywords: [
    "background verification matrimony",
    "matrimonial background check",
    "safe matrimony service",
    "secure matchmaking",
  ],
});

export default function BackgroundLayout({ children }) {
  return children;
}
