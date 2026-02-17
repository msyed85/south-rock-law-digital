import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote: "South Rock Law handled our real estate transaction with exceptional professionalism. Muhammad was thorough, responsive, and made the entire process seamless.",
    author: "Client",
    context: "Real Estate Transaction",
  },
  {
    quote: "I felt truly heard and understood throughout my case. The attention to detail and genuine care for my situation made all the difference in the outcome.",
    author: "Client",
    context: "Civil Litigation",
  },
  {
    quote: "Setting up our corporate structure felt overwhelming, but South Rock Law simplified everything and provided clear, practical advice every step of the way.",
    author: "Client",
    context: "Corporate & Commercial Law",
  },
];

const Testimonials = () => {
  return (
    <section aria-labelledby="testimonials-heading" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We take pride in the trust our clients place in us
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <Card className="h-full border-border/50 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 flex flex-col h-full">
                  <Quote className="text-accent mb-4 shrink-0" size={32} />
                  <blockquote className="text-foreground leading-relaxed flex-1 mb-6 italic">
                    "{t.quote}"
                  </blockquote>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-primary">{t.author}</p>
                    <p className="text-sm text-muted-foreground">{t.context}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
