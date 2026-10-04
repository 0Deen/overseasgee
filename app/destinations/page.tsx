import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { destinations } from "@/data/destinations";
import { getJobsForDestination } from "@/data/jobsData";

export const metadata: Metadata = {
  title: "Destinations — Overseas Job Opportunities for Kenyans",
  description:
    "Explore the countries Ajira Majuu recruits for, including Qatar, Saudi Arabia, UAE, Kuwait, Oman and Bahrain. See current openings and how to apply.",
  alternates: { canonical: "/destinations" },
};

export default function DestinationsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-purple">
          Ajira Majuu · Private Overseas Recruitment Agency in Kenya
        </p>
        <h1 className="mt-2 text-3xl font-bold text-ink sm:text-4xl">Where We Place Kenyan Talent</h1>
        <p className="mt-3 text-slate-600">
          Pick a country to see current openings, what to expect, and how to apply — no account required.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((d) => {
          const jobCount = getJobsForDestination(d.slug).length;
          return (
            <Link
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={d.heroImage}
                  alt={`${d.name} — overseas job opportunities`}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white">
                  <span className="text-xl">{d.flag}</span>
                  <span className="text-lg font-bold">{d.name}</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-600">{d.shortDescription}</p>
                <p className="mt-2 text-xs font-medium text-brand-purple">
                  {jobCount > 0 ? `${jobCount} current opening${jobCount === 1 ? "" : "s"}` : "Contact us for current openings"}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-orange">
                  View {d.name} Opportunities <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
