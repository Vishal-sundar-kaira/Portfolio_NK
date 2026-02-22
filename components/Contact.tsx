"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:kairavishal37@gmail.com
      ?subject=Portfolio Contact from ${name}
      &body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="w-full py-24 border-t border-gray-200 bg-white text-black"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900">
            Get in touch
          </h2>
          <div className="w-16 h-1 bg-gray-800 mx-auto mt-4" />
        </div>

        <p className="text-center text-gray-600 mb-12">
          Open to research collaborations, internships, and full-time roles.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-500">kairavishal37@gmail.com</p>
            </div>

            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-500">+91 9XXXXXXXXX</p>
            </div>

            <div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-gray-500">Mumbai, India</p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-200 p-8 space-y-6 text-black"
          >
            {/* Name */}
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm font-medium">
                Your Name
              </label>
              <input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border rounded-lg bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-lg bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your email"
              />
            </div>

            {/* Message */}
            <div className="space-y-1">
              <label htmlFor="message" className="text-sm font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border rounded-lg bg-white text-black placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Write your message..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl font-medium
                         hover:bg-gray-900 hover:scale-[1.02]
                         transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}