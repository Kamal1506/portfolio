"use client";

import { educationConfig } from "@/lib/portfolio-data";
import { FaGraduationCap } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

export default function Education() {
  return (
    <section id="education" className="portfolio-section">
      <h2 className="section-heading">
        <FaGraduationCap className="icon inline mr-2 text-[#7b2ff7]" />
        My <span>Education</span>
      </h2>

      <p className="text-center text-[#8892b0] italic max-w-2xl mx-auto mt-2 mb-12">
        &quot;Education is not the learning of facts, but the training of the mind to think.&quot;
      </p>

      <div className="flex flex-col gap-8">
        {educationConfig.map((edu, index) => (
          <div
            key={index}
            className="card-hover flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl bg-[#112240]/60 border border-white/5 backdrop-blur-sm"
          >
            {/* Image */}
            <div className="flex-shrink-0 w-32 h-32 rounded-xl overflow-hidden bg-gradient-to-br from-[#1d3461] to-[#0a192f] flex items-center justify-center border border-[#00d4ff]/20">
              {edu.imageUrl ? (
                <img
                  src={edu.imageUrl}
                  alt={edu.institution}
                  className="w-full h-full object-cover"
                />
              ) : (
                <HiAcademicCap className="text-4xl text-[#00d4ff]/60" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-bold text-[#e6f1ff] mb-1">
                {edu.degree}
              </h3>
              <p className="text-[#8892b0] mb-2">
                {edu.institution} | {edu.board}
              </p>
              <h4 className="inline-block px-3 py-1 bg-[#00d4ff]/10 text-[#00d4ff] rounded-full text-xs font-medium border border-[#00d4ff]/20">
                {edu.period} | {edu.status}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
