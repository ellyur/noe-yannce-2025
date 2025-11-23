import { useAnimationContext } from '@/contexts/AnimationContext';

interface HeroSectionProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const heroBackgroundImage = 'https://res.cloudinary.com/dnpptxp0y/image/upload/v1763830038/b619ba50-28ae-428a-9936-55933ccfafcd_l11rrv.png';

const HeroSection = ({ audioRef }: HeroSectionProps) => {
  const { animationsEnabled } = useAnimationContext();

  return (
    <section 
      className="hero-section relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
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
      
      {/* "We are Getting Married" text - centered on mobile, top left slanted on desktop */}
      <h2 
        className="absolute md:text-6xl lg:text-7xl text-white italic leading-tight z-10 getting-married-text"
        data-testid="text-getting-married"
        style={{ 
          fontFamily: 'Brush Script MT, cursive',
          fontWeight: 400,
          textShadow: '0 2px 10px rgba(0,0,0,0.5)'
        }}
      >
        We are<br />Getting Married
      </h2>

      <div className="relative z-10 flex flex-col items-center text-center px-6 gap-8">
        {/* Decorative line */}
        <div className="w-32 h-px bg-white/50 mb-4"></div>

        {/* Date */}
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-wider font-light"
          data-testid="text-main-date"
          style={{ 
            fontFamily: 'Satoshi, sans-serif', 
            fontWeight: 300,
            letterSpacing: '0.2em'
          }}
        >12|18|25</h1>

        {/* Address */}
        <div className="space-y-2 mt-8">
          <p 
            className="text-xl sm:text-2xl md:text-3xl text-white font-light tracking-wide"
            data-testid="text-venue"
            style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 300 }}
          >
            Clubhouse & Multi-Purpose Function Hall
          </p>
          <p 
            className="text-lg sm:text-xl md:text-2xl text-white font-light tracking-wide"
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
        
        /* Mobile: centered above the date */
        @media (max-width: 767px) {
          .getting-married-text {
            left: 50%;
            top: 15%;
            transform: translateX(-50%);
            text-align: center;
            font-size: 4rem;
            line-height: 1.1;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .hero-section h1 {
            font-size: 3rem !important;
            line-height: 1.1 !important;
          }
        }
        
        /* Small mobile: even larger text */
        @media (max-width: 480px) {
          .getting-married-text {
            font-size: 3.5rem;
          }
        }
        
        /* Desktop: top left with slant */
        @media (min-width: 768px) {
          .getting-married-text {
            left: 3rem;
            top: 3rem;
            transform: rotate(-8deg);
            transform-origin: top left;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
