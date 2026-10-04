/**
 * Centralized destination model.
 *
 * This single array powers: /destinations, /destinations/[slug], the
 * destination cards on the homepage, job filtering, and SEO metadata —
 * add a country here once, and every one of those surfaces picks it up.
 *
 * IMPORTANT: `jobs` only lists slugs for countries where Ajira Majuu has
 * actually supplied specific job/salary data (currently Qatar). For every
 * other destination, `jobs` stays empty and the page says "contact us for
 * current openings" rather than inventing salaries or positions — see
 * lib/jobsData.ts and the "do not invent job information" rule.
 */

export interface Destination {
  slug: string;
  name: string;
  flag: string; // emoji flag, no extra asset needed
  heroImage: string;
  shortDescription: string;
  about: string;
  /** Job slugs from data/jobsData.ts that are confirmed active in this country. */
  jobSlugs: string[];
  faqs: { question: string; answer: string }[];
}

export const destinations: Destination[] = [
  {
    slug: "qatar",
    name: "Qatar",
    flag: "🇶🇦",
    heroImage: "/images/countries/qatar.png",
    shortDescription: "Domestic and household opportunities in Doha and across Qatar.",
    about:
      "Qatar is Ajira Majuu's most active destination for domestic and household placements. We work directly with verified employers for roles such as house help, drivers, nannies, tutors, caregivers and beauticians. Every opening below reflects the pay and benefits the employer has actually offered — ask us for the latest openings if you don't see your role here.",
    jobSlugs: [
      "house-help-experienced-cook-qatar",
      "house-help-first-time-qatar",
      "house-driver-qatar",
      "nanny-qatar",
      "home-tutor-qatar",
      "caregiver-qatar",
      "beautician-qatar",
    ],
    faqs: [
      {
        question: "How do I apply for jobs in Qatar?",
        answer:
          "Browse the current openings above, then use the Apply or WhatsApp button on any listing. You don't need to create an account — just send us your details and our recruitment team will follow up.",
      },
      {
        question: "Do I need an account to apply?",
        answer: "No. Applications go straight to our recruitment team — no login or registration required.",
      },
      {
        question: "What documents do I need?",
        answer:
          "At minimum a valid passport (or the ability to obtain one) and any relevant certificates for your role. We'll tell you exactly what's needed for your specific job once you apply.",
      },
      {
        question: "How does Ajira Majuu contact applicants?",
        answer:
          "Through the phone number, WhatsApp number, or email you provide when you apply. We never ask for payment through unofficial channels — see our recruitment safety page.",
      },
      {
        question: "Are accommodation and food provided?",
        answer:
          "This depends on the specific employer and job. Where it's confirmed, we state it on the job listing. Where it isn't confirmed, ask us and we'll check with the employer before you commit.",
      },
      {
        question: "How long does recruitment take?",
        answer:
          "Timelines vary by job, employer readiness, and documentation. Contact us directly for the current timeline for a specific role.",
      },
    ],
  },
  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    flag: "🇸🇦",
    heroImage: "/images/countries/saudiarabia.png",
    shortDescription: "Household, hospitality and general labour opportunities, subject to current employer demand.",
    about:
      "Ajira Majuu places candidates in Saudi Arabia across household, hospitality and general labour roles as verified employer demand opens up. We don't publish invented salaries or listings — contact us directly for the current openings and their confirmed terms.",
    jobSlugs: [],
    faqs: [
      {
        question: "What jobs are currently open in Saudi Arabia?",
        answer:
          "Openings change as employer demand changes. Contact Ajira Majuu directly or message us on WhatsApp for the current list of roles.",
      },
      {
        question: "Do I need an account to apply?",
        answer: "No. Contact us directly and our team will guide you through applying.",
      },
    ],
  },
  {
    slug: "united-arab-emirates",
    name: "United Arab Emirates",
    flag: "🇦🇪",
    heroImage: "/images/countries/dubaicity.png",
    shortDescription: "Hospitality, household and general roles across the UAE, subject to current employer demand.",
    about:
      "The UAE is one of the destinations Ajira Majuu recruits for as verified employer openings become available. Reach out for the current list of active roles and their confirmed salary and benefits.",
    jobSlugs: [],
    faqs: [
      {
        question: "What jobs are currently open in the UAE?",
        answer: "Contact Ajira Majuu directly or message us on WhatsApp for the current list of active openings.",
      },
    ],
  },
  {
    slug: "kuwait",
    name: "Kuwait",
    flag: "🇰🇼",
    heroImage: "/images/countries/kuwaitcity.jfif",
    shortDescription: "Household and cleaning roles in Kuwait, subject to current employer demand.",
    about:
      "Ajira Majuu recruits for Kuwait as verified employer demand opens up, including household and cleaning roles. Contact us for current openings and confirmed terms.",
    jobSlugs: [],
    faqs: [
      {
        question: "What jobs are currently open in Kuwait?",
        answer: "Contact Ajira Majuu directly or message us on WhatsApp for the current list of active openings.",
      },
    ],
  },
  {
    slug: "oman",
    name: "Oman",
    flag: "🇴🇲",
    heroImage: "/images/countries/muscatoman.png",
    shortDescription: "Household and general roles in Oman, subject to current employer demand.",
    about:
      "Ajira Majuu places candidates in Oman as verified employer demand opens up. Contact us for the current list of active roles and their confirmed terms.",
    jobSlugs: [],
    faqs: [
      {
        question: "What jobs are currently open in Oman?",
        answer: "Contact Ajira Majuu directly or message us on WhatsApp for the current list of active openings.",
      },
    ],
  },
  {
    slug: "bahrain",
    name: "Bahrain",
    flag: "🇧🇭",
    heroImage: "/images/countries/manamabahrain.png",
    shortDescription: "Household and general roles in Bahrain, subject to current employer demand.",
    about:
      "Ajira Majuu places candidates in Bahrain as verified employer demand opens up. Contact us for the current list of active roles and their confirmed terms.",
    jobSlugs: [],
    faqs: [
      {
        question: "What jobs are currently open in Bahrain?",
        answer: "Contact Ajira Majuu directly or message us on WhatsApp for the current list of active openings.",
      },
    ],
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}
