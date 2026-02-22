"use client";

type Project = {
  title: string;
  shortDesc: string;
  details: string;
  tech: string[];
  link: string;
};

const projects: Project[] = [
  {
    title: "Authorization Intent Consistency (AIC)",
    shortDesc: "Hybrid static–dynamic framework for detecting API authorization bugs",
    details:
      "Designed a hybrid security analysis framework combining static route inspection and runtime behavior tracing to detect missing, inconsistent, and indirect authorization flaws in REST APIs.",
    tech: ["Node.js", "Express", "Static Analysis", "Security", "Research"],
    link: "https://github.com/yourusername/aic-framework",
  },
  {
    title: "ESG Data Mining & ETL Automation",
    shortDesc: "Scalable ESG analytics pipeline on cloud infrastructure",
    details:
      "Built distributed ETL pipelines processing 20M+ ESG records using Spark and AWS services. Automated feature extraction and statistical validation for academic research workflows.",
    tech: ["AWS", "Apache Spark", "Python", "SQL", "ETL"],
    link: "https://github.com/yourusername/esg-pipeline",
  },
  {
    title: "Multimodal ML Research System",
    shortDesc: "Vision + NLP models for geospatial intelligence",
    details:
      "Implemented multimodal deep learning pipelines combining satellite imagery and textual metadata for large-scale geospatial analysis and prediction tasks.",
    tech: ["PyTorch", "Computer Vision", "NLP", "Deep Learning"],
    link: "https://github.com/yourusername/multimodal-ml",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif text-gray-900">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gray-800 mx-auto mt-4" />
        </div>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.shortDesc}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-100 rounded-md text-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gray-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                <div className="text-center">
                  <p className="text-white text-sm leading-relaxed mb-4">
                    {project.details}
                  </p>
                  <span className="inline-block mt-2 px-4 py-2 border border-white text-white text-sm rounded-md">
                    View Project →
                  </span>
                </div>
              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
}