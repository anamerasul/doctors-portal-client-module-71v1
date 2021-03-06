import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import Service from "./../Appoinment/Service";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`services.json`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const [treatment, setTreatment] = useState(null);
  return (
    <div>
      <h4 className="text-xl text-center text-secondary">
        Available Appointment on {format(date, "PP")}
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Service
            date={date}
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          setTreatment={setTreatment}
          treatment={treatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
