
import { Coffee, Award, Users, ThumbsUp } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="section-padding bg-white dark:bg-charcoal">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee dark:text-cream mb-4">
            Our Story
          </h2>
          <div className="w-20 h-1 bg-terracotta rounded mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-charcoal/80 dark:text-cream/80 mb-6 text-lg">
              Founded in 2015, Brewmoon began with a simple vision: to create a space where coffee and culinary arts could come together in perfect harmony. What started as a small coffee corner has grown into a beloved café that brings together the community.
            </p>
            <p className="text-charcoal/80 dark:text-cream/80 mb-6 text-lg">
              Our founder, Mohamed Jabir, had spent years working in both specialty coffee shops and fine dining establishments. He noticed that while there were excellent venues for each, there were few places that excelled at both. This gap in the market inspired the creation of Brewmoon.
            </p>
            <p className="text-charcoal/80 dark:text-cream/80 text-lg">
              The name "Brewmoon" reflects our philosophy: just as the moon pulls the tides and influences growth cycles, we believe in the cyclical nature of food—from farm to table and back again. We honor this cycle by sourcing locally, composting our waste, and supporting sustainable agriculture.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1559305616-3f99cd43e353?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Brewmoon Café Interior" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-charcoal-dark p-4 rounded-lg shadow-lg">
              <p className="font-cormorant italic text-lg text-coffee dark:text-cream">
                "Where coffee meets culinary excellence"
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-coffee dark:text-cream mb-8 text-center">
            Our Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-cream dark:bg-charcoal-dark rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-coffee text-cream rounded-full mb-4">
                <Coffee size={32} />
              </div>
              <h4 className="font-montserrat font-semibold text-xl text-coffee dark:text-cream mb-2">
                Quality
              </h4>
              <p className="text-charcoal/80 dark:text-cream/80">
                We never compromise on quality, from our carefully selected beans to our locally-sourced ingredients.
              </p>
            </div>
            
            <div className="p-6 bg-cream dark:bg-charcoal-dark rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-terracotta text-white rounded-full mb-4">
                <Award size={32} />
              </div>
              <h4 className="font-montserrat font-semibold text-xl text-coffee dark:text-cream mb-2">
                Innovation
              </h4>
              <p className="text-charcoal/80 dark:text-cream/80">
                We continuously experiment with new flavors and techniques while respecting culinary traditions.
              </p>
            </div>
            
            <div className="p-6 bg-cream dark:bg-charcoal-dark rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage text-white rounded-full mb-4">
                <Users size={32} />
              </div>
              <h4 className="font-montserrat font-semibold text-xl text-coffee dark:text-cream mb-2">
                Community
              </h4>
              <p className="text-charcoal/80 dark:text-cream/80">
                We strive to create a welcoming space that brings people together and supports local producers.
              </p>
            </div>
            
            <div className="p-6 bg-cream dark:bg-charcoal-dark rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-coffee text-cream rounded-full mb-4">
                <ThumbsUp size={32} />
              </div>
              <h4 className="font-montserrat font-semibold text-xl text-coffee dark:text-cream mb-2">
                Sustainability
              </h4>
              <p className="text-charcoal/80 dark:text-cream/80">
                We're committed to environmentally responsible practices in everything we do.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-coffee dark:text-cream mb-8 text-center">
            Our Atmosphere
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-8 h-80 md:h-[500px] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Brewmoon Café Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-4 grid grid-rows-2 gap-4">
              <div className="h-40 md:h-[242px] rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Café Barista" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-40 md:h-[242px] rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Coffee Preparation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-charcoal/80 dark:text-cream/80 italic">
              We've designed our space to be warm and inviting, with comfortable seating, plenty of natural light, and thoughtful touches throughout. Whether you're looking for a quiet corner to work, a cozy spot for a date, or a large table for a group gathering, we have the perfect place for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
