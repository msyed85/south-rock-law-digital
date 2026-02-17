import { Helmet } from "react-helmet";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import whiterock6 from "@/assets/whiterock-6.jpg";

const faqs = [
  { q: "Why do I need a will?", a: "A will ensures your assets are distributed according to your wishes, appoints guardians for minor children, and can minimize potential disputes among beneficiaries. Without a will, BC's intestacy laws determine how your estate is divided." },
  { q: "What is a power of attorney?", a: "A power of attorney is a legal document that authorizes someone you trust to manage your financial or legal affairs if you become unable to do so yourself." },
  { q: "How often should I update my will?", a: "We recommend reviewing your will every 3-5 years, or whenever you experience major life changes such as marriage, divorce, the birth of a child, or significant changes in assets." },
];

const WillsEstatePage = () => (
  <>
    <Helmet>
      <title>Wills & Estate Planning Lawyer | South Rock Law — Surrey & White Rock</title>
      <meta name="description" content="Wills and estate planning services in South Surrey & White Rock. Protect your legacy with personalized will drafting, powers of attorney, and estate administration." />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      })}</script>
    </Helmet>
    <div className="min-h-screen">
      <PageHero title="Wills & Estate Planning" subtitle="Thoughtful planning to protect your legacy" backgroundImage={whiterock6} />
      <article className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none text-foreground mb-16">
              <p>Planning for the future is one of the most important steps you can take to protect your loved ones. South Rock Law provides compassionate and thorough estate planning services to ensure your wishes are clearly documented and legally enforceable.</p>
              <p>We guide you through every aspect of estate planning, from drafting wills and powers of attorney to advising on estate administration and probate matters.</p>
              <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Services Include</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>Will drafting and updates</li>
                <li>Powers of attorney (property and personal care)</li>
                <li>Representation agreements</li>
                <li>Estate administration and probate</li>
                <li>Beneficiary designations and trust advice</li>
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

export default WillsEstatePage;
