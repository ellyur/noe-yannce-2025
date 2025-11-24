import { useEffect, useRef, useState } from 'react';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ImageLoop from '@/components/ImageLoop';
import CountdownSection from '@/components/CountdownSection';
import StorySection from '@/components/StorySection';
import ScrollTriggeredTimeline from '@/components/ScrollTriggeredTimeline';
import VenueSection from '@/components/VenueSection';
import DressCodeSection from '@/components/DressCodeSection';
import EntourageSection from '@/components/EntourageSection';
import RSVPSection from '@/components/RSVPSection';
import MemorableMomentsSection from '@/components/MemorableMomentsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import CoverSection from '@/components/CoverSection';
import InvitationRevealSection from '@/components/InvitationRevealSection';
import MusicConsentPopup from '@/components/MusicConsentPopup';
import { AnimationContext } from '@/contexts/AnimationContext';
import CoverImage from '@/components/CoverImage';
import PolaroidSection from '@/components/PolaroidSection';
import SimpleGiftSection from '@/components/SimpleGiftSection';

// Cover media
const cover1Image = 'https://res.cloudinary.com/dsitzod3c/image/upload/v1763566013/cover1_emzxqg.jpg';
const cover2Image = 'https://res.cloudinary.com/dsitzod3c/image/upload/v1763566012/gift_guide_background_sbfczb.jpg';
const cover3Image = 'https://res.cloudinary.com/dsitzod3c/image/upload/v1763566011/cover3_ouglyk.jpg';
const cover4Image = 'https://res.cloudinary.com/dsitzod3c/image/upload/v1763566011/_JC17810_j5k3om.jpg';
const cover5Image = 'https://res.cloudinary.com/dsitzod3c/image/upload/v1763566012/_RON1982_zl4m5i.jpg';

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);
  const [showMusicConsent, setShowMusicConsent] = useState(true);

  const handleMusicConsent = async (consent: boolean) => {
    setShowMusicConsent(false);
    setAnimationsEnabled(true);

    if (consent && audioRef.current) {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.error('Background music playback failed:', error);
      }
    }
  };

  return (
    <AnimationContext.Provider value={{ animationsEnabled }}>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        style={{ display: 'none' }}
        data-testid="background-audio"
        src="https://res.cloudinary.com/dcay7rt5q/video/upload/v1763714874/Musika_by_Dionela_piano_cover_sheet_music_lyrics_ylhcr5.mp3"
      />

      <MusicConsentPopup
        onConsent={handleMusicConsent}
        isVisible={showMusicConsent}
      />

      <div className="min-h-screen relative">
        <Navigation />

        <main className="relative z-10 space-y-0">
          <HeroSection audioRef={audioRef} />
          <InvitationRevealSection />
          <CoverImage
            src="https://res.cloudinary.com/dldegdz30/image/upload/v1763612133/PHOTO_OPS_3_eeseuv.png"
            alt="Noe & Yannce"
            delay={3.5}
            quote="Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres."
            quoteAttribution="1 Corinthians 13:4-8"
          />
          <PolaroidSection />
          <CountdownSection />
          <ImageLoop />
          <StorySection />
          <EntourageSection />
          <DressCodeSection />
          <VenueSection />
          <ScrollTriggeredTimeline />
          <RSVPSection />
          <SimpleGiftSection />
          <CoverImage
            src="https://res.cloudinary.com/dcay7rt5q/image/upload/v1763648825/6623a334-1dbd-4c10-af62-d7718c9efad0_tc0zqg.jpg"
            alt="FAQ Cover"
            delay={12.5}
          />
          <FAQSection />
          <MemorableMomentsSection />
          <Footer />
        </main>
      </div>
    </AnimationContext.Provider>
  );
};

export default Index;