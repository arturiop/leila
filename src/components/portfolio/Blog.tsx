import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";

const blogPosts = [
  {
    title: "Building Scalable AI Systems with FastAPI and PostgreSQL",
    excerpt: "Learn how to architect robust AI-powered applications that can handle real-world production loads with proper database design and API optimization.",
    date: "2024-06-15",
    readTime: "8 min read",
    tags: ["AI", "FastAPI", "PostgreSQL", "Architecture"]
  },
  {
    title: "WebSocket Architecture for Real-time Applications",
    excerpt: "Deep dive into designing and implementing WebSocket-based systems for real-time communication in modern web applications.",
    date: "2024-05-22",
    readTime: "12 min read",
    tags: ["WebSockets", "Real-time", "Node.js", "Architecture"]
  },
  {
    title: "Leading Engineering Teams: Lessons from the Trenches",
    excerpt: "Insights on technical leadership, team mentoring, and building engineering culture in fast-growing startups.",
    date: "2024-04-10",
    readTime: "6 min read",
    tags: ["Leadership", "Management", "Culture", "Career"]
  }
];

export function Blog() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-[20px] sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Latest Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Thoughts on software engineering, leadership, and technology trends
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.title} 
              className="group hover:shadow-card transition-all duration-300 hover:scale-105 border-0 shadow-sm bg-gradient-card"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                  <span>•</span>
                  <BookOpen className="h-4 w-4" />
                  {post.readTime}
                </div>
                <CardTitle className="text-primary text-xl leading-tight group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="text-xs bg-primary/10 text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Read More Button */}
                <Button 
                  variant="ghost" 
                  className="w-full justify-between p-0 h-auto text-accent hover:text-accent-foreground hover:bg-accent/10"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            View All Posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}