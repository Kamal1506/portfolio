"use client";

import { experienceConfig } from "@/lib/portfolio-data";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="portfolio-section">
      <h2 className="section-heading">
        <FaBriefcase className="icon inline mr-2 text-[#7b2ff7]" />
        <span>Experience</span>
      </h2>

      <div className="mt-12 relative">
        {/* Center line */}
        <div className="timeline-line hidden md:block" />

        <div className="space-y-8 md:space-y-12">
          {experienceConfig.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center gap-6 ${
                exp.side === "right" ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#00d4ff] border-4 border-[#0a192f] z-10 shadow-[0_0_15px_rgba(0,212,255,0.5)]" />

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />

              {/* Content card */}
              <div
                className={`card-hover flex-1 max-w-md p-5 rounded-xl bg-[#112240]/60 border border-white/5 backdrop-blur-sm ${
                  exp.side === "right"
                    ? "md:text-left"
                    : "md:text-left"
                }`}
              >
                <div className="inline-block px-3 py-1 bg-[#7b2ff7]/10 text-[#7b2ff7] rounded-full text-xs font-medium mb-3 border border-[#7b2ff7]/20">
                  {exp.company}
                </div>
                <h3 className="text-lg font-bold text-[#e6f1ff] mb-1">
                  {exp.role}
                </h3>
                <p className="text-[#8892b0] text-sm">{exp.period}</p>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
