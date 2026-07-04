import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import FloatingChatWidget from "@/components/FloatingChatWidget";

const LoadingScreen = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const logoLetters = "PORTFOLIO".split("");

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.10,
      }
    }
  };

  const item = {
    hidden: { y: 15, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-[#EBE7F0] z-[100] flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Background Video (100% Opacity for maximum clarity) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-100 filter brightness-100 contrast-100"
          src="/hero-background.mp4"
        />
        {/* Transparent overlay just to soften layout borders slightly */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Left Branding in Animated Letter by Letter Stagger */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="absolute top-[35%] left-4 md:left-8 z-10 flex text-white font-sans font-medium tracking-normal text-[7.5vw] md:text-[6vw]"
      >
        {logoLetters.map((char, index) => (
          <motion.span 
            key={index} 
            variants={item}
            style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)" }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

      {/* Floating loading indicators at the bottom to keep the screen alive */}
      <div className="absolute bottom-16 left-0 right-0 z-10 flex flex-col items-center gap-4">
        {/* Loading progress bar */}
        <motion.div 
          className="w-40 h-[2.5px] bg-white/20 rounded-full overflow-hidden backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-full"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 2.25 second loading duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2250);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      {!isLoading && (
        <div className="min-h-screen bg-[#EBE7F0] text-[#5E6472] overflow-x-hidden font-sans selection:bg-[#D8B4FE]/30 selection:text-[#1F1F23]">
          <Navigation />
          
          <motion.main
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Hero Section (Primary BG) */}
            <div className="bg-[#05050A] relative">
              <Hero />
            </div>
            
            {/* About Section (Secondary BG) */}
            <div className="bg-[#05050A] relative">
              <About />
            </div>

            {/* Experience Section (Primary BG) */}
            <div className="bg-[linear-gradient(135deg,#F3E8FF_0%,#F8FAFC_50%,#CCFBF1_100%)] relative border-t border-[#E2E8F0]">
              <Experience />
            </div>

            {/* Skills Section (Secondary BG) */}
            <div className="bg-[linear-gradient(225deg,#CCFBF1_0%,#F1F5F9_50%,#FAE8FF_100%)] relative border-t border-[#E2E8F0]">
              <Skills />
            </div>

            {/* Projects Section (Primary BG) */}
            <div className="bg-[linear-gradient(135deg,#FAE8FF_0%,#F8FAFC_50%,#F3E8FF_100%)] relative border-t border-[#E2E8F0]">
              <Projects />
            </div>

            {/* Contact & Footer Section (Secondary BG - Renders its own video) */}
            <div className="bg-[#05050A] relative border-t border-white/10">
              <Contact />
            </div>
          </motion.main>

          <FloatingChatWidget />
        </div>
      )}
    </>
  );
};

export default Index;
