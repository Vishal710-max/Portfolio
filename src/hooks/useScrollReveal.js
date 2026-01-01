// hooks/useScrollReveal.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollReveal = (refs, options = {}) => {
  const animationRefs = useRef([]);

  useEffect(() => {
    // Convert refs to array if it's not already
    const refArray = Array.isArray(refs) ? refs : [refs];
    
    // Filter out null refs and get the actual DOM elements
    const elements = refArray
      .map(ref => ref?.current)
      .filter(element => element && element.nodeType === 1);

    if (elements.length === 0) return;

    const ctx = gsap.context(() => {
      elements.forEach((element, index) => {
        // Set default styles for animation
        gsap.set(element, {
          opacity: 0,
          y: options.y || 50,
          ...options.initialStyles
        });

        // Create the animation
        const animation = gsap.to(element, {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: options.duration || 1,
          delay: options.delay || index * 0.2,
          ease: options.ease || "power3.out",
          scrollTrigger: {
            trigger: element,
            start: options.start || "top 80%",
            end: options.end || "bottom 20%",
            toggleActions: options.toggleActions || "play none none reverse",
            once: options.once !== false,
            ...options.scrollTrigger
          },
          ...options.animationProps
        });

        animationRefs.current[index] = animation;
      });
    });

    return () => {
      ctx.revert();
      animationRefs.current.forEach(anim => anim?.kill());
    };
  }, [refs, options]);

  return animationRefs;
};

export default useScrollReveal;