export const profile = {
  name: "Raditya Aria Ramadhani",
  role: "Automation QA Engineer",
  tagline: "Professional with over 7 years of experience in Quality Assurance, specializing in E2E automation testing with Cypress and performance testing with Grafana k6",
  bio: "Professional dengan pengalaman lebih dari 7 tahun di Quality Control dan Quality Assurance di industri manufaktur dan software development. Saat ini fokus sebagai QA Automation Engineer yang mengkhususkan diri dalam mengembangkan automated End-to-End (E2E) testing menggunakan Cypress dan melakukan performance testing menggunakan Grafana k6. Berpengalaman dalam Load Testing, Stress Testing, dan Spike Testing untuk mengevaluasi stabilitas, skalabilitas, dan performa backend system. Memiliki background kuat dalam ISO 9001 quality management, internal auditing, dan continuous improvement initiatives.",
  email: "ariaramadhani72@gmail.com",
  location: "Yogyakarta, Indonesia",
  phone: "087882094028",
  whatsapp: "https://wa.me/6287882094028",
  social: {
    github: "https://github.com/radityaaria",
    linkedin: "https://linkedin.com/in/raditya-aria-ramadhani-46303225a",
    twitter: "https://twitter.com/radityaaria",
  },
  cv: "/CV_Raditya_Aria_Ramadhani.pdf",
};

export const skills = [
  {
    category: "Automation Testing",
    items: [
      { name: "Cypress E2E Testing", level: "Expert" },
      { name: "Test Script Development", level: "Expert" },
      { name: "Test Case Design", level: "Expert" },
      { name: "Regression Testing", level: "Advanced" },
    ],
  },
  {
    category: "Performance Testing",
    items: [
      { name: "Grafana k6", level: "Expert" },
      { name: "Load Testing", level: "Advanced" },
      { name: "Stress Testing", level: "Advanced" },
      { name: "Spike Testing", level: "Advanced" },
    ],
  },
  {
    category: "Testing & QA Methodologies",
    items: [
      { name: "Bug Analysis & RCA", level: "Expert" },
      { name: "Test Plans & Test Cases", level: "Expert" },
      { name: "Functional Testing", level: "Advanced" },
      { name: "API Testing", level: "Advanced" },
    ],
  },
  {
    category: "Technical & Development",
    items: [
      { name: "JavaScript / Node.js", level: "Advanced" },
      { name: "React.js / Next.js", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "HTML / CSS", level: "Advanced" },
    ],
  },
  {
    category: "Debugging & Monitoring",
    items: [
      { name: "Browser Network Tools", level: "Advanced" },
      { name: "htop (Server Monitoring)", level: "Advanced" },
      { name: "Performance Analysis", level: "Advanced" },
      { name: "Bottleneck Identification", level: "Advanced" },
    ],
  },
  {
    category: "Quality Standards",
    items: [
      { name: "ISO 9001", level: "Expert" },
      { name: "Internal Auditing", level: "Expert" },
      { name: "CAPA Development", level: "Advanced" },
      { name: "Kaizen / CI", level: "Advanced" },
    ],
  },
  {
    category: "Tools & Version Control",
    items: [
      { name: "Git / GitHub / GitLab", level: "Advanced" },
      { name: "Trello", level: "Advanced" },
      { name: "GMP Standards", level: "Intermediate" },
    ],
  },
];

export const experiences = [
  {
    title: "Automation QA Engineer",
    company: "Golden Digital",
    period: "February 2026 - Present",
    description: "Developing comprehensive test cases and coding test scripts for End-to-End (E2E) testing using the Cypress framework.",
    achievements: [
      "Developed comprehensive test cases and test scripts for E2E testing using Cypress framework",
      "Performed in-depth bug analysis to identify root causes and provided solution recommendations",
      "Established effective communication with IT and business teams to ensure feature alignment",
      "Verified bug fix results ensuring quality standards before production deployment",
    ],
  },
  {
    title: "Quality Assurance Staff (GMP)",
    company: "PT Komitrando Emporio",
    period: "September 2025 - November 2025",
    description: "Conducted internal audits according to GMP standards for fashion bag production, ensuring quality and hygiene compliance.",
    achievements: [
      "Conducted internal audits per GMP standards for fashion bag production processes",
      "Supervised external audit processes from international buyers",
      "Ensured SOP implementation and quality documentation across all production lines",
      "Developed CAPA and Kaizen initiatives to reduce defects and improve efficiency",
    ],
  },
  {
    title: "Quality Assurance & Frontend Developer",
    company: "PT Carakan Sadhana Dirgantara",
    period: "November 2023 - August 2025",
    description: "Developed web interfaces using React.js and Next.js while performing functional and compatibility testing.",
    achievements: [
      "Developed web interfaces using React.js and Next.js",
      "Performed functional and compatibility testing for web applications",
      "Created and executed test cases, recorded bug reports",
      "Optimized application performance and layout according to client needs",
    ],
  },
];

export const projects = [
  {
    title: "E2E Automation Testing Suite with Cypress",
    description: "Comprehensive Cypress automation framework for End-to-End testing with custom commands, test case coverage, and integration with CI/CD pipelines for continuous quality assurance.",
    tags: ["Cypress", "E2E Testing", "JavaScript", "Automation"],
    type: "Automation",
    github: "https://github.com/radityaaria/cypress-automation",
    demo: null,
    image: "/projects/cypress.jpg",
  },
  {
    title: "Performance Testing with Grafana k6",
    description: "Load Testing, Stress Testing, and Spike Testing implementation using Grafana k6 to evaluate backend system stability, scalability, and response performance under concurrent traffic.",
    tags: ["Grafana k6", "Load Testing", "Performance", "Monitoring"],
    type: "Performance",
    github: "https://github.com/radityaaria/k6-performance-testing",
    demo: null,
    image: "/projects/k6.jpg",
  },
  {
    title: "Server Performance Monitoring & Analysis",
    description: "Server resource monitoring using htop to identify bottlenecks related to CPU usage, authentication processing, password hashing, and backend concurrency handling.",
    tags: ["htop", "Monitoring", "Performance", "Debugging"],
    type: "Performance",
    github: "https://github.com/radityaaria/server-monitoring",
    demo: null,
    image: "/projects/monitoring.jpg",
  },
  {
    title: "API Testing & Bug Analysis",
    description: "Comprehensive API testing using Browser Network Tools, Root Cause Analysis for complex bugs, and bug lifecycle management with detailed reproduction steps.",
    tags: ["API Testing", "Debugging", "RCA", "Quality Assurance"],
    type: "QA",
    github: "https://github.com/radityaaria/api-testing-suite",
    demo: null,
    image: "/projects/api-testing.jpg",
  },
  {
    title: "Web Application QA & Frontend Development",
    description: "Frontend development using React.js and Next.js combined with functional and compatibility testing for web applications, ensuring optimal user experience.",
    tags: ["React.js", "Next.js", "QA", "Frontend"],
    type: "Web",
    github: "https://github.com/radityaaria/web-qa-project",
    demo: "https://web-qa-demo.vercel.app",
    image: "/projects/web-qa.jpg",
  },
  {
    title: "Quality Management System Implementation",
    description: "Implementation of ISO 9001 quality standards, internal auditing processes, SOP compliance verification, and CAPA development for continuous improvement.",
    tags: ["ISO 9001", "Quality Management", "Auditing", "CAPA"],
    type: "QA",
    github: "https://github.com/radityaaria/qms-implementation",
    demo: null,
    image: "/projects/qms.jpg",
  },
];

export const certifications = [
  {
    title: "Bachelor of Informatics Engineering",
    issuer: "Janabadra University",
    date: "GPA: 3.65/4.00",
  },
  {
    title: "Automation Testing with Cypress",
    issuer: "Professional Development",
    date: "2026",
  },
  {
    title: "Performance Testing with Grafana k6",
    issuer: "Professional Development",
    date: "2025",
  },
];

export const testimonials = [
  {
    name: "Development Team Lead",
    role: "Engineering Manager",
    company: "Golden Digital",
    content: "Raditya has exceptional attention to detail in finding bugs and providing comprehensive root cause analysis. His Cypress automation framework significantly improved our testing efficiency and product quality.",
    avatar: "/avatars/lead.jpg",
  },
  {
    name: "Product Manager",
    role: "Product Manager",
    company: "PT Carakan Sadhana Dirgantara",
    content: "Outstanding technical skills combined with excellent communication abilities. Raditya bridges the gap between technical and business teams effectively, ensuring all features meet quality standards.",
    avatar: "/avatars/pm.jpg",
  },
];
