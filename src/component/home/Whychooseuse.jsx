import React from "react";
import {
  FaTruckFast,
  FaShieldHalved,
  FaRotateLeft,
  FaHeadset,
} from "react-icons/fa6";

function WhyChooseTechShop() {
  const features = [
    {
      icon: <FaTruckFast />,
      title: "Fast & Free Delivery",
      description:
        "Enjoy fast and reliable delivery with free shipping on selected orders.",
    },
    {
      icon: <FaShieldHalved />,
      title: "Secure Payment",
      description:
        "Your payment and personal information are protected with secure technology.",
    },
    {
      icon: <FaRotateLeft />,
      title: "Easy Returns",
      description:
        "Shop with confidence with our simple and convenient return policy.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Customer Support",
      description:
        "Our support team is always ready to help you with your questions.",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
            Why TechShop?
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Why Choose TechShop
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            We make your shopping experience simple, secure, and convenient.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 text-center shadow-sm
                         border border-gray-100
                         hover:shadow-lg hover:-translate-y-1
                         transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="w-16 h-16 mx-auto mb-5
                           flex items-center justify-center
                           rounded-full bg-blue-50
                           text-blue-600 text-2xl"
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-6">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseTechShop;