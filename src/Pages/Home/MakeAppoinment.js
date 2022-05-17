import React from "react";
import doctor from "./../../assets/images/doctor.png";
import appointment from "./../../assets/images/appointment.png";
import PrimaryButton from "../Shared/ButtonGroup/PrimaryButton/PrimaryButton";
const MakeAppoinment = () => {
  return (
    <section
      className="flex justify-center items-center"
      style={{ background: `url(${appointment})` }}
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctor} alt="" sizes="" />
      </div>
      <div className="flex-1 p-8">
        <h3 className="text-xl text-primary mb-8">Appoinment</h3>
        <h3 className="text-3xl text-white font-bold  mb-12">
          Make an Appointment Today
        </h3>

        <p className="text-white  mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas suscipit
          dolore consequuntur magnam, cupiditate voluptates aliquid, eum
          doloremque ipsum ullam architecto debitis dolorem odio quibusdam aut
          nesciunt harum? Necessitatibus facilis dolorum accusamus totam natus
          suscipit delectus assumenda voluptates, sint officia?
        </p>
        <PrimaryButton> Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppoinment;
