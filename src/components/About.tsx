import { motion } from "framer-motion";

const About = () => {
  return (
    <section 
      className="relative py-24 bg-[#05050A] overflow-hidden" 
      id="about"
      style={{ backgroundImage: 'url(/aboutme.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      {/* Background ambient glows & animations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-[#8B5CF6]/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-[#00E5FF]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Animated Cyber Grid */}
        <motion.div 
          animate={{ backgroundPosition: ["0px 0px", "0px 24px"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" 
        />
        
        {/* Floating Data Streams in Background */}
        <motion.div 
          animate={{ y: [-200, 1200], opacity: [0, 0.6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          className="absolute left-[15%] top-0 w-[1px] h-[150px] bg-gradient-to-b from-transparent via-[#8B5CF6] to-transparent"
        />
        <motion.div 
          animate={{ y: [-200, 1200], opacity: [0, 0.4, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 3 }}
          className="absolute right-[25%] top-0 w-[2px] h-[200px] bg-gradient-to-b from-transparent via-[#00E5FF] to-transparent"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-[1400px]">
        {/* Outer Container with Glowing Animated Border */}
        <div className="relative p-[1px] rounded-[33px] overflow-hidden group">
          {/* Rotating Border Glows */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#8B5CF6_360deg)] opacity-70 group-hover:opacity-100"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#00E5FF_360deg)] opacity-70 group-hover:opacity-100"
          />
          
          {/* Actual Inner Container */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center bg-[#05050A]/90 backdrop-blur-xl rounded-[32px] p-8 lg:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          
          {/* Cyberpunk corner decorations */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#8B5CF6] rounded-tl-[32px] opacity-50" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00E5FF] rounded-br-[32px] opacity-50" />

          {/* Left Column (7 cols) - Content */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="mb-10 text-left">
                <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#00E5FF] drop-shadow-[0_0_10px_rgba(139,92,246,0.3)] inline-block">
                  About Me
                </h2>
                <div className="h-[3px] w-24 bg-gradient-to-r from-[#8B5CF6] to-[#00E5FF] mt-4 rounded-full shadow-[0_0_10px_rgba(0,229,255,0.6)]" />
              </div>
              
              <div className="space-y-6 text-[16px] md:text-[17px] leading-[1.8] text-[#94A3B8] font-space">
                <p>
                  I am a <strong className="text-[#00E5FF] font-semibold drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]">Data Scientist</strong> with professional experience in designing data-driven solutions, developing intelligent AI applications, and delivering industry-focused AI training. I specialize in transforming complex business challenges into scalable AI solutions using <strong className="text-[#8B5CF6] font-semibold drop-shadow-[0_0_8px_rgba(139,92,246,0.4)]">Machine Learning, Generative AI, Large Language Models (LLMs), Prompt Engineering, AI Agents, AI Chatbots, Retrieval-Augmented Generation (RAG), and AI Product Development</strong>.
                </p>
                <p>
                  Currently, I serve as an <strong className="text-[#00E5FF] font-semibold drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]">AI Trainer at 1M1B (One Million for One Billion)</strong>, where I collaborate with educational institutions and industry partners to design and deliver hands-on training in Artificial Intelligence, Machine Learning, Deep Learning, Generative AI, AI Agents, Prompt Engineering, TensorFlow, PyTorch, and modern LLM-powered applications. I mentor students through project-based learning and practical workshops, helping them build real-world AI solutions aligned with current industry standards.
                </p>

                <p>
                  I am passionate about building next-generation AI products that create measurable business value. My areas of interest include <strong className="text-[#8B5CF6] font-semibold drop-shadow-[0_0_8px_rgba(139,92,246,0.4)]">AI Product Development, Intelligent Automation, Multi-Agent Systems, AI Chatbots, LLM Applications, Prompt Engineering, and scalable end-to-end AI solutions</strong>. I continuously explore emerging AI technologies to develop innovative, impactful, and production-ready applications.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column (5 cols) - Professional Photographs */}
          <div className="lg:col-span-5 h-full w-full order-1 lg:order-1">
            <motion.div 
              className="flex flex-col gap-8 h-full justify-center items-center relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 }
                }
              }}
            >
              {/* First Image - Cyberpunk Border */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95, filter: "blur(10px)" },
                  visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="relative w-[80%] md:w-[65%] aspect-[3/4] p-[2px] rounded-[24px] bg-gradient-to-br from-[#8B5CF6] via-[#00E5FF] to-[#8B5CF6] shadow-[0_0_30px_rgba(139,92,246,0.3)] self-end group"
              >
                {/* Animated glow border effect */}
                <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-[#8B5CF6] via-[#00E5FF] to-[#8B5CF6] blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-black z-10">
                  <img 
                    src="/lovable-uploads/about-image-2.jpg" 
                    alt="Professional Working Session" 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  {/* Cyberpunk overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8B5CF6]/20 to-transparent mix-blend-overlay" />
                </div>
              </motion.div>

              {/* Second Image - Cyberpunk Border */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95, filter: "blur(10px)" },
                  visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="relative w-full md:w-[90%] aspect-[16/10] p-[2px] rounded-[24px] bg-gradient-to-r from-[#00E5FF] via-[#8B5CF6] to-[#00E5FF] shadow-[0_0_30px_rgba(0,229,255,0.3)] self-start z-10 group mt-[-20%]"
              >
                {/* Animated glow border effect */}
                <div className="absolute inset-0 rounded-[24px] bg-gradient-to-r from-[#00E5FF] via-[#8B5CF6] to-[#00E5FF] blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-black z-10">
                  <img 
                    src="/lovable-uploads/about-image.jpg" 
                    alt="Professional Training Session" 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  {/* Cyberpunk overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00E5FF]/20 to-transparent mix-blend-overlay" />
                </div>
              </motion.div>
            </motion.div>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
