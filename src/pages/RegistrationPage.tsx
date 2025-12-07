import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SparkEffect from "@/components/SparkEffect";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import battlefieldBg from "@/assets/hero-battlefield.jpg";
import { Check, Crown, Zap, Shield, Swords } from "lucide-react";

const RegistrationPage = () => {
  const { toast } = useToast();

  const handleRegisterClick = (plan: "normal" | "pro") => {
    toast({
      title: plan === "pro" ? "Pro Pass Selected! 👑" : "Standard Entry Selected! 🎮",
      description: "Registration portal opening soon! Stay tuned.",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-foreground relative overflow-hidden font-exo">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{ backgroundImage: `url(${battlefieldBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)]" />
      </div>

      <SparkEffect />
      <Navbar />

      <motion.main
        className="relative z-10 container mx-auto px-4 pt-24 pb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div className="text-center mb-16 space-y-6" variants={itemVariants}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <h1 className="text-3xl md:text-8xl font-orbitron font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              JOIN THE <br />
              <span className="text-glow-orange bg-clip-text text-transparent bg-gradient-to-r from-primary via-orange-400 to-primary">
                REVOLUTION
              </span>
            </h1>
          </motion.div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light tracking-wide">
            Secure your legacy in SPARK 2K26. Choose your path to glory.
          </p>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-5xl mx-auto"
          variants={containerVariants}
        >
          {[
            { icon: Swords, title: "Elite Competition", desc: "Battle against the best in high-stakes tournaments." },
            { icon: Zap, title: "Instant Access", desc: "Quick entry to all zones with improved check-in." },
            { icon: Shield, title: "Secure Spot", desc: "Guaranteed participation in your chosen events." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl text-center hover:bg-white/10 transition-colors"
            >
              <item.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-orbitron font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Section */}
        <motion.div className="max-w-5xl mx-auto" variants={itemVariants}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 text-white">
              SELECT YOUR <span className="text-primary">PASS</span>
            </h2>
          </div>
          <br /><br />

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Normal Pass */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Card className="relative bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl overflow-hidden h-full flex flex-col items-start transition-all duration-300 group-hover:border-primary/50">
                <div className="mb-6">
                  <h3 className="text-2xl font-orbitron font-bold text-white mb-2">SCOUT PASS</h3>
                  <div className="text-5xl font-bold text-white mb-1">FREE</div>
                  <p className="text-muted-foreground text-sm">Standard Entry Access</p>
                </div>

                <ul className="space-y-4 mb-8 flex-1 w-full">
                  {["Tournament Entry", "Digital Certificate", "Standard Support", "Community Access"].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleRegisterClick("normal")}
                  className="w-full bg-white/10 hover:bg-white/20 text-white font-orbitron h-12 border-0"
                >
                  GET STARTED
                </Button>
              </Card>
            </motion.div>

            {/* Pro Pass */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative group md:-mt-8 md:mb-8"
            >
              <div className="absolute inset-0 bg-yellow-500/30 blur-2xl rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black font-orbitron font-bold px-4 py-1 rounded-full text-sm z-20 shadow-[0_0_20px_rgba(234,179,8,0.5)]">
                MOST POPULAR
              </div>

              <Card className="relative bg-black/60 backdrop-blur-xl border border-yellow-500/50 p-8 rounded-3xl overflow-hidden h-full flex flex-col items-start shadow-2xl z-10">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="mb-6 relative w-full">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-orbitron font-bold text-yellow-500 mb-2 flex items-center gap-2">
                        ELITE PASS <Crown className="w-5 h-5 fill-yellow-500" />
                      </h3>
                      <div className="text-5xl font-bold text-white mb-1 flex items-end gap-2">
                        $50 <span className="text-base text-muted-foreground font-normal mb-2">/ event</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-yellow-200/60 text-sm mt-2">Maximum Experience</p>
                </div>

                <ul className="space-y-4 mb-8 flex-1 w-full relative">
                  {[
                    "Priority Check-in",
                    "Premium Swag Kit",
                    "VIP Lounge Access",
                    "All-Day Catering",
                    "Exclusive After-Party",
                    "Meet & Greet Access"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white font-medium">
                      <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-yellow-500" />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleRegisterClick("pro")}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold font-orbitron h-14 text-lg shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-all"
                >
                  JOIN ELITE SQUAD
                </Button>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer Text */}
        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <p className="text-muted-foreground/50 text-sm">
            By registering, you agree to our Terms of Service & Privacy Policy.
          </p>
        </motion.div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default RegistrationPage;
