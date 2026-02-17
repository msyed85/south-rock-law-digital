import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const FloatingCallButton = () => {
  return (
    <motion.a
      href="tel:604-449-7705"
      aria-label="Call South Rock Law"
      className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-lg flex items-center justify-center hover:bg-accent/90 transition-colors"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileTap={{ scale: 0.9 }}
    >
      <Phone size={24} />
    </motion.a>
  );
};

export default FloatingCallButton;
