
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Menu, X } from "lucide-react";
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
      ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-background/5 backdrop-blur-sm'}`}
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
              {[
                { name: "Home", path: "/" },
                { name: "Menu", path: "/menu" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <Link 
                  key={item.name}
                  to={item.path} 
                  className="font-montserrat text-coffee dark:text-cream hover:text-terracotta dark:hover:text-terracotta transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-terracotta after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </div>
          
          <div className="flex md:hidden items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-coffee dark:text-cream hover:text-terracotta dark:hover:text-terracotta transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background dark:bg-charcoal-dark min-h-screen w-full absolute top-16 left-0 z-50 animate-fade-in">
          <div className="container mx-auto py-8 px-4">
            <nav className="flex flex-col space-y-6">
              {[
                { name: "Home", path: "/" },
                { name: "Menu", path: "/menu" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <Link 
                  key={item.name}
                  to={item.path} 
                  className="font-montserrat text-2xl text-coffee dark:text-cream hover:text-terracotta dark:hover:text-terracotta transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-8 flex justify-center space-x-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-coffee dark:text-cream hover:text-terracotta dark:hover:text-terracotta transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-coffee dark:text-cream hover:text-terracotta dark:hover:text-terracotta transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://twitter.com/mohammedjabir__" target="_blank" rel="noopener noreferrer" className="text-coffee dark:text-cream hover:text-terracotta dark:hover:text-terracotta transition-colors">
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
