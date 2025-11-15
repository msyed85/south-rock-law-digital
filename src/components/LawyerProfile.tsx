import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const LawyerProfile = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Meet Our Legal Team
          </h2>
          
          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-4xl font-bold text-primary">SR</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Photo Coming Soon</p>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-1">
                      [Attorney Name]
                    </h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      Founding Partner
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Mail className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold text-sm text-muted-foreground">Email</p>
                        <a href="mailto:info@southrocklaw.ca" className="text-primary hover:underline">
                          info@southrocklaw.ca
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold text-sm text-muted-foreground">Phone</p>
                        <a href="tel:604-449-7705" className="text-primary hover:underline">
                          604-449-7705
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-primary mb-3">Practice Areas</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Civil Litigation</li>
                      <li>• Corporate & Commercial Law</li>
                      <li>• Real Estate Law</li>
                      <li>• Wills & Estate Planning</li>
                      <li>• Notarization Services</li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-primary mb-3">Education & Bar Admission</h4>
                    <p className="text-muted-foreground">
                      [Law School Name]<br />
                      Called to the Bar: [Year]<br />
                      Law Society of British Columbia
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-primary mb-3">About</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      With extensive experience serving clients throughout White Rock and South Surrey, 
                      our legal team is dedicated to providing personalized, professional legal services 
                      tailored to each client's unique needs. We pride ourselves on building lasting 
                      relationships with our clients based on trust, integrity, and results.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LawyerProfile;
