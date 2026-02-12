import { motion } from "framer-motion";

interface BrandLogoProps {
  className?: string;
  withText?: boolean;
}

const BrandLogo = ({ className = "", withText = false }: BrandLogoProps) => {
  return (
    <motion.div 
      className={`flex items-center gap-3 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* 
        NOTE: Use 'mix-blend-screen' to blend the black background of the logo 
        seamlessly with the dark header, creating a premium transparent effect 
        without needing to edit the image manually.
      */}
      <div className="relative w-12 h-12 overflow-hidden rounded-lg bg-black/20">
        <img 
          src="/logo.png" 
          alt="Ahmed Reda Logo" 
          className="w-full h-full object-contain mix-blend-screen" 
        />
        
        {/* Subtle glow behind the logo */}
        <div className="absolute inset-0 bg-primary/20 blur-xl -z-10" />
      </div>
      
      {withText && (
        <div className="flex flex-col">
          <span className="text-lg font-bold tracking-tight leading-none text-gradient">
            AHMED REDA
          </span>
          <span className="text-[0.6rem] font-mono tracking-widest text-muted-foreground uppercase">
            Senior Dev
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default BrandLogo;
