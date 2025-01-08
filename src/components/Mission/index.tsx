

const MissionSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-1">
 
        <div className="relative max-w-3xl mx-auto text-center mb-16">
        
          <div className="relative">
            <img
              className="w-full h-auto bg-contain bg-center bg-no-repeat"
              src="/src/assets/images/background.png"
              alt="Background"
            />
            
            {/* Content overlaying the bottom half of the image */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-cyan-50  to-transparent pt-34 pb-8">
              <div className="relative  inline-flex items-center bg-[#1a1a1a] text-white rounded-lg px-8 py-2 mb-6">
                <span className="mr-2 font-medium">PostNutDAO</span>
                <div className="absolute  bottom-3 right-0 rounded-full overflow-hidden  bg-slate-50">
                  <img
                    src="/src/assets/images/peunut.png"
                    alt="PostNutDAO Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h2 className="text-6xl font-bold mb-6 tracking-tight">OUR MISSION</h2>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
                By leveraging blockchain technology PostNutDAO is aiming to educate
                the masses on mens heath in a easy and accessible way for everyone.
              </p>
            </div>
          </div>
        </div>



        <div className="max-w-4xl mx-auto bg-[#FFC16D] rounded-2xl p-8 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="relative mb-8 md:mb-0 md:w-1/2">
              <img
                src="/src/assets/images/video.png"
                alt="Educational elements"
                className="relative z-10 max-w-md w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <div className=" relative inline-flex items-center bg-white rounded-lg px-8 py-2 mb-4">
                <span className="mr-2">PostNutDAO DAPP</span>
                <div className="absolute  bottom-3 right-0 rounded-full overflow-hidden ">
                  <img
                    src="/src/assets/images/peunut.png"
                    alt="PostNutDAO Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-xl text-gray-800">
                The team is working on a educational dapp that will educate
                users on mens health and DeSci.
              </p>
            </div>
          </div>
        </div>

     
        <div className="flex items-center justify-center  max-w-4xl mx-auto bg-black text-white rounded-2xl p-8 mb-16  h-[175px]">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl font-serif text-[#FFD700]">
                Launched on
              </span>
              <img
                src="/src/assets/images/logo.png"
                alt="PacaPump"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-2xl text-purple-400 font-serif">
                PacaPump
              </span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl font-serif text-white">Trade on</span>
              <span className="text-2xl text-green-400 font-serif">
                KongSwap
              </span>
              <img
                src="/src/assets/images/giant.png"
                alt="KongSwap"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
        </div>

       
        <div className="max-w-4xl mx-auto bg-cyan-100 rounded-2xl p-8 mb-5 relative">
          <div className="flex flex-col items-center text-center relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl font-bold">Trade</span>
              <img
                src="/src/assets/images/peunut.png"
                alt="Token"
                className="w-8 h-8"
              />
              <span className="text-3xl font-bold">$NUT on</span>
            </div>
            <div className="text-3xl font-bold mb-6">KongSwap today</div>
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

      
        <div className="flex items-center justify-evenly max-w-4xl mx-auto text-center relative  ">
          <div>
          <h3 className="text-4xl mb-4">
            Join our
            <br />
            <span className="font-serif text-brown-600">community</span>
          </h3>
          <div className="flex justify-center gap-4 mb-8">
            <button className="bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition-colors">
              <img
                src="/src/assets/images/Telegram_logo.webp"
                alt="Telegram"
                className="w-6 h-6"
              />
            </button>
            <button className="bg-purple-600 p-3 rounded-full hover:bg-purple-700 transition-colors">
              <img
                src="/src/assets/images/discord.png"
                alt="Discord"
                className="w-6 h-6"
              />
            </button>
            <button className="bg-sky-500 p-3 rounded-full hover:bg-sky-600 transition-colors">
              <img
                src="/src/assets/images/twitter.webp"
                alt="Twitter"
                className="w-6 h-6"
              />
            </button>
          </div>
          </div>
          <div></div>
          {/* Character illustration */}
          <div className="absolute bottom-0 right-0 hidden sm:block">
            <img
              src="/src/assets/images/bigpeaunut.png"
              alt="Character with peanut"
              className="w-64 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
