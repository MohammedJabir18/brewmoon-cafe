
import { Utensils, Calendar, Gift, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  return (
    <section className="section-padding bg-cream dark:bg-charcoal-dark">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee dark:text-cream mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-terracotta rounded mx-auto mb-6"></div>
          <p className="text-charcoal/80 dark:text-cream/80 max-w-2xl mx-auto">
            Beyond our daily café operations, we offer a variety of services to enhance your Brewmoon experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white dark:bg-charcoal rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Catering Service" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="flex items-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-terracotta text-white rounded-full mr-4">
                    <Utensils size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Catering Services</h3>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-charcoal/80 dark:text-cream/80 mb-6">
                From intimate gatherings to corporate events, our catering services bring the Brewmoon experience to your location. We offer customizable menu options featuring our signature dishes and beverages, ensuring your event is a culinary success.
              </p>
              
              <h4 className="font-montserrat font-semibold text-lg text-coffee dark:text-cream mb-4">
                Catering Options:
              </h4>
              
              <ul className="list-disc pl-5 text-charcoal/80 dark:text-cream/80 mb-6">
                <li>Corporate breakfast and lunch meetings</li>
                <li>Private dinner parties</li>
                <li>Wedding receptions and rehearsal dinners</li>
                <li>Holiday celebrations</li>
                <li>Special occasion events</li>
              </ul>
              
              <Button 
                className="w-full bg-coffee hover:bg-coffee-dark text-white"
                asChild
              >
                <Link to="/contact">Request Catering Information</Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-white dark:bg-charcoal rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Private Events" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="flex items-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-sage text-white rounded-full mr-4">
                    <Calendar size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Private Events</h3>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-charcoal/80 dark:text-cream/80 mb-6">
                Host your next special occasion at Brewmoon. Our versatile space can be configured to accommodate various types of events, from birthday celebrations to business meetings. We offer full-service event planning including custom menus, decorations, and audiovisual support.
              </p>
              
              <h4 className="font-montserrat font-semibold text-lg text-coffee dark:text-cream mb-4">
                Event Spaces:
              </h4>
              
              <ul className="list-disc pl-5 text-charcoal/80 dark:text-cream/80 mb-6">
                <li>Main Dining Room (up to 50 guests)</li>
                <li>Private Meeting Room (up to 20 guests)</li>
                <li>Outdoor Patio (up to 30 guests, seasonal)</li>
                <li>Full Venue Buyout (up to 100 guests)</li>
              </ul>
              
              <Button 
                className="w-full bg-sage hover:bg-sage-dark text-white"
                asChild
              >
                <Link to="/contact">Book Your Private Event</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-charcoal rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Loyalty Program" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="flex items-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-terracotta text-white rounded-full mr-4">
                    <Gift size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Loyalty Program</h3>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-charcoal/80 dark:text-cream/80 mb-6">
                Join our Brewmoon Rewards program and earn points with every purchase. Our digital loyalty program allows you to accumulate rewards that can be redeemed for free beverages, food items, and exclusive perks available only to members.
              </p>
              
              <h4 className="font-montserrat font-semibold text-lg text-coffee dark:text-cream mb-4">
                Member Benefits:
              </h4>
              
              <ul className="list-disc pl-5 text-charcoal/80 dark:text-cream/80 mb-6">
                <li>Earn 1 point for every dollar spent</li>
                <li>Birthday reward (free dessert or specialty beverage)</li>
                <li>Early access to seasonal menu items</li>
                <li>Exclusive member-only events and tastings</li>
                <li>Free upgrade on every 10th beverage purchase</li>
              </ul>
              
              <Button 
                className="w-full bg-terracotta hover:bg-terracotta-dark text-white"
              >
                Join Our Loyalty Program
              </Button>
            </div>
          </div>
          
          <div className="bg-white dark:bg-charcoal rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1629168078204-d5b2dfd4d4fc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Delivery and Takeout" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="flex items-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-coffee text-cream rounded-full mr-4">
                    <Truck size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Delivery & Takeout</h3>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-charcoal/80 dark:text-cream/80 mb-6">
                Enjoy Brewmoon's delicious offerings from the comfort of your home or office. We offer convenient online ordering for both takeout and delivery, with special packaging designed to ensure your food arrives in perfect condition.
              </p>
              
              <h4 className="font-montserrat font-semibold text-lg text-coffee dark:text-cream mb-4">
                Delivery & Takeout Details:
              </h4>
              
              <ul className="list-disc pl-5 text-charcoal/80 dark:text-cream/80 mb-6">
                <li>Online ordering available through our website or app</li>
                <li>Delivery within a 5-mile radius</li>
                <li>Free delivery on orders over $30</li>
                <li>Environmentally friendly packaging</li>
                <li>Special family-style takeout options available</li>
              </ul>
              
              <Button 
                className="w-full bg-coffee hover:bg-coffee-dark text-white"
              >
                Order Online Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
