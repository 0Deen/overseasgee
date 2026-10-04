import type { MetadataRoute } from "next";
import { destinations } from "@/data/destinations";
import { jobs } from "@/data/jobsData";

const SITE_URL = "https://ajiramajuu.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/jobs", "/destinations"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const destinationRoutes = destinations.map((d) => ({
    url: `${SITE_URL}/destinations/${d.slug}`,
    lastModified: new Date(),
  }));

  const jobRoutes = jobs.map((j) => ({
    url: `${SITE_URL}/jobs/${j.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...destinationRoutes, ...jobRoutes];
}
