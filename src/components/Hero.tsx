
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const handleLearnMoreClick = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-orange-950/10 -z-10" />
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-fade-in">
            Elevating Business Through Innovation
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in [animation-delay:200ms]">
            We are more than developers – we are your strategic partners in digital excellence. 
            Creating solutions that drive success and exceed expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:400ms]">
            <Button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 hover:opacity-90 transition-opacity text-lg px-8 py-6 group shadow-lg shadow-orange-500/20">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="text-lg px-8 py-6 border-orange-500/30 hover:bg-orange-500/10"
              onClick={handleLearnMoreClick}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
