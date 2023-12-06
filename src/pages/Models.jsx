import React from "react";
import HeroBanner from "../components/HeroBanner";
import CarBox from "../components/CarBox";
import BookBanner from "../components/BookBanner";
import { useSelector } from "react-redux";

function Models() {
  const models = useSelector((state) => state.model.carModels);
  return (
    <div>
      <HeroBanner />
      {/* ========= CarBox ======== */}
      <div className="w-full min-h-screen grid grid-cols-3 gap-8 px-20 max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:px-5">
        {models.map((car) => (
          <div key={car.id}>
            <CarBox car={car} />
          </div>
        ))}
      </div>
      {/* ========= Booking Banner ======== */}
      <BookBanner />
    </div>
  );
}

export default Models;
