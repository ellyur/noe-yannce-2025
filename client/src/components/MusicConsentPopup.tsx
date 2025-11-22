import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import backgroundImage from '@assets/image_1763826959851.png';

interface MusicConsentPopupProps {
  onConsent: (consent: boolean) => void;
  isVisible: boolean;
}

const MusicConsentPopup = ({ onConsent, isVisible }: MusicConsentPopupProps) => {
  const handleOpenInvitation = () => {
    onConsent(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center gap-8 px-4"
          >
            <div className="text-center space-y-6 max-w-2xl">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-white text-xl md:text-2xl lg:text-3xl font-serif italic leading-relaxed"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
              >
                "When the time is right, I, the Lord, will make it happen."
                <br />
                <span className="text-lg md:text-xl lg:text-2xl">— Isaiah 60:22</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex justify-center"
              >
                <img
                  src="https://res.cloudinary.com/dnpptxp0y/image/upload/v1763827241/image-removebg-preview_1_wdvtje.png"
                  alt="Wedding Logo"
                  className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="text-white text-base md:text-lg lg:text-xl tracking-widest uppercase"
                style={{ 
                  fontVariant: 'small-caps',
                  textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                  letterSpacing: '0.3em'
                }}
              >
                noe & yannce
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <Button
                onClick={handleOpenInvitation}
                className="bg-white text-gray-800 hover:bg-white/90 font-semibold py-6 px-12 rounded-md text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                data-testid="button-open-invitation"
              >
                Open Invitation
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MusicConsentPopup;
