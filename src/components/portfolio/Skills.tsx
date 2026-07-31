"use client";

import { skillsConfig } from "@/lib/portfolio-data";
import { FaLaptopCode } from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="portfolio-section">
      <h2 className="section-heading">
        <FaLaptopCode className="icon inline mr-2 text-[#7b2ff7]" />
        Skills &amp; <span>Abilities</span>
      </h2>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skillsConfig.map((skill) => (
          <div
            key={skill.name}
            className="card-hover flex flex-col items-center gap-3 p-4 rounded-xl bg-[#112240]/60 border border-white/5 backdrop-blur-sm group cursor-default"
          >
            <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <img
                src={skill.iconUrl}
                alt={skill.name}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <span className="text-[#ccd6f6] text-sm font-medium text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
