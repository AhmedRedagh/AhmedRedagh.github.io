import { motion } from "framer-motion";
import BrandLogo from "./BrandLogo";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex flex-col items-center md:items-start gap-4">
            <BrandLogo withText />
            <motion.div
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} Ahmed Reda. All rights reserved.
            </motion.div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <motion.div
              className="flex items-center gap-2 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span>Built with</span>
              <motion.span
                className="text-primary"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ♥
              </motion.span>
              <span>and lots of coffee</span>
            </motion.div>
            
            <motion.div
              className="font-mono text-xs text-muted-foreground/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              v1.0.0
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
