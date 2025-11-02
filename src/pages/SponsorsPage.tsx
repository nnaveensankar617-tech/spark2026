import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SparkEffect from "@/components/SparkEffect";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Youtube, Instagram, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import battlefieldBg from "@/assets/sponsors-battlefield.jpg";

interface Sponsor {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
}

interface SponsorCategory {
  category: string;
  icon: string;
  color: string;
  sponsors: Sponsor[];
}

const sponsorCategories: SponsorCategory[] = [
  {
    category: "Gaming Partners",
    icon: "🎮",
    color: "fire-orange",
    sponsors: [
      { id: 1, name: "Razor Edge", logo: "🎮", description: "Elite gaming gear and peripherals", website: "#" },
      { id: 2, name: "ProGamer Hub", logo: "🕹️", description: "Professional gaming arena", website: "#" },
      { id: 3, name: "GameVault", logo: "🎯", description: "Gaming tournaments & prizes", website: "#" },
    ]
  },
  {
    category: "Food Partners",
    icon: "🍔",
    color: "neon-cyan",
    sponsors: [
      { id: 4, name: "BattleBite Café", logo: "🍔", description: "Fuel your gaming marathon", website: "#" },
      { id: 5, name: "Energy Eats", logo: "🍕", description: "Quick bites for gamers", website: "#" },
      { id: 6, name: "Snack Attack", logo: "🌮", description: "Ultimate gaming snacks", website: "#" },
    ]
  },
  {
    category: "Tech Partners",
    icon: "⚙️",
    color: "fire-orange",
    sponsors: [
      { id: 7, name: "CyberForge", logo: "⚙️", description: "Next-gen tech solutions", website: "#" },
      { id: 8, name: "TechNova", logo: "💡", description: "Innovation at its peak", website: "#" },
    ]
  },
  {
    category: "Media Partners",
    icon: "📺",
    color: "neon-cyan",
    sponsors: [
      { id: 9, name: "StreamWave", logo: "📺", description: "Live streaming excellence", website: "#" },
      { id: 10, name: "PixelCast", logo: "📡", description: "Broadcasting your victories", website: "#" },
    ]
  },
  {
    category: "Event Partners",
    icon: "🏆",
    color: "fire-orange",
    sponsors: [
      { id: 11, name: "PowerPlay Events", logo: "🏆", description: "Creating legendary moments", website: "#" },
      { id: 12, name: "Epic Gatherings", logo: "🎪", description: "Unforgettable experiences", website: "#" },
    ]
  },
];

const SponsorsPage = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${battlefieldBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      </div>
      
      <SparkEffect />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              OUR POWER SPONSORS
            </span>
          </h1>
          <p className="text-2xl md:text-4xl font-exo text-muted-foreground uppercase tracking-wider">
            The Backbone of Victory
          </p>
          <div className="mt-8 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
      </section>

      {/* Sponsors by Category */}
      <section className="container mx-auto px-4 py-16 relative z-10 space-y-20">
        {sponsorCategories.map((category, catIndex) => (
          <div key={catIndex} className="space-y-8">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl">{category.icon}</span>
              <h2 className={`text-3xl md:text-4xl font-orbitron font-bold uppercase tracking-wider ${
                category.color === "fire-orange" ? "text-primary" : "text-secondary"
              }`}>
                {category.category}
              </h2>
              <div className={`flex-1 h-0.5 ${
                category.color === "fire-orange" 
                  ? "bg-gradient-to-r from-primary to-transparent" 
                  : "bg-gradient-to-r from-secondary to-transparent"
              }`} />
            </div>

            {/* Sponsors Grid for this Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.sponsors.map((sponsor) => (
                <Card
                  key={sponsor.id}
                  className={`
                    relative overflow-hidden cursor-pointer transition-all duration-300 
                    border-2 bg-card/30 backdrop-blur-md group
                    ${hoveredCard === sponsor.id 
                      ? category.color === "fire-orange" 
                        ? "border-primary shadow-[0_0_40px_hsl(var(--fire-orange)/0.8)]" 
                        : "border-secondary shadow-[0_0_40px_hsl(var(--neon-cyan)/0.8)]"
                      : "border-border/50"
                    }
                  `}
                  onMouseEnter={() => setHoveredCard(sponsor.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Diagonal stripe background */}
                  <div className={`
                    absolute inset-0 opacity-10
                    ${category.color === "fire-orange" 
                      ? "bg-[linear-gradient(45deg,transparent_25%,hsl(var(--fire-orange))_25%,hsl(var(--fire-orange))_50%,transparent_50%,transparent_75%,hsl(var(--fire-orange))_75%,hsl(var(--fire-orange)))]" 
                      : "bg-[linear-gradient(45deg,transparent_25%,hsl(var(--neon-cyan))_25%,hsl(var(--neon-cyan))_50%,transparent_50%,transparent_75%,hsl(var(--neon-cyan))_75%,hsl(var(--neon-cyan)))]"
                    }
                    bg-[length:20px_20px]
                  `} />

                  <CardContent className="p-6 relative z-10">
                    {/* Logo */}
                    <div className={`
                      text-7xl mb-4 transition-transform duration-300
                      ${hoveredCard === sponsor.id ? "scale-110" : "scale-100"}
                    `}>
                      {sponsor.logo}
                    </div>
                    
                    {/* Name - Always visible */}
                    <h3 className="text-2xl font-orbitron font-bold mb-2">
                      {sponsor.name}
                    </h3>
                    
                    {/* Details - Show on hover */}
                    <div className={`
                      transition-all duration-300 overflow-hidden
                      ${hoveredCard === sponsor.id 
                        ? "max-h-40 opacity-100 mt-4" 
                        : "max-h-0 opacity-0"
                      }
                    `}>
                      <p className="text-muted-foreground mb-3">
                        {sponsor.description}
                      </p>
                      <div className={`
                        inline-block px-4 py-2 text-sm font-exo font-bold uppercase tracking-wider
                        border-2 rounded
                        ${category.color === "fire-orange" 
                          ? "border-primary text-primary" 
                          : "border-secondary text-secondary"
                        }
                      `}>
                        Visit Partner →
                      </div>
                    </div>
                  </CardContent>

                  {/* Corner accent */}
                  <div className={`
                    absolute top-0 right-0 w-20 h-20 opacity-50
                    ${category.color === "fire-orange" 
                      ? "bg-gradient-to-bl from-primary to-transparent" 
                      : "bg-gradient-to-bl from-secondary to-transparent"
                    }
                  `} />
                </Card>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-3xl" />
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6 relative z-10 uppercase tracking-wider">
            Join Our Battle Alliance
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto relative z-10 text-lg">
            Become a part of the most electrifying college fest. Power up with us and create legendary moments.
          </p>
          <Button 
            variant="hero" 
            size="xl"
            className="relative z-10 group"
          >
            <span className="relative z-10">Become a Sponsor</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
          </Button>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-orbitron font-bold mb-4">Connect With Us</h3>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary hover:text-primary hover:shadow-[0_0_20px_hsl(var(--fire-orange)/0.5)]"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary hover:text-primary hover:shadow-[0_0_20px_hsl(var(--fire-orange)/0.5)]"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary hover:text-primary hover:shadow-[0_0_20px_hsl(var(--fire-orange)/0.5)]"
              aria-label="X"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-secondary hover:text-secondary hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.5)]"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SponsorsPage;
