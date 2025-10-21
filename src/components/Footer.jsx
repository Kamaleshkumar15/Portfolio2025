import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-rich-black border-t border-royal-violet">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="mb-4 cursor-pointer"
          >
            <div className="w-12 h-12 bg-royal-violet rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all duration-300">
              <FaArrowUp className="text-pure-white text-xl" />
            </div>
          </Link>

          <p className="text-pure-white font-inter text-center">
            © 2025 Kamaleshkumar S — All Rights Reserved.
          </p>

          <p className="text-gray-500 font-inter text-sm text-center mt-2">
          
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
