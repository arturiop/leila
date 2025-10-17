import { Headphones, MessageCircle, Sprout } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Headphones,
      label: "listens",
      description: "Truly hears what matters"
    },
    {
      icon: MessageCircle,
      label: "understands",
      description: "Gets the context"
    },
    {
      icon: Sprout,
      label: "helps you grow",
      description: "Supports your journey"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="glass rounded-3xl p-12 animate-fade-in">
          <p className="text-xl md:text-2xl text-center leading-relaxed mb-12 text-foreground">
            Leila isn't HR automation. She's the warm voice that helps your people feel{" "}
            <span className="text-primary font-semibold">connected</span>,{" "}
            <span className="text-secondary font-semibold">confident</span>, and{" "}
            <span className="text-accent font-semibold">cared for</span> — inside your company.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <div 
                key={feature.label}
                className="flex flex-col items-center text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth group-hover:bg-primary/20">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.label}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
