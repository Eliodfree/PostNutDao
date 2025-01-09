const MissionSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Mission Section */} 
        <div className="relative max-w-3xl mx-auto text-center mb-16">
  {/* Wrapper with mask */}
      <div className="relative">
    {/* Video element */}
    <video
      className="w-full h-auto object-cover bg-contain bg-center bg-no-repeat opacity-40"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/videos/doctor.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Gradient overlay for fading effect */}
    <div
      className="absolute inset-0 pointer-events-none "
      style={{
        background: `
        linear-gradient(to right, 
          #ECFEFF 0%, 
          transparent 10%, 
          transparent 90%, 
          #ECFEFF 100%
        ),
        linear-gradient(to bottom, 
          #ECFEFF 0%, 
          transparent 10%, 
          transparent 90%, 
          #ECFEFF 100%
        )
      `,
      }}
    />
  </div>

  {/* Content overlaying the video */}
  <div className="flex flex-col items-center justify-center text-center sm:absolute sm:inset-0 sm:justify-end">
    {/* "PostNutDAO" Box */}
    <div className="relative inline-flex items-center bg-[#1a1a1a] text-white rounded-lg px-6 py-2 mb-4 sm:px-8 sm:py-3">
      <span className="mr-2 font-medium text-sm sm:text-base md:text-lg px-4">
        PostNutDAO
      </span>
      <div className="absolute bottom-3 right-0 bg-green-50 rounded-full">
        <img
          src="/images/peunut.png"
          alt="dao"
          className="rounded-full"
        />
      </div>
    </div>

    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 tracking-tight">
      OUR MISSION
    </h2>

    {/* Subheading */}
    <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
      By leveraging blockchain technology, PostNutDAO is aiming to educate the masses on men's health in an easy and accessible way for everyone.
    </p>
  </div>
      </div>

      

        {/*postDao*/}
        <div className="max-w-4xl mx-auto bg-[#FFC16D] rounded-2xl p-8 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="relative mb-8 mx-5 md:mb-0 md:w-1/2">
              {/* Wrapper div with mask */}
              <div className="relative">
                {/* Video element */}
                <video
                  className="w-full h-auto object-cover bg-contain bg-center bg-no-repeat opacity-40"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/bag.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Gradient overlay for fade effect */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `
                  linear-gradient(to right, 
                    #FFC16D 0%, 
                    transparent 10%, 
                    transparent 90%, 
                    #FFC16D 100%
                  ),
                  linear-gradient(to bottom, 
                    #FFC16D 0%, 
                    transparent 10%, 
                    transparent 90%, 
                    #FFC16D 100%
                  )
                `,
                  }}
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative inline-flex items-center bg-white rounded-lg px-8 py-2 mb-4">
                <span className="mr-2">PostNutDAO DAPP</span>
                <div className="absolute bottom-3 right-0 rounded-full overflow-hidden">
                  <img
                    src="/images/peunut.png"
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
        </div>{" "}
        
        <div className="flex items-center justify-center max-w-4xl mx-auto bg-black text-white rounded-2xl p-8 mb-16 h-auto sm:h-[175px]">
          {/* Small screens: side-by-side layout */}
          <div className="sm:hidden flex flex-col items-center justify-center space-y-4">
            <div className="flex flex-col items-center gap-3">
              <img
                src="/images/logo.png"
                alt="PacaPump"
                className="w-8 h-8 rounded-full"
              />
              <div className="text-center">
                <span className="text-3xl font-bold text-[#FFDBA9] block">
                  Launched on
                </span>
                <span className="text-3xl text-purple-400 font-serif">
                  PacaPump
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <img
                src="/images/giant.png"
                alt="KongSwap"
                className="w-8 h-8 rounded-full"
              />
              <div className="text-center">
                <span className="text-3xl  font-bold text-white block">
                  Trade on
                </span>
                <span className="text-3xl text-green-400 font-serif">
                  KongSwap
                </span>
              </div>
            </div>
          </div>

          <div className="hidden sm:flex flex-col space-y-4">
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl font-bold text-[#FFDBA9]">
                Launched on
              </span>
              <img
                src="/images/logo.png"
                alt="PacaPump"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-3xl font-bold text-purple-400 font-serif">
                PacaPump
              </span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl font-bold text-white">Trade on</span>
              <span className="text-3xl font-bold text-green-400 font-serif">
                KongSwap
              </span>
              <img
                src="/images/giant.png"
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
              <img src="/images/peunut.png" alt="Token" className="w-8 h-8" />
              <span className="text-3xl font-bold">$NUT on</span>
            </div>
            <div className="text-3xl font-bold mb-6">KongSwap today</div>
            <div className="relative inline-block">
              <button className="bg-orange-200 text-gray-800 px-6 py-3 rounded-full inline-flex items-center shadow-lg hover:bg-orange-300 pr-12">
                Buy Now
              </button>
              <div className="absolute top-1/2 right-0 -translate-y-1/2 bg-[#0A3442] rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                <div>
                  <svg
                    className="w-5 h-5 text-white"
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
                  src="/images/Telegram_logo.webp"
                  alt="Telegram"
                  className="w-6 h-6"
                />
              </button>
              <button className="bg-purple-600 p-3 rounded-full hover:bg-purple-700 transition-colors">
                <img
                  src="/images/discord.png"
                  alt="Discord"
                  className="w-6 h-6"
                />
              </button>
              <button className="bg-sky-500 p-3 rounded-full hover:bg-sky-600 transition-colors">
                <img
                  src="/images/twitter.webp"
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
              src="/images/bigpeaunut.png"
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
