import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row min-h-[80vh]">
          {/* Left side content */}
          <div className="flex items-center justify-center w-full px-6 py-16 lg:py-24 lg:w-1/2">
            <div className="max-w-xl">
              <h1 className="text-4xl font-medium text-slate-800 lg:text-8xl">
                Find The Perfect <span className="text-slate-800">Caregiver</span> For Your Loved Ones.
              </h1>

              <p className="mt-6 text-base text-slate-600 md:text-lg">
                We provide professional and personalized caregiving services 
                to help seniors maintain their independence and quality of life 
                in the comfort of their own homes.
              </p>

              <div className="flex flex-col mt-8 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Link 
                  href="/service" 
                  className="px-8 py-3 text-lg font-medium text-center text-white transition-colors duration-300 transform bg-cyan-600 rounded-lg hover:bg-cyan-700"
                >
                  Our Services
                </Link>
                <Link 
                  href="/contact" 
                  className="px-8 py-3 text-lg font-medium text-center text-slate-800 transition-colors duration-300 transform bg-slate-100 rounded-lg hover:bg-slate-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Right side image */}
          <div className="w-full lg:w-1/2 h-[55vh] sm:h-[65vh] lg:h-auto">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-[90%] h-[90%] lg:w-[95%] lg:h-[95%]">
                <Image 
                  src="/images/Image1.png" 
                  alt="Caregiver with elderly patient"
                  className="object-contain lg:object-cover rounded-lg"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 45vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 