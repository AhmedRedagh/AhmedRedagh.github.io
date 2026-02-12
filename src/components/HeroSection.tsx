import profileImage from "@/assets/profile.png";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/AhmedRedagh", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/devreda/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ahmed.reda.dev@gmail.com", label: "Email" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 30%, hsl(var(--glow-secondary) / 0.1) 0%, transparent 50%)
          `,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left side - Content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Label */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 4.8, duration: 0.8 }}
                className="mb-6"
              >
                <span className="font-mono text-sm text-primary tracking-wider">
                  /// HI, I'M AHMED REDA
                </span>
              </motion.div>

              {/* Main heading */}
              <div className="overflow-hidden">
                <motion.h1
                  className="hero-title mb-2"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                  Building
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  className="hero-title text-gradient glow-text mb-2"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 5.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                  premium
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  className="hero-title"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 5.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                  mobile apps
                </motion.h1>
              </div>

            {/* Description */}
            <motion.p
              className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 5.4, duration: 0.8 }}
            >
              Senior Flutter Developer with 4+ years of experience building 
              high-performance mobile applications. Specializing in clean architecture, 
              state management, and seamless user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 5.5, duration: 0.8 }}
            >
              <motion.a
                href="#work"
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View My Work</span>
                <motion.span
                  className="absolute inset-0 bg-glow-secondary"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-primary rounded-full font-medium hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.a>
              
              <motion.a
                href="/AhmedReda_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border/50 text-muted-foreground hover:text-primary rounded-full font-medium hover:bg-muted/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-12 flex flex-wrap gap-8 md:gap-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 5.6, duration: 0.8 }}
            >
              {[
                { value: "4+", label: "Years Experience" },
                { value: "20+", label: "Apps Delivered" },
                { value: "50+", label: "Happy Clients" },
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1 group-hover:glow-text transition-all">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Profile Image */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Decorative rings */}
              <motion.div
                className="absolute -inset-4 md:-inset-6 rounded-full border border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-8 md:-inset-12 rounded-full border border-primary/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Glowing orbs */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full blur-2xl"
                style={{ background: "hsl(var(--primary) / 0.4)" }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full blur-2xl"
                style={{ background: "hsl(var(--glow-secondary) / 0.3)" }}
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />

              {/* Main image container */}
              <div className="relative">
                {/* Gradient border */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary via-glow-secondary to-primary rounded-full blur-sm opacity-70" />
                
                {/* Image */}
                <motion.div
                  className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-primary/30"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={profileImage} 
                    alt="Ahmed Reda - Senior Flutter Developer" 
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                </motion.div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-2 -right-2 md:bottom-4 md:right-0"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 5.5, duration: 0.5, type: "spring" }}
                >
                  <div className="glass-card px-4 py-2 rounded-full border border-primary/30">
                    <span className="text-xs md:text-sm font-mono text-primary">Flutter Expert</span>
                  </div>
                </motion.div>

                {/* Status indicator */}
                <motion.div
                  className="absolute top-4 left-0 md:top-6 md:-left-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 5.7, duration: 0.5 }}
                >
                  <div className="glass-card px-3 py-1.5 rounded-full flex items-center gap-2 border border-primary/30">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">Open to work</span>
                  </div>
                </motion.div>
              </div>

              {/* Social links floating */}
              <motion.div
                className="absolute -left-8 md:-left-16 top-1/2 -translate-y-1/2 flex flex-col gap-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 5.8, duration: 0.5 }}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass-card rounded-full hover:bg-primary/20 transition-colors group"
                    whileHover={{ scale: 1.1, x: -5 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 5.9 + index * 0.1 }}
                  >
                    <link.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 6, duration: 0.8 }}
      >
        <motion.a
          href="#work"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-mono tracking-wider">SCROLL</span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
