import React from "react";
import chair from "./../../assets/images/chair.png";
import bg from "./../../assets/images/bg.png";
import PrimaryButton from "../Shared/ButtonGroup/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div>
      <div className={`hero min-h-screen px-12 {bg-[url(${bg})]}`}>
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
            <PrimaryButton> Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
