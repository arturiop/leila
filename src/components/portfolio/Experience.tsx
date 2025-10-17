import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, Database, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
    {
        title: "Full Stack Engineer",
        company: "Recovery Pipeline",
        location: "Los Angeles, CA",
        date: "Aug 2025 - Sep 2025",
        description:
            "Built a lead generation AI platform designed to identify and qualify potential business leads. Developed and deployed a full-stack system using FastAPI, React, and PostgreSQL, hosted on Fly.io and Neon for scalable performance. Integrated multiple AI providers (OpenAI, Gemini API, Hugging Face, Vertex AI) to process and rank prospects with ML-based scoring. Designed data pipelines and model evaluation flows for continuous accuracy improvement.",
        technologies: [
            "Python",
            "FastAPI",
            "TypeScript",
            "React",
            "PostgreSQL",
            "Fly.io",
            "Neon Tech",
            "Hugging Face",
            "Vertex AI",
            "Gemini API",
            "OpenAI API",
            "ML Engineering"
        ],
        highlights: [
            { icon: Zap, title: "AI-Powered Lead Platform", text: "Developed ML pipelines integrating Gemini, OpenAI, and Hugging Face for intelligent lead scoring" },
            { icon: Database, title: "Scalable Cloud Stack", text: "Deployed backend infrastructure using Fly.io and Neon with PostgreSQL and FastAPI" },
            { icon: TrendingUp, title: "Model Optimization", text: "Implemented model evaluation workflows on Vertex AI to continuously improve prediction quality" },
        ],
        is_active: false,
    },
    {
        title: "Founder",
        company: "Docodoco AI",
        location: "Los Angeles, CA",
        date: "June 2025 - Aug 2025",
        description:
            "Building an AI platform where children's drawings come to life as animated stories. Developed multi-service architecture integrating FastAPI, React, and Vertex AI. Leveraged Gemini Veo for video generation, Suno AI and Mureka for custom music, and Real-ESRGAN for visual enhancement. Designed scalable cloud infrastructure and seamless animation pipeline.",
        technologies: ["FastAPI", "React", "Gemini Veo", "Vertex AI", "Firebase", "Google Cloud", "OpenAI API", "Suno AI", "Mureka", "Real-ESRGAN"],
        highlights: [
            { icon: Zap, title: "AI Story Engine", text: "Created pipeline turning kids’ drawings into animated AI-generated stories" },
            { icon: Database, title: "Multimedia Integration", text: "Integrated Gemini Veo, Suno AI, and Real-ESRGAN for video, audio, and upscaling" },
            { icon: TrendingUp, title: "Cloud Infrastructure", text: "Built scalable Vertex AI + Firebase system with real-time rendering" },
        ],
        is_active: true,
    },
    // Remaining will be hidden by default
    {
        title: "Founder",
        company: "Graviditas Health",
        location: "Los Angeles, CA",
        date: "May 2025 - June 2025",
        description:
            "Developing a voice-based AI agent for healthcare using TypeScript, Node.js, FastAPI, and PostgreSQL. Real-time audio processing pipeline using OpenAI Whisper and Google TTS. Designed modular backend with support for switching between local/cloud providers. Focused on low-latency performance and secure data handling.",
        technologies: ["TypeScript", "Node.js", "FastAPI", "PostgreSQL", "OpenAI Whisper", "Google TTS"],
        highlights: [
            { icon: TrendingUp, title: "Audio Pipeline", text: "Built real-time audio stream pipeline using Whisper and Google TTS" },
            { icon: Database, title: "Modular Backend", text: "Designed flexible backend for switching STT/TTS providers" },
            { icon: Zap, title: "Security", text: "Implemented secure session and data handling in healthcare context" },
        ],
        is_active: false,
    },
    {
        title: "Founding Engineer",
        company: "YT Audio AI Translator",
        location: "San Francisco, CA",
        date: "Jan 2025 - Apr 2025",
        description:
            "Built a Chrome extension for real-time translation of YouTube videos. Streamed audio to a Python backend, processed with Whisper and Google TTS. Returned translated audio in real-time. Developed with TypeScript, HTML/CSS, and Vite.",
        technologies: ["TypeScript", "Vite", "Python", "WebSockets", "Whisper", "Google TTS"],
        highlights: [
            { icon: TrendingUp, title: "Streaming System", text: "Streamed browser audio and returned real-time translations" },
            { icon: Database, title: "Audio Chunking", text: "Optimized processing pipeline for low-latency performance" },
            { icon: Zap, title: "Browser Extension", text: "Built seamless UX using TypeScript and Vite" },
        ],
    },
    {
        title: "Founding Engineer",
        company: "Words Repeater (iOS)",
        location: "Los Angeles, CA",
        date: "Aug 2024 - Nov 2024",
        description:
            "Developed a spaced-repetition vocabulary app using React Native. Offline-first architecture with AsyncStorage. Enabled uploading and creating custom flashcards with text and images.",
        technologies: ["React Native", "AsyncStorage", "JavaScript"],
    },
    {
        title: "Senior Software Engineer | Team Lead",
        company: "Smartico",
        location: "Bulgaria",
        date: "Nov 2022 - Aug 2024",
        description:
            "Led cross-functional team on Referral Platform, BI tools, and APIs. Migrated from Apache Druid to BigQuery. Developed internal NPM package, automated payouts, improved monitoring.",
        technologies: ["React", "Node.js", "PostgreSQL", "BigQuery", "AWS", "TypeScript", "Kafka"],
        highlights: [
            { icon: TrendingUp, title: "Platform Development", text: "Built comprehensive referral platform with tracking and analytics" },
            { icon: Database, title: "BI System", text: "Architected business intelligence solution with PostgreSQL and BigQuery" },
            { icon: Zap, title: "Automation", text: "Automated payout workflows, reducing manual work by 90%" },
        ],
    },
    {
        title: "Full-Stack Developer",
        company: "Five System",
        location: "Ukraine",
        date: "Mar 2022 - Aug 2022",
        description:
            "Built e-commerce/metaverse features using React, Three.js, PostgreSQL. Created REST APIs, optimized caching with Redis, built internal NPM library, improved TTI by 25%.",
        technologies: ["React", "Three.js", "Express", "PostgreSQL", "Redis"],
    },
    {
        title: "Founding Engineer",
        company: "Cafe Food Delivery Bot",
        location: "Ukraine",
        date: "Mar 2022 - Apr 2022",
        description: "Telegram bot for food delivery with real-time notifications. Used Node.js, PostgreSQL, AWS EC2. Built menu management and secure order flow.",
        technologies: ["Node.js", "PostgreSQL", "Telegram Bot API", "AWS EC2"],
    },
    {
        title: "Back-End Developer",
        company: "Codica",
        location: "Ukraine",
        date: "Nov 2021 - Feb 2022",
        description: "Added features to a long-term product. Used Node.js, PostgreSQL, MongoDB, Redis. Integrated third-party services and improved backend efficiency.",
        technologies: ["Node.js", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
        title: "Web Developer",
        company: "Artjoker",
        location: "Ukraine",
        date: "Mar 2020 - Nov 2021",
        description: "Worked on an HR-tech job platform and fintech product using React and Material-UI. Implemented Redux, focused on UI/UX and accessibility.",
        technologies: ["React", "Redux", "Material-UI"],
    },
    {
        title: "Web Developer",
        company: "WAF Agency",
        location: "Ukraine",
        date: "Feb 2019 - Mar 2020",
        description: "Built CRM system UI with React and Redux. Used RESTful APIs, collaborated with designers, and worked on backend with Express and MongoDB.",
        technologies: ["React", "Redux", "Express", "MongoDB"],
    },
];

export function Experience() {
    const [showAll, setShowAll] = useState(false);
    const visibleExperiences = showAll ? experiences : experiences.slice(0, 2);

    return (
        <section className="py-20 bg-card">
            <div className="container mx-auto px-[20px] sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Experience</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Leading engineering teams and building scalable platforms that drive business growth
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-10">
                    {visibleExperiences.map((exp, idx) => (
                        <Card
                            key={exp.title + exp.company}
                            className={cn(
                                "border-0 shadow-card transition-colors duration-300",
                                idx % 2 === 0
                                    ? "bg-gradient-to-br from-card/90 to-card" // even row
                                    : "bg-gradient-to-br from-primary/5 to-card/90" // odd row
                            )}>
                            <CardHeader className="pb-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-gradient-accent p-3 rounded-xl">
                                        <Building2 className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className="text-2xl text-primary mb-1">{exp.title}</CardTitle>
                                        <CardDescription className="text-lg text-accent font-medium">{exp.company}</CardDescription>
                                        <div className="text-muted-foreground">
                                            {exp.location} — {exp.date}
                                        </div>
                                    </div>
                                    {exp.is_active && (
                                        <Badge variant="outline" className="border-accent text-accent">
                                            Current
                                        </Badge>
                                    )}
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <p className="text-lg text-foreground leading-relaxed">{exp.description}</p>

                                {exp.highlights && (
                                    <div className="grid md:grid-cols-3 gap-6 pt-2">
                                        {exp.highlights.map((item, idx) => (
                                            <div key={idx} className="space-y-3">
                                                <div className="flex items-center gap-2">
                                                    <item.icon className="h-5 w-5 text-accent" />
                                                    <h4 className="font-semibold text-primary">{item.title}</h4>
                                                </div>
                                                <p className="text-sm text-muted-foreground">{item.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="pt-4 border-t border-border">
                                    <h4 className="font-semibold text-primary mb-2">Key Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech) => (
                                            <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}

                    {!showAll && (
                        <div className="text-center">
                            <Button onClick={() => setShowAll(true)} variant="outline">
                                Show More
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
