import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

// TODO: Replace with your Formspree endpoint from https://formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you for contacting South Rock Law. We'll be in touch soon."
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <section id="contact" aria-labelledby="contact-heading" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h1 id="contact-heading" className="text-4xl md:text-5xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team for a consultation. We're here to help with your legal needs.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary">Get In Touch</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you shortly</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
                  <div>
                    <label htmlFor="name" className="sr-only">Your Name</label>
                    <Input id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="bg-background" />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email Address</label>
                    <Input id="email" name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="bg-background" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">Phone Number</label>
                    <Input id="phone" name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="bg-background" />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <Textarea id="message" name="message" placeholder="Tell us about your legal needs" value={formData.message} onChange={handleChange} required className="min-h-32 bg-background" />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary">Office Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-ocean mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <p className="text-muted-foreground">404-1688 152 St<br />Surrey, BC, V4A 4N2</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="text-ocean mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">Telephone</p>
                    <p className="text-muted-foreground">604-449-7705</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="text-ocean mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">Fax</p>
                    <p className="text-muted-foreground">604-449-7726</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="text-ocean mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">info@southrocklaw.ca</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-ocean mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">Business Hours</p>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-ocean text-primary-foreground border-none">
              <CardContent className="pt-6">
                <p className="text-center text-lg">
                  "Your local firm in South Surrey & White Rock — proudly serving all of BC"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;