import React from "react";
import quote from "./../../assets/icons/quote.svg";
import people1 from "./../../assets/images/people1.png";
import people2 from "./../../assets/images/people2.png";
import people3 from "./../../assets/images/people3.png";
import Review from "./Review";
const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Wilson hary",
      img: people1,
      clientReview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam possimus, et expedita veniam nisi rem accusantium ullam totam quisquam sint dignissimos eveniet sequi vero tempora saepe voluptatem unde temporibus facilis minima iure cum voluptatibus!",
      location: "califonia",
    },
    {
      _id: 2,
      name: "Wilson robert",
      img: people2,
      clientReview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam possimus, et expedita veniam nisi rem accusantium ullam totam quisquam sint dignissimos eveniet sequi vero tempora saepe voluptatem unde temporibus facilis minima iure cum voluptatibus!",
      location: "califonia",
    },
    {
      _id: 3,
      name: "Wil hay",
      img: people3,
      clientReview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam possimus, et expedita veniam nisi rem accusantium ullam totam quisquam sint dignissimos eveniet sequi vero tempora saepe voluptatem unde temporibus facilis minima iure cum voluptatibus!",
      location: "califonia",
    },
  ];
  return (
    <section className="my-28">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonial</h4>
          <h2 className="text-3xl">What our patient Says</h2>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
