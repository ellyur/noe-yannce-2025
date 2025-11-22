import { motion } from 'framer-motion';

const EntourageSection = () => {
  const entourageData = {
    parents: [
      { label: "Groom's Parents", names: ["Mrs. Novelita Velasco", "Mr. Herman Velasco (Deceased)"] },
      { label: "Bride's Parents", names: ["Mrs. Amelita Rima", "Ptr. Eugene Teves (Deceased)"] }
    ],
    principalSponsors: {
      title: "Principal Sponsors",
      soloMen: [
        "Mr. Ricardo Jimenez",
        "PLTCOL. Romeo Llauderes",
        "PLTCOL. Jandale Sulit",
        "Hon. Percival Cabuhat",
        "Hon. Jowey Suazrez",
        "Hon. Gerry Gozar",
        "Mr. Raul Blas"
      ],
      soloWomen: [
        "Mrs. Elena Jimenez",
        "Mrs. Jocelyn Llaudres",
        "Mrs. Julie Tolentino",
        "Hon. Maricel Torres-Echevarria",
        "Mrs. Digna Ibarra",
        "Ma. Theresa Adlawan",
        "Hon. Emelita Blas"
      ]
    },
    secondarySponsors: {
      title: "Secondary Sponsors",
      roles: [
        { role: "To Light our Path", names: ["Mr. Allen Teves", "Ms. Janine Lim"] },
        { role: "To Clothe Us as One", names: ["Mr. Rungeons Baldove", "Mrs. Eunice Baldove"] },
        { role: "To Bind Us Together", names: ["Mr. Eugene Teves", "Ms. Janzel Catungal"] }
      ]
    },
    additionalRoles: [
      { role: "Bible Bearer", name: "Jacob Blair Teves" },
      { role: "Ring Bearer", name: "Coen Mckale Baldove" },
      { role: "Coin Bearer", name: "Elijah Rain Teves" }
    ],
    bestMan: { name: "Marc Jetro Acebedo", role: "Best Man" },
    maidOfHonor: { name: "Julia Roberta Rampola", role: "Maid of Honor" },
    groomsmen: [
      "Jasper Jade Blas",
      "Derek Passion",
      "Herman Velasco III",
      "Carlo Velasco"
    ],
    bridesmaids: [
      "Kysie Caroro",
      "Whendy Barcenas",
      "Reynalyn Rodriguez",
      "Mikaella Gatchalian"
    ],
    flowerGirls: [
      "NoeAnn Velasco",
      "Shalanie Velasco",
      "Maureen Velasco",
      "Jenica Velasco",
      "Sharmaine Velasco",
      "Ahryessa Adlawan",
      "Eun Jandy Barcenas"
    ]
  };

  return (
    <motion.section 
      id="entourage" 
      className="entourage-section section-hard-blue bg-white relative overflow-hidden py-8 md:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-primary/30 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-primary/30 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-gold-bright mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
        >
          Entourage
        </motion.h2>

        {/* Parents */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            {entourageData.parents.map((parent, index) => (
              <div key={index} className="text-center" data-testid={`parents-section-${index}`}>
                <h3 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
                  {parent.label}
                </h3>
                {parent.names.map((name, nameIndex) => (
                  <p key={nameIndex} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`parent-name-${index}-${nameIndex}`}>
                    {name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Principal Sponsors */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.0 }}
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-4 md:mb-6 text-primary" data-testid="principal-sponsors-title">
            {entourageData.principalSponsors.title}
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 gap-4 md:gap-8 mb-6">
              {/* Men Column */}
              <div className="space-y-2">
                {entourageData.principalSponsors.soloMen.map((name, index) => (
                  <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground text-right whitespace-nowrap" data-testid={`principal-sponsor-man-${index}`}>
                    {name}
                  </p>
                ))}
              </div>
              
              {/* Women Column */}
              <div className="space-y-2">
                {entourageData.principalSponsors.soloWomen.map((name, index) => (
                  <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground text-left whitespace-nowrap" data-testid={`principal-sponsor-woman-${index}`}>
                    {name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary Sponsors */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.2 }}
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-4 md:mb-6 text-primary" data-testid="secondary-sponsors-title">
            {entourageData.secondarySponsors.title}
          </h3>
          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {entourageData.secondarySponsors.roles.map((item, index) => (
              <div key={index} className="text-center" data-testid={`secondary-sponsor-${item.role.toLowerCase()}`}>
                <h4 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-1 md:mb-2 text-primary">
                  {item.role}
                </h4>
                {item.names.map((name, nameIndex) => (
                  <p key={nameIndex} className="text-xs md:text-base lg:text-lg font-telma text-foreground" data-testid={`${item.role.toLowerCase()}-name-${nameIndex}`}>
                    {name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Best Man and Maid of Honor */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.4 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-testid="best-man-section">
              <h3 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
                {entourageData.bestMan.role}
              </h3>
              <p className="text-xs md:text-base lg:text-lg font-telma text-foreground" data-testid="best-man-name">
                {entourageData.bestMan.name}
              </p>
            </div>
            <div className="text-center" data-testid="maid-of-honor-section">
              <h3 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
                {entourageData.maidOfHonor.role}
              </h3>
              <p className="text-xs md:text-base lg:text-lg font-telma text-foreground" data-testid="maid-of-honor-name">
                {entourageData.maidOfHonor.name}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Groomsmen & Bridesmaids */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.6 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-testid="groomsmen-section">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
                Groomsmen
              </h3>
              {entourageData.groomsmen.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1 text-right" data-testid={`groomsman-${index}`}>
                  {name}
                </p>
              ))}
            </div>
            <div className="text-center" data-testid="bridesmaids-section">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
                Bridesmaids
              </h3>
              {entourageData.bridesmaids.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1 text-left" data-testid={`bridesmaid-${index}`}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Additional Roles */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.8 }}
        >
          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {entourageData.additionalRoles.map((item, index) => (
              <div key={index} className="text-center" data-testid={`additional-role-${item.role.toLowerCase().replace(/\s+/g, '-')}`}>
                <h4 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-1 md:mb-2 text-primary">
                  {item.role}
                </h4>
                <p className="text-xs md:text-base lg:text-lg font-telma text-foreground" data-testid={`${item.role.toLowerCase().replace(/\s+/g, '-')}-name`}>
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Flower Girls */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.0 }}
        >
          <div className="text-center max-w-4xl mx-auto" data-testid="flower-girls-section">
            <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
              Flower Girls
            </h3>
            {entourageData.flowerGirls.map((name, index) => (
              <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`flower-girl-${index}`}>
                {name}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
