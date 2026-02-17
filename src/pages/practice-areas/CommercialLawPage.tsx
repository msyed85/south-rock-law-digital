import { Helmet } from "react-helmet";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import whiterock5 from "@/assets/whiterock-5.jpg";

const faqs = [
  { q: "What is commercial law?", a: "Commercial law governs business transactions, contracts, and trade. It covers areas like contract drafting, commercial disputes, supplier agreements, and regulatory compliance." },
  { q: "Can you review and draft business contracts?", a: "Yes. We draft, review, and negotiate a wide range of commercial agreements including supply contracts, service agreements, distribution agreements, and licensing arrangements." },
  { q: "What industries do you serve?", a: "We serve clients across various industries including retail, technology, construction, professional services, and manufacturing throughout British Columbia." },
];

const CommercialLawPage = () => (
  <>
    <Helmet>
      <title>Commercial Lawyer | South Rock Law — Surrey & White Rock</title>
      <meta name="description" content="Commercial law services in South Surrey & White Rock. Contract drafting, negotiations, and business operations guidance for BC businesses." />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      })}</script>
    </Helmet>
    <div className="min-h-screen">
      <PageHero title="Commercial Law" subtitle="Strategic legal guidance for your business operations" backgroundImage={whiterock5} />
      <article className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none text-foreground mb-16">
              <p>Effective commercial legal support is the backbone of successful business operations. At South Rock Law, we help businesses navigate the legal complexities of commercial transactions, contractual relationships, and regulatory requirements.</p>
              <p>From drafting precise contracts to resolving commercial disputes, our goal is to minimize risk and maximize your business potential with clear, practical legal advice.</p>
              <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Services Include</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>Contract drafting, review, and negotiation</li>
                <li>Commercial dispute resolution</li>
                <li>Supplier and vendor agreements</li>
                <li>Licensing and distribution agreements</li>
                <li>Business regulatory compliance</li>
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

export default CommercialLawPage;
