import React from "react";

const MissionSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        {/* Mission Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-gray-800 text-white rounded-lg px-4 py-2 mb-6">
            <span className="mr-2">PostNutDAO</span>
            <div className="w-6 h-6 rounded-full bg-gray-200"></div>
          </div>
          <h2 className="text-5xl font-bold mb-6">OUR MISSION</h2>
          <p className="text-gray-600">
            By leveraging blockchain technology PostNutDAO is aiming to educate
            the masses on mens health in a easy and accessible way for everyone.
          </p>
        </div>

        {/* Educational Dapp Card */}
        <div className="max-w-4xl mx-auto bg-orange-300 rounded-2xl p-8 mb-16">
          <div className="md:grid md:grid-cols-2 gap-8 items-center">
            {/* 3D Objects Container */}
            <div className="relative mb-8 md:mb-0">
              <img
                src="/api/placeholder/400/300"
                alt="Educational elements"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <div className="inline-flex items-center bg-white rounded-lg px-4 py-2 mb-4">
                <span className="mr-2">PostNutDAO DAPP</span>
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              </div>
              <p className="text-xl text-gray-800">
                The team is working on a educational dapp that will educate
                users on mens health and DeSci.
              </p>
            </div>
          </div>
        </div>

        {/* Launch Info */}
        <div className="max-w-4xl mx-auto bg-gray-900 text-white rounded-2xl p-8 mb-16 text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl font-serif">Launched on</span>
              <img
                src="/api/placeholder/32/32"
                alt="PacaPump"
                className="rounded-full"
              />
              <span className="text-2xl text-purple-400 font-serif">
                PacaPump
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl font-serif">Trade on</span>
              <span className="text-2xl text-green-400 font-serif">
                KongSwap
              </span>
              <img
                src="/api/placeholder/32/32"
                alt="KongSwap"
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Trade Section */}
        <div className="max-w-4xl mx-auto bg-cyan-100 rounded-2xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-3">
              <img
                src="/api/placeholder/40/40"
                alt="Token"
                className="rounded-full"
              />
              <span className="text-2xl font-semibold">
                Trade $NUT on KongSwap today
              </span>
            </div>
            <button className="bg-orange-200 text-gray-800 px-6 py-2 rounded-full inline-flex items-center">
              Buy Now
              <svg
                className="w-4 h-4 ml-2"
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
        </div>

        {/* Footer */}
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">
            Join our community
          </h3>
          <div className="flex justify-center space-x-6">
            <button className="bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition-colors">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zm-11.5 2.175l-1.638-1.637L9.5 14.9l2.863 2.862 5.637-5.637-1.362-1.362z" />
              </svg>
            </button>
            <button className="bg-indigo-600 p-3 rounded-full hover:bg-indigo-700 transition-colors">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
              </svg>
            </button>
            <button className="bg-sky-500 p-3 rounded-full hover:bg-sky-600 transition-colors">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
