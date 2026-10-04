import Image from "next/image";

interface Country {
  name: string;
  // Filename expected once you drop the image into /public/images/countries/
  image: string;
}

// Placeholder filenames — save your incoming country images using these exact
// names in /public/images/countries/ (or edit the list) and they'll appear
// automatically. Until an image exists, a gradient placeholder is shown instead.
const countries: Country[] = [
  { name: "Saudi Arabia", image: "saudi-arabia.jpg" },
  { name: "United Arab Emirates", image: "uae.jpg" },
  { name: "Qatar", image: "qatar.jpg" },
  { name: "Kuwait", image: "kuwait.jpg" },
  { name: "Bahrain", image: "bahrain.jpg" },
  { name: "Oman", image: "oman.jpg" },
  { name: "Lebanon", image: "lebanon.jpg" },
];

export default function GulfCountries() {
  return (
    <section id="destinations" className="bg-brand-purple/5 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">Where We Place Talent</h2>
          <p className="mt-3 text-slate-600">
            Opportunities across the Gulf region, depending on current employer demand.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {countries.map((c) => (
            <div
              key={c.name}
              className="glass-panel relative flex aspect-[4/3] items-end overflow-hidden p-4"
            >
              {/* Swap this block for a real <Image> once the file exists in /public/images/countries/ */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple to-brand-purple-light opacity-90" />
              <span className="relative font-display text-lg font-bold text-white">{c.name}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          Send over your 14 country images and I'll wire them into this grid directly.
        </p>
      </div>
    </section>
  );
}
