
import AboutSection from '@/components/about/AboutSection';
import TeamMember from '@/components/about/TeamMember';

const About = () => {
  const teamMembers = [
    {
      name: "Mohamed Jabir",
      role: "Founder & Executive Chef",
      bio: "With over 15 years of culinary experience, Mohamed combines his passion for coffee and fine dining to create Brewmoon's unique atmosphere and menu offerings.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "jabirahmedz111@gmail.com",
      instagram: "https://www.linkedin.com/in/mohammed--jabir",
      twitter: "https://twitter.com/mohammedjabir__"
    },
    {
      name: "Sarah Thompson",
      role: "Head Barista",
      bio: "Sarah has been perfecting her craft for 8 years and has won several regional barista competitions. She oversees our coffee program and barista training.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "sarah@example.com",
      instagram: "#",
      twitter: "#"
    },
    {
      name: "David Chen",
      role: "Pastry Chef",
      bio: "With formal training from the Culinary Institute of America, David brings artistry and innovation to our dessert and pastry offerings.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "david@example.com",
      instagram: "#"
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager",
      bio: "Emily ensures that every aspect of Brewmoon runs smoothly, from scheduling to inventory management. Her attention to detail elevates the customer experience.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "emily@example.com",
      twitter: "#"
    }
  ];
  
  return (
    <main className="pt-24">
      <AboutSection />
      
      <section className="section-padding bg-cream dark:bg-charcoal-dark">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-coffee dark:text-cream mb-4">
              Meet Our Team
            </h2>
            <div className="w-20 h-1 bg-terracotta rounded mx-auto mb-6"></div>
            <p className="text-charcoal/80 dark:text-cream/80 max-w-2xl mx-auto">
              The passionate individuals who make the Brewmoon experience possible every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
