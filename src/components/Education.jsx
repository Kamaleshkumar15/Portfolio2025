import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { education } from "../data/data";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="education" className="section-padding bg-dark-gray">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-playfair font-bold text-center text-pure-white mb-12"
        >
          Education
        </motion.h2>

        <div ref={ref} className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-8 relative pl-8 border-l-2 border-royal-violet"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-royal-violet rounded-full flex items-center justify-center">
                <FaGraduationCap className="text-rich-black text-xs" />
              </div>

              <div className="bg-rich-black p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex flex-wrap justify-between items-start mb-3">
                  <h3 className="text-2xl font-poppins font-semibold text-pure-white">
                    {edu.degree}
                  </h3>
                  <span className="text-royal-violet font-inter font-medium">
                    {edu.duration}
                  </span>
                </div>

                <h4 className="text-xl font-poppins text-gray-300 mb-2">
                  {edu.institution}
                </h4>

                <p className="text-gray-500 font-inter text-sm mb-3">
                  {edu.location}
                </p>

                <p className="text-gray-400 font-inter leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
