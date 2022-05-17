import React from "react";
import Service from "./Service";
import fluoride from "./../../assets/images/fluoride.png";
import cavity from "./../../assets/images/cavity.png";

import whitening from "./../../assets/images/whitening.png";
import treatment from "./../../assets/images/treatment.png";
const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluride Treatement",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, veritatis dolor libero ratione accusamus non.",

      img: `${fluoride}`,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, veritatis dolor libero ratione accusamus non.",

      img: `${cavity}`,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, veritatis dolor libero ratione accusamus non.",

      img: `${whitening}`,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center ">
        <h3 className="text-primary text-xl font-bold uppercase">
          Our Services
        </h3>
        <h2 className="text-4xl">Services We provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
        {/* <Service></Service> */}
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>

      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row justify-between">
          <img
            src={treatment}
            alt=""
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="px-24">
            <h1 className="text-6xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="bg-gradient-to-r from-secondary to-primary btn btn-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
