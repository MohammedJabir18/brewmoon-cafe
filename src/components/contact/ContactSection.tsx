
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
        variant: "default",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };
  
  return (
    <section className="section-padding bg-white dark:bg-charcoal">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee dark:text-cream mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-terracotta rounded mx-auto mb-6"></div>
          <p className="text-charcoal/80 dark:text-cream/80 max-w-2xl mx-auto">
            Have a question or feedback? We'd love to hear from you. Reach out to us using any of the methods below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-cream dark:bg-charcoal-dark rounded-lg p-8 mb-8">
              <h3 className="font-montserrat font-semibold text-xl text-coffee dark:text-cream mb-6">
                Get In Touch
              </h3>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-coffee text-cream rounded-full mr-4 flex-shrink-0 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-medium text-coffee dark:text-cream mb-1">
                      Our Location
                    </h4>
                    <p className="text-charcoal/80 dark:text-cream/80">
                      123 Café Street, Foodville, State, 12345
                    </p>
                    <a 
                      href="https://www.google.co.in/maps/place/Brewmoon/@10.7851165,76.004047,17z/data=!4m6!3m5!1s0x3ba7b9c231ec37dd:0x6184f2fbac5c3ef3!8m2!3d10.7847476!4d76.0059138!16s%2Fg%2F11g_rw7vbs?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-terracotta hover:underline text-sm mt-1 inline-block"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-terracotta text-white rounded-full mr-4 flex-shrink-0 mt-1">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-medium text-coffee dark:text-cream mb-1">
                      Phone Number
                    </h4>
                    <p className="text-charcoal/80 dark:text-cream/80">
                      +1 (555) 123-4567
                    </p>
                    <p className="text-charcoal/60 dark:text-cream/60 text-sm mt-1">
                      Available Monday-Friday, 9am-5pm
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-sage text-white rounded-full mr-4 flex-shrink-0 mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-medium text-coffee dark:text-cream mb-1">
                      Email Address
                    </h4>
                    <a 
                      href="mailto:jabirahmedz111@gmail.com" 
                      className="text-charcoal/80 dark:text-cream/80 hover:text-terracotta"
                    >
                      jabirahmedz111@gmail.com
                    </a>
                    <p className="text-charcoal/60 dark:text-cream/60 text-sm mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-coffee text-cream rounded-full mr-4 flex-shrink-0 mt-1">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-medium text-coffee dark:text-cream mb-1">
                      Opening Hours
                    </h4>
                    <div className="text-charcoal/80 dark:text-cream/80">
                      <p>Monday - Friday: 7am - 10pm</p>
                      <p>Saturday: 8am - 11pm</p>
                      <p>Sunday: 8am - 9pm</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="rounded-lg overflow-hidden h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.9714286056313!2d76.00434607429183!3d10.784747889366763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b9c231ec37dd%3A0x6184f2fbac5c3ef3!2sBrewmoon!5e0!3m2!1sen!2sin!4v1713489541159!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Brewmoon Café Location"
              ></iframe>
            </div>
          </div>
          
          <div className="bg-cream dark:bg-charcoal-dark rounded-lg p-8">
            <h3 className="font-montserrat font-semibold text-xl text-coffee dark:text-cream mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal/80 dark:text-cream/80 mb-2">
                    Your Name *
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-white dark:bg-charcoal border-coffee/20 dark:border-cream/20"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal/80 dark:text-cream/80 mb-2">
                    Email Address *
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-white dark:bg-charcoal border-coffee/20 dark:border-cream/20"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal/80 dark:text-cream/80 mb-2">
                    Phone Number
                  </label>
                  <Input 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="bg-white dark:bg-charcoal border-coffee/20 dark:border-cream/20"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal/80 dark:text-cream/80 mb-2">
                    Subject *
                  </label>
                  <Input 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="bg-white dark:bg-charcoal border-coffee/20 dark:border-cream/20"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal/80 dark:text-cream/80 mb-2">
                  Your Message *
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please provide details about your inquiry..."
                  required
                  className="bg-white dark:bg-charcoal border-coffee/20 dark:border-cream/20"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-terracotta hover:bg-terracotta-dark text-white py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Sending Message...</>
                ) : (
                  <>
                    <Send size={18} className="mr-2" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
