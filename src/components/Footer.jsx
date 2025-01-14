import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black w-full text-white p-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
        {/* About Section */}
        <div className="w-full max-w-sm text-justify  flex flex-col ">
          <h5 className="font-bold mb-3">
            <i className="fa-solid fa-heart-pulse text-red-600 text-xl"></i>
            &nbsp; HealthCart
          </h5>
          <p>
            Designed and built with all the love in the world by the Media team
            with the help of our contributors.
          </p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>

        {/* Brands */}
        <div  className="flex flex-col gap-3 ">
          <h5 className="mb-4 font-bold">Brands</h5>
          <a
            href="https://www.muscleblaze.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            MuscleBlaze
          </a>
          <a
            href="https://fitfoodsforlife.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Fit Foods
          </a>
          <Link to="#" className="hover:underline">
            HK Vitals
          </Link>
          <Link to="#" className="hover:underline">
            TrueBasics
          </Link>
        </div>

        {/* Health & Fitness Guides */}
        <div className="flex flex-col gap-3">
          <h5 className="mb-4 font-bold">Health & Fitness</h5>
          <Link to="#" className="hover:underline">
            Hair & Skin Care
          </Link>
          <Link to="#" className="hover:underline">
            Sports Nutrition
          </Link>
          <Link to="#" className="hover:underline">
            Vitamins & Supplements
          </Link>
          <Link to="#" className="hover:underline">
            Ayurveda & Herbs
          </Link>
        </div>

        {/* Contact Section */}
        <div className="max-w-xs">
          <h5 className="mb-4 font-bold">Contact Us</h5>
          <form className="flex gap-3 mb-4">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email"
              className="rounded h-8 w-full px-2"
              required
            />
            <button className="bg-white text-violet-600 px-3 rounded">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>
          <div className="flex justify-between mt-5">
            <a href="#" aria-label="GitHub" className="hover:text-gray-400">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-400">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gray-400">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-400">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
