import { Helmet } from "react-helmet";
import Contact from "@/components/Contact";
import PageHero from "@/components/PageHero";
import whiterock9 from "@/assets/whiterock-9.jpg";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | M. Syed Law Corporation - Schedule Your Consultation</title>
        <meta name="description" content="Contact M. Syed Law Corporation for expert legal counsel. Based in South Surrey & White Rock, we serve clients across British Columbia. Schedule a consultation today." />
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
