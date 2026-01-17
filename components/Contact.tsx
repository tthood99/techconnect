
import React, { useState, useEffect } from 'react';

// Access the global emailjs object loaded in index.html
declare const emailjs: any;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Initializing with the Public Key provided: aTdQnBSv8H5viqrL4
    if (typeof emailjs !== 'undefined') {
        emailjs.init("aTdQnBSv8H5viqrL4"); 
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (typeof emailjs === 'undefined') {
        setStatus('error');
        console.error("EmailJS SDK not loaded");
        return;
    }

    setStatus('sending');

    try {
      // SERVICE_ID: "Gmail" (Verified from your previous screenshot)
      // TEMPLATE_ID: "template_default" (Standard default for EmailJS)
      await emailjs.send("Gmail", "template_default", {
        from_name: formData.name,
        reply_to: formData.contact,
        message: formData.message,
        to_name: "Elva & Tyler",
      });

      setStatus('success');
      setFormData({ name: '', contact: '', message: '' });
      // Reset success message after 10 seconds
      setTimeout(() => setStatus('idle'), 10000);
    } catch (err) {
      console.error('EmailJS Error Detail:', err);
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
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden grid md:grid-cols-2 border border-gray-100">
          <div className="p-10 md:p-16 bg-blue-900 text-white">
            <h2 className="text-4xl font-bold mb-6 text-white">Let's Connect</h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Ready to feel confident with your technology? Our team is standing by to help you master your devices.
            </p>
            <div className="space-y-6">
              <div className="flex items-center text-xl">
                <i className="fas fa-phone-alt w-10 text-orange-400"></i>
                <span>314-0123-4567</span>
              </div>
              <div className="flex items-center text-xl">
                <i className="fas fa-envelope w-10 text-orange-400"></i>
                <span className="break-all">evlatyler@gmail.com</span>
              </div>
              <div className="flex items-center text-xl">
                <i className="fas fa-map-marker-alt w-10 text-orange-400"></i>
                <span>Serving Greater Metro Area</span>
              </div>
            </div>
          </div>
          
          <div className="p-10 md:p-16 flex flex-col justify-center">
            {status === 'success' ? (
              <div className="text-center space-y-4 animate-fade-in">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mb-4 mx-auto">
                  <i className="fas fa-check"></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Message Sent!</h3>
                <p className="text-lg text-gray-600">
                  Thank you! We've received your inquiry and will reach out to you shortly.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-blue-700 font-bold underline text-lg mt-4 hover:text-blue-900"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {status === 'error' && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-xl font-bold border border-red-200">
                    <i className="fas fa-exclamation-circle mr-2"></i>
                    Something went wrong. Please check your connection or call us!
                  </div>
                )}
                
                <div>
                  <label className="block text-lg font-bold text-gray-800 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 text-lg border-2 border-gray-100 rounded-xl focus:border-blue-700 focus:ring-2 focus:ring-blue-100 outline-none transition-all" 
                    placeholder="Full Name"
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-bold text-gray-800 mb-2">Email or Phone</label>
                  <input 
                    type="text" 
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="w-full p-4 text-lg border-2 border-gray-100 rounded-xl focus:border-blue-700 focus:ring-2 focus:ring-blue-100 outline-none transition-all" 
                    placeholder="How should we reach you?"
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-bold text-gray-800 mb-2">How can we help?</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full p-4 text-lg border-2 border-gray-100 rounded-xl focus:border-blue-700 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none" 
                    placeholder="Describe what you'd like help with..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className={`w-full text-white py-5 rounded-xl text-2xl font-bold transition-all shadow-lg flex items-center justify-center space-x-3 ${status === 'sending' ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800 active:scale-[0.98]'}`}
                >
                  {status === 'sending' ? (
                    <>
                      <i className="fas fa-circle-notch fa-spin"></i>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
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
