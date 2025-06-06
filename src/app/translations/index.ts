export const translations = {
  fr: {
    whyArt: "Pourquoi l'art",
    whySecondSouffle: "Pourquoi Second Souffle",
    ourServices: "Nos services",
    becomePartner: "Devenir partenaire",
    invest: "INVESTIR",
    audiovisualProduction: "Production Audiovisuelle",
    heroTitle: "Second Souffle vous ouvre les portes de la création visuelle",
    heroDescription: "Via l'expertise de notre équipe, Second Souffle vous permet d'accéder sans contraintes à un monde d'opportunités créatives et techniques.",
    startWithUs: "Démarrer avec nous",
    discover: "DÉCOUVRIR",
    aboutTitle: "À propos de Second Souffle Production",
    aboutDescription: "Plongez au cœur de notre engagement pour la singularité, la créativité et l'impact social dans l'industrie cinématographique",
    donate: "Faire un don",
    yearsExperience: "Années d'experience",
    crowdfunding: "Crowdfunding",
    movieProjects: "Projets ciné",
    partners: "Partenaires",
    process: "PROCESS",
    processTitle: "Nous nous engageons à soutenir des projets qui répondent à nos valeurs",
    equalityCinema: "Cinéma d'égalité",
    equalityCinemaDesc: "Nous célébrons et promouvons l'égalité dans l'industrie cinématographique. Notre engagement se traduit par le soutien de projets qui représentent équitablement les genres et les ethnies, créant ainsi un espace où chaque talent peut s'exprimer et partager sa voix unique.",
    esgCommitment: "Engagement environnemental ESG",
    esgCommitmentDesc: "Nous intégrons une conscience environnementale et sociale dans chaque projet que nous soutenons. Notre objectif est de favoriser des pratiques de production respectueuses de l'environnement et socialement responsables. Nous soutenons activement la transition vers un cinéma plus durable.",
    artisticFreedom: "Liberté artistique et singularité des thématiques",
    artisticFreedomDesc: "La liberté artistique est au cœur de notre mission. Nous encourageons les cinéastes à repousser les limites créatives et explorer de nouvelles idées. Second Souffle Production est un terrain fertile pour les histoires diversifiées, offrant au public une riche variété d'expériences cinématographiques."
  },
  en: {
    whyArt: "Why Art",
    whySecondSouffle: "Why Second Souffle",
    ourServices: "Our Services",
    becomePartner: "Become a Partner",
    invest: "INVEST",
    audiovisualProduction: "Audiovisual Production",
    heroTitle: "Second Souffle opens the doors to visual creation",
    heroDescription: "Through our team's expertise, Second Souffle enables you to access a world of creative and technical opportunities without constraints.",
    startWithUs: "Start with us",
    discover: "DISCOVER",
    aboutTitle: "About Second Souffle Production",
    aboutDescription: "Dive into our commitment to singularity, creativity, and social impact in the film industry",
    donate: "Donate",
    yearsExperience: "Years of Experience",
    crowdfunding: "Crowdfunding",
    movieProjects: "Film Projects",
    partners: "Partners",
    process: "PROCESS",
    processTitle: "We are committed to supporting projects that align with our values",
    equalityCinema: "Cinema of Equality",
    equalityCinemaDesc: "We celebrate and promote equality in the film industry. Our commitment is reflected in supporting projects that fairly represent genders and ethnicities, creating a space where every talent can express themselves and share their unique voice.",
    esgCommitment: "ESG Environmental Commitment",
    esgCommitmentDesc: "We integrate environmental and social consciousness into every project we support. Our goal is to promote environmentally respectful and socially responsible production practices. We actively support the transition to more sustainable cinema.",
    artisticFreedom: "Artistic Freedom and Thematic Uniqueness",
    artisticFreedomDesc: "Artistic freedom is at the heart of our mission. We encourage filmmakers to push creative boundaries and explore new ideas. Second Souffle Production is a fertile ground for diverse stories, offering audiences a rich variety of cinematic experiences."
  }
} as const

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.fr 