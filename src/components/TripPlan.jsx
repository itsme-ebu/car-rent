import React from "react";
import { car_cloud_icon, car_icon, support_icon } from "../assets";

function TripPlan() {
  return (
    <div className="trip_plan w-full min-h-screen py-10">
      <h4 className=" text-center text-2xl my-5">Plan your trip now</h4>
      <h2 className="text-center text-[3rem]">Quick & easy car rental</h2>
      <div className="grid grid-cols-3 px-10 gap-20 mt-20 max-md:grid-cols-2 max-sm:grid-cols-1">
        <div className=" w-full text-center md:px-10">
          <img src={car_icon} alt="SelectCar" className=" block mx-auto" />
          <h2 className="text-xl">Select Car</h2>
          <p className="text-[#706f7b]">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </p>
        </div>
        <div className=" w-full text-center md:px-10">
          <img src={support_icon} alt="Contact" className=" block mx-auto" />
          <h2 className="text-xl">Contact Operator</h2>
          <p className="text-[#706f7b]">
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </div>
        <div className=" w-full text-center md:px-10">
          <img
            src={car_cloud_icon}
            alt="Let'sDrive"
            className=" block mx-auto"
          />
          <h2 className="text-xl">Let's Drive</h2>
          <p className="text-[#706f7b]">
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </div>
      </div>
    </div>
  );
}

export default TripPlan;
