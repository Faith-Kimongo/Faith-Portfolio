import { motion } from 'framer-motion';
import { PublicationCard } from './PublicationCard';

const PAPERS = [
  {
    title: 'Leveraging data science to understand and address multimorbidity in sub-Saharan Africa: the MADIVA protocol',
    journal: 'MADIVA Research Publication',
    year: '2024',
    authors: 'Faith Kimongo et al.',
    abstract: 'This paper presents the MADIVA protocol — a data science framework for understanding and addressing multimorbidity in sub-Saharan Africa. It outlines the methodological approach for leveraging large-scale clinical datasets to derive insights into co-occurring chronic conditions across diverse patient populations.',
    url: '#' // Add the DOI or paper URL here
  },
  {
    title: 'Balancing protection of participants and other stakeholders with openness: African lessons from the MADIVA data sharing and access policy',
    journal: 'MADIVA Research Publication',
    year: '2024',
    authors: 'Faith Kimongo et al.',
    abstract: 'An examination of data-sharing frameworks within the African research context, exploring how the MADIVA project navigated the tension between participant protection, stakeholder interests, and the imperative for open science. Draws on practical lessons from implementing a robust data access policy.',
    url: '#' // Add the DOI or paper URL here
  }
];

export function Publications() {
  return (
    <section id="publications" className="py-32 relative border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight mb-4">03. Publications</h2>
          <p className="text-muted-foreground font-mono text-sm max-w-lg">
            Academic research and deep-dive technical articles.
          </p>
        </motion.div>

        <div className="space-y-6">
          {PAPERS.map((paper, idx) => (
            <PublicationCard key={idx} index={idx} {...paper} />
          ))}
        </div>
      </div>
    </section>
  );
}
