// // components/Loader.jsx
// import { useState, useEffect } from "react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const Loader = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//       document.body.classList.add("loaded");

//       if (typeof ScrollTrigger !== "undefined") {
//         setTimeout(() => ScrollTrigger.refresh(), 200);
//       }
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (!isLoading) return null;

//   return (
//     <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
//       <div className="text-center">
//         <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//         <p className="text-foreground">Loading portfolio...</p>
//       </div>
//     </div>
//   );
// };

// export default Loader;

// components/Loader.jsx
import { useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 100);

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.add("loaded");
      
      if (typeof ScrollTrigger !== "undefined") {
        setTimeout(() => ScrollTrigger.refresh(), 200);
      }
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center w-full max-w-md px-6">
        {/* Animated logo/icon */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
          <div className="absolute inset-2 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-4 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">V</span>
          </div>
        </div>

        {/* Loading text with animation */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Welcome</h2>
          <p className="text-muted-foreground">Preparing your experience</p>
        </div>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>Loading</span>
            <span>{Math.min(100, Math.round(progress))}%</span>
          </div>
        </div>

        {/* Optional: Subtle dots animation */}
        <div className="flex justify-center space-x-1 mt-6">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;