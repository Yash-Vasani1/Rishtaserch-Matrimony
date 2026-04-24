import people from "@/data/people.json";
import MemberDetailClient from "./MemberDetailClient";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const person = people.find((entry) => String(entry.id) === String(slug));

  if (!person) {
    return buildMetadata({
      title: "Profile Not Found",
      description:
        "The requested matrimony profile could not be found on Rishtaserch Matrimony.",
      path: `/members/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${person.name}, ${person.age} - Verified Matrimony Profile`,
    description: `${person.name}, ${person.age}, from ${person.location}. ${person.occupation}. View this verified matrimony profile on Rishtaserch Matrimony.`,
    path: `/members/${person.id}`,
    keywords: [
      person.name,
      person.location,
      person.occupation,
      "verified matrimonial profile",
      "bride groom profile",
    ],
    image: person.image || "/logo/logo_png.png",
    type: "profile",
  });
}

export default async function PersonDetailPage({ params }) {
  const { slug } = await params;
  const person = people.find((entry) => String(entry.id) === String(slug));

  return <MemberDetailClient person={person ?? null} />;
}
