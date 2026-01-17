
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Initial Conversation",
      desc: "We meet with you to understand your goals, what you'd like to achieve, and any challenges you face.",
      icon: "fa-comments",
      color: "bg-blue-700"
    },
    {
      number: "2",
      title: "Custom Setup",
      desc: "We configure your devices specifically for you—simplifying menus, enlarging fonts, and installing security tools.",
      icon: "fa-tools",
      color: "bg-orange-600"
    },
    {
      number: "3",
      title: "Guided Training",
      desc: "We teach you how to use your setup at your own pace, focusing on the tasks that make your daily life better.",
      icon: "fa-graduation-cap",
      color: "bg-green-600"
    }
  ];

  return (
    <section id="process" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Our Simple 3-Step Process
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="relative bg-slate-800 p-8 rounded-3xl border-2 border-slate-700 hover:border-blue-500 transition-colors">
              <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mb-6 mx-auto md:mx-0 shadow-lg`}>
                <i className={`fas ${step.icon}`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-xl text-slate-300 leading-relaxed">
                {step.desc}
              </p>
              <div className="absolute -top-4 -right-4 text-6xl font-black text-slate-700 opacity-20">
                {step.number}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
