import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Rocket } from "lucide-react";

const FloatingBuyButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section (roughly 500px)
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="#"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 btn-primary-degen py-3 px-5 text-sm shadow-2xl"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Rocket className="w-5 h-5" />
          <span className="hidden sm:inline">Buy $TROVE</span>
          <span className="sm:hidden">Buy</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingBuyButton;
