
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
      >
        <div className="hero-overlay"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Where Coffee Meets <span className="text-terracotta">Culinary Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
            Experience the perfect blend of handcrafted beverages and delectable cuisine in a warm, inviting atmosphere at Brewmoon.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-terracotta hover:bg-terracotta-dark text-white text-lg py-6 px-8" 
              asChild
            >
              <Link to="/menu">Explore Our Menu</Link>
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-cream text-cream hover:bg-cream/10 text-lg py-6 px-8"
              asChild
            >
              <Link to="/contact">Reserve a Table</Link>
            </Button>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <button 
            onClick={() => scrollToSection('featured')}
            className="text-cream hover:text-terracotta transition-colors focus:outline-none"
            aria-label="Scroll down to see more"
          >
            <ChevronDown size={36} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
