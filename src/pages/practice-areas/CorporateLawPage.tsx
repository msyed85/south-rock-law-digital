import { Helmet } from "react-helmet";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import whiterock4 from "@/assets/whiterock-4.jpg";

const faqs = [
  { q: "What corporate legal services do you offer?", a: "We assist with business formation, corporate governance, shareholder agreements, mergers and acquisitions, reorganizations, and general corporate advisory services." },
  { q: "Can you help with incorporating a new business in BC?", a: "Yes. We guide clients through the entire incorporation process including name approval, articles of incorporation, shareholder agreements, and initial corporate resolutions." },
  { q: "Do you assist with corporate compliance?", a: "Absolutely. We help businesses maintain proper corporate records, annual filings, director resolutions, and ensure compliance with the BC Business Corporations Act." },
];

const CorporateLawPage = () => (
  <>
    <Helmet>
      <title>Corporate Lawyer | South Rock Law — Surrey & White Rock</title>
      <meta name="description" content="Corporate law services in South Surrey & White Rock. South Rock Law helps businesses with incorporation, governance, agreements, and transactions across BC." />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      })}</script>
    </Helmet>
    <div className="min-h-screen">
      <PageHero title="Corporate Law" subtitle="Building strong legal foundations for your business" backgroundImage={whiterock4} />
      <article className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none text-foreground mb-16">
              <p>Whether you're launching a startup or managing an established enterprise, sound corporate legal counsel is essential. South Rock Law provides comprehensive corporate law services designed to protect your business interests and support growth.</p>
              <p>We work closely with business owners, directors, and stakeholders to structure transactions, draft agreements, and navigate the complexities of corporate governance with clarity and confidence.</p>
              <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Services Include</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>Business incorporation and organization</li>
                <li>Shareholder agreements and partnership structures</li>
                <li>Corporate governance and compliance</li>
                <li>Mergers, acquisitions, and reorganizations</li>
                <li>Director and officer advisory services</li>
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

export default CorporateLawPage;
