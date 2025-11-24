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
      <div className="relative z-10 flex flex-col items-center text-center gap-6 sm:gap-8 md:gap-12 w-full max-w-4xl">
        {/* "We are Getting Married" text */}
        <div 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight"
          data-testid="text-getting-married"
          style={{ 
            fontFamily: 'Pencerio',
            fontStyle: 'normal',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            lineHeight: '1.3'
          }}
        >
          We are<br />Getting Married
        </div>

        {/* Date */}
        <div 
          className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] text-white font-bold"
          data-testid="text-main-date"
          style={{ 
            fontFamily: 'Pencerio', 
            fontWeight: 700,
            letterSpacing: '0.05em',
            lineHeight: '1',
            textShadow: '0 4px 20px rgba(0,0,0,0.6)'
          }}
        >12.18.25</div>

        {/* Address */}
        <div className="space-y-1 sm:space-y-2">
          <p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white italic px-2"
            data-testid="text-venue"
            style={{ 
              fontFamily: 'Pencerio', 
              fontWeight: 400,
              lineHeight: '1.4',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}
          >
            Mallorca Villas
          </p>
          <p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white italic"
            data-testid="text-location"
            style={{ 
              fontFamily: 'Pencerio', 
              fontWeight: 400,
              lineHeight: '1.4',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}
          >
            Clubhouse & Multi-Purpose Function Hall
          </p>
          <p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white italic"
            data-testid="text-location-city"
            style={{ 
              fontFamily: 'Pencerio', 
              fontWeight: 400,
              lineHeight: '1.4',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}
          >
            Silang Cavite
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
