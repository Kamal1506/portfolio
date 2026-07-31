"use client";

import { projectsConfig } from "@/lib/portfolio-data";
import { FaLaptopCode, FaEye, FaCode } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

export default function Projects() {
  return (
    <section id="work" className="portfolio-section">
      <h2 className="section-heading">
        <FaLaptopCode className="icon inline mr-2 text-[#7b2ff7]" />
        Projects <span>Made</span>
      </h2>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsConfig.map((project, index) => (
          <div
            key={index}
            className="card-hover group rounded-xl overflow-hidden bg-[#112240]/60 border border-white/5 backdrop-blur-sm"
          >
            {/* Project image */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#1d3461] to-[#0a192f] flex items-center justify-center">
              {project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="text-center">
                  <HiAcademicCap className="text-5xl text-[#00d4ff]/30 mx-auto mb-2" />
                  <span className="text-[#8892b0] text-sm">{project.title}</span>
                </div>
              )}
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-[#e6f1ff] mb-2 group-hover:text-[#00d4ff] transition-colors">
                {project.title}
              </h3>
              <p className="text-[#8892b0] text-sm leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#00d4ff]/10 text-[#00d4ff] text-sm rounded-lg border border-[#00d4ff]/20 hover:bg-[#00d4ff]/20 transition-all duration-300"
                >
                  <FaEye size={12} />
                  <span>View</span>
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#7b2ff7]/10 text-[#7b2ff7] text-sm rounded-lg border border-[#7b2ff7]/20 hover:bg-[#7b2ff7]/20 transition-all duration-300"
                >
                  <FaCode size={12} />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
