"use client";

import { useState } from "react";

type Paper = {
  title: string;
  authors: string;
  venue: string;
  details: string;
  link?: string;
};

const papers: Paper[] = [
  {
    title: "Authorization Intent Consistency for Web APIs",
    authors: "Vishal Kaira, Co-authors",
    venue: "IEEE Conference (Under Review)",
    details:
      "This paper introduces a hybrid static–dynamic framework to detect authorization mismatches in REST APIs. The system identifies missing, inconsistent, and indirect authorization vulnerabilities by comparing developer intent with runtime behavior.",
    link: "#",
  },
  {
    title: "Behavior-Aware API Vulnerability Detection",
    authors: "Vishal Kaira",
    venue: "Springer Journal (Planned Submission)",
    details:
      "We propose a behavior graph–based approach to model API access patterns and detect anomalous authorization flows using runtime traces and graph inconsistencies.",
  },
];

export default function Research() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="research" className="w-full py-20 bg-white text-black">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900">
            Research & Publications
          </h2>
          <div className="w-16 h-1 bg-gray-800 mx-auto mt-4" />
        </div>

        {/* Papers */}
        <div className="space-y-6">
          {papers.map((paper, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
                className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 transition-all duration-300 bg-white "
              >
                {/* Top Row */}
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {paper.title}
                    </h3>
                    <p className="text-sm text-black mt-1">
                      {paper.authors}
                    </p>
                    <p className="text-sm text-black">
                      {paper.venue}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </div>
                </div>

                {/* Expandable Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 mt-4 opacity-100 text-black" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-black">
                    {paper.details}
                  </p>

                  {paper.link && (
                    <a
                      href={paper.link}
                      target="_blank"
                      className="inline-block mt-3 text-sm font-medium text-blue-600 hover:underline"
                    >
                      Read Paper →
                    </a>
                  )}
                </div>
              </div>
            );
          })}

          {/* Final Horizontal Card */}
          <div className="border border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold">
              More Research Coming Soon
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Ongoing work on AI-assisted vulnerability detection and large-scale
              API behavior modeling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}