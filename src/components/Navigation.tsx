import { useState, useEffect } from "react";
import { Menu, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Note: Added 'skills' (Tech Stack) to the list based on existing sections
    const sections = ["hero", "about", "experience", "skills", "projects", "contact"];
    const observers = sections.map((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          });
        },
        { rootMargin: "-30% 0px -70% 0px" }
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Tech Stack", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out`}
    >
      <div className="w-full relative">
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`relative overflow-hidden flex items-center justify-between px-6 md:px-12 transition-all duration-500 border-b ${
            isScrolled 
              ? "h-[64px] bg-[rgba(8,10,20,0.85)] backdrop-blur-[24px] border-[#8B5CF6]/30 shadow-[0_4px_30px_rgba(139,92,246,0.15)]" 
              : "h-[80px] bg-[rgba(8,10,20,0.55)] backdrop-blur-[20px] border-[#3B82F6]/10 shadow-[0_4px_20px_rgba(59,130,246,0.05)]"
          }`}
        >
          {/* Internal Atmospheric Glows / Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-[5%] top-[-50%] w-[150px] h-[150px] bg-[radial-gradient(circle,rgba(0,229,255,0.15)_0,transparent_70%)] blur-[20px]" 
            />
            <motion.div 
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-[5%] bottom-[-50%] w-[150px] h-[150px] bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0,transparent_70%)] blur-[20px]" 
            />
            {/* Small floating particles */}
            <div className="absolute top-[20%] left-[30%] w-1 h-1 bg-[#00E5FF] rounded-full animate-float opacity-50 blur-[1px]"></div>
            <div className="absolute bottom-[30%] right-[40%] w-1.5 h-1.5 bg-[#8B5CF6] rounded-full animate-float opacity-40 blur-[1px]" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Logo Area */}
          <div 
            className="relative z-10 flex items-center gap-3 cursor-pointer group" 
            onClick={() => scrollToSection('hero')}
          >
            {/* Geometric SVG Logo */}
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
                <defs>
                  <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
                {/* V Shape */}
                <path d="M 20 25 L 40 75 L 50 50 L 30 25 Z" fill="url(#neonGradient)" />
                {/* B Shape - Geometric */}
                <path d="M 45 25 L 75 25 L 85 35 L 75 45 L 60 45 L 75 45 L 85 55 L 75 65 L 45 65 Z" stroke="url(#neonGradient)" strokeWidth="6" strokeLinejoin="miter" />
                <path d="M 45 45 L 72 45" stroke="url(#neonGradient)" strokeWidth="6" />
              </svg>
            </div>
            
            <span className="font-sora font-bold text-white text-[18px] tracking-[0.05em] group-hover:text-[#3B82F6] transition-colors duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
              Balaji
            </span>
          </div>

          {/* Right Side Group */}
          <div className="hidden lg:flex items-center ml-auto gap-4 z-10">
            {/* Desktop Navigation Links */}
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 text-[13px] font-space font-medium transition-all duration-300 ease-in-out group ${
                      isActive 
                        ? "text-white" 
                        : "text-[#B5B7C7] hover:text-white"
                    }`}
                  >
                    <span className="relative z-10 group-hover:-translate-y-[2px] transition-transform duration-300 inline-block group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                      {item.name}
                    </span>
                    
                    {/* Active Indicator & Underline */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          layoutId="activeNavLine"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute -bottom-1 left-0 right-0 flex flex-col items-center justify-center pointer-events-none"
                        >
                          <div className="w-[60%] h-[2px] bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                          <div className="w-1 h-1 rounded-full bg-white shadow-[0_0_5px_#fff] mt-[2px]" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>

            {/* Connect Button */}
            <div className="flex items-center ml-2">
              <button 
                onClick={() => scrollToSection('contact')}
                className="group relative flex items-center justify-center px-6 h-[44px] rounded-[16px] bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white font-space font-medium text-[14px] shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)] transition-all duration-400 ease-out hover:scale-105"
              >
                {/* Button inner glow overlay */}
                <div className="absolute inset-0 rounded-[16px] bg-gradient-to-r from-[#00E5FF]/20 to-[#8B5CF6]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <span className="relative z-10">Let's Connect</span>
                <ArrowRight className="w-4 h-4 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden flex items-center z-10">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="text-white p-2 hover:bg-white/10 rounded-xl transition-colors backdrop-blur-md border border-white/5">
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent className="bg-[#020617]/95 backdrop-blur-2xl border-l border-[#00E5FF]/20 w-[300px] p-6 shadow-[0_0_50px_rgba(0,229,255,0.2)]">
                <div className="flex flex-col gap-6 mt-12">
                  <div className="flex items-center gap-3 mb-4 pb-6 border-b border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                      <span className="text-white font-sora font-bold text-sm">VB</span>
                    </div>
                    <span className="font-sora font-bold text-lg text-white">Balaji Boppudi</span>
                  </div>

                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`text-left text-lg font-space font-medium px-4 py-3 rounded-2xl transition-all duration-300 ${
                          isActive
                            ? "text-white bg-[#3B82F6]/10 border border-[#3B82F6]/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                            : "text-[#B5B7C7] hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="flex items-center justify-center w-full h-14 mt-4 text-lg rounded-[16px] bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] font-space font-medium"
                  >
                    Let's Connect <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </motion.nav>
      </div>
    </header>
  );
};

export default Navigation;
