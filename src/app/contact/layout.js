import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact Rishtaserch Matrimony for membership help, profile support, matchmaking assistance, or general matrimony inquiries by phone, email, or WhatsApp.",
  path: "/contact",
  keywords: [
    "Rishtaserch Matrimony contact",
    "matrimony support",
    "matchmaking contact",
    "Rishtaserch phone number",
  ],
});

export default function ContactLayout({ children }) {
  return children;
}
