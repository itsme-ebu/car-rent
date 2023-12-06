import React, { useState } from "react";
import { logo_img } from "../assets";
import { Link, NavLink } from "react-router-dom";
function Header() {
  const [navTrigger, setNavTrigger] = useState(false);
  const [mobile_nav, setmobile_nav] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 80) {
      setNavTrigger(true);
    } else {
      setNavTrigger(false);
    }
  });

  return (
    <div>
      {/* ======== Mobile Nav Menu ========= */}
      <div
        className={
          mobile_nav ? "mobile_nav_menu show_mobile_nav " : "mobile_nav_menu"
        }
      >
        <div onClick={() => setmobile_nav(false)}>
          <i className="ri-close-line text-5xl absolute right-8 top-8"></i>
        </div>

        <div className=" w-full h-full flex items-center justify-center">
          <ul className="text-center">
            <li className="text-2xl py-3">
              <NavLink
                to=""
                onClick={() => setmobile_nav(false)}
                className={({ isActive }) =>
                  isActive ? " text-[#ff4d30]" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="text-2xl py-3">
              <NavLink
                to="/about"
                onClick={() => setmobile_nav(false)}
                className={({ isActive }) =>
                  isActive ? " text-[#ff4d30]" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li className="text-2xl py-3">
              <Link
                to="/models"
                onClick={() => setmobile_nav(false)}
                className={({ isActive }) =>
                  isActive ? " text-[#ff4d30]" : ""
                }
              >
                Models
              </Link>
            </li>
            <li className="text-2xl py-3">
              <NavLink
                to="/testimonials"
                onClick={() => setmobile_nav(false)}
                className={({ isActive }) =>
                  isActive ? " text-[#ff4d30]" : ""
                }
              >
                Testimonials
              </NavLink>
            </li>
            <li className="text-2xl py-3">
              <NavLink
                to="/team"
                onClick={() => setmobile_nav(false)}
                className={({ isActive }) =>
                  isActive ? " text-[#ff4d30]" : ""
                }
              >
                Our Team
              </NavLink>
            </li>
            <li className="text-2xl py-3">
              <NavLink
                to="/contact"
                onClick={() => setmobile_nav(false)}
                className={({ isActive }) =>
                  isActive ? " text-[#ff4d30]" : ""
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* ========= Nav Menu ======= */}
      <nav
        className={
          navTrigger
            ? "flex justify-between p-6 items-center fixed top-0 w-full h-24 nav_active z-10"
            : "flex justify-between p-6 items-center fixed top-0 w-full h-24"
        }
      >
        <div className="logo w-[9rem]">
          <Link to="">
            <img src={logo_img} alt="car-rental" className=" w-full" />
          </Link>
        </div>
        <div className="nav_menu max-lg:hidden">
          <ul className="flex gap-6">
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive ? " text-[#ff4d30]" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? " text-[#ff4d30]" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/models"
                className={({ isActive }) =>
                  isActive ? " text-[#ff4d30]" : ""
                }
              >
                Vehicle Models
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/testimonials"
                className={({ isActive }) =>
                  isActive ? " text-[#ff4d30]" : ""
                }
              >
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/team"
                className={({ isActive }) =>
                  isActive ? " text-[#ff4d30]" : ""
                }
              >
                Our Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? " text-[#ff4d30]" : ""
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav_btns flex gap-7 items-center max-lg:hidden">
          <h2>Sign In</h2>
          <button className="px-8 py-3 bg-[#ff4d30] text-white rounded shadow_active ">
            Register
          </button>
        </div>
        <div
          className="nav_menu_icon hidden max-lg:block"
          onClick={() => setmobile_nav(true)}
        >
          <i className="ri-menu-line text-3xl"></i>
        </div>
      </nav>
    </div>
  );
}

export default Header;
