
import { motion } from 'framer-motion';

const storyCoupleImage = 'https://res.cloudinary.com/dcay7rt5q/image/upload/v1763653814/a5905d1a-83e6-483e-9232-5923826c1995_ivbmr0.png';

const StorySection = () => {
  return (
    <motion.section 
      id="story" 
      className="relative w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3.5 }}
      data-testid="section-story"
    >
      <img
        src={storyCoupleImage}
        alt="Our Story"
        className="w-full h-auto object-cover"
        data-testid="img-story-background"
      />
    </motion.section>
  );
};

export default StorySection;
