
import { Star } from 'lucide-react';

export interface MenuItemProps {
  id: number;
  name: string;
  description: string;
  price: string;
  image?: string;
  category: string;
  dietaryInfo: string[];
  rating?: number;
  featured?: boolean;
  isNew?: boolean;
}

const MenuItem = ({ 
  name, 
  description, 
  price, 
  image, 
  category, 
  dietaryInfo, 
  rating, 
  featured, 
  isNew 
}: MenuItemProps) => {
  return (
    <div className="bg-white dark:bg-charcoal rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-coffee text-cream text-sm font-semibold px-3 py-1 rounded-full">
            {category}
          </div>
          
          {isNew && (
            <div className="absolute top-4 left-4 bg-terracotta text-white text-sm font-semibold px-3 py-1 rounded-full">
              New
            </div>
          )}
        </div>
      )}
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-coffee dark:text-cream">{name}</h3>
          <span className="text-lg font-bold text-coffee dark:text-cream">{price}</span>
        </div>
        
        {rating && (
          <div className="flex items-center mb-2">
            <div className="flex text-terracotta">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  fill={i < Math.floor(rating) ? "currentColor" : "none"}
                  className={i < Math.floor(rating) ? "text-terracotta" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-charcoal/70 dark:text-cream/70">
              {rating.toFixed(1)}
            </span>
          </div>
        )}
        
        <p className="text-charcoal/80 dark:text-cream/80 mb-4">{description}</p>
        
        {dietaryInfo.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {dietaryInfo.map((info) => (
              <span 
                key={info} 
                className="text-xs px-2 py-1 rounded-full bg-cream dark:bg-charcoal-dark text-charcoal dark:text-cream"
              >
                {info}
              </span>
            ))}
          </div>
        )}
        
        {featured && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-terracotta font-semibold flex items-center">
              <Star size={16} className="mr-1" fill="currentColor" /> Chef's Recommendation
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
