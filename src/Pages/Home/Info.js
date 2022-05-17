import React from "react";
import InfoCard from "./InfoCard";
import clock from "./../../assets/icons/clock.svg";
import marker from "./../../assets/icons/marker.svg";
import phone from "./../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="container-md grid grid-cols-1 md:grid-cols-3 gap-4 px-12">
      <InfoCard
        cardTitle="Opening Hours"
        img={clock}
        bgClassName=" bg-gradient-to-r from-secondary to-primary"
      ></InfoCard>
      <InfoCard
        cardTitle="Our Location"
        img={marker}
        bgClassName="bg-accent"
      ></InfoCard>
      <InfoCard
        cardTitle="Contract Us"
        img={phone}
        bgClassName=" bg-gradient-to-r from-secondary to-primary"
      ></InfoCard>
    </div>
  );
};

export default Info;
