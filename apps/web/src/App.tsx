import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, Award, BookOpen, GraduationCap } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-200">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/70 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Faith's World
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center">
            <a href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">About</a>
            <a href="#milestones" className="text-sm font-medium hover:text-blue-600 transition-colors">Milestones</a>
            <a href="#projects" className="text-sm font-medium hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white absolute w-full shadow-lg">
            <div className="flex flex-col p-4 gap-4">
              <a href="#about" className="text-sm font-medium hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#milestones" className="text-sm font-medium hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Milestones</a>
              <a href="#projects" className="text-sm font-medium hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Projects</a>
              <a href="#contact" className="text-sm font-medium hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Contact</a>

            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="container mx-auto px-4 md:px-6 py-20 md:py-32 flex flex-col lg:flex-row items-center gap-16 overflow-hidden">
          {/* Left Column: Text Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800 mb-8 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
              Available for new opportunities
            </div>

            <h1 className="text-2xl md:text-6xl lg:text-5xl font-extrabold tracking-tight mb-6 text-slate-900 leading-[1.1]">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Faith Kimongo.</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl text-slate-400 mt-2 block font-bold">Senior Software Engineer.</span>
            </h1>

            <div id="about" className="text-lg text-slate-600 max-w-[700px] mb-10 space-y-5 mx-auto lg:mx-0 text-left leading-relaxed scroll-mt-24">
              <p>
                I specialize in building highly scalable, data-driven applications that transform complex datasets into clear, actionable business insights. Over the past five years, I’ve architected high-performance systems using <strong>Python(Flask), JavaScript, Laravel, PostgreSQL, and REST API</strong> development, leveraging tools like HTMX and Docker.
              </p>
              <p>
                At the intersection of advanced engineering and data analytics, I design production-ready APIs and interactive dashboards (ECharts, Upset.js) to solve real-world problems. Backed by an <strong>MSc in Mathematical Science</strong> and <strong>BSc in Actuarial Science</strong>, I own the full lifecycle from data modeling to automating CI/CD pipelines with 95%+ test coverage.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a href="#projects" className="px-8 py-3.5 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all active:scale-95 text-center">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-3.5 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-50 transition-all active:scale-95 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 text-center">
                Get In Touch
              </a>
            </div>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {['Python', 'JavaScript', 'Laravel', 'Docker', 'CI/CD', 'Data Analytics', , 'AI Engineering', 'RAG and Agentic AI'].map(skill => (
                <span key={skill} className="px-4 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 shadow-sm cursor-default hover:bg-slate-200 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Elements */}
          <div className="flex-1 w-full max-w-[450px] lg:max-w-none relative mt-10 lg:mt-0">
            {/* Main Avatar/Graphic Placeholder */}
            <div className="aspect-square rounded-full bg-gradient-to-tr from-blue-100 to-indigo-50 relative overflow-hidden border-8 border-white shadow-2xl mx-auto lg:ml-auto lg:mr-0 w-full max-w-[450px]">
              {/* Decorative dot pattern */}
              <div className="absolute inset-0 bg-blue-600/10 bg-[radial-gradient(#3b82f6_2px,transparent_2px)] [background-size:24px_24px] opacity-40"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 group cursor-default">
                <span className="text-blue-600/10 font-black text-[120px] md:text-[180px] select-none font-serif tracking-tighter absolute">
                  FK
                </span>
                <p className="relative z-10 text-slate-700 text-sm md:text-base font-medium px-6 py-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 max-w-[80%] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Maintains a comprehensive suite of automated tests via Pytest, ensuring high reliability and rapid, safe CI/CD deployments.
                </p>
              </div>
            </div>

            {/* Floating badge 1 */}
            <div className="absolute top-10 -left-4 md:-left-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-slate-100 animate-[bounce_4s_infinite]">
              <div className="flex items-center gap-3">
                <div className="bg-indigo-100 p-2 rounded-full text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                </div>
                <div className="flex flex-col gap-1">
                  <a href="/images/masters_degree.pdf" target="_blank" rel="noreferrer" className="text-sm font-bold text-slate-800 hover:text-blue-600 hover:underline transition-colors block">
                    MSc Mathematical Science
                  </a>
                  <a href="/images/degree_certificate.pdf" target="_blank" rel="noreferrer" className="text-sm font-bold text-slate-800 hover:text-blue-600 hover:underline transition-colors block">
                    BSc Actuarial Science
                  </a>
                </div>
              </div>
            </div>

            {/* Floating badge 2 */}
            <div className="absolute bottom-12 -right-4 md:-right-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-slate-100 animate-[bounce_5s_infinite_1s]">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">95%+ Coverage</p>
                  <p className="text-xs text-slate-500 font-medium">Robust Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Preview */}
        <section id="projects" className="bg-white py-24 border-y border-slate-200">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Projects I've worked on</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1: Visualization Dashboards */}
              <div className="group rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                <div
                  className="aspect-video relative overflow-hidden bg-slate-200 border-b border-slate-200 cursor-pointer"
                  onClick={() => setSelectedImage('/images/Madiva_img.png')}
                >
                  <img
                    src="/images/Madiva_img.png"
                    alt="Visualization Dashboards"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Visualization Dashboards</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    Interactive and scalable visualization dashboards built to transform complex datasets into clear, actionable business insights.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                    {['Node.js', 'Python/Flask', 'HTMX', 'Docker', 'Pytest', 'Playwright'].map(tech => (
                      <span key={tech} className="px-2 py-1 bg-slate-200/70 text-slate-700 text-xs font-semibold rounded-md border border-slate-300/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href="https://madiva-dash-dev.core.wits.ac.za/about" className="text-blue-600 text-sm font-bold hover:text-blue-700 inline-flex items-center group/link">
                    View details
                    <span className="transform translate-x-0 group-hover/link:translate-x-1 transition-transform ml-1">→</span>
                  </a>
                </div>
              </div>

              {/* Project 2: Carbon Assets Management */}
              <div className="group rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                <div
                  className="aspect-video relative overflow-hidden bg-slate-200 border-b border-slate-200 cursor-pointer"
                  onClick={() => setSelectedImage('/images/RREC.png')}
                >
                  <img
                    src="/images/RREC.png"
                    alt="Carbon Assets Management"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1%20text%20%7B%20fill%3A%2394a3b8%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23e2e8f0%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22270%22%20y%3D%22218%22%3EImage%20Pending%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Carbon Assets Management</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    A comprehensive web platform developed for Renewvia to manage, track, and issue carbon assets, ensuring full compliance with rigorous international ecological standards and promoting trust in the renewable energy sphere.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                    {['CSS', 'HTML', 'Vue.js', 'Project Management', 'Figma'].map(tech => (
                      <span key={tech} className="px-2 py-1 bg-slate-200/70 text-slate-700 text-xs font-semibold rounded-md border border-slate-300/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href="https://www.r-recs.com/" className="text-blue-600 text-sm font-bold hover:text-blue-700 inline-flex items-center group/link">
                    View details
                    <span className="transform translate-x-0 group-hover/link:translate-x-1 transition-transform ml-1">→</span>
                  </a>
                </div>
              </div>

              {/* Project 3: Faith Cafe */}
              <div className="group rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                <div
                  className="aspect-video relative overflow-hidden bg-slate-200 border-b border-slate-200 cursor-pointer"
                  onClick={() => setSelectedImage('/images/faith_cafe.png')}
                >
                  <img
                    src="/images/faith_cafe.png"
                    alt="Faith Cafe Bakery"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1%20text%20%7B%20fill%3A%2394a3b8%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23e2e8f0%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22270%22%20y%3D%22218%22%3EImage%20Pending%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Faith Cafe</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    A digital storefront for a neighborhood bakery offering scratch-made breads, pastries, and custom cakes, designed for everyday visits and special celebrations.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                    {['Replit AI', 'TypeScript', 'TailwindCSS', 'React'].map(tech => (
                      <span key={tech} className="px-2 py-1 bg-slate-200/70 text-slate-700 text-xs font-semibold rounded-md border border-slate-300/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href="https://bakery-connect--faithkimongo.replit.app/" className="text-blue-600 text-sm font-bold hover:text-blue-700 inline-flex items-center group/link">
                    View details
                    <span className="transform translate-x-0 group-hover/link:translate-x-1 transition-transform ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements, Publications & Certifications Section */}
        <section id="milestones" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <a href="#milestones" className="text-3xl font-bold mb-4">Milestones & Recognition</a>
              <p className="text-slate-600 max-w-2xl mx-auto">A snapshot of my professional journey, academic contributions, and continuous learning.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

              {/* Achievements Column */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-amber-100 text-amber-600 rounded-xl"><Award size={28} /></div>
                  <h3 className="text-2xl font-bold">Achievements</h3>
                </div>
                <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-amber-200 hover:-translate-y-1 transition-all duration-300">
                  <h4 className="font-bold text-lg text-slate-900 mb-2">AI Hackathon Guinness World Record Holder</h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">Secured top position in a recent competitive hackathon by developing an innovative technical solution.</p>
                  <a href="/images/Guinness_world_record_certificate.pdf" target="_blank" rel="noreferrer" className="text-amber-600 text-sm font-semibold hover:underline inline-flex items-center">
                    View Certificate &rarr;
                  </a>
                </div>

              </div>

              {/* Publications Column */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-xl"><BookOpen size={28} /></div>
                  <h3 className="text-2xl font-bold">Publications</h3>
                </div>
                <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300">
                  <h4 className="font-bold text-lg text-slate-900 mb-2">Leveraging data science to understand and address multimorbidity in sub-Saharan Africa: the MADIVA protocol.</h4>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">This study aims to develop and apply data science methods to gain a deeper understanding of multimorbidity (Defined as two or more chronic diseases in an individual) in sub-Saharan Africa using integrated datasets from multiple sources and provide clinically relevant and actionable insights.</p>
                  <a href="https://informatics.bmj.com/content/32/1/e101294" target="_blank" rel="noreferrer" className="text-blue-600 text-sm font-semibold hover:underline inline-flex items-center">
                    Read Paper &rarr;
                  </a>
                </div>

                <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300">
                  <h4 className="font-bold text-lg text-slate-900 mb-2">Balancing protection of participants and other stakeholders with openness: African lessons from the MADIVA data sharing and access policy</h4>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed"><p>National and international data sharing in health research is critical for advancing scientific discovery and fostering collaborative partnerships. With growing technological advances and an increasing desire for open science, data sharing enables researchers to access diverse datasets to generate novel insights. Adopting robust policies is key to responsible datasharing, which fosters interdisciplinary collaboration, ensures ethical and legal compliance,implements transparency, and strengthens stakeholder trust. </p>
                  </p>
                  <a href="#" target="_blank" rel="noreferrer" className="text-blue-600 text-sm font-semibold hover:underline inline-flex items-center">
                    Read Paper &rarr;
                  </a>
                </div>
              </div>

              {/* Certifications Column */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl"><GraduationCap size={28} /></div>
                  <h3 className="text-2xl font-bold">Certifications</h3>
                </div>
                <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300">
                  <h4 className="font-bold text-lg text-slate-900 mb-1">AWS Certified Cloud Practitioner</h4>
                  <p className="text-sm text-slate-500 font-medium mb-3">Issued: 2024 &bull; Credential ID: 12345</p>
                  <a href="https://www.credly.com/badges/d252600d-6966-4010-8282-b93a39624221/public_url" target="_blank" rel="noreferrer" className="text-emerald-600 text-sm font-semibold hover:underline inline-flex items-center">
                    Verify Credential &rarr;
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">

              <button onClick={() => setEmailModalOpen(true)} className="w-full text-left flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Mail size={24} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-slate-600 text-sm break-all">faithvictor78@gmail.com</p>
                </div>
              </button>

              <a href="tel:+1234567890" className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Phone size={24} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-lg">Phone</h3>
                  <p className="text-slate-600 text-sm truncate">+254 795-574-819</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/faith-kimongo/" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Linkedin size={24} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-lg">LinkedIn</h3>
                  <p className="text-slate-600 text-sm truncate" title="Linkedin">Faith Kimongo</p>
                </div>
              </a>

              <a href="https://github.com/Faith-Kimongo" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Github size={24} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-lg">GitHub</h3>
                  <p className="text-slate-600 text-sm truncate" title="Github">View my code</p>
                </div>
              </a>

              <a href="https://orcid.org/0009-0002-7730-6246" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="p-4 bg-lime-50 text-lime-600 rounded-full group-hover:bg-lime-500 group-hover:text-white transition-colors duration-300">
                  <div className="w-6 h-6 flex items-center justify-center font-black text-xl leading-none font-serif">iD</div>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-lg">ORCID</h3>
                  <p className="text-slate-600 text-sm truncate" title="My ORCID ID">0009-0002-7730-6246</p>
                </div>
              </a>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm">© {new Date().getFullYear()} Faith. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>

      {/* Email Modal */}
      {emailModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Directly to <span className="text-blue-500">faithvictor78@gmail.com</span> or via below</h3>
              <button onClick={() => setEmailModalOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
                <X size={24} />
              </button>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all text-slate-800 font-medium"
                  placeholder="What is this regarding?"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all min-h-[140px] resize-y text-slate-800"
                  placeholder="Hi Faith, I'd like to talk about..."
                  value={emailBody}
                  onChange={(e) => setEmailBody(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
              <button
                onClick={() => setEmailModalOpen(false)}
                className="px-6 py-2.5 rounded-full font-medium text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=faithvictor78@gmail.com&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
                  window.open(gmailUrl, '_blank');
                  setEmailModalOpen(false);
                  setEmailSubject('');
                  setEmailBody('');
                }}
                className="px-6 py-2.5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all active:scale-95 cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-slate-900/90 backdrop-blur-md animate-in fade-in duration-300 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl w-full max-h-full flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -top-12 right-0 text-white hover:text-slate-300 transition-colors cursor-pointer bg-slate-800/50 hover:bg-slate-800 p-2 rounded-full backdrop-blur-sm"
              aria-label="Close image"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300 cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
