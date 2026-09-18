// Single source of truth for every piece of content on the site.
// Every claim here is traceable to the supplied CV and certificates.

export type Social = {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail';
};

export const profile = {
  name: 'MD Tariq Uz Zaman',
  initials: 'MTZ',
  designations: [
    'Software Engineering Student',
    'AI/ML Researcher',
    'Core Contributor, Predictive Maintenance Systems',
  ],
  email: 'zaman.mdtariquz@gmail.com',
  phone: '+86 166 3816 9499',
  location: 'Zhengzhou, Henan, China',
  github: 'https://github.com/TARIQ8099',
  // LinkedIn is not available yet. Set this to the URL and it appears
  // everywhere automatically — landing, footer and contact panel all
  // derive from `socials` / `contactRows` below. No layout changes needed.
  linkedin: null as string | null,
  tagline: 'Building AI systems that make an impact.',
  photo: '/images/profile.jpg',
  intro:
    "I'm a Software Engineering student at Zhengzhou University (CGPA 3.1042/4.0 through my 6th semester, now in my 7th), specializing in Artificial Intelligence, Machine Learning, and Deep Learning. I was a core contributor on the 14-member team behind 智维先锋, an edge-cloud predictive maintenance platform for proton therapy equipment that cut fault-handling time by 60% and won First Prize at the 2025 Henan Provincial College Student Innovation Competition. I've authored two published research papers on AI-driven predictive maintenance and automated software development with LLMs, and built projects spanning mental health AI, medical imaging, MLOps pipelines, and industrial robotics. My work sits at the intersection of applied machine learning and real-world systems engineering, with a current focus on LLM-based tools and production-grade AI deployment. I'm always open to research collaborations and engineering opportunities — let's build something impactful together.",
  summary:
    "I'm a Software Engineering undergraduate at Zhengzhou University's School of Computer Science and Artificial Intelligence, currently in my 7th semester with a CGPA of 3.1042/4.0 through my 6th. My work centers on AI-driven predictive maintenance, deep learning, and LLM-powered systems, backed by two published research papers and hands-on contributions to award-winning projects. I was a core team member on 智维先锋, an edge-cloud predictive maintenance platform deployed on Mevion's proton therapy equipment that reduced fault-handling time by 60% and won First Prize at the 2025 Henan Provincial College Student Innovation Competition, as part of a 14-person team. Beyond that flagship project, I've built systems ranging from an AI mental health assistant and brain tumor detection pipeline to a production-grade MLOps deployment on AWS. I'm comfortable across the stack, from TensorFlow and PyTorch to React, Flask, and Docker, and I bring the same rigor to research writing as I do to shipping code. Alongside my studies, I served as Director of the Academic Department, International Student Association (ISA) at Zhengzhou University (Nov 2024 – Oct 2025), appointed by the School of International Education. What sets me apart is turning research-grade AI work into deployed, measurable outcomes rather than leaving it in the lab.",
  mission:
    'To build intelligent systems that solve real engineering problems — turning research into deployable, measurable impact.',
  vision:
    'To grow into a leading AI/ML engineer and researcher who bridges academic innovation with industry-scale solutions.',
};

// Derived so that adding a LinkedIn URL above makes the icon appear everywhere.
export const socials: Social[] = [
  { label: 'GitHub', href: profile.github, icon: 'github' },
  ...(profile.linkedin
    ? [{ label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin' as const }]
    : []),
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
];

// Web3Forms access key — submissions get emailed straight to `profile.email`.
// Get a free key at https://web3forms.com (enter your email, they send it over;
// no account, 250 submissions/month). Paste it between the quotes.
// While this is empty the form falls back to opening the visitor's mail app.
export const contactFormAccessKey = '';

export const languages = [
  { name: 'English', level: 'Proficient' },
  { name: 'Bangla', level: 'Native' },
  { name: 'Chinese', level: 'HSK 4' },
  { name: 'Hindi/Urdu', level: 'Fluent' },
];

export const navSections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Publications' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const experience = [
  {
    role: 'Core Team Member — Predictive Maintenance Systems (智维先锋)',
    org: "Zhengzhou University — China International College Students' Innovation Competition (Henan Region)",
    badge: 'Research Project',
    location: 'Zhengzhou, Henan, China',
    duration: 'Dec 2024 – Oct 2025',
    responsibilities: [
      'Contributed as one of 14 team members building an edge-cloud predictive maintenance platform (智维先锋) for high-power complex equipment, including proton therapy accelerators',
      'Worked across an edge computing data-collection layer, an LLM-based fault Q&A system, and a real-time monitoring dashboard',
      'Represented Zhengzhou University as part of the First Prize-winning team at the Henan Regional competition',
      "Supported deployment and validation on Mevion's proton therapy equipment under a technology-development contract with the Institute of Modern Physics, Chinese Academy of Sciences",
    ],
    achievements: [
      "Team's system cut average fault-handling time from 30 to 12 minutes and reduced unplanned downtime by 60%",
      'Lowered maintenance costs by 20% and improved fault-prediction accuracy by 30%',
    ],
  },
  {
    role: 'Core Team Member',
    org: 'Zhengzhou University — UrbanAI: AI-Driven Urban Planning Platform for Smart Cities',
    badge: 'Research Project',
    location: 'Zhengzhou, Henan, China',
    duration: '2025',
    responsibilities: [
      "Contributed as a core team member to a 5-person team's AI-based smart-city urban planning platform submitted to the China International College Students' Innovation Competition (2025)",
      'Applied AI models to data-driven urban planning use cases',
    ],
    achievements: [
      'Team recognized with a Certificate of Honor for innovative thinking and outstanding teamwork',
      'Represented the School of International Education, Zhengzhou University, in the national competition',
    ],
  },
];

export const education = [
  {
    qualification: 'BSc in Software Engineering',
    institution: 'Zhengzhou University, Henan, China',
    duration: '2023 – 2027 (Expected)',
    mode: 'Full-time',
    highlights: [
      'Currently in my 7th semester; CGPA 3.1042/4.0 through my 6th semester',
      'Core coursework: Data Structures & Algorithms, OOP in Python, Operating Systems, AI, Machine Learning, Deep Learning, DBMS, Linear Algebra, Calculus I–II, Statistics',
      'Awarded the Henan Government Scholarship (2023) as an international student',
    ],
  },
];

export const projects = [
  {
    title: '智维先锋 — Intelligent Predictive Maintenance System',
    type: 'Award-winning team research project',
    duration: 'Dec 2024 – Oct 2025',
    description:
      'As one of 14 team members, contributed to an edge-cloud predictive maintenance platform for high-power complex equipment, including proton therapy accelerators, replacing slow manual fault diagnosis with automated real-time detection.',
    outcomes: [
      'Cut average fault-handling time from 30 to 12 minutes',
      'Reduced downtime by 60%, lowered maintenance costs by 20%',
      "Improved fault-prediction accuracy by 30%; deployed on Mevion's proton therapy equipment",
      'Won First Prize (Henan Region 2025) and Gold Award at the Henan "豫你携手·创赢未来" competition',
    ],
    tech: ['Edge Computing', 'LLM (8B/70B variants)', 'Real-time Dashboards', 'Log-based Fault-Traceback Algorithms'],
  },
  {
    title: 'Mental Support — AI Mental Health Therapist',
    type: 'Personal/Team Project',
    duration: null,
    description:
      'An AI-powered mental health assistant offering empathetic support, actionable guidance, and crisis intervention.',
    outcomes: [
      'Combined general therapeutic conversation with life-saving emergency escalation',
      'Built for accessibility and safety',
    ],
    tech: ['Medgemma (via Ollama)', 'OpenAI', 'Twilio', 'Agent Frameworks'],
  },
  {
    title: 'Vehicle License Plate Detection',
    type: 'Computer Vision Project',
    duration: null,
    description: 'Real-time license plate recognition system for traffic management applications.',
    outcomes: [
      '86.7% mAP@0.5, 100% precision at 0.899 confidence, 95% recall',
      'Integrated automated database logging',
    ],
    tech: ['Computer Vision', 'Deep Learning'],
  },
  {
    title: 'UrbanAI — AI-Driven Urban Planning Platform',
    type: 'Award-recognized team project',
    duration: null,
    description:
      'Contributed as a core team member to an AI-powered platform supporting data-driven urban planning decisions for smart-city development.',
    outcomes: [
      "Submitted to the China International College Students' Innovation Competition (2025)",
      'Team recognized with a Certificate of Honor for innovation and teamwork',
    ],
    tech: ['AI/ML', 'Urban Data Analytics'],
  },
  {
    title: 'Industrial Robot Control & Monitoring System',
    type: 'SDLC-based software design project',
    duration: null,
    description:
      'A full-lifecycle system to control and monitor an industrial robot arm performing pick-and-place operations on an electronics production line.',
    outcomes: [
      'Layered architecture across presentation, application, communication, data, and hardware layers',
      'Real-time monitoring, role-based access control, automated error detection with emergency-stop handling',
      'Achieved 97.5–100% pass rates across 81 test cases',
    ],
    tech: ['React.js', 'Python (Flask)', 'MQTT/ROS', 'MySQL/MongoDB', 'Docker'],
  },
  {
    title: 'AI-Based Brain Tumor Detection System',
    type: 'Medical AI project',
    duration: null,
    description:
      'A CNN-based diagnostic system to automate brain tumor detection and classification from MRI scans.',
    outcomes: [
      'Improved diagnostic accuracy by over 20% versus traditional radiological diagnosis',
      'Reduced diagnosis time to minutes',
      'Added Grad-CAM visualization for explainable AI in clinical settings',
    ],
    tech: [
      'ResNet',
      'VGG16',
      'EfficientNet',
      'TensorFlow/Keras/PyTorch',
      'Flask/Django',
      'React.js/Vue.js',
      'TensorFlow Lite',
    ],
  },
  {
    title: 'Educational/Research Assistant AI Agent',
    type: 'Personal Project',
    duration: null,
    description:
      'An AI-powered research assistant that searches arXiv, analyzes recent papers, and generates structured literature reviews.',
    outcomes: ['Automated academic reporting and synthesis', 'Outputs compiled as LaTeX PDF files'],
    tech: ['LLM Agents', 'arXiv API', 'LaTeX'],
  },
  {
    title: 'Production-Grade MLOps Pipeline — Insurance Premium Prediction',
    type: 'Cloud/MLOps Project',
    duration: null,
    description:
      'An end-to-end, cloud-native MLOps pipeline for vehicle insurance premium prediction with real-time AWS deployment.',
    outcomes: [
      'Automated data ingestion, validation, feature engineering, and model training',
      'CI/CD via GitHub Actions and Docker; model registry on Amazon S3',
      'Custom logging and exception handling for production observability',
    ],
    tech: ['AWS', 'Docker', 'MongoDB Atlas', 'GitHub Actions'],
  },
  {
    title: 'Video-to-SOP-Generator',
    type: 'Multimodal AI Project',
    duration: null,
    description: 'A system that watches training videos and automatically writes step-by-step SOP manuals.',
    outcomes: [
      'Integrated Whisper AI for audio timestamping and Gemini 2.5 Pro for visual procedural analysis',
      '15x faster processing via FFmpeg optimization',
      'Reduced manual documentation effort by approx. 90%',
    ],
    tech: ['Whisper AI', 'Gemini 2.5 Pro', 'FFmpeg'],
  },
];

export const publications = [
  {
    title:
      'Integration of AI-Driven Predictive Maintenance in Smart Concrete Structures to Enhance Sustainability and Lifecycle Efficiency',
    author: 'MD Tariq Uz Zaman',
    year: '2025',
    venue: 'North American Academic Research, Vol. 8(1), Issue 1',
    journal: 'North American Academic Research',
    link: 'https://doi.org/10.5281/zenodo.14840495',
    summary:
      'Applied regression and decision-tree algorithms with cross-validation to forecast structural degradation from IoT sensor data. The framework achieved 30% improved anomaly-detection accuracy, 15% lower maintenance costs, and 20% material-waste / 12% carbon-footprint reductions.',
  },
  {
    title:
      'Impact of Automated Software Development Using Large Language Models: Capabilities, Limitations, and Future Evolution',
    author: 'MD Tariq Uz Zaman',
    year: '2025',
    venue: 'RA Journal of Applied Research, Vol. 11, No. 09',
    journal: 'RA Journal of Applied Research',
    link: 'https://doi.org/10.47191/rajar/v11i9.07',
    summary:
      'Empirical evaluation of LLMs (GPT-4o, Claude 3.5, Copilot) for code generation/testing tasks, quantifying 55.8% faster development vs. traditional methods. Designed mitigation strategies for hallucinations and context-awareness limitations.',
  },
];

// Proficiency percentages are estimates based on project depth and experience level.
export const skillCategories = [
  {
    name: 'Programming Languages',
    icon: 'code',
    overall: 90,
    skills: [
      { name: 'Python', level: 95 },
      { name: 'JavaScript', level: 85 },
      { name: 'Java', level: 75 },
      { name: 'C', level: 70 },
      { name: 'C++', level: 75 },
    ],
  },
  {
    name: 'Frameworks',
    icon: 'layers',
    overall: 88,
    skills: [
      { name: 'TensorFlow', level: 90 },
      { name: 'PyTorch', level: 90 },
      { name: 'OpenCV', level: 85 },
      { name: 'React', level: 80 },
      { name: 'Next.js', level: 75 },
      { name: 'Flask', level: 85 },
      { name: 'Vite', level: 75 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    name: 'MLOps & Cloud',
    icon: 'cloud',
    overall: 80,
    skills: [
      { name: 'MLflow', level: 75 },
      { name: 'DVC', level: 75 },
      { name: 'Kubernetes', level: 70 },
      { name: 'AWS', level: 80 },
      { name: 'Docker', level: 85 },
    ],
  },
  {
    name: 'LLM Tools',
    icon: 'sparkles',
    overall: 85,
    skills: [
      { name: 'OpenAI API', level: 90 },
      { name: 'LangChain', level: 85 },
      { name: 'LangGraph', level: 80 },
      { name: 'Langsmith', level: 75 },
      { name: 'MCP Server', level: 80 },
    ],
  },
  {
    name: 'Deep Learning',
    icon: 'brain',
    overall: 88,
    tags: ['ANN', 'CNN', 'RNN', 'LSTM', 'GRU', 'Seq2Seq', 'Attention', 'Transformers'],
    skills: [],
  },
  {
    name: 'Tools & Editors',
    icon: 'wrench',
    overall: 85,
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Jupyter', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'PyCharm', level: 80 },
      { name: 'Google Colab', level: 85 },
      { name: 'Microsoft Office & LaTeX', level: 85 },
    ],
  },
];

export const softSkills = [
  'Communication',
  'Teamwork & Collaboration',
  'Leadership',
  'Critical/Analytical Thinking',
  'Adaptability',
  'Professionalism & Work Ethic',
  'Conflict Resolution & Stakeholder Management',
];

export const stats = [
  { value: 1, suffix: '+', label: 'Years Research Experience' },
  { value: 2, suffix: '', label: 'Published Papers' },
  { value: 9, suffix: '', label: 'Projects' },
  { value: 6, suffix: '', label: 'Awards' },
];

export type Achievement = {
  category: 'Academic' | 'Professional';
  year: string | null;
  title: string;
  institution: string;
  description: string;
  image: string | null;
  imageAlt?: string;
};

export const achievements: Achievement[] = [
  {
    category: 'Academic',
    year: '2025',
    title:
      "First Prize, High-Tech Main Track — China International College Students' Innovation Competition (Henan Region)",
    institution: 'Zhengzhou University',
    description:
      'Core team member (1 of 14) on 智维先锋-高端复杂设备智能预测性维护系统, an edge-cloud predictive maintenance platform.',
    image: '/images/certificates/first-prize.jpg',
    imageAlt:
      "First Prize certificate, High-Tech Main Track, 2025 Henan China International College Students' Innovation Competition",
  },
  {
    category: 'Academic',
    year: '2025',
    title: 'Gold Award — Henan Province "豫你携手·创赢未来" University Innovation & Entrepreneurship Competition',
    institution:
      'Henan Provincial Talent Work Leading Group Office, Dept. of Education & Dept. of Human Resources and Social Security',
    description: 'Awarded for the same predictive maintenance system as a core team member.',
    image: '/images/certificates/gold-award.jpg',
    imageAlt: '智维先锋 certificate of honor — Gold Award (金奖)',
  },
  {
    category: 'Academic',
    year: '2025',
    title: 'Certificate of Honor — China International Innovation Competition',
    institution: 'School of International Education, Zhengzhou University',
    description:
      'Recognized as a core team member on UrbanAI: AI-Driven Urban Planning Platform for Smart Cities.',
    image: '/images/certificates/urbanai.jpg',
    imageAlt: 'Certificate of Honor — UrbanAI, 2025 China International Innovation Competition',
  },
  {
    category: 'Academic',
    year: '2023',
    title: 'Henan Government Scholarship',
    institution: 'Zhengzhou University',
    description: 'Awarded as an international student to fully fund undergraduate studies.',
    image: null,
  },
  {
    category: 'Professional',
    year: null,
    title: 'Outstanding Student Award',
    institution: 'Zhengzhou University',
    description: 'Recognition for academic and extracurricular performance.',
    image: null,
  },
  {
    category: 'Professional',
    year: '2025',
    title: 'Silk Road Style Award ("丝路风采奖")',
    institution:
      'Henan Overseas Chinese International Cultural Exchange Association, jointly issued with the Henan International Cultural Exchange Center and Henan International Communication Center',
    description:
      'Awarded in the "一带一路"与我的家乡 (Belt and Road and My Hometown) Essay Competition for creative contribution.',
    image: '/images/certificates/essay-competition.jpg',
    imageAlt: 'Silk Road Style Award certificate — Belt and Road and My Hometown Essay Competition',
  },
];

export const leadership = [
  {
    title: 'Director, Academic Department, International Student Association (ISA)',
    org: 'Zhengzhou University',
    meta: 'Nov 2024 – Oct 2025 — appointed by the School of International Education',
    image: '/images/certificates/isa-director.jpg',
  },
  {
    title: 'Volunteer, Sunshine Sports Meeting',
    org: 'Zhengzhou University',
    meta: 'Apr 2025, 5.5 hours of service',
    image: '/images/certificates/volunteer-sports.jpg',
  },
  {
    title: 'Volunteer, New Student Orientation',
    org: 'School of International Education, Zhengzhou University',
    meta: 'Sep 2024, 3 hours of service',
    image: '/images/certificates/volunteer-orientation.jpg',
  },
  {
    title: 'Best Shooter Award · Best Cadet (District) · Best Cadet (Sub-District)',
    org: 'Bangladesh National Cadet Corps (BNCC)',
    meta: '2020–2022',
    image: null,
  },
  {
    title: 'Member, Donation Club',
    org: 'Dhaka, Bangladesh',
    meta: '2020 — youth club for blood donation and social awareness',
    image: null,
  },
];

export const contactRows = [
  { icon: 'mail' as const, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'phone' as const, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: 'pin' as const, label: 'Location', value: profile.location, href: null },
  { icon: 'github' as const, label: 'GitHub', value: 'github.com/TARIQ8099', href: profile.github },
  ...(profile.linkedin
    ? [{ icon: 'linkedin' as const, label: 'LinkedIn', value: 'LinkedIn', href: profile.linkedin }]
    : []),
];
