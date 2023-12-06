import React from "react";
import HeroBanner from "../components/HeroBanner";
import { about_main, bg_car, car_outlet, car_shop } from "../assets";
import TripPlan from "../components/TripPlan";
import BookBanner from "../components/BookBanner";

function About() {
  return (
    <>
      <HeroBanner />

      {/* ========== About Company ========= */}

      <div className="w-[70%] min-h-screen block mx-auto py-24 max-sm:w-[90%]">
        <div className=" h-full grid grid-cols-2 gap-10 max-lg:grid-cols-1">
          <div className="flex items-center">
            <img src={about_main} className="w-full" />
          </div>
          <div>
            <h4 className="text-xl">About Company</h4>
            <h2 className="text-4xl py-4">
              You start the engine and your adventure begins
            </h2>
            <p className="text-[#706f7b]">
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to affronting
              imprudence no precaution. My indulged as disposal strongly
              attended.
            </p>
            <div className="my-10 flex justify-between items-center max-sm:flex-col max-sm:gap-8">
              <div>
                <img src={bg_car} className=" max-sm:mx-auto" />
                <div className="flex gap-2 items-center py-3 max-sm:flex-col">
                  <h2 className="text-5xl">20</h2>
                  <p className="text-lg">Car Types</p>
                </div>
              </div>
              <div>
                <img src={car_outlet} className="max-sm:mx-auto" />
                <div className="flex gap-2 items-center py-3 max-sm:flex-col">
                  <h2 className="text-5xl">85</h2>
                  <p className="text-lg">Rental Outlets</p>
                </div>
              </div>
              <div>
                <img src={car_shop} className=" max-sm:mx-auto" />
                <div className="flex gap-2 items-center py-3 max-sm:flex-col">
                  <h2 className="text-5xl">75</h2>
                  <p className="text-lg">Repair Shop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trip Plan  */}

      <TripPlan />

      <BookBanner />
    </>
  );
}

export default About;
