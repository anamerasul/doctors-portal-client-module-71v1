import React from "react";

const InfoCard = ({ img, cardTitle, bgClassName }) => {
  return (
    <div className="container-md">
      <div className={`card lg:card-side shadow-xl ${bgClassName}`}>
        <figure className="pl-5 pt-5">
          <img className="" src={img} alt="Album" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">{cardTitle}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
