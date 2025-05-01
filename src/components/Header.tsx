
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    // If we're on the home page, scroll to the section
    if (window.location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home and then scroll to the section
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-orange-500/10 dark:border-orange-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gradient">
              Origin Tech
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-muted-foreground hover:text-orange-400 transition-colors">Services</Link>
            <Link to="/portfolio" className="text-muted-foreground hover:text-orange-400 transition-colors">Portfolio</Link>
            <Link to="/about" className="text-muted-foreground hover:text-orange-400 transition-colors">About</Link>
            <Link to="/careers" className="text-muted-foreground hover:text-orange-400 transition-colors">Careers</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-orange-400 transition-colors">Contact</Link>
            <ThemeToggle />
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 text-white hover:opacity-90 transition-opacity shadow-lg shadow-orange-500/20">
              Get Started
            </Button>
          </nav>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 animate-fade-in">
            <Link to="/services" className="block text-muted-foreground hover:text-orange-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/portfolio" className="block text-muted-foreground hover:text-orange-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
            <Link to="/about" className="block text-muted-foreground hover:text-orange-400 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/careers" className="block text-muted-foreground hover:text-orange-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Careers</Link>
            <Link to="/contact" className="block text-muted-foreground hover:text-orange-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
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
