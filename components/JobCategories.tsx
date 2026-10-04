import Image from "next/image";

interface JobCard {
  title: string;
  category: string;
  country: string;
  image: string;
  description: string;
  featured?: boolean;
  dark?: boolean;
}

/*
|--------------------------------------------------------------------------
| JOB DATA
|--------------------------------------------------------------------------
| Existing opportunities are preserved.
| New Oman, Qatar and Turkey opportunities have been added.
|
| Salary / commission amounts are intentionally NOT displayed.
| Applicants are directed to contact Ajira Majuu for current details.
|--------------------------------------------------------------------------
*/

const jobs: JobCard[] = [
  /*
  |--------------------------------------------------------------------------
  | EXISTING JOBS
  |--------------------------------------------------------------------------
  */

  {
    title: "Caregivers",
    category: "Caregiving",
    country: "Qatar",
    image: "/images/jobs/caregiver.png",
    description:
      "Caregiving opportunities for applicants ready to work abroad.",
    featured: true,
    dark: true,
  },

  {
    title: "Men Caregivers",
    category: "Caregiving",
    country: "Gulf",
    image: "/images/jobs/mencaregivers.png",
    description:
      "Male caregiver opportunities for suitable and qualified applicants.",
  },

  {
    title: "Cooks & Kitchen Assistants",
    category: "Hospitality",
    country: "Gulf",
    image: "/images/jobs/cheef.png",
    description:
      "Kitchen and hospitality roles for applicants with relevant experience.",
    dark: true,
  },

  {
    title: "Cooks",
    category: "Hospitality",
    country: "Gulf",
    image: "/images/jobs/cook.png",
    description:
      "Cooking opportunities across overseas hospitality environments.",
  },

  {
    title: "House Maids",
    category: "Household",
    country: "Gulf",
    image: "/images/jobs/cleaner.png",
    description:
      "Domestic work opportunities for suitable female applicants.",
  },

  {
    title: "House Maids",
    category: "Household",
    country: "Gulf",
    image: "/images/jobs/cleanerdesign2.png",
    description:
      "Household employment opportunities with overseas employers.",
    dark: true,
  },

  {
    title: "Cleaners",
    category: "Cleaning",
    country: "Gulf",
    image: "/images/jobs/mencleaners.png",
    description:
      "Cleaning roles for applicants ready to work in overseas facilities.",
  },

  {
    title: "Drivers",
    category: "Driving",
    country: "Gulf",
    image: "/images/jobs/drivers.png",
    description:
      "Driving opportunities for applicants meeting employer requirements.",
    dark: true,
  },

  {
    title: "Female Drivers",
    category: "Driving",
    country: "Gulf",
    image: "/images/jobs/driverslady.png",
    description:
      "Driving opportunities for qualified female applicants.",
  },

  {
    title: "Cleaner + Driver",
    category: "Cleaning & Driving",
    country: "Gulf",
    image: "/images/jobs/combined_cleanerdriverfemale.png",
    description:
      "Combined cleaning and driving opportunities for suitable applicants.",
  },

  {
    title: "Security Guards",
    category: "Security",
    country: "Gulf",
    image: "/images/jobs/mensecurityofficers.png",
    description:
      "Security employment opportunities for suitable applicants.",
    dark: true,
  },

  {
    title: "General Workers",
    category: "General Roles",
    country: "Gulf",
    image: "/images/jobs/men.png",
    description:
      "General overseas employment opportunities across different sectors.",
  },

  {
    title: "Warehouse Helpers",
    category: "Warehouse",
    country: "Gulf",
    image: "/images/jobs/warehosue.png",
    description:
      "Warehouse and support roles for applicants ready to work abroad.",
  },

  /*
  |--------------------------------------------------------------------------
  | OMAN
  |--------------------------------------------------------------------------
  */

  {
    title: "Hotel Cleaners",
    category: "Hospitality",
    country: "Oman",
    image: "/images/jobs/cleanerdesign2.png",
    description:
      "Hotel cleaning opportunities in Oman. Applicants should be ready to travel, medically fit and willing to work overtime where required.",
    featured: true,
  },

  {
    title: "Security Guards",
    category: "Security",
    country: "Oman",
    image: "/images/jobs/mensecurityofficers.png",
    description:
      "Security opportunities in Oman for applicants who meet employer requirements and are ready to travel.",
    dark: true,
  },

  {
    title: "Drivers",
    category: "Driving",
    country: "Oman",
    image: "/images/jobs/drivers.png",
    description:
      "Driver opportunities in Oman for suitable applicants with the required experience and documentation.",
  },

  {
    title: "Housemaids",
    category: "Household",
    country: "Oman",
    image: "/images/jobs/cleaner.png",
    description:
      "Housemaid opportunities in Oman. Experience may influence the final employment package.",
    dark: true,
  },

  /*
  |--------------------------------------------------------------------------
  | QATAR
  |--------------------------------------------------------------------------
  */

  {
    title: "Hotel Cleaners",
    category: "Hospitality",
    country: "Qatar",
    image: "/images/jobs/cleanerdesign2.png",
    description:
      "Hotel cleaning opportunities in Qatar for applicants who are ready to travel and meet employer requirements.",
    featured: true,
  },

  {
    title: "Caregivers",
    category: "Caregiving",
    country: "Qatar",
    image: "/images/jobs/caregiver.png",
    description:
      "Caregiving opportunities in Qatar for suitable applicants with the required attitude, communication skills and readiness to work.",
    dark: true,
  },

  {
    title: "Housemaids",
    category: "Household",
    country: "Qatar",
    image: "/images/jobs/cleaner.png",
    description:
      "Housemaid opportunities in Qatar for suitable applicants ready for overseas employment.",
  },

  {
    title: "Cleaners",
    category: "Cleaning",
    country: "Qatar",
    image: "/images/jobs/mencleaners.png",
    description:
      "Cleaning opportunities in Qatar across suitable workplaces and facilities.",
    dark: true,
  },

  /*
  |--------------------------------------------------------------------------
  | TURKEY
  |--------------------------------------------------------------------------
  */

  {
    title: "Hotel Cleaners",
    category: "Hospitality",
    country: "Turkey",
    image: "/images/jobs/cleanerdesign2.png",
    description:
      "Hotel cleaning opportunities in Turkey for applicants who are medically fit, ready to travel and prepared for overseas employment.",
    featured: true,
  },

  {
    title: "Security Guards",
    category: "Security",
    country: "Turkey",
    image: "/images/jobs/mensecurityofficers.png",
    description:
      "Security opportunities in Turkey for suitable applicants who meet the required employment conditions.",
    dark: true,
  },

  {
    title: "Housemaids",
    category: "Household",
    country: "Turkey",
    image: "/images/jobs/cleaner.png",
    description:
      "Household employment opportunities in Turkey for suitable female applicants.",
  },

  {
    title: "House Girls",
    category: "Household",
    country: "Turkey",
    image: "/images/jobs/cleanerdesign2.png",
    description:
      "Domestic employment opportunities in Turkey. Contact Ajira Majuu for current employer requirements and employment details.",
    dark: true,
  },

  {
    title: "House Girls",
    category: "Household",
    country: "Qatar",
    image: "/images/jobs/cleaner.png",
    description:
      "Domestic employment opportunities in Qatar for suitable applicants ready to work abroad.",
  },
];

export default function JobCategories() {
  return (
    <section
      id="jobs"
      className="relative overflow-hidden bg-[#e8dfd5] px-4 py-20 sm:px-6 sm:py-28"
    >
      {/* ============================================================
          BACKGROUND ATMOSPHERE
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0">
        {/* warm top glow */}
        <div className="absolute -left-48 -top-48 h-[650px] w-[650px] rounded-full bg-[#b98d72]/20 blur-[100px]" />

        {/* cream glow */}
        <div className="absolute -right-48 top-[20%] h-[700px] w-[700px] rounded-full bg-[#fffaf4]/80 blur-[110px]" />

        {/* bottom glow */}
        <div className="absolute bottom-[-300px] left-1/3 h-[700px] w-[700px] rounded-full bg-[#c8a58e]/20 blur-[110px]" />

        {/* subtle light */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 blur-[100px]" />
      </div>

      {/* ============================================================
          MAIN EDITORIAL FRAME
      ============================================================ */}

      <div className="relative mx-auto max-w-[1250px]">
        {/* ==========================================================
            INTRO
        ========================================================== */}

        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-20">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#73503d]/10 bg-white/50 px-5 py-2.5 shadow-[inset_2px_2px_6px_rgba(80,55,40,0.06),inset_-2px_-2px_6px_rgba(255,255,255,0.8)] backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-[#805139]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#765343]">
              Ajira Majuu · Overseas Opportunities
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#805139]" />
          </div>

          <h2 className="font-display text-5xl font-medium leading-[0.9] tracking-[-0.055em] text-[#30241f] sm:text-6xl lg:text-7xl">
            Find your
            <br />
            <span className="italic text-[#85583f]">
              opportunity abroad.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#756960] sm:text-base">
            Explore current recruitment opportunities across Oman, Qatar,
            Turkey and other overseas destinations. Requirements and
            availability change, so contact our recruitment team for the
            latest details.
          </p>
        </div>

        {/* ==========================================================
            EDITORIAL JOB BOARD
        ========================================================== */}

        <div className="relative overflow-hidden rounded-[2.8rem] border border-white/60 bg-[#f7f1e9]/80 p-3 shadow-[0_45px_100px_rgba(68,49,39,0.18)] backdrop-blur-2xl sm:rounded-[4rem] sm:p-5">
          {/* inner frame */}
          <div className="relative overflow-hidden rounded-[2.3rem] bg-[#eee5db] sm:rounded-[3.2rem]">
            {/* ======================================================
                TOP FEATURED AREA
            ====================================================== */}

            <div className="relative min-h-[620px] overflow-hidden bg-[#674531] sm:min-h-[700px]">
              {/* background image */}
              <Image
                src="/images/jobs/caregiver.png"
                alt="Ajira Majuu overseas recruitment opportunities"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover object-center opacity-60"
              />

              {/* warm image overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#39261c]/90 via-[#704b36]/45 to-[#b58b70]/40" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,245,232,0.25),transparent_35%)]" />

              {/* ====================================================
                  HERO TEXT
              ==================================================== */}

              <div className="absolute left-7 top-8 z-10 max-w-xl sm:left-12 sm:top-12 lg:left-16 lg:top-16">
                <div className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/60">
                  Overseas recruitment
                </div>

                <h3 className="mt-5 font-display text-5xl font-medium leading-[0.88] tracking-[-0.055em] text-white sm:text-6xl lg:text-8xl">
                  Jobs
                  <br />
                  <span className="italic text-[#ead8c7]">
                    beyond borders.
                  </span>
                </h3>

                <p className="mt-6 max-w-md text-sm leading-6 text-white/65 sm:text-base">
                  Opportunities for Kenyan workers across the Gulf and
                  selected international destinations.
                </p>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_15px_35px_rgba(0,0,0,0.15)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/20"
                >
                  Enquire about jobs
                  <span className="text-base">↗</span>
                </a>
              </div>

              {/* ====================================================
                  FLOATING COUNTRY CARD
              ==================================================== */}

              <div className="absolute bottom-7 left-6 z-20 w-[calc(100%-3rem)] max-w-[350px] sm:bottom-12 sm:left-12 sm:w-[360px]">
                <div className="rounded-[2rem] border border-white/30 bg-[#faf6f0]/95 p-6 shadow-[12px_20px_55px_rgba(37,25,18,0.25),inset_2px_2px_8px_rgba(255,255,255,0.9)] backdrop-blur-2xl sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#947967]">
                      Featured destinations
                    </span>

                    <span className="rounded-full bg-[#e8ded3] px-3 py-1 text-[8px] font-semibold text-[#765343]">
                      2026
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {["Oman", "Qatar", "Turkey"].map((country) => (
                      <div
                        key={country}
                        className="rounded-2xl bg-[#eee5db] px-3 py-4 text-center shadow-[inset_2px_2px_6px_rgba(100,75,55,0.06),inset_-2px_-2px_6px_rgba(255,255,255,0.8)]"
                      >
                        <div className="font-display text-lg text-[#3d2d25]">
                          {country}
                        </div>

                        <div className="mt-1 text-[7px] uppercase tracking-[0.12em] text-[#9b897d]">
                          Opportunities
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ====================================================
                  DECORATIVE CENTER CARD
              ==================================================== */}

              <div className="absolute right-[8%] top-[38%] z-20 hidden w-[260px] rotate-[3deg] md:block lg:w-[290px]">
                <div className="overflow-hidden rounded-[2rem] border border-white/30 bg-[#a96f4d]/90 p-2 shadow-[20px_25px_60px_rgba(37,25,18,0.25)] backdrop-blur-xl">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                    <Image
                      src="/images/jobs/mencaregivers.png"
                      alt="Overseas job opportunity"
                      fill
                      sizes="290px"
                      className="object-cover object-top"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#40291e]/90 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="text-[8px] uppercase tracking-[0.22em] text-white/60">
                        Opportunity
                      </div>

                      <div className="mt-2 font-display text-3xl leading-none text-white">
                        Caregiving
                      </div>

                      <div className="mt-2 text-[10px] text-white/65">
                        Contact us for current openings.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ======================================================
                JOB GRID / MASONRY SECTION
            ====================================================== */}

            <div className="relative bg-[#eee5db] px-4 py-5 sm:px-7 sm:py-7">
              {/* large cream wave */}
              <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#fffaf5]/70 blur-3xl" />

              {/* ==================================================
                  SECTION HEADER
              ================================================== */}

              <div className="relative mb-6 flex flex-col justify-between gap-4 px-2 sm:flex-row sm:items-end sm:px-4">
                <div>
                  <div className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#9a8374]">
                    Explore opportunities
                  </div>

                  <h3 className="mt-2 font-display text-3xl tracking-[-0.04em] text-[#332720] sm:text-4xl">
                    Current openings
                  </h3>
                </div>

                <div className="max-w-xs text-xs leading-5 text-[#8a7a70] sm:text-right">
                  Salaries, commission arrangements, employer requirements and
                  availability are confirmed directly with our recruitment
                  team.
                </div>
              </div>

              {/* ==================================================
                  MASONRY-STYLE GRID
              ================================================== */}

              <div className="relative grid auto-rows-[150px] grid-cols-2 gap-4 sm:auto-rows-[170px] sm:grid-cols-4 sm:gap-5">
                {jobs.map((job, index) => {
                  /*
                   * Deliberately varied spans create the editorial
                   * magazine / reference-image composition rather than
                   * a repetitive standard card grid.
                   */

                  const layoutClasses = [
                    "col-span-2 row-span-3",
                    "col-span-1 row-span-2",
                    "col-span-1 row-span-2",
                    "col-span-2 row-span-2",
                    "col-span-1 row-span-3",
                    "col-span-1 row-span-2",
                    "col-span-2 row-span-3",
                    "col-span-1 row-span-2",
                    "col-span-1 row-span-2",
                    "col-span-2 row-span-2",
                    "col-span-1 row-span-3",
                    "col-span-1 row-span-2",
                    "col-span-2 row-span-3",
                    "col-span-2 row-span-2",
                    "col-span-1 row-span-2",
                    "col-span-1 row-span-3",
                    "col-span-2 row-span-2",
                    "col-span-1 row-span-2",
                    "col-span-1 row-span-3",
                    "col-span-2 row-span-2",
                    "col-span-1 row-span-2",
                    "col-span-1 row-span-3",
                    "col-span-2 row-span-2",
                    "col-span-1 row-span-2",
                    "col-span-1 row-span-3",
                    "col-span-2 row-span-2",
                    "col-span-2 row-span-2",
                  ];

                  const mobileLayoutClasses = [
                    "col-span-2 row-span-3",
                    "col-span-2 row-span-2",
                    "col-span-2 row-span-2",
                    "col-span-2 row-span-3",
                    "col-span-2 row-span-2",
                    "col-span-2 row-span-2",
                  ];

                  const desktopClass =
                    layoutClasses[index % layoutClasses.length];

                  const mobileClass =
                    mobileLayoutClasses[index % mobileLayoutClasses.length];

                  return (
                    <a
                      key={`${job.title}-${job.country}-${index}`}
                      href="#contact"
                      className={`group relative block overflow-hidden rounded-[1.7rem] border border-white/70 bg-white shadow-[8px_12px_30px_rgba(78,57,43,0.10),inset_2px_2px_6px_rgba(255,255,255,0.9)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[15px_25px_50px_rgba(78,57,43,0.18)] ${mobileClass} sm:${desktopClass}`}
                    >
                      {/* ==================================================
                          IMAGE
                      ================================================== */}

                      <div className="absolute inset-0">
                        <Image
                          src={job.image}
                          alt={`${job.title} - ${job.country}`}
                          fill
                          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 300px"
                          className="object-cover object-top transition duration-700 group-hover:scale-110"
                        />
                      </div>

                      {/* ==================================================
                          IMAGE OVERLAY
                      ================================================== */}

                      <div
                        className={`absolute inset-0 ${
                          job.dark
                            ? "bg-gradient-to-t from-[#39251b]/95 via-[#39251b]/20 to-transparent"
                            : "bg-gradient-to-t from-[#39251b]/85 via-[#39251b]/10 to-transparent"
                        }`}
                      />

                      {/* top glass badge */}
                      <div className="absolute left-4 right-4 top-4 flex items-start justify-between">
                        <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-[7px] font-semibold uppercase tracking-[0.17em] text-white shadow-lg backdrop-blur-xl">
                          {job.country}
                        </span>

                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition group-hover:rotate-45">
                          ↗
                        </span>
                      </div>

                      {/* ==================================================
                          CARD CONTENT
                      ================================================== */}

                      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                        <div className="mb-2 text-[7px] font-semibold uppercase tracking-[0.23em] text-[#ead7c5]/80">
                          {job.category}
                        </div>

                        <h4
                          className={`font-display leading-[0.92] tracking-[-0.035em] text-white ${
                            job.featured
                              ? "text-3xl sm:text-4xl"
                              : "text-2xl sm:text-3xl"
                          }`}
                        >
                          {job.title}
                        </h4>

                        <p className="mt-3 max-w-sm text-[9px] leading-4 text-white/65 sm:text-[10px] sm:leading-5">
                          {job.description}
                        </p>

                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/70">
                            Enquire
                          </span>

                          <span className="text-[11px] text-white/80">
                            →
                          </span>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* ==================================================
                  CONTACT / INFORMATION CARD
              ================================================== */}

              <div className="relative mt-5 overflow-hidden rounded-[2rem] bg-[#f9f5ef] p-6 shadow-[inset_2px_2px_8px_rgba(255,255,255,0.9),8px_12px_30px_rgba(78,57,43,0.08)] sm:p-9">
                {/* decorative circle */}
                <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#d3b29c]/20 blur-2xl" />

                <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <div className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#9a806f]">
                      Important
                    </div>

                    <h3 className="mt-3 font-display text-3xl leading-none tracking-[-0.04em] text-[#352820] sm:text-4xl">
                      Interested in one of
                      <br className="hidden sm:block" />
                      these opportunities?
                    </h3>

                    <p className="mt-4 max-w-2xl text-xs leading-6 text-[#82746b] sm:text-sm">
                      Recruitment availability changes regularly. Contact
                      Ajira Majuu to confirm the latest vacancies, employer
                      requirements, salary information, commission arrangements,
                      travel requirements and application process.
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-[#684735] px-7 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-[0_15px_30px_rgba(86,57,40,0.22)] transition hover:-translate-y-1 hover:bg-[#583a2c]"
                  >
                    Contact Ajira Majuu
                    <span className="text-base">↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* ======================================================
                BOTTOM EDITORIAL STRIP
            ====================================================== */}

            <div className="relative flex flex-col gap-5 bg-[#faf7f1] px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
              <div>
                <div className="font-display text-2xl tracking-[-0.03em] text-[#3a2b24]">
                  Ready for your next chapter?
                </div>

                <div className="mt-1 text-[10px] text-[#94867d]">
                  Kenya → Gulf → International opportunities
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="hidden h-px w-16 bg-[#77513c]/20 sm:block" />

                <span className="text-[8px] uppercase tracking-[0.25em] text-[#917d70]">
                  Ajira Majuu
                </span>

                <span className="h-8 w-8 rounded-full border border-[#76513d]/15 bg-[#eee5db] text-center text-sm leading-8 text-[#73503c] shadow-[inset_1px_1px_4px_rgba(100,70,50,0.06)]">
                  ↗
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================================
            OUTSIDE FOOTER LABEL
        ========================================================== */}

        <div className="mt-8 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-[#77513c]/20" />

          <span className="text-[8px] uppercase tracking-[0.3em] text-[#8e796b]">
            Ajira Majuu · Kenya
          </span>

          <span className="h-px w-12 bg-[#77513c]/20" />
        </div>
      </div>
    </section>
  );
}