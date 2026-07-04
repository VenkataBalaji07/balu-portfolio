
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Download } from "lucide-react";

interface DownloadReportProps {
  onDownload: () => void;
}

const DownloadReport = ({ onDownload }: DownloadReportProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="text-center"
    >
      <Button
        onClick={onDownload}
        className="bg-gradient-to-r from-primary to-cyan-400 hover:from-cyan-400 hover:to-primary text-black font-semibold px-8 py-3 button-glow"
      >
        <Download className="w-5 h-5 mr-2" />
        Download Full Stack Analysis Report
      </Button>
    </motion.div>
  );
};

export default DownloadReport;
