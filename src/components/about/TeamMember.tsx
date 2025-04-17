
import { Mail, Instagram, Twitter } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
  instagram?: string;
  twitter?: string;
}

const TeamMember = ({ 
  name, 
  role, 
  bio, 
  image, 
  email, 
  instagram, 
  twitter 
}: TeamMemberProps) => {
  return (
    <div className="bg-white dark:bg-charcoal rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg group">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-coffee dark:text-cream">{name}</h3>
        <p className="text-terracotta font-montserrat font-medium mb-4">{role}</p>
        <p className="text-charcoal/80 dark:text-cream/80 mb-4">{bio}</p>
        
        <div className="flex space-x-4">
          {email && (
            <a 
              href={`mailto:${email}`} 
              className="text-coffee dark:text-cream hover:text-terracotta dark:hover:text-terracotta transition-colors"
              aria-label={`Email ${name}`}
            >
              <Mail size={20} />
            </a>
          )}
          
          {instagram && (
            <a 
              href={instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-coffee dark:text-cream hover:text-terracotta dark:hover:text-terracotta transition-colors"
              aria-label={`${name}'s Instagram`}
            >
              <Instagram size={20} />
            </a>
          )}
          
          {twitter && (
            <a 
              href={twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-coffee dark:text-cream hover:text-terracotta dark:hover:text-terracotta transition-colors"
              aria-label={`${name}'s Twitter`}
            >
              <Twitter size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
