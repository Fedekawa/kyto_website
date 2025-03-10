import type { Language } from "@/contexts/language-context"

type TranslationsType = {
  [K in Language]: {
    // Header
    solutions: string
    caseStudies: string
    methodology: string
    about: string
    startNow: string
    // Hero Section
    trustedBySMBs: string
    aiImplementationIn: string
    daysNotMonths: string
    fasterMoreAffordable: string
    noCodeImplementation: string
    resultsInDays: string
    payAsYouGrow: string
    smbsSeekingAI: string
    productivityIncrease: string
    costReduction: string
    // Why AI Section
    theFutureIsHere: string
    whySMBsChoose: string
    getPowerOfEnterprise: string
    daysNotMonthsTitle: string
    daysNotMonthsDesc: string
    fasterDeployment: string
    costEffective: string
    costEffectiveDesc: string
    moreAffordable: string
    noCodeRequired: string
    noCodeRequiredDesc: string
    zeroTechnicalDebt: string
    enterpriseGrade: string
    enterpriseGradeDesc: string
    enterpriseFeatures: string
    // Solutions Section
    powerfulAISolutions: string
    enterpriseGradeAI: string
    smartDocumentProcessing: string
    transformDocument: string
    aiAgents: string
    intelligentCustomerSupport: string
    processAutomation: string
    streamlineWorkflows: string
    timeSaved: string
    responseTimeReduced: string
    productivityIncreaseStat: string
    learnMore: string
    readyToTransform: string
    getStartedToday: string
    // Case Studies Section
    successStories: string
    seeHowBusinesses: string
    theChallenge: string
    ourSolution: string
    theResults: string
    transformYourBusiness: string
    // Methodology Section
    implementationProcess: string
    provenMethodology: string
    discovery: string
    design: string
    development: string
    testing: string
    launch: string
    week1: string
    weeks23: string
    weeks34: string
    weeks46: string
    weeks67: string
    readyToStart: string
    // Contact Section
    startYourAIJourney: string
    getFreeConsultation: string
    yourName: string
    companyName: string
    workEmail: string
    whatInterestsYou: string
    selectAnOption: string
    documentProcessing: string
    aiAgentsOption: string
    processAutomationOption: string
    other: string
    getStarted: string
    noCommitment: string
    whyChooseKyto: string
    quickResponse: string
    getResponseWithin: string
    expertConsultation: string
    freeConsultation: string
    rapidImplementation: string
    startSeeingResults: string
    // Footer
    company: string
    aboutUs: string
    caseStudiesFooter: string
    methodologyFooter: string
    legal: string
    privacyPolicy: string
    termsConditions: string
    dataDeletion: string
    contact: string
    contactUs: string
    allRightsReserved: string
    // Chat
    chatWithKyto: string
    chatWelcomeTitle: string
    chatWelcomeMessage: string
    typeYourMessage: string
    welcomeToKyto: string
    welcomeModalMessage: string
    continue: string
    integrationExample: string
  }
}

export type TranslationKey = keyof TranslationsType[Language]

export const translations: TranslationsType = {
  en: {
    // Header
    solutions: "Solutions",
    caseStudies: "Case Studies",
    methodology: "Methodology",
    about: "About",
    startNow: "Start Now",
    // Hero Section
    trustedBySMBs: "Trusted by SMBs",
    aiImplementationIn: "AI Implementation in",
    daysNotMonths: "Weeks, Not Months",
    fasterMoreAffordable: "10x Faster, 10x More Affordable AI Solutions for Your Business",
    noCodeImplementation: "No-code implementation",
    resultsInDays: "Results in days",
    payAsYouGrow: "Pay as you grow",
    smbsSeekingAI: "SMBs Seeking AI",
    productivityIncrease: "Productivity Increase",
    costReduction: "Cost Reduction",
    // Why AI Section
    theFutureIsHere: "The Future is Here",
    whySMBsChoose: "Why SMBs Choose Our AI Solutions",
    getPowerOfEnterprise: "Get the power of enterprise AI with the simplicity and affordability your business needs",
    daysNotMonthsTitle: "Weeks, Not Months",
    daysNotMonthsDesc: "Deploy complete AI solutions in weeks instead of the typical months-long implementation cycles.",
    fasterDeployment: "10x Faster Deployment",
    costEffective: "Cost Effective",
    costEffectiveDesc:
      "Get enterprise-grade AI solutions at a fraction of the traditional cost through our efficient approach.",
    moreAffordable: "10x More Affordable",
    noCodeRequired: "No Code Required",
    noCodeRequiredDesc: "Implement AI without hiring developers. Our platform handles the complexity for you.",
    zeroTechnicalDebt: "Zero Technical Debt",
    enterpriseGrade: "Enterprise Grade",
    enterpriseGradeDesc: "Access the same AI capabilities as large enterprises, tailored for your business size.",
    enterpriseFeatures: "Enterprise Features",
    // Solutions Section
    powerfulAISolutions: "Powerful AI Solutions",
    enterpriseGradeAI: "Enterprise-grade AI capabilities, tailored for your business size and needs",
    smartDocumentProcessing: "Smart Document Processing",
    transformDocument: "Transform any document into actionable data",
    aiAgents: "AI Agents",
    intelligentCustomerSupport: "24/7 intelligent customer support",
    processAutomation: "Process Automation",
    streamlineWorkflows: "Streamline your workflows end-to-end",
    timeSaved: "85% time saved on document processing",
    responseTimeReduced: "Response time reduced by 90%",
    productivityIncreaseStat: "40% increase in productivity",
    learnMore: "Learn more",
    readyToTransform: "Ready to transform your business with AI?",
    getStartedToday: "Get Started Today",
    // Case Studies Section
    successStories: "Success Stories",
    seeHowBusinesses: "See how businesses like yours are achieving remarkable results with our AI solutions",
    theChallenge: "The Challenge",
    ourSolution: "Our Solution",
    theResults: "The Results",
    transformYourBusiness: "Transform your business",
    // Methodology Section
    implementationProcess: "Implementation Process",
    provenMethodology: "Our proven methodology for delivering reliable, enterprise-grade AI solutions",
    discovery: "Discovery",
    design: "Design",
    development: "Development",
    testing: "Testing",
    launch: "Launch",
    week1: "Week 1",
    weeks23: "Weeks 2-3",
    weeks34: "Weeks 3-4",
    weeks46: "Weeks 4-5",
    weeks67: "Weeks 5-6",
    readyToStart: "Ready to start your AI transformation journey?",
    // Contact Section
    startYourAIJourney: "Start Your AI Journey Today",
    getFreeConsultation: "Get a free consultation and see how AI can transform your business",
    yourName: "Your Name",
    companyName: "Company Name",
    workEmail: "Work Email",
    whatInterestsYou: "What interests you most?",
    selectAnOption: "Select an option",
    documentProcessing: "Document Processing",
    aiAgentsOption: "AI Agents",
    processAutomationOption: "Process Automation",
    other: "Other",
    getStarted: "Get Started",
    noCommitment: "No commitment required",
    whyChooseKyto: "Why Choose Kyto?",
    quickResponse: "Quick Response",
    getResponseWithin: "Get a response within 24 hours",
    expertConsultation: "Expert Consultation",
    freeConsultation: "Free consultation with AI specialists",
    rapidImplementation: "Rapid Implementation",
    startSeeingResults: "Start seeing results in days",
    // Footer
    company: "Company",
    aboutUs: "About Us",
    caseStudiesFooter: "Case Studies",
    methodologyFooter: "Methodology",
    legal: "Legal",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms & Conditions",
    dataDeletion: "Data Deletion",
    contact: "Contact",
    contactUs: "Contact Us",
    allRightsReserved: "All rights reserved",
    // Chat
    chatWithKyto: "Chat with Kyto",
    chatWelcomeTitle: "Welcome to Kyto AI Assistant",
    chatWelcomeMessage: "Ask me anything about our AI implementation services!",
    typeYourMessage: "Type your message...",
    welcomeToKyto: "Welcome to Kyto",
    welcomeModalMessage:
      "Thanks for reaching out! I'm Kyto's AI assistant, here to help you understand how we can transform your business with AI solutions in days, not months.",
    continue: "Continue",
    integrationExample: "Integration Example",
  },
  es: {
    // Header
    solutions: "Soluciones",
    caseStudies: "Casos de Éxito",
    methodology: "Metodología",
    about: "Nosotros",
    startNow: "Comenzar Ahora",
    // Hero Section
    trustedBySMBs: "Confiado por PYMEs",
    aiImplementationIn: "Implementación de IA en",
    daysNotMonths: "Semanas, No Meses",
    fasterMoreAffordable: "Soluciones de IA 10 veces más rápidas y económicas para tu negocio",
    noCodeImplementation: "Implementación sin código",
    resultsInDays: "Resultados en días",
    payAsYouGrow: "Paga mientras creces",
    smbsSeekingAI: "PYMEs Buscando IA",
    productivityIncrease: "Aumento de Productividad",
    costReduction: "Reducción de Costos",
    // Why AI Section
    theFutureIsHere: "El Futuro Está Aquí",
    whySMBsChoose: "Por Qué las PYMEs Eligen Nuestras Soluciones de IA",
    getPowerOfEnterprise:
      "Obtén el poder de la IA empresarial con la simplicidad y asequibilidad que tu negocio necesita",
    daysNotMonthsTitle: "Semanas, No Meses",
    daysNotMonthsDesc:
      "Implementa soluciones completas de IA en semanas en lugar de los típicos ciclos de implementación de meses.",
    fasterDeployment: "Implementación 10x Más Rápida",
    costEffective: "Costo Efectivo",
    costEffectiveDesc:
      "Obtén soluciones de IA de nivel empresarial a una fracción del costo tradicional a través de nuestro enfoque eficiente.",
    moreAffordable: "10x Más Económico",
    noCodeRequired: "Sin Código Requerido",
    noCodeRequiredDesc: "Implementa IA sin contratar desarrolladores. Nuestra plataforma maneja la complejidad por ti.",
    zeroTechnicalDebt: "Cero Deuda Técnica",
    enterpriseGrade: "Nivel Empresarial",
    enterpriseGradeDesc:
      "Accede a las mismas capacidades de IA que las grandes empresas, adaptadas al tamaño de tu negocio.",
    enterpriseFeatures: "Funciones Empresariales",
    // Solutions Section
    powerfulAISolutions: "Potentes Soluciones de IA",
    enterpriseGradeAI: "Capacidades de IA de nivel empresarial, adaptadas al tamaño y necesidades de tu negocio",
    smartDocumentProcessing: "Procesamiento Inteligente de Documentos",
    transformDocument: "Transforma cualquier documento en datos accionables",
    aiAgents: "Agentes de IA",
    intelligentCustomerSupport: "Soporte al cliente inteligente 24/7",
    processAutomation: "Automatización de Procesos",
    streamlineWorkflows: "Optimiza tus flujos de trabajo de principio a fin",
    timeSaved: "85% de tiempo ahorrado en procesamiento de documentos",
    responseTimeReduced: "Tiempo de respuesta reducido en un 90%",
    productivityIncreaseStat: "40% de aumento en productividad",
    learnMore: "Saber más",
    readyToTransform: "¿Listo para transformar tu negocio con IA?",
    getStartedToday: "Comienza Hoy",
    // Case Studies Section
    successStories: "Historias de Éxito",
    seeHowBusinesses:
      "Mira cómo negocios como el tuyo están logrando resultados notables con nuestras soluciones de IA",
    theChallenge: "El Desafío",
    ourSolution: "Nuestra Solución",
    theResults: "Los Resultados",
    transformYourBusiness: "Transforma tu negocio",
    // Methodology Section
    implementationProcess: "Proceso de Implementación",
    provenMethodology: "Nuestra metodología probada para entregar soluciones de IA confiables y de nivel empresarial",
    discovery: "Descubrimiento",
    design: "Diseño",
    development: "Desarrollo",
    testing: "Pruebas",
    launch: "Lanzamiento",
    week1: "Semana 1",
    weeks23: "Semanas 2-3",
    weeks34: "Semanas 3-4",
    weeks46: "Semanas 4-5",
    weeks67: "Semanas 5-6",
    readyToStart: "¿Listo para comenzar tu viaje de transformación con IA?",
    // Contact Section
    startYourAIJourney: "Comienza Tu Viaje de IA Hoy",
    getFreeConsultation: "Obtén una consulta gratuita y descubre cómo la IA puede transformar tu negocio",
    yourName: "Tu Nombre",
    companyName: "Nombre de la Empresa",
    workEmail: "Email de Trabajo",
    whatInterestsYou: "¿Qué te interesa más?",
    selectAnOption: "Selecciona una opción",
    documentProcessing: "Procesamiento de Documentos",
    aiAgentsOption: "Agentes de IA",
    processAutomationOption: "Automatización de Procesos",
    other: "Otro",
    getStarted: "Comenzar",
    noCommitment: "Sin compromiso requerido",
    whyChooseKyto: "¿Por Qué Elegir Kyto?",
    quickResponse: "Respuesta Rápida",
    getResponseWithin: "Obtén una respuesta en 24 horas",
    expertConsultation: "Consulta con Expertos",
    freeConsultation: "Consulta gratuita con especialistas en IA",
    rapidImplementation: "Implementación Rápida",
    startSeeingResults: "Comienza a ver resultados en días",
    // Footer
    company: "Empresa",
    aboutUs: "Sobre Nosotros",
    caseStudiesFooter: "Casos de Éxito",
    methodologyFooter: "Metodología",
    legal: "Legal",
    privacyPolicy: "Política de Privacidad",
    termsConditions: "Términos y Condiciones",
    dataDeletion: "Eliminación de Datos",
    contact: "Contacto",
    contactUs: "Contáctanos",
    allRightsReserved: "Todos los derechos reservados",
    // Chat
    chatWithKyto: "Chatea con Kyto",
    chatWelcomeTitle: "Bienvenido al Asistente de IA de Kyto",
    chatWelcomeMessage: "¡Pregúntame cualquier cosa sobre nuestros servicios de implementación de IA!",
    typeYourMessage: "Escribe tu mensaje...",
    welcomeToKyto: "Bienvenido a Kyto",
    welcomeModalMessage:
      "Gracias por contactarnos! Soy el asistente de IA de Kyto, estoy aquí para ayudarte a entender cómo podemos transformar tu negocio con soluciones de IA en días, no meses.",
    continue: "Continuar",
    integrationExample: "Ejemplo de Integración",
  },
} as const

