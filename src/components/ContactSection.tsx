import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/AhmedRedagh", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/devreda/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ahmed.reda.dev@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-1/2" style={{
          background: `linear-gradient(to top, hsl(var(--primary) / 0.05) 0%, transparent 100%)`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="section-title">Get In Touch</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Let's build
              <br />
              <span className="text-gradient glow-text">something great</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
              Have a project in mind? I'd love to hear about it. 
              Let's discuss how we can bring your ideas to life.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:ahmed.reda.dev@gmail.com"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Send me an email
              </span>
              <motion.span
                className="absolute inset-0 bg-glow-secondary"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="https://wa.me/201234567890"
              className="inline-flex items-center gap-3 px-8 py-4 border border-primary/30 text-primary rounded-full font-medium hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-5 h-5" />
              WhatsApp me
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 glass-card-hover"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <link.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
