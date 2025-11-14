import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/south-rock-law-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="South Rock Law" className="h-12 w-12" />
            <div>
              <h1 className="text-xl font-bold text-primary">South Rock Law</h1>
              <p className="text-xs text-muted-foreground">White Rock • South Surrey</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-accent transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-accent transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-accent transition-colors">
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-accent text-accent-foreground hover:bg-accent/90">
              Get In Touch
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-foreground">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("services")} className="text-left text-foreground hover:text-accent transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("about")} className="text-left text-foreground hover:text-accent transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-left text-foreground hover:text-accent transition-colors">
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
              Get In Touch
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
