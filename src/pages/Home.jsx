import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  main_car,
  hero_bg,
  car_icon,
  car_cloud_icon,
  support_icon,
  Harrier,
  mahindra_thar,
  seltos,
  hector,
  audi,
  carens,
  car_banner,
  cross_country,
  charges,
  pricing,
  playstore_img,
  appstore_img,
} from "../assets";
import Testumonials from "../components/Testumonials";
import TripPlan from "../components/TripPlan";

function Home() {
  const car_data = useSelector((state) => state.car.carData);
  const [selected_car, setSelected_car] = useState(car_data[0]);
  const [selected_car_img, setselected_car_img] = useState(mahindra_thar);
  const [faq_question, setfaq_question] = useState(1);
  const car_imgs = (e) => {
    if (e.target.textContent == "Harrier") {
      setselected_car_img(Harrier);
    }
    if (e.target.textContent == "THAR") setselected_car_img(mahindra_thar);
    if (e.target.textContent == "Seltos") setselected_car_img(seltos);
    if (e.target.textContent == "Hector") setselected_car_img(hector);
    if (e.target.textContent == "Audi A1 S-Line") setselected_car_img(audi);
    if (e.target.textContent == "Carens") setselected_car_img(carens);
  };
  return (
    <div className="w-full">
      {/* =======Hero Section======= */}
      <div className="hero flex items-center w-full min-h-screen px-5 ">
        <div className="hero_left w-[35%] max-md:w-full max-md:text-center max-md:px-6">
          <h2 className="text-xl mb-3">Plan your trip now</h2>
          <h2 className="text-[3rem] leading-[3.5rem]">
            Save <span className="text-[#ff4d30]">big </span> with our car
            rental
          </h2>
          <p className="text-[#706f7b] text-[1rem] mt-6 ">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="hero_left_btns mt-8 flex items-center gap-4 max-md:justify-center max-sm:flex-col">
            <button className="px-6 py-4 bg-[#ff4d30] text-white text-xl rounded shadow_active max-sm:w-full">
              Book Ride <i className="ri-checkbox-circle-line"></i>
            </button>
            <button className="px-6 py-4 bg-[#000] text-white text-xl rounded shadow_active max-sm:w-full">
              Learn More <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>
        </div>
        <div className="hero_right h-[100vh] w-[65%] flex items-center justify-start max-md:hidden">
          <img src={hero_bg} alt="" className=" absolute top-0 right-0 -z-10" />
          <img src={main_car} alt="" className="w-full" />
        </div>
      </div>
      <div className="booking_container flex justify-center mb-16">
        <div className="booking ">
          <h2 className="text-2xl">Book a car</h2>
          <form className=" mt-5">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex flex-col w-[30%] max-md:w-[48%] max-sm:w-full">
                <label htmlFor="car_type" className="text-lg">
                  <i className="ri-car-fill mr-2"></i> Select Your Car Type
                </label>
                <select
                  name="car_type"
                  id="car_type"
                  className="mt-3 border-[1px] border-slate-300 px-4 py-4 outline-0 text-[#706f7b]"
                  required
                >
                  <option value="">Select Your Car Type</option>
                  <option value="Audi A1">Audi A2</option>
                </select>
              </div>
              <div className="flex flex-col w-[30%] max-md:w-[48%] max-sm:w-full">
                <label htmlFor="pick_up" className="text-lg">
                  <i className="ri-map-pin-fill"></i> Pick-up
                </label>
                <select
                  name="pick_up"
                  id="pick_up"
                  className="mt-3 border-[1px] border-slate-300 px-4 py-4 outline-0 text-[#706f7b]"
                  required
                >
                  <option value="">Select pick up location</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Hydrabad">Hydrabad</option>
                </select>
              </div>

              <div className="flex flex-col w-[30%] max-md:w-[48%] max-sm:w-full">
                <label htmlFor="drop_off" className="text-lg">
                  <i className="ri-map-pin-fill"></i> Drop-off
                </label>
                <select
                  name="drop_off"
                  id="drop_off"
                  className="mt-3 border-[1px] border-slate-300 px-4 py-4 outline-0 text-[#706f7b]"
                  required
                >
                  <option value="">Select drop off location</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Hydrabad">Hydrabad</option>
                </select>
              </div>

              <div className="flex flex-col w-[30%] max-md:w-[48%] max-sm:w-full">
                <label htmlFor="pick_up_date" className="text-lg">
                  <i className="ri-calendar-event-line"></i> Pick-up
                </label>
                <input
                  type="date"
                  id="pick_up_date"
                  className="mt-3 border-[1px] border-slate-300 px-4 py-4 outline-0 text-[#706f7b]"
                />
              </div>

              <div className="flex flex-col w-[30%] max-md:w-[48%] max-sm:w-full">
                <label htmlFor="drop_date" className="text-lg">
                  <i className="ri-calendar-event-line"></i> drop-of
                </label>
                <input
                  type="date"
                  id="drop_date"
                  className="mt-3 border-[1px] border-slate-300 px-4 py-4 outline-0 text-[#706f7b]"
                />
              </div>
              <div className="w-[30%] max-md:w-[48%] max-sm:w-full">
                <button
                  className="px-4 py-4 mt-9 bg-[#ff4d30] text-white w-full shadow_active"
                  type="submit"
                >
                  Book Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* ========Trip Plan========== */}
      <TripPlan />
      {/* ======== Vehicle Details ========= */}

      <div className="w-full min-h-screen my-10">
        <div className="mt-20">
          <h4 className="text-center text-2xl mb-4 max-md:mb-2">
            Vehicle Models
          </h4>
          <h2 className="text-center text-5xl max-md:text-4xl">
            Our rental fleet
          </h2>
          <p className="text-center text-[#706f7b] max-md:mt-2">
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </p>
        </div>

        <div className="car_section grid grid-cols-4 mt-10 max-lg:grid-cols-1 px-5 gap-5 max-md:gap-0 ">
          <div className="w-full h-full">
            {car_data.map((car) => (
              <h4
                key={car.id}
                className={
                  selected_car.car_name === car.car_name
                    ? " px-6 bg-[#ff4d30] text-white text-2xl py-3 mb-2 font-normal"
                    : " px-6 bg-[#e9e9e9] text-black text-2xl py-3 mb-2 font-normal"
                }
                onClick={(e) => {
                  setSelected_car(car);
                  car_imgs(e);
                }}
              >
                {car.car_name}
              </h4>
            ))}
          </div>
          <div className="w-full h-full col-span-3 grid gap-5 grid-cols-3 max-md:grid-cols-1 max-md:gap-0 ">
            <div className="w-full h-full col-span-2 ">
              <img
                src={selected_car_img}
                className=" block mx-auto w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-full">
              <div className="car_details">
                <table>
                  <thead>
                    <tr>
                      <th colSpan={2} className="bg-[#ff4d30] text-white py-2">
                        <span className="text-3xl">
                          {selected_car.car_details.car_price}
                        </span>
                        / rent per day
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Model </td>
                      <td>{selected_car.car_details.car_model}</td>
                    </tr>
                    <tr>
                      <td>Year </td>
                      <td>{selected_car.car_details.car_year}</td>
                    </tr>
                    <tr>
                      <td>AC </td>
                      <td>{selected_car.car_details.car_ac}</td>
                    </tr>
                    <tr>
                      <td>Sunroof </td>
                      <td>{selected_car.car_details.car_sunroof}</td>
                    </tr>
                    <tr>
                      <td>Fuel </td>
                      <td>{selected_car.car_details.fuel}</td>
                    </tr>
                  </tbody>
                </table>
                <button className="bg-[#ff4d30] w-full text-white py-4 text-xl mt-3 shadow_active">
                  RESERVE NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== Car Features ========== */}

      <div className=" min-h-screen my-16">
        <div className="w-full h-full bg-[#2d2d2d] my-8 py-16 text-white">
          <h2 className="text-center text-[3.3rem] mb-4 max-md:text-[2.5rem] px-4">
            Save big with our cheap car rental!
          </h2>
          <p className="text-center text-2xl">
            Top Airports. Local Suppliers.{" "}
            <span className="text-[#ff4d30]">24/7 </span> Support.
          </p>
        </div>
        <div className="pt-10">
          <div>
            <img src={car_banner} className="block mx-auto" />
          </div>
          <div className=" grid grid-cols-2 gap-14 px-16 max-md:grid-cols-1 max-sm:px-5">
            <div className="w-full h-full ">
              <h4 className="text-2xl mb-2">Why Choose Us</h4>
              <h2 className="text-5xl mb-6">
                Best valued deals you will ever find
              </h2>
              <p className=" text-[#706f7b] mb-8">
                Discover the best deals you'll ever find with our unbeatable
                offers. We're dedicated to providing you with the best value for
                your money, so you can enjoy top-quality services and products
                without breaking the bank. Our deals are designed to give you
                the ultimate renting experience, so don't miss out on your
                chance to save big.
              </p>
              <button className="bg-[#ff4d30] text-white px-6 py-4 rounded text-lg shadow_active">
                Find Details <i className="ri-arrow-right-s-line"></i>
              </button>
            </div>
            <div className="w-full h-full px-10 max-sm:px-4">
              <div className="flex items-center justify-around gap-4 mb-10 max-sm:flex-col">
                <div className="w-[15rem] max-sm:w-[7rem]">
                  <img src={cross_country} className="w-full" />
                </div>
                <div>
                  <h2 className="text-2xl mb-3 max-sm:text-center">
                    Cross Country Drive
                  </h2>
                  <p className="text-[#706f7b] max-sm:text-center">
                    Take your driving experience to the next level with our
                    top-notch vehicles for your cross-country adventures.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-around gap-4 mb-10 max-sm:flex-col">
                <div className="w-[13rem] max-sm:w-[6rem]">
                  <img src={pricing} className="w-full" />
                </div>
                <div>
                  <h2 className="text-2xl mb-3 max-sm:text-center">
                    All Inclusive Pricing
                  </h2>
                  <p className="text-[#706f7b] max-sm:text-center">
                    Get everything you need in one convenient, transparent price
                    with our all-inclusive pricing policy.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-around gap-4 mb-5 max-sm:flex-col">
                <div className="w-[13rem] max-sm:w-[6rem]">
                  <img src={charges} className="w-full" />
                </div>
                <div>
                  <h2 className="text-2xl mb-3 max-sm:text-center">
                    No Hidden Charges
                  </h2>
                  <p className="text-[#706f7b] max-sm:text-center">
                    Enjoy peace of mind with our no hidden charges policy. We
                    believe in transparent and honest pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======= Clients Reviews ========  */}
      <div className="w-full min-h-screen bg-[#f8f8f8] py-20 px-20 max-md:px-5 max-md:py-2">
        <div className="py-16">
          <h4 className="text-center text-2xl my-3 max-sm:text-lg">
            Reviewed by People
          </h4>
          <h2 className="text-center text-5xl ">Client's Testimonials</h2>
          <p className="my-3 text text-center px-48 max-md:px-5 text-[#706f7b]">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>
        <Testumonials />
      </div>

      {/* ========== Frequently Asked Questions =========== */}

      <div className="w-full min-h-screen py-24">
        {/* Part-1 */}
        <div className="px-5">
          <h3 className="text-center text-2xl">FAQ</h3>
          <h2 className="text-center text-4xl my-5">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[#706f7b] w-1/2 block mx-auto max-sm:w-full">
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </p>
        </div>
        {/* Part-2 */}
        <div className="faq_section h-full">
          <div className=" w-[70%] h-full shadow_active bg-white max-sm:w-full">
            <div className="faq_box border-b-[1px] border-slate-100	">
              <div
                className={
                  faq_question === 1
                    ? "flex justify-between items-center cursor-pointer bg-[#ff4d30] text-white px-10 shadow_active py-3"
                    : "flex justify-between items-center cursor-pointer px-10 py-3"
                }
                onClick={() => {
                  if (faq_question !== 1) setfaq_question(1);
                  if (faq_question === 1) setfaq_question(0);
                }}
              >
                <h4 className="text-xl font-[400]">
                  1. What is special about comparing rental car deals?
                </h4>
                <i className="ri-arrow-down-s-line text-3xl"></i>
              </div>
              <div
                className={faq_question == 1 ? "answer active_faq" : "answer"}
              >
                <p className="text-[#706f7b] text-lg max-sm:text-base">
                  Comparing rental car deals is important as it helps find the
                  best deal that fits your budget and requirements, ensuring you
                  get the most value for your money. By comparing various
                  options, you can find deals that offer lower prices,
                  additional services, or better car models. You can find car
                  rental deals by researching online and comparing prices from
                  different rental companies.
                </p>
              </div>
            </div>
            <div className="faq_box border-b-[1px] border-slate-100">
              <div
                className={
                  faq_question === 2
                    ? "flex justify-between items-center cursor-pointer bg-[#ff4d30] text-white px-10 shadow_active"
                    : "flex justify-between items-center cursor-pointer px-10"
                }
                onClick={() => {
                  if (faq_question !== 2) setfaq_question(2);
                  if (faq_question === 2) setfaq_question(0);
                }}
              >
                <h4 className="text-xl font-[400] py-3">
                  2. How do I find the car rental deals?
                </h4>
                <i className="ri-arrow-down-s-line text-3xl"></i>
              </div>
              <div
                className={faq_question == 2 ? "answer active_faq" : "answer "}
              >
                <p className="text-[#706f7b] text-lg ">
                  You can find car rental deals by researching online and
                  comparing prices from different rental companies. Websites
                  such as Expedia, Kayak, and Travelocity allow you to compare
                  prices and view available rental options. It is also
                  recommended to sign up for email newsletters and follow rental
                  car companies on social media to be informed of any special
                  deals or promotions.
                </p>
              </div>
            </div>
            <div className="faq_box">
              <div
                className={
                  faq_question === 3
                    ? "flex justify-between items-center cursor-pointer bg-[#ff4d30] text-white px-10 shadow_active"
                    : "flex justify-between items-center cursor-pointer px-10"
                }
                onClick={() => {
                  if (faq_question !== 3) setfaq_question(3);
                  if (faq_question === 3) setfaq_question(0);
                }}
              >
                <h4 className="text-xl font-[400] py-3">
                  3. How do I find such low rental car prices?
                </h4>
                <i className="ri-arrow-down-s-line text-3xl"></i>
              </div>
              <div
                className={faq_question == 3 ? "answer active_faq" : "answer "}
              >
                <p className="text-[#706f7b] text-lg ">
                  Book in advance: Booking your rental car ahead of time can
                  often result in lower prices. Compare prices from multiple
                  companies: Use websites like Kayak, Expedia, or Travelocity to
                  compare prices from multiple rental car companies. Look for
                  discount codes and coupons: Search for discount codes and
                  coupons that you can use to lower the rental price. Renting
                  from an off-airport location can sometimes result in lower
                  prices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======= App Download Section ======== */}

      <div className="app_download">
        <div className="w-1/2 px-8 max-sm:w-full">
          <h2 className=" text-[2.5rem] leading-[3r.5em] py-3 max-sm:text-center">
            Download our app to get most out of it
          </h2>
          <p className="text-[#706f7b] py-3 max-sm:text-center">
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div className="flex gap-4 py-5 max-sm:flex-col">
            <img
              src={playstore_img}
              className=" max-sm:w-[70%] block mx-auto"
            />
            <img src={appstore_img} className="max-sm:w-[70%] block mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
