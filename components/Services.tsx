
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Smartphone Simplification",
      desc: "Making your iPhone or Android easy to see and use. We remove the clutter and focus on what matters to you—calling family, taking photos, and staying safe.",
      icon: "fa-mobile-alt",
      img: "https://images.unsplash.com/photo-1556656793-062ff987825d?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Smart Home Setup",
      desc: "Voice-controlled lights, smart doorbells, and thermostats that help you manage your home without straining your hands or back.",
      icon: "fa-home",
      img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Digital Safety Training",
      desc: "Learn how to spot scams, manage passwords securely, and browse the web without worry. We build your confidence and your security.",
      icon: "fa-shield-alt",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">How We Can Help</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Tailored technology education that prioritizes every person's comfort and ease of use.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s) => (
            <div key={s.title} className="group overflow-hidden bg-white rounded-3xl border-4 border-gray-100 shadow-lg hover:shadow-2xl transition-all">
              <img src={s.img} alt={s.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <i className={`fas ${s.icon} text-3xl text-blue-700 mr-4`}></i>
                  <h3 className="text-2xl font-bold text-gray-900">{s.title}</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
