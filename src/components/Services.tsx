import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Building2, Briefcase, FileText, Home, FileCheck } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Litigation",
    description: "Expert representation in civil disputes, ensuring your rights are protected throughout the legal process.",
  },
  {
    icon: Building2,
    title: "Corporate Law",
    description: "Comprehensive legal support for businesses, from formation to complex corporate transactions.",
  },
  {
    icon: Briefcase,
    title: "Commercial Law",
    description: "Strategic guidance for commercial contracts, negotiations, and business operations.",
  },
  {
    icon: FileText,
    title: "Wills & Estate Planning",
    description: "Thoughtful planning to protect your legacy and ensure your wishes are honored.",
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Full-service real estate legal support for purchases, sales, and property matters.",
  },
  {
    icon: FileCheck,
    title: "Notarization Services",
    description: "Professional notarization services for documents requiring official certification.",
  },
];

const Services = () => {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h1 id="services-heading" className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Practice Areas</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive legal services tailored to meet the diverse needs of our clients in British Columbia
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article 
                key={index} 
                className="border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card rounded-lg"
              >
                <Card className="border-0 bg-transparent shadow-none">
                  <CardHeader>
                    <div className="w-12 h-12 bg-ocean-light rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                      <Icon className="text-ocean" size={24} />
                    </div>
                    <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
