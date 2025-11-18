import { MapPin, Phone, Instagram, Facebook, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ASHES TO BEAUTY</h3>
            <p className="text-sm opacity-90 italic mb-4">Inspiring Hope, Transforming Lives.</p>
            <p className="text-sm opacity-80">
              To give back to society in a way that betters the lots of the needy and helps the hopeless find a pathway.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <p>61, Challenge/Molete Road, Opposite Baptist Church, Idi-Odo, Challenge Ibadan, Oyo State, Nigeria.</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="https://wa.me/2348136109441" className="hover:underline">+234 813 610 9441</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:ashestobeautyfoundation@gmail.com" className="hover:underline">ashestobeautyfoundation@gmail.com</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm mb-6">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/about" className="hover:underline">About Us</Link>
              <Link to="/programs" className="hover:underline">Programs</Link>
              <Link to="/gallery" className="hover:underline">Gallery</Link>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </nav>
            
            <div>
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://instagram.com/ashes_to_beauty" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://facebook.com/ashestobeautyfoundation" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p className="mb-2">Pioneer: <span className="font-semibold">Evangelist Shola Onakoya</span></p>
          <p className="opacity-80">© {new Date().getFullYear()} Ashes to Beauty Charitable Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
