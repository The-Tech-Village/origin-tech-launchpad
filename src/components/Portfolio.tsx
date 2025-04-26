
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with real-time inventory management.",
    image: "https://placehold.co/600x400/1a1f2c/ffffff?text=E-Commerce",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Healthcare App",
    description: "Patient management system with integrated telemedicine features.",
    image: "https://placehold.co/600x400/1a1f2c/ffffff?text=Healthcare",
    tech: ["React Native", "Express", "PostgreSQL"],
  },
  {
    title: "Financial Dashboard",
    description: "Real-time financial data visualization and analysis platform.",
    image: "https://placehold.co/600x400/1a1f2c/ffffff?text=Finance",
    tech: ["React", "Python", "AWS"],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground">
            Explore some of our recent successful projects
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:scale-105 transition-transform duration-300 bg-card border border-border"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="w-full group">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
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
