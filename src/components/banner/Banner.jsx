import React from "react";
import "./Banner.css";
import bannerLogo from "../../assets/banner-main.png";
const Banner = () => {
  return (
    <section className=" container">
      <div className="banner-container relative  z-2 bg-purple-950 min-h-[100dvh] md:min-h-screen md:py-10 ">
        <div>
          <img src={bannerLogo} alt="banner cricket image" />
        </div>
        <div className="banner-content">
          <h2 className="text-[clamp(1.5rem,2.5vw,2.5rem)]">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h2>
          <p>Beyond Boundaries Beyond Limits</p>
          <button>Claim Free Credit</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
