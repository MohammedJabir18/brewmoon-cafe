
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'food' | 'coffee' | 'interior' | 'events';
}

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const galleryImages: GalleryImage[] = [
    // Food Images
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Avocado Toast with Poached Eggs",
      category: "food"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Artisanal Chicken Sandwich",
      category: "food"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pan-Seared Salmon",
      category: "food"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Dark Chocolate Torte",
      category: "food"
    },
    
    // Coffee Images
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1510707577719-ae7aecd90b17?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Signature Espresso Blend",
      category: "coffee"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Matcha Latte",
      category: "coffee"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pouring Coffee",
      category: "coffee"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Coffee Art",
      category: "coffee"
    },
    
    // Interior Images
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Café Interior",
      category: "interior"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Café Counter",
      category: "interior"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Café Seating Area",
      category: "interior"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Restaurant Interior",
      category: "interior"
    },
    
    // Events Images
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Private Event Setup",
      category: "events"
    },
    {
      id: 14,
      src: "https://images.unsplash.com/photo-1525268323446-0505b6fe7778?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Event Table Setting",
      category: "events"
    },
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1529679129062-7d8244a525c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Catering Display",
      category: "events"
    },
    {
      id: 16,
      src: "https://images.unsplash.com/photo-1633493702341-4d04841df53b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Group Dining",
      category: "events"
    }
  ];
  
  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);
  
  return (
    <main className="pt-24">
      <section className="section-padding bg-white dark:bg-charcoal">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-coffee dark:text-cream mb-4">
              Gallery
            </h2>
            <div className="w-20 h-1 bg-terracotta rounded mx-auto mb-6"></div>
            <p className="text-charcoal/80 dark:text-cream/80 max-w-2xl mx-auto">
              Take a visual journey through our café, food, and events.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Button 
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              className={activeFilter === 'all' 
                ? 'bg-coffee text-white hover:bg-coffee-dark' 
                : 'border-coffee text-coffee dark:border-cream dark:text-cream hover:bg-coffee/10 dark:hover:bg-cream/10'}
              onClick={() => setActiveFilter('all')}
            >
              All
            </Button>
            <Button 
              variant={activeFilter === 'food' ? 'default' : 'outline'}
              className={activeFilter === 'food' 
                ? 'bg-coffee text-white hover:bg-coffee-dark' 
                : 'border-coffee text-coffee dark:border-cream dark:text-cream hover:bg-coffee/10 dark:hover:bg-cream/10'}
              onClick={() => setActiveFilter('food')}
            >
              Food
            </Button>
            <Button 
              variant={activeFilter === 'coffee' ? 'default' : 'outline'}
              className={activeFilter === 'coffee' 
                ? 'bg-coffee text-white hover:bg-coffee-dark' 
                : 'border-coffee text-coffee dark:border-cream dark:text-cream hover:bg-coffee/10 dark:hover:bg-cream/10'}
              onClick={() => setActiveFilter('coffee')}
            >
              Coffee
            </Button>
            <Button 
              variant={activeFilter === 'interior' ? 'default' : 'outline'}
              className={activeFilter === 'interior' 
                ? 'bg-coffee text-white hover:bg-coffee-dark' 
                : 'border-coffee text-coffee dark:border-cream dark:text-cream hover:bg-coffee/10 dark:hover:bg-cream/10'}
              onClick={() => setActiveFilter('interior')}
            >
              Interior
            </Button>
            <Button 
              variant={activeFilter === 'events' ? 'default' : 'outline'}
              className={activeFilter === 'events' 
                ? 'bg-coffee text-white hover:bg-coffee-dark' 
                : 'border-coffee text-coffee dark:border-cream dark:text-cream hover:bg-coffee/10 dark:hover:bg-cream/10'}
              onClick={() => setActiveFilter('events')}
            >
              Events
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg group h-64"
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-charcoal/80 dark:text-cream/80">
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
