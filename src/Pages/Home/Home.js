import React from "react";
import Footer from "../Shared/Footer/Footer";
import Banner from "./Banner";
import ContractUs from "./ContractUs";
import Info from "./Info";
import MakeAppoinment from "./MakeAppoinment";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <MakeAppoinment></MakeAppoinment>
      <Testimonial></Testimonial>
      <ContractUs></ContractUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
