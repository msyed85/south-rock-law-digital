import { Helmet } from "react-helmet";
import Services from "@/components/Services";
import PageHero from "@/components/PageHero";
import whiterock2 from "@/assets/whiterock-2.jpg";

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Legal Services | South Rock Law - White Rock & South Surrey</title>
        <meta name="description" content="Comprehensive legal services including litigation, corporate law, commercial law, wills & estate planning, real estate, and notarization. Based in South Surrey & White Rock, serving all of BC." />
      </Helmet>
      <div className="min-h-screen">
        <PageHero 
          title="Our Legal Services"
          subtitle="Comprehensive legal solutions tailored to your needs"
          backgroundImage={whiterock2}
        />
        <Services />
      </div>
    </>
  );
};

export default ServicesPage;
