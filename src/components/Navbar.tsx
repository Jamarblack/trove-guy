import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import mascotChill from "/mascot-chill.png";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Tokenomics", href: "#tokenomics" },
  { name: "How to Buy", href: "#how-to-buy" },
  { name: "Roadmap", href: "#roadmap" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={mascotChill} alt="Trove Guy" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold text-gradient-neon">$TROVEGUY</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <a href="#" className="btn-primary-degen py-2 px-6 text-sm">
              Buy Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="container px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#" 
                className="btn-primary-degen text-center py-3 mt-2"
                onClick={() => setIsOpen(false)}
              >
                Buy Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
