import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

export function ProjectCard({ title, description, imageUrl, tags, liveUrl, githubUrl, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col border border-border bg-card overflow-hidden hover:border-accent/50 transition-colors"
    >
      {/* Image Area */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-muted to-background flex items-center justify-center p-6 text-center">
            <span className="font-serif text-2xl text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity">
              {title}
            </span>
          </div>
        )}
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-foreground text-background hover:bg-accent hover:text-foreground transition-colors"
               aria-label="View Live">
              <ExternalLink size={20} />
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer"
               className="p-3 border border-border bg-background/50 hover:bg-foreground hover:text-background transition-colors"
               aria-label="View Source">
              <Github size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-serif mb-3 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-muted-foreground font-light text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span key={tag} className="text-xs font-mono text-muted-foreground bg-muted/50 px-2 py-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
