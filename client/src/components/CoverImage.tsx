
import { motion } from 'framer-motion';

interface CoverImageProps {
  src: string;
  alt: string;
  delay?: number;
}

const CoverImage = ({ src, alt, delay = 0 }: CoverImageProps) => {
  return (
    <motion.section 
      className="relative w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover"
      />
    </motion.section>
  );
};

export default CoverImage;
