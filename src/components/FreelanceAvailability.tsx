
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

const FreelanceAvailability = () => {
  const skills = [
    "Data Science",
    "Data Analysis", 
    "Machine Learning",
    "Generative AI"
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-[#0F172A]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Available for Freelance Work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-[#334155] mb-4"
          >
            I'm currently open to freelance projects and collaborations in the data space.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-base text-[#64748B] mb-12"
          >
            Let's build something impactful together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold text-[#0F172A] mb-6">Areas of Expertise</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  className="group"
                >
                  <GlowCard 
                    customSize={true}
                    glowColor="green"
                    className="bg-white hover:bg-[#EFF6FF] border border-gray-100 hover:border-[#2563EB]/20 rounded-xl px-5 py-3.5 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md h-full"
                  >
                    <span className="text-[#334155] font-medium text-sm text-center block group-hover:text-[#2563EB] transition-colors duration-300">
                      {skill}
                    </span>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold text-[#0F172A] mb-6">Ready to Collaborate?</h4>
            
            <motion.div
              whileHover={{ 
                scale: 1.03,
                y: -2
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                onClick={scrollToContact}
                className="bg-[#0F172A] hover:bg-[#1E293B] text-white font-medium py-3 px-8 text-base rounded-full shadow-sm hover:shadow-lg transition-all duration-300 inline-flex items-center group"
              >
                <MessageCircle className="w-5 h-5 mr-2.5 group-hover:rotate-12 transition-transform duration-300" />
                Let's Work Together
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreelanceAvailability;
