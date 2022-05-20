import React, { useEffect, useState } from "react";
import { format } from "date-fns";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`services.json`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      {console.log(services)}
      <h4 className="text-xl text-center text-secondary">
        Available Appointment on {format(date, "PP")}
      </h4>
    </div>
  );
};

export default AvailableAppointment;
