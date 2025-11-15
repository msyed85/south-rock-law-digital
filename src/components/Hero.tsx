import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/south-rock-law-logo.png";
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
        <div className="mb-8 animate-fade-in">
          <img 
            src={logo} 
            alt="South Rock Law" 
            className="h-32 md:h-48 mx-auto mb-6 brightness-0 invert drop-shadow-2xl"
          />
          <h1 className="text-6xl md:text-8xl font-bold text-primary-foreground mb-4">
            South Rock Law
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-3xl mx-auto font-light">
          Your Trusted Legal Partners in White Rock & South Surrey
        </p>
        
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
          Experienced counsel in litigation, corporate law, real estate, wills & estate planning
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
            >
              Schedule Consultation
            </Button>
          </Link>
          <Link to="/services">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6"
            >
              Our Practice Areas
            </Button>
          </Link>
        </div>

        <div className="text-primary-foreground/90 space-y-2">
          <p className="text-lg font-semibold">Contact Us Today</p>
          <p className="text-base">📞 604-449-7705 | 📧 info@southrocklaw.ca</p>
          <p className="text-sm">404-1688 152 St, Surrey, BC, V4A 4N2</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
