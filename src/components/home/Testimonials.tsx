
import { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  date: string;
  rating: number;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    date: "October 15, 2023",
    rating: 5,
    text: "The atmosphere at Brewmoon is just perfect for both work and relaxation. Their espresso blend is absolutely divine, and the avocado toast is the best I've had in the city. The staff is always friendly and remembers my usual order!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Michael Chen",
    date: "November 3, 2023",
    rating: 5,
    text: "I've been coming to Brewmoon for the past year and I'm never disappointed. The seasonal menu always offers something new and exciting, and their commitment to quality is evident in every dish. It's become my go-to spot for client meetings.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    date: "December 12, 2023",
    rating: 4,
    text: "The breakfast menu at Brewmoon is outstanding. Their berry parfait is the perfect start to my day, and the coffee is consistently excellent. The only reason I'm giving 4 stars instead of 5 is because it gets quite busy on weekends with long wait times.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    name: "David Wilson",
    date: "January 8, 2024",
    rating: 5,
    text: "As someone who works remotely, I appreciate cafés with good ambiance and reliable WiFi. Brewmoon exceeds expectations on both counts. Their lunch options are varied and delicious, and the staff is accommodating of those who stay for longer periods.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);
  
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000); // Change testimonial every 5 seconds
      
      return () => clearInterval(interval);
    }
  }, [nextSlide, isPaused]);
  
  return (
    <section className="section-padding bg-coffee text-cream relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
      ></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <div className="w-20 h-1 bg-terracotta rounded mx-auto mb-6"></div>
          <p className="text-cream/80 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their experience at Brewmoon.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative p-8 md:p-12 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 shadow-xl transition-all duration-300 hover:bg-white/10">
            <div className="absolute -top-5 -left-5 text-terracotta opacity-50">
              <Quote size={60} />
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0 ring-4 ring-terracotta/20">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <div className="flex items-center mb-2 justify-center md:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      fill={i < testimonials[currentIndex].rating ? "currentColor" : "none"}
                      className={i < testimonials[currentIndex].rating ? "text-terracotta" : "text-gray-400"}
                    />
                  ))}
                </div>
                
                <p className="font-cormorant text-xl italic mb-6">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="text-center md:text-left">
                  <h4 className="font-montserrat font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-cream/60 text-sm">
                    {testimonials[currentIndex].date}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              className="border-cream/30 bg-cream/20 text-cream hover:bg-cream/30 rounded-full w-12 h-12 p-0 transition-transform hover:scale-110"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </Button>
            <Button 
              variant="outline" 
              className="border-cream/30 bg-cream/20 text-cream hover:bg-cream/30 rounded-full w-12 h-12 p-0 transition-transform hover:scale-110"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </Button>
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 transition-colors duration-300 ${
                  currentIndex === index ? "bg-terracotta" : "bg-cream/30 hover:bg-cream/50"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
