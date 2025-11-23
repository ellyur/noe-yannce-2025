
import { motion } from 'framer-motion';

interface CoverImageProps {
  src: string;
  alt: string;
  delay?: number;
  quote?: string;
  quoteAttribution?: string;
}

const CoverImage = ({ src, alt, delay = 0, quote, quoteAttribution }: CoverImageProps) => {
  return (
    <motion.section 
      className="relative w-full min-h-[60vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
      {quote && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: delay + 0.5 }}
            className="text-center max-w-4xl text-[13px]"
          >
            <p 
              className="text-white text-lg md:text-xl lg:text-2xl font-serif italic leading-relaxed mb-4"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
            >
              "{quote}"
            </p>
            {quoteAttribution && (
              <p 
                className="text-white text-base md:text-lg lg:text-xl font-serif"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
              >
                — {quoteAttribution}
              </p>
            )}
          </motion.div>
        </div>
      )}
    </motion.section>
  );
};

export default CoverImage;
