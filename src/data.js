export const profile = {
  name: "Dhwanit Parani",
  role: "Backend Developer",
  location: "Ahmedabad, Gujarat, India",
  email: "parani.dhwanit@gmail.com",
  phone: "+91 9909706200",
  github: "https://github.com/Dhwanit007",
  linkedin: "https://www.linkedin.com/in/dhwanit-parani-6a623a305/",
  resumeUrl: "/Dhwanit_Parani_Resume.pdf",
  status: "available",
  summary:
    "Final-year B.Tech CSE student and Jr. Backend Developer who builds RESTful APIs, authentication systems and database-backed services with NestJS, Laravel and Node.js. Comfortable owning a feature from schema design to production deployment.",
  stack: [
    "NestJS",
    "Laravel",
    "Node.js",
    "Express.js",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "AWS",
  ],
};

export const experience = [
  {
    company: "SilverSky Technology",
    role: "Jr. Backend Developer",
    date: "Mar 2026 — Present",
    points: [
      "Developing and maintaining scalable backend applications using NestJS, Laravel and MySQL",
      "Designing RESTful APIs and authentication/authorization systems",
      "Optimizing database queries and resolving production issues",
      "Working directly with frontend developers to ship end-to-end features",
    ],
  },
  {
    company: "SilverSky Technology",
    role: "Backend Developer Intern",
    date: "Jul 2025 — Feb 2026",
    points: [
      "Trained in backend development with NestJS, Laravel, Node.js and Express.js",
      "Built RESTful APIs and integrated them with relational databases",
      "Implemented authentication, authorization and CRUD workflows",
      "Tested and debugged APIs with Postman alongside senior developers",
    ],
  },
  {
    company: "Prodigy InfoTech",
    role: "Full Stack Web Development Intern",
    date: "Jan 2025 — Feb 2025",
    points: [
      "Self-paced training across the MERN stack",
      "Built responsive interfaces with Tailwind CSS on top of Node/Express APIs",
    ],
  },
  {
    company: "SAVA Info Systems Pvt. Ltd",
    role: "Web Development Intern",
    date: "Dec 2023 — Apr 2024",
    points: [
      "Built server-rendered pages and features in PHP",
      "Handled database connectivity and Bootstrap-based UI work",
    ],
  },
  {
    company: "TechMicra IT Solutions",
    role: "Web Development Intern",
    date: "Jun 2023 — Jul 2023",
    points: [
      "First hands-on web work with HTML, CSS, JavaScript and PHP",
      "Built and refined responsive, accessible page layouts",
    ],
  },
];

export const projects = [
  {
    method: "GET",
    path: "/projects/madras-club",
    name: "Madras Club",
    stack: ["NestJS", "PostgreSQL", "Supabase", "Whatsapp API", "IPay88 Payment Gateway"],
    description:
      "Backend modules and secure RESTful APIs for member management, bookings and event scheduling & notifications, chat integration, and payment processing.",
    type: "work",
  },
  {
    method: "GET",
    path: "/projects/veliyx-rider-driver-application",
    name: "Veliyx App",
    stack: ["NestJS", "PostgreSQL", "Socket.IO", "Google Maps API"],
    description:
      "Scalable APIs for ride booking, driver management, authentication and real-time trip workflows.",
    type: "work",
  },
  {
    method: "GET",
    path: "/projects/within-pregnancy-app",
    name: "Within Pregnancy App",
    stack: ["NestJS", "PostgreSQL", "Firebase Cloud Messaging"],
    description:
      "APIs, authentication and core business logic for a healthcare and wellness application.",
    type: "work",
  },
  {
    method: "POST",
    path: "/projects/parent-ai",
    name: "PARENT AI App",
    stack: ["NestJS", "AWS", "OpenAI", "HeyGen", "ElevenLabs", "PostgreSQL", "N8N"],
    description:
      "Integrated AI voice, avatar and chatbot services into scalable backend APIs and AWS workflows.",
    type: "work",
  },
  {
    method: "GET",
    path: "/projects/enterprise-web-application",
    name: "Maher Matrimonial",
    stack: ["Laravel", "MySQL"],
    description:
      "Backend modules, RESTful APIs, authentication and query optimization for an internal enterprise system.",
    type: "work",
  },
  {
    method: "GET",
    path: "/projects/saas-matrimonial-application",
    name: "SaaS Matrimonial Application",
    stack: ["NestJS", "PostgreSQL", "Supabase"],
    description:
      "A scalable SaaS application with a modern backend and database setup.",
    type: "work",
  },
  {
    method: "POST",
    path: "/auth/mern-authentication-system",
    name: "MERN Authentication System",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Passport.js"],
    description:
      "A self-built auth system with JWT and Passport-based login, protected routes, session handling and role-based access, built end-to-end on the MERN stack.",
    type: "personal",
    url: "https://github.com/Dhwanit007",
  },
  {
    method: "GET",
    path: "/apps/vibechat",
    name: "VibeChat",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO"],
    description:
      "A real-time MERN chat application with live messaging over Socket.IO, layered on top of a full authentication flow.",
    type: "personal",
    url: "https://github.com/Dhwanit007",
  },
];

export const skills = [
  {
    group: "Backend",
    items: ["NestJS", "Laravel", "Node.js", "Express.js", "TypeORM", "JWT", "OAuth 2.0"],
  },
  {
    group: "Databases",
    items: ["MySQL", "MongoDB", "PostgreSQL", "Supabase"],
  },
  {
    group: "Cloud & Deployment",
    items: ["AWS EC2", "AWS S3", "AWS RDS", "AWS IAM", "Docker", "Nginx", "PM2", "Linux"],
  },
  {
    group: "Languages",
    items: ["JavaScript", "TypeScript", "PHP", "SQL", "HTML5", "CSS3"],
  },
  {
    group: "Frontend",
    items: ["React.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code", "npm", "Composer"],
  },
];

export const education = [
  {
    school: "Silver Oak University, Ahmedabad",
    program: "B.Tech, Computer Science & Engineering",
    date: "2024 — Present",
  },
  {
    school: "Silver Oak University, Ahmedabad",
    program: "Diploma in Information Technology · CGPA 9.16",
    date: "2021 — 2024",
  },
  {
    school: "Tripada Day School, Ahmedabad",
    program: "SSC",
    date: "2020 — 2021",
  },
];
