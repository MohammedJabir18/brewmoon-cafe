
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-coffee text-cream pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Brew<span className="text-terracotta">moon</span>
            </h2>
            <p className="mb-6 text-cream/80">
              Where coffee meets culinary excellence. Enjoy our handcrafted beverages and delicious food in a warm, welcoming atmosphere.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-cream hover:text-terracotta transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-cream hover:text-terracotta transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com/mohammedjabir__" target="_blank" rel="noopener noreferrer" className="text-cream hover:text-terracotta transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-montserrat text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-cream/80 hover:text-terracotta transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="text-cream/80 hover:text-terracotta transition-colors">Menu</Link>
              </li>
              <li>
                <Link to="/about" className="text-cream/80 hover:text-terracotta transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-cream/80 hover:text-terracotta transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-cream/80 hover:text-terracotta transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream/80 hover:text-terracotta transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat text-lg font-semibold mb-6">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Clock size={16} className="mr-2" /> 
                <span className="text-cream/80">Monday - Friday: 7am - 10pm</span>
              </li>
              <li className="flex items-center">
                <Clock size={16} className="mr-2" /> 
                <span className="text-cream/80">Saturday: 8am - 11pm</span>
              </li>
              <li className="flex items-center">
                <Clock size={16} className="mr-2" /> 
                <span className="text-cream/80">Sunday: 8am - 9pm</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" /> 
                <span className="text-cream/80">123 Cafe Street, Foodville, State, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0" /> 
                <span className="text-cream/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0" /> 
                <a href="mailto:jabirahmedz111@gmail.com" className="text-cream/80 hover:text-terracotta transition-colors">
                  jabirahmedz111@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-cream/20 text-center text-cream/60 text-sm">
          <p>&copy; {currentYear} Brewmoon Café. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="hover:text-terracotta transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-terracotta transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
