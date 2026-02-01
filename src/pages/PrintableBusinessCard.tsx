import { Mail, Phone, MapPin, Globe } from "lucide-react";
import logo from "@/assets/south-rock-law-logo.png";

const PrintableBusinessCard = () => {
  const practiceAreas = [
    "Civil Litigation",
    "Corporate & Commercial Law", 
    "Real Estate Law",
    "Wills & Estate Planning",
    "Notarization Services"
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Print button - hidden when printing */}
      <div className="print:hidden fixed top-4 right-4 z-50">
        <button
          onClick={handlePrint}
          className="bg-primary text-primary-foreground px-6 py-2 rounded-lg shadow-lg hover:bg-primary/90 transition-colors font-medium"
        >
          Print Card
        </button>
      </div>

      <div className="min-h-screen bg-background flex items-center justify-center p-8 print:p-0 print:bg-white">
        <div className="print:w-full print:max-w-none">
          {/* Two-sided business card layout */}
          <div className="flex flex-col lg:flex-row gap-8 print:gap-4 print:flex-row print:justify-center">
            
            {/* Front of card */}
            <div className="w-[3.5in] h-[2in] bg-gradient-to-br from-primary to-primary/90 rounded-lg shadow-xl print:shadow-none print:rounded-none flex flex-col justify-between p-6 text-primary-foreground">
              <div>
                <img 
                  src={logo} 
                  alt="South Rock Law" 
                  className="h-14 brightness-0 invert"
                />
                <div className="w-16 h-0.5 bg-accent mt-1 rounded-full" />
                <p className="text-[8px] opacity-70 mt-1">*a Law Corporation</p>
              </div>
              
              <div>
                <h1 className="text-xl font-bold">Muhammad Syed</h1>
                <p className="text-sm opacity-90">Barrister and Solicitor</p>
              </div>
            </div>

            {/* Back of card */}
            <div className="w-[3.5in] h-[2in] bg-card border border-border rounded-lg shadow-xl print:shadow-none print:rounded-none print:border-primary/20 p-4 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <Phone size={12} className="text-accent shrink-0" />
                  <span className="text-xs text-foreground">604-449-7705</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={12} className="text-accent shrink-0" />
                  <span className="text-xs text-foreground">info@southrocklaw.ca</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={12} className="text-accent shrink-0" />
                  <span className="text-xs text-foreground">www.southrocklaw.ca</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={12} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-xs text-foreground leading-tight">
                    404-1688 152 St, Surrey, BC V4A 4N2
                  </span>
                </div>
              </div>

              <div className="border-t border-border pt-2">
                <p className="text-[9px] text-muted-foreground text-center leading-snug">
                  {practiceAreas.join(" • ")}
                </p>
              </div>
            </div>
          </div>

          {/* Instructions - hidden when printing */}
          <div className="mt-8 text-center text-sm text-muted-foreground print:hidden">
            <p>Standard business card size: 3.5" × 2"</p>
            <p className="mt-1">Print on cardstock for best results</p>
          </div>
        </div>
      </div>

      {/* Print-specific styles */}
      <style>{`
        @media print {
          @page {
            size: letter;
            margin: 0.5in;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </>
  );
};

export default PrintableBusinessCard;
