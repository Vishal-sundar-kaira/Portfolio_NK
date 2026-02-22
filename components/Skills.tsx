"use client";

type SkillCategory = {
  title: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C++", "JavaScript", "TypeScript"],
  },
  {
    title: "Data Science & Machine Learning",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Statistical Analysis",
      "Feature Engineering",
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Next.js",
      "React",
    ],
  },
  {
    title: "Databases & Tools",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Git", "Docker", "Linux"],
  },
  {
    title: "Research & Engineering",
    skills: [
      "API Security Analysis",
      "Static & Dynamic Analysis",
      "Experiment Design",
      "Paper Writing",
      "Reproducible Research",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-24 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900">
            Skills
          </h2>
          <div className="w-16 h-1 bg-gray-800 mx-auto mt-4" />
        </div>

        <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
          A blend of software engineering, data science, and research skills
          developed through projects and academic work.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border border-gray-200
                bg-white
                p-6
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="
                      text-sm px-3 py-1 rounded-full
                      border border-gray-300
                      text-gray-700
                      hover:bg-black hover:text-white
                      transition
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}