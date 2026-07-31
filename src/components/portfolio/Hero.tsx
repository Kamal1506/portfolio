"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { heroConfig, siteConfig } from "@/lib/portfolio-data";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaTelegram,
  FaInstagram,
  FaDev,
  FaArrowCircleDown,
} from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }[] = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
      });
    }

    let animationId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 212, 255, 0.6)";
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${
              0.15 * (1 - dist / 150)
            })`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const cleanup = animate();
    return cleanup;
  }, [animate]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}

function useTypingEffect(texts: string[], typingSpeed = 80, deletingSpeed = 40, pauseTime = 1500) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentText.length) {
            setDisplayText(currentText.slice(0, charIndex + 1));
            setCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(currentText.slice(0, charIndex - 1));
            setCharIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
}

function getSocialIcon(name: string) {
  switch (name.toLowerCase()) {
    case "linkedin":
      return FaLinkedin;
    case "github":
      return FaGithub;
    case "twitter":
      return FaTwitter;
    case "telegram":
      return FaTelegram;
    case "instagram":
      return FaInstagram;
    case "dev":
      return FaDev;
    case "hashnode":
      return SiHashnode;
    default:
      return FaGithub;
  }
}

export default function Hero() {
  const typedText = useTypingEffect(heroConfig.typingTexts);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticlesCanvas />

      <div
        className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-[1200px] mx-auto px-6 w-full pt-20"
      >
        {/* Left content */}
        <div className="text-center lg:text-left flex-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#e6f1ff] mb-4 leading-tight">
            {heroConfig.greeting}
            <br />
            {heroConfig.intro}{" "}
            <span className="gradient-text">{siteConfig.lastName}</span>
          </h2>

          <p className="text-xl md:text-2xl text-[#8892b0] mb-8">
            I am into{" "}
            <span className="text-[#00d4ff] font-semibold">{typedText}</span>
            <span className="typing-cursor">|</span>
          </p>

          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#00d4ff] text-[#00d4ff] rounded-lg hover:bg-[#00d4ff]/10 transition-all duration-300 group"
          >
            <span>{heroConfig.aboutButtonText}</span>
            <FaArrowCircleDown className="group-hover:animate-bounce" />
          </a>

          {/* Social icons */}
          <div className="mt-10">
            <ul className="flex gap-5 justify-center lg:justify-start">
              {heroConfig.socials.map((social) => {
                const IconComponent = getSocialIcon(social.icon);
                return (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-10 h-10 rounded-full border border-[#8892b0]/30 flex items-center justify-center text-[#8892b0] hover:text-[#00d4ff] hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all duration-300 hover:-translate-y-1"
                    >
                      <IconComponent size={18} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 flex justify-center float-animation">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#7b2ff7]/20 blur-2xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#00d4ff]/30">
              {siteConfig.profileImageUrl ? (
                <img
                  src={siteConfig.profileImageUrl}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#112240] to-[#1d3461] flex items-center justify-center">
                  <span className="text-6xl md:text-8xl font-bold gradient-text">
                    {siteConfig.logo}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
