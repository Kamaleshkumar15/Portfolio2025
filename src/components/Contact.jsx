import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { social } from "../data/data";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus(""), 3000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus(""), 3000);
        }
      );
  };

  return (
    <section id="contact" className="section-padding bg-rich-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-playfair font-bold text-center text-pure-white mb-4"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-400 font-inter text-center mb-12"
        >
          Let's build something meaningful together.
        </motion.p>

        <div ref={ref} className="row justify-content-center">
          <div className="col-lg-8">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              onSubmit={handleSubmit}
              className="bg-dark-gray p-6 md:p-8 rounded-lg shadow-2xl"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-pure-white font-poppins mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-rich-black text-pure-white border border-gray-800 rounded-lg focus:outline-none focus:border-royal-violet transition-colors font-inter"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-pure-white font-poppins mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-rich-black text-pure-white border border-gray-800 rounded-lg focus:outline-none focus:border-royal-violet transition-colors font-inter"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-pure-white font-poppins mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-rich-black text-pure-white border border-gray-800 rounded-lg focus:outline-none focus:border-royal-violet transition-colors font-inter resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 bg-royal-violet text-pure-white font-poppins rounded-lg hover:bg-opacity-80 transition-all duration-300 disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="mt-4 text-green-500 text-center font-inter">
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-red-500 text-center font-inter">
                  Failed to send message. Please try again.
                </p>
              )}
            </motion.form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-center gap-6 mt-8"
            >
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pure-white text-3xl hover:text-royal-violet transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pure-white text-3xl hover:text-royal-violet transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href={social.email}
                className="text-pure-white text-3xl hover:text-royal-violet transition-colors"
              >
                <FaEnvelope />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
