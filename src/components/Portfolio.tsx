
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with real-time inventory management.",
    image: "https://placehold.co/600x400/1a1f2c/ffffff?text=E-Commerce",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "healthcare-app",
    title: "Healthcare App",
    description: "Patient management system with integrated telemedicine features.",
    image: "https://placehold.co/600x400/1a1f2c/ffffff?text=Healthcare",
    tech: ["React Native", "Express", "PostgreSQL"],
  },
  {
    id: "financial-dashboard",
    title: "Financial Dashboard",
    description: "Real-time financial data visualization and analysis platform.",
    image: "https://placehold.co/600x400/1a1f2c/ffffff?text=Finance",
    tech: ["React", "Python", "AWS"],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Our Excellence Portfolio</h2>
          <p className="text-xl text-muted-foreground">
            Discover how we've helped businesses achieve digital transformation
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:scale-105 transition-transform duration-300 bg-card/50 backdrop-blur-sm border-orange-500/10 hover:border-orange-500/30"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-orange-500/10 text-orange-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full group border-orange-500/30 hover:bg-orange-500/10"
                  asChild
                >
                  <Link to={`/project/${project.id}`}>
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
