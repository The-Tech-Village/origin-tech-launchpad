
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-orange-500/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gradient">
              Origin Tech
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a onClick={() => scrollToSection('features')} className="text-muted-foreground hover:text-orange-400 transition-colors cursor-pointer">Features</a>
            <a onClick={() => scrollToSection('portfolio')} className="text-muted-foreground hover:text-orange-400 transition-colors cursor-pointer">Portfolio</a>
            <a onClick={() => scrollToSection('testimonials')} className="text-muted-foreground hover:text-orange-400 transition-colors cursor-pointer">Testimonials</a>
            <a onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-orange-400 transition-colors cursor-pointer">Contact</a>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 text-white hover:opacity-90 transition-opacity shadow-lg shadow-orange-500/20">
              Get Started
            </Button>
          </nav>

          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 animate-fade-in">
            <a onClick={() => scrollToSection('features')} className="block text-muted-foreground hover:text-orange-400 transition-colors cursor-pointer">Features</a>
            <a onClick={() => scrollToSection('portfolio')} className="block text-muted-foreground hover:text-orange-400 transition-colors cursor-pointer">Portfolio</a>
            <a onClick={() => scrollToSection('testimonials')} className="block text-muted-foreground hover:text-orange-400 transition-colors cursor-pointer">Testimonials</a>
            <a onClick={() => scrollToSection('contact')} className="block text-muted-foreground hover:text-orange-400 transition-colors cursor-pointer">Contact</a>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 text-white hover:opacity-90 transition-opacity shadow-lg shadow-orange-500/20">
              Get Started
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
