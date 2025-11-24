import { useAnimationContext } from '@/contexts/AnimationContext';

interface HeroSectionProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const heroBackgroundImage = 'https://res.cloudinary.com/dnpptxp0y/image/upload/v1763830038/b619ba50-28ae-428a-9936-55933ccfafcd_l11rrv.png';

const HeroSection = ({ audioRef }: HeroSectionProps) => {
  const { animationsEnabled } = useAnimationContext();

  return (
    <section 
      className="hero-section relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6"
      style={{
        backgroundImage: `url(${heroBackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      {/* Snowflakes */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="snowflake absolute text-white opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 15}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 5}s`
            }}
          >
            ❄
          </div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center gap-4 sm:gap-6 md:gap-8 w-full max-w-4xl">
        {/* "We are Getting Married" text */}
        <div 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight"
          data-testid="text-getting-married"
          style={{ 
            fontFamily: 'Pencerio',
            fontStyle: 'normal',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            lineHeight: '1.2'
          }}
        >
          We are<br />Getting Married
        </div>

        {/* Date */}
        <div 
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-white tracking-wider"
          data-testid="text-main-date"
          style={{ 
            fontFamily: 'Rosaline', 
            fontWeight: 400,
            letterSpacing: '0.2em',
            lineHeight: '1.1'
          }}
        >12.18.25</div>

        {/* Address */}
        <div className="space-y-1 sm:space-y-2 mt-4 sm:mt-6 md:mt-8">
          <p 
            className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white font-light tracking-wide px-2"
            data-testid="text-venue"
            style={{ 
              fontFamily: 'Satoshi, sans-serif', 
              fontWeight: 300,
              lineHeight: '1.3'
            }}
          >
            Clubhouse & Multi-Purpose Function Hall
          </p>
          <p 
            className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white font-light tracking-wide"
            data-testid="text-location"
            style={{ 
              fontFamily: 'Satoshi, sans-serif', 
              fontWeight: 300,
              lineHeight: '1.3'
            }}
          >
            Maguyam, Silang Cavite
          </p>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <span className="text-xs sm:text-sm text-white/60">Scroll down</span>
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white/60 animate-bounce" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
          </svg>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh !important;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        .snowflake {
          animation: float infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
