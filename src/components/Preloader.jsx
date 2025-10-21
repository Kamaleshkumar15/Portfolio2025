import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Kamalesh Kumar";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center bg-rich-black z-50 pointer-events-none"
    >
      <h1
        className="text-pure-white text-4xl md:text-5xl font-playfair tracking-widest"
        style={{ letterSpacing: "4px" }}
      >
        {displayText}
        <span className="animate-pulse">|</span>
      </h1>
    </motion.div>
  );
};

export default Preloader;
