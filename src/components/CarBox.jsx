import React from "react";
import {
  audi_car,
  bmw_car,
  golf_car,
  mercedes_car,
  passat_car,
  toyota_car,
} from "../assets";
function CarBox({ car }) {
  const car_imgs = [
    {
      model: "Audi",
      img: audi_car,
    },
    {
      model: "VW",
      img: golf_car,
    },
    {
      model: "Camry",
      img: toyota_car,
    },
    {
      model: "ModernLine",
      img: bmw_car,
    },
    {
      model: "Benz",
      img: mercedes_car,
    },
    {
      model: "CC",
      img: passat_car,
    },
  ];

  const slected_car_img = car_imgs.filter(
    (cars) => cars.model == car.car_model
  );
  return (
    <div className=" border border-slate-600 my-5">
      <div className="w-full h-[15rem] bg-black">
        <img
          src={slected_car_img[0].img}
          className="w-full h-full object-fill"
        />
      </div>
      <div className="px-8 py-5">
        <div className="flex justify-between py-5">
          <div>
            <h2 className="text-3xl">{car.car_name}</h2>
            <p>
              <i className="ri-star-line text-xl mr-1"></i>
              <i className="ri-star-line text-xl mr-1"></i>
              <i className="ri-star-line text-xl mr-1"></i>
              <i className="ri-star-line text-xl mr-1"></i>
              <i className="ri-star-line text-xl"></i>
            </p>
          </div>

          <div>
            <h2 className="text-3xl">{car.car_rent}</h2>
            <p>per day</p>
          </div>
        </div>
        <div className="my-3">
          <div className="flex justify-between items-center py-2">
            <p className="text-xl font-semibold">
              <i className="ri-car-line mr-3"></i>
              {car.car_model}
            </p>
            <p className="text-xl font-semibold">
              {car.car_seat}
              <i className="ri-car-line ml-3"></i>
            </p>
          </div>
          <div className="flex justify-between items-center py-5 border-b-[1px]">
            <p className="text-xl font-semibold">
              <i className="ri-car-line mr-3"></i>
              {car.car_type}
            </p>
            <p className="text-xl font-semibold">
              {car.car_fuel}
              <i className="ri-car-line ml-3"></i>
            </p>
          </div>
        </div>
        <button className="w-full py-4 text-xl bg-[#ff4d30] text-white shadow_active">
          Book Ride
        </button>
      </div>
    </div>
  );
}

export default CarBox;
