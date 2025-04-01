import Link from 'next/link';

const Features = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl px-6 mx-auto">
        {/* <h2 className="text-3xl font-semibold text-slate-800 lg:text-4xl">
          Our <span className="text-cyan-600 underline decoration-cyan-600">Services</span>
        </h2>

        <p className="mt-4 text-slate-600 max-w-2xl">
          We provide exceptional caregiving services designed to enhance the quality of life for your loved ones in a comfortable and familiar environment.
        </p> */}

        <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Service 1 */}
          <div className="p-8 space-y-4 border-2 border-cyan-600/20 hover:border-cyan-600 transition-colors duration-300 rounded-xl shadow-sm hover:shadow-md">
            <span className="inline-block text-cyan-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </span>

            <h3 className="text-2xl font-semibold text-slate-800">Companion Care</h3>

            <p className="text-slate-600">
              This type of care can be provided in a variety of settings, including nursing homes, assisted living facilities, and private homes.
            </p>

            <Link 
              href="/service" 
              className="inline-flex p-2 text-cyan-600 transition-colors duration-300 transform bg-cyan-600/10 rounded-full hover:bg-cyan-600/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>

          {/* Service 2 */}
          <div className="p-8 space-y-4 border-2 border-cyan-600/20 hover:border-cyan-600 transition-colors duration-300 rounded-xl shadow-sm hover:shadow-md">
            <span className="inline-block text-cyan-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </span>

            <h3 className="text-2xl font-semibold text-slate-800">Group Home</h3>

            <p className="text-slate-600">
              We provide a safe and supportive environment for individuals who may need additional care and support.
            </p>

            <Link 
              href="/service" 
              className="inline-flex p-2 text-cyan-600 transition-colors duration-300 transform bg-cyan-600/10 rounded-full hover:bg-cyan-600/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>

          {/* Join Our Team */}
          <div className="p-8 space-y-4 border-2 border-cyan-600/20 hover:border-cyan-600 transition-colors duration-300 rounded-xl shadow-sm hover:shadow-md">
            <span className="inline-block text-cyan-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </span>

            <h3 className="text-2xl font-semibold text-slate-800">Join Our Incredible Team</h3>

            <p className="text-slate-600">
              Become part of our compassionate caregiver community. We offer rewarding career opportunities with competitive benefits and ongoing professional development.
            </p>

            <Link 
              href="/careers" 
              className="inline-flex p-2 text-cyan-600 transition-colors duration-300 transform bg-cyan-600/10 rounded-full hover:bg-cyan-600/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 