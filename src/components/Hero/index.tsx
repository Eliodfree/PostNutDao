import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-cyan-400 min-h-screen relative overflow-hidden">
      {/* Top Banner */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[76%] md:w-[76%] flex justify-between items-center bg-white rounded-full px-6 py-2 shadow-lg">
        <div className="flex items-center space-x-2">
          <span className="text-sm md:text-base font-medium flex items-center">
            The
            <img
              src="/src/assets/images/peunut.png"
              alt="token"
              className="rounded-full ml-2"
            />
          </span>
          <span className="text-sm md:text-base font-medium">
            SNUT token is live on KongSwap!
          </span>
        </div>
        <button className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm md:text-base hover:bg-gray-800">
          Buy Now
        </button>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 pt-32 md:pt-36 bg-green-400">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-blue-500">
          {/* Left Content */}
          <div className="md:max-w-xl z-10">
            {/* DAO Badge */}
            <div className="inline-flex items-center bg-gray-900 text-white rounded-full px-4 py-2 mb-6 shadow-md">
              <span className="mr-2 text-sm md:text-base">PostNutDAO</span>
              <img
                src="/src/assets/images/peunut.png"
                alt="dao"
                className="rounded-full"
              />
            </div>

            {/* Hero Text */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Empowering men's health through education
            </h1>

            <p className="text-gray-800 mb-8 max-w-lg">
              PostNutDAO is an educational DeSci (Decentralized Science) project
              focused on men's health. Striving to educate and inspire.
            </p>

            {/* CTA Button */}
            <button className="bg-orange-200 text-gray-800 px-6 py-3 rounded-full inline-flex items-center shadow-lg hover:bg-orange-300">
              Buy Now
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <img
              src="/src/assets/images/hero.png"
              alt="Hero illustration"
              className="relative z-10 max-w-md"
            />
          </div>

          {/* Mobile Image */}
          <div className="md:hidden mt-8">
            <img
              src="/src/assets/images/hero.png"
              alt="Hero illustration"
              className="w-full max-w-sm mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
