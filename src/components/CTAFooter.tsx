import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface CTAFooterProps {
  onOpenDemo: () => void;
}

export const CTAFooter = ({ onOpenDemo }: CTAFooterProps) => {
  return (
    <footer className="py-24 px-4 gradient-subtle relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Bring Leila to your team.
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Your voice matters — let Leila help it be heard.
        </p>

        <Button 
          size="lg" 
          variant="default"
          onClick={onOpenDemo}
          className="group shadow-2xl hover:shadow-xl"
        >
          Get Early Access
          <Heart className="ml-2 h-5 w-5 group-hover:fill-current transition-all" />
        </Button>

        {/* Footer text */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            © 2025 Leila.ai — Helping teams feel connected, one voice at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};