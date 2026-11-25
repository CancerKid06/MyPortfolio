export type Lang = 'en' | 'fr';

export interface MediaAssetSlot {
  src: string;
  alt: string;
  caption: string;
  hintPath: string;
}

export interface SiteDictionary {
  metaTitle: string;
  nav: {
    projects: string;
    experience: string;
    skills: string;
    leadership: string;
    cvLabel: string;
    cvHref: string;
    menuOpenLabel: string;
    menuCloseLabel: string;
  };
  hero: {
    name: string;
    originLine: string;
    headline: string;
    intro: string;
    availability: string;
    languagesLine: string;
    primaryCta: string;
    cvLinkLabel: string;
    emailLabel: string;
    linkedinLabel: string;
    visual: MediaAssetSlot;
  };
  fellahAi: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string;
    migrationNote: string;
    datasetNote: string;
    bugsHeading: string;
    bugs: Array<{
      title: string;
      detail: string;
    }>;
    stackLabel: string;
    stack: string[];
    reportLabel: string;
    reportHref: string;
    slidesLabel: string;
    slidesHref: string;
    appScreens: MediaAssetSlot;
    weatherScreen: MediaAssetSlot;
    diagram: MediaAssetSlot;
    diagramLabels: {
      client: string;
      backend: string;
      models: string;
      satellite: string;
      voice: string;
    };
  };
  idps: {
    eyebrow: string;
    title: string;
    lead: string;
    flowNote: string;
    labLabel: string;
    labSummary: string;
    labMetrics: Array<{
      value: string;
      label: string;
    }>;
    academicNote: string;
    reportLabel: string;
    reportHref: string;
    slidesLabel: string;
    slidesHref: string;
    linksTodoNote: string;
    dashboardScreen: MediaAssetSlot;
    alertScreen: MediaAssetSlot;
    terminalScreen: MediaAssetSlot;
    diagram: MediaAssetSlot;
    diagramLabels: {
      traffic: string;
      suricata: string;
      rf: string;
      iforest: string;
      fuzzy: string;
      action: string;
    };
  };
  otherProjects: {
    heading: string;
    recommenderTitle: string;
    recommenderYear: string;
    recommenderBody: string;
    smallerHeading: string;
    smallerItems: Array<{
      title: string;
      detail: string;
    }>;
  };
  experienceEducation: {
    experienceHeading: string;
    experiences: Array<{
      company: string;
      role: string;
      period: string;
      body: string;
    }>;
    educationHeading: string;
    educations: Array<{
      school: string;
      program: string;
      period: string;
      note: string;
    }>;
  };
  skillsLeadership: {
    skillsHeading: string;
    skillsHint: string;
    clearTagLabel: string;
    skillsFilters: Array<{
      id: 'all' | 'development' | 'security' | 'infrastructure';
      label: string;
    }>;
    skillCategories: Array<{
      id: string;
      filter: 'development' | 'security' | 'infrastructure';
      index: string;
      variant: 'accent-light' | 'neutral' | 'dark-featured' | 'bordered-white';
      title: string;
      subtitle: string;
      tags: Array<{
        name: string;
        context: string;
      }>;
    }>;
    leadershipHeading: string;
    leadershipItems: Array<{
      title: string;
      org: string;
      period: string;
      body: string;
    }>;
  };
  footer: {
    name: string;
    email: string;
    linkedinLabel: string;
    linkedinUrl: string;
  };
}

export const SHARED_CONTACT = {
  email: 'ali.aitoufkir.06@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/ali-ait-oufkir-03052006f',
};

const ASSETS = {
  cvPdf: './assets/aistudio/Ali_Aitoufkir_CV_882cf68c.pdf',
  heroPhoto: './assets/aistudio/hero.pic_1239e048.jpeg',
  fellahChatScreen: './assets/aistudio/Fellah_HomeScreen_ab3b5d71.jpg',
  fellahWeatherScreen: './assets/aistudio/Fellah_Screen_e37ceb7a.png',
  fellahPipeline: './assets/aistudio/Fellah_pipeline_926ce84f.png',
  fellahReport: './assets/aistudio/FellahAI_Report_85c03173.pdf',
  fellahSlides: './assets/aistudio/FellahAI_Presentation_1b0c1255.pdf',
  idpsHome: './assets/aistudio/IDPS_HOMe_cef04eac.png',
  idpsMonitor: './assets/aistudio/IDPS_Monitor_747f9340.png',
  idpsTerminal: './assets/aistudio/IDPS_Terminal_025f12d5.png',
  idpsReport: './assets/aistudio/IDPS_Report_a05b1e1c.pdf',
  idpsSlides: './assets/aistudio/IDPS_Presentation_047b280b.pdf',
};

export const SITE_CONTENT: Record<Lang, SiteDictionary> = {
  en: {
    metaTitle: 'Ali Aitoufkir — Cybersecurity & Trusted AI',
    nav: {
      projects: 'Projects',
      experience: 'Experience',
      skills: 'Skills',
      leadership: 'Leadership',
      cvLabel: 'CV',
      cvHref: ASSETS.cvPdf,
      menuOpenLabel: 'Open menu',
      menuCloseLabel: 'Close menu',
    },
    hero: {
      name: 'Ali Aitoufkir',
      originLine: '20 · From Ouled Teima (Agadir region), living in Settat, Morocco',
      headline: 'Cybersecurity and trusted AI engineering student.',
      intro:
        "I study cybersecurity and trusted AI at INNIA in Settat. During my 2026 internship at SobySoft, I built FellahAI, an Android assistant farmers can talk to in Darija.",
      availability: 'Available for internships and AI or security workshops.',
      languagesLine: 'Languages: Darija (native), English (C1), French (B1/B2).',
      primaryCta: 'See projects',
      cvLinkLabel: 'Download CV (PDF)',
      emailLabel: 'ali.aitoufkir.06@gmail.com',
      linkedinLabel: 'LinkedIn',
      visual: {
        src: ASSETS.heroPhoto,
        alt: 'Ali Aitoufkir speaking with a microphone at a laptop during a technical session',
        caption: 'Ali Aitoufkir presenting during a technical session',
        hintPath: 'public/assets/aistudio/hero.pic_1239e048.jpeg',
      },
    },
    fellahAi: {
      eyebrow: 'Mobile AI and remote sensing',
      title: 'FellahAI',
      lead:
        'An Android app written in Kotlin with Jetpack Compose that lets Moroccan farmers speak or write in Darija using the Gemini Live API.',
      body:
        'Behind the mobile client, a FastAPI backend runs a Random Forest crop classifier and a plant stress detector fed by Sentinel-2 satellite spectral indices (NDWI, EVI, SAVI).',
      migrationNote:
        'I started the mobile prototype in Flutter with FastAPI. I kept FastAPI on the backend and moved the app to native Kotlin because I wanted it to be 100% mobile-native, and Kotlin worked better for that.',
      datasetNote:
        'For training data, I cleaned a Souss-Massa dataset of around 60,000 rows covering 517 agricultural parcels.',
      bugsHeading: 'What broke and how I fixed it',
      bugs: [
        {
          title: 'Wrong NDWI formula',
          detail:
            'Water-stress values came out inverted until I checked the Sentinel-2 band order and corrected the normalized difference index calculation.',
        },
        {
          title: 'EVI and SAVI scaling bugs',
          detail:
            'Reflectance values were not scaled consistently before computing EVI and SAVI, which pushed indices outside valid bounds and skewed model inputs.',
        },
        {
          title: 'Gemini Live WebSocket debugging',
          detail:
            'Real-time Darija audio sessions dropped or stalled mid-turn until I traced frame boundaries and reconnect states over the WebSocket stream.',
        },
      ],
      stackLabel: 'Tools used',
      stack: ['Kotlin', 'Jetpack Compose', 'FastAPI', 'Gemini Live API', 'Random Forest', 'Sentinel-2'],
      reportLabel: 'Read the report',
      reportHref: ASSETS.fellahReport,
      slidesLabel: 'See the slides',
      slidesHref: ASSETS.fellahSlides,
      appScreens: {
        src: ASSETS.fellahChatScreen,
        alt: 'FellahAI Android screen showing a Darija conversation about citrus irrigation in Ouled Teima',
        caption: 'Darija voice and text assistant in the Kotlin Android app',
        hintPath: 'public/assets/aistudio/Fellah_HomeScreen_ab3b5d71.jpg',
      },
      weatherScreen: {
        src: ASSETS.fellahWeatherScreen,
        alt: 'FellahAI weather, evapotranspiration, and solar radiation forecast screen for Souss-Massa',
        caption: 'Souss-Massa weather, evapotranspiration (ET0), and solar radiation screen',
        hintPath: 'public/assets/aistudio/Fellah_Screen_e37ceb7a.png',
      },
      diagram: {
        src: ASSETS.fellahPipeline,
        alt: 'FellahAI five-layer architecture from Sentinel-2 data acquisition to the Kotlin Android app',
        caption: 'Five-layer FellahAI architecture diagram',
        hintPath: 'public/assets/aistudio/Fellah_pipeline_926ce84f.png',
      },
      diagramLabels: {
        client: 'Android app (Kotlin + Compose)',
        voice: 'Gemini Live API (Darija voice and text)',
        backend: 'FastAPI server',
        models: 'Random Forest (crop + stress)',
        satellite: 'Sentinel-2 indices (NDWI, EVI, SAVI)',
      },
    },
    idps: {
      eyebrow: 'Network security',
      title: 'Hybrid Intrusion Detection and Prevention System (IDPS)',
      lead:
        'Suricata catches known attacks by signature. For everything else, a Random Forest classifies each network flow (20-feature vector) and raises an alert when it is non-benign with over 60% confidence, while an Isolation Forest flags unusual behavior and possible zero-day activity when its anomaly score falls below -0.7.',
      flowNote:
        'Logged anomaly scores on suspicious runs ranged from -0.70 to -0.82. Fuzzy-logic rules cut false positives, a Django dashboard shows alerts live, and an iptables rule (IDPS_BLOCK) drops traffic from the attacker IP.',
      labLabel: 'Lab test results (simulated attacks)',
      labSummary:
        'Measured in a controlled lab setup with simulated attack traffic, not a production network.',
      labMetrics: [
        {
          value: '9 / 9',
          label: 'Simulated attack categories detected and blocked in lab tests',
        },
        {
          value: '100%',
          label: 'Packet loss from the blocked attacker IP, verified with ping and scans',
        },
        {
          value: '-0.70 to -0.82',
          label: 'Logged Isolation Forest anomaly scores triggering alerts below -0.7',
        },
      ],
      academicNote:
        'This is an academic project. I have the final report and presentation slides, and the source code is not published.',
      reportLabel: 'Read the report',
      reportHref: ASSETS.idpsReport,
      slidesLabel: 'See the slides',
      slidesHref: ASSETS.idpsSlides,
      linksTodoNote: '',
      dashboardScreen: {
        src: ASSETS.idpsHome,
        alt: 'Django IDPS dashboard showing total alerts, critical threats, known attacks, and anomalies',
        caption: 'Django IDPS live summary dashboard',
        hintPath: 'public/assets/aistudio/IDPS_HOMe_cef04eac.png',
      },
      alertScreen: {
        src: ASSETS.idpsMonitor,
        alt: 'Recent alerts log showing Isolation Forest anomaly scores between -0.70 and -0.82',
        caption: 'Recent alerts table with Isolation Forest anomaly scores (-0.70 to -0.82)',
        hintPath: 'public/assets/aistudio/IDPS_Monitor_747f9340.png',
      },
      terminalScreen: {
        src: ASSETS.idpsTerminal,
        alt: 'Terminal output running an Nmap SYN scan against the lab target',
        caption: 'Lab simulation: Nmap SYN scan from the attacker VM',
        hintPath: 'public/assets/aistudio/IDPS_Terminal_025f12d5.png',
      },
      diagram: {
        src: '',
        alt: 'IDPS pipeline from packet capture through Suricata, ML models, fuzzy logic, Django, and iptables',
        caption: 'Detection and blocking pipeline',
        hintPath: '',
      },
      diagramLabels: {
        traffic: 'Network traffic',
        suricata: 'Suricata signatures',
        rf: 'Random Forest (>60% confidence)',
        iforest: 'Isolation Forest (score < -0.7)',
        fuzzy: 'Fuzzy-logic filter',
        action: 'Django live UI + iptables IDPS_BLOCK',
      },
    },
    otherProjects: {
      heading: 'Other coursework and smaller builds',
      recommenderTitle: 'Movie recommender',
      recommenderYear: '2024 course project',
      recommenderBody:
        'I built this recommender with collaborative filtering and cosine similarity. In a test of 200 user trials where participants rated satisfaction out of 10, 76% of trials scored 7 or higher.',
      smallerHeading: 'Smaller builds',
      smallerItems: [
        {
          title: 'Secure PHP/SQL web app (2023)',
          detail: 'Password hashing, secure session handling, and CSRF protection built from scratch.',
        },
        {
          title: 'Flask movie personality quiz',
          detail: 'Small Flask web app matching user answers to movie recommendations.',
        },
        {
          title: 'First-year C/MySQL/GTK database app',
          detail: 'Desktop database interface written in C with GTK backed by MySQL.',
        },
      ],
    },
    experienceEducation: {
      experienceHeading: 'Experience',
      experiences: [
        {
          company: 'SobySoft',
          role: 'Cybersecurity and L1 support intern',
          period: 'Apr – Jun 2026',
          body:
            'I worked on web project security, fixing cross-origin (CORS) issues, password hashing, Broken Access Control, plus Security Logging and Alerting Failures from the OWASP categories. I also handled L1 technical support for clients.',
        },
        {
          company: 'Vala Bleu (Agadir)',
          role: 'Web security and automation intern',
          period: '2024',
          body:
            'I hardened the online payment system by enforcing multi-factor authentication and least-privilege access alongside real-time monitoring of third-party scripts and transactions. I also wrote Python scripts for content translation and URL shortening, and helped manage domain and hosting infrastructure.',
        },
      ],
      educationHeading: 'Education',
      educations: [
        {
          school: 'INNIA, Université Hassan 1er, Settat',
          program: 'Engineering cycle (Bac+5) in Génie de la Cybersécurité & IA de Confiance',
          period: '2026 – present',
          note: 'Engineering cycle, first year, started autumn 2026.',
        },
        {
          school: 'EST Kelaa des Sraghna, Université Cadi Ayyad',
          program: 'DUT in Réseaux, Cybersécurité et IA',
          period: '2024 – 2026',
          note: '15.52/20, top of my cohort.',
        },
        {
          school: 'Lycée Abdellah Chefchaouni',
          program: 'Bac Sciences Mathématiques',
          period: '2021 – 2024',
          note: 'Mathematics track.',
        },
      ],
    },
    skillsLeadership: {
      skillsHeading: 'Skills',
      skillsHint: 'Click any skill tag to see where I applied it.',
      clearTagLabel: 'Clear',
      skillsFilters: [
        { id: 'all', label: 'All' },
        { id: 'development', label: 'Development & ML' },
        { id: 'security', label: 'Security' },
        { id: 'infrastructure', label: 'Networking & Cloud' },
      ],
      skillCategories: [
        {
          id: 'backend-ml',
          filter: 'development',
          index: '01',
          variant: 'accent-light',
          title: 'Backend, web and ML',
          subtitle: 'APIs, server frameworks, and machine learning tools',
          tags: [
            {
              name: 'Python',
              context:
                'Used across FellahAI (FastAPI), the Hybrid IDPS (Django, scikit-learn), the movie recommender, and automation scripts at Vala Bleu.',
            },
            {
              name: 'FastAPI',
              context:
                'Backend API serving Random Forest crop classification and plant stress detection in FellahAI.',
            },
            {
              name: 'Django',
              context:
                'Live alert monitoring dashboard for the Hybrid IDPS academic project.',
            },
            {
              name: 'Flask',
              context: 'Web backend for the movie personality quiz project.',
            },
            {
              name: 'scikit-learn',
              context:
                'Random Forest models for FellahAI and IDPS, plus Isolation Forest anomaly detection.',
            },
            {
              name: 'NumPy',
              context:
                'Numerical vector processing for Sentinel-2 spectral indices and 20-feature network flow inputs.',
            },
            {
              name: 'PHP (Laravel)',
              context:
                'Secure PHP/SQL web app (2023), Laravel work, and PHP security club sessions at RoDevBoot.',
            },
            {
              name: 'SQL',
              context:
                'Database queries in the secure PHP/SQL web app (2023) and the C/MySQL desktop app.',
            },
          ],
        },
        {
          id: 'mobile-systems',
          filter: 'development',
          index: '02',
          variant: 'neutral',
          title: 'Mobile and systems',
          subtitle: 'Android clients, desktop tools, and statistical coursework',
          tags: [
            {
              name: 'Kotlin',
              context:
                'Native Android client for FellahAI communicating with FastAPI and Gemini Live.',
            },
            {
              name: 'Jetpack Compose',
              context:
                'Android UI toolkit used for the Darija chat and Souss-Massa weather screens in FellahAI.',
            },
            {
              name: 'Flutter',
              context:
                'Initial mobile prototype framework before moving the FellahAI client to native Kotlin.',
            },
            {
              name: 'C',
              context:
                'First-year desktop database interface built in C with GTK backed by MySQL.',
            },
            {
              name: 'R',
              context: 'Statistical computing and data analysis coursework.',
            },
          ],
        },
        {
          id: 'security-defense',
          filter: 'security',
          index: '03',
          variant: 'dark-featured',
          title: 'Security and defense',
          subtitle: 'Intrusion detection, firewalls, and web vulnerability training',
          tags: [
            {
              name: 'Suricata',
              context:
                'Signature-based intrusion detection stage in the Hybrid IDPS pipeline.',
            },
            {
              name: 'Kali Linux',
              context:
                'Lab testing environment used for simulated attacks against the Hybrid IDPS.',
            },
            {
              name: 'pfSense',
              context:
                'Firewall configuration and perimeter security labs during DUT coursework.',
            },
            {
              name: 'PortSwigger Web Security Academy training',
              context:
                'Web security training aligned with OWASP fixes (CORS, Broken Access Control, logging) applied at SobySoft.',
            },
          ],
        },
        {
          id: 'networking-cloud',
          filter: 'infrastructure',
          index: '04',
          variant: 'bordered-white',
          title: 'Networking and infrastructure',
          subtitle: 'Routing, switching topologies, containers, and cloud labs',
          tags: [
            {
              name: 'Cisco IOS',
              context:
                'Router and switch CLI configuration during networking coursework at EST Kelaa.',
            },
            {
              name: 'Packet Tracer',
              context:
                'Network topology simulation for VLANs and routing protocol labs.',
            },
            {
              name: 'GNS3',
              context:
                'Virtual network emulation for multi-router routing and firewall topologies.',
            },
            {
              name: 'VLANs',
              context:
                'Layer-2 network segmentation configured in switching lab exercises.',
            },
            {
              name: 'Static routing',
              context:
                'Manual route configuration across multi-subnet lab topologies.',
            },
            {
              name: 'RIPv2',
              context:
                'Dynamic distance-vector routing configured in Cisco IOS and GNS3 labs.',
            },
            {
              name: 'Docker',
              context:
                'Containerized service packaging and isolated lab environments.',
            },
            {
              name: 'OpenStack',
              context:
                'Private cloud VM and virtual networking coursework.',
            },
          ],
        },
      ],
      leadershipHeading: 'Leadership and clubs',
      leadershipItems: [
        {
          title: 'Founder',
          org: 'INNIA Sports & Gaming Club (ISGC)',
          period: 'Started 2026',
          body:
            'I started the club this year, now 50+ members, run by a committee of sport coordinators across football, gaming, tennis, and more.',
        },
        {
          title: 'President',
          org: 'RoDevBoot IT Club, EST Kelaa',
          period: '2024 – 2026',
          body:
            'I led a club of around 100 members with sessions on math, machine learning, using AI, and PHP security. I organized hackathons and served as lead organizer of the Opération Cortex coding competition (around 70 participants).',
        },
        {
          title: 'Scout member',
          org: 'Scouts du Maroc, Agadir province',
          period: '2017 – 2020',
          body:
            'I took part in regular scout activities alongside digital design (Illustrator, Photoshop), public speaking, and personal development projects.',
        },
      ],
    },
    footer: {
      name: 'Ali Aitoufkir',
      email: SHARED_CONTACT.email,
      linkedinLabel: 'LinkedIn',
      linkedinUrl: SHARED_CONTACT.linkedinUrl,
    },
  },
  fr: {
    metaTitle: 'Ali Aitoufkir — Cybersécurité & IA de Confiance',
    nav: {
      projects: 'Projets',
      experience: 'Parcours',
      skills: 'Compétences',
      leadership: 'Vie associative',
      cvLabel: 'CV',
      cvHref: ASSETS.cvPdf,
      menuOpenLabel: 'Ouvrir le menu',
      menuCloseLabel: 'Fermer le menu',
    },
    hero: {
      name: 'Ali Aitoufkir',
      originLine: "20 ans · Originaire d'Ouled Teima (région d'Agadir), basé à Settat, Maroc",
      headline: 'Étudiant ingénieur en cybersécurité et IA de confiance.',
      intro:
        "J'étudie le génie de la cybersécurité et l'IA de confiance à l'INNIA à Settat. Pendant mon stage chez SobySoft en 2026, j'ai conçu FellahAI, un assistant Android avec lequel on échange en darija.",
      availability: "Disponible pour des stages et des ateliers autour de l'IA ou de la sécurité.",
      languagesLine: 'Langues : darija (natif), anglais (C1), français (B1/B2).',
      primaryCta: 'Voir les projets',
      cvLinkLabel: 'Télécharger le CV (PDF)',
      emailLabel: 'ali.aitoufkir.06@gmail.com',
      linkedinLabel: 'LinkedIn',
      visual: {
        src: ASSETS.heroPhoto,
        alt: "Ali Aitoufkir prenant la parole au micro devant son ordinateur lors d'une présentation",
        caption: "Ali Aitoufkir lors d'une présentation technique",
        hintPath: 'public/assets/aistudio/hero.pic_1239e048.jpeg',
      },
    },
    fellahAi: {
      eyebrow: 'IA mobile et télédétection',
      title: 'FellahAI',
      lead:
        "Une application Android en Kotlin avec Jetpack Compose qui permet aux agriculteurs marocains d'échanger à l'oral ou par écrit en darija grâce à l'API Gemini Live.",
      body:
        "Côté serveur, un backend FastAPI exécute un classifieur Random Forest pour les cultures et un détecteur de stress végétal basé sur les indices spectraux Sentinel-2 (NDWI, EVI, SAVI).",
      migrationNote:
        "J'ai commencé le prototype mobile sous Flutter avec FastAPI. J'ai gardé FastAPI pour le serveur et migré l'application vers Kotlin natif pour obtenir une app 100 % mobile, Kotlin étant la solution la plus adaptée.",
      datasetNote:
        "Pour l'entraînement, j'ai nettoyé un jeu de données du Souss-Massa d'environ 60 000 lignes couvrant 517 parcelles agricoles.",
      bugsHeading: 'Ce qui a cassé et comment je l’ai corrigé',
      bugs: [
        {
          title: 'Formule NDWI erronée',
          detail:
            "Les valeurs de stress hydrique sortaient inversées jusqu'à ce que je vérifie l'ordre des bandes Sentinel-2 et corrige le calcul d'indice normalisé.",
        },
        {
          title: "Erreurs d'échelle sur EVI et SAVI",
          detail:
            "Les valeurs de réflectance n'étaient pas remises à la même échelle avant le calcul d'EVI et de SAVI, ce qui faussait les bornes des indices envoyés au modèle.",
        },
        {
          title: 'Débogage WebSocket avec Gemini Live',
          detail:
            "Les sessions vocales en darija coupaient ou bloquaient en plein échange avant que je ne corrige le découpage des trames et les reconnexions WebSocket.",
        },
      ],
      stackLabel: 'Outils utilisés',
      stack: ['Kotlin', 'Jetpack Compose', 'FastAPI', 'Gemini Live API', 'Random Forest', 'Sentinel-2'],
      reportLabel: 'Lire le rapport',
      reportHref: ASSETS.fellahReport,
      slidesLabel: 'Voir la présentation',
      slidesHref: ASSETS.fellahSlides,
      appScreens: {
        src: ASSETS.fellahChatScreen,
        alt: "Écran Android de FellahAI montrant une discussion en darija sur l'irrigation des agrumes à Ouled Teima",
        caption: "Assistant vocal et texte en darija sur l'application Android Kotlin",
        hintPath: 'public/assets/aistudio/Fellah_HomeScreen_ab3b5d71.jpg',
      },
      weatherScreen: {
        src: ASSETS.fellahWeatherScreen,
        alt: "Écran météo Souss-Massa avec évapotranspiration ET0 et rayonnement solaire sur 7 jours",
        caption: 'Météo Souss-Massa, évapotranspiration (ET0) et rayonnement solaire',
        hintPath: 'public/assets/aistudio/Fellah_Screen_e37ceb7a.png',
      },
      diagram: {
        src: ASSETS.fellahPipeline,
        alt: "Architecture en 5 couches de FellahAI, de l'API Sentinel-2 à l'application Kotlin",
        caption: 'Schéma d’architecture en 5 couches de FellahAI',
        hintPath: 'public/assets/aistudio/Fellah_pipeline_926ce84f.png',
      },
      diagramLabels: {
        client: 'App Android (Kotlin + Compose)',
        voice: 'Gemini Live API (voix et texte darija)',
        backend: 'Serveur FastAPI',
        models: 'Random Forest (culture + stress)',
        satellite: 'Indices Sentinel-2 (NDWI, EVI, SAVI)',
      },
    },
    idps: {
      eyebrow: 'Sécurité réseau',
      title: "Système hybride de détection et de prévention d'intrusion (IDPS)",
      lead:
        "Suricata repère les attaques connues par signature. Pour le reste, un Random Forest classe chaque flux réseau (vecteur de 20 variables) et déclenche une alerte s'il est non bénin avec plus de 60 % de confiance, tandis qu'une Isolation Forest signale les comportements inhabituels et d'éventuels zero-day dès que son score passe sous -0,7.",
      flowNote:
        "Sur les séquences suspectes journalisées, les scores d'anomalie allaient de -0,70 à -0,82. Des règles de logique floue limitent les faux positifs, un tableau de bord Django affiche les alertes en direct, et une règle iptables (IDPS_BLOCK) bloque l'IP de l'attaquant.",
      labLabel: 'Résultats en laboratoire (attaques simulées)',
      labSummary:
        'Mesurés en environnement de test contrôlé avec du trafic simulé, pas sur un réseau en production.',
      labMetrics: [
        {
          value: '9 / 9',
          label: "Catégories d'attaques simulées détectées et bloquées lors des tests en labo",
        },
        {
          value: '100 %',
          label: "Perte de paquets depuis l'IP attaquante bloquée, vérifiée par ping et scans",
        },
        {
          value: '-0,70 à -0,82',
          label: "Scores d'anomalie Isolation Forest relevés sous le seuil de -0,7",
        },
      ],
      academicNote:
        "Projet académique : je dispose du rapport final et de la présentation, mais le code source n'est pas publié.",
      reportLabel: 'Lire le rapport',
      reportHref: ASSETS.idpsReport,
      slidesLabel: 'Voir la présentation',
      slidesHref: ASSETS.idpsSlides,
      linksTodoNote: '',
      dashboardScreen: {
        src: ASSETS.idpsHome,
        alt: "Tableau de bord Django de l'IDPS affichant les compteurs d'alertes en direct",
        caption: 'Vue générale du tableau de bord Django IDPS',
        hintPath: 'public/assets/aistudio/IDPS_HOMe_cef04eac.png',
      },
      alertScreen: {
        src: ASSETS.idpsMonitor,
        alt: "Journal des alertes récentes montrant les scores Isolation Forest entre -0,70 et -0,82",
        caption: "Journal des alertes avec scores d'anomalie Isolation Forest (-0,70 à -0,82)",
        hintPath: 'public/assets/aistudio/IDPS_Monitor_747f9340.png',
      },
      terminalScreen: {
        src: ASSETS.idpsTerminal,
        alt: 'Sortie terminal montrant un scan de ports Nmap SYN en laboratoire',
        caption: 'Simulation en laboratoire : scan SYN Nmap depuis la machine attaquante',
        hintPath: 'public/assets/aistudio/IDPS_Terminal_025f12d5.png',
      },
      diagram: {
        src: '',
        alt: 'Chaîne de traitement IDPS de la capture réseau à Suricata, ML, logique floue, Django et iptables',
        caption: 'Chaîne de détection et de blocage',
        hintPath: '',
      },
      diagramLabels: {
        traffic: 'Trafic réseau',
        suricata: 'Signatures Suricata',
        rf: 'Random Forest (confiance > 60 %)',
        iforest: 'Isolation Forest (score < -0,7)',
        fuzzy: 'Filtre logique floue',
        action: 'Vue Django en direct + iptables IDPS_BLOCK',
      },
    },
    otherProjects: {
      heading: 'Autres travaux et petits projets',
      recommenderTitle: 'Moteur de recommandation de films',
      recommenderYear: 'Projet de cours 2024',
      recommenderBody:
        "J'ai conçu ce moteur par filtrage collaboratif avec similarité cosinus. Sur 200 essais où les participants notaient leur satisfaction sur 10, 76 % des essais ont obtenu au moins 7/10.",
      smallerHeading: 'Réalisations plus courtes',
      smallerItems: [
        {
          title: 'Application web sécurisée en PHP et SQL (2023)',
          detail: 'Hachage des mots de passe, gestion sécurisée des sessions et protection CSRF codés de zéro.',
        },
        {
          title: 'Quiz de personnalité cinéma sous Flask',
          detail: 'Petite application Flask qui associe les réponses du questionnaire à des suggestions de films.',
        },
        {
          title: 'Application C / MySQL / GTK de première année',
          detail: 'Interface bureau de gestion de base de données écrite en C avec GTK et MySQL.',
        },
      ],
    },
    experienceEducation: {
      experienceHeading: 'Expérience',
      experiences: [
        {
          company: 'SobySoft',
          role: 'Stagiaire cybersécurité et support N1',
          period: 'Avr – Juin 2026',
          body:
            "J'ai travaillé sur la sécurité de projets web : correction de problèmes CORS, hachage de mots de passe, failles de contrôle d'accès (Broken Access Control) et insuffisances de journalisation et d'alerte (catégories OWASP). J'ai aussi assuré le support technique de niveau 1 auprès des clients.",
        },
        {
          company: 'Vala Bleu (Agadir)',
          role: 'Stagiaire sécurité web et automatisation',
          period: '2024',
          body:
            "J'ai sécurisé le système de paiement en ligne avec l'authentification multifacteur, le moindre privilège et le suivi en temps réel des scripts tiers et des transactions. J'ai écrit des scripts Python pour automatiser la traduction de contenu et le raccourcissement d'URL, et aidé à gérer les domaines et l'hébergement.",
        },
      ],
      educationHeading: 'Formation',
      educations: [
        {
          school: 'INNIA, Université Hassan 1er, Settat',
          program: 'Cycle ingénieur (Bac+5) en Génie de la Cybersécurité & IA de Confiance',
          period: '2026 – présent',
          note: "Cycle ingénieur, première année, rentrée d'automne 2026.",
        },
        {
          school: 'EST Kelaa des Sraghna, Université Cadi Ayyad',
          program: 'DUT Réseaux, Cybersécurité et IA',
          period: '2024 – 2026',
          note: '15,52/20 de moyenne, parmi les majors de promotion.',
        },
        {
          school: 'Lycée Abdellah Chefchaouni',
          program: 'Baccalauréat Sciences Mathématiques',
          period: '2021 – 2024',
          note: 'Filière sciences mathématiques.',
        },
      ],
    },
    skillsLeadership: {
      skillsHeading: 'Compétences',
      skillsHint: 'Cliquez sur une compétence pour voir où je l’ai utilisée.',
      clearTagLabel: 'Effacer',
      skillsFilters: [
        { id: 'all', label: 'Tout' },
        { id: 'development', label: 'Développement & ML' },
        { id: 'security', label: 'Sécurité' },
        { id: 'infrastructure', label: 'Réseaux & Cloud' },
      ],
      skillCategories: [
        {
          id: 'backend-ml',
          filter: 'development',
          index: '01',
          variant: 'accent-light',
          title: 'Backend, web et ML',
          subtitle: 'API, frameworks serveur et outils de machine learning',
          tags: [
            {
              name: 'Python',
              context:
                "Utilisé pour FellahAI (FastAPI), l'IDPS hybride (Django, scikit-learn), le moteur de recommandation et les scripts d'automatisation chez Vala Bleu.",
            },
            {
              name: 'FastAPI',
              context:
                'Serveur API exécutant la classification Random Forest et la détection de stress végétal dans FellahAI.',
            },
            {
              name: 'Django',
              context:
                "Tableau de bord en direct des alertes pour le projet académique d'IDPS hybride.",
            },
            {
              name: 'Flask',
              context: 'Backend web du quiz de personnalité cinéma.',
            },
            {
              name: 'scikit-learn',
              context:
                "Modèles Random Forest (FellahAI et IDPS) et détection d'anomalies Isolation Forest.",
            },
            {
              name: 'NumPy',
              context:
                'Calcul numérique sur les indices spectraux Sentinel-2 et les vecteurs de flux réseau à 20 variables.',
            },
            {
              name: 'PHP (Laravel)',
              context:
                'Application web sécurisée en PHP/SQL (2023), travaux sous Laravel et séances de sécurité PHP au club RoDevBoot.',
            },
            {
              name: 'SQL',
              context:
                "Requêtes et schémas de bases de données pour l'application PHP/SQL (2023) et l'outil bureau C/MySQL.",
            },
          ],
        },
        {
          id: 'mobile-systems',
          filter: 'development',
          index: '02',
          variant: 'neutral',
          title: 'Mobile et systèmes',
          subtitle: 'Clients Android, outils bureau et calcul statistique',
          tags: [
            {
              name: 'Kotlin',
              context:
                'Client Android natif de FellahAI connecté à FastAPI et Gemini Live.',
            },
            {
              name: 'Jetpack Compose',
              context:
                'Interface Android utilisée pour la discussion en darija et la météo Souss-Massa dans FellahAI.',
            },
            {
              name: 'Flutter',
              context:
                'Premier prototype mobile avant la migration de FellahAI vers Kotlin natif.',
            },
            {
              name: 'C',
              context:
                'Application bureau de première année écrite en C avec GTK et MySQL.',
            },
            {
              name: 'R',
              context: 'Travaux pratiques en statistiques et analyse de données.',
            },
          ],
        },
        {
          id: 'security-defense',
          filter: 'security',
          index: '03',
          variant: 'dark-featured',
          title: 'Sécurité et défense',
          subtitle: 'Détection d’intrusion, pare-feu et sécurité applicative',
          tags: [
            {
              name: 'Suricata',
              context:
                "Étage de détection par signatures dans la chaîne de traitement de l'IDPS hybride.",
            },
            {
              name: 'Kali Linux',
              context:
                "Environnement de laboratoire utilisé pour simuler les attaques contre l'IDPS hybride.",
            },
            {
              name: 'pfSense',
              context:
                'Travaux pratiques de pare-feu et de filtrage périmétrique en DUT.',
            },
            {
              name: 'Parcours PortSwigger Web Security Academy',
              context:
                "Formation sécurité web alignée sur les correctifs OWASP (CORS, Broken Access Control, journalisation) appliqués chez SobySoft.",
            },
          ],
        },
        {
          id: 'networking-cloud',
          filter: 'infrastructure',
          index: '04',
          variant: 'bordered-white',
          title: 'Réseaux et infrastructure',
          subtitle: 'Routage, topologies, conteneurs et environnements cloud',
          tags: [
            {
              name: 'Cisco IOS',
              context:
                'Configuration en ligne de commande de routeurs et commutateurs à l’EST Kelaa.',
            },
            {
              name: 'Packet Tracer',
              context:
                'Simulation de topologies réseau pour les TP VLAN et routage.',
            },
            {
              name: 'GNS3',
              context:
                'Émulation de réseaux virtuels multi-routeurs et pare-feu.',
            },
            {
              name: 'VLANs',
              context:
                'Segmentation réseau de niveau 2 configurée lors des travaux pratiques.',
            },
            {
              name: 'Routage statique',
              context:
                'Configuration manuelle de tables de routage entre sous-réseaux en laboratoire.',
            },
            {
              name: 'RIPv2',
              context:
                'Protocole de routage dynamique configuré sous Cisco IOS et GNS3.',
            },
            {
              name: 'Docker',
              context:
                'Conteneurisation de services et isolation d’environnements de test.',
            },
            {
              name: 'OpenStack',
              context:
                'Travaux pratiques de machines virtuelles et réseaux virtuels en cloud privé.',
            },
          ],
        },
      ],
      leadershipHeading: 'Engagements et clubs',
      leadershipItems: [
        {
          title: 'Fondateur',
          org: 'INNIA Sports & Gaming Club (ISGC)',
          period: 'Créé en 2026',
          body:
            "J'ai fondé le club cette année (plus de 50 membres aujourd'hui), géré par un comité de coordinateurs par discipline : football, gaming, tennis et d'autres.",
        },
        {
          title: 'Président',
          org: 'Club informatique RoDevBoot, EST Kelaa',
          period: '2024 – 2026',
          body:
            "J'ai animé un club d'environ 100 membres avec des séances en mathématiques, machine learning, usage de l'IA et sécurité PHP. J'ai organisé des hackathons et j'ai été l'organisateur principal de la compétition de code Opération Cortex (environ 70 participants).",
        },
        {
          title: 'Membre scout',
          org: "Scouts du Maroc, province d'Agadir",
          period: '2017 – 2020',
          body:
            "J'ai participé aux activités scoutes habituelles ainsi qu'à des projets de création numérique (Illustrator, Photoshop), de prise de parole en public et de développement personnel.",
        },
      ],
    },
    footer: {
      name: 'Ali Aitoufkir',
      email: SHARED_CONTACT.email,
      linkedinLabel: 'LinkedIn',
      linkedinUrl: SHARED_CONTACT.linkedinUrl,
    },
  },
};
