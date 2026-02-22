"use client";

type ExperienceItem = {
  role: string;
  org: string;
  duration: string;
  location: string;
  tag: string;
  achievements: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Data Science (AWS) Graduate Research Assistant",
    org: "The Wharton School",
    duration: "Oct 2025 – Present",
    location: "Philadelphia, PA",
    tag: "Research",
    achievements: [
      "Built scalable ETL pipelines processing 20M+ rows of ESG data across 150+ companies, improving experiment throughput by 40%",
      "Collaborated with PhD researchers and faculty to design statistical evaluation frameworks",
      "Conducted A/B testing across 15+ experiments, improving reproducibility by 35% and automating 85% of preprocessing tasks",
    ],
  },
  {
    role: "Research Intern",
    org: "University of Mumbai",
    duration: "Aug 2023 – Jun 2025",
    location: "Mumbai, India",
    tag: "Research",
    achievements: [
      "Designed ML pipelines for large-scale academic datasets with emphasis on reproducibility",
      "Implemented NLP models for document analysis and topic modeling",
      "Co-authored research reports and supported experimental validation",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif text-gray-900">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gray-800 mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative border-l border-gray-300 pl-10 space-y-16">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">

              {/* Timeline Dot */}
              <div className="absolute -left-[52px] top-2 w-10 h-10 rounded-full border bg-white flex items-center justify-center shadow">
                🎓
              </div>

              {/* Card */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-gray-900">
                  {exp.role}
                </h3>

                <p className="text-gray-700 font-medium mt-1">
                  {exp.org}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mt-3">
                  <span>📅 {exp.duration}</span>
                  <span>📍 {exp.location}</span>
                  <span className="px-2 py-1 rounded-md bg-gray-200 text-gray-800">
                    {exp.tag}
                  </span>
                </div>

                <div className="mt-5">
                  <p className="font-medium text-gray-800 mb-2">
                    Key Achievements
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {exp.achievements.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}