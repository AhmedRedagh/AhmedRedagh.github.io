import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ScreenshotSliderProps {
  screenshots: string[];
  appName: string;
}

const ScreenshotSlider = ({ screenshots, appName }: ScreenshotSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  // Calculate visible screenshots (show 3-5 depending on screen)
  const getVisibleScreenshots = () => {
    const result = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + screenshots.length) % screenshots.length;
      result.push({ index, offset: i });
    }
    return result;
  };

  if (screenshots.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-muted/20 rounded-2xl">
        <span className="text-muted-foreground text-sm">Screenshots coming soon</span>
      </div>
    );
  }

  return (
    <div className="relative py-8">
      {/* Phone mockups carousel */}
      <div className="flex items-center justify-center gap-4 h-[400px] md:h-[480px] overflow-hidden">
        <AnimatePresence mode="popLayout">
          {getVisibleScreenshots().map(({ index, offset }) => {
            const isCenter = offset === 0;
            const isAdjacent = Math.abs(offset) === 1;
            const isFar = Math.abs(offset) === 2;

            return (
              <motion.div
                key={`${index}-${offset}`}
                className="relative flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8, x: offset * 100 }}
                animate={{
                  opacity: isFar ? 0.3 : isAdjacent ? 0.6 : 1,
                  scale: isFar ? 0.6 : isAdjacent ? 0.8 : 1,
                  x: offset * (isCenter ? 0 : 20),
                  zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{
                  order: offset + 2,
                }}
              >
                {/* Phone frame */}
                <div
                  className={`relative bg-gradient-to-b from-secondary to-muted rounded-[2.5rem] p-2 shadow-2xl ${
                    isCenter ? "shadow-primary/20" : ""
                  }`}
                  style={{
                    width: isCenter ? "180px" : isAdjacent ? "150px" : "120px",
                  }}
                >
                  {/* Phone notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-5 bg-background rounded-full z-10" />
                  
                  {/* Screen */}
                  <div className="relative rounded-[2rem] overflow-hidden bg-background aspect-[9/19.5]">
                    <img
                      src={screenshots[index]}
                      alt={`${appName} screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Home indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-foreground/20 rounded-full" />
                </div>

                {/* Glow effect for center */}
                {isCenter && (
                  <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-xl -z-10" />
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
        <motion.button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-colors pointer-events-auto"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-colors pointer-events-auto"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {screenshots.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "bg-primary w-6"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScreenshotSlider;
