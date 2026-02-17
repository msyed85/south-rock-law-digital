import { Helmet } from "react-helmet";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>South Rock Law | Your Local Firm in South Surrey & White Rock — Serving All of BC</title>
        <meta name="description" content="South Rock Law is your local law firm in South Surrey & White Rock, offering expert legal services in litigation, corporate law, real estate, wills & estate planning across British Columbia." />
      </Helmet>
      <div className="min-h-screen">
        <Hero />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
