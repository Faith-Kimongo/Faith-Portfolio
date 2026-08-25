import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

const PROJECTS = [
  {
    title: 'Healthcare Analytics Dashboard',
    description: 'Interactive multi-dimensional dashboards for WITS Health Consortium enabling real-time clinical data analysis. Features Upset.js set visualisations and ECharts charts for medical professionals working with complex patient datasets.',
    imageUrl: '', // Add your project screenshot URL here
    tags: ['Python', 'Flask', 'ECharts', 'Upset.js', 'HTMX', 'Docker'],
    liveUrl: '#', // Add your live project URL here
    githubUrl: '#' // Add your GitHub repo URL here
  },
  {
    title: 'Order Tracking & Job Portal',
    description: 'Full-stack platform built for Kenya enabling end-to-end delivery tracking and centralised job listings. Reduced customer support queries by 35% and boosted platform engagement by 30% post-launch.',
    imageUrl: '', // Add your project screenshot URL here
    tags: ['Laravel', 'Vue.js', 'TailwindCSS', 'PHP', 'MySQL'],
    liveUrl: '#', // Add your live project URL here
    githubUrl: '#' // Add your GitHub repo URL here
  },
  {
    title: 'CI/CD Test Infrastructure',
    description: 'Automated testing and deployment pipeline for healthcare backend APIs. Achieved 95% test coverage with pytest and SQLite-based isolated test databases, integrated into GitHub Actions for continuous delivery.',
    imageUrl: '', // Add your project screenshot URL here
    tags: ['GitHub Actions', 'pytest', 'SQLite', 'Docker', 'Python'],
    liveUrl: '#', // Add your live project URL here
    githubUrl: '#' // Add your GitHub repo URL here
  },
  {
    title: 'Blockchain Microservices Research',
    description: 'Research-driven analysis of blockchain integration patterns for financial microservices, evaluating cost, security, and scalability trade-offs. Identified emerging use cases and contributed to industry knowledge.',
    imageUrl: '', // Add your project screenshot URL here
    tags: ['Blockchain', 'Microservices', 'Research', 'Financial Tech'],
    liveUrl: '#', // Add your live project URL here
    githubUrl: '#' // Add your GitHub repo URL here
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight mb-4">02. Selected Works</h2>
            <p className="text-muted-foreground font-mono text-sm max-w-lg">
              A collection of open-source tools, side projects, and architectural experiments.
            </p>
          </div>
          <a href="#" className="inline-flex text-sm font-mono hover:text-accent transition-colors items-center gap-2">
            View all on GitHub <span className="text-accent">→</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} index={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
