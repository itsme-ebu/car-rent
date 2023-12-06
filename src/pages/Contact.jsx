import React from "react";
import HeroBanner from "../components/HeroBanner";
import BookBanner from "../components/BookBanner";
function Contact() {
  return (
    <div>
      <HeroBanner />

      <div className="w-full min-h-screen  px-14 my-10 py-10 max-sm:px-3">
        <div className="grid grid-cols-2 gap-14 w-full min-h-screen contact max-md:grid-cols-1 max-sm:gap-5">
          <div className="w-full h-full px-3 py-5">
            <h2 className="text-5xl leading-[3.6rem] py-5 ">
              Need additional information?
            </h2>
            <p className="text-[#706f7b] w-[80%] py-3 max-sm:w-full">
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <p className="text-lg pt-8 font-medium">
              <i className="ri-phone-line mr-3 text-2xl"></i>
              (123) 456-7869
            </p>
            <p className="text-lg py-4 font-medium">
              <i className="ri-mail-line mr-3 text-2xl"></i>
              itsmeebu@gmail.com
            </p>
            <p className="text-lg py-1 font-medium">
              <i className="ri-map-pin-line mr-3"></i>
              West Bengal, India
            </p>
          </div>
          <div className="w-full h-full py-3 px-3">
            <form className="py-8">
              <label htmlFor="name" className="text-lg">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder='E.g: "Joe Shmoe"'
                className="w-full p-4 text-lg bg-[#f2f2f2] outline-none my-3 mb-6"
                required
              />
              <label htmlFor="email" className="text-lg">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="youremail@example.com"
                className="w-full p-4 px-6 text-lg bg-[#f2f2f2] outline-none my-3"
                required
              />
              <label htmlFor="about" className="text-lg">
                Tell us about it
              </label>
              <textarea
                name=""
                id="about"
                cols="30"
                rows="10"
                placeholder="Write Here..."
                className="bg-[#f2f2f2] w-full my-3 p-4 outline-none text-lg"
              ></textarea>

              <button
                type="submit"
                className="bg-[#ff4d30] w-full py-4 text-white text-lg shadow_active"
              >
                <i className="ri-mail-open-line mr-3"></i>Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <BookBanner />
    </div>
  );
}

export default Contact;
