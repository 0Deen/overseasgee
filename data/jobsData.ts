/**
 * Centralized job model — the single source of truth for every real job
 * listing on the site (destination pages, /jobs, /jobs/[slug], related
 * jobs, SEO metadata, JobPosting structured data).
 *
 * RULE: every field here must come from data actually supplied by Ajira
 * Majuu. Do not add a country/role here unless you have a real salary and
 * benefit package for it — see the "do not invent job information" rule.
 * Right now that means Qatar only. When new verified openings come in for
 * other countries, add them here and they'll automatically appear on the
 * matching /destinations/[slug] page and in /jobs.
 */

export interface Job {
  slug: string;
  title: string;
  destinationSlug: string; // matches data/destinations.ts slug
  category: string;
  image: string;
  salary: string; // kept as a display string since several roles are ranges/conditional
  salaryNote?: string;
  benefits: string[];
  requirements: string[];
  responsibilities: string[];
  description: string;
}

export const jobs: Job[] = [
  {
    slug: "house-help-experienced-cook-qatar",
    title: "House Help — Experienced Cook",
    destinationSlug: "qatar",
    category: "Household / Cooking",
    image: "/images/jobs/cook.png",
    salary: "QAR 1,200",
    benefits: [
      "Off days according to the applicable agreement",
      "Health insurance",
      "Food",
      "Accommodation",
      "Vacation according to applicable requirements",
    ],
    requirements: [
      "Prior cooking experience in a household setting",
      "Valid passport, or the ability to obtain one",
      "Willingness to relocate to Qatar",
    ],
    responsibilities: [
      "Preparing household meals",
      "General kitchen and household support duties as agreed with the employer",
    ],
    description:
      "For candidates with genuine prior cooking experience. Exact duties and household size are confirmed with the employer before deployment.",
  },
  {
    slug: "house-help-first-time-qatar",
    title: "House Help — First Time",
    destinationSlug: "qatar",
    category: "Household",
    image: "/images/jobs/cleaner.png",
    salary: "QAR 1,000",
    benefits: [
      "Off days according to the applicable agreement",
      "Health insurance",
      "Food",
      "Accommodation",
      "Vacation according to applicable requirements",
    ],
    requirements: [
      "No prior overseas work experience required",
      "Valid passport, or the ability to obtain one",
      "Willingness to relocate to Qatar",
    ],
    responsibilities: ["General household duties as agreed with the employer"],
    description:
      "Open to first-time applicants with no prior overseas household work experience.",
  },
  {
    slug: "house-driver-qatar",
    title: "House Driver",
    destinationSlug: "qatar",
    category: "Driving",
    image: "/images/jobs/drivers.png",
    salary: "QAR 1,200 during training, QAR 1,600 after training",
    salaryNote: "Pay increases once the training period is complete.",
    benefits: [
      "Off days according to the applicable agreement",
      "Health insurance",
      "Food",
      "Accommodation",
      "Vacation according to applicable requirements",
    ],
    requirements: [
      "Valid driving licence and driving experience",
      "Valid passport, or the ability to obtain one",
      "Willingness to relocate to Qatar",
    ],
    responsibilities: ["Household driving duties as agreed with the employer"],
    description:
      "Starts at a training rate before moving to the full rate — see the salary note above.",
  },
  {
    slug: "nanny-qatar",
    title: "Nanny",
    destinationSlug: "qatar",
    category: "Household / Childcare",
    image: "/images/jobs/caregiver.png",
    salary: "QAR 1,200–1,400",
    salaryNote: "Exact pay depends on experience and the specific household's needs.",
    benefits: [
      "Off days according to the applicable agreement",
      "Health insurance",
      "Food",
      "Accommodation",
      "Vacation according to applicable requirements",
    ],
    requirements: [
      "Experience caring for children preferred",
      "Valid passport, or the ability to obtain one",
      "Willingness to relocate to Qatar",
    ],
    responsibilities: ["Childcare duties as agreed with the employer"],
    description: "Pay varies within the stated range depending on experience and the household's requirements.",
  },
  {
    slug: "home-tutor-qatar",
    title: "Home Tutor",
    destinationSlug: "qatar",
    category: "Education",
    image: "/images/jobs/cleanerdesign2.png",
    salary: "QAR 1,500–1,600",
    salaryNote: "Exact pay depends on experience.",
    benefits: [
      "Off days according to the applicable agreement",
      "Health insurance",
      "Food",
      "Accommodation",
      "Vacation according to applicable requirements",
    ],
    requirements: [
      "Relevant teaching/tutoring background",
      "Valid passport, or the ability to obtain one",
      "Willingness to relocate to Qatar",
    ],
    responsibilities: ["Tutoring duties as agreed with the employer"],
    description: "Pay varies within the stated range depending on experience.",
  },
  {
    slug: "caregiver-qatar",
    title: "Caregiver",
    destinationSlug: "qatar",
    category: "Caregiving",
    image: "/images/jobs/mencaregivers.png",
    salary: "QAR 1,500",
    benefits: [
      "Off days according to the applicable agreement",
      "Health insurance",
      "Food",
      "Accommodation",
      "Vacation according to applicable requirements",
    ],
    requirements: [
      "Caregiving experience preferred",
      "Valid passport, or the ability to obtain one",
      "Willingness to relocate to Qatar",
    ],
    responsibilities: ["Caregiving duties as agreed with the employer"],
    description: "For candidates with caregiving experience and the ability to relocate to Qatar.",
  },
  {
    slug: "beautician-qatar",
    title: "Beautician",
    destinationSlug: "qatar",
    category: "Beauty / Personal Care",
    image: "/images/jobs/cleanerdesign2.png",
    salary: "QAR 1,500–1,600",
    salaryNote: "Exact pay depends on experience.",
    benefits: [
      "Off days according to the applicable agreement",
      "Health insurance",
      "Food",
      "Accommodation",
      "Vacation according to applicable requirements",
    ],
    requirements: [
      "Relevant beauty/personal care experience or training",
      "Valid passport, or the ability to obtain one",
      "Willingness to relocate to Qatar",
    ],
    responsibilities: ["Beautician duties as agreed with the employer"],
    description: "Pay varies within the stated range depending on experience.",
  },
];

export function getJob(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}

export function getJobsForDestination(destinationSlug: string): Job[] {
  return jobs.filter((j) => j.destinationSlug === destinationSlug);
}

export function getRelatedJobs(job: Job, limit = 3): Job[] {
  return jobs.filter((j) => j.slug !== job.slug && j.destinationSlug === job.destinationSlug).slice(0, limit);
}

// NOTE: home-tutor-qatar and beautician-qatar currently share a stand-in
// image (cleanerdesign2.png) because no dedicated photo exists yet for
// either role in /public/images/jobs/. Drop in real photos and update the
// `image` field above as soon as they're available — don't leave it as a
// placeholder longer than necessary, since mismatched imagery undercuts
// the trust this site is built around.
