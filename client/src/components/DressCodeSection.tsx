import { motion } from 'framer-motion';
import { optimizeCloudinaryUrl } from '@/lib/cloudinaryOptimize';
import principalSponsorsImage from '@assets/prinn_1762593761189.png';
import flower9 from '@assets/flower9_1759741371017.png';
import flower3 from '@assets/flower3_1759741371015.png';
import guestsImage from '@assets/guesttt_1762593761188.png';

const DressCodeSection = () => {
  const dressCodeColors = [
    { name: 'Black', color: '#000000', hex: '#000000' },
    { name: 'Charcoal', color: '#525252', hex: '#525252' },
    { name: 'Steel Blue', color: '#6D8499', hex: '#6D8499' },
    { name: 'Powder Blue', color: '#A3C1D4', hex: '#A3C1D4' },
    { name: 'White', color: '#FFFFFF', hex: '#FFFFFF' }
  ];

  return (
    <motion.section 
      id="dresscode" 
      className="section-pastel-blue bg-white relative overflow-hidden mt-[10px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 7.5 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-primary/30 rounded-full"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 7.8 }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-8 h-8 border-2 border-primary/30 rounded-full"></div>
          <div className="absolute top-4 right-1/4 w-4 h-4 bg-primary/20 rounded-full"></div>
          <div className="absolute bottom-0 left-1/3 w-6 h-6 border border-primary/40 rounded-full"></div>
          <div className="absolute bottom-2 right-1/3 w-3 h-3 bg-primary/30 rounded-full"></div>

          <h2 className="font-display font-light italic text-gold mb-8 text-[48px]" data-testid="text-dresscode-title">
            Attire Guide
          </h2>
        </motion.div>

        {/* Modern Dress Code Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Principal Sponsors */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-white shadow-teal border border-primary/20 rounded-xl p-8 hover-elegant transition-all duration-500 h-full relative">
              {/* Flower Decoration */}
              <img src={flower9} alt="" className="absolute top-2 right-2 w-16 md:w-20 opacity-80" />
              
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 8.3 }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl"></div>
                    <h3 className="text-xl font-display font-medium text-foreground mb-4 relative z-10">
                      Principal Sponsors
                    </h3>
                    <div className="text-center px-4">
                      <p className="text-sm text-foreground">
                        Formal Suit or Barong
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.img 
                  src={principalSponsorsImage}
                  alt="Principal Sponsors attire guide"
                  className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 8.5 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Guests */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-white shadow-teal border border-primary/20 rounded-xl p-8 hover-elegant transition-all duration-500 h-full relative">
              {/* Flower Decoration */}
              <img src={flower3} alt="" className="absolute top-2 left-2 w-20 md:w-24 opacity-80 transform -rotate-12" />
              
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 8.6 }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent rounded-2xl"></div>
                    <h3 className="text-xl font-display font-medium text-foreground mb-4 relative z-10">
                      Guests
                    </h3>
                    <div className="text-center px-4 mb-3">
                      <p className="text-sm text-foreground">
                        Semi-Formal
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.img 
                  src={guestsImage}
                  alt="Guests attire guide"
                  className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 8.8 }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Important Reminders */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.7 }}
        >
          <div className="bg-white shadow-teal border border-primary/20 rounded-xl p-8">
            <h3 className="text-xl font-body font-medium text-foreground mb-4 text-center">
              Important Reminders
            </h3>
            <p className="text-sm text-foreground text-center leading-relaxed">
              In keeping with the formality of the event, we kindly ask that guests refrain from wearing jeans, denim, slippers or rubber shoes.
            </p>
          </div>
        </motion.div>

        {/* Guests Color Palette */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.1 }}
        >
          <div className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500">
            <h3 className="text-xl font-body font-medium text-foreground mb-6 text-center">
              Color Palette
            </h3>
            <p className="text-sm text-foreground/80 text-center mb-6">
              Suggested shades for all guests to complement our wedding theme.
            </p>
            <div className="grid grid-cols-5 gap-3 sm:gap-4 max-w-3xl mx-auto">
              {dressCodeColors.map((colorItem, index) => (
                <div key={index} className="text-center group">
                  <div 
                    className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-xl shadow-soft group-hover:scale-105 transition-transform duration-300"
                    style={{ 
                      backgroundColor: colorItem.color,
                      border: colorItem.color === '#FFFFFF' ? '2px solid #E5E7EB' : '2px solid transparent'
                    }}
                  ></div>
                  <p className="text-xs text-foreground mt-2">{colorItem.name}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        
      </div>
    </motion.section>
  );
};

export default DressCodeSection;