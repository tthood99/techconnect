
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New TechME Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Contact Info: ${formData.contact}\n\n` +
      `Message:\n${formData.message}`
    );
    window.location.href = `mailto:evlatyler@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden grid md:grid-cols-2">
          <div className="p-10 md:p-16 bg-blue-900 text-white">
            <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl mb-10 opacity-90">
              Ready to feel confident with your technology? Schedule a free 15-minute phone consultation with us.
            </p>
            <div className="space-y-6">
              <div className="flex items-center text-xl">
                <i className="fas fa-phone-alt w-10 text-orange-400"></i>
                <span>314-0123-4567</span>
              </div>
              <div className="flex items-center text-xl">
                <i className="fas fa-envelope w-10 text-orange-400"></i>
                <span>evlatyler@gmail.com</span>
              </div>
              <div className="flex items-center text-xl">
                <i className="fas fa-map-marker-alt w-10 text-orange-400"></i>
                <span>Serving Greater Metro Area</span>
              </div>
            </div>
          </div>
          <div className="p-10 md:p-16">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xl font-bold text-gray-800 mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 text-lg border-4 border-gray-100 rounded-xl focus:border-blue-700 outline-none" 
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label className="block text-xl font-bold text-gray-800 mb-2">Email or Phone</label>
                <input 
                  type="text" 
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="w-full p-4 text-lg border-4 border-gray-100 rounded-xl focus:border-blue-700 outline-none" 
                  placeholder="How can we reach you?"
                />
              </div>
              <div>
                <label className="block text-xl font-bold text-gray-800 mb-2">How can we help?</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-4 text-lg border-4 border-gray-100 rounded-xl focus:border-blue-700 outline-none" 
                  placeholder="Tell us about the device or task you'd like help with."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-700 text-white py-5 rounded-xl text-2xl font-bold hover:bg-blue-800 transition-all shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
