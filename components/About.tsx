
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 underline decoration-blue-500 decoration-8 underline-offset-8">
          Meet Elva and Tyler
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-12">
          TechME was founded by <strong>Elva and Tyler</strong>, two individuals who are deeply passionate about educating others on technology use and its life-changing benefits. 
        </p>
        <div className="grid md:grid-cols-2 gap-12 text-left">
          <div className="bg-slate-50 p-8 rounded-2xl border-l-8 border-blue-700 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Our Mission</h3>
            <p className="text-lg text-gray-700">
              We believe technology should work for everyone. Our approach focuses on patience and practical education—helping you stay connected to what matters most.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border-l-8 border-orange-500 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-orange-700">Passion for Learning</h3>
            <p className="text-lg text-gray-700">
              By combining our love for technology with a heart for teaching, we ensure that every session is tailored to your unique pace and goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
