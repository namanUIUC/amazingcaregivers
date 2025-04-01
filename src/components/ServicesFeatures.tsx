import Image from 'next/image';
import Link from 'next/link';

const ServicesFeatures = () => {
  return (
    <section className="py-16 md:py-24 relative">
      {/* Dark background that doesn't span the entire width */}
      <div className="absolute inset-0 bg-slate-900 left-0 right-0 h-[30%] top-[10%]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Top section as a 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 pb-24">
          {/* Block 1: First image (top-left) */}
          <div className="relative z-10 flex items-center justify-center">
            <div className="relative h-60 w-3/4 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/Image5.png"
                alt="Caregiver with patient"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 75vw, 38vw"
              />
            </div>
          </div>

          {/* Block 2: Title (top-right) */}
          <div className="flex flex-col justify-end text-white relative">
            <h2 className="text-4xl font-bold mb-6">
              We Take Amazing Care<br />Of Your Problems..
            </h2>
            
            {/* Dotted pattern */}
            <div className="hidden md:flex flex-wrap w-24 absolute right-[0%] -bottom-[30%]">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-600 m-1"></div>
              ))}
            </div>
          </div>

          {/* Block 3: Text content (bottom-left) */}
          <div className="text-white md:pt-6">
            <p className="text-slate-300 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti quam ac viverra erat vel phaselius pharetra. Viverra interdum felis fermentum dictum nibi sem faucibusa.
            </p>

            <p className="text-slate-300">
              Nulla ornare venenatis a ut augue ac turpis amet aliquet. Convallis dui nunc mauris eget. Viverra morbi tellus euismod ac. Tristique at egestas sed vulputate arcu consectetur tornes.
            </p>
          </div>
          
          {/* Block 4: Second image (bottom-right) */}
          <div className="relative z-10 flex items-center justify-center">
            <div className="relative h-96 w-7/8 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/Image4.png"
                alt="Caregiver with elderly patient"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 75vw, 38vw"
              />
            </div>
          </div>
        </div>

        {/* Section title */}
        <div className="mb-16 mt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            What Service We Provide.
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <div className="bg-orange-500 w-16 h-16 flex items-center justify-center rounded-lg mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Special Care</h3>
            <p className="text-slate-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat faucibus ac lectus blandit erat.
            </p>
            <Link href="/services/special-care" className="flex items-center text-slate-800 font-medium">
              Learn more
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <div className="bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-lg mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Medical Check</h3>
            <p className="text-slate-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat faucibus ac lectus blandit erat.
            </p>
            <Link href="/services/medical-check" className="flex items-center text-slate-800 font-medium">
              Learn more
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <div className="bg-cyan-400 w-16 h-16 flex items-center justify-center rounded-lg mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Senior Care</h3>
            <p className="text-slate-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat faucibus ac lectus blandit erat.
            </p>
            <Link href="/services/senior-care" className="flex items-center text-slate-800 font-medium">
              Learn more
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Service 4 */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <div className="bg-blue-400 w-16 h-16 flex items-center justify-center rounded-lg mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Emergency Service</h3>
            <p className="text-slate-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat faucibus ac lectus blandit erat.
            </p>
            <Link href="/services/emergency" className="flex items-center text-slate-800 font-medium">
              Learn more
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Service 5 */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <div className="bg-green-500 w-16 h-16 flex items-center justify-center rounded-lg mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Homecare Visit</h3>
            <p className="text-slate-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat faucibus ac lectus blandit erat.
            </p>
            <Link href="/services/homecare" className="flex items-center text-slate-800 font-medium">
              Learn more
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Service 6 */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <div className="bg-purple-500 w-16 h-16 flex items-center justify-center rounded-lg mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Senior Therapy</h3>
            <p className="text-slate-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat faucibus ac lectus blandit erat.
            </p>
            <Link href="/services/therapy" className="flex items-center text-slate-800 font-medium">
              Learn more
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>


    </section>
  );
};

export default ServicesFeatures; 