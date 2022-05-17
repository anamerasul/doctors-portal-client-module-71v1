import React from "react";
import { useForm } from "react-hook-form";
import appointment from "./../../assets/images/appointment.png";

const ContractUs = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section
      className="my-24 py-2"
      style={{ background: `url(${appointment})` }}
    >
      <div className="text-center mt-16">
        <h4 className="text-xl text-primary font-bold">Contract Us</h4>
        <h2 className="text-3xl text-white">Stay connected with us</h2>
        <div className="my-15">
          <form
            className="grid grid-rows-1 gap-5 py-24"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <input
                className="w-full max-w-md h-10 px-4"
                placeholder="Email"
                type="text"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
            </div>
            <div>
              <input
                placeholder="subject"
                className="w-full max-w-md h-10 px-4"
                type="text"
                {...register("subject", {
                  required: true,
                  maxLength: 40,
                  minLength: 10,
                })}
              />
            </div>

            <div>
              <textarea
                type="text"
                className="w-full max-w-md h-20 px-4"
                placeholder="message"
                {...register("message", {
                  required: true,
                  maxLength: 200,
                  minLength: 20,
                })}
              />
            </div>

            <input
              className=" bg-gradient-to-r from-secondary to-primary btn btn-primary uppercase text-center mx-auto text-white font-bold"
              type="submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContractUs;
