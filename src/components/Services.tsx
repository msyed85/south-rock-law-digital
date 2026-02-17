import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Building2, Briefcase, FileText, Home, FileCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Scale,
    title: "Litigation",
    description: "Expert representation in civil disputes, ensuring your rights are protected throughout the legal process.",
    href: "/services/litigation",
  },
  {
    icon: Building2,
    title: "Corporate Law",
    description: "Comprehensive legal support for businesses, from formation to complex corporate transactions.",
    href: "/services/corporate-law",
  },
  {
    icon: Briefcase,
    title: "Commercial Law",
    description: "Strategic guidance for commercial contracts, negotiations, and business operations.",
    href: "/services/commercial-law",
  },
  {
    icon: FileText,
    title: "Wills & Estate Planning",
    description: "Thoughtful planning to protect your legacy and ensure your wishes are honored.",
    href: "/services/wills-estate-planning",
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Full-service real estate legal support for purchases, sales, and property matters.",
    href: "/services/real-estate",
  },
  {
    icon: FileCheck,
    title: "Notarization Services",
    description: "Professional notarization services for documents requiring official certification.",
    href: "/services/notarization",
  },
];

const Services = () => {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <header className="text-center mb-16">
            <h1 id="services-heading" className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Practice Areas</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Based in South Surrey & White Rock, we provide comprehensive legal services to clients across British Columbia
            </p>
          </header>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Link to={service.href} className="block h-full">
                  <article className="h-full border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card rounded-lg group">
                    <Card className="border-0 bg-transparent shadow-none h-full">
                      <CardHeader>
                        <div className="w-12 h-12 bg-ocean-light rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                          <Icon className="text-ocean" size={24} />
                        </div>
                        <CardTitle className="text-xl text-primary flex items-center gap-2">
                          {service.title}
                          <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent" />
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{service.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </article>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
