
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 underline decoration-blue-500 decoration-8 underline-offset-8">
          Meet Your Clinical Partners
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-12">
          Founded by Sarah and Mark, two <strong>Licensed Occupational Therapists</strong> with over 15 years of combined experience in physical and cognitive rehabilitation. 
        </p>
        <div className="grid md:grid-cols-2 gap-12 text-left">
          <div className="bg-slate-50 p-8 rounded-2xl border-l-8 border-blue-700 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Our Clinical Roots</h3>
            <p className="text-lg text-gray-700">
              Unlike traditional tech support, we understand how vision, dexterity, and memory impact your ability to use technology. We approach "tech support" as a form of <strong>functional therapy</strong>—helping you stay connected to what matters most.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border-l-8 border-orange-500 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-orange-700">Specialized Expertise</h3>
            <p className="text-lg text-gray-700">
              By partnering with hand-picked technology specialists, we ensure that every setup is not only clinically appropriate for your needs but also technically sound and future-proof.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
