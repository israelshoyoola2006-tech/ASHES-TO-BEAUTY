import { Heart, Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl opacity-90">
              Learn about our journey, mission, and the heart behind Ashes to Beauty Charitable Initiative.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Ashes to Beauty Charitable Initiative was founded with a simple yet powerful vision: to transform despair into hope and poverty into prosperity. We believe that every person, regardless of their circumstances, deserves dignity, support, and the opportunity to build a better future.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our journey began with a calling to serve the most vulnerable members of our society—widows, orphans, and those in desperate need. What started as a small community effort has grown into a comprehensive charitable organization touching lives across Nigeria.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we continue to expand our reach, guided by our unwavering commitment to inspire hope and transform lives through practical support, empowerment programs, and genuine compassion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent to-secondary mb-4">
                  <Target className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-foreground">
                  To give back to society in a way that betters the lots of the needy and helps the hopeless find a pathway to a brighter future.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent to-secondary mb-4">
                  <Eye className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-foreground">
                  A society where every individual has access to basic needs, opportunities for growth, and the support needed to thrive with dignity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent to-secondary mb-4">
                  <Heart className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Values</h3>
                <p className="text-foreground">
                  Compassion, integrity, dignity, empowerment, and unwavering commitment to serving those who need it most.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 border-2 border-primary/20">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-primary mb-2">Our Pioneer</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-6"></div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Evangelist Shola Onakoya</h3>
                <p className="text-lg text-foreground leading-relaxed">
                  Under the inspired leadership of Evangelist Shola Onakoya, Ashes to Beauty has become a beacon of hope for countless individuals and families. With a heart for service and an unwavering faith in the power of community, our founder has dedicated their life to turning ashes into beauty—transforming lives one person at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
