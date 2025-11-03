import { Heart, Zap, Mail, Phone } from "lucide-react";
import sparkLogo from "@/assets/spark-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 overflow-hidden border-t border-border">
      {/* Animated Sparks Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-primary rounded-full animate-spark-trail"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About SPARK 2025 */}
          <div className="space-y-4">
            <h3 className="text-xl font-orbitron font-bold text-secondary">About SPARK 2025</h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-exo">
              SPARK 2025 is the annual technical and cultural fest of SV College, Tirupati — where innovation meets imagination. Get ready for gaming, coding, and creativity!
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-orbitron font-bold text-secondary">Quick Links</h3>
            <div className="flex flex-col gap-2 text-muted-foreground text-sm font-exo">
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-primary transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-primary transition-colors text-left"
              >
                Events
              </button>
              <button
                onClick={() => document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-primary transition-colors text-left"
              >
                Schedule
              </button>
              <a href="/events" className="hover:text-primary transition-colors">
                Register
              </a>
              <a href="/gallery" className="hover:text-primary transition-colors">
                Gallery
              </a>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-orbitron font-bold text-secondary">Contact</h3>
            <div className="space-y-3 text-muted-foreground text-sm font-exo">
              <p className="leading-relaxed">
                SV College of Engineering, Tirupati
              </p>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:spark@svcollegetirupati.ac.in" className="hover:text-primary transition-colors">
                  spark@svcollegetirupati.ac.in
                </a>
              </div>
            </div>
          </div>

          {/* Stay Updated */}
          <div className="space-y-4">
            <h3 className="text-xl font-orbitron font-bold text-secondary">Stay Updated</h3>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary font-exo text-sm"
              />
              <button className="w-full px-4 py-2 rounded-md bg-secondary text-secondary-foreground font-orbitron font-bold hover:opacity-90 transition-opacity text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <Zap className="w-5 h-5 text-primary animate-pulse" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Bottom Section */}
        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground font-exo flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} SPARK | Designed & Developed by <a href="#" className="text-secondary hover:underline">Vinay & Team</a></span>
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border text-xs font-exo text-muted-foreground">
            <Zap className="w-3 h-3 text-secondary" />
            <span>Powered by Innovation & Adrenaline</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
