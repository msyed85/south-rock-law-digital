import { Helmet } from "react-helmet";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | South Rock Law - Schedule Your Consultation</title>
        <meta name="description" content="Contact South Rock Law for expert legal counsel in White Rock and South Surrey. Schedule a consultation for litigation, corporate law, real estate, or estate planning services." />
      </Helmet>
      <div className="min-h-screen pt-24">
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
