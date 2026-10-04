import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { jobs } from "@/data/jobsData";
import { getDestination } from "@/data/destinations";
import { jobWhatsAppLink } from "@/lib/whatsappLink";

export const metadata: Metadata = {
  title: "Current Jobs Abroad for Kenyans",
  description:
    "Browse current overseas job openings placed by Ajira Majuu, a private overseas recruitment agency in Kenya. Apply directly — no account required.",
  alternates: { canonical: "/jobs" },
};

export default function JobsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-purple">
          Ajira Majuu · Private Overseas Recruitment Agency in Kenya
        </p>
        <h1 className="mt-2 text-3xl font-bold text-ink sm:text-4xl">Current Opportunities</h1>
        <p className="mt-3 text-slate-600">
          Every listing below reflects pay and benefits actually confirmed by the employer. Apply directly — no
          account required.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => {
          const destination = getDestination(job.destinationSlug);
          return (
            <div key={job.slug} className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
              <div className="relative aspect-[16/10] w-full">
                <Image src={job.image} alt={job.title} fill className="object-cover" />
                {destination && (
                  <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
                    {destination.flag} {destination.name}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h2 className="font-bold text-ink">{job.title}</h2>
                <p className="mt-1 text-sm font-semibold text-brand-purple">{job.salary}</p>
                <p className="mt-2 line-clamp-2 text-xs text-slate-500">{job.description}</p>
                <div className="mt-auto flex gap-2 pt-4">
                  <Link
                    href={`/jobs/${job.slug}`}
                    className="flex-1 rounded-full border border-brand-purple/30 px-3 py-2 text-center text-xs font-semibold text-brand-purple"
                  >
                    View Job
                  </Link>
                  <a
                    href={jobWhatsAppLink(job.title, destination?.name ?? "")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full bg-brand-purple px-3 py-2 text-center text-xs font-semibold text-white"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-600">
        Don't see a role that fits you? Openings change often across all our destinations — message us on WhatsApp
        and tell us what you're looking for.
      </div>
    </main>
  );
}
