import Link from 'next/link';

const CallToAction = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 relative">
      <div className="bg-gradient-to-r from-cyan-600 to-slate-900 rounded-2xl py-16 px-8 lg:px-12 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started with Our Care Services?
            </h2>
            <p className="text-cyan-100 text-lg mb-8">
              Our team of professional caregivers is ready to provide the support and care your loved ones deserve.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-cyan-700 font-bold py-4 px-8 rounded-lg shadow-md transition-all hover:bg-cyan-50 hover:shadow-lg"
            >
              Start the Process
            </Link>
          </div>
          
          {/* Empty column for floating card positioning */}
          <div className="relative">
            {/* Floating Call Card */}
            <div className="bg-white rounded-xl p-6 shadow-xl lg:absolute lg:-top-24 lg:right-0 transform hover:scale-105 transition-transform">
              <div className="flex items-center mb-4">
                <div className="bg-cyan-600 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Call Us Now</h3>
                  <p className="text-gray-600">Quick Response Guaranteed</p>
                </div>
              </div>
              <div className="text-center">
                <a href="tel:+18005551234" className="text-2xl md:text-3xl font-bold text-cyan-700 block hover:text-cyan-800">
                  1-800-555-1234
                </a>
                <p className="text-gray-500 mt-2">Available 24/7 for emergencies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction; 