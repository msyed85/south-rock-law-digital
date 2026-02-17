import { Link } from "react-router-dom";
import logo from "@/assets/south-rock-law-logo.png";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer role="contentinfo" className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="South Rock Law"
              width={168}
              height={112}
              loading="lazy"
              className="h-24 md:h-28 mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 text-sm mb-4">
              *a Law Corporation
            </p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your local firm in South Surrey & White Rock — proudly serving all of BC.
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Practice Areas</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/services/litigation" className="hover:text-accent transition-colors">Litigation</Link></li>
              <li><Link to="/services/corporate-law" className="hover:text-accent transition-colors">Corporate Law</Link></li>
              <li><Link to="/services/commercial-law" className="hover:text-accent transition-colors">Commercial Law</Link></li>
              <li><Link to="/services/wills-estate-planning" className="hover:text-accent transition-colors">Wills & Estate Planning</Link></li>
              <li><Link to="/services/real-estate" className="hover:text-accent transition-colors">Real Estate</Link></li>
              <li><Link to="/services/notarization" className="hover:text-accent transition-colors">Notarization Services</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <span>404-1688 152 St<br />Surrey, BC, V4A 4N2</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent shrink-0" />
                <a href="tel:604-449-7705" className="hover:text-accent transition-colors">604-449-7705</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent shrink-0" />
                <span>Fax: 604-449-7726</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent shrink-0" />
                <a href="mailto:info@southrocklaw.ca" className="hover:text-accent transition-colors">info@southrocklaw.ca</a>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a href="https://www.linkedin.com/company/south-rock-law" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Google Maps */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Our Office</h4>
            <div className="rounded-lg overflow-hidden border border-primary-foreground/20">
              <iframe
                title="South Rock Law Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.8!2d-122.8012!3d49.0452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485dc0323!2s404-1688+152+St%2C+Surrey%2C+BC+V4A+4N2!5e0!3m2!1sen!2sca!4v1700000000000"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70 gap-4">
          <p>&copy; {new Date().getFullYear()} South Rock Law. All rights reserved.</p>
          <nav className="flex gap-6">
            <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
            <Link to="/about" className="hover:text-accent transition-colors">About</Link>
            <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
