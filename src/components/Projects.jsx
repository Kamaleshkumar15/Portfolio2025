import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/data";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" className="section-padding bg-dark-gray">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-playfair font-bold text-center text-pure-white mb-12"
        >
          Projects
        </motion.h2>

        <div ref={ref} className="row">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="col-lg-4 col-md-6 mb-5"
            >
              <div className="group bg-rich-black rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-100">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                    style={{ filter: "grayscale(100%)" }}
                    onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")}
                    onMouseLeave={(e) => (e.target.style.filter = "grayscale(100%)")}
                  />
                  <div className="absolute inset-0 bg-royal-violet opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-poppins font-semibold text-pure-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 font-inter mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-dark-gray text-xs text-pure-white font-inter rounded-full border border-royal-violet"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-pure-white hover:text-royal-violet transition-colors"
                    >
                      <FaGithub className="text-xl" />
                      <span className="font-inter">Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-pure-white hover:text-royal-violet transition-colors"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                      <span className="font-inter">Live</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
