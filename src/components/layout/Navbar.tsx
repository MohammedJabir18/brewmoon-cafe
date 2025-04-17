
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "../ui/ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto py-4 px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-coffee dark:text-cream">
              Brew<span className="text-terracotta">moon</span>
            </h1>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className="font-montserrat text-charcoal dark:text-cream hover:text-terracotta dark:hover:text-terracotta transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/menu" 
                className="font-montserrat text-charcoal dark:text-cream hover:text-terracotta dark:hover:text-terracotta transition-colors"
              >
                Menu
              </Link>
              <Link 
                to="/about" 
                className="font-montserrat text-charcoal dark:text-cream hover:text-terracotta dark:hover:text-terracotta transition-colors"
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="font-montserrat text-charcoal dark:text-cream hover:text-terracotta dark:hover:text-terracotta transition-colors"
              >
                Services
              </Link>
              <Link 
                to="/gallery" 
                className="font-montserrat text-charcoal dark:text-cream hover:text-terracotta dark:hover:text-terracotta transition-colors"
              >
                Gallery
              </Link>
              <Link 
                to="/contact" 
                className="font-montserrat text-charcoal dark:text-cream hover:text-terracotta dark:hover:text-terracotta transition-colors"
              >
                Contact
              </Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button variant="default" className="bg-terracotta hover:bg-terracotta-dark text-white">
                Reserve a Table
              </Button>
              <ThemeToggle />
            </div>
          </div>
          
          <div className="flex md:hidden items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-charcoal dark:text-cream"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background dark:bg-charcoal-dark min-h-screen w-full absolute top-16 left-0 z-50 animate-fade-in">
          <div className="container mx-auto py-8 px-4">
            <nav className="flex flex-col space-y-6">
              <Link 
                to="/" 
                className="font-montserrat text-2xl text-charcoal dark:text-cream hover:text-terracotta dark:hover:text-terracotta transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/menu" 
                className="font-montserrat text-2xl text-charcoal dark:text-cream hover:text-terracotta dark:hover:text-terracotta transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Menu
              </Link>
              <Link 
                to="/about" 
                className="font-montserrat text-2xl text-charcoal dark:text-cream hover:text-terracotta dark:hover:text-terracotta transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="font-montserrat text-2xl text-charcoal dark:text-cream hover:text-terracotta dark:hover:text-terracotta transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/gallery" 
                className="font-montserrat text-2xl text-charcoal dark:text-cream hover:text-terracotta dark:hover:text-terracotta transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                to="/contact" 
                className="font-montserrat text-2xl text-charcoal dark:text-cream hover:text-terracotta dark:hover:text-terracotta transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            
            <div className="mt-8">
              <Button 
                variant="default" 
                className="w-full bg-terracotta hover:bg-terracotta-dark text-white py-6 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reserve a Table
              </Button>
            </div>
            
            <div className="mt-8 flex justify-center space-x-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-charcoal dark:text-cream hover:text-terracotta dark:hover:text-terracotta">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-charcoal dark:text-cream hover:text-terracotta dark:hover:text-terracotta">
                <Instagram size={24} />
              </a>
              <a href="https://twitter.com/mohammedjabir__" target="_blank" rel="noopener noreferrer" className="text-charcoal dark:text-cream hover:text-terracotta dark:hover:text-terracotta">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
