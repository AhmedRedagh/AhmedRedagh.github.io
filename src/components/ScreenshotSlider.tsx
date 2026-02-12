import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import DeviceFrame from "./DeviceFrame";

interface ScreenshotSliderProps {
  screenshots: string[];
  appName: string;
}

const ScreenshotSlider = ({ screenshots, appName }: ScreenshotSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, screenshots.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  // Calculate visible screenshots (show 3)
  const getVisibleScreenshots = () => {
    if (screenshots.length === 0) return [];
    
    // Always return 3 items for the carousel logic
    const prev = (currentIndex - 1 + screenshots.length) % screenshots.length;
    const next = (currentIndex + 1) % screenshots.length;
    
    // Order matters for z-index: center last to be on top
    return [
      { index: prev, position: -1 },
      { index: next, position: 1 },
      { index: currentIndex, position: 0 },
    ];
  };

  if (screenshots.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-muted/20 rounded-2xl border border-dashed border-muted">
        <span className="text-muted-foreground text-sm">Screenshots coming soon</span>
      </div>
    );
  }

  return (
    <div className="relative py-12 px-4 select-none">
      {/* 3D Carousel */}
      <div className="flex items-center justify-center h-[500px] md:h-[600px] perspective-1000 relative">
        <AnimatePresence initial={false} custom={direction}>
          {getVisibleScreenshots().map(({ index, position }) => {
            return (
              <motion.div
                key={`${index}-${position}`} // Unique key for AnimatePresence
                className={`absolute transition-all duration-500 rounded-[2.5rem]`}
                initial={{ 
                  scale: 0.8, 
                  x: position * 100 + direction * 50,
                  opacity: 0,
                  rotateY: position * -15,
                  z: -100
                }}
                animate={{
                  scale: position === 0 ? 1 : 0.85,
                  x: position * (window.innerWidth < 768 ? 140 : 220),
                  opacity: position === 0 ? 1 : 0.5,
                  rotateY: position * -25,
                  zIndex: position === 0 ? 20 : 10,
                  z: position === 0 ? 0 : -100,
                  filter: position === 0 ? "blur(0px)" : "blur(2px)",
                }}
                exit={{ 
                  scale: 0.8, 
                  x: position * 100 - direction * 50,
                  opacity: 0,
                  rotateY: position * -15,
                  z: -100
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.32, 0.72, 0, 1],
                  opacity: { duration: 0.4 }
                }}
                onClick={() => {
                  if (position !== 0) setCurrentIndex(index);
                }}
              >
                <div 
                  className={`transform transition-all duration-300 ${
                    position !== 0 ? "cursor-pointer hover:brightness-110" : ""
                  }`}
                  style={{
                    transformOrigin: "center center",
                  }}
                >
                  <div className="scale-[0.5] md:scale-[0.6] lg:scale-[0.7] -my-[150px] md:-my-[120px]">
                    <DeviceFrame>
                      <img
                        src={screenshots[index]}
                        alt={`${appName} screenshot ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </DeviceFrame>
                  </div>
                </div>

                {/* Reflection effect */}
                {position === 0 && (
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-black/20 blur-xl rounded-[100%]" />
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation arrows (floating) */}
      <div className="absolute inset-y-0 left-0 md:left-10 z-30 flex items-center pointer-events-none">
        <motion.button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-background/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-foreground hover:bg-background/80 hover:scale-110 transition-all shadow-lg pointer-events-auto group"
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </motion.button>
      </div>

      <div className="absolute inset-y-0 right-0 md:right-10 z-30 flex items-center pointer-events-none">
        <motion.button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-background/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-foreground hover:bg-background/80 hover:scale-110 transition-all shadow-lg pointer-events-auto group"
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </motion.button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-3 mt-4">
        {screenshots.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "bg-primary w-8"
                : "bg-muted-foreground/30 w-1.5 hover:bg-primary/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScreenshotSlider;
