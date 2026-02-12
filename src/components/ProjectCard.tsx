import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Smartphone, Apple, Globe, ChevronDown, ChevronUp, Images } from "lucide-react";
import ScreenshotSlider from "./ScreenshotSlider";

interface ProjectLinks {
  android?: string;
  ios?: string;
  website?: string;
  about?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  index: number;
  links?: ProjectLinks;
  platforms?: string[];
  highlight?: string;
  screenshots?: string[];
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  index,
  links,
  platforms,
  highlight,
  screenshots = [],
}: ProjectCardProps) => {
  const [showScreenshots, setShowScreenshots] = useState(false);
  const isComingSoon = platforms?.includes("Coming Soon");
  const hasLinks = links && Object.keys(links).length > 0;
  const hasScreenshots = screenshots.length > 0;

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Main card container */}
      <div className="relative bg-gradient-to-br from-card via-card to-secondary/20 rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500">
        {/* Top section with image and info */}
        <div className="flex flex-col lg:flex-row">
          {/* Image side */}
          <div className="lg:w-2/5 relative">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative overflow-hidden">
              <motion.img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/80 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent lg:hidden" />

              {/* Project number */}
              <div className="absolute top-4 left-4">
                <span className="text-7xl font-bold text-primary/20 font-mono">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Highlight badge */}
              {highlight && (
                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ scale: 0, rotate: -12 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                >
                  <span className="px-4 py-2 text-sm font-bold bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full shadow-lg shadow-primary/30">
                    {highlight}
                  </span>
                </motion.div>
              )}
            </div>
          </div>

          {/* Content side */}
          <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-center">
            {/* Platform badges */}
            {platforms && (
              <div className="flex gap-2 mb-4">
                {platforms.map((platform) => (
                  <span
                    key={platform}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 ${
                      platform === "Coming Soon"
                        ? "bg-accent/20 text-accent border border-accent/30"
                        : "bg-primary/10 text-primary border border-primary/20"
                    }`}
                  >
                    {platform === "Android" && <Smartphone className="w-3.5 h-3.5" />}
                    {platform === "iOS" && <Apple className="w-3.5 h-3.5" />}
                    {platform}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h3 className="text-2xl lg:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
              {title}
              {isComingSoon && (
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  (In Development)
                </span>
              )}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-5">{description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-mono bg-muted/50 text-muted-foreground rounded-lg border border-border/50 hover:border-primary/30 hover:text-primary transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions row */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Store Links */}
              {hasLinks && (
                <>
                  {links.android && (
                    <motion.a
                      href={links.android}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-xl transition-colors border border-primary/20 hover:border-primary/40"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Smartphone className="w-4 h-4" />
                      Play Store
                    </motion.a>
                  )}
                  {links.ios && (
                    <motion.a
                      href={links.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-xl transition-colors border border-primary/20 hover:border-primary/40"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Apple className="w-4 h-4" />
                      App Store
                    </motion.a>
                  )}
                  {links.website && (
                    <motion.a
                      href={links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-muted/50 hover:bg-primary/10 text-foreground hover:text-primary rounded-xl transition-colors border border-border/50"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Globe className="w-4 h-4" />
                      Website
                    </motion.a>
                  )}
                  {links.about && (
                    <motion.a
                      href={links.about}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-muted/50 hover:bg-primary/10 text-foreground hover:text-primary rounded-xl transition-colors border border-border/50"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      About
                    </motion.a>
                  )}
                </>
              )}

              {/* Screenshots toggle */}
              {hasScreenshots && (
                <motion.button
                  onClick={() => setShowScreenshots(!showScreenshots)}
                  className={`inline-flex items-center gap-2 text-sm px-4 py-2 rounded-xl transition-colors border ml-auto ${
                    showScreenshots
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-accent/10 text-accent border-accent/20 hover:bg-accent/20"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Images className="w-4 h-4" />
                  Screenshots
                  {showScreenshots ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </motion.button>
              )}
            </div>
          </div>
        </div>

        {/* Screenshots section - expandable */}
        <AnimatePresence>
          {showScreenshots && hasScreenshots && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden border-t border-border/50"
            >
              <div className="p-6 bg-gradient-to-b from-secondary/30 to-transparent">
                <h4 className="text-center text-sm font-mono text-primary mb-2 tracking-wider">
                  APP SCREENSHOTS
                </h4>
                <ScreenshotSlider screenshots={screenshots} appName={title} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Animated gradient border on hover */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, transparent) padding-box, linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary))) border-box",
            border: "2px solid transparent",
            opacity: 0,
          }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
