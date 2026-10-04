import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations, getDestination } from "@/data/destinations";
import { getJobsForDestination } from "@/data/jobsData";
import { destinationWhatsAppLink, jobWhatsAppLink } from "@/lib/whatsappLink";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const destination = getDestination(params.slug);
  if (!destination) return {};
  return {
    title: `Jobs in ${destination.name} for Kenyans`,
    description: destination.shortDescription,
    alternates: { canonical: `/destinations/${destination.slug}` },
    openGraph: {
      title: `${destination.name} Job Opportunities — Ajira Majuu`,
      description: destination.shortDescription,
      images: [{ url: destination.heroImage }],
    },
  };
}

const PROCESS_STEPS = [
  "Application",
  "Screening",
  "Interview",
  "Documentation",
  "Medical / required checks",
  "Pre-departure preparation",
  "Deployment",
];

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const destination = getDestination(params.slug);
  if (!destination) return notFound();

  const jobs = getJobsForDestination(destination.slug);

  return (
    <main>
      {/* HERO */}
      <section className="relative flex min-h-[320px] items-end overflow-hidden sm:min-h-[420px]">
        <Image src={destination.heroImage} alt={`${destination.name} skyline`} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
            Ajira Majuu · Private Overseas Recruitment Agency in Kenya
          </p>
          <h1 className="mt-2 flex items-center gap-3 text-3xl font-bold text-white sm:text-5xl">
            <span>{destination.flag}</span> {destination.name} Job Opportunities
          </h1>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="#opportunities" className="rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-ink">
              View Opportunities
            </Link>
            <a
              href={destinationWhatsAppLink(destination.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        {/* CURRENT OPPORTUNITIES */}
        <section id="opportunities">
          <h2 className="text-2xl font-bold text-ink">Current Opportunities</h2>
          {jobs.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {jobs.map((job) => (
                <div key={job.slug} className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
                  <div className="relative aspect-[16/10] w-full">
                    <Image src={job.image} alt={job.title} fill className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-bold text-ink">{job.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-brand-purple">{job.salary}</p>
                    {job.salaryNote && <p className="text-xs text-slate-500">{job.salaryNote}</p>}
                    <div className="mt-auto flex gap-2 pt-4">
                      <Link
                        href={`/jobs/${job.slug}`}
                        className="flex-1 rounded-full border border-brand-purple/30 px-3 py-2 text-center text-xs font-semibold text-brand-purple"
                      >
                        View Job
                      </Link>
                      <a
                        href={jobWhatsAppLink(job.title, destination.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-full bg-brand-purple px-3 py-2 text-center text-xs font-semibold text-white"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-600">
              We don't have specific openings published for {destination.name} on the website right now. Job
              availability changes often — message us on WhatsApp and we'll tell you what's currently active.
            </div>
          )}
        </section>

        {/* ABOUT */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-ink">About Working in {destination.name}</h2>
          <p className="mt-3 leading-relaxed text-slate-600">{destination.about}</p>
        </section>

        {/* RECRUITMENT PROCESS */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-ink">Recruitment Process</h2>
          <ol className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {PROCESS_STEPS.map((step, i) => (
              <li key={step} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-purple text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm text-slate-700">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* IMPORTANT INFORMATION */}
        <section className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-lg font-bold text-ink">Important Information</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>Salary and benefits depend on the verified employer and specific job offered.</li>
            <li>Employment terms are governed by your signed employment contract — review it carefully before accepting.</li>
            <li>Job availability changes; a role listed today may close before you apply.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-ink">Frequently Asked Questions</h2>
          <div className="mt-5 divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-white">
            {destination.faqs.map((faq) => (
              <details key={faq.question} className="group p-5">
                <summary className="cursor-pointer list-none font-semibold text-ink marker:content-none">
                  {faq.question}
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mt-14 rounded-2xl bg-brand-purple p-8 text-center text-white">
          <h2 className="text-2xl font-bold">Ready to Apply for {destination.name}?</h2>
          <p className="mt-2 text-white/80">Reach out directly — no account needed.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href={destinationWhatsAppLink(destination.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-ink"
            >
              WhatsApp Ajira Majuu
            </a>
            <Link href="/#contact" className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold">
              Send an Enquiry
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
