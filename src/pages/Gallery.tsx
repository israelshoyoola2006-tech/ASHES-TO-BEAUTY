import empowermentImg from "@/assets/empowerment.jpg";
import needyImg from "@/assets/needy.jpg";
import widowsImg from "@/assets/widows.jpg";
import orphansImg from "@/assets/orphans.jpg";
import educationImg from "@/assets/education.jpg";
import gallery1Img from "@/assets/gallery1.jpg";

const Gallery = () => {
  const galleryImages = [
    { src: empowermentImg, title: "Empowerment Programs", description: "Skills training and business development" },
    { src: widowsImg, title: "Widows Support", description: "Providing care and assistance" },
    { src: orphansImg, title: "Orphans Care", description: "Creating a nurturing environment" },
    { src: needyImg, title: "Community Outreach", description: "Supporting those in need" },
    { src: educationImg, title: "Educational Support", description: "Scholarship programs and mentorship" },
    { src: gallery1Img, title: "Community Service", description: "Volunteers making a difference" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-xl opacity-90">
              Witness the transformation as we bring hope and beauty to lives across our community.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-primary-foreground">
                      <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Be Part of Our Story</h2>
            <p className="text-lg text-foreground mb-8">
              These moments of transformation are made possible by supporters like you. Join us in creating more stories of hope and beauty.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
