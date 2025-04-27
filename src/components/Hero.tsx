
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import HeroIllustration from "./HeroIllustration";

const Hero = () => {
  const handleLearnMoreClick = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartProjectClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-black">
      <ParticlesBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-orange-950/20" />
      
      {/* Tech-inspired animated background */}
      <div className="absolute inset-0 opacity-30">
        <HeroIllustration />
      </div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-orange-100 to-yellow-200 bg-clip-text text-transparent tracking-tight">
              Crafting Digital Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 animate-fade-in [animation-delay:200ms] leading-relaxed max-w-2xl mx-auto">
              We transform visionary ideas into groundbreaking solutions. 
              Your success is our code.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in [animation-delay:400ms]">
              <Button 
                onClick={handleStartProjectClick}
                className="bg-white hover:bg-orange-50 text-black hover:text-black/90 text-lg px-8 py-6 rounded-md group shadow-lg shadow-white/10 transition-all duration-300 hover:scale-105">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="text-lg px-8 py-6 border-white/20 text-white hover:bg-white/10 rounded-md transition-all duration-300 hover:scale-105"
                onClick={handleLearnMoreClick}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowRight className="h-6 w-6 text-white/50 rotate-90" />
      </div>
    </div>
  );
};

export default Hero;
