import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

export function Hero() {
  return (
    <section id="top" className="min-h-[100dvh] flex flex-col justify-center relative pt-20">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 mb-6 text-accent font-mono text-sm uppercase tracking-widest"
          >
            <Terminal size={16} />
            <span>Senior Software Engineer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] tracking-tight mb-8"
          >
            Faith Kimongo <br className="hidden md:block" />
            <span className="text-muted-foreground">turns data into impact.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 font-sans font-light leading-relaxed"
          >
            Full-stack engineer with five years of experience designing data-driven applications 
            across healthcare, logistics, and research. I build scalable systems that transform 
            complex datasets into actionable insights — from interactive dashboards to production APIs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-mono text-sm uppercase tracking-widest hover:bg-accent hover:text-foreground transition-colors group"
            >
              View Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border bg-transparent text-foreground font-mono text-sm uppercase tracking-widest hover:border-foreground transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative background grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
      </div>
    </section>
  );
}
