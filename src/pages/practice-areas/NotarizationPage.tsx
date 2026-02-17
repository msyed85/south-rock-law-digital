import { Helmet } from "react-helmet";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import whiterock1 from "@/assets/whiterock-1.jpg";

const faqs = [
  { q: "What documents can be notarized?", a: "We notarize a wide variety of documents including affidavits, statutory declarations, certified true copies, powers of attorney, and international documents requiring authentication." },
  { q: "Do I need an appointment for notarization?", a: "While walk-ins may be accommodated, we recommend scheduling an appointment to ensure prompt service and to confirm any specific requirements for your documents." },
  { q: "What should I bring for notarization?", a: "Bring the original documents to be notarized, valid government-issued photo identification, and any additional documents that may be referenced. Do not sign the documents in advance." },
];

const NotarizationPage = () => (
  <>
    <Helmet>
      <title>Notarization Services | South Rock Law — Surrey & White Rock</title>
      <meta name="description" content="Professional notarization services in South Surrey & White Rock. Affidavits, statutory declarations, certified copies, and more. South Rock Law serves all of BC." />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      })}</script>
    </Helmet>
    <div className="min-h-screen">
      <PageHero title="Notarization Services" subtitle="Professional document certification and authentication" backgroundImage={whiterock1} />
      <article className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none text-foreground mb-16">
              <p>South Rock Law provides professional notarization services for individuals and businesses throughout British Columbia. Our notarization services ensure your documents meet legal requirements and are properly authenticated.</p>
              <p>Whether you need an affidavit commissioned, a statutory declaration witnessed, or certified true copies prepared, we offer efficient and reliable notarization services.</p>
              <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Services Include</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>Affidavits and statutory declarations</li>
                <li>Certified true copies</li>
                <li>Powers of attorney execution</li>
                <li>International document authentication</li>
                <li>Witness and commissioner services</li>
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

export default NotarizationPage;
