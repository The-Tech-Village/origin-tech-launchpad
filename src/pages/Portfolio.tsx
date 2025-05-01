
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioProjects from "@/components/PortfolioProjects";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24">
        <section className="py-12 md:py-20 bg-background/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Our Portfolio</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover how we've helped businesses achieve digital transformation with innovative solutions
              </p>
            </div>
            
            <PortfolioProjects />
            
            <div className="mt-16 text-center">
              <Button 
                asChild
                className="bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 text-white hover:opacity-90 transition-opacity shadow-lg shadow-orange-500/20"
              >
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
