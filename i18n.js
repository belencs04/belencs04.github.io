// Internationalization dictionary for Belén Cereijo Silva Portfolio
// English is default, Spanish is available via navbar toggle

const translations = {
  en: {
    meta: {
      title: "Belén Cereijo Silva | Business & Data · Strategy · Analytics · Finance",
      description: "Personal portfolio of Belén Cereijo Silva. Final-year Business Administration & Data Science student at ESIC University. Seeking strategy and data consulting roles in London and Spain.",
      rbTitle: "Belén Cereijo Silva | Application for Junior Consultant, Roland Berger London",
      rbDescription: "Tailored portfolio of Belén Cereijo Silva for the Junior Consultant position at Roland Berger London (Transaction & Investor Support)."
    },
    nav: {
      brand: "Belén Cereijo Silva",
      whyRb: "Why RB",
      about: "About",
      values: "Values",
      experience: "Experience",
      recommendation: "Reference",
      volunteering: "Volunteering",
      education: "Education",
      projects: "Projects",
      skills: "Skills",
      beyond: "Beyond Classroom",
      contact: "Contact",
      downloadCv: "Download CV"
    },
    hero: {
      videoBadge: "Video Introduction",
      videoAria: "Introduction video by Belén Cereijo Silva",
      videoCaption: "AI avatar · script written by me",
      name: "Belén Cereijo Silva",
      headline: "Business & Data · Strategy · Analytics · Finance",
      tagline: "I connect business and data to turn uncertainty into concrete decisions.",
      smallLine: "Madrid · Open to strategy and data consulting roles in London and Spain · Available from June 2027",
      btnDownloadCv: "Download CV",
      btnLinkedIn: "LinkedIn",
      stat1Number: "9.63/10",
      stat1Label: "GPA · Excellence Award",
      stat2Number: "Tier-1 bank",
      stat2Label: "Advanced Analytics experience",
      stat3Number: "Volunteer",
      stat3Label: "Since 2024"
    },
    whyRb: {
      sectionTag: "Roland Berger Fit",
      sectionTitle: "Why Roland Berger",
      sectionSubtitle: "A natural intersection of strategy, financial modelling and checked data",
      cardText: "I love strategy, I genuinely enjoyed working for a bank and I like finance and numbers. Roland Berger's Junior Consultant role in London, aligned with Transaction & Investor Support, sits exactly where those meet: financial modelling, market analysis and making sure investment decisions rest on data that has actually been checked. I also recognise myself in the firm's values — entrepreneurship, excellence and empathy — and in its invitation to be authentic, which is why this page shows both my professional work and who I am outside it. My internship supervisor recommends me specifically for consulting — <a href=\"#recommendation\" class=\"inline-link\">see his letter below</a>.",
      fitChip1: "Financial modelling → TFG 5-year model, Financial Management II 10/10",
      fitChip2: "Data rigour → data-quality issues found at a Tier-1 bank",
      fitChip3: "AI literacy → automation with AI agents, used responsibly"
    },
    rb: {
      smallLine: "Madrid · Applying for Junior Consultant, Roland Berger London · Available from June 2027",
      downloadActiveCv: "Download CV (Roland Berger - Active)",
      downloadRbCv: "Download CV for Roland Berger (PDF)"
    },
    about: {
      sectionTag: "About",
      sectionTitle: "About Me",
      sectionSubtitle: "Bridging quantitative rigor and business strategy",
      p1: "I connect business and data to turn uncertainty into concrete decisions. I'm in the final year of a BA in Business Administration & Management with a minor in Data Science at ESIC University (9.63/10 GPA, Excellence Award, Honour Roll), now focused on Machine Learning and applied AI.",
      p2: "As a Strategic Data Analyst Intern at Management Solutions, I worked in the Advanced Analytics team of a Tier-1 Spanish bank, analysing the SME segment across all of the group's markets. My main project was measuring the impact of a predictive credit model through an A/B test, processing millions of records on AWS. The results were inconclusive, and instead of assuming our analysis was wrong, I organised and led a meeting with the Risk team to trace where the data came from. We found an error in one of the source tables that explained the results. I then took sole ownership of the follow-up: I analysed the impact of that error, found further errors in other tables and presented the final report to the client. It taught me to always ask what a decision is really resting on.",
      offer: "Management Solutions offered me a full-time position conditional on completing my degree — the clearest sign that the trust they placed in me paid off.",
      p3: "I enjoy problems where strategy, finance and data meet, and I'm looking to bring that to strategy and data consulting in London or Spain.",
      howIWorkTitle: "How I Work",
      work1Title: "Efficiency by design",
      work1Desc: "I always look for ways to cut the time a task takes, often by automating it.",
      work2Title: "Split by strength",
      work2Desc: "In team projects I usually take the lead and divide the work by each person's expertise.",
      work3Title: "Milestones, not deadlines",
      work3Desc: "I set intermediate checkpoints so problems show up early."
    },
    values: {
      sectionTag: "Core Principles",
      sectionTitle: "How I Live These Values",
      sectionSubtitle: "Three principles that guide how I work, learn and collaborate",
      card1Title: "Entrepreneurship",
      card1Definition: "Owning the problem and making things happen.",
      card1B1: "Co-organised an afterwork event at Mendrugo from planning to execution: 96.3% attendance, 21.6% conversion, €1,350 revenue.",
      card1B2: "Co-led One More Step, a D2C footwear business plan (9.7/10), leading the 5-year financial model.",
      card1B3: "At Management Solutions, took sole ownership of a follow-up analysis and presented it to the client.",
      card2Title: "Excellence",
      card2Definition: "Rigour first: checking what a decision actually rests on.",
      card2B1: "9.63/10 GPA, Excellence Award and Honour Roll.",
      card2B2: "When results were inconclusive, went back to the source, uncovered an error in a source table and then found further errors in other tables.",
      card3Title: "Empathy",
      card3Definition: "Understanding the person on the other side.",
      card3B1: "Led a volunteering project for the Santa María de la Paz homeless shelter and helped collect supplies for people affected by the DANA floods in Valencia.",
      card3B2: "Tutored Accounting, Finance, Maths and Sciences for almost 3 years, adapting to each student's learning style.",
      card3B3: "Reworked a client report after feedback that it was too technical for its audience, adapting the message to the people who had to act on it.",
      card3B4: "Customer-facing sales role at El Corte Inglés, tailoring service to each client."
    },
    experience: {
      sectionTitle: "Professional Experience",
      sectionSubtitle: "Impact in analytics, client work and leadership",
      featuredBadge: "Featured Role",
      ms: {
        role: "Strategic Data Analyst Intern",
        company: "Management Solutions",
        location: "Madrid",
        period: "Jul 2025 – Mar 2026",
        b1: "Worked in the Advanced Analytics team of a Tier-1 Spanish bank, analysing the SME segment for the group's holding team across all its markets.",
        b2: "Ran the monthly SME analyses, built Sankey flow visualisations and merged notebooks from several team members into a single monthly process.",
        impactTitle: "Impact analysis of a predictive credit model",
        impactB1: "Defined and coded <strong>KPIs</strong> to measure the model's impact on customers' credit behaviour through an A/B test (pilot vs. control, thousands of customers).",
        impactB2: "Processed <strong>millions of records</strong> on AWS using SQL (Athena) and PySpark.",
        impactB3: "Prepared a report for the client's digital sales team to help explain falling product sign-ups, which received very positive feedback.",
        impactB4: "Organised and led a meeting with the Risk team that uncovered an error in a source table and explained the inconclusive results.",
        impactB5: "Took sole ownership of the follow-up analysis on the error's impact, found further errors in other tables and presented the final report to the client.",
        refLink: "See recommendation letter →"
      },
      mendrugo: {
        role: "Event Organiser",
        company: "Mendrugo",
        location: "Madrid",
        period: "Sep – Dec 2025",
        desc: "Co-organised an afterwork event at Mendrugo for the Entrepreneurship course, reaching a <strong>96.3% attendance rate, a 21.6% conversion rate and €1,350 in revenue</strong>."
      },
      tutoring: {
        role: "Tutor",
        company: "Private Tutoring",
        location: "Madrid",
        period: "Oct 2022 – Jun 2025",
        desc: "Tutored Accounting, Finance, Maths and Sciences, adapting to each student's learning style."
      },
      october: {
        role: "Sales Assistant",
        company: "October S.L. at El Corte Inglés",
        location: "Madrid",
        period: "Aug 2024",
        desc: "Customer-facing role, tailoring service to different client needs."
      }
    },
    recommendation: {
      sectionTag: "Recommendation",
      sectionTitle: "Recommendation Letter",
      sectionSubtitle: "Assessment from my internship supervisor at Management Solutions",
      mainQuote: "These qualities go well beyond technical data work, and I would describe them as consulting qualities in the fullest sense: reliability under real client pressure, sound judgement about when to take initiative and when to ask, and a level of ownership that made her someone I trusted with tasks of real consequence to the project.",
      quoteTranslation: "",
      authorName: "Javier Antonio Gisbert Mariscal",
      authorRole: "Senior Data Scientist, Management Solutions · my internship supervisor",
      evalLabel: "Highlighted in my final evaluation",
      chip1: "Adaptability",
      chip2: "Organisation",
      chip3: "Curiosity",
      chip4: "Autonomy",
      secQuote1: "\"She also showed a genuine, proactive curiosity about the business beyond her immediate tasks.\"",
      secQuote2: "\"Belén proactively organised and led a meeting with that team to get to the bottom of it, without being asked to.\"",
      btnPdf: "Read the full letter (PDF)"
    },
    volunteering: {
      sectionTag: "Social Impact",
      sectionTitle: "Giving Back",
      sectionSubtitle: "Leadership, community engagement and social impact initiatives",
      featuredTitle: "Learning & Service Project · ESIC University · Sep 2024 – May 2026",
      featuredDesc: "I led a multidisciplinary team to give visibility to the Santa María de la Paz homeless shelter. I organised the team's tasks and coordinated directly with our ESIC tutor and the shelter's director, and together we produced videos to tell the shelter's story and reach more people.",
      tag1: "Leadership",
      tag2: "Coordination",
      tag3: "Storytelling",
      tag4: "Social impact",
      smallTitle: "Volunteering days · ESIC University",
      smallDesc: "Regular participant in ESIC's one-day volunteering initiatives, including collecting supplies for people affected by the DANA floods in Valencia."
    },
    education: {
      sectionTitle: "Education & Academic Track",
      sectionSubtitle: "Excellence in business management, quantitative methods and analytical foundations",
      esic: {
        degree: "BA Business Administration & Management, minor in Data Science",
        institution: "ESIC University",
        location: "Madrid",
        period: "Sep 2022 – May 2027",
        highlight: "<strong>9.63/10 GPA</strong> · Excellence Award · Honour Roll Award · <strong>18 courses with highest distinction</strong>",
        role: "Class delegate (2nd and 4th year) and member of the degree curriculum committee",
        courseworkTitle: "Relevant 2026/27 coursework:",
        coursework: "Artificial Intelligence & Neural Networks, Natural Language Processing (Chatbots), Predictive Models (online churn, sentiment analysis), Categorical Variable Modelling, Big Data Applications II–IV"
      },
      krems: {
        degree: "Exchange Semester",
        institution: "IMC Krems University of Applied Sciences",
        location: "Krems, Austria",
        period: "Jan – Jun 2025",
        desc: "Courses across several degree programmes: Principles of Business Data Analysis, International Financial Management, Accounting II, Doing Business Abroad."
      },
      loreto: {
        degree: "Bachillerato (Sciences)",
        institution: "Colegio Nuestra Señora de Loreto",
        location: "Madrid",
        period: "2020 – 2022",
        desc: "9.76/10 average and 12.63/14 in the university entrance exam (EvAU)"
      }
    },
    projects: {
      sectionTitle: "Key Projects",
      sectionSubtitle: "Applied analytics, financial modelling and automation",
      p1: {
        title: "One More Step — Final Degree Project (Business Plan)",
        desc: "Co-led a business plan for a direct-to-consumer footwear brand, <strong>graded 9.7/10</strong>. I led the financial plan, building a 5-year financial model in Excel.",
        tags: ["Financial modelling", "Excel", "Strategy"]
      },
      p2: {
        title: "Predicting Student GPA with Machine Learning",
        subtitle: "Big Data Applications I, ESIC",
        desc: "Built a Python pipeline on a 1M-row, 42-variable dataset, covering exploratory analysis, cleaning and outlier treatment. Ran multicollinearity analysis and feature selection, trained a linear regression model (<strong>test R² of 0.88</strong>) and exposed it as a REST API using FastAPI.",
        tags: ["Python", "scikit-learn", "Regression", "FastAPI"]
      },
      p3: {
        title: "AI literacy, used responsibly",
        subtitle: "Workflows & Applied Artificial Intelligence",
        desc: "I use AI to work faster, not to think less. I automate workflows with Claude (e.g. a custom skill that tailors my CV to each job description), Gemini and Google Antigravity agents, and I always review and verify the output. This website itself was built with an AI agent.",
        tags: ["AI agents", "Automation", "Responsible AI"]
      }
    },
    skills: {
      sectionTitle: "Skills & Capabilities",
      sectionSubtitle: "Technical toolset, quantitative methodologies and domain expertise",
      groupFinanceTitle: "Finance & Strategy",
      group1Title: "Programming & Data",
      group2Title: "Machine Learning & Statistics",
      group3Title: "Cloud & Deployment",
      groupToolsTitle: "Visualisation",
      group5Title: "AI Tools",
      group6Title: "Languages / Idiomas",
      groupFinanceItems: [
        "Financial modelling (5-year business plan model)",
        "Business planning",
        "Advanced Excel (Microsoft Office Expert certification)"
      ],
      group1Items: ["Python", "SQL", "PySpark", "R"],
      group2Items: [
        "model training and evaluation (scikit-learn)",
        "regression and classification",
        "feature engineering",
        "multicollinearity analysis",
        "A/B testing"
      ],
      group3Items: [
        "AWS (S3, Athena)",
        "Azure (AZ-900 and AI-900 certifications)",
        "FastAPI",
        "Git (basic)"
      ],
      groupToolsItems: [
        "Power BI",
        "Tableau"
      ],
      group5Items: [
        "Claude (workflow automation)",
        "Gemini",
        "Google Antigravity (AI agents)"
      ],
      group6Items: [
        "Spanish (native)",
        "English (C2)",
        "German (beginner)"
      ]
    },
    beyond: {
      sectionTitle: "Beyond the Classroom",
      sectionSubtitle: "Initiatives, leadership and continuous curiosity outside academic coursework",
      card1Title: "Class delegate",
      card1Desc: "2nd and 4th year, ESIC.",
      card2Title: "Curriculum committee",
      card2Desc: "Proposed changes to course content and format.",
      card5Title: "Mendrugo event",
      card5Desc: "Co-organised from planning to execution (€1,350 revenue).",
      card6Title: "Exchange in Austria",
      card6Desc: "IMC Krems: courses across several degree programmes, incl. Intercultural Competence and German for Beginners.",
      card7Title: "KPMG Women at the Top",
      card7Desc: "Invited by KPMG to its Women at the Top programmes (Audit, two years; STEM).",
      card8Title: "Writing on LinkedIn",
      card8Desc: "Posts on data storytelling, data trust and AI.",
      card9Title: "This website",
      card9Desc: "Built by me with an AI agent.",
      outsideWorkTitle: "Outside Work",
      outside1: "Guitar & piano",
      outside2: "Watercolour, now learning oil painting",
      outside3: "Creative writing",
      outside4: "Tennis — started last year to step out of my comfort zone",
      outside5: "Strength training"
    },
    contact: {
      sectionTitle: "Contact & Opportunities",
      headline: "Let's talk. I'm open to graduate roles in strategy and data consulting in London and Spain, starting June 2027.",
      emailLabel: "Email",
      emailValue: "bcereijosilva@gmail.com",
      linkedInLabel: "LinkedIn Profile",
      linkedInBtn: "Connect on LinkedIn",
      cvSectionTitle: "Curriculum Vitae",
      downloadActiveCv: "Download CV (English - Active)",
      downloadEnCv: "Download CV in English (PDF)",
      downloadEsCv: "Descargar CV en Español (PDF)"
    },
    footer: {
      rights: "Belén Cereijo Silva · 2026/2027",
      builtWith: "Designed by me, built with an AI agent in Google Antigravity."
    }
  },
  es: {
    meta: {
      title: "Belén Cereijo Silva | Negocio y datos · Estrategia · Analítica · Finanzas",
      description: "Portfolio personal de Belén Cereijo Silva. Estudiante de último año de ADE con minor en Data Science en ESIC University. Abierta a consultoría estratégica y de datos en Londres y España.",
      rbTitle: "Belén Cereijo Silva | Candidatura a Junior Consultant, Roland Berger Londres",
      rbDescription: "Portfolio personalizado de Belén Cereijo Silva para la posición de Junior Consultant en Roland Berger Londres (Transaction & Investor Support)."
    },
    nav: {
      brand: "Belén Cereijo Silva",
      whyRb: "Por qué RB",
      about: "Sobre mí",
      values: "Valores",
      experience: "Experiencia",
      recommendation: "Referencia",
      volunteering: "Voluntariado",
      education: "Educación",
      projects: "Proyectos",
      skills: "Habilidades",
      beyond: "Más allá del aula",
      contact: "Contacto",
      downloadCv: "Descargar CV"
    },
    hero: {
      videoBadge: "Vídeo de Introducción",
      videoAria: "Vídeo de presentación de Belén Cereijo Silva",
      videoCaption: "Avatar de IA · guion escrito por mí",
      name: "Belén Cereijo Silva",
      headline: "Negocio y datos · Estrategia · Analítica · Finanzas",
      tagline: "Conecto negocio y datos para convertir la incertidumbre en decisiones concretas.",
      smallLine: "Madrid · Abierta a consultoría estratégica y de datos en Londres y España · Disponible desde junio de 2027",
      btnDownloadCv: "Descargar CV",
      btnLinkedIn: "LinkedIn",
      stat1Number: "9,63/10",
      stat1Label: "De media · Excellence Award",
      stat2Number: "Banco Tier-1",
      stat2Label: "Experiencia en Advanced Analytics",
      stat3Number: "Voluntaria",
      stat3Label: "Desde 2024"
    },
    whyRb: {
      sectionTag: "Alineación con Roland Berger",
      sectionTitle: "Por qué Roland Berger",
      sectionSubtitle: "La intersección natural entre estrategia, modelización financiera y datos contrastados",
      cardText: "Me apasiona la estrategia, disfruté enormemente trabajando para un banco y me gustan las finanzas y los números. El puesto de Junior Consultant en Roland Berger Londres, enfocado en Transaction & Investor Support, se encuentra exactamente donde confluyen todos ellos: modelización financiera, análisis de mercado y la certeza de que las decisiones de inversión se basan en datos contrastados. Además, me identifico plenamente con los valores de la firma —emprendimiento, excelencia y empatía— y con su invitación a ser auténtica, motivo por el cual esta web muestra tanto mi trabajo profesional como quién soy fuera de él. Mi supervisor de prácticas me recomienda específicamente para consultoría: <a href=\"#recommendation\" class=\"inline-link\">consulta su carta más abajo</a>.",
      fitChip1: "Modelización financiera → Modelo a 5 años en TFG, Dirección Financiera II 10/10",
      fitChip2: "Rigor en los datos → Detección de errores de calidad de datos en banco Tier-1",
      fitChip3: "Competencia en IA → Automatización con agentes de IA, aplicada con responsabilidad"
    },
    rb: {
      smallLine: "Madrid · Candidatura a Junior Consultant, Roland Berger Londres · Disponible desde junio de 2027",
      downloadActiveCv: "Descargar CV (Roland Berger - Activo)",
      downloadRbCv: "Descargar CV para Roland Berger (PDF)"
    },
    about: {
      sectionTag: "Sobre mí",
      sectionTitle: "Sobre mí",
      sectionSubtitle: "Conectando rigor cuantitativo y estrategia de negocio",
      p1: "Conecto negocio y datos para convertir la incertidumbre en decisiones concretas. Estoy en el último año del grado en Administración y Dirección de Empresas con minor en Data Science en ESIC University (media 9,63/10, Excellence Award, Honour Roll), centrada ahora en Machine Learning e IA aplicada.",
      p2: "Como Strategic Data Analyst Intern en Management Solutions, trabajé en el equipo de Advanced Analytics de un banco español Tier-1, analizando el segmento pymes en todos los mercados del grupo. Mi proyecto principal fue medir el impacto de un modelo predictivo de crédito mediante un A/B test, procesando millones de registros en AWS. Los resultados no eran concluyentes y, en lugar de asumir que nuestro análisis era erróneo, organicé y lideré una reunión con el equipo de Riesgos para rastrear el origen de los datos. Encontramos un error en una de las tablas de origen que explicaba los resultados. Asumí en solitario el seguimiento: analicé el impacto de ese error, detecté más errores en otras tablas y presenté el informe final al cliente. Me enseñó a preguntarme siempre en qué se apoya realmente una decisión.",
      offer: "Management Solutions me ofreció una posición a tiempo completo condicionada a finalizar el grado: la muestra más clara de que la confianza que depositaron en mí dio sus frutos.",
      p3: "Me gustan los problemas donde se cruzan estrategia, finanzas y datos, y quiero llevar eso a la consultoría estratégica y de datos en Londres o en España.",
      howIWorkTitle: "Cómo trabajo",
      work1Title: "Eficiencia por diseño",
      work1Desc: "Busco siempre reducir el tiempo que lleva una tarea, a menudo automatizándola.",
      work2Title: "División por fortalezas",
      work2Desc: "En proyectos de equipo suelo asumir el liderazgo y repartir el trabajo según la especialidad de cada persona.",
      work3Title: "Hitos, no solo plazos finales",
      work3Desc: "Fijo puntos de control intermedios para anticipar y resolver problemas a tiempo."
    },
    values: {
      sectionTag: "Principios Clave",
      sectionTitle: "Cómo vivo estos valores",
      sectionSubtitle: "Tres principios que guían mi forma de trabajar, aprender y colaborar",
      card1Title: "Emprendimiento",
      card1Definition: "Hacer mío el problema y hacer que las cosas sucedan.",
      card1B1: "Coorganicé un afterwork en Mendrugo desde la planificación hasta la ejecución: 96,3% de asistencia, 21,6% de conversión y 1.350 € de ingresos.",
      card1B2: "Codirigí One More Step, plan de negocio de calzado D2C (9,7/10), liderando el modelo financiero a 5 años.",
      card1B3: "En Management Solutions, asumí en solitario un análisis de seguimiento y lo presenté al cliente.",
      card2Title: "Excelencia",
      card2Definition: "El rigor primero: comprobar en qué se apoya realmente una decisión.",
      card2B1: "Media de 9,63/10, Excellence Award y Honour Roll.",
      card2B2: "Cuando los resultados no fueron concluyentes, acudí a la fuente, destapé un error en una tabla de origen y encontré más errores en otras tablas.",
      card3Title: "Empatía",
      card3Definition: "Entender a la persona que está al otro lado.",
      card3B1: "Lideré un proyecto de voluntariado para el albergue Santa María de la Paz y ayudé en la recogida de material para los afectados por la DANA en Valencia.",
      card3B2: "Clases particulares de Contabilidad, Finanzas, Matemáticas y Ciencias durante casi 3 años, adaptándome al estilo de aprendizaje de cada alumno.",
      card3B3: "Reelaboré un informe para el cliente tras recibir feedback de que resultaba demasiado técnico, adaptando el mensaje a las personas que debían tomar decisiones con él.",
      card3B4: "Puesto de venta y atención directa al cliente en El Corte Inglés, adaptando el servicio a cada cliente."
    },
    experience: {
      sectionTitle: "Experiencia Profesional",
      sectionSubtitle: "Impacto en analítica, trabajo con clientes y liderazgo",
      featuredBadge: "Puesto Destacado",
      ms: {
        role: "Strategic Data Analyst Intern",
        company: "Management Solutions",
        location: "Madrid",
        period: "Jul 2025 – Mar 2026",
        b1: "Trabajé en el equipo de Advanced Analytics de un banco español Tier-1, analizando el segmento pymes para el equipo del holding en todos sus mercados.",
        b2: "Llevé los análisis mensuales de pymes, construí visualizaciones de flujos con diagramas Sankey y unifiqué los notebooks de varios compañeros en un único proceso mensual.",
        impactTitle: "Análisis de impacto de un modelo predictivo de crédito",
        impactB1: "Definí y programé <strong>diferentes KPIs</strong> para medir el impacto del modelo en el comportamiento crediticio de los clientes mediante un A/B test (piloto vs. control, miles de clientes).",
        impactB2: "Procesé <strong>millones de registros</strong> en AWS con SQL (Athena) y PySpark.",
        impactB3: "Preparé un informe para el equipo de ventas digitales del cliente que ayudaba a explicar la caída de contrataciones del producto, con muy buena acogida.",
        impactB4: "Organicé y dirigí una reunión con el equipo de Riesgos que destapó un error en una tabla de origen y explicaba los resultados no concluyentes.",
        impactB5: "Asumí en solitario el análisis de seguimiento del impacto del error, encontré más errores en otras tablas y presenté el informe final al cliente.",
        refLink: "Ver carta de recomendación →"
      },
      mendrugo: {
        role: "Organizador de Eventos",
        company: "Mendrugo",
        location: "Madrid",
        period: "Sep – Dic 2025",
        desc: "Coorganicé un afterwork en Mendrugo para la asignatura de Emprendimiento, con <strong>96,3 % de asistencia, 21,6 % de conversión y 1.350 € de ingresos</strong>."
      },
      tutoring: {
        role: "Profesora Particular",
        company: "Clases Particulares",
        location: "Madrid",
        period: "Oct 2022 – Jun 2025",
        desc: "Clases particulares de Contabilidad, Finanzas, Matemáticas y Ciencias, adaptándome al estilo de aprendizaje de cada alumno."
      },
      october: {
        role: "Vendedora y Atención al Cliente",
        company: "October S.L. en El Corte Inglés",
        location: "Madrid",
        period: "Ago 2024",
        desc: "Puesto de atención y venta al público, adaptando el servicio a las necesidades de cada cliente."
      }
    },
    recommendation: {
      sectionTag: "Recomendación",
      sectionTitle: "Carta de recomendación",
      sectionSubtitle: "Valoración de mi supervisor de prácticas en Management Solutions",
      mainQuote: "These qualities go well beyond technical data work, and I would describe them as consulting qualities in the fullest sense: reliability under real client pressure, sound judgement about when to take initiative and when to ask, and a level of ownership that made her someone I trusted with tasks of real consequence to the project.",
      quoteTranslation: "«Estas cualidades van mucho más allá del trabajo técnico con datos; las describiría como cualidades de consultoría en el sentido más completo: fiabilidad bajo presión real del cliente, buen criterio sobre cuándo tomar la iniciativa y cuándo preguntar, y un nivel de responsabilidad que hizo que le confiara tareas con verdadero impacto en el proyecto.»",
      authorName: "Javier Antonio Gisbert Mariscal",
      authorRole: "Senior Data Scientist, Management Solutions · mi supervisor durante las prácticas",
      evalLabel: "Destacado en mi evaluación final",
      chip1: "Adaptabilidad",
      chip2: "Organización",
      chip3: "Curiosidad",
      chip4: "Autonomía",
      secQuote1: "«Demostró también una curiosidad genuina y proactiva por el negocio más allá de sus tareas inmediatas.»",
      secQuote2: "«Belén organizó y lideró proactivamente una reunión con ese equipo para llegar al fondo del asunto, sin que nadie se lo pidiera.»",
      btnPdf: "Leer la carta completa (PDF)"
    },
    volunteering: {
      sectionTag: "Impacto Social",
      sectionTitle: "Compromiso Social",
      sectionSubtitle: "Liderazgo, iniciativa social y compromiso con la comunidad",
      featuredTitle: "Proyecto de Aprendizaje y Servicio · ESIC University · Sep 2024 – May 2026",
      featuredDesc: "Lideré un equipo multidisciplinar para dar visibilidad al albergue Santa María de la Paz. Organicé las tareas del equipo y coordiné directamente con nuestra tutora de ESIC y la dirección del albergue, produciendo juntos vídeos para contar su labor y llegar a más personas.",
      tag1: "Liderazgo",
      tag2: "Coordinación",
      tag3: "Storytelling",
      tag4: "Impacto social",
      smallTitle: "Jornadas de voluntariado · ESIC University",
      smallDesc: "Participante habitual en las jornadas de voluntariado de ESIC, incluyendo la recogida de suministros y material para los afectados por la DANA en Valencia."
    },
    education: {
      sectionTitle: "Educación y Trayectoria Académica",
      sectionSubtitle: "Excelencia en gestión empresarial, métodos cuantitativos y fundamentos analíticos",
      esic: {
        degree: "Grado en Administración y Dirección de Empresas con minor en Data Science",
        institution: "ESIC University",
        location: "Madrid",
        period: "Sep 2022 – May 2027",
        highlight: "<strong>Media 9,63/10</strong> · Excellence Award · Honour Roll Award · <strong>18 matrículas de honor</strong>",
        role: "Delegada de clase (2º y 4º) y miembro de la comisión de titulación del grado",
        courseworkTitle: "Asignaturas relevantes 2026/27:",
        coursework: "Inteligencia Artificial y Redes Neuronales, Procesamiento del Lenguaje Natural (chatbots), Modelos Predictivos (churn online, análisis de sentimiento), Modelización de Variables Categóricas, Big Data Applications II–IV"
      },
      krems: {
        degree: "Semestre de Intercambio",
        institution: "IMC Krems University of Applied Sciences",
        location: "Krems, Austria",
        period: "Ene – Jun 2025",
        desc: "Asignaturas de varios grados: Principles of Business Data Analysis, International Financial Management, Accounting II, Doing Business Abroad."
      },
      loreto: {
        degree: "Bachillerato (Ciencias)",
        institution: "Colegio Nuestra Señora de Loreto",
        location: "Madrid",
        period: "2020 – 2022",
        desc: "Media de 9,76/10 y 12,63/14 en la EvAU"
      }
    },
    projects: {
      sectionTitle: "Proyectos Clave",
      sectionSubtitle: "Analítica aplicada, modelos financieros y automatización",
      p1: {
        title: "One More Step — Trabajo de Fin de Grado (Plan de Negocio)",
        desc: "Codirigí el plan de negocio de una marca de calzado D2C, <strong>calificado con 9,7/10</strong>. Lideré el plan financiero, con un modelo a 5 años en Excel.",
        tags: ["Financial modelling", "Excel", "Strategy"]
      },
      p2: {
        title: "Predicción de GPA de Estudiantes con Machine Learning",
        subtitle: "Big Data Applications I, ESIC",
        desc: "Pipeline en Python sobre un dataset de 1 millón de filas y 42 variables: análisis exploratorio, limpieza y tratamiento de outliers. Análisis de multicolinealidad, selección de variables y modelo de regresión lineal (<strong>R² de 0,88 en test</strong>), expuesto como API REST con FastAPI.",
        tags: ["Python", "scikit-learn", "Regression", "FastAPI"]
      },
      p3: {
        title: "Criterio en IA, aplicada con responsabilidad",
        subtitle: "Automatización de Procesos e IA Aplicada",
        desc: "Uso la IA para trabajar más rápido, no para pensar menos. Automatizo flujos de trabajo con Claude (por ejemplo, una skill personalizada que adapta mi CV a cada oferta), Gemini y agentes en Google Antigravity, revisando y verificando siempre los resultados. Esta misma web fue construida con un agente de IA.",
        tags: ["Agentes de IA", "Automatización", "IA Responsable"]
      }
    },
    skills: {
      sectionTitle: "Habilidades y Competencias",
      sectionSubtitle: "Herramientas técnicas, metodologías cuantitativas y áreas de dominio",
      groupFinanceTitle: "Finanzas y Estrategia",
      group1Title: "Programación y Datos",
      group2Title: "Machine Learning y Estadística",
      group3Title: "Cloud y Despliegue",
      groupToolsTitle: "Visualización",
      group5Title: "Herramientas de IA",
      group6Title: "Idiomas / Languages",
      groupFinanceItems: [
        "Modelización financiera (modelo a 5 años en plan de negocio)",
        "Planificación de negocio",
        "Excel avanzado (certificación Microsoft Office Expert)"
      ],
      group1Items: ["Python", "SQL", "PySpark", "R"],
      group2Items: [
        "entrenamiento y evaluación de modelos (scikit-learn)",
        "regresión y clasificación",
        "feature engineering",
        "análisis de multicolinealidad",
        "A/B testing"
      ],
      group3Items: [
        "AWS (S3, Athena)",
        "Azure (certificaciones AZ-900 y AI-900)",
        "FastAPI",
        "Git (básico)"
      ],
      groupToolsItems: [
        "Power BI",
        "Tableau"
      ],
      group5Items: [
        "Claude (automatización de procesos)",
        "Gemini",
        "Google Antigravity (agentes de IA)"
      ],
      group6Items: [
        "Español (nativo)",
        "Inglés (C2)",
        "Alemán (principiante)"
      ]
    },
    beyond: {
      sectionTitle: "Más allá del aula",
      sectionSubtitle: "Iniciativas, liderazgo y curiosidad continua fuera del plan académico",
      card1Title: "Delegada de clase",
      card1Desc: "2º y 4º curso en ESIC.",
      card2Title: "Comisión de titulación",
      card2Desc: "Propuse cambios de contenido y formato de las asignaturas.",
      card5Title: "Evento Mendrugo",
      card5Desc: "Coorganización integral de evento afterwork con 1.350 € de ingresos.",
      card6Title: "Intercambio en Austria",
      card6Desc: "IMC Krems: asignaturas en varios grados, incluyendo Competencia Intercultural y Alemán para Principiantes.",
      card7Title: "KPMG Women at the Top",
      card7Desc: "Seleccionada por KPMG en sus programas Women at the Top (Auditoría, dos años; STEM).",
      card8Title: "Publicaciones en LinkedIn",
      card8Desc: "Artículos y publicaciones sobre data storytelling, confianza en el dato e IA.",
      card9Title: "Esta web",
      card9Desc: "Construida por mí con un agente de IA.",
      outsideWorkTitle: "Fuera del trabajo",
      outside1: "Guitarra y piano",
      outside2: "Acuarela, ahora aprendiendo pintura al óleo",
      outside3: "Escritura creativa",
      outside4: "Tenis — iniciado el año pasado para salir de mi zona de confort",
      outside5: "Entrenamiento de fuerza"
    },
    contact: {
      sectionTitle: "Contacto y Oportunidades",
      headline: "¿Hablamos? Estoy abierta a posiciones graduate en consultoría estratégica y de datos en Londres y España, a partir de junio de 2027.",
      emailLabel: "Correo Electrónico",
      emailValue: "bcereijosilva@gmail.com",
      linkedInLabel: "Perfil de LinkedIn",
      linkedInBtn: "Conectar en LinkedIn",
      cvSectionTitle: "Curriculum Vitae",
      downloadActiveCv: "Descargar CV (Español - Activo)",
      downloadEnCv: "Download CV in English (PDF)",
      downloadEsCv: "Descargar CV en Español (PDF)"
    },
    footer: {
      rights: "Belén Cereijo Silva · 2026/2027",
      builtWith: "Diseñada por mí, construida con un agente de IA en Google Antigravity."
    }
  }
};
