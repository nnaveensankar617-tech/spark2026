import React from "react";
import PillNav from "../components/ui/pillNav";

const Team: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "40px", // optional
      }}
    >
      <PillNav
          // logo={Logo}
          // logoAlt="spark Logo"
            items={[
              { label: "Gallery", href: "/highlights" },
              { label: "Proshow", href: "/proshow" },
              { label: "Team", href: "/team" },
              { label: "Register", href: "/register" },
            ]}
            activeHref="/"
            className="custom-nav"
            ease="power2.easeOut"
            baseColor="#040204ff"
            pillColor="linear-gradient(130deg, #b510ebff, #f81184ff)"
            hoveredPillTextColor="#fbfbfbff"
            pillTextColor="#faf3f3ff"

          />
    </div>
  );
};

export default Team;
