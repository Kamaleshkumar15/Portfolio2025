import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "../data/data";
import img2 from "../image/mee2.jpg"

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="section-padding bg-dark-gray">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-playfair font-bold text-center text-pure-white mb-12"
        >
          About Me
        </motion.h2>

        <div ref={ref} className="row align-items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="col-lg-6 mb-5 mb-lg-0"
          >
            <img
              src={img2}
              alt="About"
              className="w-full rounded-lg shadow-2xl object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="col-lg-6"
          >
            <p className="text-lg md:text-xl font-inter text-gray-300 mb-6 leading-relaxed">
              {personalInfo.about}
            </p>

            <div className="mb-6">
              <h3 className="text-2xl font-poppins font-semibold text-pure-white mb-4">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {personalInfo.softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-rich-black text-pure-white font-inter rounded-full border border-royal-violet"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-rich-black rounded-lg border border-gray-800">
                <h4 className="text-xl font-poppins text-royal-violet mb-2">
                  Location
                </h4>
                <p className="font-inter text-gray-300">{personalInfo.location}</p>
              </div>
              <div className="p-4 bg-rich-black rounded-lg border border-gray-800">
                <h4 className="text-xl font-poppins text-royal-violet mb-2">
                  Email
                </h4>
                <p className="font-inter text-gray-300">{personalInfo.email}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
