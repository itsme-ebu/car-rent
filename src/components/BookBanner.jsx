import React from "react";

function BookBanner() {
  return (
    <div className="w-full py-20 flex justify-center gap-14 items-center book_banner relative text-white my-10 max-sm:flex-col text-center">
      <h2 className="text-3xl">Book a car by getting in touch with us</h2>
      <h2 className="text-3xl">
        <i className="ri-phone-line text-4xl"></i> (123) 456-7869
      </h2>
    </div>
  );
}

export default BookBanner;
