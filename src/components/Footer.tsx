import logo from "@/assets/south-rock-law-logo.png";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img 
                src={logo} 
                alt="South Rock Law" 
                width={168}
                height={112}
                loading="lazy"
                className="h-24 md:h-28 mb-2 brightness-0 invert" 
              />
            </div>
            <p className="text-primary-foreground/80 text-sm">
              *a Law Corporation
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
              <li>404-1688 152 St</li>
              <li>Surrey, BC, V4A 4N2</li>
              <li className="mt-4">Tel: 604-449-7705</li>
              <li>Fax: 604-449-7726</li>
              <li>info@southrocklaw.ca</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} South Rock Law. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;