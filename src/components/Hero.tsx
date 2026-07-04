import { motion } from "framer-motion";
import { FileText, Sparkles } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => <img src="/github.png" alt="GitHub" className={`${className} object-contain opacity-70 group-hover:opacity-100 transition-opacity`} />;
const LinkedinIcon = ({ className }: { className?: string }) => <img src="/linkedin.png" alt="LinkedIn" className={`${className} object-contain opacity-70 group-hover:opacity-100 transition-opacity`} />;
const MailIcon = ({ className }: { className?: string }) => <img src="/mail.png" alt="Mail" className={`${className} object-contain opacity-70 group-hover:opacity-100 transition-opacity`} />;

const Hero = () => {

  const socialLinks = [
    {
      icon: GithubIcon,
      href: "https://github.com/VenkataBalaji07",
      label: "GitHub",
    },
    {
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/venkata-balaji-boppudi-632b5b248/",
      label: "LinkedIn",
    },
    {
      icon: MailIcon,
      href: "mailto:venkatabalaji00007@gmail.com",
      label: "Email",
    },
    {
      icon: FileText,
      href: "https://drive.google.com/file/d/1OqDC4Skyt03NCrKlHsCQ0mrbgsqyUkzh/view?usp=sharing",
      label: "Resume",
      primary: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section 
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#05050A] pt-32 pb-12" 
      id="hero"
      style={{ backgroundImage: 'url(/herosection.png)', backgroundSize: 'cover', backgroundPosition: 'center top', backgroundRepeat: 'no-repeat' }}
    >
      {/* Removed overlay to keep image full HD and clear */}
      
      {/* Code Snippet Boxes on Right Side */}
      {/* AI Cyberpunk Animations (Right Side Focus) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        
        {/* Diagonal glowing lines */}
        <motion.div 
          initial={{ opacity: 0, x: 200, y: -200 }}
          animate={{ opacity: [0, 0.8, 0], x: -500, y: 500 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute top-[10%] right-[10%] w-[300px] h-[2px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent rotate-45 blur-[1px]"
        />
        <motion.div 
          initial={{ opacity: 0, x: 300, y: -300 }}
          animate={{ opacity: [0, 0.5, 0], x: -600, y: 600 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 2.5 }}
          className="absolute top-[20%] right-[5%] w-[400px] h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent rotate-45 blur-[1px]"
        />

        {/* Sparkles / Data points */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[45%] right-[12%] hidden lg:flex items-center justify-center text-[#8B5CF6]"
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>

        {/* Code Block 2 - Lower Right Chest Area */}
        <motion.div 
          animate={{ y: [8, -8, 8], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[55%] right-[2%] hidden lg:flex flex-col gap-1.5 p-3 rounded-lg bg-black/30 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)] font-mono text-[11px] text-[#8B5CF6] w-[180px]"
        >
          <div className="flex gap-1.5 mb-1">
            <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
            <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
          </div>
          <p className="opacity-80 text-white/90">Agent <span className="text-[#00E5FF]">Status</span></p>
          <p className="opacity-80">Memory: 99.8%</p>
          <motion.p 
            animate={{ opacity: [0, 1, 0] }} 
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white"
          >
            <span className="text-[#00E5FF]">Ready</span> _
          </motion.p>
        </motion.div>
      </div>



      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-center w-full">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[8%] mt-8 lg:mt-0">
          
          {/* Left-Aligned Content (100%) */}
          <div className="w-full flex flex-col justify-center text-left shrink-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <div className="space-y-5">
                <motion.h1 variants={itemVariants} className="text-[2.75rem] sm:text-6xl lg:text-[4.5rem] leading-[1.05] font-heading font-bold text-white tracking-[-0.02em]">
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Venkata Balaji <br className="hidden lg:block" /> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#3B82F6] to-[#8B5CF6]">Boppudi</span>
                  </motion.div>
                </motion.h1>
                
                <motion.h3 variants={itemVariants} className="text-xl sm:text-2xl text-white/80 font-medium">
                  Building intelligent solutions for a better tomorrow
                </motion.h3>
                
                <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#EC4899]">
                    AI Engineer <span className="opacity-30 font-light mx-2 text-[#5E6472]">|</span> Data Scientist <span className="opacity-30 font-light mx-2 text-[#5E6472]">|</span> AI Trainer
                  </span>
                </motion.h2>
              </div>

              <motion.p variants={itemVariants} className="text-lg sm:text-xl text-white/70 max-w-[650px] leading-[1.7] font-medium">
                Transforming ideas into intelligent AI products through Data Science, Machine Learning, Generative AI, AI Agents, Prompt Engineering, and Large Language Models (LLMs), with a focus on scalable, real-world applications and measurable business impact.
              </motion.p>

              {/* Action Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap justify-start gap-4 pt-6">
                {socialLinks.map((link, index) => (
                  <motion.a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    key={link.label}
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                  >
                    <button
                      className={`relative overflow-hidden group h-12 px-6 flex items-center gap-2.5 rounded-[14px] font-space font-bold text-[15px] transition-all duration-300 ease-out backdrop-blur-md hover:scale-105 hover:-translate-y-1 ${
                        link.primary
                          ? "bg-black/20 border-2 border-[#8B5CF6] text-white shadow-[0_0_15px_rgba(139,92,246,0.4)] hover:shadow-[0_0_25px_rgba(139,92,246,0.7)] hover:bg-[#8B5CF6]/10"
                          : "bg-black/20 border border-[#00E5FF]/80 text-white shadow-[0_0_10px_rgba(0,229,255,0.2)] hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] hover:bg-[#00E5FF]/10 hover:border-[#00E5FF]"
                      }`}
                    >
                      {/* Cyberpunk internal glow overlay on hover */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${link.primary ? 'bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6]' : 'bg-gradient-to-r from-[#00E5FF] to-[#3B82F6]'}`} />
                      
                      <link.icon className={`w-5 h-5 transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]`} />
                      <span className="relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{link.label}</span>
                    </button>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
