import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/south-rock-law-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="South Rock Law" className="h-20 bg-primary p-2 rounded" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-foreground hover:text-accent transition-colors ${location.pathname === '/' ? 'text-accent font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`text-foreground hover:text-accent transition-colors ${location.pathname === '/services' ? 'text-accent font-semibold' : ''}`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`text-foreground hover:text-accent transition-colors ${location.pathname === '/about' ? 'text-accent font-semibold' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-foreground hover:text-accent transition-colors ${location.pathname === '/contact' ? 'text-accent font-semibold' : ''}`}
            >
              Contact
            </Link>
            <Link to="/contact">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Get In Touch
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-foreground">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className={`text-left text-foreground hover:text-accent transition-colors ${location.pathname === '/' ? 'text-accent font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              onClick={() => setIsMenuOpen(false)}
              className={`text-left text-foreground hover:text-accent transition-colors ${location.pathname === '/services' ? 'text-accent font-semibold' : ''}`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsMenuOpen(false)}
              className={`text-left text-foreground hover:text-accent transition-colors ${location.pathname === '/about' ? 'text-accent font-semibold' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className={`text-left text-foreground hover:text-accent transition-colors ${location.pathname === '/contact' ? 'text-accent font-semibold' : ''}`}
            >
              Contact
            </Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
                Get In Touch
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
