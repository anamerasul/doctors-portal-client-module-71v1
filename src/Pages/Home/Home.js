import React from "react";
import Banner from "./Banner";
import ContractUs from "./ContractUs";
import Info from "./Info";
import MakeAppoinment from "./MakeAppoinment";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="container-md px-24">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <MakeAppoinment></MakeAppoinment>
      <Testimonial></Testimonial>
      <ContractUs></ContractUs>
    </div>
  );
};

export default Home;
