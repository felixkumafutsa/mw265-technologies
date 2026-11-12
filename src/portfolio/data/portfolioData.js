export const portfolioData = {
  name: "Felix Kumafutsa",
  title: "Full Stack Software Developer | IoT Specialist | AI Engineer",
  tagline: "Building scalable web applications, IoT solutions, and AI-driven systems with expertise in full-stack development and digital innovation",
  
  about: {
    summary: "Full-Stack Software Developer with expertise in building scalable web applications, integrating APIs, and developing secure digital systems. Skilled in computer networking, IoT solutions, and AI-driven applications.",
    description: "Experienced in system architecture, database design, and deploying production-ready platforms that enhance performance and automation. Passionate about creating innovative solutions that bridge cutting-edge technology with practical business needs."
  },

  skills: {
    programming: [
      { name: "Python", icon: "devicon-python-plain", level: 90 },
      { name: "JavaScript", icon: "devicon-javascript-plain", level: 85 },
      { name: "Java", icon: "devicon-java-plain", level: 80 },
      { name: "C++", icon: "devicon-cplusplus-plain", level: 75 }
    ],
    frontend: [
      { name: "React", icon: "devicon-react-original", level: 90 },
      { name: "HTML5", icon: "devicon-html5-plain", level: 95 },
      { name: "CSS3", icon: "devicon-css3-plain", level: 90 },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", level: 85 },
      { name: "Angular JS", icon: "devicon-angularjs-plain", level: 80 },
      { name: "Next.js", icon: "nextjs", level: 80 }
    ],
    backend: [
      { name: "Node.js", icon: "devicon-nodejs-plain", level: 85 },
      { name: "Node + Express", icon: "devicon-express-original", level: 85 },
      { name: "Nest.js", icon: "nestjs", level: 80 },
      { name: "REST APIs", icon: "api", level: 95 },
      { name: "Authentication", icon: "shield", level: 80 }
    ],
    databases: [
      { name: "PostgreSQL", icon: "database", level: 60 },
      { name: "MySQL", icon: "database", level: 85 },
      { name: "SQLite", icon: "database", level: 80 },
      { name: "SQL", icon: "database", level: 90 },
      { name: "MongoDB", icon: "devicon-mongodb-plain", level: 70 }
    ],
    dataScience: [
      { name: "Pandas", icon: "brain", level: 80 },
      { name: "Matplotlib", icon: "brain", level: 75 },
      { name: "OpenCV", icon: "brain", level: 70 }
    ],
    mobile: [
      { name: "Java", icon: "devicon-java-plain", level: 80 },
      { name: "Kotlin", icon: "devicon-kotlin-plain", level: 75 },
      { name: "React Native", icon: "devicon-react-original", level: 78 },
      { name: ".NET MAUI", icon: "dotnet", level: 70 }
    ],
    iot: [
      { name: "Internet of Things", icon: "iot", level: 95 },
      { name: "Arduino", icon: "chip", level: 88 },
      { name: "ESP01", icon: "chip", level: 85 },
      { name: "ESP32", icon: "chip", level: 90 },
      { name: "ESP8266 (NodeMCU)", icon: "chip", level: 87 },
      { name: "Raspberry Pi", icon: "chip", level: 90 },
      { name: "Node-RED", icon: "node-red", level: 80 },
      { name: "MQTT", icon: "mqtt", level: 80 },
      { name: "Arduino Cloud", icon: "cloud", level: 80 }
    ],
    design3D: [
      { name: "Blender", icon: "devicon-blender-plain", level: 82 },
      { name: "FreeCAD", icon: "devicon-figma-plain", level: 77 }
    ]
  },

  projects: [
    {
      id: "hospital-management-saas",
      title: "Hospital Management System SaaS",
      description: "A cloud-based platform designed to help healthcare providers manage day-to-day hospital operations and patient information.",
      technologies: ["SaaS", "Healthcare"],
      demo: "https://betterlife-web.vercel.app/",
      image: "/portfolio/images/projects/SpenFel Hospital Management System Banner.png"
    },
    {
      id: "intelligent-school-management-saas",
      title: "Intelligent School Management System SaaS",
      description: "A cloud-based school administration platform designed to connect school operations, student information, and communication in one system.",
      technologies: ["SaaS", "Education"],
      demo: "https://intelligent-school-management-syste.vercel.app/",
      image: null
    },
    {
      id: "technical-skills-and-innovation-lab",
      title: "Technical Skills and Innovation Lab",
      description: "A hands-on learning and innovation space focused on developing practical technical skills through training, experimentation, and project-based work.",
      technologies: ["Technical Training", "Innovation", "STEM"],
      image: "/portfolio/images/projects/SpenFel Technical Skills Lab.png"
    },
    {
      id: "saferide-malawi",
      title: "SafeRide Malawi",
      description: "A mobility and transport safety product for Malawi, designed to make safer, more reliable rides easier to access.",
      technologies: ["Mobility", "Transport", "Safety"],
      image: null
    },
    {
      id: "learning-and-teaching-companion",
      title: "Learning and Teaching Companion",
      description: "A digital companion supporting teaching and learning activities, helping educators and learners stay organized and connected.",
      technologies: ["Education", "Learning Tools"],
      image: null
    },
    {
      id: 1,
      title: "MedCard Medical RFID System",
      description: "Secure medical identification system using RFID technology for patient tracking and medical record management.",
      technologies: ["ESP32", "RFID", "Node.js", "MariaDB", "REST API"],
      github: "https://github.com/felixkumafutsa",
      demo: "https://felixkumafutsa.github.io",
      image: "/portfolio/images/projects/medcard.png"
    },
    {
      id: 2,
      title: "AUDITSOFT Enterprise Software",
      description: "Comprehensive enterprise auditing software for compliance management, risk assessment, and automated audit workflows with detailed reporting.",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "JWT", "PDF Generation"],
      github: "https://github.com/felixkumafutsa",
      demo: "https://felixkumafutsa.github.io",
      image: "/portfolio/images/projects/auditsoft.png"
    },
    {
      id: 3,
      title: "Farm Inputs Rental Platform",
      description: "Agricultural inputs management system for renting farming equipment, seeds, and fertilizers with inventory tracking and farmer verification.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Geolocation", "SMS Integration"],
      github: "https://github.com/felixkumafutsa",
      demo: "https://smart-farm-frontend.vercel.app/",
      image: "/portfolio/images/projects/farmrent.png"
    },
    {
      id: 5,
      title: "SpenFel Crypto",
      description: "Crypto-based payment settlement system enabling seamless cross-border transactions without friction, allowing users to buy and sell goods/services globally using cryptocurrency.",
      technologies: ["Blockchain", "Node.js", "React", "Web3.js", "Smart Contracts", "MongoDB", "Stripe API"],
      github: "https://github.com/felixkumafutsa",
      demo: "https://felixkumafutsa.github.io",
      image: "/portfolio/images/projects/mwcryptopay.png"
    },
    {
      id: 6,
      title: "Solar Power Plant Monitoring System",
      description: "Comprehensive IoT-based monitoring system for solar power plants with real-time energy production tracking, performance analytics, and predictive maintenance alerts.",
      technologies: ["ESP32", "Solar Sensors", "React", "Node.js", "MQTT", "InfluxDB", "Grafana", "WebSocket"],
      github: "https://github.com/felixkumafutsa",
      demo: "https://felixkumafutsa.github.io",
      image: "/portfolio/images/projects/solar.png"
    },
    {
      id: 7,
      title: "IoT SmartBin System",
      description: "Intelligent waste management system with ultrasonic sensors for fill-level detection, automated collection scheduling, and real-time dashboard for municipal authorities.",
      technologies: ["ESP32", "Ultrasonic Sensors", "LoRaWAN", "React", "MongoDB", "GPS", "SMS Gateway"],
      github: "https://github.com/felixkumafutsa",
      demo: "https://felixkumafutsa.github.io",
      image: "/portfolio/images/projects/smartbin.png"
    },
    {
      id: 8,
      title: "IoT Monitoring Gateway",
      description: "Universal IoT gateway platform enabling users to connect and monitor various IoT devices through a centralized dashboard with real-time data visualization and alert management.",
      technologies: ["Raspberry Pi", "MQTT Broker", "React", "Node.js", "WebSocket", "PostgreSQL", "Docker", "REST API"],
      github: "https://github.com/felixkumafutsa",
      demo: "https://felixkumafutsa.github.io",
      image: "/portfolio/images/projects/iot monitoring gateway.png"
    },
    {
      id: 9,
      title: "Fingerprint Attendance System",
      description: "Biometric attendance system with fingerprint recognition, real-time tracking, and analytics dashboard.",
      technologies: ["ESP32", "R503 Sensor", "REST API", "MongoDB", "React"],
      github: "https://github.com/felixkumafutsa",
      demo: "https://felixkumafutsa.github.io",
      image: "/portfolio/images/projects/fingerprint.png"
    }
  ],

  experience: [
    {
      id: 1,
      title: "Full Stack Software Developer",
      company: "Kapeleta",
      period: "January 2026 – Present",
      description: "Develop and deploy full-stack applications, implementing scalable frontend interfaces and backend services. Architect and maintain RESTful APIs, authentication systems, and database schemas, ensuring secure and efficient data processing.",
      type: "work"
    },
    {
      id: 2,
      title: "Professional Certificate In ICT",
      company: "Mzuzu University",
      period: "November 2025 – Present",
      description: "Deliver structured theoretical and practical instruction in core ICT modules using learner-centered and hands-on teaching approaches. Design and evaluate assessments, providing timely feedback and academic support.",
      type: "work"
    },
    {
      id: 3,
      title: "Registration Officer",
      company: "National Registration Bureau",
      period: "July 2023 – December 2025",
      description: "Technical Oversight & Support: Provide expert guidance and capacity-building for staff on district-level registration activities. Registration Operations Management: Coordinate and supervise implementation of birth, national ID, marriage, and death registration processes.",
      type: "work"
    },
    {
      id: 4,
      title: "Computer Studies Teacher",
      company: "Saint George Academy",
      period: "February 2022 – April 2023",
      description: "Delivered comprehensive computer studies lessons, combining theory and hands-on skills in software applications, coding, internet safety, and responsible digital citizenship. Managed computer lab activities and guided students through practical projects.",
      type: "work"
    },
    {
      id: 5,
      title: "ICT Support Officer",
      company: "Mzuzu University",
      period: "January 2021 – June 2021",
      description: "Designing, configuring and troubleshooting computer networks: Maintaining internet connectivity at all campuses by ensuring that all VLANS are working seamlessly. Provide computer support to different departments of the university campus.",
      type: "work"
    }
  ],

  contact: {
    email: "felixkumafutsa@gmail.com",
    phone: "+265 997 473 256",
    address: "Lilongwe, Malawi",
    github: "https://github.com/felixkumafutsa",
    linkedin: "https://linkedin.com/in/felixkumafutsa",
    twitter: "https://x.com/kumafutsa",
    facebook: "https://web.facebook.com/felix.kumafutsa.9/"
  }
};
