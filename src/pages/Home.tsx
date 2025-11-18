import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, GraduationCap, HandHeart, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ProgramCard from "@/components/ProgramCard";
import heroImage from "@/assets/hero-community.jpg";
import empowermentImg from "@/assets/empowerment.jpg";
import needyImg from "@/assets/needy.jpg";
import widowsImg from "@/assets/widows.jpg";
import orphansImg from "@/assets/orphans.jpg";

const Home = () => {
  const programs = [
    {
      title: "Empowerment",
      description: "We provide skills training, resources, and support to help individuals become self-sufficient and build sustainable livelihoods.",
      icon: GraduationCap,
      image: empowermentImg,
    },
    {
      title: "Support for the Needy",
      description: "We offer essential aid including food, clothing, and shelter to those facing hardship, ensuring no one is left behind.",
      icon: Heart,
      image: needyImg,
    },
    {
      title: "Widows/Widower Support",
      description: "Dedicated programs providing emotional, financial, and practical support to widows and widowers in their time of need.",
      icon: HandHeart,
      image: widowsImg,
    },
    {
      title: "Orphans Care",
      description: "Comprehensive care for orphaned children including education, healthcare, and a loving environment to thrive.",
      icon: Users,
      image: orphansImg,
    },
  ];

  // ========== ADD YOUR TESTIMONIALS HERE ==========
  // Replace these placeholder testimonials with real stories
  const testimonials = [
    {
      name: "[Person Name 1]",
      story: "[Add their testimonial story here - describe how the foundation helped them]",
      program: "[Which program helped them - e.g., Empowerment, Widows Support, etc.]",
    },
    {
      name: "[Person Name 2]",
      story: "[Add their testimonial story here - describe how the foundation helped them]",
      program: "[Which program helped them - e.g., Empowerment, Widows Support, etc.]",
    },
    {
      name: "[Person Name 3]",
      story: "[Add their testimonial story here - describe how the foundation helped them]",
      program: "[Which program helped them - e.g., Empowerment, Widows Support, etc.]",
    },
  ];
  // ===============================================

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary opacity-90 z-10" />
        <img 
          src={heroImage} 
          alt="Community" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4 drop-shadow-lg">
            ASHES TO BEAUTY
          </h1>
          <p className="text-2xl md:text-3xl text-primary-foreground mb-2 italic">
            Inspiring Hope, Transforming Lives.
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
            Charitable Initiative
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              <Link to="/programs">Our Programs</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-background/20 backdrop-blur text-primary-foreground border-primary-foreground hover:bg-background/30">
              <Link to="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-gradient-to-r from-accent to-secondary px-8 py-3 rounded-lg mb-6">
              <h2 className="text-3xl font-bold text-accent-foreground">OUR MISSION</h2>
            </div>
            <p className="text-xl text-foreground leading-relaxed">
              To give back to society in a way that betters the lots of the needy and helps the hopeless find a pathway.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Focus Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are committed to making a difference in the lives of those who need it most through these key programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-dark">
              <Link to="/programs">Learn More About Our Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-gold/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block p-4 rounded-full bg-gradient-to-r from-gold to-primary mb-4">
              <Quote className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4 font-cinzel">Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stories of hope and transformation from those we've helped
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-gold/20 hover:border-gold/40 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-gold mb-4" />
                  <p className="text-foreground mb-4 italic font-poppins">
                    "{testimonial.story}"
                  </p>
                  <div className="border-t border-gold/20 pt-4">
                    <p className="font-semibold text-primary font-playfair">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.program}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Make a Difference Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Your support can transform lives. Join us in our mission to bring hope and beauty to those who need it most.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
            <Link to="/contact">Contact Us to Help</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
