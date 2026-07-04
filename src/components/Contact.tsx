import { motion } from "framer-motion";
import { FileText, Phone, ArrowUp } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

const GithubIcon = ({ className }: { className?: string }) => <img src="/github.png" alt="GitHub" className={`${className} object-contain group-hover:brightness-0 group-hover:invert transition-all duration-500`} />;
const LinkedinIcon = ({ className }: { className?: string }) => <img src="/linkedin.png" alt="LinkedIn" className={`${className} object-contain group-hover:brightness-0 group-hover:invert transition-all duration-500`} />;
const MailIcon = ({ className }: { className?: string }) => <img src="/mail.png" alt="Mail" className={`${className} object-contain group-hover:brightness-0 group-hover:invert transition-all duration-500`} />;

const Contact = () => {
  const contactLinks = [
    {
      icon: MailIcon,
      label: "Email",
      value: "venkatabalaji00007@gmail.com",
      href: "mailto:venkatabalaji00007@gmail.com",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "linkedin.com/in/venkata-balaji-boppudi-632b5b248",
      href: "https://www.linkedin.com/in/venkata-balaji-boppudi-632b5b248/",
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: "github.com/VenkataBalaji07",
      href: "https://github.com/VenkataBalaji07",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6303612803",
      href: "tel:+916303612803",
    },
    {
      icon: FileText,
      label: "Resume",
      value: "Download Latest Resume",
      href: "https://drive.google.com/file/d/1OqDC4Skyt03NCrKlHsCQ0mrbgsqyUkzh/view?usp=sharing",
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-transparent" id="contact">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-contain opacity-100 filter brightness-100 contrast-95"
          src="/background1.mp4"
        />
        {/* Soft dark filter overlay to see text clearly */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Decorative blurred blob */}
      <div className="absolute top-0 left-[20%] w-[600px] h-[600px] bg-[#7877C6]/15 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Contact Section */}
      <section className="py-24 relative z-10 border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-6">
              Get in Touch
            </h2>
            <div className="w-12 h-[3px] bg-white mx-auto rounded-full mb-8"></div>
            <p className="text-white/80 mb-16 text-[17px] font-medium max-w-2xl mx-auto">
              I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            {/* Contact Form Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <GlowCard 
                customSize={true}
                glowColor="purple"
                className="max-w-3xl mx-auto bg-[#111827]/85 backdrop-blur-md p-8 sm:p-10 rounded-[24px] border border-white/10 shadow-2xl text-left relative overflow-hidden"
              >
                <h3 className="text-2xl font-heading font-bold text-white tracking-tight mb-8">Send me a message</h3>
                <form 
                  className="flex flex-col gap-6" 
                  onSubmit={(e) => { 
                    e.preventDefault(); 
                    const formData = new FormData(e.currentTarget);
                    const name = formData.get('name');
                    const email = formData.get('email');
                    const phone = formData.get('phone');
                    const purpose = formData.get('purpose');
                    const message = formData.get('message');
                    const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0A%0AMessage:%0A${message}`;
                    window.location.href = `mailto:venkatabalaji00007@gmail.com?subject=Portfolio Inquiry: ${purpose}&body=${body}`;
                  }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       <div>
                         <label className="block text-[13px] font-bold text-white/80 uppercase tracking-wider mb-2">Name</label>
                         <input type="text" name="name" required className="w-full bg-white/5 border border-white/10 rounded-[12px] px-4 py-3.5 focus:outline-none focus:border-[#8B5CF6] transition-colors font-medium text-white placeholder:text-white/30" placeholder="John Doe" />
                       </div>
                       <div>
                         <label className="block text-[13px] font-bold text-white/80 uppercase tracking-wider mb-2">Email</label>
                         <input type="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-[12px] px-4 py-3.5 focus:outline-none focus:border-[#8B5CF6] transition-colors font-medium text-white placeholder:text-white/30" placeholder="john@example.com" />
                       </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       <div>
                         <label className="block text-[13px] font-bold text-white/80 uppercase tracking-wider mb-2">Contact Number</label>
                         <input type="tel" name="phone" required className="w-full bg-white/5 border border-white/10 rounded-[12px] px-4 py-3.5 focus:outline-none focus:border-[#8B5CF6] transition-colors font-medium text-white placeholder:text-white/30" placeholder="+91 12345 67890" />
                       </div>
                       <div>
                         <label className="block text-[13px] font-bold text-white/80 uppercase tracking-wider mb-2">Purpose</label>
                         <div className="relative">
                           <select name="purpose" required className="w-full bg-white/5 border border-white/10 rounded-[12px] px-4 py-3.5 focus:outline-none focus:border-[#8B5CF6] transition-colors font-medium text-white appearance-none cursor-pointer" defaultValue="">
                              <option value="" disabled className="bg-[#111827] text-white/55">Select a purpose</option>
                              <option value="job" className="bg-[#111827] text-white">Job Opportunity</option>
                              <option value="freelance" className="bg-[#111827] text-white">Freelance Project</option>
                              <option value="collaboration" className="bg-[#111827] text-white">Collaboration</option>
                              <option value="other" className="bg-[#111827] text-white">Other Inquiry</option>
                           </select>
                           <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-70"><polyline points="6 9 12 15 18 9"></polyline></svg>
                           </div>
                         </div>
                       </div>
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-white/80 uppercase tracking-wider mb-2">Message (Optional)</label>
                      <textarea name="message" className="w-full bg-white/5 border border-white/10 rounded-[12px] px-4 py-3.5 focus:outline-none focus:border-[#8B5CF6] transition-colors font-medium text-white placeholder:text-white/30 min-h-[120px] resize-y" placeholder="Tell me more about your inquiry..."></textarea>
                    </div>
                    <button type="submit" className="btn-premium w-full h-14 rounded-[12px] text-[15px] font-bold mt-2 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(139,92,246,0.2)] transition-all duration-300 border-[#8B5CF6]">
                      Send Message
                    </button>
                </form>

                {/* Small Contact Links Boxes */}
                <div className="flex flex-wrap justify-center gap-4 mt-10 pt-8 border-t border-white/10">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-6 py-3.5 bg-white/5 hover:bg-[#7C3AED] text-white hover:text-white rounded-full border border-white/10 hover:border-[#7C3AED] transition-all duration-300 group shadow-sm hover:shadow-md hover:-translate-y-1"
                    >
                      <link.icon className="w-5 h-5 transition-all duration-300 group-hover:text-white group-hover:filter group-hover:brightness-0 group-hover:invert" />
                      <span className="text-[14px] font-bold tracking-wide transition-colors duration-300">
                        {link.label}
                      </span>
                    </a>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Minimal Premium Footer */}
      <section className="py-8 bg-transparent relative z-10">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white/60 text-[14px] font-medium tracking-tight">
              © {currentYear} Venkata Balaji Boppudi. All rights reserved.
            </div>

            <div className="text-[#D8B4FE] text-[13px] font-bold tracking-widest uppercase">
              Built with React + TypeScript
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-[14px] font-bold text-white/70 hover:text-white transition-colors"
            >
              Back to Top
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-sm group-hover:border-[#8B5CF6] group-hover:shadow-md transition-all duration-300 text-white">
                <ArrowUp className="w-4.5 h-4.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Contact;
