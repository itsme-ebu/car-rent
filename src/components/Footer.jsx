import React from "react";

function Footer() {
  return (
    <div className="w-full h-full px-6 py-14 grid grid-cols-4 gap-12 max-lg:grid-cols-2 max-sm:grid-cols-1">
      <div className="w-full h-full max-sm:text-center">
        <p className="text-2xl font-bold py-3">
          CAR <span className=" font-normal">Rental</span>
        </p>
        <p className="text-[#706f7b] text-lg py-3">
          We offers a big range of vehicles for all your driving needs. We have
          the perfect car to meet your needs.
        </p>
        <div className="text-xl py-3 hover:text-[#ff4d30]">
          <i className="ri-phone-fill mr-3"></i>
          <a href="#">(123)-456-789</a>
        </div>
        <div className="text-xl hover:text-[#ff4d30]">
          <i className="ri-mail-line mr-3 "></i>
          <a href="itsmeebu@gmail.com">itsmeebu@gamil.com</a>
        </div>
      </div>
      <div className="w-full h-ful px-8 max-sm:text-center">
        <h2 className="text-2xl py-3">COMPANY</h2>
        <p className="py-1">
          <a href="#" className="text-lg">
            New York
          </a>
        </p>
        <p className="py-1">
          <a href="#" className="text-lg">
            Careers
          </a>
        </p>
        <p className="py-1">
          <a href="#" className="text-lg">
            Mobile
          </a>
        </p>

        <p className="py-1">
          <a href="#" className="text-lg">
            Blog
          </a>
        </p>
        <p className="py-1">
          <a href="#" className="text-lg">
            How we work
          </a>
        </p>
      </div>
      <div className="w-full h-full max-sm:text-center">
        <h2 className="text-2xl py-3">WORKING HOURS</h2>
        <p className="text-lg py-2">Mon - Fri: 9:00AM - 9:00PM</p>
        <p className="text-lg py-2">Sat: 9:00AM - 19:00PM</p>
        <p className="text-lg py-2">Sun: Closed</p>
      </div>
      <div className="w-full h-full max-sm:text-center">
        <h2 className="text-2xl py-3">SUBSCRIPTION</h2>
        <p>Subscribe your Email address for latest news & updates.</p>
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full outline-none px-5 py-3 bg-[#ececec] my-3 text-lg"
        />
        <button className="w-full bg-[#ff4d30] text-white py-4 px-3 shadow_active rounded">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Footer;
