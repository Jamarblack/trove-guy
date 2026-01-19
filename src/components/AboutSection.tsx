import { motion } from "framer-motion";
import mascotBoxing from "@/assets/mascot-boxing.png";

const loreEvents = [
  {
    title: "The Chain Migration",
    desc: "Started on HyperVM. Realized speed matters. Migrated to Solana to chase the pump.",
    
  },
  {
    title: "The $500k Fumble",
    desc: "We had a massive Hype position. We sold it. It went to $500k. Pain.",
  
  },
  {
    title: "The Polymarket Rekt",
    desc: "Use the treasury for a 'sure thing' prediction? Bad idea. We learned the hard way.",
    
  },
  {
    title: "The Casino Incident",
    desc: "A certain KOL sent the tokens to a casino wallet instead of the marketing wallet. You can't make this up.",
  
  },
  {
    title: "The Time Rugs",
    desc: "Launch is in 5 mins... wait, 10 mins... wait, tomorrow. (Launch is actually live now).",
  
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black/20">
      <div className="container px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient-metallic">The</span>{" "}
            <span className="text-gradient-neon glow-neon-text">Lore</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A history of bad decisions, leading to one massive comeback.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            
          {/* Left: The Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="card-degen p-2 rotate-2 hover:rotate-0 transition-transform duration-300">
               <div className="bg-primary/20 text-center py-2 font-bold text-primary uppercase tracking-widest mb-2 rounded">
                  Fighting The FUD 
               </div>
               <img 
                  src={mascotBoxing}
                  alt="Trove Guy Fighting"
                  className="w-full rounded-lg border border-primary/20"
                />
            </div>
          </motion.div>

          {/* Right: The Wall of Shame / Timeline */}
          <div className="space-y-6">
            {loreEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-colors"
              >
               
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;