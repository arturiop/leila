import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { TechBadge } from "@/components/ui/tech-badge";

const projects = [
    {
        title: "Docodoco AI",
        description: `Where every child's drawing and imagination come to life as animated adventures. Kids become the heroes of their own personalized, AI-powered stories.`,
        image: "/assets/do.png",
        technologies: ["FastAPI", "Web", "Vertex.ai", "GCP", "OpenAI API", "Mureka", "Real-ESRGAN", "HuggingFace"],
        highlights: ["AI-Powered Story Generation", "Voice & Animation Sync", "Child-Friendly Design"],
        link: "https://docodoco.vercel.app/",
    },
    {
        title: "Graviditas Health AI",
        description: "Voice AI agent for healthcare using advanced speech recognition and natural language processing to assist medical professionals.",
        image: "/assets/gh.png",
        technologies: ["React", "FastAPI", "PostgreSQL", "Whisper", "TTS", "Twillo API", "JS/TS/Python"],
        highlights: ["Voice AI Integration", "Healthcare Compliance", "Real-time Processing"],
        link: "https://graviditashealth.vercel.app/",
    },
    {
        title: "YT Audio Translator",
        description: "Chrome extension providing real-time YouTube audio translation with seamless WebSocket communication and multilingual support.",
        image: "assets/yt.png",
        technologies: ["JavaScript", "WebSockets", "Python", "Chrome APIs", "Whisper", "TTS"],
        highlights: ["Real-time Translation", "Browser Extension", "WebSocket Architecture"],
    },
    {
        title: "Words Repeater (iOS)",
        description: "Vocabulary learning app with spaced repetition algorithms, built with React Native for optimal learning retention.",
        image: "/assets/wr.png",
        technologies: ["React Native", "AsyncStorage", "TypeScript"],
        highlights: ["Spaced Repetition", "Mobile App", "Learning Algorithm"],
    },
];

const ProjectCard = ({ title, image, description, technologies = [], highlights = [], link = "" }) => {
    return (
        <Card
            key={title}
            className="flex flex-col group hover:shadow-card w-[400px] min-h-[520px] h-[600px] transition-all duration-300 hover:scale-105 overflow-hidden border-0 shadow-sm bg-gradient-card">
            <div className="relative overflow-hidden flex justify-center items-center">
                <img src={image} alt={title} className="object-cover h-48 transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <CardHeader>
                <CardTitle className="text-primary text-xl">{title}</CardTitle>
                <CardDescription className="text-muted-foreground">{description}</CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col justify-between flex-1 space-y-4 mt-auto">
                <div>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <TechBadge key={tech} name={tech} variant="outline" className="text-xs py-1 px-2" />
                        ))}
                    </div>

                    <div className="space-y-1 mt-2.5">
                        {highlights.map((highlight) => (
                            <div key={highlight} className="text-sm text-accent font-medium">
                                • {highlight}
                            </div>
                        ))}
                    </div>
                </div>

                {link && (
                    <div className="flex gap-2 mt-auto">
                        <Button variant="outline" size="sm" className="flex-1" onClick={() => window.open(link)}>
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => window.open("https://github.com/arturiop")}>
                            <Github className="h-4 w-4" />
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export function Projects() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-20 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Featured Projects</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        A showcase of innovative solutions spanning AI integration, real-time systems, and mobile development
                    </p>
                </div>
                {/* <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent -mx-6 px-6">
                    {projects.map((project) => (
                        <div key={project.title} className="snap-start">
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div> */}

                <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide">
                    {projects.map((project) => (
                        <div key={project.title} className="snap-start">
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>

                <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide">
                    {[].map((project) => (
                        <Card
                            key={project.title}
                            className="flex-shrink-0 snap-center w-[350px] h-[500px] rounded-2xl border border-border shadow-md 
                         hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-card/80 to-card">
                            {/* Image */}
                            <div className="relative h-40 overflow-hidden rounded-t-2xl">
                                <img src={project.image} alt={project.title} className="object-cover w-full h-full transition-transform duration-500 hover:scale-110" />
                            </div>

                            <CardHeader className="px-5 py-4">
                                <CardTitle className="text-lg font-semibold text-primary mb-1">{project.title}</CardTitle>
                                <CardDescription className="text-sm text-muted-foreground">{project.description}</CardDescription>
                            </CardHeader>

                            <CardContent className="flex flex-col justify-between px-5 pb-5 h-[calc(500px-200px)]">
                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <TechBadge key={tech} name={tech} variant="outline" className="text-xs py-1 px-2" />
                                    ))}
                                </div>

                                {/* Highlights */}
                                <div className="mt-3 space-y-1">
                                    {project.highlights.map((highlight) => (
                                        <p key={highlight} className="text-sm text-accent font-medium">
                                            • {highlight}
                                        </p>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-2 pt-4">
                                    <Button variant="outline" size="sm" className="flex-1">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        View
                                    </Button>
                                    <Button variant="ghost" size="sm" onClick={() => window.open("https://github.com/arturiop")}>
                                        <Github className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
