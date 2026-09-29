export const SITE = {
  name: "Chandrakant Chodankar",
  monogram: "CC",
  role: "Entry-Level Software Developer",
  tagline: "Frontend & Full-Stack Developer from Goa",
  location: "Goa, India",
  email: "chandrakantchodankar06@gmail.com",
  whatsapp: "https://wa.me/918275382359",
  linkedin: "https://www.linkedin.com/in/chandrakant-chodankar-b15344247/",
  github: "https://github.com/ChandrakantChodankar",
  resumeUrl: "/Chandrakant_Chodankar_Resume.pdf",
  timezone: "Asia/Kolkata",
} as const;

export const NAV_LINKS = [
  { label: "About", to: "/about", anchor: "about" },
  { label: "Experience", to: "/#experience", anchor: "experience" },
  { label: "Projects", to: "/projects", anchor: "projects" },
  { label: "Skills", to: "/#skills", anchor: "skills" },
  { label: "Contact", to: "/contact", anchor: "contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "GitHub", href: SITE.github, icon: "github" as const },
  { label: "LinkedIn", href: SITE.linkedin, icon: "linkedin" as const },
  { label: "Email", href: `mailto:${SITE.email}`, icon: "mail" as const },
] as const;

export const STACK_MARQUEE = [
  "React",
  "Next.js",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "Python",
  "Git",
  "Vercel",
] as const;

export const AT_A_GLANCE = [
  "3 projects with public code",
  "1 client website built",
  "Available immediately",
] as const;

export const SKILLS_GROUPS = [
  {
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & Data",
    items: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "MySQL",
      "MongoDB",
      "REST APIs",
      "JWT",
      "Basic RBAC",
    ],
  },
  {
    title: "AI & Automation",
    items: [
      "AI agents",
      "Agentic AI concepts",
      "Prompt engineering",
      "AI-assisted development",
      "Claude Skills",
      "Grok Bots",
      "n8n",
      "Lovable",
      "Base44",
    ],
  },
  {
    title: "Programming",
    items: ["Python", "C", "C++"],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Thunder Client",
      "VS Code",
      "Netlify",
      "Vercel",
    ],
  },
  {
    title: "Creative AI",
    items: ["Image generation", "Video generation", "Creative prompting"],
  },
] as const;

export const HOW_I_WORK_STEPS = [
  {
    step: 1,
    title: "Understand the brief",
    description: 'Read it twice, list what "done" looks like.',
  },
  {
    step: 2,
    title: "Structure first",
    description: "Sketch pages, routes and data before styling.",
  },
  {
    step: 3,
    title: "One slice at a time",
    description: "Build a full user journey end to end, then widen.",
  },
  {
    step: 4,
    title: "Commit daily",
    description: "Small, clear commits so progress is visible.",
  },
  {
    step: 5,
    title: "Ship and learn",
    description: "Deploy early on Vercel or Netlify, then iterate on feedback.",
  },
] as const;

export const EXPERIENCE = [
  {
    role: "Web Developer Intern",
    company: "The Grit City",
    period: "Aug 2023 – Sept 2023",
    description:
      "Built the AGH Advisors website using Wix Studio, including home, about, contact, services, case studies and blog sections. Learned to turn content and requirements into a usable client-facing website.",
  },
] as const;

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering (BE), Computer Engineering",
    institution: "Angel Institute of Technology & Design, Mapusa, Goa",
    period: "2021–2024",
    score: "69%",
  },
  {
    degree: "Diploma, Electronics & Communication Engineering",
    institution: "Government Polytechnic, Bicholim",
    period: "2018–2021",
    score: "73%",
  },
] as const;

export const VALUES = [
  {
    title: "Structure first",
    description: "A clear plan makes the code calmer.",
  },
  {
    title: "Small and steady",
    description: "Daily commits beat heroic weekends.",
  },
  {
    title: "Learn out loud",
    description: "I build, share the code and improve in public.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "When can you start?",
    answer: "Immediately.",
  },
  {
    question: "Where are you based?",
    answer:
      "Goa, India. Open to remote roles, or on-site roles based here in Goa.",
  },
  {
    question: "What are you strongest at?",
    answer:
      "React, Next.js and Tailwind CSS on the frontend; I'm building depth in Node.js, Express, PostgreSQL and Prisma.",
  },
  {
    question: "Do you have work experience?",
    answer:
      "One internship (Aug–Sept 2023), where I built a client website, plus three projects with public code.",
  },
  {
    question: "How do you use AI tools?",
    answer:
      "I use tools like Claude and Lovable to move faster and I make sure I understand every line I ship.",
  },
] as const;

export type Project = {
  slug: string;
  title: string;
  category: "Frontend" | "AI & ML";
  year: string;
  role: string;
  summary: string;
  outcome: string;
  coverSlot: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  body: {
    problem: string;
    approach: string;
    stack: string;
    keyFeatures: string[];
    challenges: string;
    learned: string;
  };
};

export const PROJECTS: Project[] = [
  {
    slug: "world-explorer",
    title: "World Explorer",
    category: "Frontend",
    year: "2025",
    role: "Solo developer",
    summary:
      "Explore the world, one country at a time — search, filter by region, and browse detailed country profiles with flags, populations, currencies, and languages.",
    outcome:
      "Live demo on Netlify with search, region filtering, sorting, and detailed country pages",
    coverSlot: "/world_explorer_cover_image.png",
    tags: [
      "React 18",
      "React Router v6",
      "Tailwind CSS",
      "REST Countries API",
      "Vite",
    ],
    liveUrl: "https://worldexplorerapp.netlify.app/",
    githubUrl: "https://github.com/ChandrakantChodankar/world-explorer-app",
    featured: true,
    body: {
      problem:
        "I wanted a clean, fast way to browse and compare countries — names, capitals, populations, currencies, languages, flags — without jumping between Wikipedia pages.",
      approach:
        "A React 18 SPA built with Vite that fetches live data from the REST Countries API, with client-side routing for individual country pages, real-time search, region filtering, and alphabetical sorting.",
      stack:
        "React 18, React Router v6, Tailwind CSS, REST Countries API, React Icons, Vite",
      keyFeatures: [
        "Real-time search by country name as you type",
        "Region filtering by continent (Africa, Americas, Asia, Europe, Oceania)",
        "Alphabetical sorting A–Z and Z–A",
        "Detailed country pages with official/native names, capital, population, region, subregion, currencies, languages, top-level domains, and flags",
        "Fully responsive layout for mobile, tablet, and desktop",
        "Dark theme with smooth transitions",
      ],
      challenges:
        "Handling the large dataset from the REST Countries API efficiently — rendering hundreds of country cards without lag required careful component design and filtering logic.",
      learned:
        "How to structure a multi-page React SPA with React Router, manage API data fetching and loading states, and build a responsive UI with Tailwind CSS that stays fast with large lists.",
    },
  },
  {
    slug: "pokemon-gallery",
    title: "Pokémon Gallery",
    category: "Frontend",
    year: "2025",
    role: "Solo developer",
    summary:
      "A responsive Pokémon gallery built with React and Tailwind CSS, featuring real-time search and live data from the PokéAPI.",
    outcome:
      "Live demo on Netlify with real-time search, loading states, and error handling",
    coverSlot: "/pokemon_cover_image.png",
    tags: ["React", "Tailwind CSS", "PokéAPI", "JavaScript", "React Hooks"],
    liveUrl: "https://chandrakantpokemongallery.netlify.app/",
    githubUrl: "https://github.com/ChandrakantChodankar/Pokemon-Gallery",
    featured: true,
    body: {
      problem:
        "I wanted a clean, visual way to browse Pokémon — searching by name, seeing their sprites and types — without navigating a cluttered site.",
      approach:
        "A React app styled with Tailwind CSS that fetches Pokémon data from the PokéAPI, with parallel API requests for fast loading and real-time search as you type.",
      stack: "React, Tailwind CSS, PokéAPI, JavaScript, React Hooks",
      keyFeatures: [
        "Real-time search by Pokémon name",
        "Responsive layout from mobile to desktop",
        "Modern UI with Tailwind CSS",
        "Fast parallel API requests for quick data loading",
        "Error handling and loading states",
      ],
      challenges:
        "Fetching data for many Pokémon quickly without blocking the UI — solved by making parallel API requests and managing loading and error states cleanly.",
      learned:
        "How to integrate a third-party API with parallel requests, handle loading and error states gracefully, and build a responsive, search-driven UI with React Hooks and Tailwind CSS.",
    },
  },
  {
    slug: "cashew-apple-grading",
    title: "Cashew Apple Fruit Quality Grading",
    category: "AI & ML",
    year: "2024",
    role: "Solo developer",
    summary:
      "An automated deep-learning system that classifies cashew apples from images as Ripe, Unripe, or Overripe.",
    outcome:
      "VGG19 achieved the strongest overall class-wise F1-scores: 0.87 Overripe, 0.79 Ripe, and 0.86 Unripe",
    coverSlot:
      "https://images.pexels.com/photos/10615965/pexels-photo-10615965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tags: [
      "Python",
      "Deep Learning",
      "CNN",
      "VGG19",
      "ResNet50",
      "MobileNet V2",
    ],
    githubUrl:
      "https://github.com/ChandrakantChodankar/Image-Classification-using-CNN",
    featured: true,
    body: {
      problem:
        "Manual sorting of cashew apples can lead to high wastage and inconsistent quality assessment. Visual grading by eye is difficult to standardize across different fruit sizes, colors, and ripeness levels.",
      approach:
        "A deep-learning image classification pipeline evaluates visual attributes such as size, color, and ripeness. Images are resized to 640 × 640 and augmented with horizontal and vertical flips, cropping, 45° rotation, and Gaussian blur denoising. The project compares ResNet50, AlexNet, MobileNet V2, and VGG19 before integrating classification results into an interface where users can upload or capture an image and receive a predicted class with a confidence score.",
      stack:
        "Python, Deep Learning, Convolutional Neural Networks, ResNet50, AlexNet, MobileNet V2, VGG19, Image Processing",
      keyFeatures: [
        "Automated classification into Ripe, Unripe, and Overripe categories",
        "Image preprocessing and augmentation for varied fruit images",
        "640 × 640 image standardization",
        "Horizontal and vertical flipping, cropping, and 45° rotation",
        "Gaussian blur denoising with a 5 × 5 kernel",
        "Performance comparison across four CNN architectures",
        "Image upload or camera capture with prediction confidence scores",
        "VGG19 best results: Overripe F1 0.87, Ripe F1 0.79, Unripe F1 0.86",
      ],
      challenges:
        "Working with a small and varied image dataset while keeping predictions reliable across different orientations, lighting conditions, fruit sizes, and ripeness levels required a careful preprocessing and augmentation pipeline. Comparing multiple CNN architectures also made it possible to identify VGG19 as the strongest-performing model for this task.",
      learned:
        "How to build an end-to-end image classification workflow, prepare and augment image data, compare transfer-learning architectures using precision, recall, and F1-score, and connect a trained model to a user-facing prediction interface.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
