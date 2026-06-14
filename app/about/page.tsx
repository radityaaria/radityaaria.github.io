import type { Metadata } from "next";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import Image from "next/image";
import { profile, skills } from "@/data/profile";
import { CheckCircle2, Code2, TestTube2, Gauge, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Raditya Aria Ramadhani — Automation QA Engineer with 7+ years of experience in Cypress, Playwright, Katalon Studio, and Grafana k6 performance testing.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const toolsStack = [
    {
      category: "Automation Testing",
      icon: TestTube2,
      tools: ["Cypress", "JavaScript", "Test Automation", "E2E Testing", "Regression Testing"],
    },
    {
      category: "Performance Testing",
      icon: Gauge,
      tools: ["Grafana k6", "Load Testing", "Stress Testing", "Spike Testing", "htop"],
    },
    {
      category: "Development & Scripting",
      icon: Code2,
      tools: ["React.js", "Next.js", "JavaScript", "Node.js", "Python", "HTML/CSS"],
    },
    {
      category: "Debugging & Monitoring",
      icon: Eye,
      tools: ["Browser Network Tools", "htop", "Performance Analysis", "API Testing"],
    },
    {
      category: "Version Control & Tools",
      icon: CheckCircle2,
      tools: ["Git", "GitHub", "GitLab", "Trello", "CI/CD"],
    },
  ];

  return (
    <>
      <Section className="pt-32">
        <div className="max-w-5xl mx-auto">
          {/* Header with Photo */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="flex-shrink-0">
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-cyan-600 shadow-lg">
                <Image
                  src="/headshot-profile.png"
                  alt={profile.name}
                  fill
                  sizes="(max-width: 768px) 160px, 192px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="mb-4">About Me</h1>
              <p className="text-xl text-slate-600">
                {profile.tagline}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card hover={false} className="mb-12">
            <div className="prose prose-slate max-w-none">
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Background</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                {profile.bio}
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Dengan pengalaman bertahun-tahun di industri manufaktur dan software development, saya telah berkontribusi dalam memastikan kualitas produk di berbagai skala—dari automotive manufacturing di Toyota Motor Manufacturing Indonesia hingga software quality assurance di perusahaan teknologi. Fokus saya adalah membangun proses testing yang efisien, scalable, dan terintegrasi dengan development workflow.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Saya percaya bahwa quality assurance bukan hanya tentang menemukan bug, tetapi juga tentang membangun budaya kualitas dalam tim, mencegah masalah sejak awal melalui automation, dan terus meningkatkan system reliability melalui performance testing dan comprehensive monitoring.
              </p>
            </div>
          </Card>

          {/* Education */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-100 rounded-lg">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-slate-900">Bachelor of Informatics Engineering</h4>
                    <p className="text-cyan-600 font-medium">Janabadra University</p>
                    <p className="text-slate-600 text-sm mt-1">GPA: 3.65/4.00</p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-100 rounded-lg">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-slate-900">Automotive Body Repair & Painting</h4>
                    <p className="text-cyan-600 font-medium">STM Pembangunan Yogyakarta</p>
                    <p className="text-slate-600 text-sm mt-1">4-Year Program (2014-2018) • Industrial Internship</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* What I Do */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-100 rounded-lg">
                    <TestTube2 className="text-cyan-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-slate-900">Automation Testing & Bug Analysis</h4>
                    <p className="text-slate-600 text-sm">
                      Developing comprehensive test scripts menggunakan Cypress untuk E2E testing, melakukan root cause analysis untuk bug kompleks, dan managing bug lifecycle dengan detailed reproduction steps.
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-100 rounded-lg">
                    <Gauge className="text-cyan-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-slate-900">Performance Testing & Monitoring</h4>
                    <p className="text-slate-600 text-sm">
                      Melakukan Load Testing, Stress Testing, dan Spike Testing dengan Grafana k6, analyzing performance bottlenecks menggunakan htop untuk identify CPU, memory, dan backend concurrency issues.
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-100 rounded-lg">
                    <CheckCircle2 className="text-cyan-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-slate-900">Quality Management & Standards</h4>
                    <p className="text-slate-600 text-sm">
                      Implementing ISO 9001 quality standards, conducting internal audits, SOP compliance verification, dan developing CAPA untuk continuous improvement initiatives.
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-100 rounded-lg">
                    <Code2 className="text-cyan-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-slate-900">Web Development & QA</h4>
                    <p className="text-slate-600 text-sm">
                      Developing web interfaces menggunakan React.js/Next.js, performing functional and compatibility testing, dan optimizing application performance untuk ensure quality standards.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Tools & Technologies */}
      <Section background="slate">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Tools & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolsStack.map((stack) => {
              const Icon = stack.icon;
              return (
                <Card key={stack.category}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-cyan-100 rounded-lg">
                      <Icon className="text-cyan-600" size={20} />
                    </div>
                    <h4 className="font-semibold text-slate-900">{stack.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stack.tools.map((tool) => (
                      <Badge key={tool} variant="default">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Skills Detail */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((category) => (
              <Card key={category.category} hover={false}>
                <h3 className="text-xl font-semibold mb-4 text-cyan-600">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((skill) => (
                    <li key={skill.name} className="flex justify-between items-center">
                      <span className="text-slate-700">{skill.name}</span>
                      <Badge variant="default">{skill.level}</Badge>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Approach */}
      <Section background="slate">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">My Approach to Quality</h2>
          <Card hover={false}>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-slate-900">🎯 Quality-First Mindset</h4>
                <p className="text-slate-600">
                  Quality bukan hanya tanggung jawab QA—saya percaya dalam membangun budaya quality-first dalam tim, di mana setiap orang peduli dengan kualitas produk dari manufacturing hingga software development.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-slate-900">🤖 Automation & Efficiency</h4>
                <p className="text-slate-600">
                  Mengotomasi testing dengan Cypress untuk E2E coverage yang comprehensive, memberikan waktu lebih untuk deep analysis dan exploratory testing yang memerlukan human judgment dan technical expertise.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-slate-900">📊 Performance-Driven</h4>
                <p className="text-slate-600">
                  Menggunakan Grafana k6 untuk performance testing dan htop untuk server monitoring, identify bottlenecks di CPU, memory, dan backend concurrency untuk ensure system scalability dan stability.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-slate-900">🔍 Root Cause Analysis</h4>
                <p className="text-slate-600">
                  Deep dive into bug analysis untuk find root causes, bukan hanya symptoms. Provide comprehensive recommendations kepada developer team untuk prevent similar issues di masa depan.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-slate-900">🚀 Continuous Improvement</h4>
                <p className="text-slate-600">
                  Menerapkan Kaizen principles dan CAPA development untuk terus improve processes, reduce defects, dan stabilize quality standards across development lifecycle.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
