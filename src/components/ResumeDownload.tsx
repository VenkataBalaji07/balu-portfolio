import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const ResumeDownload = () => {
  const handleDownload = () => {
    window.open("https://drive.google.com/file/d/1OqDC4Skyt03NCrKlHsCQ0mrbgsqyUkzh/view?usp=sharing", "_blank");
  };

  return (
    <div className="flex justify-center mt-16">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          onClick={handleDownload}
          className="btn-premium h-14 px-8 rounded-[16px] text-base"
        >
          <Download className="mr-3 h-5 w-5" />
          Download Latest Resume
        </Button>
      </motion.div>
    </div>
  );
};

export default ResumeDownload;
