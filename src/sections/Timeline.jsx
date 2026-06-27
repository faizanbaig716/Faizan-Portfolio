import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { EDUCATION } from '../constants';

const Timeline = () => {
  return (
    <section id="education" className="py-24 relative bg-[#0A0F1E]">
      <div className="container mx-auto px-6">
        <SectionHeading title="Education" subtitle="Academic Journey" />
        
        <div className="max-w-3xl mx-auto relative mt-16">
          {/* Vertical Line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-success to-transparent md:-translate-x-1/2 opacity-30"></div>
          
          {EDUCATION.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center w-full mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="absolute left-5 md:left-1/2 w-12 h-12 rounded-full bg-[#0A0F1E] border border-primary/50 -translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,212,255,0.2)] text-primary">
                {item.icon}
              </div>
              
              <div className="w-full md:w-1/2 pl-16 md:pl-0">
                <div className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 relative ${
                  index % 2 === 0 ? 'md:ml-12 md:text-left' : 'md:mr-12 md:text-right text-left'
                }`}>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
                    {item.date}
                  </span>
                  <h3 className="text-2xl font-display font-bold mb-2">{item.degree}</h3>
                  <p className="text-muted text-lg mb-4">{item.institution}</p>
                  <p className="inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-success">CGPA: {item.cgpa}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
