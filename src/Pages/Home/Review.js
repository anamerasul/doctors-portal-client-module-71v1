import React from "react";

const Review = ({ review }) => {
  console.log(review);
  const { name, clientReview, img, location } = review;
  return (
    <div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          {/* <h2 className="card-title">Card title!</h2> */}
          <p>{clientReview}</p>
          <div className="flex items-center ">
            <div className="avatar">
              <div className="max-w-sm rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="text-xl">{name}</h4>
              <p className="text-sm">{location}</p>
            </div>
            {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
