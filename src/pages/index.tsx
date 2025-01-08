

const Home = () => {
  return (
    <div className="bg-cyan-400 min-h-screen p-8">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center bg-white rounded-full px-4 py-2">
          <div className="w-6 h-6 rounded-full bg-gray-200 mr-2"></div>
          <span className="text-gray-800">The SNUT token is live on KongSwap!</span>
        </div>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">
          Buy Now
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl">
        {/* DAO Badge */}
        <div className="inline-flex items-center bg-gray-800 text-white rounded-lg px-4 py-2 mb-6">
          <div className="w-6 h-6 rounded-full bg-gray-200 mr-2"></div>
          <span>PostNutDAO</span>
        </div>

        {/* Hero Content */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h1 className="text-6xl font-bold text-gray-800 leading-tight mb-6">
              Empowering men's health through education
            </h1>
            <p className="text-gray-700 mb-8">
              PostNutDAO is an educational DeSci (Decentralized Science) project focused on mens health. Striving to educate and inspire.
            </p>
            <button className="bg-orange-200 text-gray-800 px-6 py-3 rounded-full inline-flex items-center">
              Buy Now
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Placeholder for the anime character illustration */}
          <div className="relative">
            <img 
              src="/api/placeholder/400/400"
              alt="Educational character"
              className="absolute right-0 bottom-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;