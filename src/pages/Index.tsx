
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Features />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
