
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-blue-50 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Empowering Your Independence Through <span className="text-blue-700 underline decoration-orange-500">Technology.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed">
              We are Licensed Occupational Therapists partnering with tech specialists to help you master your devices with confidence and safety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#process"
                className="inline-block text-center bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-blue-800 shadow-xl transition-transform hover:-translate-y-1"
              >
                See How It Works
              </a>
              <a
                href="#contact"
                className="inline-block text-center border-4 border-blue-700 text-blue-700 px-8 py-4 rounded-lg text-xl font-bold hover:bg-blue-50 transition-colors"
              >
                Free Consultation
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://picsum.photos/seed/techot/800/600"
              alt="An older adult smiling while successfully using a tablet with a therapist"
              className="rounded-3xl shadow-2xl border-8 border-white"
            />
          </div>
        </div>
      </div>
      
      {/* Abstract Background Shapes for Visual Interest */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-200 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-orange-100 rounded-full opacity-50 blur-3xl"></div>
    </section>
  );
};

export default Hero;
