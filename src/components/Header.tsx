
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Origin Tech
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <a href="#features" className="block text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#testimonials" className="block text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
            <a href="#contact" className="block text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
