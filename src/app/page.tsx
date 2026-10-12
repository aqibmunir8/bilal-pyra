"use client";

import React, { useState } from "react";
import {
  GraduationCap,
  Code2,
  Database,
  Server,
  Layers,
  Sparkles,
  ExternalLink,
  Mail,
  MapPin,
  CheckCircle2,
  Send,
  Heart,
  ChevronRight,
  Flame,
} from "lucide-react";

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("bilalpyra@example.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const skills = [
    {
      category: "Frontend",
      icon: <Layers className="w-5 h-5 text-pink-600" />,
      items: ["React.js", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 & CSS3"],
      desc: "Responsive, accessible, and interactive user interfaces.",
    },
    {
      category: "Backend",
      icon: <Server className="w-5 h-5 text-pink-600" />,
      items: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Middleware"],
      desc: "Robust server-side logic and scalable backend services.",
    },
    {
      category: "Database",
      icon: <Database className="w-5 h-5 text-pink-600" />,
      items: ["MongoDB", "Mongoose", "Database Schema Design", "Aggregation Pipeline"],
      desc: "NoSQL document modeling and high-performance querying.",
    },
    {
      category: "Pyra & Dev Tools",
      icon: <Flame className="w-5 h-5 text-pink-600" />,
      items: ["Pyra Workflows", "Git & GitHub", "Postman", "Vercel", "npm/yarn"],
      desc: "Rapid delivery, modular building blocks, and clean code hygiene.",
    },
  ];

  const projects = [
    {
      title: "EduCampus Connect",
      type: "MERN Stack Application",
      description:
        "A student & department collaboration portal tailored for academic routines, course resources, and campus notifications.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
      link: "#",
      tag: "Academic Project",
    },
    {
      title: "Pyra Commerce Hub",
      type: "Full-Stack Web App",
      description:
        "High-performance eCommerce solution featuring smooth pink-accented UX, JWT authentication, and automated cart checkout.",
      tech: ["React.js", "Node.js", "MongoDB", "Express", "REST API"],
      link: "#",
      tag: "Featured",
    },
    {
      title: "TaskPyra Flow",
      type: "Productivity Tool",
      description:
        "Kanban-style project board designed for developer sprints, real-time status changes, and student study schedules.",
      tech: ["Next.js", "Tailwind CSS", "Express API", "MongoDB"],
      link: "#",
      tag: "Live Demo",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-800">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-pink-50 border border-pink-200 flex items-center justify-center text-pink-600 font-bold group-hover:bg-pink-600 group-hover:text-white transition-all duration-200 shadow-sm">
              BP
            </div>
            <span className="font-semibold text-lg tracking-tight text-zinc-900 group-hover:text-pink-600 transition-colors">
              Bilal <span className="text-pink-600 font-bold">Pyra</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
            <a href="#about" className="hover:text-pink-600 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-pink-600 transition-colors">
              MERN Skills
            </a>
            <a href="#education" className="hover:text-pink-600 transition-colors">
              Education
            </a>
            <a href="#projects" className="hover:text-pink-600 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-pink-600 transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-pink-50/70 via-pink-50/20 to-transparent -z-10 pointer-events-none rounded-b-[48px]" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200/80 text-pink-700 text-xs sm:text-sm font-medium mb-6 animate-fade-in shadow-xs">
                <span className="w-2 h-2 rounded-full bg-pink-600 animate-pulse" />
                Student at University of Education Multan Campus
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-950 mb-6 leading-tight">
                Hi, I'm <span className="text-pink-600">Bilal Pyra</span>.
                <br />
                MERN Stack Developer & Tech Enthusiast.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-zinc-600 mb-8 leading-relaxed max-w-2xl">
                Building modern, clean, full-stack web applications with MongoDB,
                Express, React, and Node.js. Combining university academic rigor
                with practical software engineering and Pyra creativity.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-full bg-pink-600 text-white font-medium text-sm hover:bg-pink-700 transition-all shadow-sm hover:shadow-md active:scale-95 flex items-center gap-2"
                >
                  <span>Explore My Work</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full bg-pink-50 border border-pink-200 text-pink-700 font-medium text-sm hover:bg-pink-100 hover:border-pink-300 transition-all active:scale-95"
                >
                  Contact Me
                </a>
              </div>

              {/* Quick Info Tags */}
              <div className="mt-12 pt-8 border-t border-pink-100 flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs sm:text-sm text-zinc-500">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-pink-500" />
                  <span>Multan, Pakistan</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-pink-500" />
                  <span>UE Multan Campus</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-pink-500" />
                  <span>MERN Stack Focus</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About & Education Section */}
        <section id="about" className="py-16 md:py-24 bg-pink-50/40 border-y border-pink-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Story */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h2 className="text-xs sm:text-sm uppercase tracking-wider text-pink-600 font-bold mb-2">
                    About Bilal
                  </h2>
                  <h3 className="text-3xl font-bold text-zinc-900 tracking-tight">
                    Passionate student coder driven by craft and problem-solving
                  </h3>
                </div>

                <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">
                  I am currently pursuing my higher education at the{" "}
                  <strong className="text-zinc-900 font-semibold">
                    University of Education, Multan Campus
                  </strong>
                  . My journey revolves around software development, with a deep
                  focus on the MERN ecosystem.
                </p>

                <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">
                  Whether it's architecting clean REST APIs with Express & Node,
                  structuring documents in MongoDB, or designing responsive,
                  aesthetically pleasing interfaces in React & Next.js, I take pride
                  in turning ideas into robust digital products.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-white rounded-2xl border border-pink-100 shadow-xs">
                    <p className="text-2xl font-bold text-pink-600">UE Multan</p>
                    <p className="text-xs text-zinc-500 mt-1">Campus Education</p>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-pink-100 shadow-xs">
                    <p className="text-2xl font-bold text-pink-600">100% MERN</p>
                    <p className="text-xs text-zinc-500 mt-1">Full-Stack Dedication</p>
                  </div>
                </div>
              </div>

              {/* Right Column: University Highlight Card */}
              <div id="education" className="lg:col-span-5">
                <div className="p-6 sm:p-8 bg-white rounded-3xl border border-pink-200/80 shadow-md relative overflow-hidden">
                  <div className="w-12 h-12 rounded-2xl bg-pink-100 border border-pink-200 flex items-center justify-center text-pink-600 mb-6">
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-wider text-pink-600 bg-pink-50 px-2.5 py-1 rounded-md border border-pink-200">
                    Academic Campus
                  </span>

                  <h4 className="text-xl font-bold text-zinc-900 mt-3 mb-2">
                    University of Education
                  </h4>
                  <p className="text-sm font-medium text-pink-700 mb-4">
                    Multan Campus, Punjab, Pakistan
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-600 mb-6 leading-relaxed">
                    Undergoing rigorous training in core computer science,
                    algorithms, database systems, and software engineering
                    principles while actively developing web applications.
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-pink-100 text-xs sm:text-sm text-zinc-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                      <span>Software Engineering Fundamentals</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                      <span>Database Management & Architecture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                      <span>Modern Web Technologies & Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-xs sm:text-sm uppercase tracking-wider text-pink-600 font-bold mb-2">
                Core Competencies
              </h2>
              <h3 className="text-3xl font-bold text-zinc-900 tracking-tight">
                MERN Stack & Development Skills
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 mt-3">
                Everything required to take an idea from wireframe to deployed,
                production-ready full-stack software.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 border border-pink-100 hover:border-pink-300 transition-all duration-200 hover:shadow-md flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center mb-4 group-hover:bg-pink-600 group-hover:text-white transition-all">
                      {skill.icon}
                    </div>

                    <h4 className="text-lg font-bold text-zinc-900 mb-2">
                      {skill.category}
                    </h4>

                    <p className="text-xs text-zinc-500 mb-4 leading-relaxed">
                      {skill.desc}
                    </p>

                    <ul className="space-y-2">
                      {skill.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-700"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-pink-50 text-[11px] text-pink-600 font-semibold tracking-wider uppercase">
                    Proficient
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-16 md:py-24 bg-pink-50/30 border-y border-pink-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <h2 className="text-xs sm:text-sm uppercase tracking-wider text-pink-600 font-bold mb-2">
                  Portfolio Highlights
                </h2>
                <h3 className="text-3xl font-bold text-zinc-900 tracking-tight">
                  Selected Works & Applications
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-500 max-w-md mt-2 md:mt-0">
                A showcase of full-stack projects combining clean UI design with
                reliable MERN architectures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((proj, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-pink-100 p-6 flex flex-col justify-between hover:border-pink-300 hover:shadow-lg transition-all duration-200 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-pink-50 text-pink-700 border border-pink-200">
                        {proj.tag}
                      </span>
                      <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-pink-600 transition-colors" />
                    </div>

                    <h4 className="text-xl font-bold text-zinc-900 mb-1 group-hover:text-pink-600 transition-colors">
                      {proj.title}
                    </h4>
                    <p className="text-xs font-semibold text-pink-600 mb-3">
                      {proj.type}
                    </p>

                    <p className="text-xs sm:text-sm text-zinc-600 mb-6 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-pink-50">
                      {proj.tech.map((t, tidx) => (
                        <span
                          key={tidx}
                          className="text-[11px] px-2.5 py-0.5 rounded-md bg-zinc-50 border border-zinc-200 text-zinc-600 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-white border border-pink-200 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
              <div className="max-w-2xl mx-auto text-center mb-8">
                <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mx-auto mb-4 border border-pink-200">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
                  Let's Connect & Build Together
                </h3>
                <p className="text-zinc-600 text-sm mt-2">
                  Open for opportunities, collaborative campus initiatives, and MERN
                  stack development freelance projects.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 bg-pink-50 border border-pink-200 rounded-2xl text-center">
                  <CheckCircle2 className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                  <p className="text-zinc-900 font-bold">Message sent successfully!</p>
                  <p className="text-zinc-600 text-xs mt-1">
                    Thank you for reaching out to Bilal Pyra. I will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                  className="space-y-4 max-w-lg mx-auto"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm placeholder:text-zinc-400 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm placeholder:text-zinc-400 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Collaboration / Project Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm placeholder:text-zinc-400 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Hi Bilal, I loved your portfolio..."
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm placeholder:text-zinc-400 bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-medium text-sm transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Bilal</span>
                  </button>
                </form>
              )}

              {/* Direct Email Copy */}
              <div className="mt-8 pt-6 border-t border-pink-100 flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-600">
                <span>Or reach out directly:</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-700 hover:bg-pink-100 transition-colors font-medium cursor-pointer"
                >
                  <span>bilalpyra@example.com</span>
                  {copiedEmail ? (
                    <span className="text-green-600 font-bold ml-1">✓ Copied</span>
                  ) : (
                    <span className="text-zinc-400 ml-1">(Click to copy)</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-pink-100 bg-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-800">Bilal Pyra</span>
            <span>•</span>
            <span>University of Education Multan Campus</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Built with white & pink aesthetic using Next.js & Tailwind CSS</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
