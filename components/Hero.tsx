import Image from "next/image";

export default function Hero() {
  const destinations = [
    "Saudi Arabia",
    "United Arab Emirates",
    "Qatar",
    "Kuwait",
    "Bahrain",
    "Oman",
  ];

  return (
    <section
      id="top"
      className="
        relative
        overflow-hidden
        bg-[#d8cec3]
        px-2
        py-3
        sm:px-4
        sm:py-6
        lg:px-6
      "
    >
      {/* ================================================================
          GLOBAL ATMOSPHERE
      ================================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-[25%]
            -top-[8%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#f6f0e8]
            opacity-80
            blur-[110px]
          "
        />

        <div
          className="
            absolute
            -right-[20%]
            top-[4%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#a47b5c]
            opacity-20
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[42%]
            h-[800px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-[#f7f2eb]
            opacity-80
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            -bottom-[20%]
            left-1/2
            h-[700px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-[#b89a81]
            opacity-20
            blur-[140px]
          "
        />
      </div>

      {/* ================================================================
          EDITORIAL WEBSITE CANVAS
      ================================================================= */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[760px]
          overflow-hidden
          rounded-[2rem]
          bg-[#f4efe8]
          shadow-[0_45px_120px_rgba(58,43,33,0.25)]
          sm:rounded-[2.75rem]
          lg:rounded-[3.25rem]
        "
      >
        {/* ==============================================================
            INNER FRAME
        ============================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[100]
            rounded-[2rem]
            border
            border-white/40
            sm:rounded-[2.75rem]
            lg:rounded-[3.25rem]
          "
        />

        {/* ==============================================================
            TOP BROWN / PHOTOGRAPHIC WORLD
        ============================================================== */}

        <div
          className="
            relative
            h-[610px]
            overflow-hidden
            bg-[#5d4030]
            sm:h-[720px]
            md:h-[790px]
          "
        >
          {/* ------------------------------------------------------------
              PHOTO
          ------------------------------------------------------------- */}

          <Image
            src="/images/jobs/mencaregivers.png"
            alt="Ajira Majuu overseas employment"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 760px"
            className="
              object-cover
              object-center
              scale-[1.08]
            "
          />

          {/* ------------------------------------------------------------
              CINEMATIC COLOR TREATMENT
          ------------------------------------------------------------- */}

          <div
            className="
              absolute
              inset-0
              bg-[#4b3022]/60
              mix-blend-multiply
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-[#3d281f]/90
              via-[#76533d]/35
              to-[#c29b7b]/35
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-[#342219]/25
              via-transparent
              to-[#3d281f]/75
            "
          />

          {/* ------------------------------------------------------------
              HUGE CURVED GLASS PANEL
          ------------------------------------------------------------- */}

          <div
            className="
              pointer-events-none
              absolute
              -left-[24%]
              -top-[18%]
              h-[560px]
              w-[91%]
              rounded-br-[10rem]
              rounded-tl-[5rem]
              border
              border-white/[0.20]
              bg-white/[0.075]
              shadow-[inset_-35px_-35px_90px_rgba(255,255,255,0.08),inset_20px_20px_70px_rgba(255,255,255,0.035)]
              backdrop-blur-[5px]
              sm:h-[670px]
              sm:rounded-br-[13rem]
            "
          />

          {/* inner glass reflection */}

          <div
            className="
              pointer-events-none
              absolute
              -left-[14%]
              top-[7%]
              h-[300px]
              w-[65%]
              rounded-br-[8rem]
              border
              border-white/[0.10]
              bg-white/[0.025]
            "
          />

          {/* ------------------------------------------------------------
              ARCHITECTURAL LIGHT
          ------------------------------------------------------------- */}

          <div
            className="
              pointer-events-none
              absolute
              right-[20%]
              top-0
              h-full
              w-px
              bg-gradient-to-b
              from-transparent
              via-white/55
              to-transparent
              shadow-[0_0_25px_rgba(255,255,255,0.3)]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              right-[15%]
              top-[8%]
              h-[58%]
              w-[85px]
              bg-white/[0.08]
              blur-[40px]
            "
          />

          {/* ------------------------------------------------------------
              WARM GLOW
          ------------------------------------------------------------- */}

          <div
            className="
              pointer-events-none
              absolute
              -right-[15%]
              top-[-10%]
              h-[500px]
              w-[500px]
              rounded-full
              bg-[#d9b797]/20
              blur-[100px]
            "
          />

          {/* ============================================================
              NAVIGATION
          ============================================================= */}

          <div
            className="
              relative
              z-30
              flex
              items-center
              justify-between
              px-5
              pt-5
              sm:px-8
              sm:pt-7
              md:px-10
            "
          >
            {/* menu */}

            <button
              type="button"
              aria-label="Open menu"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/[0.07]
                backdrop-blur-xl
              "
            >
              <span className="flex flex-col gap-[3px]">
                <span className="h-px w-3 bg-white/80" />
                <span className="h-px w-3 bg-white/80" />
                <span className="h-px w-2 bg-white/60" />
              </span>
            </button>

            {/* desktop mini nav */}

            <div
              className="
                hidden
                items-center
                gap-5
                text-[6px]
                uppercase
                tracking-[0.18em]
                text-white/60
                sm:flex
              "
            >
              <span>Opportunities</span>
              <span>Destinations</span>
              <span>Careers</span>
              <span>Ajira</span>
              <span>Contact</span>
            </div>

            {/* logo */}

            <div
              className="
                relative
                h-8
                w-8
                overflow-hidden
                rounded-full
                border
                border-white/25
                bg-white/10
                backdrop-blur-xl
              "
            >
              <Image
                src="/logo.jpeg"
                alt="Ajira Majuu"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* ============================================================
              HERO TYPOGRAPHY
          ============================================================= */}

          <div
            className="
              relative
              z-20
              px-8
              pt-16
              sm:px-12
              sm:pt-20
              md:px-16
              md:pt-24
            "
          >
            <div className="text-[7px] uppercase tracking-[0.30em] text-white/50">
              Ajira Majuu
            </div>

            <h1
              className="
                mt-4
                max-w-[500px]
                font-display
                text-[3.5rem]
                font-normal
                leading-[0.82]
                tracking-[-0.06em]
                text-[#f8f3ec]
                sm:text-[4.8rem]
                md:text-[5.5rem]
              "
            >
              Your Job
              <br />
              <span className="italic text-[#dfc1a5]">
                Beyond
              </span>
              <br />
              Borders.
            </h1>

            <p
              className="
                mt-5
                max-w-[300px]
                text-[8px]
                leading-5
                text-white/50
                sm:max-w-[340px]
                sm:text-[9px]
                sm:leading-6
              "
            >
              Connecting Kenyan talent with legitimate employment
              opportunities across the Gulf.
            </p>

            <div className="mt-5 flex gap-2">
              <a
                href="#jobs"
                className="
                  rounded-full
                  bg-[#f8f3eb]
                  px-4
                  py-2
                  text-[6px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-[#3d2b22]
                  shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                  transition
                  hover:-translate-y-0.5
                "
              >
                Find a Job
              </a>

              <a
                href="#contact"
                className="
                  rounded-full
                  border
                  border-white/20
                  bg-white/[0.07]
                  px-4
                  py-2
                  text-[6px]
                  font-medium
                  uppercase
                  tracking-[0.14em]
                  text-white/80
                  backdrop-blur-xl
                  transition
                  hover:bg-white/[0.12]
                "
              >
                Contact
              </a>
            </div>
          </div>

          {/* ============================================================
              FLOATING GLASS HERO CARD
          ============================================================= */}

          <div
            className="
              absolute
              bottom-[34px]
              left-[6%]
              z-40
              w-[54%]
              max-w-[310px]
              rounded-[1.8rem]
              border
              border-white/20
              bg-white/[0.10]
              p-5
              shadow-[0_30px_70px_rgba(25,15,10,0.30),inset_0_1px_0_rgba(255,255,255,0.18)]
              backdrop-blur-xl
              sm:bottom-[45px]
              sm:left-[8%]
              sm:rounded-[2rem]
              sm:p-6
            "
          >
            <div className="text-[6px] uppercase tracking-[0.25em] text-white/45">
              Your journey starts here
            </div>

            <h3
              className="
                mt-3
                font-display
                text-[1.8rem]
                leading-[0.86]
                tracking-[-0.05em]
                text-white
                sm:text-[2.4rem]
              "
            >
              Find the right
              <br />
              <span className="italic text-[#dfc1a5]">
                opportunity.
              </span>
            </h3>

            <div className="mt-4 h-px bg-white/10" />

            <div className="mt-3 flex justify-between text-[6px] uppercase tracking-[0.18em] text-white/40">
              <span>Recruitment</span>
              <span>01 / 06</span>
            </div>
          </div>

          {/* ============================================================
              FLOATING PHOTO / GLASS WINDOW
          ============================================================= */}

          <div
            className="
              absolute
              bottom-[-30px]
              right-[-13%]
              z-30
              h-[390px]
              w-[62%]
              sm:bottom-[-45px]
              sm:right-[-4%]
              sm:h-[520px]
              sm:w-[57%]
              md:h-[590px]
              md:w-[53%]
            "
          >
            <div
              className="
                absolute
                inset-[-20px]
                rounded-[4rem]
                bg-[#d7b79a]/15
                blur-2xl
              "
            />

            <div
              className="
                absolute
                inset-0
                overflow-hidden
                rounded-[3.5rem]
                border
                border-white/20
                bg-white/[0.06]
                p-2
                shadow-[0_40px_90px_rgba(20,10,5,0.35)]
                backdrop-blur-sm
              "
            >
              <div className="relative h-full w-full overflow-hidden rounded-[3rem]">
                <Image
                  src="/images/jobs/mencaregivers.png"
                  alt="Ajira Majuu caregiver"
                  fill
                  sizes="(max-width: 640px) 62vw, 53vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#3d281d]/55 via-transparent to-white/[0.08]" />

                <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/[0.08] to-transparent" />
              </div>
            </div>

            {/* floating label */}

            <div
              className="
                absolute
                bottom-10
                left-[-30px]
                z-30
                flex
                items-center
                gap-2
                rounded-2xl
                border
                border-white/50
                bg-[#f8f4ed]/90
                py-2
                pl-2
                pr-4
                shadow-[0_18px_45px_rgba(40,25,18,0.20)]
                backdrop-blur-xl
                sm:bottom-14
                sm:left-[-45px]
              "
            >
              <span className="relative h-8 w-8 overflow-hidden rounded-xl">
                <Image
                  src="/logo.jpeg"
                  alt="Ajira Majuu"
                  fill
                  className="object-cover"
                />
              </span>

              <span className="font-display text-[10px] font-semibold text-[#3e2a20]">
                Ajira Majuu
              </span>
            </div>
          </div>
        </div>

        {/* ==============================================================
            CREAM EDITORIAL SECTION
        ============================================================== */}

        <div
          className="
            relative
            min-h-[480px]
            overflow-visible
            bg-[#f4efe8]
            px-6
            pb-20
            pt-24
            sm:px-10
            sm:pb-28
            sm:pt-28
          "
        >
          {/* atmospheric lighting */}

          <div
            className="
              pointer-events-none
              absolute
              -right-[25%]
              top-[10%]
              h-[400px]
              w-[400px]
              rounded-full
              bg-[#cbb29d]/25
              blur-[90px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-[100px]
              left-[-20%]
              h-[400px]
              w-[550px]
              rounded-full
              bg-white/80
              blur-[90px]
            "
          />

          {/* ==========================================================
              FLOATING WHITE CARD
          ========================================================== */}

          <div
            className="
              absolute
              left-[7%]
              top-[-42px]
              z-40
              w-[56%]
              max-w-[340px]
              rounded-[1.8rem]
              border
              border-white/90
              bg-[#fcfbf8]/95
              p-5
              shadow-[0_30px_70px_rgba(55,40,30,0.16),inset_0_1px_0_white]
              backdrop-blur-xl
              sm:left-[8%]
              sm:top-[-58px]
              sm:rounded-[2.1rem]
              sm:p-7
            "
          >
            <div className="text-[6px] uppercase tracking-[0.27em] text-[#a09389]">
              Recruitment
            </div>

            <h2
              className="
                mt-3
                font-display
                text-[2.2rem]
                leading-[0.84]
                tracking-[-0.05em]
                text-[#33231c]
                sm:text-[3rem]
              "
            >
              Your
              <br />
              <span className="italic font-normal text-[#a17b5d]">
                journey.
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-[215px]
                text-[7px]
                leading-4
                text-[#7b716a]
                sm:text-[8px]
                sm:leading-5
              "
            >
              From finding the right opportunity to preparing
              for your next step, we help you understand the
              recruitment process.
            </p>

            <button
              type="button"
              className="
                mt-4
                rounded-full
                border
                border-[#3d2b22]/10
                bg-white
                px-3
                py-1.5
                text-[6px]
                uppercase
                tracking-[0.14em]
                text-[#3d2b22]
                shadow-[0_8px_20px_rgba(50,35,25,0.06)]
              "
            >
              Learn more
            </button>
          </div>

          {/* ==========================================================
              FLOATING BROWN GLASS CARD
          ========================================================== */}

          <div
            className="
              absolute
              right-[5%]
              top-[18px]
              z-50
              w-[52%]
              max-w-[310px]
              overflow-hidden
              rounded-[1.8rem]
              border
              border-white/20
              bg-gradient-to-br
              from-[#bc9172]
              via-[#9c6f52]
              to-[#674431]
              p-5
              text-white
              shadow-[0_35px_75px_rgba(60,38,27,0.28),inset_0_1px_0_rgba(255,255,255,0.20)]
              backdrop-blur-xl
              sm:right-[8%]
              sm:top-[4px]
              sm:rounded-[2.1rem]
              sm:p-7
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -right-14
                -top-20
                h-[260px]
                w-[90px]
                rotate-[35deg]
                bg-white/[0.10]
                blur-[15px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -left-12
                -top-12
                h-36
                w-36
                rounded-full
                bg-[#f0d5bd]/20
                blur-[35px]
              "
            />

            <div className="relative z-10">
              <div className="text-[6px] uppercase tracking-[0.25em] text-white/50">
                Opportunities
              </div>

              <div
                className="
                  mt-3
                  font-display
                  text-[2rem]
                  leading-[0.83]
                  tracking-[-0.05em]
                  sm:text-[2.8rem]
                "
              >
                7
                <br />
                <span className="italic font-normal text-[#ead0b8]">
                  categories.
                </span>
              </div>

              <p className="mt-4 max-w-[180px] text-[7px] leading-4 text-white/55">
                Explore opportunities designed around your
                skills and experience.
              </p>

              <div
                className="
                  mt-4
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/25
                  bg-white/10
                  text-[9px]
                  backdrop-blur-md
                "
              >
                ↗
              </div>
            </div>
          </div>

          {/* ==========================================================
              EDITORIAL HEADLINE
          ========================================================== */}

          <div className="relative z-10 pt-[135px] sm:pt-[165px]">
            <div className="text-[6px] uppercase tracking-[0.28em] text-[#a09389]">
              Kenya → Gulf
            </div>

            <h2
              className="
                mt-3
                max-w-[390px]
                font-display
                text-[2.7rem]
                leading-[0.85]
                tracking-[-0.055em]
                text-[#3e2a20]
                sm:text-[3.8rem]
              "
            >
              Human
              <br />
              <span className="italic font-normal text-[#9d7658]">
                opportunities.
              </span>
            </h2>

            <p className="mt-5 max-w-[330px] text-[8px] leading-5 text-[#756d66]">
              Legitimate recruitment. Clear information.
              Real opportunities for Kenyan talent.
            </p>
          </div>
        </div>

        {/* ==============================================================
            CENTRAL GLASS SCULPTURE AREA
        ============================================================== */}

        <div
          className="
            relative
            h-[410px]
            overflow-hidden
            bg-gradient-to-b
            from-[#f4efe8]
            via-[#e9e0d6]
            to-[#f6f2ed]
            sm:h-[500px]
          "
        >
          {/* central atmosphere */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[360px]
              w-[550px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/75
              blur-[80px]
            "
          />

          {/* ==========================================================
              ABSTRACT GLASS OBJECT
          ========================================================== */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              z-40
              h-[255px]
              w-[170px]
              -translate-x-1/2
              -translate-y-1/2
              overflow-hidden
              rounded-[2rem]
              border
              border-white/65
              bg-white/[0.22]
              shadow-[0_40px_90px_rgba(65,45,33,0.18),inset_0_1px_0_rgba(255,255,255,0.9)]
              backdrop-blur-xl
              sm:h-[330px]
              sm:w-[220px]
              sm:rounded-[2.6rem]
            "
          >
            {/* left glass form */}

            <div
              className="
                absolute
                -left-[38px]
                top-[30px]
                h-[245px]
                w-[115px]
                rotate-[28deg]
                rounded-[4rem]
                border
                border-white/45
                bg-gradient-to-br
                from-white/70
                via-[#d1b39a]/45
                to-[#866049]/20
                shadow-[inset_-15px_-20px_35px_rgba(70,45,32,0.14),inset_12px_12px_30px_rgba(255,255,255,0.50)]
                sm:h-[320px]
                sm:w-[135px]
              "
            />

            {/* right glass form */}

            <div
              className="
                absolute
                -right-[38px]
                -top-[35px]
                h-[300px]
                w-[125px]
                rotate-[28deg]
                rounded-[4rem]
                border
                border-white/40
                bg-gradient-to-bl
                from-white/55
                via-[#b99578]/35
                to-[#6b4935]/20
                shadow-[inset_14px_14px_35px_rgba(255,255,255,0.40),inset_-12px_-12px_30px_rgba(60,38,25,0.12)]
                sm:h-[365px]
                sm:w-[150px]
              "
            />

            {/* central luminous bloom */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[190px]
                w-[80px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-white/30
                blur-[25px]
              "
            />

            {/* diagonal highlight */}

            <div
              className="
                absolute
                left-[27%]
                top-[28%]
                h-[130px]
                w-[30px]
                rotate-[35deg]
                rounded-full
                bg-white/50
                blur-[9px]
              "
            />

            <div
              className="
                absolute
                bottom-5
                left-5
                text-[6px]
                uppercase
                tracking-[0.24em]
                text-[#665044]/60
              "
            >
              Possibility
            </div>
          </div>

          {/* decorative circles */}

          <div
            className="
              absolute
              bottom-[42px]
              left-[11%]
              h-11
              w-11
              rounded-full
              border
              border-[#3d2b22]/10
              bg-white/35
              shadow-[inset_2px_2px_8px_rgba(255,255,255,0.8),0_12px_25px_rgba(60,45,35,0.06)]
              backdrop-blur-md
            "
          />

          <div
            className="
              absolute
              right-[12%]
              top-[50px]
              h-14
              w-14
              rounded-full
              bg-[#c9ab92]/20
              blur-[10px]
            "
          />
        </div>

        {/* ==============================================================
            LOWER OVERLAPPING EDITORIAL SECTION
        ============================================================== */}

        <div
          className="
            relative
            min-h-[650px]
            overflow-visible
            bg-[#e8dfd5]
            px-6
            pb-24
            pt-24
            sm:px-10
            sm:pb-28
            sm:pt-28
          "
        >
          {/* background light */}

          <div
            className="
              pointer-events-none
              absolute
              -left-[25%]
              top-[10%]
              h-[450px]
              w-[550px]
              rounded-full
              bg-[#d4bda7]/30
              blur-[90px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-[25%]
              bottom-[-10%]
              h-[500px]
              w-[600px]
              rounded-full
              bg-white/80
              blur-[100px]
            "
          />

          {/* ==========================================================
              WHITE DESTINATION CARD
          ========================================================== */}

          <div
            className="
              absolute
              left-[8%]
              top-[-30px]
              z-40
              w-[55%]
              max-w-[330px]
              rounded-[1.8rem]
              border
              border-white/90
              bg-[#fcfbf8]/95
              p-5
              shadow-[0_30px_70px_rgba(61,45,35,0.16),inset_0_1px_0_white]
              backdrop-blur-xl
              sm:left-[9%]
              sm:top-[-45px]
              sm:rounded-[2.1rem]
              sm:p-7
            "
          >
            <div className="text-[6px] uppercase tracking-[0.28em] text-[#9c9086]">
              Destinations
            </div>

            <h3
              className="
                mt-3
                font-display
                text-[2.25rem]
                leading-[0.84]
                tracking-[-0.05em]
                text-[#34241d]
                sm:text-[3rem]
              "
            >
              Gulf
              <br />
              <span className="italic font-normal text-[#9c7659]">
                possibilities.
              </span>
            </h3>

            <p className="mt-4 text-[7px] leading-4 text-[#7a716a] sm:text-[8px] sm:leading-5">
              Saudi Arabia, UAE, Qatar, Kuwait, Bahrain
              and Oman.
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-[6px] uppercase tracking-[0.18em] text-[#a0948a]">
                6 destinations
              </span>

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-[#eee5da]
                  text-[9px]
                  text-[#3d2b22]
                "
              >
                ↗
              </span>
            </div>
          </div>

          {/* ==========================================================
              BROWN FLOATING CARD
          ========================================================== */}

          <div
            className="
              absolute
              right-[7%]
              top-[145px]
              z-50
              w-[50%]
              max-w-[300px]
              overflow-hidden
              rounded-[1.8rem]
              border
              border-white/20
              bg-gradient-to-br
              from-[#aa7d5e]
              via-[#855d43]
              to-[#4b3023]
              p-5
              text-white
              shadow-[0_35px_75px_rgba(56,36,26,0.27),inset_0_1px_0_rgba(255,255,255,0.20)]
              backdrop-blur-xl
              sm:right-[9%]
              sm:top-[175px]
              sm:rounded-[2.1rem]
              sm:p-7
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -right-20
                top-0
                h-[260px]
                w-[90px]
                rotate-[35deg]
                bg-white/[0.10]
                blur-[15px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -left-10
                -top-10
                h-36
                w-36
                rounded-full
                bg-[#e6c9b0]/20
                blur-[35px]
              "
            />

            <div className="relative z-10">
              <div className="text-[6px] uppercase tracking-[0.25em] text-white/50">
                Ajira Majuu
              </div>

              <h3
                className="
                  mt-3
                  font-display
                  text-[2rem]
                  leading-[0.84]
                  tracking-[-0.05em]
                  sm:text-[2.8rem]
                "
              >
                Work
                <br />
                <span className="italic font-normal text-[#e0c2a8]">
                  abroad.
                </span>
              </h3>

              <p className="mt-4 max-w-[180px] text-[7px] leading-4 text-white/50">
                Legitimate opportunities. Clear information.
                Human guidance.
              </p>

              <a
                href="#jobs"
                className="
                  mt-4
                  inline-flex
                  rounded-full
                  bg-[#f7f1e8]
                  px-3
                  py-1.5
                  text-[6px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#4a3023]
                  shadow-[0_8px_20px_rgba(0,0,0,0.12)]
                "
              >
                Explore jobs
              </a>
            </div>
          </div>

          {/* ==========================================================
              MAIN LOWER TYPOGRAPHY
          ========================================================== */}

          <div className="relative z-10 pt-[245px] sm:pt-[290px]">
            <div className="text-[6px] uppercase tracking-[0.28em] text-[#9d9186]">
              Our approach
            </div>

            <h3
              className="
                mt-4
                max-w-[450px]
                font-display
                text-[3rem]
                leading-[0.83]
                tracking-[-0.055em]
                text-[#3d2b22]
                sm:text-[4.2rem]
              "
            >
              Clear.
              <br />
              Human.
              <br />
              <span className="italic font-normal text-[#9b7659]">
                Professional.
              </span>
            </h3>

            <p
              className="
                mt-5
                max-w-[330px]
                text-[8px]
                leading-5
                text-[#756d66]
                sm:text-[9px]
                sm:leading-6
              "
            >
              We help you discover legitimate opportunities,
              understand the recruitment process and prepare
              for your next step abroad.
            </p>
          </div>
        </div>

        {/* ==============================================================
            DESTINATIONS DETAIL STRIP
        ============================================================== */}

        <div
          className="
            relative
            overflow-hidden
            bg-[#f8f5ef]
            px-7
            py-16
            sm:px-12
            sm:py-20
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              -right-[20%]
              top-[5%]
              h-[400px]
              w-[400px]
              rounded-full
              bg-[#d8c3af]/25
              blur-[90px]
            "
          />

          <div className="relative z-10">
            <div className="text-[6px] uppercase tracking-[0.28em] text-[#9c9086]">
              Where can you go?
            </div>

            <h3
              className="
                mt-4
                max-w-[470px]
                font-display
                text-[2.8rem]
                leading-[0.85]
                tracking-[-0.055em]
                text-[#3d2b22]
                sm:text-[4rem]
              "
            >
              Opportunities
              <br />
              <span className="italic font-normal text-[#9b7658]">
                across the Gulf.
              </span>
            </h3>

            <p className="mt-5 max-w-[430px] text-[8px] leading-5 text-[#756d67] sm:text-[9px] sm:leading-6">
              Explore employment opportunities across
              the Gulf and understand the recruitment
              journey before taking your next step.
            </p>

            {/* destination list */}

            <div
              className="
                mt-10
                grid
                grid-cols-2
                gap-x-5
                gap-y-5
                sm:grid-cols-3
              "
            >
              {destinations.map((country, index) => (
                <div
                  key={country}
                  className="
                    border-t
                    border-[#3d2b22]/10
                    pt-3
                  "
                >
                  <div className="text-[6px] uppercase tracking-[0.18em] text-[#ad9d90]">
                    0{index + 1}
                  </div>

                  <div className="mt-1 text-[9px] font-medium text-[#3d2b22] sm:text-[10px]">
                    {country}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==============================================================
            FINAL WHITE EDITORIAL SECTION
        ============================================================== */}

        <div
          className="
            relative
            min-h-[430px]
            overflow-hidden
            bg-[#fbfaf7]
            px-7
            pb-20
            pt-20
            sm:px-12
            sm:pb-24
            sm:pt-24
          "
        >
          {/* giant bottom light */}

          <div
            className="
              pointer-events-none
              absolute
              -bottom-[190px]
              left-1/2
              h-[430px]
              w-[700px]
              -translate-x-1/2
              rounded-full
              bg-[#ded0c1]/40
              blur-[90px]
            "
          />

          <div className="relative z-10 mx-auto max-w-[600px] text-center">
            {/* editorial label */}

            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#b39b87]" />

              <span className="text-[6px] uppercase tracking-[0.30em] text-[#91857b]">
                Begin your journey
              </span>

              <span className="h-px w-8 bg-[#b39b87]" />
            </div>

            {/* final headline */}

            <h2
              className="
                mt-7
                font-display
                text-[3.2rem]
                leading-[0.83]
                tracking-[-0.06em]
                text-[#3e2a20]
                sm:text-[4.7rem]
              "
            >
              Your career.
              <br />
              <span className="italic font-normal text-[#9b7658]">
                Your journey.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-[350px]
                text-[8px]
                leading-5
                text-[#756d67]
                sm:text-[9px]
                sm:leading-6
              "
            >
              Ajira Majuu connects Kenyan talent with
              overseas employment opportunities while
              helping you understand what comes next.
            </p>

            {/* CTA */}

            <div className="mt-7 flex justify-center gap-2">
              <a
                href="#jobs"
                className="
                  rounded-full
                  bg-[#3e2a20]
                  px-6
                  py-3
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-white
                  shadow-[0_15px_35px_rgba(55,38,28,0.18)]
                  transition
                  hover:-translate-y-1
                "
              >
                Find a Job
              </a>

              <a
                href="#contact"
                className="
                  rounded-full
                  border
                  border-[#3e2a20]/15
                  bg-white
                  px-6
                  py-3
                  text-[7px]
                  font-medium
                  uppercase
                  tracking-[0.14em]
                  text-[#3e2a20]
                  transition
                  hover:bg-[#f1ebe3]
                "
              >
                Contact
              </a>
            </div>
          </div>

          {/* bottom navigation ornaments */}

          <div
            className="
              absolute
              bottom-7
              left-7
              text-[8px]
              leading-4
              text-[#8d8076]
            "
          >
            △
            <br />
            ▽
          </div>

          <div
            className="
              absolute
              bottom-7
              right-7
              text-[8px]
              leading-4
              text-[#8d8076]
            "
          >
            ≡
            <br />
            ≈
          </div>
        </div>

        {/* ==============================================================
            BRAND FOOTER
        ============================================================== */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-3
            bg-[#fbfaf7]
            pb-7
            text-[6px]
            uppercase
            tracking-[0.30em]
            text-[#9c9086]
          "
        >
          <span className="h-px w-8 bg-[#3d2b22]/10" />

          <span>Ajira Majuu</span>

          <span className="h-px w-8 bg-[#3d2b22]/10" />
        </div>
      </div>

      {/* ================================================================
          OUTER BOTTOM DETAIL
      ================================================================= */}

      <div className="relative mx-auto mt-5 flex items-center justify-center">
        <span className="h-px w-14 bg-[#3d2b22]/10" />

        <span className="mx-3 h-1.5 w-1.5 rounded-full bg-[#9b7658]/50" />

        <span className="h-px w-14 bg-[#3d2b22]/10" />
      </div>
    </section>
  );
}