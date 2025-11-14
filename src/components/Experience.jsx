import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase } from "react-icons/fa";
import { experience } from "../data/data";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="section-padding bg-rich-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-playfair font-bold text-center text-pure-white mb-12"
        >
          Experience
        </motion.h2>

        <div ref={ref} className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-8 relative pl-8 border-l-2 border-royal-violet"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-royal-violet rounded-full flex items-center justify-center">
                <FaBriefcase className="text-rich-black text-xs" />
              </div>

              <div className="bg-dark-gray p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex flex-wrap justify-between items-start mb-3">
                  <h3 className="text-2xl font-poppins font-semibold text-pure-white">
                    {exp.role}
                  </h3>
                  <span className="text-royal-violet font-inter font-medium">
                    {exp.duration}
                  </span>
                </div>

                <h4 className="text-xl font-poppins text-gray-300 mb-3">
                  {exp.company}
                </h4>

                <p className="text-gray-400 font-inter mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-rich-black text-sm text-pure-white font-inter rounded-full border border-royal-violet"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
