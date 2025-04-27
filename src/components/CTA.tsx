
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const CTA = () => {
  const handleCTAClick = () => {
    toast.success("Your project request has been received!", {
      description: "We'll contact you shortly to discuss your project.",
      duration: 5000,
    });
  };

  return (
    <section id="contact" className="py-20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Ready to Transform Your Vision?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create something extraordinary together. Our expertise meets your ambition.
          </p>
          <Button 
            onClick={handleCTAClick}
            className="bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 hover:opacity-90 transition-opacity text-lg px-8 py-6 group shadow-lg shadow-orange-500/20">
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
