import logo from "@/assets/south-rock-law-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img src={logo} alt="South Rock Law" className="h-12 mb-2 brightness-0 invert" />
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Trusted legal counsel serving White Rock and South Surrey, British Columbia
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Practice Areas</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Litigation</li>
              <li>Corporate Law</li>
              <li>Commercial Law</li>
              <li>Wills & Estate Planning</li>
              <li>Real Estate</li>
              <li>Notarization Services</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>White Rock, South Surrey</li>
              <li>British Columbia, Canada</li>
              <li className="mt-4">(604) XXX-XXXX</li>
              <li>info@southrocklaw.ca</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} South Rock Law. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
