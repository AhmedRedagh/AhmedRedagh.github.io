import { motion } from "framer-motion";

const AboutSection = () => {
  const experiences = [
    {
      period: "2021 - Present",
      title: "Senior Flutter Developer",
      company: "Afaq, Egypt",
      description: "Leading mobile development team, architecting scalable solutions, and mentoring junior developers.",
    },
    {
      period: "2020 - 2021",
      title: "Flutter Developer",
      company: "JEAMS, Egypt",
      description: "Developed multiple production apps with complex state management and API integrations.",
    },
    {
      period: "2019 - 2020",
      title: "Mobile Developer",
      company: "Starter Projects",
      description: "Built foundation in mobile development with various freelance and contract projects.",
    },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column - About text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="section-title">About Me</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Passionate about
                <br />
                <span className="text-gradient">clean code</span> &
                <br />
                great UX
              </h2>
            </motion.div>

            <motion.div
              className="space-y-6 text-muted-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg leading-relaxed">
                I'm Ahmed Reda, a Senior Flutter Developer based in Egypt with a passion 
                for creating beautiful, performant mobile applications that users love.
              </p>
              <p className="leading-relaxed">
                With expertise in clean architecture, BLoC pattern, and modern development 
                practices, I build apps that are not just functional, but maintainable 
                and scalable. I believe in writing code that tells a story.
              </p>
              <p className="leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or mentoring aspiring developers.
              </p>
            </motion.div>

            {/* Quick info */}
            <motion.div
              className="mt-12 grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-4">
                <div className="text-xs font-mono text-muted-foreground mb-1">Location</div>
                <div className="font-medium">Egypt</div>
              </div>
              <div className="glass-card p-4">
                <div className="text-xs font-mono text-muted-foreground mb-1">Experience</div>
                <div className="font-medium">4+ Years</div>
              </div>
            </motion.div>
          </div>

          {/* Right column - Experience timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="section-title">Experience</span>
            </motion.div>

            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="pl-8 relative"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-primary glow-box" />

                  <div className="glass-card-hover p-6">
                    <div className="text-xs font-mono text-primary mb-2">{exp.period}</div>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <div className="text-sm text-muted-foreground mb-3">{exp.company}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
