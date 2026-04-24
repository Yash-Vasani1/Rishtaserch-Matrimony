import people from "@/data/people.json";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap() {
  const lastModified = new Date();
  const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { path: "/members", priority: 0.9, changeFrequency: "daily" },
    { path: "/success_stories", priority: 0.8, changeFrequency: "weekly" },
    { path: "/services/background", priority: 0.7, changeFrequency: "monthly" },
    { path: "/services/kundli", priority: 0.7, changeFrequency: "monthly" },
    { path: "/services/matchmaking", priority: 0.8, changeFrequency: "monthly" },
  ];

  const memberRoutes = people.map((person) => ({
    url: absoluteUrl(`/members/${person.id}`),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...memberRoutes,
  ];
}
