import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

// Sanad Rewards screenshots
import sanadDashboard from "@/assets/sanad/dashboard.png";
import sanadInProgress from "@/assets/sanad/in-progress.jpg";
import sanadMyChallenges from "@/assets/sanad/my-challenges.jpg";
import sanadMyChallengesEmpty from "@/assets/sanad/my-challenges-empty.png";
import sanadMyChallenges1 from "@/assets/sanad/my-challenges-1.jpg";
import sanadTrainerPage from "@/assets/sanad/trainer-page.png";

const projects = [
  {
    title: "League Plus",
    description:
      "Sports prediction platform with 30K+ active users. Real-time GraphQL sync, custom league management, and optimistic UI updates for seamless predictions.",
    image:
      "https://images.unsplash.com/photo-1461896836934-aabadf9dc8e9?w=800&auto=format&fit=crop",
    tags: ["Flutter", "GraphQL", "BLoC", "Firebase", "Deep Links"],
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.leaguepred.app&pcampaignid=web_share",
      ios: "https://apps.apple.com/us/app/league/id6444308226",
    },
    platforms: ["Android", "iOS"],
    highlight: "30K+ Users",
    screenshots: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=400&auto=format&fit=crop",
    ],
  },
  {
    title: "Sanad Rewards",
    description:
      "Health & wellness challenge app with 100K+ downloads and 4.5★ rating. Integrates Apple Health & Google Fit for automatic fitness tracking.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop",
    tags: ["Flutter", "BLoC", "Apple Health", "Google Fit"],
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.ubd.sanad&pcampaignid=web_share",
      ios: "https://apps.apple.com/my/app/sanad-rewards/id6448073834",
      website: "https://sanadrewards.com/",
    },
    platforms: ["Android", "iOS"],
    highlight: "100K+ Downloads",
    screenshots: [
      sanadDashboard,
      sanadInProgress,
      sanadMyChallenges,
      sanadMyChallengesEmpty,
      sanadMyChallenges1,
      sanadTrainerPage,
    ],
  },
  {
    title: "A Year in Review",
    description:
      "Medical conference app for hepatology events. QR-based attendance, real-time moderator-attendee interaction, and workshop enrollment.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
    tags: ["Flutter", "Cubit", "Firebase", "QR System"],
    links: {
      android: "https://play.google.com/store/apps/details?id=com.yearinreview.app",
      ios: "https://apps.apple.com/app/year-in-review/id6747784581",
      about: "https://www.facebook.com/share/v/17GgyeFdSh/",
    },
    platforms: ["Android", "iOS"],
    highlight: "Medical Events",
    screenshots: [
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&auto=format&fit=crop",
    ],
  },
  {
    title: "I-News TV",
    description:
      "Live news streaming with adaptive bitrate, real-time updates, and custom video player. Breaking news notifications keep users engaged.",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop",
    tags: ["Flutter", "Video Streaming", "BLoC", "WebView"],
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.abualgaitinews.app&pcampaignid=web_share",
      ios: "https://apps.apple.com/us/app/%D9%82%D9%86%D8%A7%D8%A9-%D8%A7%D9%8A-%D9%86%D9%8A%D9%88%D8%B2-%D8%A7%D9%84%D9%81%D8%B6%D8%A7%D8%A6%D9%8A%D8%A9/id1532198502",
      website: "https://www.i-news.tv/",
    },
    platforms: ["Android", "iOS"],
    highlight: "Live Streaming",
    screenshots: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=400&auto=format&fit=crop",
    ],
  },
  {
    title: "Salute Medical Transport",
    description:
      "Healthcare logistics connecting patients with transport services. Real-time tracking reduced no-shows by 30% with smart driver matching.",
    image:
      "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=800&auto=format&fit=crop",
    tags: ["Flutter", "Maps API", "Cubit", "Firestore"],
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.salute.salutemedical&pcampaignid=web_share",
      ios: "https://apps.apple.com/us/app/salute-medical-transpot/id6460401361",
      website: "https://salutetrans.com/",
    },
    platforms: ["Android", "iOS"],
    highlight: "30% Less No-shows",
    screenshots: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=400&auto=format&fit=crop",
    ],
  },
  {
    title: "GTS ERP System",
    description:
      "Enterprise billing & sales management processing 1000+ daily transactions. Thermal printing, real-time analytics, and multi-role workflows.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    tags: ["Flutter", "BLoC", "Thermal Printing", "REST API"],
    links: {
      about: "https://majedsoft.com/",
    },
    platforms: ["Coming Soon"],
    highlight: "1000+ Daily Txns",
    screenshots: [],
  },
  {
    title: "Dalil",
    description:
      "ERP mobile solution for sales reps and retail. Comprehensive reporting dashboard, cashier system, and custom calendar for workflow management.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&auto=format&fit=crop",
    tags: ["Flutter", "BLoC", "Firebase", "Localization"],
    links: {
      about: "https://dalilhome.gts-sa.net/",
    },
    platforms: ["Coming Soon"],
    highlight: "Enterprise",
    screenshots: [],
  },
  {
    title: "Islami",
    description:
      "Comprehensive Islamic companion with accurate prayer times, Quran reader with audio, Qibla finder, and customizable Dhikr reminders.",
    image:
      "https://images.unsplash.com/photo-1564769625673-cb656c77d9db?w=800&auto=format&fit=crop",
    tags: ["Flutter", "Cubit", "Location Services", "FCM"],
    links: {},
    platforms: ["Coming Soon"],
    highlight: "85%+ Delivery Rate",
    screenshots: [],
  },
];

const ProjectsSection = () => {
  return (
    <section id="work" className="py-32 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="section-title">Featured Work</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of mobile applications I've built, each solving unique challenges
            with clean architecture and exceptional user experience.
          </p>
        </motion.div>

        {/* Projects list - vertical stack */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 p-2 rounded-full bg-card/50 border border-border/50">
            <span className="px-4 text-muted-foreground">
              Want to see more?
            </span>
            <motion.a
              href="https://github.com/AhmedRedagh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View GitHub
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
