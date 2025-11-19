import { MapPin, Phone, Instagram, Facebook, Mail, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission and send data to Supabase
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("messages") // your table name
      .insert([{ name, email, message }]);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      console.error(error);
    } else {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  // Contact info and social links
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      content:
        "61, Challenge/Molete Road, Opposite Baptist Church, Idi-Odo, Challenge Ibadan, Oyo State, Nigeria.",
      link: null,
    },
    {
      icon: Phone,
      title: "Phone / WhatsApp",
      content: "+234 813 610 9441",
      link: "https://wa.me/2348136109441",
    },
    {
      icon: Mail,
      title: "Email",
      content: "ashestobeautyfoundation@gmail.com",
      link: "mailto:ashestobeautyfoundation@gmail.com",
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      title: "Instagram",
      handle: "@ashes_to_beauty",
      link: "https://instagram.com/ashes_to_beauty",
    },
    {
      icon: Facebook,
      title: "Facebook",
      handle: "ashestobeautyfoundation",
      link: "https://facebook.com/ashestobeautyfoundation",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90">
              Get in touch with us to learn more about our work or to find out how you can help transform lives.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
              <Card>
                <CardContent className="p-6">
                  <form
  action="https://formspree.io/f/xeonevrr"  // ← Use your Formspree form URL here
  method="POST"
  className="space-y-4"
>
  <input
    type="text"
    name="name"
    placeholder="Your name"
    className="w-full p-2 border rounded"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Your email"
    className="w-full p-2 border rounded"
    required
  />

  <textarea
    name="message"
    placeholder="Your message"
    className="w-full p-2 border rounded"
    required
  ></textarea>

  <button
    type="submit"
    className="bg-blue-500 text-white px-4 py-2 rounded"
  >
    Send Message
  </button>
</form>

                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Get In Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="border-2 hover:border-primary transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-gradient-to-br from-accent to-secondary">
                          <info.icon className="h-6 w-6 text-accent-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.title}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                      >
                        <social.icon className="h-5 w-5" />
                        <span className="font-medium">{social.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 bg-gradient-to-br from-gold/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block p-4 rounded-full bg-gradient-to-r from-gold to-primary mb-4">
                <Wallet className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">Support Our Mission</h2>
              <p className="text-lg text-foreground">
                Your generous donations help us transform lives and bring hope to those in need.
              </p>
            </div>

            <Card className="border-2 border-gold/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-primary mb-6 text-center">Bank Account Details</h3>
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Bank Name</p>
                    <p className="text-lg font-medium text-foreground">[Bank Name]</p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Account Name</p>
                    <p className="text-lg font-medium text-foreground">[Account Name]</p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Account Number</p>
                    <p className="text-lg font-medium text-foreground">[Account Number]</p>
                  </div>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-6 italic">
                  Every contribution makes a difference in someone's life
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map or Additional CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Visit Us</h2>
            <p className="text-lg text-foreground mb-6">
              We welcome visitors to our office in Ibadan. Come see firsthand the work we're doing and how you can be part of it.
            </p>
            <p className="text-foreground font-medium">
              61, Challenge/Molete Road, Opposite Baptist Church, Idi-Odo, Challenge Ibadan, Oyo State, Nigeria.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;