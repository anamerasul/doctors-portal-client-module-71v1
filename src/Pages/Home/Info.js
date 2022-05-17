import React from "react";
import InfoCard from "./InfoCard";
import clock from "./../../assets/icons/clock.svg";
import marker from "./../../assets/icons/marker.svg";
import phone from "./../../assets/icons/clock.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-12">
      <InfoCard img={clock}></InfoCard>
      <InfoCard img={marker}></InfoCard>
      <InfoCard img={phone}></InfoCard>
    </div>
  );
};

export default Info;
