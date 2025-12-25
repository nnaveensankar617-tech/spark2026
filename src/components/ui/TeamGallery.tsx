import React, { useState, useEffect } from "react";
import day1image from "../../assets/day1image.avif";
import day2image from "../../assets/day2image.avif";
import FadeUpOnScroll from "./FadeupScroll";

/* ---------------- TYPES ---------------- */
type Category = "organizers" | "developers" | "coordinators" | "sacteam";

type TeamMember = {
  image: string;
  name: string;
  role: string;
  description: string;
};

/* ---------------- DATA ---------------- */
const teamImages: Record<Category, TeamMember[]> = {
  organizers: [
    {
      image: day1image,
      name: "Ananya Sharma",
      role: "Lead Organizer",
      description: "Oversees event planning and execution.",
    },
    {
      image: day1image,
      name: "Rahul Verma",
      role: "Operations Head",
      description: "Ensures smooth coordination across teams.",
    },
    {
      image: day1image,
      name: "Priya Singh",
      role: "Logistics Manager",
      description: "Handles venue and resource management.",
    },
  ],
  developers: [
    {
      image: day2image,
      name: "Hema Chandrika",
      role: "Frontend Developer",
      description: "Builds interactive user experiences.",
    },
    {
      image: day2image,
      name: "Arjun Patel",
      role: "Backend Developer",
      description: "Designs scalable APIs and services.",
    },
    {
      image: day2image,
      name: "Sneha Rao",
      role: "UI Engineer",
      description: "Focuses on clean and accessible design.",
    },
  ],
  coordinators: [
    {
      image: day2image,
      name: "Kiran Kumar",
      role: "Event Coordinator",
      description: "Manages schedules and communications.",
    },
    {
      image: day2image,
      name: "Neha Joshi",
      role: "Program Coordinator",
      description: "Aligns performances and sessions.",
    },
    {
      image: day2image,
      name: "Amit Shah",
      role: "Volunteer Lead",
      description: "Coordinates volunteer activities.",
    },
  ],
  sacteam: [
    {
      image: day2image,
      name: "SAC Member",
      role: "Student Activity Council",
      description: "Supports student-driven initiatives.",
    },
    {
      image: day2image,
      name: "SAC Member",
      role: "Event Support",
      description: "Ensures smooth student participation.",
    },
    {
      image: day2image,
      name: "SAC Member",
      role: "Coordination Lead",
      description: "Bridges students and organizers.",
    },
  ],
};

/* ---------------- COMPONENT ---------------- */
const TeamGallery: React.FC = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  // Detect desktop width
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-[#01102b] via-[#062d6f] to-[#01102b]">
      <div className="max-w-7xl mx-auto space-y-28">

        {Object.entries(teamImages).map(([category, members]) => (
          <div key={category}>
            {/* HEADING + Decorative Line */}
            <FadeUpOnScroll>
              <div className="flex flex-col items-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 text-center">
                  {category === "sacteam"
                    ? "SAC Team"
                    : category.charAt(0).toUpperCase() + category.slice(1)}
                </h2>
                {/* Decorative Line */}
                <span className="block w-full h-1 bg-cyan-400 rounded-full mt-3"></span>
              </div>
            </FadeUpOnScroll>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {members.map((member, index) => (
                <FadeUpOnScroll key={index} delay={index * 350}>
                  <div
                    className="h-80 group cursor-pointer md:cursor-default"
                    onClick={() =>
                      !isDesktop
                        ? setFlippedCard(flippedCard === index ? null : index)
                        : undefined
                    }
                  >
                    {/* GRADIENT BORDER */}
                    <div className="relative h-full rounded-xl p-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient-x">

                      {/* FLIP CARD */}
                      <div
                        className={`
                          relative w-full h-full rounded-xl bg-[#050B1E]
                          transition-transform duration-700 [transform-style:preserve-3d]
                          ${isDesktop ? "md:group-hover:[transform:rotateY(180deg)]" : ""}
                          ${!isDesktop && flippedCard === index ? "[transform:rotateY(180deg)]" : ""}
                        `}
                      >
                        {/* FRONT */}
                        <div className="absolute inset-0 rounded-xl overflow-hidden [backface-visibility:hidden]">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* BACK */}
                        <div
                          className="absolute inset-0 rounded-xl
                                     bg-gradient-to-br from-[#020617] to-[#050B1E]
                                     flex flex-col items-center justify-center
                                     text-center px-6
                                     [transform:rotateY(180deg)]
                                     [backface-visibility:hidden]"
                        >
                          <h3 className="text-2xl font-semibold text-cyan-400 mb-1">
                            {member.name}
                          </h3>
                          <p className="text-lg text-purple-200 mb-3">
                            {member.role}
                          </p>
                          <p className="text-sm text-gray-200">
                            {member.description}
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>
                </FadeUpOnScroll>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default TeamGallery;
