import React from "react";
import PillNav from "../components/ui/pillNav";
import Footer from "@/components/Footer";
import TeamGallery from "../components/ui/TeamGallery";

const Team: React.FC = () => {
  return (
    <>
    <div className="relative min-h-screen overflow-x-hidden font-montserrat text-white 
      bg-gradient-to-br from-[#7e9af9] via-[#9b8bf5] to-[#e283d5]">

      {/* BACKGROUND GLOW ORBS */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-pink-400/40 blur-[120px] rounded-full" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-indigo-400/40 blur-[120px] rounded-full" />

 <div className="flex justify-center pt-10">
          <PillNav
            items={[
              { label: "Gallery", href: "/highlights" },
              { label: "Proshow", href: "/proshow" },
              { label: "Team", href: "/team" },
              { label: "Register", href: "/register" },
            ]}
            activeHref="/team"
            className="custom-nav backdrop-blur-md bg-white/10 border border-white/20 shadow-xl"
            ease="power2.easeOut"
            baseColor="transparent"
            pillColor="linear-gradient(130deg, #b510eb, #f81184)"
            hoveredPillTextColor="#ffffff"
            pillTextColor="#ffffff"
          />
        </div>
      {/* HERO SECTION */}
      <section className="relative z-10 w-full">

        {/* NAVBAR */}
       

        {/* HERO TEXT */}
        <div className="flex items-center justify-center text-center h-[30vh] px-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-7xl font-playfair font-extrabold tracking-wider
              bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent
              drop-shadow-[0_0_30px_rgba(255,255,255,0.35)]
              animate-[fadeUp_1s_ease-out_forwards]">

              Meet the Team
            </h2>

            <p className="text-sm md:text-lg text-white/80 max-w-2xl mx-auto">
              The minds, creators, and leaders who bring this experience to life
            </p>
          </div>
        </div>
      </section>

      {/* TEAM GALLERY */}
      <section className="relative z-10 px-4 md:px-10 pb-20">
        <TeamGallery />
      </section>

      
    </div>
    {/* FOOTER */}
      <Footer />
      </>
  );
};

export default Team;
