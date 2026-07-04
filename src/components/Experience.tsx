import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

const Experience = () => {
  const experiences = [
    {
      role: "AI Trainer",
      company: "1M1B (One Million for One Billion)",
      logo: "/lovable-uploads/1m1b-logo.svg",
      location: "Bengaluru (Remote)",
      period: "Jun 2025 – Present",
      description: "Currently delivering Artificial Intelligence and Machine Learning training programs through interactive workshops and project-based learning. Collaborate with academic institutions to promote AI education while mentoring students on practical applications of Machine Learning, Deep Learning, Generative AI, and Large Language Models.",
      images: [
        "/lovable-uploads/1m1b-team-1.jpg",
        "/lovable-uploads/1m1b-team-2.jpg"
      ],
    },
    {
      role: "Data Analyst",
      company: "Intecog Logistic Private Limited",
      logo: "/lovable-uploads/intecog-logo.avif",
      location: "Hyderabad",
      period: "Dec 2024 – Jun 2025",
      description: "Worked on industrial sensor and time-series datasets by developing reliable preprocessing and validation workflows that improved data quality for analytical systems. Built automated Python pipelines to clean, organize, and standardize telemetry data while contributing to anomaly detection research and operational monitoring solutions.",
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-transparent" id="experience">
      {/* Light Cyberpunk Grid Background */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00E5FF10_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF610_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent opacity-30" />
      </div>

      {/* Decorative blurred blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B5CF6]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#00E5FF]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#00E5FF] tracking-tight mb-6 drop-shadow-sm">
            Experience
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-[#8B5CF6] to-[#00E5FF] mx-auto rounded-full shadow-[0_0_10px_rgba(0,229,255,0.4)]"></div>
        </motion.div>

        <div className="relative border-l-2 border-[#E6E3EE] ml-4 md:ml-[34px] space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative pl-8 md:pl-16"
            >
              {/* Timeline indicator dot */}
              <div className="absolute -left-[11px] top-8 w-5 h-5 rounded-full bg-white border-[3px] border-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.5)] transition-transform duration-300 hover:scale-125 hover:border-[#8B5CF6] hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] z-10" />

              <GlowCard 
                customSize={true}
                glowColor="blue"
                className="bg-white/80 backdrop-blur-xl border border-[#00E5FF]/20 hover:border-[#8B5CF6]/50 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)] p-8 sm:p-10 text-left group transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-[#1F1F23] mb-2 tracking-tight group-hover:text-[#8B5CF6] transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-[#334155] font-semibold text-[15px]">
                      {exp.logo ? (
                        <img src={exp.logo} alt={exp.company} className="w-5 h-5 object-contain mr-2.5" />
                      ) : (
                        <Briefcase className="w-[18px] h-[18px] mr-2 text-[#475569]" />
                      )}
                      {exp.company}
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start md:items-end gap-2.5 shrink-0">
                    <span className="inline-flex items-center text-[13px] font-bold text-[#8B5CF6] bg-white px-3.5 py-1.5 rounded-full border border-[#8B5CF6]/30 shadow-[0_0_10px_rgba(139,92,246,0.1)]">
                      <Calendar className="w-3.5 h-3.5 mr-2 text-[#00E5FF]" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center text-[14px] font-semibold text-[#475569]">
                      <MapPin className="w-4 h-4 mr-1.5 text-[#475569]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-[16px] leading-[1.8] text-[#1E293B] font-medium">
                  {exp.description}
                </p>

                {exp.images && exp.images.length > 0 && (
                  <div className="mt-8 flex flex-col md:flex-row gap-4">
                    {exp.images.map((img, i) => (
                      <div key={i} className="relative w-full md:w-1/2 aspect-video rounded-[16px] overflow-hidden border-[4px] border-[#E6E3EE] shadow-[0_4px_12px_rgba(125,120,198,0.08)] group-hover:shadow-[0_8px_24px_rgba(125,120,198,0.15)] transition-all duration-300">
                        <img src={img} alt={`${exp.company} highlight`} className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105" />
                      </div>
                    ))}
                  </div>
                )}
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
