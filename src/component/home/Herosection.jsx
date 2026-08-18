
import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Herosection() {

  const navigate = useNavigate();
  return (
    <section className="w-full bg-gray-900 mt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* Left Content */}
          <div>
            <p className="text-red-500 font-bold text-lg mb-3">
              NEW COLLECTION
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Upgrade Your
              <span className="text-orange-500"> Digital Lifestyle</span>
            </h1>

            <p className="mt-5 text-2xl font-semibold text-gray-200">
              TechShop — The Best E-Commerce in{" "}
              <span className="text-red-500">Cambodia</span>
            </p>

            <p className="mt-4 text-gray-400 text-lg leading-8 max-w-xl">
              Discover the latest laptops, phones, accessories, and computer
              products at great prices.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
              onClick={()=>navigate("/shop")}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold transition duration-300">
                Shop Now
                <FaArrowAltCircleRight />
              </button>

              <button className="px-6 py-3 rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-lg font-bold transition duration-300">
                About Us
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="overflow-hidden rounded-3xl shadow-lg shadow-orange-500/30">
              <img
                src="https://i.pinimg.com/736x/46/c3/cd/46c3cde9dfbc49f1f16f9b0fcce99c45.jpg"
                alt="TechShop Collection"
                className="w-full max-w-lg h-[450px] object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Herosection;
