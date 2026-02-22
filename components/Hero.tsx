"use client";

import Image from "next/image";
import { FaLinkedin, FaGithub, FaGoogleScholar } from "react-icons/fa6";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white text-black"> 
      <div className="max-w-4xl px-6 text-center flex flex-col items-center">
        {/* Profile Image */}
        <div className="mb-6">
          <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border border-gray-300">
            <Image
              src="/profile.jpeg" // 👉 put image in public/profile.jpg
              alt="Nidhi Kadam"
              width={200}
              height={200}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-serif mb-4">
          Nidhi Kadam
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Data Science • Machine Learning • Backend Systems
        </p>

        {/* Description */}
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
          I build data-driven systems and machine learning solutions with a
          focus on real-world impact, scalability, and research-oriented
          development.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:scale-110 transition-transform"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:scale-110 transition-transform"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          {/* Google Scholar */}
          <a
            href="https://scholar.google.com/citations?user=YOUR_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:scale-110 transition-transform"
            aria-label="Google Scholar"
          >
            <FaGoogleScholar />
          </a>
        </div>
      </div>
    </section>
  );
}