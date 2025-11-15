import { Helmet } from "react-helmet";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>South Rock Law | Trusted Legal Services in White Rock & South Surrey, BC</title>
        <meta name="description" content="South Rock Law offers expert legal services in litigation, corporate law, real estate, wills & estate planning, and notarization in White Rock and South Surrey, British Columbia." />
      </Helmet>
      <div className="min-h-screen">
        <Hero />
      </div>
    </>
  );
};

export default Home;
