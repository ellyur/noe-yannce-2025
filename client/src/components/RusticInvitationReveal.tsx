import { Heart } from 'lucide-react';
import flower1Image from '@assets/flower1_1759854441524.png';
import flowerImage from '@assets/flower_1759854441531.png';

interface RusticInvitationRevealProps {
  animationsEnabled: boolean;
}

const RusticInvitationReveal = ({ animationsEnabled }: RusticInvitationRevealProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-20 px-4" style={{ backgroundColor: 'transparent' }}>
      {/* Modern Minimalist Invitation */}
      <div
        className="relative z-10 max-w-2xl w-full mb-20"
        data-testid="invitation-paper"
      >
        {/* Layered background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-lg transform rotate-1" />
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-lg transform -rotate-1" />
        
        {/* Main Container */}
        <div 
          className="relative bg-white p-12 md:p-16 shadow-teal rounded-sm overflow-hidden border border-primary/20"
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/30" />
          <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-primary/30" />
          <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-primary/30" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary/30" />
          
          {/* Decorative Flowers on Edges */}
          <img 
            src="https://res.cloudinary.com/dldegdz30/image/upload/v1763614930/6d5dbc7b-bfc1-4bfc-81d4-581d000f204f-removebg-preview_tatgdf.png"
            alt="" 
            className="absolute top-4 left-4 w-12 h-12 md:w-16 md:h-16 object-contain opacity-60 animate-float pointer-events-none"
            data-testid="decoration-flower-invitation-topleft"
          />
          <img 
            src="https://res.cloudinary.com/dldegdz30/image/upload/v1763614930/image-removebg-preview_1_scnyns.png"
            alt="" 
            className="absolute top-4 right-4 w-12 h-12 md:w-16 md:h-16 object-contain opacity-60 animate-float-delayed pointer-events-none"
            data-testid="decoration-flower-invitation-topright"
          />
          <img 
            src="https://res.cloudinary.com/dldegdz30/image/upload/v1763614930/image-removebg-preview_1_scnyns.png"
            alt="" 
            className="absolute bottom-4 left-4 w-12 h-12 md:w-16 md:h-16 object-contain opacity-60 animate-float-delayed pointer-events-none transform rotate-45"
            data-testid="decoration-flower-invitation-bottomleft"
          />
          <img 
            src="https://res.cloudinary.com/dldegdz30/image/upload/v1763614930/6d5dbc7b-bfc1-4bfc-81d4-581d000f204f-removebg-preview_tatgdf.png"
            alt="" 
            className="absolute bottom-4 right-4 w-12 h-12 md:w-16 md:h-16 object-contain opacity-60 animate-float pointer-events-none transform -rotate-12"
            data-testid="decoration-flower-invitation-bottomright"
          />

          {/* Content */}
          <div className="text-center relative z-10 space-y-8">
            {/* Heart Icon with modern styling */}
            <div className="flex justify-center">
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 animate-pulse" />
                <div className="relative w-full h-full rounded-full bg-white border-2 border-primary/20 flex items-center justify-center overflow-hidden p-2">
                  <img 
                    src="https://res.cloudinary.com/dldegdz30/image/upload/v1763614930/c2b6e25c-4190-4419-baef-1fae4b6fff78-removebg-preview_wpq7bv.png"
                    alt="Heart"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Modern divider above title */}
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary/50" />
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary/50" />
            </div>

            <span 
              className="text-5xl md:text-6xl text-primary relative block"
              style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}
            >
              You're Invited
              {/* Subtle underline accent */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </span>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"/>

            <p 
              className="text-lg md:text-xl text-foreground leading-relaxed max-w-xl mx-auto font-light"
            >
              Come witness the moment we tie the knot and start our greatest adventure together
            </p>

            {/* Stylized divider */}
            <div className="flex items-center justify-center gap-3 py-2">
              <div className="w-12 h-px bg-primary/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              <div className="w-12 h-px bg-primary/30" />
            </div>

            <div className="text-base md:text-lg text-muted-foreground italic space-y-2">
              <p>with love, laughter,</p>
              <p>and a lifetime of memories</p>
            </div>

            {/* Modern Hearts decoration */}
            <div className="flex items-center justify-center gap-3 pt-6">
              <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center overflow-hidden p-1">
                <img 
                  src="https://res.cloudinary.com/dldegdz30/image/upload/v1763614930/c2b6e25c-4190-4419-baef-1fae4b6fff78-removebg-preview_wpq7bv.png"
                  alt="Heart"
                  className="w-full h-full object-contain animate-pulse"
                />
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden p-1">
                <img 
                  src="https://res.cloudinary.com/dldegdz30/image/upload/v1763614930/c2b6e25c-4190-4419-baef-1fae4b6fff78-removebg-preview_wpq7bv.png"
                  alt="Heart"
                  className="w-full h-full object-contain animate-pulse"
                  style={{ animationDelay: '0.5s' }}
                />
              </div>
              <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center overflow-hidden p-1">
                <img 
                  src="https://res.cloudinary.com/dldegdz30/image/upload/v1763614930/c2b6e25c-4190-4419-baef-1fae4b6fff78-removebg-preview_wpq7bv.png"
                  alt="Heart"
                  className="w-full h-full object-contain animate-pulse"
                  style={{ animationDelay: '1s' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RusticInvitationReveal;
