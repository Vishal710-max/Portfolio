import React, { useState, useEffect, useRef } from 'react';

const PortfolioLoading = () => {
  const [loading, setLoading] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const containerRef = useRef(null);
  
  const fullText = "⚡ Explore My Work...⚡";

  useEffect(() => {
    // Typewriter effect
    let index = 0;
    const typeWriter = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typeWriter);
        // Wait a bit then start exit animation
        setTimeout(() => {
          if (containerRef.current) {
            containerRef.current.style.opacity = '0';
          }
          setTimeout(() => setLoading(false), 800);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(typeWriter);
  }, []);

  if (!loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Welcome to Vishal's Portfolio</h1>
          <p className="text-xl text-purple-300">Content loaded successfully!</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        /* =========================
           Loader Animations
        ========================= */
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes orbit {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse-slow {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-25px) translateX(15px);
          }
          50% {
            transform: translateY(-15px) translateX(-15px);
          }
          75% {
            transform: translateY(-30px) translateX(10px);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.15);
          }
        }

        @keyframes grid-move {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(50px) translateX(50px);
          }
        }

        @keyframes shooting-star {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateX(300px) translateY(150px);
            opacity: 0;
          }
        }

        @keyframes rotate-shape {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes rotate-shape-reverse {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.2s both;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out 0.4s both;
        }

        .animate-fade-in-delayed {
          animation: fade-in 0.8s ease-out 0.6s both;
        }

        .animate-orbit {
          animation: orbit 2s linear infinite;
        }

        .animation-delay-1 {
          animation-delay: -0.5s;
        }

        .animation-delay-2 {
          animation-delay: -1s;
        }

        .animation-delay-3 {
          animation-delay: -1.5s;
        }

        .animation-delay-4 {
          animation-delay: -2s;
        }

        .animation-delay-5 {
          animation-delay: -2.5s;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 2s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 1.5s ease-in-out infinite;
        }

        .animate-blink {
          animation: blink 1s step-start infinite;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }

        .animate-shooting-star {
          animation: shooting-star 3s ease-out infinite;
        }

        .animate-rotate-shape {
          animation: rotate-shape 8s linear infinite;
        }

        .animate-rotate-shape-reverse {
          animation: rotate-shape-reverse 6s linear infinite;
        }
      `}</style>

      <div 
        ref={containerRef}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 transition-opacity duration-800 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating particles */}
          <div className="absolute w-2 h-2 bg-purple-500 rounded-full top-[10%] left-[15%] animate-float opacity-60"></div>
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full top-[20%] right-[20%] animate-float animation-delay-1 opacity-60"></div>
          <div className="absolute w-2 h-2 bg-pink-500 rounded-full bottom-[15%] left-[25%] animate-float animation-delay-2 opacity-60"></div>
          <div className="absolute w-3 h-3 bg-green-500 rounded-full top-[60%] right-[15%] animate-float animation-delay-3 opacity-60"></div>
          <div className="absolute w-2 h-2 bg-orange-500 rounded-full bottom-[25%] right-[30%] animate-float animation-delay-4 opacity-60"></div>
          <div className="absolute w-3 h-3 bg-indigo-500 rounded-full top-[40%] left-[10%] animate-float animation-delay-5 opacity-60"></div>
          
          {/* Glowing orbs */}
          <div className="absolute w-64 h-64 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 top-[-50px] left-[-50px] animate-pulse-glow"></div>
          <div className="absolute w-64 h-64 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 bottom-[-50px] right-[-50px] animate-pulse-glow animation-delay-2"></div>
          <div className="absolute w-48 h-48 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow animation-delay-4"></div>
          
          {/* Animated grid lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full animate-[grid-move_20s_linear_infinite]" style={{
              backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          {/* Shooting stars */}
          <div className="absolute w-1 h-1 bg-white rounded-full top-[20%] left-[10%] animate-shooting-star"></div>
          <div className="absolute w-1 h-1 bg-white rounded-full top-[50%] right-[20%] animate-shooting-star animation-delay-3"></div>
          <div className="absolute w-1 h-1 bg-white rounded-full bottom-[30%] left-[30%] animate-shooting-star animation-delay-5"></div>
          
          {/* Rotating geometric shapes */}
          <div className="absolute top-[15%] right-[10%] w-12 h-12 border-2 border-purple-500/30 rotate-45 animate-rotate-shape"></div>
          <div className="absolute bottom-[20%] left-[12%] w-16 h-16 border-2 border-blue-500/30 animate-rotate-shape-reverse"></div>
          <div className="absolute top-[70%] right-[25%] w-10 h-10 border-2 border-pink-500/30 rotate-45 animate-rotate-shape animation-delay-2"></div>
        </div>

        <div className="text-center relative z-10">
          {/* Logo with animation */}
          <div className="mb-8 mx-auto rounded-full border-2 border-indigo-500 p-1.5 w-20 h-20 animate-scale-in">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
              <span className="text-3xl font-bold text-white">V</span>
            </div>
          </div>

          {/* Title with slide-up animation */}
          <h1 className="mb-9 text-2xl md:text-3xl font-bold text-purple-400 animate-slide-up">
            Vishal's Portfolio
          </h1>

          {/* Custom Animated Loader - Orbiting Dots */}
          <div className="relative w-32 h-32 mx-auto mb-6 animate-fade-in">
            {/* Center core */}
            <div className="absolute top-1/2 left-1/2 w-4 h-4 -ml-2 -mt-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-pulse-slow"></div>
            
            {/* Orbiting dots */}
            <div className="absolute inset-0 animate-orbit">
              <div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
            </div>
            
            <div className="absolute inset-0 animate-orbit animation-delay-1">
              <div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
            </div>
            
            <div className="absolute inset-0 animate-orbit animation-delay-2">
              <div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>
            </div>
            
            <div className="absolute inset-0 animate-orbit animation-delay-3">
              <div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50"></div>
            </div>

            {/* Rotating rings */}
            <div className="absolute inset-4 border-2 border-transparent border-t-indigo-500 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-8 border-2 border-transparent border-b-purple-500 rounded-full animate-spin-reverse-slow"></div>
          </div>

          {/* Typewriter text */}
          <div className="mt-4 text-lg font-medium font-mono text-indigo-300 min-h-[28px] animate-fade-in">
            {displayText}
            <span className="animate-blink">|</span>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center space-x-2 mt-6 animate-fade-in-delayed">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce-slow" style={{ animationDelay: '0ms' }}></span>
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce-slow" style={{ animationDelay: '200ms' }}></span>
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce-slow" style={{ animationDelay: '400ms' }}></span>
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce-slow" style={{ animationDelay: '600ms' }}></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioLoading;