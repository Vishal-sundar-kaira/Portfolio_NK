"use client";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900">
            Education
          </h2>
          <div className="w-16 h-1 bg-gray-800 mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-300" />

          {/* ===== Education Item 1 ===== */}
          <div className="relative pl-16 mb-16">
            {/* Icon */}
            <div className="absolute left-0 top-2 w-8 h-8 rounded-full border border-gray-400 bg-white flex items-center justify-center">
              🎓
            </div>

            {/* Card */}
            <div className="border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-2xl font-serif mb-1">
                University of Pennsylvania
              </h3>
              <p className="text-gray-600 mb-3">
                School of Engineering and Applied Sciences
              </p>

              <p className="font-medium mb-4">
                Master of Science in Engineering in Data Science
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-3 text-sm text-gray-700 mb-4">
                <span className="px-3 py-1 border rounded-md">
                  GPA: 4.0 / 4.0
                </span>
                <span className="px-3 py-1 border rounded-md">
                  Philadelphia, PA
                </span>
                <span className="px-3 py-1 border rounded-md">
                  May 2027
                </span>
              </div>

              {/* Coursework */}
              <div>
                <p className="font-medium mb-2">Coursework</p>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="px-3 py-1 bg-gray-100 rounded-md">
                    Statistics for Data Science
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-md">
                    Big Data Analytics
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-md">
                    Computer Vision
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-md">
                    Machine Learning
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Education Item 2 ===== */}
          <div className="relative pl-16">
            {/* Icon */}
            <div className="absolute left-0 top-2 w-8 h-8 rounded-full border border-gray-400 bg-white flex items-center justify-center">
              🎓
            </div>

            {/* Card */}
            <div className="border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-2xl font-serif mb-1">
                University of Mumbai
              </h3>

              <p className="font-medium mb-4">
                Bachelor of Engineering, Computer Engineering
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-3 text-sm text-gray-700 mb-4">
                <span className="px-3 py-1 border rounded-md">
                  GPA: 4.0 / 4.0
                </span>
                <span className="px-3 py-1 border rounded-md">
                  Rank: Department Rank 2
                </span>
                <span className="px-3 py-1 border rounded-md">
                  Mumbai, India
                </span>
                <span className="px-3 py-1 border rounded-md">
                  May 2025
                </span>
              </div>

              {/* Coursework */}
              <div>
                <p className="font-medium mb-2">Coursework</p>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="px-3 py-1 bg-gray-100 rounded-md">
                    Advanced Statistics
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-md">
                    Deep Learning
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-md">
                    Machine Learning
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-md">
                    NLP
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-md">
                    Database Management Systems
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}