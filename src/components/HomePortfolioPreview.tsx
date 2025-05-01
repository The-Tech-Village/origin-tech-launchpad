
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PortfolioProjects from "./PortfolioProjects";

const HomePortfolioPreview = () => {
  return (
    <section id="portfolio" className="py-20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped businesses achieve digital transformation
          </p>
        </div>
        
        {/* Display only 3 projects on the homepage */}
        <PortfolioProjects limit={3} />
        
        <div className="mt-12 text-center">
          <Button 
            asChild
            className="bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 text-white hover:opacity-90 transition-opacity shadow-lg shadow-orange-500/20"
          >
            <Link to="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomePortfolioPreview;
