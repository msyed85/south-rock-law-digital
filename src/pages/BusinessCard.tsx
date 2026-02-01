import { Mail, Phone, MapPin, Globe, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import logo from "@/assets/south-rock-law-logo.png";

const BusinessCard = () => {
  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Syed;Muhammad;;;
FN:Muhammad Syed
ORG:South Rock Law
TITLE:Barrister and Solicitor
TEL;TYPE=WORK,VOICE:+1-604-449-7705
TEL;TYPE=WORK,FAX:+1-604-449-7726
EMAIL;TYPE=WORK:info@southrocklaw.ca
ADR;TYPE=WORK:;;404-1688 152 St;Surrey;BC;V4A 4N2;Canada
URL:https://www.southrocklaw.ca
NOTE:Civil Litigation | Corporate & Commercial Law | Real Estate Law | Wills & Estate Planning | Notarization Services
END:VCARD`;

    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "muhammad-syed-south-rock-law.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const practiceAreas = [
    "Civil Litigation",
    "Corporate & Commercial Law",
    "Real Estate Law",
    "Wills & Estate Planning",
    "Notarization Services"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-md overflow-hidden shadow-2xl border-0">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-center">
          <img 
            src={logo} 
            alt="South Rock Law" 
            className="h-16 mx-auto mb-4 brightness-0 invert"
          />
          <p className="text-primary-foreground/80 text-xs tracking-wider uppercase">
            *a Law Corporation
          </p>
        </div>

        {/* Profile Section */}
        <div className="relative px-6 pb-6">
          <div className="flex justify-center -mt-12 mb-4">
            <Avatar className="w-24 h-24 border-4 border-background shadow-lg">
              <AvatarFallback className="bg-accent text-accent-foreground text-2xl font-bold">
                MS
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-primary">Muhammad Syed</h1>
            <p className="text-muted-foreground font-medium">Barrister and Solicitor</p>
          </div>

          {/* Contact Information */}
          <div className="space-y-3 mb-6">
            <a 
              href="tel:604-449-7705" 
              className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Phone size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Phone</p>
                <p className="text-foreground font-medium">604-449-7705</p>
              </div>
            </a>

            <a 
              href="mailto:info@southrocklaw.ca" 
              className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Mail size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Email</p>
                <p className="text-foreground font-medium">info@southrocklaw.ca</p>
              </div>
            </a>

            <a 
              href="https://maps.google.com/?q=404-1688+152+St,+Surrey,+BC+V4A+4N2" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <MapPin size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Address</p>
                <p className="text-foreground font-medium">404-1688 152 St, Surrey, BC</p>
              </div>
            </a>

            <a 
              href="https://www.southrocklaw.ca" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Globe size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Website</p>
                <p className="text-foreground font-medium">www.southrocklaw.ca</p>
              </div>
            </a>
          </div>

          {/* Practice Areas */}
          <div className="mb-6">
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3 text-center">Practice Areas</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {practiceAreas.map((area) => (
                <span 
                  key={area} 
                  className="px-3 py-1 bg-primary/5 text-primary rounded-full text-xs font-medium border border-primary/10"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Save Contact Button */}
          <Button 
            onClick={handleDownloadVCard}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            size="lg"
          >
            <Download size={18} className="mr-2" />
            Save Contact
          </Button>
        </div>

        {/* Footer */}
        <div className="bg-primary/5 px-6 py-4 text-center">
          <p className="text-xs text-muted-foreground">
            Your local firm in South Surrey & White Rock — proudly serving all of BC
          </p>
        </div>
      </Card>
    </div>
  );
};

export default BusinessCard;
