
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Origin Tech
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            <Button className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-white hover:opacity-90 transition-opacity">
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
            <a href="#features" className="block text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#portfolio" className="block text-muted-foreground hover:text-foreground transition-colors">Portfolio</a>
            <a href="#testimonials" className="block text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
            <a href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            <Button className="w-full bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-white hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
