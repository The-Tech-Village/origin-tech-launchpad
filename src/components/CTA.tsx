
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Next App?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your project and create something amazing together.
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-opacity text-lg px-8 py-6">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
