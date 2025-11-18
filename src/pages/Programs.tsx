import { Heart, Users, GraduationCap, HandHeart } from "lucide-react";
import ProgramCard from "@/components/ProgramCard";
import empowermentImg from "@/assets/empowerment.jpg";
import needyImg from "@/assets/needy.jpg";
import widowsImg from "@/assets/widows.jpg";
import orphansImg from "@/assets/orphans.jpg";

const Programs = () => {
  const programs = [
    {
      title: "Empowerment",
      description: "We provide comprehensive skills training, vocational education, and resources to help individuals become self-sufficient. Our empowerment programs include business development training, microfinance support, and mentorship opportunities that enable beneficiaries to build sustainable livelihoods and break the cycle of poverty.",
      icon: GraduationCap,
      image: empowermentImg,
    },
    {
      title: "Support for the Needy",
      description: "Our outreach programs offer essential aid to those facing hardship. We distribute food packages, provide clothing, assist with shelter needs, and offer emergency relief during crisis situations. We ensure that basic human dignity is maintained while helping individuals and families get back on their feet.",
      icon: Heart,
      image: needyImg,
    },
    {
      title: "Widows/Widower Support",
      description: "We recognize the unique challenges faced by widows and widowers. Our dedicated programs provide emotional support through counseling, financial assistance for daily needs, skills training for economic independence, and community support groups. We stand with them through their journey of healing and rebuilding.",
      icon: HandHeart,
      image: widowsImg,
    },
    {
      title: "Orphans Care",
      description: "Every child deserves love, care, and opportunity. Our orphan care program provides comprehensive support including quality education, healthcare services, nutritious meals, safe shelter, and most importantly, a nurturing environment where they can grow, learn, and dream. We invest in their future by ensuring they have access to opportunities that will help them succeed.",
      icon: Users,
      image: orphansImg,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl opacity-90">
              Discover how we're making a lasting impact through our comprehensive programs designed to transform lives and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {programs.map((program, index) => (
              <div 
                key={program.title}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center animate-fade-in`}
              >
                <div className="lg:w-1/2">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-4 rounded-full bg-gradient-to-br from-accent to-secondary">
                      <program.icon className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary">{program.title}</h2>
                  </div>
                  <p className="text-lg text-foreground leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground">
              Together, we're creating lasting change in our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Lives Empowered</div>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Widows Supported</div>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Orphans Cared For</div>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Families Helped</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
