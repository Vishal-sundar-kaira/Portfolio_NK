"use client";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white text-gray-800 py-28"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-serif text-center mb-16">
          About Me
          <span className="block w-16 h-1 bg-gray-800 mx-auto mt-4"></span>
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-6 text-lg leading-relaxed">
            <p>
              Hi, I’m <strong>Vishal</strong>, a data science enthusiast
              focused on <strong>machine learning</strong>, backend systems,
              and applied research. I enjoy building real-world systems
              that combine theory with engineering.
            </p>

            <p>
              My interests include <strong>AI & ML</strong>, scalable data
              pipelines, and full-stack development. I focus on creating
              solutions that are not just accurate, but also
              <strong> production-ready</strong>.
            </p>

            <p>
              I am actively seeking opportunities where I can apply my
              skills to solve meaningful, data-driven problems and grow
              as an engineer and researcher.
            </p>
            <p>
              I am actively seeking opportunities where I can apply my
              skills to solve meaningful, data-driven problems and grow
              as an engineer and researcher.
            </p>
            <p>
              I am actively seeking opportunities where I can apply my
              skills to solve meaningful, data-driven problems and grow
              as an engineer and researcher.
            </p>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-8">
            {/* Achievements */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-center">
                Key Achievements
              </h3>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white rounded-lg p-4 shadow">
                  <p className="text-2xl font-bold">10+</p>
                  <p className="text-sm text-gray-600">Projects</p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow">
                  <p className="text-2xl font-bold">5+</p>
                  <p className="text-sm text-gray-600">ML Models</p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow">
                  <p className="text-2xl font-bold">3+</p>
                  <p className="text-sm text-gray-600">Research Works</p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow">
                  <p className="text-2xl font-bold">15+</p>
                  <p className="text-sm text-gray-600">Technologies</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="border rounded-xl p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">
                Let’s Connect
              </h3>

              <a
                href="#contact"
                className="inline-block mt-2 px-6 py-3 border border-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}