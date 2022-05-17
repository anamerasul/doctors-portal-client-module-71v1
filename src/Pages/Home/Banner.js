import React from "react";
import chair from "./../../assets/images/chair.png";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: "url(./../../assets/images/chair.png)",
        backgroundSize: "80% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero min-h-screen px-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt="chair"
            className="max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-6xl md:text-6xl font-bold">
              Your New Smile Starts Here!
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className=" bg-gradient-to-r from-secondary to-primary btn btn-primary uppercase text-white font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
