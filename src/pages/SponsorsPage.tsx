import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SparkEffect from "@/components/SparkEffect";
import { Button } from "@/components/ui/button";
import { Youtube, Instagram, Linkedin, ExternalLink } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import battlefieldBg from "@/assets/sponsors-battlefield.jpg";

interface Sponsor {
  id: number;
  name: string;
  logo: string;
  tier: string;
}

interface SponsorCategory {
  category: string;
  icon: string;
  gradient: string;
  description: string;
  sponsors: Sponsor[];
}

const sponsorCategories: SponsorCategory[] = [
  {
    category: "Gaming Arena",
    icon: "🎮",
    gradient: "from-primary/20 to-primary/5",
    description: "Powering the ultimate gaming experience",
    sponsors: [
      { id: 1, name: "Razor Edge Gaming", logo: "🎮", tier: "Platinum" },
      { id: 2, name: "ProGamer Hub", logo: "🕹️", tier: "Gold" },
      { id: 3, name: "GameVault Esports", logo: "🎯", tier: "Silver" },
      { id: 4, name: "Elite Controllers", logo: "🎪", tier: "Silver" },
    ]
  },
  {
    category: "Food & Beverage",
    icon: "🍔",
    gradient: "from-secondary/20 to-secondary/5",
    description: "Fueling the warriors with delicious energy",
    sponsors: [
      { id: 5, name: "BattleBite Café", logo: "🍔", tier: "Platinum" },
      { id: 6, name: "Energy Eats", logo: "🍕", tier: "Gold" },
      { id: 7, name: "Snack Attack", logo: "🌮", tier: "Gold" },
      { id: 8, name: "Refresh Zone", logo: "🥤", tier: "Silver" },
    ]
  },
  {
    category: "Fashion & Design",
    icon: "👗",
    gradient: "from-accent/20 to-accent/5",
    description: "Setting trends on and off the stage",
    sponsors: [
      { id: 9, name: "StyleWarrior", logo: "👗", tier: "Platinum" },
      { id: 10, name: "Urban Threads", logo: "👔", tier: "Gold" },
      { id: 11, name: "Glamour Studio", logo: "💄", tier: "Silver" },
    ]
  },
  {
    category: "Technology Partners",
    icon: "⚙️",
    gradient: "from-primary/20 to-primary/5",
    description: "Innovation driving the future",
    sponsors: [
      { id: 12, name: "CyberForge Tech", logo: "⚙️", tier: "Platinum" },
      { id: 13, name: "TechNova Systems", logo: "💡", tier: "Gold" },
      { id: 14, name: "CodeCraft Labs", logo: "💻", tier: "Silver" },
      { id: 15, name: "Digital Wave", logo: "📱", tier: "Silver" },
    ]
  },
  {
    category: "Media & Broadcasting",
    icon: "📺",
    gradient: "from-secondary/20 to-secondary/5",
    description: "Amplifying every epic moment",
    sponsors: [
      { id: 16, name: "StreamWave Network", logo: "📺", tier: "Platinum" },
      { id: 17, name: "PixelCast Media", logo: "📡", tier: "Gold" },
      { id: 18, name: "Echo Studios", logo: "🎙️", tier: "Silver" },
    ]
  },
  {
    category: "Event Management",
    icon: "🏆",
    gradient: "from-accent/20 to-accent/5",
    description: "Creating unforgettable experiences",
    sponsors: [
      { id: 19, name: "PowerPlay Events", logo: "🏆", tier: "Platinum" },
      { id: 20, name: "Epic Gatherings", logo: "🎪", tier: "Gold" },
      { id: 21, name: "Stage Masters", logo: "🎭", tier: "Silver" },
    ]
  },
];

const getTierColor = (tier: string) => {
  switch (tier) {
    case "Platinum":
      return "bg-gradient-to-br from-slate-300 to-slate-100 text-slate-900";
    case "Gold":
      return "bg-gradient-to-br from-yellow-400 to-yellow-200 text-yellow-900";
    case "Silver":
      return "bg-gradient-to-br from-gray-300 to-gray-100 text-gray-900";
    default:
      return "bg-gradient-to-br from-primary/20 to-secondary/20 text-foreground";
  }
};

const SponsorsPage = () => {
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
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold mb-6 tracking-tight">
            <span className="text-primary text-glow-orange">OUR POWER</span>
            <br />
            <span className="text-foreground">SPONSORS</span>
          </h1>
          <p className="text-xl md:text-2xl font-exo text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The Backbone of Victory — Partners Who Fuel the Battle
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>⚡ Platinum Tier</span>
            <span>🏅 Gold Tier</span>
            <span>🥈 Silver Tier</span>
          </div>
        </div>
      </section>

      {/* Sponsors by Category */}
      <section className="container mx-auto px-4 py-16 relative z-10 space-y-24">
        {sponsorCategories.map((category, catIndex) => (
          <div key={catIndex} className="space-y-8 animate-slide-up" style={{ animationDelay: `${catIndex * 0.1}s` }}>
            {/* Category Header */}
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-2xl blur-xl opacity-50`} />
              <div className="relative border-2 border-border/50 rounded-2xl p-8 bg-card/50 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="text-7xl">{category.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold uppercase tracking-wider text-primary mb-2">
                      {category.category}
                    </h2>
                    <p className="text-muted-foreground text-lg font-exo">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sponsors Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.sponsors.map((sponsor, index) => (
                <div
                  key={sponsor.id}
                  className="group relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  
                  <div className="relative h-full border-2 border-border bg-card/90 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-2xl">
                    {/* Tier Badge */}
                    <div className={`absolute -top-3 -right-3 ${getTierColor(sponsor.tier)} rounded-full px-3 py-1 text-xs font-bold shadow-lg z-10`}>
                      {sponsor.tier}
                    </div>
                    
                    <div className="flex flex-col items-center text-center space-y-4 min-h-[180px] justify-center">
                      {/* Logo */}
                      <div className="text-7xl transform group-hover:scale-110 transition-transform duration-300">
                        {sponsor.logo}
                      </div>
                      
                      {/* Name */}
                      <h3 className="text-lg font-orbitron font-bold text-foreground group-hover:text-primary transition-colors">
                        {sponsor.name}
                      </h3>
                      
                      {/* Visit Link - Shows on hover */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button variant="ghost_glow" size="sm" className="text-xs gap-2">
                          Visit <ExternalLink className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
          <div className="relative border-2 border-primary/30 rounded-3xl p-12 bg-card/80 backdrop-blur-md text-center">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-foreground">
              Join Our Battle Alliance
            </h2>
            <p className="text-muted-foreground mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
              Become a part of the most electrifying college fest. Power up with us and create legendary moments together.
            </p>
            <Button 
              variant="hero" 
              size="xl"
              className="font-semibold font-orbitron text-lg px-12"
            >
              Become a Sponsor
            </Button>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span>✓ Brand Visibility</span>
              <span>✓ Targeted Audience</span>
              <span>✓ Networking Opportunities</span>
              <span>✓ Marketing Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center">
          <h3 className="text-2xl font-orbitron font-bold mb-8">Connect With Us</h3>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:text-primary hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:text-primary hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:text-primary hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
              aria-label="X"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center hover:border-secondary hover:text-secondary hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--secondary)/0.5)]"
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
