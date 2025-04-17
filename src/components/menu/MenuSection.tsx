
import { useState, useEffect } from 'react';
import MenuItem, { MenuItemProps } from './MenuItem';
import MenuFilters from './MenuFilters';

// Sample menu data
const menuItems: MenuItemProps[] = [
  // Breakfast Items
  {
    id: 1,
    name: "Avocado Toast with Poached Eggs",
    description: "Sourdough bread topped with smashed avocado, poached eggs, and microgreens.",
    price: "$12.95",
    image: "https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Breakfast",
    dietaryInfo: ["Vegetarian"],
    rating: 4.7,
    featured: true
  },
  {
    id: 2,
    name: "Berry & Granola Parfait",
    description: "Layers of Greek yogurt, house-made granola, and seasonal berries with honey drizzle.",
    price: "$8.95",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Breakfast",
    dietaryInfo: ["Vegetarian", "Gluten-Free Option"],
    rating: 4.6
  },
  {
    id: 3,
    name: "Breakfast Burrito",
    description: "Flour tortilla filled with scrambled eggs, black beans, cheese, avocado, and pico de gallo.",
    price: "$11.50",
    image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&w=1608&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Breakfast",
    dietaryInfo: ["Vegetarian Option"],
    rating: 4.5
  },
  
  // Lunch Items
  {
    id: 4,
    name: "Artisanal Chicken Sandwich",
    description: "Herb-marinated chicken breast with arugula, tomato jam, and garlic aioli on ciabatta.",
    price: "$14.50",
    image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Lunch",
    dietaryInfo: [],
    rating: 4.9,
    featured: true
  },
  {
    id: 5,
    name: "Harvest Quinoa Bowl",
    description: "Tri-color quinoa with roasted seasonal vegetables, chickpeas, and lemon-tahini dressing.",
    price: "$13.95",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Lunch",
    dietaryInfo: ["Vegan", "Gluten-Free"],
    rating: 4.7
  },
  {
    id: 6,
    name: "Tuscan Kale Salad",
    description: "Fresh kale with Parmesan, pine nuts, dried cranberries, and lemon vinaigrette.",
    price: "$12.95",
    image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Lunch",
    dietaryInfo: ["Vegetarian", "Gluten-Free"],
    rating: 4.6
  },
  
  // Dinner Items
  {
    id: 7,
    name: "Pan-Seared Salmon",
    description: "Wild-caught salmon with lemon-dill sauce, served with roasted potatoes and seasonal vegetables.",
    price: "$22.95",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Dinner",
    dietaryInfo: ["Gluten-Free"],
    rating: 4.8,
    featured: true
  },
  {
    id: 8,
    name: "Mushroom Risotto",
    description: "Creamy Arborio rice with wild mushrooms, shallots, white wine, and Parmesan.",
    price: "$18.95",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Dinner",
    dietaryInfo: ["Vegetarian", "Gluten-Free"],
    rating: 4.7
  },
  {
    id: 9,
    name: "Grass-Fed Beef Burger",
    description: "House-ground beef with aged cheddar, caramelized onions, and special sauce on a brioche bun.",
    price: "$16.95",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Dinner",
    dietaryInfo: [],
    rating: 4.9
  },
  
  // Beverages
  {
    id: 10,
    name: "Signature Espresso Blend",
    description: "Our house-roasted beans with notes of chocolate, caramel, and a hint of citrus.",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1510707577719-ae7aecd90b17?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Beverages",
    dietaryInfo: ["Vegan"],
    rating: 4.8,
    featured: true
  },
  {
    id: 11,
    name: "Matcha Latte",
    description: "Premium ceremonial grade matcha whisked with your choice of milk.",
    price: "$5.50",
    image: "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Beverages",
    dietaryInfo: ["Vegan Option", "Dairy-Free Option"],
    rating: 4.6
  },
  {
    id: 12,
    name: "Seasonal Fruit Smoothie",
    description: "Blended fresh fruits with yogurt or plant-based alternative and a touch of honey.",
    price: "$6.95",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Beverages",
    dietaryInfo: ["Vegan Option", "Dairy-Free Option"],
    rating: 4.7,
    isNew: true
  },
  
  // Desserts
  {
    id: 13,
    name: "Dark Chocolate Torte",
    description: "Rich flourless chocolate cake with raspberry coulis and whipped cream.",
    price: "$8.95",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Desserts",
    dietaryInfo: ["Vegetarian", "Gluten-Free"],
    rating: 4.9,
    featured: true
  },
  {
    id: 14,
    name: "Seasonal Fruit Crumble",
    description: "Warm fruit compote with buttery oat topping and vanilla bean ice cream.",
    price: "$7.95",
    image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Desserts",
    dietaryInfo: ["Vegetarian"],
    rating: 4.7
  },
  {
    id: 15,
    name: "Lavender Honey Panna Cotta",
    description: "Silky smooth Italian custard infused with lavender and topped with honey.",
    price: "$7.50",
    image: "https://images.unsplash.com/photo-1604632908151-909e235fe9b3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Desserts",
    dietaryInfo: ["Vegetarian", "Gluten-Free"],
    rating: 4.6,
    isNew: true
  }
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeDietary, setActiveDietary] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState<MenuItemProps[]>(menuItems);
  
  // Extract unique categories
  const categories = Array.from(new Set(menuItems.map(item => item.category)));
  
  // Extract unique dietary options
  const allDietaryOptions: string[] = [];
  menuItems.forEach(item => {
    item.dietaryInfo.forEach(info => {
      if (!allDietaryOptions.includes(info)) {
        allDietaryOptions.push(info);
      }
    });
  });
  
  // Filter menu items
  useEffect(() => {
    let result = menuItems;
    
    // Filter by category
    if (activeCategory !== 'All') {
      result = result.filter(item => item.category === activeCategory);
    }
    
    // Filter by dietary preferences
    if (activeDietary.length > 0) {
      result = result.filter(item => 
        activeDietary.every(diet => item.dietaryInfo.includes(diet))
      );
    }
    
    // Filter by search term
    if (searchTerm.trim() !== '') {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(item => 
        item.name.toLowerCase().includes(searchLower) || 
        item.description.toLowerCase().includes(searchLower) ||
        item.category.toLowerCase().includes(searchLower)
      );
    }
    
    setFilteredItems(result);
  }, [activeCategory, activeDietary, searchTerm]);
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };
  
  const handleDietaryToggle = (option: string) => {
    setActiveDietary(prev => 
      prev.includes(option) 
        ? prev.filter(item => item !== option) 
        : [...prev, option]
    );
  };
  
  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };
  
  const handleClearFilters = () => {
    setActiveCategory('All');
    setActiveDietary([]);
    setSearchTerm('');
  };
  
  return (
    <section className="section-padding bg-cream dark:bg-charcoal-dark">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee dark:text-cream mb-4">
            Our Menu
          </h2>
          <div className="w-20 h-1 bg-terracotta rounded mx-auto mb-6"></div>
          <p className="text-charcoal/80 dark:text-cream/80 max-w-2xl mx-auto">
            Discover our carefully crafted selections made with the finest ingredients. 
            From hearty breakfasts to elegant dinners, we've got something for every palate.
          </p>
        </div>
        
        <MenuFilters 
          categories={categories}
          dietaryOptions={allDietaryOptions}
          activeCategory={activeCategory}
          activeDietary={activeDietary}
          searchTerm={searchTerm}
          onCategoryChange={handleCategoryChange}
          onDietaryToggle={handleDietaryToggle}
          onSearchChange={handleSearchChange}
          onClearFilters={handleClearFilters}
        />
        
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <MenuItem key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-charcoal/80 dark:text-cream/80">
              No menu items match your current filters.
            </p>
            <button 
              className="mt-4 text-terracotta hover:underline"
              onClick={handleClearFilters}
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
