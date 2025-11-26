import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Linkedin, Mail, Phone, ExternalLink, 
  Cpu, BarChart3, Users, Settings, Database, 
  Brain, FileText, ChevronRight, Award, PenTool
} from 'lucide-react';

/* DATA CONSTANTS */
const PERSONAL_INFO = {
  name: "Sukhandeep Kaur",
  role: "Product Manager | Manufacturing Intelligence & AI",
  email: "sukhan94bhullar@gmail.com",
  phone: "+91-9781871321",
  linkedin: "https://www.linkedin.com/in/sukhandeep-kaur-706a74ba",
  location: "Chandigarh / Remote",
  summary: "Results-oriented Product Manager with over 5 years of experience in building and scaling data-driven products that enhance operational efficiency, tool utilization, and process visibility for machining environments. Expert in connecting engineering, operations, and business objectives to deliver measurable value in Industry 4.0."
};

const EXPERIENCE = [
  {
    id: 1,
    role: "Product Manager",
    company: "Lambda Function (IDS Infotech Ltd.)",
    period: "Jan 2023 – Present",
    type: "Remote / Chandigarh",
    description: "Leading end-to-end product lifecycle for an AI-assisted CNC Machining SaaS platform.",
    achievements: [
      "Lead strategy, requirements, and release planning for manufacturing intelligence tools.",
      "Translated complex CNC data into actionable product requirements and acceptance criteria.",
      "Partnered with engineering and design to deliver high-quality releases improving shop-floor visibility.",
      "Drove User Acceptance Testing (UAT) and continuous iterative improvements based on customer feedback."
    ]
  },
  {
    id: 2,
    role: "Project Coordinator & Customer Success Manager",
    company: "Lambda Function (IDS Infotech Ltd.)",
    period: "Jan 2022 – Jan 2023",
    description: "Bridged the gap between technical teams and clients to ensure successful deployment.",
    achievements: [
      "Managed cross-functional execution ensuring clarity in scope and timelines.",
      "Acted as primary liaison for client communication and transparency.",
      "Tracked progress via Jira and resolved bottlenecks to ensure milestone delivery."
    ]
  },
  {
    id: 3,
    role: "Business Analyst",
    company: "IDS Infotech Ltd.",
    period: "Jun 2019 – Jan 2022",
    description: "Focused on requirement gathering and system workflows.",
    achievements: [
      "Developed BRDs, PRDs, process flows, and wireframes.",
      "Conducted gap analysis and root-cause investigations for product enhancements.",
      "Aligned business goals with technical feasibility for scalable development."
    ]
  },
  {
    id: 4,
    role: "Business Development Executive",
    company: "Orem Technologies",
    period: "Jan 2018 – May 2019",
    description: "Identified new business opportunities and managed end-to-end sales cycles.",
    achievements: []
  },
  {
    id: 5,
    role: "Business Development Executive",
    company: "Live Deftsoft Informatics",
    period: "Jun 2016 – Aug 2017",
    description: "Handled lead generation, client communication, and deal closure.",
    achievements: []
  }
];

const SKILLS = {
  technical: [
    "SQL & Data Analytics", "Power BI", "JIRA & Confluence", "Figma & Miro", "Balsamiq", "Draw.io"
  ],
  product: [
    "Product Strategy", "Roadmapping", "Backlog Prioritization", "Agile & Scrum", "User Research", "A/B Testing"
  ],
  domain: [
    "Manufacturing Tech", "CNC Monitoring", "Industry 4.0", "SaaS", "Tool Life Analytics"
  ]
};

const CERTIFICATIONS = [
  { title: "Artificial Intelligence Micro-Certification", issuer: "Product School" },
  { title: "Product Road Mapping Micro-Certification", issuer: "Product School" },
  { title: "Jira Fundamentals Badge", issuer: "Atlassian" }
];

const EDUCATION = [
  {
    degree: "P.G. Diploma in International Business Operations",
    school: "IGNOU, New Delhi",
    year: "2021",
    score: "67%"
  },
  {
    degree: "B.Tech in Computer Science & Engineering",
    school: "Punjab Technical University",
    year: "2016",
    score: "79%"
  }
];

/* COMPONENTS */

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
      {title}
      <span className="absolute -bottom-2 left-0 w-16 h-1 bg-teal-500 rounded-full"></span>
    </h2>
    {subtitle && <p className="text-slate-400 mt-2 max-w-2xl">{subtitle}</p>}
  </div>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl hover:border-teal-500/50 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 shadow-lg backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white tracking-tighter">
          SK<span className="text-teal-400">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 absolute w-full px-6 py-4 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-teal-400 font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
    {/* Abstract Background Elements */}
    <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl">
        <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
          <span className="text-teal-400 text-sm font-medium tracking-wide uppercase">Product Manager</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Transforming Manufacturing with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            Data Intelligence.
          </span>
        </h1>
        
        <p className="text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed">
          I build AI-driven products that optimize the shop floor. 
          Specializing in CNC analytics, Industry 4.0, and digital transformation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-slate-900 font-bold rounded-lg transition-all flex items-center justify-center gap-2">
            Get in Touch <ChevronRight size={20} />
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg border border-slate-700 transition-all flex items-center justify-center gap-2">
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>
);

const FeatureProject = () => (
  <section id="work" className="py-24 bg-slate-900">
    <div className="container mx-auto px-6">
      <SectionTitle 
        title="Featured Product" 
        subtitle="My most recent work in AI-assisted manufacturing software."
      />
      
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
        <div className="grid md:grid-cols-2 gap-0">
          
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-teal-500/10 rounded-lg">
                <Cpu className="text-teal-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Lambda Function</h3>
            </div>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              An AI-assisted CNC Machining Software designed to bridge the gap between engineering design and shop-floor execution. As the Product Manager, I led the transformation of raw machine data into actionable operational insights.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Enhanced tool utilization & process visibility",
                "Connected engineering, operations & business goals",
                "SaaS platform for Industry 4.0 transformation"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                  <span className="text-slate-400">{item}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="https://www.lambdafunction.ai/" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium transition-colors"
            >
              Visit Platform <ExternalLink size={16} />
            </a>
          </div>

          {/* Visual Representation */}
          <div className="bg-slate-950 relative p-8 md:p-12 flex items-center justify-center border-l border-slate-800">
            <div className="grid grid-cols-2 gap-4 w-full max-w-md opacity-80">
              <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 aspect-square flex flex-col items-center justify-center text-center gap-3">
                <BarChart3 className="text-blue-400" size={40} />
                <span className="text-slate-300 font-medium">Analytics</span>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 aspect-square flex flex-col items-center justify-center text-center gap-3">
                <Brain className="text-purple-400" size={40} />
                <span className="text-slate-300 font-medium">AI Models</span>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 aspect-square flex flex-col items-center justify-center text-center gap-3">
                <Settings className="text-orange-400" size={40} />
                <span className="text-slate-300 font-medium">CNC Data</span>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 aspect-square flex flex-col items-center justify-center text-center gap-3">
                <Users className="text-teal-400" size={40} />
                <span className="text-slate-300 font-medium">User Centric</span>
              </div>
            </div>
            
            {/* Overlay decoration */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-24 bg-slate-950">
    <div className="container mx-auto px-6">
      <SectionTitle title="Employment Highlights" />
      
      <div className="max-w-4xl mx-auto space-y-8">
        {EXPERIENCE.map((job) => (
          <div key={job.id} className="relative pl-8 md:pl-0">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"></div>
            
            <div className={`md:flex items-start justify-between group ${job.id % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Date & Company (Side A) */}
              <div className={`md:w-1/2 mb-2 md:mb-0 ${job.id % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                <span className="inline-block py-1 px-3 rounded-full bg-slate-900 border border-slate-700 text-teal-400 text-sm font-semibold mb-2">
                  {job.period}
                </span>
                <h4 className="text-xl font-bold text-white">{job.company}</h4>
                <p className="text-slate-500 text-sm">{job.type}</p>
              </div>
              
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-slate-600 rounded-full border-4 border-slate-950 -translate-x-[5px] md:-translate-x-1/2 mt-1.5 group-hover:bg-teal-500 transition-colors z-10"></div>
              
              {/* Role & Details (Side B) */}
              <div className={`md:w-1/2 ${job.id % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <h3 className="text-xl font-bold text-teal-400 mb-2">{job.role}</h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">{job.description}</p>
                {job.achievements.length > 0 && (
                  <ul className="space-y-2">
                    {job.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="text-teal-500 mt-1">›</span> {ach}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-24 bg-slate-900">
    <div className="container mx-auto px-6">
      <SectionTitle title="Technical Proficiency" />
      
      <div className="grid md:grid-cols-3 gap-8">
        
        <Card>
          <div className="flex items-center gap-3 mb-6">
            <PenTool className="text-purple-400" />
            <h3 className="text-xl font-bold text-white">Product & Design</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {SKILLS.product.map(skill => (
              <span key={skill} className="px-3 py-1 bg-purple-500/10 text-purple-300 text-sm rounded border border-purple-500/20">
                {skill}
              </span>
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-6">
            <Database className="text-teal-400" />
            <h3 className="text-xl font-bold text-white">Analytics & Tools</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {SKILLS.technical.map(skill => (
              <span key={skill} className="px-3 py-1 bg-teal-500/10 text-teal-300 text-sm rounded border border-teal-500/20">
                {skill}
              </span>
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-6">
            <Settings className="text-blue-400" />
            <h3 className="text-xl font-bold text-white">Domain Expertise</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {SKILLS.domain.map(skill => (
              <span key={skill} className="px-3 py-1 bg-blue-500/10 text-blue-300 text-sm rounded border border-blue-500/20">
                {skill}
              </span>
            ))}
          </div>
        </Card>

      </div>
    </div>
  </section>
);

const EducationAndCert = () => (
  <section className="py-24 bg-slate-950 border-t border-slate-900">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12">
        
        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-teal-400" size={28} />
            <h3 className="text-2xl font-bold text-white">Certifications</h3>
          </div>
          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-slate-900 rounded-lg border border-slate-800">
                <div className="mt-1 w-2 h-2 bg-teal-500 rounded-full" />
                <div>
                  <h4 className="text-white font-semibold">{cert.title}</h4>
                  <p className="text-slate-500 text-sm">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <FileText className="text-blue-400" size={28} />
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>
          <div className="space-y-6">
            {EDUCATION.map((edu, index) => (
              <div key={index} className="border-l-2 border-slate-800 pl-6 relative">
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-slate-700 rounded-full"></div>
                <h4 className="text-white font-semibold text-lg">{edu.degree}</h4>
                <p className="text-teal-400">{edu.school}</p>
                <div className="flex gap-4 mt-1 text-sm text-slate-500">
                  <span>{edu.year}</span>
                  <span>•</span>
                  <span>{edu.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-slate-900 pt-20 pb-10 border-t border-slate-800">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Let's Connect</h2>
          <p className="text-slate-400 max-w-md">
            Open to opportunities in Product Management, especially within Manufacturing SaaS and AI sectors.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 mt-6 md:mt-0">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors">
            <div className="p-2 bg-slate-800 rounded-lg"><Mail size={20} /></div>
            {PERSONAL_INFO.email}
          </a>
          <div className="flex items-center gap-3 text-slate-300">
            <div className="p-2 bg-slate-800 rounded-lg"><Phone size={20} /></div>
            {PERSONAL_INFO.phone}
          </div>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors">
            <div className="p-2 bg-slate-800 rounded-lg"><Linkedin size={20} /></div>
            LinkedIn Profile
          </a>
        </div>
      </div>
      
      <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-teal-500/30">
      <Navbar />
      <Hero />
      <div id="about" className="py-20 bg-slate-950 container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">About Me</h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            {PERSONAL_INFO.summary}
          </p>
        </div>
      </div>
      <FeatureProject />
      <Skills />
      <Experience />
      <EducationAndCert />
      <Footer />
    </div>
  );
};

export default App;

/*export default function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        Hello, Tailwind is working!
      </h1>
    </div>
  )
}
*/
/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/ 