import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { BatmanBackgroundVideo } from "../assets";

const Loader = ({ setLoading}) => {
  // Refs
  const loaderRef = useRef(null);
  const brandRef = useRef(null);
  const quoteRef = useRef(null);
  const progressRef = useRef(null);
  const batSignalRef = useRef(null);
  const smokeElementsRef = useRef([]);

  // State
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  // Initialize smoke elements
  const addToSmokeElements = (el) => {
    if (el && !smokeElementsRef.current.includes(el)) {
      smokeElementsRef.current.push(el);
    }
  };

  // First ensure loading state is true when component mounts
  useEffect(() => {
    setLoading(true);

    // Check if video is already loaded
    const video = document.createElement("video");
    video.src = BatmanBackgroundVideo;

    const handleVideoLoad = () => {
      setAssetsLoaded(true);
      video.removeEventListener("canplaythrough", handleVideoLoad);
    };

    video.addEventListener("canplaythrough", handleVideoLoad);

    // Fallback in case video takes too long
    const timeout = setTimeout(() => {
      setAssetsLoaded(true);
    }, 3000);

    return () => {
      video.removeEventListener("canplaythrough", handleVideoLoad);
      clearTimeout(timeout);
    };
  }, [setLoading]);

  // Main animation and loading effect
  useEffect(() => {
    if (!assetsLoaded) return;

    const smokeElements = smokeElementsRef.current;
    const batSignal = batSignalRef.current;
    const loader = loaderRef.current;
    const brand = brandRef.current;
    const quote = quoteRef.current;

    // Smoke Animation
    const smokeAnimations = smokeElements.map((el, i) =>
      gsap.fromTo(
        el,
        { scale: 0, opacity: 0 },
        {
          scale: gsap.utils.random(0.8, 1.2),
          opacity: gsap.utils.random(0.3, 0.6),
          duration: gsap.utils.random(2, 4),
          delay: i * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }
      )
    );
    // Progress Simulation
    let currentProgress = 0;
    const targetProgress = 95;
    const progressInterval = setInterval(() => {
      if (currentProgress >= targetProgress) {
        clearInterval(progressInterval);
      } else {
        const increment =
          currentProgress < 80
            ? 1 + Math.random() * 2
            : 0.3 + Math.random() * 0.7;
        currentProgress = Math.min(currentProgress + increment, targetProgress);
        setProgress(currentProgress);
      }
    }, 20);

    // Loader Timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        setProgress(100);
        setIsComplete(true);
        // Hide Loader
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      },
    });

    tl.from(loader, { duration: 0.8 })
      .from(
        brand,
        {
          y: 100,
          opacity: 0,
          duration: 1.6,
          ease: "elastic.out(1, 0.4)",
        },
        "+=0.2"
      )
      .from(quote, { y: 50, opacity: 0, duration: 1.2 }, "-=0.8")
      .to(
        loader,
        {
          y: "-100%",
          opacity: 0,
          duration: 1.5,
          ease: "power4.in",
          delay: 0.6,
        },
        "+=0.5"
      );

    // Cleanup
    return () => {
      clearInterval(progressInterval);
      smokeAnimations.forEach((anim) => anim.kill());
      tl.kill();
    };
  }, [assetsLoaded, setLoading]);

  // Show nothing if assets aren't loaded yet (prevent flash)
  if (!assetsLoaded) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-black text-white flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          src={BatmanBackgroundVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-110 opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/10 to-black" />
      </div>

      {/* Smoke Effects */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          ref={addToSmokeElements}
          className="absolute rounded-full bg-gray-600 pointer-events-none"
          style={{
            width: `${gsap.utils.random(50, 150)}px`,
            height: `${gsap.utils.random(50, 150)}px`,
            top: `${gsap.utils.random(20, 80)}%`,
            left: `${gsap.utils.random(10, 90)}%`,
            filter: "blur(20px)",
          }}
        />
      ))}

      {/* Bat Signal */}
      <div
        ref={batSignalRef}
        className="absolute top-[18%] w-[80%] max-w-[600px] h-48 bg-yellow-400/10 opacity-0 pointer-events-none"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          transformOrigin: "center top",
          filter: "drop-shadow(0 0 12px rgba(255, 235, 0, 0.5))",
        }}
      />

      {/* Loader Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-4xl flex flex-col items-center gap-6">
        {/* Brand Title */}
        <div className="overflow-hidden">
          <h1
            ref={brandRef}
            className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-wider uppercase whitespace-nowrap"
            style={{
              textShadow: "0 0 15px rgba(255,255,255,0.8)",
              fontFamily: '"Agency FB", "Bebas Neue", sans-serif',
              letterSpacing: "0.1em",
              background: "linear-gradient(to right, #f5f5f5, #e0e0e0)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Duke & Villain
          </h1>
        </div>

        {/* Quote */}
        <div className="overflow-hidden">
          <p
            ref={quoteRef}
            className="italic text-white/95 text-lg sm:text-xl md:text-2xl max-w-2xl leading-relaxed"
            style={{
              textShadow: "0 2px 8px rgba(0,0,0,0.8)",
              fontFamily: '"Crimson Text", serif',
            }}
          >
            "Fashion is the armor to survive the reality of everyday life."
          </p>
        </div>

        {/* Enhanced Progress Bar */}
        <div className="w-full max-w-md mt-12">
          <div className="relative">
            <div
              className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden shadow-lg"
              style={{
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.4)",
              }}
            >
              <div
                ref={progressRef}
                className="h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 transition-all duration-75 ease-linear relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/80 animate-pulse" />
              </div>
            </div>
            <span
              className={`absolute right-0 top-1/2 -translate-y-1/2 text-yellow-400 text-xs font-mono transition-all duration-300 ${
                isComplete ? "opacity-0 translate-x-2" : "opacity-100"
              }`}
            >
              {Math.round(progress)}%
            </span>
            {isComplete && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 text-yellow-400 text-xs font-mono animate-pulse">
                Ready
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
