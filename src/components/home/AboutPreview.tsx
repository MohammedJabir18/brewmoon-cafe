
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Coffee, Utensils, Heart } from 'lucide-react';

const AboutPreview = () => {
  return (
    <section className="section-padding bg-white dark:bg-charcoal">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-coffee dark:text-cream mb-4">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-terracotta rounded mb-6"></div>
              <p className="text-charcoal/80 dark:text-cream/80 mb-4">
                Founded in 2015, Brewmoon began with a simple vision: to create a space where coffee and culinary arts could come together in perfect harmony. What started as a small coffee corner has grown into a beloved café that brings together the community.
              </p>
              <p className="text-charcoal/80 dark:text-cream/80 mb-6">
                Every cup we pour and every dish we serve is prepared with attention to detail, using locally-sourced ingredients whenever possible. Our team of passionate baristas and chefs work tirelessly to ensure that each customer leaves with a smile.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-cream dark:bg-charcoal-dark rounded-lg text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-terracotta text-white rounded-full mb-4">
                  <Coffee size={24} />
                </div>
                <h3 className="font-montserrat font-semibold text-coffee dark:text-cream mb-2">
                  Quality Brews
                </h3>
                <p className="text-sm text-charcoal/80 dark:text-cream/80">
                  Freshly roasted, ethically sourced beans
                </p>
              </div>
              
              <div className="p-6 bg-cream dark:bg-charcoal-dark rounded-lg text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-sage text-white rounded-full mb-4">
                  <Utensils size={24} />
                </div>
                <h3 className="font-montserrat font-semibold text-coffee dark:text-cream mb-2">
                  Fresh Cuisine
                </h3>
                <p className="text-sm text-charcoal/80 dark:text-cream/80">
                  Local ingredients, crafted with care
                </p>
              </div>
              
              <div className="p-6 bg-cream dark:bg-charcoal-dark rounded-lg text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-terracotta text-white rounded-full mb-4">
                  <Heart size={24} />
                </div>
                <h3 className="font-montserrat font-semibold text-coffee dark:text-cream mb-2">
                  Warm Service
                </h3>
                <p className="text-sm text-charcoal/80 dark:text-cream/80">
                  Friendly, attentive, and personalized
                </p>
              </div>
            </div>
            
            <Button 
              className="bg-coffee hover:bg-coffee-dark text-white px-8 py-6"
              asChild
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-lg h-64 md:h-80">
                  <img 
                    src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Barista preparing coffee" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg h-40 md:h-56">
                  <img 
                    src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Coffee beans" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-6">
                <div className="rounded-lg overflow-hidden shadow-lg h-40 md:h-56">
                  <img 
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Restaurant interior" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg h-64 md:h-80">
                  <img 
                    src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Chef preparing food" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
