import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Copy, Wallet, ArrowRightLeft, Coins } from "lucide-react";

const CONTRACT_ADDRESS = "STARBOY...REPLACE_WITH_REAL_CA";

const steps = [
  {
    step: 1,
    title: "Create Wallet",
    description: "Download Phantom or Solflare wallet and set it up",
    icon: Wallet
  },
  {
    step: 2,
    title: "Get SOL",
    description: "Buy SOL on an exchange and send it to your wallet",
    icon: Coins
  },
  {
    step: 3,
    title: "Swap for $STARBOY",
    description: "Connect wallet to Raydium and swap SOL for $STARBOY",
    icon: ArrowRightLeft
  }
];

const HowToBuySection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="how-to-buy" className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="container px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient-metallic">How to</span>{" "}
            <span className="text-gradient-neon glow-neon-text">Buy</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Three easy steps to join the STARBOY army
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className="card-degen text-center h-full">
                    {/* Step number */}
                    <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <div className="text-sm text-primary font-bold mb-2 uppercase tracking-wider">
                      Step {item.step}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow connector (hidden on last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary text-2xl z-10">
                      →
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Contract Address Box */}
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="card-degen animate-pulse-glow">
            <p className="text-sm text-muted-foreground mb-3 uppercase tracking-wider text-center">
              Contract Address
            </p>
            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-between gap-4 bg-background/50 rounded-lg p-4 border border-border hover:border-primary/50 transition-colors group"
            >
              <code className="font-mono text-sm md:text-base text-foreground truncate">
                {CONTRACT_ADDRESS}
              </code>
              <div className="flex-shrink-0 text-primary">
                {copied ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <Copy className="w-5 h-5 group-hover:scale-110 transition-transform" />
                )}
              </div>
            </button>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              {copied ? "✅ Copied to clipboard!" : "Click to copy"}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToBuySection;
