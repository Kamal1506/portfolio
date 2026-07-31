"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/portfolio-data";
import { FaHeadset, FaUser, FaEnvelope, FaPhoneAlt, FaCommentDots, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, you'd integrate EmailJS or a backend API here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="portfolio-section">
      <h2 className="section-heading">
        <FaHeadset className="icon inline mr-2 text-[#7b2ff7]" />
        Get in <span>Touch</span>
      </h2>

      <div className="mt-12 flex flex-col lg:flex-row items-center gap-12 max-w-4xl mx-auto">
        {/* Illustration */}
        <div className="flex-shrink-0 hidden lg:flex items-center justify-center">
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00d4ff]/10 to-[#7b2ff7]/10 blur-xl" />
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#112240] border border-[#00d4ff]/20 flex items-center justify-center">
                  <FaHeadset className="text-3xl text-[#00d4ff]" />
                </div>
                <p className="text-[#8892b0] text-sm">Let&apos;s talk about your project</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 w-full max-w-lg">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 pl-10 bg-[#112240]/60 border border-white/10 rounded-lg text-[#ccd6f6] placeholder-[#8892b0]/60 focus:border-[#00d4ff] focus:outline-none transition-colors duration-300"
                />
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8892b0] text-sm" />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 pl-10 bg-[#112240]/60 border border-white/10 rounded-lg text-[#ccd6f6] placeholder-[#8892b0]/60 focus:border-[#00d4ff] focus:outline-none transition-colors duration-300"
                />
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8892b0] text-sm" />
              </div>
            </div>

            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 pl-10 bg-[#112240]/60 border border-white/10 rounded-lg text-[#ccd6f6] placeholder-[#8892b0]/60 focus:border-[#00d4ff] focus:outline-none transition-colors duration-300"
              />
              <FaPhoneAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8892b0] text-sm" />
            </div>

            <div className="relative">
              <textarea
                name="message"
                placeholder="Message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 pl-10 bg-[#112240]/60 border border-white/10 rounded-lg text-[#ccd6f6] placeholder-[#8892b0]/60 focus:border-[#00d4ff] focus:outline-none transition-colors duration-300 resize-none"
              />
              <FaCommentDots className="absolute left-3 top-3 text-[#8892b0] text-sm" />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#00d4ff] text-[#0a192f] font-semibold rounded-lg hover:bg-[#00d4ff]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#00d4ff]/20"
              >
                {submitted ? "Sent!" : "Submit"}
                <FaPaperPlane className={submitted ? "animate-bounce" : ""} />
              </button>
              {submitted && (
                <p className="text-[#00d4ff] text-sm mt-2">
                  Message sent successfully! (Demo mode)
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
