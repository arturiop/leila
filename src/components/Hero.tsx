import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero = ({ onOpenDemo }: HeroProps) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient with image overlay */}
      <div className="absolute inset-0 gradient-hero">
        <img 
          src={'./assets/hero.png'} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
      </div>
      
      {/* Animated floating waves */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 opacity-40">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-2 bg-primary rounded-full animate-wave"
            style={{
              height: `${40 + i * 10}px`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Meet Leila — your voice inside the company.
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-2xl mx-auto">
          An AI voice coach that listens, supports, and helps your team grow.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="hero"
            onClick={onOpenDemo}
            className="group"
          >
            Talk to Leila
            <span className="ml-2 group-hover:scale-110 inline-block transition-transform">🎙️</span>
          </Button>
          
          <Button 
            size="lg" 
            variant="glass"
            onClick={scrollToAbout}
          >
            Learn More
            <ArrowDown className="ml-2 h-4 w-4 animate-pulse-soft" />
          </Button>
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
