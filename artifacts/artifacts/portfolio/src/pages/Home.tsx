import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Publications } from '@/components/Publications';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Publications />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
