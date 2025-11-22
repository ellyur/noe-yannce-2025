// Polaroid images
const belovedImage = 'https://res.cloudinary.com/dldegdz30/image/upload/v1763612134/PHOTO_OPS_2_x3y7bw.png';
const soulmatesImage = 'https://res.cloudinary.com/dldegdz30/image/upload/v1763612132/TANAY_tdlw14.png';
const foreverImage = 'https://res.cloudinary.com/dcay7rt5q/image/upload/v1763648835/a21b69d5-4258-4ac3-896d-c0e4d9c4f362_dlotq3.jpg';

const PolaroidSection = () => {
  const polaroids = [
    { src: soulmatesImage, alt: 'soulmates' },
    { src: foreverImage, alt: 'forever' },
    { src: belovedImage, alt: 'beloved' }
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-8 max-w-6xl mx-auto">
        {polaroids.map((polaroid, index) => (
          <div
            key={index}
            className="relative group"
            data-testid={`polaroid-${index}`}
          >
            {/* Modern Minimalist Frame with Accent */}
            <div className="relative">
              {/* Decorative background layer */}
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-lg blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Main card */}
              <div 
                className="relative bg-white p-6 shadow-teal hover:shadow-2xl transition-all duration-300 border-t-2 border-primary rounded-sm"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-primary/30" />
                
                <div className="relative overflow-hidden bg-gray-50 rounded-sm" style={{ width: '240px', height: '240px' }}>
                  <img
                    src={polaroid.src}
                    alt={polaroid.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                </div>
                
                {/* Modern caption with accent */}
                <div className="mt-4 text-center relative">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  <p className="text-foreground text-sm font-medium tracking-wider uppercase">
                    {polaroid.alt}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PolaroidSection;
