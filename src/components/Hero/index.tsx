const HeroSection = () => {
  return (
    <div className="bg-cyan-400 min-h-screen relative overflow-hidden">
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[80%] md:w-[76%] flex justify-between items-center bg-white rounded-full px-2 md:px-6 py-2 shadow-lg  ">
        <div className="flex items-center space-x-2">
          <span className="text-sm md:text-base font-medium flex items-center">
            The
            <img
              src="/images/peunut.png"
              alt="token"
              className="rounded-full ml-2 sm:mr-3 mr-6 "
            />
          </span>
          <span className="text-sm md:text-sm font-medium sm:text-sm">
          $NUT token is live on KongSwap!
          </span>
        </div>
        <button className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm md:text-base hover:bg-gray-800">
          Buy Now
        </button>
      </div>

      <div
        className="container mx-auto px- pt-32 md:pt-36  flex items-center justify-center w-[76%] md:w-[76%] mt-16
      "
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between  w-full md:w-full ">
          <div className="md:max-w-xl z-10 ">
            {/* DAO Badge */}
            <div className="relative inline-flex items-center bg-gray-900 text-white rounded-md px-8  py-2 mb-6 shadow-md">
              <span className="mr-2 text-sm md:text-base">PostNutDAO</span>
              <div className="absolute  bottom-3 right-0 bg-green-50 rounded-full">
                <img
                  src="/images/peunut.png"
                  alt="dao"
                  className="rounded-full"
                />
              </div>
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
            <div className="relative inline-block">
              <button className="bg-orange-200 text-gray-800 px-6 py-3 rounded-full inline-flex items-center shadow-lg hover:bg-orange-300 pr-12">
                Buy Now
              </button>
              <div className="absolute top-1/2 right-0 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                <svg
                  className="w-5 h-5 text-gray-800"
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
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <img
              src="/images/hero.png"
              alt="Hero illustration"
              className="relative z-10 max-w-md"
            />
          </div>

          {/* Mobile Image */}
          <div className="md:hidden mt-8">
            <img
              src="/images/hero.png"
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
