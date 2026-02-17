import { Helmet } from "react-helmet";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import whiterock7 from "@/assets/whiterock-7.jpg";

const faqs = [
  { q: "What real estate services do you provide?", a: "We handle residential and commercial purchases and sales, mortgage refinancing, title transfers, property development agreements, and landlord-tenant matters." },
  { q: "Do I need a lawyer for a real estate transaction in BC?", a: "While not legally required, having a lawyer review your purchase or sale agreement, conduct title searches, and handle closing documents protects your interests and ensures a smooth transaction." },
  { q: "How much does a real estate closing cost?", a: "Costs vary depending on the complexity of the transaction. We provide transparent fee estimates at the outset so there are no surprises. Contact us for a quote specific to your situation." },
];

const RealEstatePage = () => (
  <>
    <Helmet>
      <title>Real Estate Lawyer | South Rock Law — Surrey & White Rock</title>
      <meta name="description" content="Real estate law services in South Surrey & White Rock. Purchase, sale, and mortgage transactions handled with care by South Rock Law. Serving all of BC." />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      })}</script>
    </Helmet>
    <div className="min-h-screen">
      <PageHero title="Real Estate Law" subtitle="Full-service legal support for property matters" backgroundImage={whiterock7} />
      <article className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none text-foreground mb-16">
              <p>Real estate transactions are among the most significant financial decisions you'll make. South Rock Law provides comprehensive real estate legal services to ensure your property matters are handled with precision and care.</p>
              <p>From reviewing contracts of purchase and sale to managing closings and title transfers, we guide you through every step of the process with clarity and attention to detail.</p>
              <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Services Include</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>Residential purchases and sales</li>
                <li>Commercial real estate transactions</li>
                <li>Mortgage refinancing and transfers</li>
                <li>Title searches and insurance</li>
                <li>Property development agreements</li>
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="bg-secondary rounded-lg p-8 mb-16">
              <h2 className="text-2xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i}><h3 className="font-semibold text-primary mb-2">{faq.q}</h3><p className="text-muted-foreground">{faq.a}</p></div>
                ))}
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="text-center">
              <Link to="/contact"><Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">Schedule a Consultation</Button></Link>
            </div>
          </AnimatedSection>
        </div>
      </article>
    </div>
  </>
);

export default RealEstatePage;
