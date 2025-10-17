import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30">
            <div className="container mx-auto px-[20px] sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-7xl font-bold text-primary leading-tight">
                                Arthur
                                <span className="block text-accent">Piloian</span>
                            </h1>
                            <div className="text-xl lg:text-2xl text-muted-foreground">Senior Software Engineer & Indie Builder</div>
                            <div className="text-lg text-muted-foreground">Los Angeles, CA</div>
                        </div>
                        <div className="text-lg leading-relaxed text-foreground max-w-2xl"></div>
                        <div className="text-lg leading-relaxed text-foreground max-w-2xl space-y-3">
                            <p>Hi, I’m Arthur (Ahvan), a software engineer passionate about AI, Node.js, FastAPI, and modern web development with React.</p>
                            <p>
                                I explore the intersection of creativity and technology, building prototypes and tools that bring new ideas to life across different
                                industries.
                            </p>
                            <p>My work blends curiosity, design, and engineering to turn concepts into real, working experiences.</p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button
                                size="lg"
                                className="bg-gradient-hero hover:shadow-hero transition-all duration-300 hover:scale-105"
                                onClick={() => window.open("mailto:arturioup@gmail.com")}>
                                <Mail className="mr-2 h-5 w-5" />
                                Get In Touch
                            </Button>
                            <a href="/assets/Ahvan(Arthur)PiloianCV.pdf" download>
                                <Button variant="outline" size="lg" className="hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                                    <Download className="mr-2 h-5 w-5" />
                                    Download Resume
                                </Button>
                            </a>
                        </div>

                        <div className="flex gap-4">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                onClick={() => window.open("https://github.com/arturiop")}>
                                <Github className="h-5 w-5" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                                onClick={() => window.open("https://www.linkedin.com/in/artur-piloian")}>
                                <Linkedin className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-2xl opacity-30 scale-105"></div>
                            <img src={"/assets/avatar.jpeg"} alt="Arthur Piloian" className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-hero" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
