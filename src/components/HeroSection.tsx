import { motion } from "framer-motion";
import mascotSign from "@/assets/mascot-sign.png";
import ParticleField from "./ParticleField";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Particle effects */}
      <ParticleField />
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-background to-background" />
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(120 60% 50% / 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container relative z-10 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 border border-primary/50 text-primary font-mono text-sm"
            >
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gradient-metallic">The Ultimate</span>
              <br />
              <span className="text-gradient-neon glow-neon-text">Redemption</span>
              <br />
              <span className="text-foreground">Arc.</span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We survived the <span className="text-destructive">Casino</span>. We survived the <span className="text-destructive">Time Rugs</span>. We are still here.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="#" className="btn-primary-degen text-center">
                Buy on Raydium
              </a>
              <a href="#" className="btn-secondary-degen text-center">
                See the Chart
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Mascot */}
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.img 
                src={mascotSign}
                alt="Trove Guy Token Mascot"
                className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-primary rounded-full scale-75" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ticker Marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary py-3 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content">
            {Array(10).fill(null).map((_, i) => (
              <span key={i} className="inline-block mx-8 text-primary-foreground font-bold text-lg uppercase tracking-widest">
                $TROVEGUY
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;