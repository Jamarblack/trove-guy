import { motion } from "framer-motion";
import mascotChill from "/mascot-chill.png";

const socialLinks = [
  { name: "Twitter / X", icon: "𝕏", href: "#" },
  { name: "Telegram", icon: "✈️", href: "#" },
  { name: "DexScreener", icon: "📊", href: "#" },
];

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-border bg-secondary/20">
      <div className="container px-4">
        <motion.div 
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo/Mascot */}
          <motion.img 
            src={mascotChill}
            alt="Trove Guy"
            className="w-24 h-auto"
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
          />

          {/* Brand */}
          <h3 className="text-3xl font-bold">
            <span className="text-gradient-neon">$TROVE</span>
          </h3>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center text-2xl hover:border-primary hover:bg-primary/10 transition-all hover:-translate-y-1"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground text-center max-w-lg mt-8">
            ⚠️ This is a memecoin for entertainment purposes only. 
            Cryptocurrency investments are risky. Do your own research (DYOR). 
            Never invest more than you can afford to lose.
          </p>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2024 Trove Guy. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
