
import React from 'react';

const WhoWeHelp: React.FC = () => {
  const groups = [
    {
      title: "Seniors & Retirees",
      desc: "Stay connected with grandkids and manage daily tasks with tech that finally works for you, not against you.",
      icon: "fa-user-clock"
    },
    {
      title: "Vision & Hearing Needs",
      desc: "We specialize in screen readers, audio amplification, and high-contrast settings that make screens readable again.",
      icon: "fa-eye"
    },
    {
      title: "Concerned Families",
      desc: "Peace of mind for family members. We help setup communication tools for loved ones to stay safe and reachable.",
      icon: "fa-users"
    }
  ];

  return (
    <section id="who" className="py-20 bg-blue-700 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Who We Support</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {groups.map((g) => (
            <div key={g.title} className="bg-blue-800 p-10 rounded-3xl border-2 border-blue-600 flex flex-col items-center text-center">
              <div className="bg-white text-blue-700 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-xl">
                <i className={`fas ${g.icon}`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">{g.title}</h3>
              <p className="text-xl text-blue-100 leading-relaxed">
                {g.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
