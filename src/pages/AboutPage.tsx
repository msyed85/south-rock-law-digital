import { Helmet } from "react-helmet";
import About from "@/components/About";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | South Rock Law - Experienced Legal Counsel in BC</title>
        <meta name="description" content="Learn about South Rock Law's experienced legal team serving White Rock and South Surrey with trusted expertise, client-focused service, and commitment to excellence." />
      </Helmet>
      <div className="min-h-screen pt-24">
        <About />
      </div>
    </>
  );
};

export default AboutPage;
