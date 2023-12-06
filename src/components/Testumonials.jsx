import React from "react";
import { harry_img, ron_img } from "../assets";
function Testumonials() {
  return (
    <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 max-md:gap-0">
      <div className="w-full bg-white py-8 px-12 shadow_active max-sm:px-4">
        <p className="text-2xl font-medium leading-9 max-sm:text-lg text-center">
          "We rented a car from this website and had an amazing experience! The
          booking was easy and the rental rates were very affordable. "
        </p>
        <div className="grid grid-cols-3 mt-8 max-sm:grid-cols-1">
          <div className=" w-full h-20 col-span-2 flex items-center gap-5">
            <img src={harry_img} className=" w-20 rounded-full" />
            <div className="w-full">
              <h2 className="text-lg ">Harry Potter</h2>
              <p>Belgrade</p>
            </div>
          </div>
          <div className="h-20 flex items-center justify-center max-sm:hidden">
            <i className="ri-double-quotes-r text-[#ff4d30] text-6xl"></i>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-8 px-14 shadow_active max-md:hidden">
        <p className="text-2xl font-medium leading-9 text-center">
          "The car was in great condition and made our trip even better. Highly
          recommend for this car rental website!"
        </p>
        <div className="grid grid-cols-3 mt-8">
          <div className=" h-20 col-span-2 flex items-center gap-5">
            <img src={ron_img} className=" w-20 rounded-full" />
            <div>
              <h2 className="text-lg">Ron Rizzly</h2>
              <p>Novi Sad</p>
            </div>
          </div>
          <div className="h-20 flex items-center justify-center">
            <i className="ri-double-quotes-r text-[#ff4d30] text-6xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testumonials;
