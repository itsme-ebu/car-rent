import React from "react";

function HeroBanner() {
  const location = window.location.pathname;
  return (
    <div className="hero_banner h-[70vh] max-sm:max-h-[50vh]">
      <div className="px-10 ">
        <h1 className="text-4xl capitalize">{location.slice(1)}</h1>
        <p className="py-3 text-xl font-semibold capitalize">Home {location}</p>
      </div>
    </div>
  );
}

export default HeroBanner;
