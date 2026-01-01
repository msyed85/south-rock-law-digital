import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/south-rock-law-logo-white.png";
import { useState, useEffect } from "react";

// Import all White Rock images
import whiterock1 from "@/assets/whiterock-1.jpg";
import whiterock2 from "@/assets/whiterock-2.jpg";
import whiterock3 from "@/assets/whiterock-3.jpg";
import whiterock4 from "@/assets/whiterock-4.jpg";
import whiterock5 from "@/assets/whiterock-5.jpg";
import whiterock6 from "@/assets/whiterock-6.jpg";
import whiterock7 from "@/assets/whiterock-7.jpg";
import whiterock8 from "@/assets/whiterock-8.jpg";
import whiterock9 from "@/assets/whiterock-9.jpg";
const backgroundImages = [whiterock1, whiterock2, whiterock3, whiterock4, whiterock5, whiterock6, whiterock7, whiterock8, whiterock9];
const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);
  return <section aria-label="Welcome to South Rock Law" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background carousel */}
      {backgroundImages.map((image, index) => <div key={index} aria-hidden="true" className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000" style={{
      backgroundImage: `url(${image})`,
      opacity: currentImageIndex === index ? 1 : 0,
      zIndex: 0
    }}>
          <div className="absolute inset-0 bg-primary/75" />
        </div>)}
      
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="mb-12 animate-fade-in hover-scale">
          <img 
            src={logo} 
            alt="South Rock Law" 
            width={576}
            height={384}
            loading="eager"
            fetchPriority="high"
            className="h-64 md:h-80 lg:h-96 mx-auto drop-shadow-2xl transition-all duration-500 animate-scale-in" 
          />
        </div>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto font-light">
          Your Trusted Legal Partners            
        </p>
        
        <p className="text-base md:text-lg text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          At South Rock Law, we uphold the highest standards of integrity and professionalism in every aspect of our practice. With expertise in wills and estates, civil litigation, corporate and commercial law, and real estate, we offer strategic counsel rooted in experience and trust. Guided by a deep commitment to serving our community, we strive to protect our clients' interests with diligence, and care.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
              Schedule Consultation
            </Button>
          </Link>
          <Link to="/services">
            <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-lg px-8 py-6 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-none">
              Our Practice Areas
            </Button>
          </Link>
        </div>

        <div className="text-primary-foreground/90 space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <img 
            src={logo} 
            alt="South Rock Law" 
            width={168}
            height={112}
            loading="lazy"
            className="h-24 md:h-28 mx-auto drop-shadow-xl hover-scale transition-all duration-300" 
          />
          <p className="text-lg font-semibold animate-fade-in" style={{ animationDelay: '0.5s' }}>Contact Us Today</p>
          <p className="text-base animate-fade-in" style={{ animationDelay: '0.7s' }}>📞 604-449-7705 | 📧 info@southrocklaw.ca</p>
          <p className="text-sm animate-fade-in" style={{ animationDelay: '0.9s' }}>404-1688 152 St, Surrey, BC, V4A 4N2</p>
        </div>
      </div>
    </section>;
};
export default Hero;