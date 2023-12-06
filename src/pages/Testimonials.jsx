import React from "react";
import HeroBanner from "../components/HeroBanner";
import Testumonials from "../components/Testumonials";
import BookBanner from "../components/BookBanner";
function Testimonials() {
  return (
    <div>
      <HeroBanner />
      <div className="w-full min-h-screen bg-[#f8f8f8] py-10">
        <div className="py-20">
          <h4 className="text-center text-2xl">Reviewed by People</h4>
          <h2 className="text-center text-5xl py-3">Client's Testimonials</h2>
          <p className="block w-1/2 mx-auto text-center text-[#706f7b] max-md:w-full px-4">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>
        <div className="px-20 max-sm:px-5">
          <Testumonials />
        </div>
      </div>
      <BookBanner />
    </div>
  );
}

export default Testimonials;
