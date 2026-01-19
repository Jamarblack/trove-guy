import { motion } from "framer-motion";
import { Users, Twitter, TrendingUp, Flame } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10K+",
    label: "Holders",
    color: "text-primary"
  },
  {
    icon: Twitter,
    value: "25K+",
    label: "Twitter Followers",
    color: "text-blue-400"
  },
  {
    icon: TrendingUp,
    value: "$2M+",
    label: "Market Cap",
    color: "text-primary"
  },
  {
    icon: Flame,
    value: "100%",
    label: "Community Driven",
    color: "text-orange-400"
  }
];

const CommunitySection = () => {
  return (
    <section className="py-20 relative overflow-hidden border-y border-border bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-metallic">Join the</span>{" "}
            <span className="text-gradient-neon glow-neon-text">Army</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            The STARBOY community is growing every day
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="card-degen text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-secondary/50 mb-4 ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <p className={`text-3xl md:text-4xl font-bold mb-1 ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Social CTA */}
        <motion.div 
          className="mt-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="#" 
            className="btn-secondary-degen py-3 px-6 text-sm flex items-center gap-2"
          >
            <Twitter className="w-4 h-4" />
            Follow on X
          </a>
          <a 
            href="#" 
            className="btn-secondary-degen py-3 px-6 text-sm flex items-center gap-2"
          >
            💬 Join Telegram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
