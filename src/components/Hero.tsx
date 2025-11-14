import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
          Trusted Legal Counsel
        </h2>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
          Serving White Rock and South Surrey with expertise in litigation, corporate law, real estate, and more
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8"
            >
              Schedule Consultation
            </Button>
          </Link>
          <Link to="/services">
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8"
            >
              Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
