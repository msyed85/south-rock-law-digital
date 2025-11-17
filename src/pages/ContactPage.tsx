import { Helmet } from "react-helmet";
import Contact from "@/components/Contact";
import PageHero from "@/components/PageHero";
import whiterock9 from "@/assets/whiterock-9.jpg";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | South Rock Law - Schedule Your Consultation</title>
        <meta name="description" content="Contact South Rock Law for expert legal counsel in White Rock and South Surrey. Schedule a consultation for litigation, corporate law, real estate, or estate planning services." />
      </Helmet>
      <div className="min-h-screen">
        <PageHero 
          title="Get In Touch"
          subtitle="Schedule a consultation with our experienced legal team"
          backgroundImage={whiterock9}
        />
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
