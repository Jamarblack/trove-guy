import { motion } from "framer-motion";
import mascotFist from "@/assets/mascot-fist.png";

const tokenomicsData = [
  {
    title: "Total Supply",
    value: "1B",
    icon: "💰",
    description: "One billion tokens, one community"
  },
  {
    title: "Tax",
    value: "0/0",
    icon: "🚫",
    description: "Zero buy tax, zero sell tax"
  },
  {
    title: "Liquidity",
    value: "BURNT",
    icon: "🔥",
    description: "Liquidity burnt forever"
  }
];

const TokenomicsSection = () => {
  return (
    <section id="tokenomics" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
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
            <span className="text-gradient-neon glow-neon-text">Nomics</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Simple. Fair. Based.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Cards */}
          <div className="flex-1 grid gap-6 w-full">
            {tokenomicsData.map((item, index) => (
              <motion.div
                key={item.title}
                className="card-degen transition-all duration-300 group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div className="flex items-center gap-6">
                  <div className="text-4xl md:text-5xl">{item.icon}</div>
                  <div className="flex-1">
                    <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">
                      {item.title}
                    </p>
                    <p className="text-3xl md:text-4xl font-bold text-gradient-neon">
                      {item.value}
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mascot */}
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
          <motion.img 
              src={mascotFist}
              alt="Trove Guy Ready"
              className="w-full max-w-sm drop-shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
