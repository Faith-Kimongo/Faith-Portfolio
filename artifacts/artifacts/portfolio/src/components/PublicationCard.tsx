import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';

interface PublicationCardProps {
  title: string;
  journal: string;
  year: string;
  authors: string;
  abstract: string;
  url?: string;
  index: number;
}

export function PublicationCard({ title, journal, year, authors, abstract, url, index }: PublicationCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col md:flex-row gap-6 p-6 md:p-8 border border-border bg-card hover:bg-muted/10 transition-colors"
    >
      <div className="md:w-32 flex-shrink-0 pt-1">
        <div className="font-mono text-accent text-sm mb-2">{year}</div>
        <div className="inline-flex p-2 bg-muted/50 text-muted-foreground group-hover:text-foreground transition-colors">
          <FileText size={20} />
        </div>
      </div>
      
      <div className="flex-grow">
        <h3 className="text-xl font-serif mb-2 leading-tight group-hover:text-accent transition-colors">
          {title}
        </h3>
        <div className="text-sm font-mono text-muted-foreground mb-4">
          <span className="text-foreground">{journal}</span> • {authors}
        </div>
        <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6 max-w-3xl">
          {abstract}
        </p>
        
        {url && (
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-foreground hover:text-accent transition-colors"
          >
            Read Paper <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.article>
  );
}
