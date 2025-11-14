import { Helmet } from "react-helmet";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Legal Services | South Rock Law - White Rock & South Surrey</title>
        <meta name="description" content="Comprehensive legal services including litigation, corporate law, commercial law, wills & estate planning, real estate, and notarization services in White Rock and South Surrey, BC." />
      </Helmet>
      <div className="min-h-screen pt-24">
        <Services />
      </div>
    </>
  );
};

export default ServicesPage;
