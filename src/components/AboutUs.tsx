import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Images and Rating */}
          <div className="relative">
            {/* Dotted pattern background */}
            <div className="absolute -top-6 -left-6 w-24 h-24 grid grid-cols-6 gap-2">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-slate-300"></div>
              ))}
            </div>
            
            {/* Images container */}
            <div className="relative z-10">
              {/* First image */}
              <div className="relative w-4/5 h-72 mb-4 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/Image2.png"
                  alt="Caregiver with patient"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Second image positioned to the right */}
              <div className="relative w-4/5 h-72 ml-auto rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/Image3.png"
                  alt="Caregiver with elderly patient"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Rating box */}
              <div className="absolute bottom-4 left-0 bg-white rounded-lg p-4 shadow-lg w-48">
                <div className="flex text-[#F26D3D]">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-300" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-slate-800 mt-2 font-medium text-lg">4.9 out of 5 stars</p>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
              We Take Great Care<br />
              Of Your Issues.
            </h2>
            
            <p className="mt-6 text-slate-600">
              We&apos;re committed to providing compassionate care services tailored to each individual&apos;s needs, 
              ensuring comfort, dignity, and the highest quality of life for your loved ones.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <span className="text-[#F26D3D] mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </span>
                <span className="text-slate-800 font-semibold text-lg">Excellent Protection</span>
              </div>
              
              <div className="flex items-center">
                <span className="text-[#F26D3D] mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </span>
                <span className="text-slate-800 font-semibold text-lg">High Savings Potential</span>
              </div>
              
              <div className="flex items-center">
                <span className="text-[#F26D3D] mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </span>
                <span className="text-slate-800 font-semibold text-lg">Maximum Time Savings</span>
              </div>
            </div>

            <div className="mt-10">
              <Link 
                href="/about" 
                className="inline-block px-8 py-4 bg-cyan-600 text-white font-medium rounded-lg transition-colors hover:bg-cyan-700"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 