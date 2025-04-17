
import { useState } from 'react';
import { Filter, SearchIcon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export interface MenuFiltersProps {
  categories: string[];
  dietaryOptions: string[];
  activeCategory: string;
  activeDietary: string[];
  searchTerm: string;
  onCategoryChange: (category: string) => void;
  onDietaryToggle: (option: string) => void;
  onSearchChange: (term: string) => void;
  onClearFilters: () => void;
}

const MenuFilters = ({
  categories,
  dietaryOptions,
  activeCategory,
  activeDietary,
  searchTerm,
  onCategoryChange,
  onDietaryToggle,
  onSearchChange,
  onClearFilters
}: MenuFiltersProps) => {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  
  return (
    <div className="mb-8">
      <div className="hidden md:block">
        <div className="mb-6">
          <h3 className="font-montserrat font-semibold text-lg text-coffee dark:text-cream mb-4">
            Categories
          </h3>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={activeCategory === 'All' ? 'default' : 'outline'}
              className={activeCategory === 'All' 
                ? 'bg-coffee text-white hover:bg-coffee-dark' 
                : 'border-coffee text-coffee dark:border-cream dark:text-cream hover:bg-coffee/10 dark:hover:bg-cream/10'}
              onClick={() => onCategoryChange('All')}
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                className={activeCategory === category
                  ? 'bg-coffee text-white hover:bg-coffee-dark' 
                  : 'border-coffee text-coffee dark:border-cream dark:text-cream hover:bg-coffee/10 dark:hover:bg-cream/10'}
                onClick={() => onCategoryChange(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="font-montserrat font-semibold text-lg text-coffee dark:text-cream mb-4">
            Dietary Preferences
          </h3>
          <div className="flex flex-wrap gap-2">
            {dietaryOptions.map((option) => (
              <Button
                key={option}
                variant={activeDietary.includes(option) ? 'default' : 'outline'}
                className={activeDietary.includes(option)
                  ? 'bg-sage text-white hover:bg-sage-dark' 
                  : 'border-sage text-sage dark:border-sage-light dark:text-sage-light hover:bg-sage/10'}
                onClick={() => onDietaryToggle(option)}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal/60 dark:text-cream/60" size={18} />
            <Input
              type="text"
              placeholder="Search menu..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-white dark:bg-charcoal-dark border-coffee/20 dark:border-cream/20"
            />
          </div>
          
          {(activeCategory !== 'All' || activeDietary.length > 0 || searchTerm) && (
            <Button 
              variant="ghost" 
              className="text-coffee dark:text-cream"
              onClick={onClearFilters}
            >
              <X size={18} className="mr-2" /> Clear Filters
            </Button>
          )}
        </div>
      </div>
      
      {/* Mobile Filters */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="outline"
            className="border-coffee text-coffee dark:border-cream dark:text-cream"
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          >
            <Filter size={18} className="mr-2" /> Filters
            {(activeCategory !== 'All' || activeDietary.length > 0) && (
              <span className="ml-2 w-5 h-5 rounded-full bg-terracotta text-white text-xs flex items-center justify-center">
                {(activeCategory !== 'All' ? 1 : 0) + activeDietary.length}
              </span>
            )}
          </Button>
          
          <div className="relative flex-1 ml-2">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal/60 dark:text-cream/60" size={18} />
            <Input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-white dark:bg-charcoal-dark border-coffee/20 dark:border-cream/20"
            />
          </div>
        </div>
        
        {isMobileFiltersOpen && (
          <div className="p-4 bg-cream dark:bg-charcoal-dark rounded-lg mb-4 animate-fade-in">
            <div className="mb-4">
              <h3 className="font-montserrat font-semibold text-lg text-coffee dark:text-cream mb-2">
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  variant={activeCategory === 'All' ? 'default' : 'outline'}
                  className={activeCategory === 'All' 
                    ? 'bg-coffee text-white hover:bg-coffee-dark' 
                    : 'border-coffee text-coffee dark:border-cream dark:text-cream'}
                  onClick={() => onCategoryChange('All')}
                >
                  All
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    size="sm"
                    variant={activeCategory === category ? 'default' : 'outline'}
                    className={activeCategory === category
                      ? 'bg-coffee text-white hover:bg-coffee-dark' 
                      : 'border-coffee text-coffee dark:border-cream dark:text-cream'}
                    onClick={() => onCategoryChange(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="font-montserrat font-semibold text-lg text-coffee dark:text-cream mb-2">
                Dietary Preferences
              </h3>
              <div className="flex flex-wrap gap-2">
                {dietaryOptions.map((option) => (
                  <Button
                    key={option}
                    size="sm"
                    variant={activeDietary.includes(option) ? 'default' : 'outline'}
                    className={activeDietary.includes(option)
                      ? 'bg-sage text-white hover:bg-sage-dark' 
                      : 'border-sage text-sage dark:border-sage-light dark:text-sage-light'}
                    onClick={() => onDietaryToggle(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between">
              <Button 
                variant="ghost" 
                className="text-coffee dark:text-cream"
                onClick={() => setIsMobileFiltersOpen(false)}
              >
                Close
              </Button>
              
              {(activeCategory !== 'All' || activeDietary.length > 0 || searchTerm) && (
                <Button 
                  variant="ghost" 
                  className="text-coffee dark:text-cream"
                  onClick={onClearFilters}
                >
                  <X size={18} className="mr-2" /> Clear All
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuFilters;
