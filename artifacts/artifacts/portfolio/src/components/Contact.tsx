import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 relative border-t border-border bg-card/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-mono text-accent text-sm mb-6 uppercase tracking-widest">
              04. What's Next?
            </div>
            <h2 className="text-5xl md:text-7xl font-serif mb-8 tracking-tight">
              Let's build something <span className="text-muted-foreground">meaningful.</span>
            </h2>
            <p className="text-muted-foreground font-light text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              I'm currently open for new opportunities. Whether you have a question, 
              a project in mind, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <a
              href="mailto:faithvictor78@gmail.com"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-foreground text-background font-mono uppercase tracking-widest hover:bg-accent hover:text-foreground transition-colors group mb-20"
            >
              Say Hello
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex justify-center gap-8 border-t border-border pt-12">
              <a href="https://github.com/Faith-Kimongo/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all">
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/faith-kimongo/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:faithvictor78@gmail.com" className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all">
                <Mail size={24} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
