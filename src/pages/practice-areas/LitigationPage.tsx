import { Helmet } from "react-helmet";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import whiterock3 from "@/assets/whiterock-3.jpg";

const faqs = [
  { q: "What types of litigation does South Rock Law handle?", a: "We handle a wide range of civil disputes including breach of contract, property disputes, employment matters, debt recovery, and other civil claims throughout British Columbia." },
  { q: "How long does a typical litigation case take?", a: "Timelines vary significantly depending on complexity. Simple matters may resolve in weeks through negotiation, while complex cases proceeding to trial can take a year or more. We always pursue efficient resolution strategies." },
  { q: "What should I bring to my initial litigation consultation?", a: "Bring any relevant documents such as contracts, correspondence, court filings, and a timeline of events. This helps us assess your case quickly and provide informed advice." },
];

const LitigationPage = () => (
  <>
    <Helmet>
      <title>Civil Litigation Lawyer | South Rock Law — Surrey & White Rock</title>
      <meta name="description" content="Experienced civil litigation lawyer in South Surrey & White Rock. South Rock Law provides strategic representation in disputes, trials, and settlements across BC." />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      })}</script>
    </Helmet>
    <div className="min-h-screen">
      <PageHero title="Civil Litigation" subtitle="Strategic advocacy to protect your rights and interests" backgroundImage={whiterock3} />
      <article className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none text-foreground mb-16">
              <p>At South Rock Law, we understand that legal disputes can be stressful and disruptive. Our litigation practice is built on a commitment to clear communication, thorough preparation, and strategic advocacy designed to achieve the best possible outcome for our clients.</p>
              <p>We represent individuals and businesses in a broad range of civil disputes, from breach of contract and property conflicts to employment matters and debt recovery. Whether negotiating a settlement or presenting your case at trial, we bring diligence and determination to every matter.</p>
              <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Our Approach</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>Thorough case assessment and honest evaluation of your options</li>
                <li>Strategic negotiation to seek efficient, cost-effective resolutions</li>
                <li>Rigorous trial preparation when litigation is necessary</li>
                <li>Clear, regular communication throughout the process</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-secondary rounded-lg p-8 mb-16">
              <h2 className="text-2xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-primary mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </article>
    </div>
  </>
);

export default LitigationPage;
