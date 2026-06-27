import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { PERSONAL_INFO } from '../constants';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
          setStatus({ type: 'success', message: 'Message sent successfully!' });
          form.current.reset();
      }, () => {
          setStatus({ type: 'error', message: 'Failed to send. Please use WhatsApp instead.' });
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0A0F1E]">
      <div className="container mx-auto px-6">
        <SectionHeading title="Get In Touch" subtitle="Contact Me" />
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <h3 className="text-3xl font-display font-bold mb-4">
              Let's Build Something{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-success">Amazing</span>{' '}
              Together
            </h3>
            <p className="text-muted leading-relaxed mb-8">
              Whether you have a project in mind, need technical consultation, or just want to say hi — I'm always open to discussing new opportunities.
            </p>
            
            <a 
              href={`https://wa.me/${PERSONAL_INFO.whatsapp}`} 
              target="_blank" 
              rel="noreferrer"
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center gap-6 group hover:border-success/50 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-success/0 to-success/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300 relative z-10">
                <FaWhatsapp size={28} />
              </div>
              <div className="relative z-10">
                <p className="text-sm text-muted uppercase tracking-wider font-medium mb-1">Direct Chat</p>
                <h4 className="text-xl font-bold group-hover:text-success transition-colors duration-300">WhatsApp</h4>
              </div>
            </a>
            
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center gap-6 group hover:border-primary/50 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Mail size={28} />
              </div>
              <div className="relative z-10">
                <p className="text-sm text-muted uppercase tracking-wider font-medium mb-1">Email Me</p>
                <h4 className="text-xl font-bold group-hover:text-primary transition-colors duration-300 break-all">{PERSONAL_INFO.email}</h4>
              </div>
            </a>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <form ref={form} onSubmit={sendEmail} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="user_name" 
                    required 
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-textMain focus:outline-none focus:border-primary/50 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted mb-2">Your Email</label>
                  <input 
                    type="email" 
                    name="user_email" 
                    required 
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-textMain focus:outline-none focus:border-primary/50 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted mb-2">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  required 
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-textMain focus:outline-none focus:border-primary/50 transition-all duration-300"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted mb-2">Message</label>
                <textarea 
                  name="message" 
                  required 
                  rows="5"
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-textMain focus:outline-none focus:border-primary/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <Button type="submit" variant="primary" className="w-full">
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </Button>
              
              {status && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl text-center ${status.type === 'success' ? 'bg-success/20 text-success' : 'bg-red-500/20 text-red-400'}`}
                >
                  {status.message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
