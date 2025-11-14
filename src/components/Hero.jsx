import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import { personalInfo } from "../data/data";
import img1 from "../image/prof.jpg"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-rich-black pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="row align-items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-lg-6 mb-5 mb-lg-0"
          >
            <h2 className="text-xl md:text-2xl font-poppins text-pure-white mb-4">
              {personalInfo.greeting}
            </h2>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-pure-white mb-4 leading-tight">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl font-poppins text-gray-300 mb-3">
              {personalInfo.subtitle}
            </p>
            <p className="text-lg md:text-xl font-inter text-gray-400 mb-6">
              {personalInfo.title}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={personalInfo.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-royal-violet text-pure-white font-poppins rounded-lg hover:bg-opacity-80 transition-all duration-300 flex items-center gap-2"
              >
                <FaDownload />
                Download Resume
              </a>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="px-6 py-3 border-2 border-royal-violet text-pure-white font-poppins rounded-lg hover:bg-royal-violet hover:bg-opacity-20 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <FaEnvelope />
                Hire Me
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="col-lg-6 d-flex justify-content-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-royal-violet to-transparent opacity-30 blur-xl"
              />
              <img
                src={img1}
                alt="Profile"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-royal-violet shadow-2xl relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
