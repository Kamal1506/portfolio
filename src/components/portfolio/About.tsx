"use client";

import { siteConfig, aboutConfig } from "@/lib/portfolio-data";
import { FaUserAlt, FaChevronRight, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="portfolio-section">
      <h2 className="section-heading">
        <FaUserAlt className="icon inline mr-2 text-[#7b2ff7]" />
        About <span>Me</span>
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-12 mt-12">
        {/* Image */}
        <div className="flex-shrink-0">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-[#00d4ff]/20 shadow-lg shadow-[#00d4ff]/10">
            {aboutConfig.profileImageUrl ? (
              <img
                src={aboutConfig.profileImageUrl}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#112240] to-[#1d3461] flex items-center justify-center">
                <span className="text-7xl font-bold gradient-text">
                  {siteConfig.logo}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-[#e6f1ff] mb-2">
            I&apos;m {siteConfig.name}
          </h3>
          <span className="inline-block px-3 py-1 bg-[#00d4ff]/10 text-[#00d4ff] rounded-full text-sm font-medium mb-6 border border-[#00d4ff]/20">
            {siteConfig.tagline}
          </span>

          {aboutConfig.paragraphs.map((p, i) => (
            <p key={i} className="text-[#8892b0] leading-relaxed mb-4">
              {p}
            </p>
          ))}

          {/* Info box */}
          <div className="mt-6 p-5 rounded-xl bg-[#112240]/60 border border-white/5">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 text-[#8892b0]">
                <FaEnvelope className="text-[#00d4ff]" />
                <span className="text-sm">
                  <span className="text-[#e6f1ff]">email : </span>
                  {siteConfig.email}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#8892b0]">
                <FaMapMarkerAlt className="text-[#00d4ff]" />
                <span className="text-sm">
                  <span className="text-[#e6f1ff]">place : </span>
                  {siteConfig.location}
                </span>
              </div>
            </div>
          </div>

          {/* Resume button */}
          <div className="mt-6">
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00d4ff] text-[#0a192f] font-semibold rounded-lg hover:bg-[#00d4ff]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#00d4ff]/20 group"
            >
              <span>Resume</span>
              <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
