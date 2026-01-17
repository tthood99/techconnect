
import React, { useState, useEffect } from 'react';

// Assuming global emailjs is available from script tag in index.html
declare const emailjs: any;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Use your Service ID 'Gmail' and the default template
      await emailjs.send("Gmail", "template_default", {
        from_name: formData.name,
        reply_to: formData.contact,
        message: formData.message,
        to_email: 'evlatyler@gmail.com'
      });

      setStatus('success');
      setFormData({ name: '', contact: '', message: '' });
      setTimeout(() => setStatus('idle'), 10000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus('error');
    }
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
            <h2 className="text-4xl font-bold mb-6 text-white">Let's Connect</h2>
            <p className="text-xl mb-10 opacity-90">
              Ready to feel confident with your technology? Our team is ready to help you master your devices.
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
            {status === 'success' ? (
              <div className="h-full flex flex-col justify-center items-center text-center space-y-4 animate-fade-in">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mb-4">
                  <i className="fas fa-paper-plane"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                <p className="text-lg text-gray-600">
                  Thank you! We have received your inquiry and will reach out to you shortly.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-blue-700 font-bold underline text-lg mt-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {status === 'error' && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-xl font-bold">
                    Oops! Something went wrong. Please try again or call us directly.
                  </div>
                )}
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
                    placeholder="How should we reach you?"
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
                  disabled={status === 'sending'}
                  className={`w-full text-white py-5 rounded-xl text-2xl font-bold transition-all shadow-lg ${status === 'sending' ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800'}`}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
