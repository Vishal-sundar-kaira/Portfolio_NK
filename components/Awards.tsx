"use client";

type Award = {
  title: string;
  organization: string;
  year: string;
};

const awards: Award[] = [
  {
    title: "Best Research Project Award",
    organization: "University / Institute Name",
    year: "2024",
  },
  {
    title: "Top Performer – Data Science Track",
    organization: "BCGX / Program Name",
    year: "2023",
  },
  {
    title: "Hackathon Finalist",
    organization: "National Level Hackathon",
    year: "2022",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="w-full py-20 bg-white text-black">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900">
            Awards & Recognition
          </h2>
          <div className="w-16 h-1 bg-gray-800 mx-auto mt-4" />
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {awards.map((award, index) => (
            <div
              key={index}
              className="
                group
                border border-gray-200 dark:border-gray-800
                rounded-xl p-6
                bg-white 
                transition-all duration-300 ease-out
                hover:scale-[1.04]
                hover:-translate-y-1
                hover:shadow-xl
                dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]
              "
            >
              <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-blue-600">
                {award.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {award.organization}
              </p>

              <span className="inline-block mt-3 text-xs font-medium text-gray-400">
                {award.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}