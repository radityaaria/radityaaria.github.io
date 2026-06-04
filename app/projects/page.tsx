"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import { projects } from "@/data/profile";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "QA", "Automation", "Performance", "Web"];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.type === filter);

  return (
    <Section className="min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center mb-4">All Projects</h1>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Comprehensive collection of my QA automation frameworks, performance testing suites, and web applications
        </p>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                filter === category
                  ? "bg-cyan-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card key={index}>
              <div className="mb-4">
                <div className="aspect-video bg-gradient-to-br from-cyan-100 to-slate-100 rounded-md mb-4 flex items-center justify-center">
                  <div className="text-5xl">
                    {project.type === "QA" && "🧪"}
                    {project.type === "Automation" && "⚙️"}
                    {project.type === "Performance" && "📊"}
                    {project.type === "Web" && "🌐"}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="default">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-slate-600 hover:text-cyan-600 transition-colors"
                  >
                    <GithubIcon size={16} className="mr-1" />
                    Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-slate-600 hover:text-cyan-600 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Demo
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">No projects found in this category.</p>
          </div>
        )}
      </div>
    </Section>
  );
}
