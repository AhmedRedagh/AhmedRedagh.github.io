import { ReactNode } from "react";

interface DeviceFrameProps {
  children: ReactNode;
  className?: string;
}

const DeviceFrame = ({ children, className = "" }: DeviceFrameProps) => {
  return (
    <div className={`relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl ${className}`}>
      {/* Side buttons */}
      <div className="w-[3px] h-[32px] absolute -left-[17px] top-[72px] bg-gray-800 rounded-l-lg"></div>
      <div className="w-[3px] h-[46px] absolute -left-[17px] top-[124px] bg-gray-800 rounded-l-lg"></div>
      <div className="w-[3px] h-[46px] absolute -left-[17px] top-[178px] bg-gray-800 rounded-l-lg"></div>
      <div className="w-[3px] h-[64px] absolute -right-[17px] top-[142px] bg-gray-800 rounded-r-lg"></div>
      
      {/* Screen container */}
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800 relative">
        {/* Dynamic Island / Notch area */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[30px] w-[100px] bg-black rounded-b-3xl z-20 flex justify-center items-center">
             <div className="h-[8px] w-[8px] rounded-full bg-[#1c1c1c] ml-[60px]"></div>
        </div>
        
        {/* Actual Content */}
        {children}
      </div>
    </div>
  );
};

export default DeviceFrame;
