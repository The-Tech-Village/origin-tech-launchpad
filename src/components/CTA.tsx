
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Ready to Build Your Next App?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your project and create something amazing together.
          </p>
          <Button className="bg-gradient-to-r from-blue-400 to-purple-400 hover:opacity-90 transition-opacity text-lg px-8 py-6 group">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
