
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
  {
    id: "social-network",
    title: "Social Network Platform",
    description: "Community platform with real-time messaging and content sharing.",
    image: "https://placehold.co/600x400/1a1f2c/ffffff?text=Social",
    tech: ["React", "Firebase", "Node.js"],
  },
  {
    id: "ai-assistant",
    title: "AI Customer Assistant",
    description: "Intelligent chatbot system for customer support automation.",
    image: "https://placehold.co/600x400/1a1f2c/ffffff?text=AI+Assistant",
    tech: ["Python", "TensorFlow", "React"],
  },
  {
    id: "logistics-management",
    title: "Logistics Management System",
    description: "End-to-end supply chain and logistics tracking platform.",
    image: "https://placehold.co/600x400/1a1f2c/ffffff?text=Logistics",
    tech: ["React", "Java", "PostgreSQL"],
  },
];

interface PortfolioProjectsProps {
  limit?: number;
}

const PortfolioProjects = ({ limit }: PortfolioProjectsProps) => {
  // Use all projects or limit them if specified
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayedProjects.map((project, index) => (
        <Card 
          key={project.id} 
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
  );
};

export default PortfolioProjects;
