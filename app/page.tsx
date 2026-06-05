import { Download } from "lucide-react";
import { WhatsappIcon } from "@/components/Icons";
import Image from "next/image";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import { profile, skills, experiences, projects, certifications, testimonials } from "@/data/profile";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan-600 shadow-xl">
                <Image
                  src="/headshot-profile.png"
                  alt={profile.name}
                  fill
                  sizes="(max-width: 768px) 192px, 256px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="mb-4 text-balance">
                Raditya <span className="text-cyan-600">Aria</span> Ramadhani
              </h1>
              <p className="text-2xl sm:text-3xl text-cyan-600 font-semibold mb-4">
                {profile.role}
              </p>
              <p className="text-base sm:text-lg text-slate-600 mb-8">
                {profile.tagline}
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button href={profile.cv} variant="primary" download="CV-Raditya-Aria-Ramadhani.pdf">
                  <Download size={20} className="mr-2" />
                  Download CV
                </Button>
                <Button href={profile.whatsapp} variant="outline" external>
                  <WhatsappIcon size={20} className="mr-2" />
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section background="slate" id="skills">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((category) => (
              <Card key={category.category} hover={false}>
                <h3 className="text-xl font-semibold mb-4 text-center text-cyan-600">
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

      {/* Experience Section */}
      <Section id="experience">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center mb-12">QA Related Work Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{exp.title}</h3>
                    <p className="text-cyan-600 font-medium">{exp.company}</p>
                  </div>
                  <Badge variant="primary">{exp.period}</Badge>
                </div>
                <p className="text-slate-600 mb-4">{exp.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-700">Key Achievements:</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section background="slate" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-4">Featured Projects</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Selection of testing frameworks, automation tools, and web applications I&apos;ve built
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((project, index) => (
              <Card key={index}>
                <div className="mb-4">
                  <div className="aspect-video bg-gradient-to-br from-cyan-100 to-slate-100 rounded-md mb-4 flex items-center justify-center overflow-hidden relative">
                    {project.image && project.image !== "/projects/k6.jpg" && project.image !== "/projects/cypress.jpg" && project.image !== "/projects/monitoring.jpg" && project.image !== "/projects/api-testing.jpg" && project.image !== "/projects/web-qa.jpg" && project.image !== "/projects/qms.jpg" && project.image !== "/projects/ai-testing.jpg" ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="text-4xl">🧪</div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="default">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/projects" variant="outline">
              View All Projects
            </Button>
          </div>
        </div>
      </Section>

      {/* Certifications Section */}
      <Section id="certifications">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center mb-12">Certifications & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} hover={false} className="flex flex-col h-full">
                <div className="flex flex-col flex-grow text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-slate-900 min-h-[3rem] flex items-center justify-center">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-slate-600 mb-3 min-h-[2.5rem] flex items-center justify-center">
                    {cert.issuer}
                  </p>
                  <Badge variant="primary" className="mb-4 mx-auto">
                    {cert.date}
                  </Badge>
                  <div className="mt-auto">
                    <Button 
                      href={cert.file} 
                      variant="outline" 
                      download={`${cert.title.replace(/\s+/g, '_')}.pdf`}
                      className="w-full text-sm py-2"
                    >
                      <Download size={16} className="mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section background="slate" id="testimonials">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center mb-12">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} hover={false}>
                <p className="text-slate-600 mb-6 italic">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-slate-400 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
