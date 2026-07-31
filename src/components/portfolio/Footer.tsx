"use client";

import { siteConfig, navLinks } from "@/lib/portfolio-data";
import { FaChevronCircleRight, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] border-t border-white/5 py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-[#e6f1ff] mb-3">
              {siteConfig.name}&apos;s Portfolio
            </h3>
            <p className="text-[#8892b0] text-sm leading-relaxed">
              Thank you for visiting my personal portfolio website. Connect with me over socials.
              <br />
              <br />
              Keep Rising!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-[#e6f1ff] mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#8892b0] hover:text-[#00d4ff] transition-colors text-sm flex items-center gap-2"
                  >
                    <FaChevronCircleRight className="text-xs" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-[#e6f1ff] mb-3">
              Contact Info
            </h3>
            <div className="space-y-2 text-sm text-[#8892b0]">
              <p className="flex items-center gap-2">
                <FaPhone className="text-[#00d4ff]" />
                {siteConfig.phone}
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-[#00d4ff]" />
                {siteConfig.email}
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#00d4ff]" />
                {siteConfig.location}
              </p>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-[#8892b0]/30 flex items-center justify-center text-[#8892b0] hover:text-[#00d4ff] hover:border-[#00d4ff] transition-all"
              >
                <FaLinkedin size={14} />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-full border border-[#8892b0]/30 flex items-center justify-center text-[#8892b0] hover:text-[#00d4ff] hover:border-[#00d4ff] transition-all"
              >
                <FaGithub size={14} />
              </a>
              <a
                href="mailto:your.email@example.com"
                aria-label="Email"
                className="w-9 h-9 rounded-full border border-[#8892b0]/30 flex items-center justify-center text-[#8892b0] hover:text-[#00d4ff] hover:border-[#00d4ff] transition-all"
              >
                <FaEnvelope size={14} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full border border-[#8892b0]/30 flex items-center justify-center text-[#8892b0] hover:text-[#00d4ff] hover:border-[#00d4ff] transition-all"
              >
                <FaTwitter size={14} />
              </a>
              <a
                href="https://t.me/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-9 h-9 rounded-full border border-[#8892b0]/30 flex items-center justify-center text-[#8892b0] hover:text-[#00d4ff] hover:border-[#00d4ff] transition-all"
              >
                <FaTelegram size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/5">
          <p className="text-[#8892b0] text-sm">
            Designed with{" "}
            <FaHeart className="inline text-red-400 pulse text-xs mx-1" />{" "}
            by{" "}
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00d4ff] hover:underline"
            >
              {siteConfig.name}
            </a>
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <a
        href="#home"
        aria-label="Scroll to top"
        className="fixed bottom-8 right-8 w-10 h-10 rounded-full bg-[#00d4ff] text-[#0a192f] flex items-center justify-center shadow-lg shadow-[#00d4ff]/20 hover:bg-[#00d4ff]/90 transition-all hover:-translate-y-1 z-40"
        style={{ fontSize: "1.2rem" }}
      >
        &#8593;
      </a>
    </footer>
  );
}
