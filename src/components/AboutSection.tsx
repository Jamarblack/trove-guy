import { motion } from "framer-motion";
import mascotBoxing from "@/assets/mascot-boxing.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient-metallic">Who is</span>{" "}
            <span className="text-gradient-neon glow-neon-text">Trove Guy?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Born from the blockchain, ready to fight the jeets.
          </p>
        </motion.div>

        <motion.div 
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Fight poster style card */}
          <div className="card-degen p-0 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 py-4 px-6 text-center border-b border-primary/30">
              <h3 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-widest">
                🥊 Tale of the Tape 🥊
              </h3>
            </div>

            <div className="p-6 md:p-10">
              <div className="relative">
                <motion.img 
                  src={mascotBoxing}
                  alt="Trove Guy vs The Jeets"
                  className="w-full rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Overlay stats */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/90 to-transparent p-6">
                  <div className="flex justify-between items-end">
                    <div className="text-center">
                      <p className="text-primary font-bold text-2xl md:text-4xl">TROVE GUY</p>
                      <p className="text-muted-foreground text-sm">The Challenger</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl md:text-6xl font-bold text-foreground">VS</p>
                    </div>
                    <div className="text-center">
                      <p className="text-destructive font-bold text-2xl md:text-4xl">THE JEETS</p>
                      <p className="text-muted-foreground text-sm">Paper Hands</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-3 border-t border-border">
              <div className="p-4 text-center border-r border-border">
                <p className="text-primary font-bold text-xl md:text-2xl">💎</p>
                <p className="text-sm text-muted-foreground">Diamond Hands</p>
              </div>
              <div className="p-4 text-center border-r border-border">
                <p className="text-primary font-bold text-xl md:text-2xl">0%</p>
                <p className="text-sm text-muted-foreground">Jeet Rate</p>
              </div>
              <div className="p-4 text-center">
                <p className="text-primary font-bold text-xl md:text-2xl">∞</p>
                <p className="text-sm text-muted-foreground">Vibe Level</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
