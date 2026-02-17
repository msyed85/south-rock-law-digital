import { Shield, Users, Award, Mail, Phone, GraduationCap, Scale } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  const practiceAreas = [
    "Civil Litigation",
    "Corporate & Commercial Law",
    "Real Estate Law",
    "Wills & Estate Planning",
    "Notarization Services"
  ];

  return (
    <article id="about" aria-labelledby="about-heading" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 id="about-heading" className="text-4xl md:text-5xl font-bold text-primary mb-4">About South Rock Law<sup className="text-accent">*</sup></h1>
              <p className="text-lg text-muted-foreground">
                The Local Firm for South Surrey & White Rock — Serving All of BC
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="prose prose-lg max-w-none mb-12 text-foreground">
              <p className="text-center mb-8">
                South Rock Law is a full-service law firm based in South Surrey & White Rock, dedicated to providing exceptional legal services to individuals and businesses throughout British Columbia. We combine local expertise with province-wide service, offering personalized attention and trusted counsel to clients across BC.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Shield, title: "Trusted Expertise", desc: "Years of experience serving the local community with integrity and professionalism" },
              { icon: Users, title: "Client-Focused", desc: "Personalized attention and tailored solutions for every client's unique needs" },
              { icon: Award, title: "Excellence", desc: "Committed to achieving the best possible outcomes for our clients" },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.15}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-ocean-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-ocean" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Lawyer Profile Section */}
          <div className="mt-24">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet Our Lawyer</h2>
                <div className="w-24 h-1 bg-accent mx-auto"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="overflow-hidden border-border/50 shadow-lg">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Photo Column */}
                    <div className="bg-primary/5 p-8 flex flex-col items-center justify-center">
                      <Avatar className="w-40 h-40 mb-6 border-4 border-accent shadow-lg">
                        <AvatarFallback className="bg-primary text-primary-foreground text-4xl font-bold">
                          MS
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-2xl font-bold text-primary text-center">Muhammad Syed</h3>
                      <p className="text-muted-foreground font-medium text-center">Barrister and Solicitor</p>
                      
                      {/* Contact Info */}
                      <div className="mt-6 space-y-3 w-full">
                        <a 
                          href="mailto:info@southrocklaw.ca" 
                          className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors justify-center"
                        >
                          <Mail size={18} className="text-accent" />
                          <span className="text-sm">info@southrocklaw.ca</span>
                        </a>
                        <a 
                          href="tel:604-449-7705" 
                          className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors justify-center"
                        >
                          <Phone size={18} className="text-accent" />
                          <span className="text-sm">604-449-7705</span>
                        </a>
                      </div>
                    </div>

                    {/* Details Column */}
                    <div className="md:col-span-2 p-8">
                      {/* Bar Admissions */}
                      <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                          <Scale size={20} className="text-accent" />
                          <h4 className="text-lg font-semibold text-primary">Bar Admission</h4>
                        </div>
                        <p className="text-muted-foreground">Called to the Bar of British Columbia, 2023</p>
                        <p className="text-muted-foreground text-sm mt-1">Member, Law Society of British Columbia</p>
                      </div>

                      {/* Education */}
                      <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                          <GraduationCap size={20} className="text-accent" />
                          <h4 className="text-lg font-semibold text-primary">Education</h4>
                        </div>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                            <span>Master of Law (LL.M.) in International Development, University of Sydney</span>
                          </li>
                        </ul>
                      </div>

                      {/* Practice Areas */}
                      <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                          <Scale size={20} className="text-accent" />
                          <h4 className="text-lg font-semibold text-primary">Practice Areas</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {practiceAreas.map((area) => (
                            <span 
                              key={area} 
                              className="px-3 py-1.5 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium border border-accent/20"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Profile Bio */}
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-4">Profile</h4>
                        <div className="text-muted-foreground space-y-4 leading-relaxed">
                          <p>
                            Muhammad Syed is a dedicated lawyer with a deep commitment to integrity, clarity, and client-centered advocacy. With a foundation built on both domestic and international legal education, he brings a thoughtful and strategic approach to each case, ensuring that clients' interests are protected with precision and care.
                          </p>
                          <p>
                            Known for his approachable yet professional demeanor, Muhammad believes that law should not only resolve conflicts but also empower individuals and businesses to make informed decisions. His practice reflects a balance of rigor, ethics, and practical insight, whether he is guiding clients through complex civil litigation, corporate transactions, real estate matters, or estate planning.
                          </p>
                          <p>
                            Muhammad's goal is to provide legal services that are not only effective but also grounded in trust and transparency. He values open communication and works closely with clients to navigate the legal process with confidence and clarity. Based in South Surrey & White Rock, he proudly serves clients across British Columbia through volunteer work, civic engagement, and support for community initiatives.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            {/* Footnote */}
            <p className="text-sm text-muted-foreground mt-6 text-center">
              <sup>*</sup> a Law Corporation
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default About;
