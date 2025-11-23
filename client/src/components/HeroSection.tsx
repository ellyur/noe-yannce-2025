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
      
      {/* Top Left Image */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 z-10">
        <img 
          src="https://res.cloudinary.com/dh7s1ttxf/image/upload/v1763874468/image-removebg-preview_3_u5p9nc.png"
          alt="Wedding Decoration"
          className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain"
          data-testid="hero-decoration-image"
        />
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center px-6 gap-12">
        {/* Date - Extra Big and Bold */}
        <h1 
          className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[16rem] text-white tracking-tight font-bold uppercase leading-none"
          data-testid="text-main-date"
          style={{ fontFamily: 'Boska, serif', fontWeight: 700 }}
        >12.18.25</h1>

        {/* Address - Much Bigger */}
        <div className="space-y-4">
          <p 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-wide"
            data-testid="text-venue"
            style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 300 }}
          >
            Clubhouse & Multi-Purpose Function Hall
          </p>
          <p 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-wide"
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
