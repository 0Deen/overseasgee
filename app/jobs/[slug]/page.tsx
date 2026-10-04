import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { jobs, getJob, getRelatedJobs } from "@/data/jobsData";
import { getDestination } from "@/data/destinations";
import { jobWhatsAppLink } from "@/lib/whatsappLink";

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const job = getJob(params.slug);
  if (!job) return {};
  const destination = getDestination(job.destinationSlug);
  const title = `${job.title}${destination ? ` — ${destination.name}` : ""} | Ajira Majuu`;
  return {
    title,
    description: `${job.title} opportunity${destination ? ` in ${destination.name}` : ""}. ${job.salary}. Apply with Ajira Majuu — no account required.`,
    alternates: { canonical: `/jobs/${job.slug}` },
    openGraph: {
      title,
      description: job.description,
      images: [{ url: job.image }],
    },
  };
}

export default function JobDetailPage({ params }: { params: { slug: string } }) {
  const job = getJob(params.slug);
  if (!job) return notFound();

  const destination = getDestination(job.destinationSlug);
  const related = getRelatedJobs(job);
  const waLink = jobWhatsAppLink(job.title, destination?.name ?? "");

  // JobPosting structured data — only for fields we actually have real
  // data for. We deliberately omit hiringOrganization identifiers and
  // baseSalary structured fields we can't verify precisely (salary here is
  // a range/conditional string, not a single verified number), rather than
  // forcing it into a schema that implies more certainty than we have.
  const jobPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    employmentType: "FULL_TIME",
    jobLocation: destination
      ? { "@type": "Place", address: { "@type": "PostalAddress", addressCountry: destination.name } }
      : undefined,
    hiringOrganization: { "@type": "Organization", name: "Ajira Majuu" },
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }} />

      <nav className="text-xs text-slate-500">
        <Link href="/jobs" className="hover:text-brand-purple">
          Jobs
        </Link>
        {destination && (
          <>
            {" / "}
            <Link href={`/destinations/${destination.slug}`} className="hover:text-brand-purple">
              {destination.name}
            </Link>
          </>
        )}
        {" / "}
        <span className="text-slate-700">{job.title}</span>
      </nav>

      <div className="mt-4 overflow-hidden rounded-2xl">
        <div className="relative aspect-[16/9] w-full">
          <Image src={job.image} alt={job.title} fill priority className="object-cover" />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-ink">{job.title}</h1>
          {destination && (
            <Link href={`/destinations/${destination.slug}`} className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-brand-purple">
              {destination.flag} {destination.name}
            </Link>
          )}
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-brand-purple">{job.salary}</p>
          {job.salaryNote && <p className="text-xs text-slate-500">{job.salaryNote}</p>}
        </div>
      </div>

      <p className="mt-4 leading-relaxed text-slate-600">{job.description}</p>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <section>
          <h2 className="text-lg font-bold text-ink">Requirements</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
            {job.requirements.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-bold text-ink">Responsibilities</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
            {job.responsibilities.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-8">
        <h2 className="text-lg font-bold text-ink">Benefits</h2>
        <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {job.benefits.map((b) => (
            <li key={b} className="rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700">
              {b}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-slate-500">
          Benefits are subject to the verified employer's offer and your signed employment contract.
        </p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-100 bg-slate-50 p-5">
        <h2 className="text-lg font-bold text-ink">Application Process</h2>
        <p className="mt-2 text-sm text-slate-600">
          Apply directly through WhatsApp or our contact form — no account or login required. Our recruitment team
          will review your details and follow up with next steps, which typically include screening, an interview,
          documentation, required medical checks, and pre-departure preparation before deployment.
        </p>
      </section>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-brand-purple px-6 py-3 text-sm font-semibold text-white">
          Apply via WhatsApp
        </a>
        <Link href="/#contact" className="rounded-full border border-brand-purple/30 px-6 py-3 text-sm font-semibold text-brand-purple">
          Apply via Contact Form
        </Link>
        <a href="mailto:deen@ajiramajuu.com" className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600">
          Email Us
        </a>
      </div>

      <section className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-slate-700">
        <strong className="text-ink">Important:</strong> Salary and benefits above reflect what this specific
        employer has offered. Final terms are governed by your signed employment contract — review it carefully
        before accepting.
      </section>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-lg font-bold text-ink">Related Jobs</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/jobs/${r.slug}`} className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm hover:shadow-md">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                  <Image src={r.image} alt={r.title} fill className="object-cover" />
                </div>
                <p className="mt-2 text-sm font-semibold text-ink">{r.title}</p>
                <p className="text-xs text-brand-purple">{r.salary}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {destination && (
        <p className="mt-10 text-sm text-slate-500">
          Looking for other roles in {destination.name}?{" "}
          <Link href={`/destinations/${destination.slug}`} className="font-medium text-brand-purple underline">
            See all {destination.name} opportunities →
          </Link>
        </p>
      )}
    </main>
  );
}
