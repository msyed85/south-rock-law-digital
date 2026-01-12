import { Helmet } from "react-helmet";
import About from "@/components/About";
import PageHero from "@/components/PageHero";
import whiterock8 from "@/assets/whiterock-8.jpg";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | SRL - South Rock Law</title>
        <meta name="description" content="Learn about South Rock Law's experienced legal team based in South Surrey & White Rock, providing trusted expertise and client-focused service across British Columbia." />
      </Helmet>
      <div className="min-h-screen">
        <PageHero 
          title="About South Rock Law"
          subtitle="Your trusted legal counsel committed to excellence and integrity"
          backgroundImage={whiterock8}
        />
        <About />
      </div>
    </>
  );
};

export default AboutPage;
