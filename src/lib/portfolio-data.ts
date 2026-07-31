// ============================================
// PORTFOLIO DATA CONFIGURATION
// ============================================
// Replace all placeholder data below with your own!
// This is the ONLY file you need to edit to customize your portfolio.
// ============================================

export const siteConfig = {
  name: "Kamal",
  firstName: "Kamal",
  lastName: "Arumugam",
  tagline: "Full Stack Developer",
  logo: "AK", // initials for the logo (2 chars)
  email: "kamalak1506@gmail.com",
  phone: "+91 9342840996",
  location: "Tamil Nadu, India",
  resumeUrl: "https://drive.google.com/file/d/1VZBlM_uOC91AI1OWD6Knd2XjfzOe4g-R/view?usp=sharing",
};

export const heroConfig = {
  greeting: "Hi There,",
  intro: "I'm Kamal",
  typingTexts: [
    "frontend development",
    "backend development",
    "full stack development",
    "web applications",
  ],
  aboutButtonText: "About Me",
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kamal1506/",
      icon: "linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com/Kamal1506",
      icon: "github",
    },
    // {
    //   name: "Twitter",
    //   url: "https://twitter.com/yourusername",
    //   icon: "twitter",
    // },
    // {
    //   name: "Telegram",
    //   url: "https://t.me/yourusername",
    //   icon: "telegram",
    // },
    {
      name: "Instagram",
      url: "https://www.instagram.com/yaa.itz_kamal/",
      icon: "instagram",
    },
  ],
};

export const aboutConfig = {
  paragraphs: [
    `I am a Full-Stack developer from Tamil Nadu. I am a Computer Science graduate from V.S.B. Engineering College. I am very passionate about improving my coding skills & developing applications & websites.`,
    `I build WebApps and Websites using modern technologies. Working for myself to improve my skills. Love to build Full-Stack clones and open source projects.`,
  ],
  profileImageUrl: "https://drive.google.com/file/d/1Qf0bDdyMB3Z1-lX33SsxIvzfUqy60Enp/view?usp=sharing", // Leave empty to use default avatar, or provide your photo URL
};

export interface Skill {
  name: string;
  iconUrl: string;
}

export const skillsConfig: Skill[] = [
  { name: "ReactJS", iconUrl: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" },
  { name: "NextJS", iconUrl: "https://img.icons8.com/fluency/48/000000/nextjs.png" },
  { name: "NodeJS", iconUrl: "https://img.icons8.com/color/48/000000/nodejs.png" },
  { name: "ExpressJS", iconUrl: "https://img.icons8.com/fluency/48/000000/node-js.png" },
  { name: "TypeScript", iconUrl: "https://img.icons8.com/color/48/000000/typescript.png" },
  { name: "JavaScript", iconUrl: "https://img.icons8.com/color/48/000000/javascript--v1.png" },
  { name: "TailwindCSS", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png" },
  { name: "Bootstrap", iconUrl: "https://img.icons8.com/color/48/000000/bootstrap.png" },
  { name: "HTML5", iconUrl: "https://img.icons8.com/color/48/000000/html-5--v1.png" },
  { name: "CSS3", iconUrl: "https://img.icons8.com/color/48/000000/css3.png" },
  { name: "Python", iconUrl: "https://img.icons8.com/color/48/000000/python--v1.png" },
  { name: "Java", iconUrl: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" },
  { name: "MongoDB", iconUrl: "https://img.icons8.com/color/48/000000/mongodb.png" },
  { name: "MySQL", iconUrl: "https://img.icons8.com/color/48/000000/mysql-logo.png" },
  { name: "Firebase", iconUrl: "https://img.icons8.com/color/48/000000/firebase.png" },
  { name: "Git VCS", iconUrl: "https://img.icons8.com/color/48/000000/git.png" },
  { name: "GitHub", iconUrl: "https://img.icons8.com/glyph-neue/48/ffffff/github.png" },
  { name: "AWS", iconUrl: "https://img.icons8.com/color/48/000000/amazon-web-services.png" },
  { name: "Docker", iconUrl: "https://img.icons8.com/color/48/000000/docker.png" },
  { name: "Redux", iconUrl: "https://img.icons8.com/color/48/000000/redux.png" },
  { name: "Sass", iconUrl: "https://img.icons8.com/color/48/000000/sass.png" },
  { name: "MaterialUI", iconUrl: "https://img.icons8.com/color/48/000000/material-ui.png" },
  { name: "C++", iconUrl: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" },
  { name: "Netlify", iconUrl: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png" },
];

export interface Education {
  degree: string;
  institution: string;
  board: string;
  period: string;
  status: "Pursuing" | "Completed";
  imageUrl: string;
}

export const educationConfig: Education[] = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "V.S.B Engineering College",
    board: "Anna University",
    period: "2023-2027",
    status: "Currently Pursuing",
    imageUrl: "",
  },
  {
    degree: "HSC Science",
    institution: "Sri BVM Matric Hr.Sec.School",
    board: "Tamil Nadu State Board",
    period: "2023",
    status: "Completed",
    imageUrl: "",
  },
];

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  codeUrl: string;
}

export const projectsConfig: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Full-Stack e-commerce application with Admin Dashboard and Payment Gateway integration. Built with modern MERN stack.",
    imageUrl: "",
    liveUrl: "https://your-project-demo.netlify.app/",
    codeUrl: "https://github.com/yourusername/project1",
  },
  {
    title: "Social Media App",
    description: "Full-Stack Social Media clone with real-time chat using Socket.io and image sharing features.",
    imageUrl: "",
    liveUrl: "https://your-project-demo.netlify.app/",
    codeUrl: "https://github.com/yourusername/project2",
  },
  {
    title: "Task Manager",
    description: "A productivity app with drag-and-drop task management, user authentication, and team collaboration features.",
    imageUrl: "",
    liveUrl: "https://your-project-demo.netlify.app/",
    codeUrl: "https://github.com/yourusername/project3",
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website with dark theme, particle animations, and responsive design using React and Tailwind CSS.",
    imageUrl: "",
    liveUrl: "https://your-project-demo.netlify.app/",
    codeUrl: "https://github.com/yourusername/project4",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application showing forecasts, maps, and weather alerts using OpenWeather API.",
    imageUrl: "",
    liveUrl: "https://your-project-demo.netlify.app/",
    codeUrl: "https://github.com/yourusername/project5",
  },
  {
    title: "Blog Platform",
    description: "A full-stack blogging platform with rich text editor, SEO optimization, and user management.",
    imageUrl: "",
    liveUrl: "https://your-project-demo.netlify.app/",
    codeUrl: "https://github.com/yourusername/project6",
  },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  side: "left" | "right";
}

export const experienceConfig: Experience[] = [
  {
    company: "Self Employed",
    role: "Full Stack Developer",
    period: "Oct 2021 - present",
    side: "right",
  },
  {
    company: "Company Name",
    role: "Web Developer | Internship",
    period: "June 2021 - Dec 2021",
    side: "left",
  },
  {
    company: "Another Company",
    role: "Frontend Developer | Internship",
    period: "May 2021 - June 2021",
    side: "right",
  },
  {
    company: "Tech Startup",
    role: "Mobile App Developer | Internship",
    period: "April 2021 - May 2021",
    side: "left",
  },
  {
    company: "Digital Agency",
    role: "Wordpress Developer | Internship",
    period: "March 2021 - April 2021",
    side: "right",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
