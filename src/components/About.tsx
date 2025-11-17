import { Shield, Users, Award } from "lucide-react";
import LawyerProfile from "./LawyerProfile";
const About = () => {
  return <>
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">About South Rock Law</h2>
            <p className="text-lg text-muted-foreground">
              Your trusted legal partner            
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12 text-foreground">
            <p className="text-center mb-8">
              South Rock Law is a full-service law firm dedicated to providing exceptional legal services to individuals and businesses throughout the Fraser Valley Region of British Columbia. We offer extensive legal expertise with a deep commitment to personalized client service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-ocean-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-ocean" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Trusted Expertise</h3>
              <p className="text-muted-foreground">
                Years of experience serving the local community with integrity and professionalism
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-ocean-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-ocean" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Client-Focused</h3>
              <p className="text-muted-foreground">
                Personalized attention and tailored solutions for every client's unique needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-ocean-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-ocean" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                Committed to achieving the best possible outcomes for our clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <LawyerProfile />
    </>;
};
export default About;