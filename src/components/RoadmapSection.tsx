import { motion } from "framer-motion";
import mascotBull from "@/assets/mascot-bull.png";

const phases = [
  {
    phase: 1,
    title: "Launch & Vibe",
    items: [
      "Token launch on Raydium",
      "Website launch",
      "Community building",
      "Initial marketing push"
    ],
    status: "active"
  },
  {
    phase: 2,
    title: "Marketing & Partnerships",
    items: [
      "Influencer partnerships",
      "CEX listings",
      "Community events",
      "Merch store"
    ],
    status: "upcoming"
  },
  {
    phase: 3,
    title: "The Moon",
    items: [
      "Major exchange listings",
      "Trove Guy ecosystem",
      "Global domination",
    ],
    status: "upcoming"
  }
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-24 relative overflow-hidden">
      {/* Background with mascot */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={mascotBull}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background" />
      </div>

      <div className="container px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient-metallic">The</span>{" "}
            <span className="text-gradient-neon glow-neon-text">Moonmap</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Our journey to the moon 🌙
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className={`card-degen h-full ${phase.status === 'active' ? 'border-primary glow-neon' : ''}`}>
                  {/* Phase header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg
                      ${phase.status === 'active' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground border border-border'
                      }
                    `}>
                      {phase.phase}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{phase.title}</h3>
                      {phase.status === 'active' && (
                        <span className="text-xs text-primary uppercase tracking-wider">
                          🔥 Active
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Phase items */}
                  <ul className="space-y-3">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={`mt-1 ${phase.status === 'active' ? 'text-primary' : 'text-muted-foreground'}`}>
                          ✦
                        </span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mascot riding bull */}
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.img 
            src={mascotBull}
            alt="Trove Guy Riding the Bull"
            className="w-full max-w-lg drop-shadow-2xl rounded-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapSection;
