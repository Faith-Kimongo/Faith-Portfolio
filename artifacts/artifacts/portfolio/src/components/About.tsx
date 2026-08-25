import { motion } from 'framer-motion';

const SKILLS = [
  'Python', 'Flask', 'JavaScript', 'TypeScript', 'Vue.js', 'React',
  'PHP', 'Laravel', 'SQL', 'SQLite', 'TailwindCSS', 'HTMX',
  'ECharts', 'Upset.js', 'Docker', 'GitHub Actions', 'pytest', 'Alpine.js'
];

const TIMELINE = [
  {
    year: 'Jan 2024 — Present',
    role: 'Senior Software Engineer',
    company: 'WITS Health Consortium',
    desc: 'Developing interactive healthcare dashboards using Upset.js, ECharts, and Flask for real-time analysis of complex medical datasets. Automated CI/CD pipelines with GitHub Actions and achieved 95% test coverage with pytest.'
  },
  {
    year: 'Oct 2021 — Aug 2023',
    role: 'Lead Frontend / Software Engineer',
    company: 'Tribus TSG LTD',
    desc: 'Built a full-stack order tracking and job portal platform with Laravel, Vue.js, and TailwindCSS. Reduced customer support queries by 35% and improved project delivery time by 15%.'
  },
  {
    year: 'Aug 2020 — Feb 2021',
    role: 'Blockchain Researcher',
    company: 'Seysoo SARL',
    desc: 'Researched blockchain integration for financial microservices, analysing cost, security, and scalability trade-offs. Identified emerging use cases and contributed to the research literature.'
  }
];

export function About() {
  return (
    <section id="about" className="py-32 relative border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight">01. Background</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Bio & Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-6 text-muted-foreground font-sans text-lg leading-relaxed font-light">
              <p>
                I'm a Senior Software Engineer based in Johannesburg, South Africa, with five years of experience designing data-driven applications across healthcare, logistics, and research. My background bridges an MSc in Mathematical Science and hands-on production engineering — which means I think rigorously and ship pragmatically.
              </p>
              <p>
                At WITS Health Consortium I build interactive dashboards that help medical professionals make sense of complex, multi-dimensional clinical datasets. I care deeply about performance, test coverage, and the craft of turning raw data into something a domain expert can actually act on.
              </p>
              <p>
                Beyond the day job I mentor engineers through ALX Software Engineering and AI Ghana, contribute to healthcare data research, and hold an AWS Cloud Practitioner certification. I believe the best engineers make their teammates faster — not just their code.
              </p>
            </div>

            <div className="pt-8 border-t border-border/50">
              <h3 className="font-mono text-sm uppercase tracking-widest mb-6">Technical Arsenal</h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.map((skill, i) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 border border-border text-sm font-mono hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative border-l border-border pl-8 space-y-12">
              {TIMELINE.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[37px] top-1 h-2 w-2 bg-accent rounded-none" />
                  <div className="font-mono text-xs text-accent mb-2 tracking-widest">{item.year}</div>
                  <h4 className="text-xl font-serif mb-1">{item.role}</h4>
                  <div className="text-sm font-mono text-muted-foreground mb-3">{item.company}</div>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
