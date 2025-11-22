import { useAnimationContext } from '@/contexts/AnimationContext';

interface HeroSectionProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const HeroSection = ({ audioRef }: HeroSectionProps) => {
  const { animationsEnabled } = useAnimationContext();

  return (
    <section 
      className="hero-section bg-white relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center text-center px-6 gap-8">
        {/* Date - Big and Bold */}
        <h1 
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground tracking-tight font-bold uppercase"
          data-testid="text-main-date"
          style={{ fontFamily: 'Boska, serif', fontWeight: 700 }}
        >12.18.25</h1>

        {/* Address */}
        <div className="space-y-2">
          <p 
            className="text-2xl sm:text-3xl md:text-4xl text-foreground font-light tracking-wide"
            data-testid="text-venue"
            style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 300 }}
          >
            Clubhouse & Multi-Purpose Function Hall
          </p>
          <p 
            className="text-xl sm:text-2xl md:text-3xl text-foreground/80 font-light tracking-wide"
            data-testid="text-location"
            style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 300 }}
          >
            Maguyam, Silang Cavite
          </p>
        </div>
      </div>
      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <span className="text-xs sm:text-sm text-foreground/60">Scroll down</span>
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-foreground/60 animate-bounce" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
          </svg>
        </div>
      </div>
      <style>{`
        .hero-section {
          min-height: 100vh !important;
        }
        
        @media (max-width: 767px) {
          .hero-section h1 {
            font-size: 3rem !important;
            line-height: 1.1 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
