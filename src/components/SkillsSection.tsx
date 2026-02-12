import { motion } from "framer-motion";

const skills = [
  { name: "Flutter / Dart", level: 95, category: "core" },
  { name: "BLoC / Provider / Riverpod", level: 90, category: "core" },
  { name: "Clean Architecture", level: 92, category: "core" },
  { name: "Firebase", level: 88, category: "backend" },
  { name: "REST APIs / GraphQL", level: 85, category: "backend" },
  { name: "Git / CI/CD", level: 87, category: "tools" },
  { name: "UI/UX Design", level: 80, category: "design" },
  { name: "Agile / Scrum", level: 85, category: "soft" },
];

const technologies = [
  "Flutter", "Dart", "Firebase", "Supabase", "REST API", "GraphQL",
  "BLoC", "Provider", "Riverpod", "GetX", "Git", "GitHub Actions",
  "Fastlane", "Google Maps", "Stripe", "Socket.io", "WebRTC", "SQLite",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, hsl(var(--primary)) 25%, transparent 25%),
            linear-gradient(-45deg, hsl(var(--primary)) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, hsl(var(--primary)) 75%),
            linear-gradient(-45deg, transparent 75%, hsl(var(--primary)) 75%)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="section-title">Expertise</span>
          <h2 className="text-4xl md:text-6xl font-bold">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Skills bars */}
          <div className="space-y-6">
            <motion.h3
              className="text-xl font-bold mb-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Core Competencies
            </motion.h3>

            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm font-mono text-primary">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technologies cloud */}
          <div>
            <motion.h3
              className="text-xl font-bold mb-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Tech Stack
            </motion.h3>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 glass-card-hover text-sm font-mono cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" 
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Additional info cards */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              <motion.div
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-gradient mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Apps Published</div>
              </motion.div>
              <motion.div
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-gradient mb-2">100K+</div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
