import { TechBadge } from "@/components/ui/tech-badge";

const technologies = [
    { name: "JavaScript", variant: "default" as const },
    { name: "TypeScript", variant: "accent" as const },
    { name: "Python", variant: "default" as const },
    { name: "React", variant: "accent" as const },
    { name: "Node.js", variant: "default" as const },
    { name: "HTML", variant: "accent" as const },
    { name: "CSS", variant: "default" as const },
    { name: "Tailwind", variant: "accent" as const },
    { name: "FastAPI", variant: "default" as const },
    { name: "PostgreSQL", variant: "accent" as const },
    { name: "BigQuery", variant: "default" as const },
    { name: "Kafka", variant: "accent" as const },
    { name: "Redis", variant: "default" as const },
    { name: "Docker", variant: "accent" as const },
    { name: "AWS", variant: "default" as const },
    { name: "Git", variant: "accent" as const },
    { name: "Webpack", variant: "default" as const },
    { name: "Jest", variant: "accent" as const },
    { name: "RESTful APIs", variant: "default" as const },
    { name: "CI/CD", variant: "accent" as const },
    { name: "Agile", variant: "default" as const },
    { name: "Microservices", variant: "accent" as const },
    { name: "SQL", variant: "default" as const },
    { name: "Sentry", variant: "accent" as const },
    { name: "Graylog", variant: "default" as const },
    { name: "WebRTC", variant: "accent" as const },
    { name: "RabbitMQ", variant: "default" as const },
    { name: "Material UI", variant: "accent" as const },
    { name: "S3", variant: "default" as const },
    { name: "EC2", variant: "accent" as const },
    { name: "Redux", variant: "default" as const },
    { name: "Zustand", variant: "accent" as const },
    { name: "React Query", variant: "default" as const },
    { name: "Webhooks", variant: "accent" as const },
    { name: "React Hook Form", variant: "default" as const },
    { name: "PyTorch", variant: "accent" as const },
    { name: "NumPy", variant: "default" as const },
    { name: "Chrome Extensions", variant: "accent" as const },
    { name: "Vertex AI", variant: "default" as const },
  ];

export function TechStack() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-[20px] sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies I use to build scalable, performant, and innovative solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <TechBadge
              key={tech.name}
              name={tech.name}
              variant={tech.variant}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}