
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface FeaturedItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  rating: number;
  featured: boolean;
}

const featuredItems: FeaturedItem[] = [
  {
    id: 1,
    name: "Signature Espresso Blend",
    description: "Our house-roasted beans with notes of chocolate, caramel, and a hint of citrus.",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Coffee",
    rating: 4.8,
    featured: true
  },
  {
    id: 2,
    name: "Avocado Toast with Poached Eggs",
    description: "Sourdough bread topped with smashed avocado, poached eggs, and microgreens.",
    price: "$12.95",
    image: "https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Breakfast",
    rating: 4.7,
    featured: true
  },
  {
    id: 3,
    name: "Berry & Granola Parfait",
    description: "Layers of Greek yogurt, house-made granola, and seasonal berries with honey drizzle.",
    price: "$8.95",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Breakfast",
    rating: 4.6,
    featured: true
  },
  {
    id: 4,
    name: "Artisanal Chicken Sandwich",
    description: "Herb-marinated chicken breast with arugula, tomato jam, and garlic aioli on ciabatta.",
    price: "$14.50",
    image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Lunch",
    rating: 4.9,
    featured: true
  }
];

const FeaturedItems = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(featuredItems.length / itemsPerPage);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= featuredItems.length ? 0 : prevIndex + itemsPerPage
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - itemsPerPage < 0 ? Math.max(0, featuredItems.length - itemsPerPage) : prevIndex - itemsPerPage
    );
  };
  
  const visibleItems = featuredItems.slice(currentIndex, currentIndex + itemsPerPage);
  
  return (
    <section id="featured" className="section-padding bg-cream dark:bg-charcoal-dark">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee dark:text-cream mb-4">
            Our Signature Specialties
          </h2>
          <p className="text-charcoal/80 dark:text-cream/80 max-w-2xl mx-auto">
            Handcrafted with care using the finest ingredients, our signature items 
            showcase the culinary excellence that defines Brewmoon.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white dark:bg-charcoal rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-terracotta text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex text-terracotta">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        fill={i < Math.floor(item.rating) ? "currentColor" : "none"}
                        className={i < Math.floor(item.rating) ? "text-terracotta" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-charcoal/70 dark:text-cream/70">
                    {item.rating.toFixed(1)}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-coffee dark:text-cream mb-2">{item.name}</h3>
                <p className="text-charcoal/80 dark:text-cream/80 mb-4">{item.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-coffee dark:text-cream">{item.price}</span>
                  <Button 
                    variant="outline" 
                    className="border-coffee dark:border-cream text-coffee dark:text-cream hover:bg-coffee hover:text-cream dark:hover:bg-cream dark:hover:text-coffee"
                    asChild
                  >
                    <Link to="/menu">Details</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 space-x-4">
            <Button 
              variant="outline" 
              className="border-coffee dark:border-cream text-coffee dark:text-cream hover:bg-coffee hover:text-cream dark:hover:bg-cream dark:hover:text-coffee rounded-full w-12 h-12 p-0"
              onClick={prevSlide}
              aria-label="Previous items"
            >
              <ArrowLeft size={20} />
            </Button>
            <Button 
              variant="outline" 
              className="border-coffee dark:border-cream text-coffee dark:text-cream hover:bg-coffee hover:text-cream dark:hover:bg-cream dark:hover:text-coffee rounded-full w-12 h-12 p-0"
              onClick={nextSlide}
              aria-label="Next items"
            >
              <ArrowRight size={20} />
            </Button>
          </div>
        )}
        
        <div className="text-center mt-12">
          <Button 
            className="bg-terracotta hover:bg-terracotta-dark text-white px-8 py-6"
            asChild
          >
            <Link to="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
