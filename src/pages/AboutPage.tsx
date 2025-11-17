import { Helmet } from "react-helmet";
import About from "@/components/About";
import PageHero from "@/components/PageHero";
import whiterock8 from "@/assets/whiterock-8.jpg";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | South Rock Law - Experienced Legal Counsel in BC</title>
        <meta name="description" content="Learn about South Rock Law's experienced legal team serving White Rock and South Surrey with trusted expertise, client-focused service, and commitment to excellence." />
      </Helmet>
      <div className="min-h-screen">
        <PageHero 
          title="About South Rock Law"
          subtitle="Trusted legal partners committed to excellence and integrity"
          backgroundImage={whiterock8}
        />
        <About />
      </div>
    </>
  );
};

export default AboutPage;
