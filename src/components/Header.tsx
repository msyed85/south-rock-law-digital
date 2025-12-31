import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/south-rock-law-logo.png";
import logoWhite from "@/assets/south-rock-law-logo-white.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const logoSrc = isHomePage ? logoWhite : logo;
  const logoClass = "h-24 md:h-28";
  const navLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    const baseClass = isHomePage 
      ? "text-lg text-primary-foreground hover:text-accent transition-colors" 
      : "text-lg text-primary hover:text-accent transition-colors";
    return `${baseClass} ${isActive ? 'text-accent font-semibold' : ''}`;
  };
  const mobileButtonClass = isHomePage ? "md:hidden text-primary-foreground" : "md:hidden text-primary";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isHomePage ? 'bg-transparent' : 'bg-background'} backdrop-blur-sm`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 relative">
            <img 
              src={logoSrc} 
              alt="South Rock Law" 
              width={168}
              height={112}
              loading="eager"
              className={logoClass} 
            />
            <span className={`absolute -top-1 -right-2 text-xl font-bold ${isHomePage ? 'text-accent' : 'text-accent'}`}>*</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className={navLinkClass('/')}>
              Home
            </Link>
            <Link to="/services" className={navLinkClass('/services')}>
              Services
            </Link>
            <Link to="/about" className={navLinkClass('/about')}>
              About
            </Link>
            <Link to="/contact" className={navLinkClass('/contact')}>
              Contact
            </Link>
            <Link to="/contact">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Get In Touch
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={mobileButtonClass}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 bg-primary/90 backdrop-blur-sm p-4 rounded">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className={`text-left ${navLinkClass('/')}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              onClick={() => setIsMenuOpen(false)}
              className={`text-left ${navLinkClass('/services')}`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsMenuOpen(false)}
              className={`text-left ${navLinkClass('/about')}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className={`text-left ${navLinkClass('/contact')}`}
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
