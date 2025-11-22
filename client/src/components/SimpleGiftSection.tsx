
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const SimpleGiftSection = () => {
  return (
    <motion.section 
      className="section-hard-blue bg-white py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/30 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.6 }}
        >
          <h2 className="text-5xl font-display font-light italic text-gold-bright mb-8">
            Gift Guide
          </h2>
        </motion.div>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
        >
          <div className="bg-card/30 border border-border rounded-xl p-12 shadow-soft hover-elegant">
            {/* Icon */}
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="w-10 h-10 text-primary" />
            </div>

            {/* Text */}
            <div className="space-y-6">
              <p className="text-xl font-body text-foreground leading-relaxed whitespace-pre-line">
                As we join our lives and dreams,
                your love and support mean the world to us.
                Should you wish to give a gift,
                a monetary blessing would help us build our happily ever after.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="mt-8 flex justify-center items-center space-x-4">
              <div className="w-12 h-px bg-primary/30"></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-float"></div>
              <div className="w-12 h-px bg-primary/30"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SimpleGiftSection;
