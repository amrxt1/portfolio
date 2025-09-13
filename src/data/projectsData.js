const projectsData = [
  {
    id: 1,
    slug: "armv7",
    title: "Arm v7",
    desc: "A lightweight ARMv7 CPU core implemented in Verilog.",
    images: ["/project-images/armv7/pc.png"],
    techUsed: ["Verilog", "FPGA"],
    features: [
      "Implemented a pipelined cpu core with three stages: IF, ID, and EX.",
      "It supports a subset of ARM instructions (thumb mode)",
      "Components were simulated in ModelSim",
    ],
    details: `Built for a computer architecture course. 
      The CPU supports a subset of ARM instructions 
      and was verified using test benches.`,
    repo: "armv7",
    preview: "https://armv7.vercel.app",
  },
  {
    id: 2,
    slug: "cchive",
    title: "CC-Hive",
    desc: `A college-exclusive socialising platform project.`,
    images: ["/project-images/cchive/join.png"],
    techUsed: ["JavaScript", "React", "Ruby", "Ruby on Rails", "Tailwindcss"],
    features: [
      "Marketplace to sell/buy items capmus-wide.",
      "Reviews for both Instructors and Courses.",
      "Allows students to volunteer for tutoring other students and/or get tutored.",
      "Study groupchats implemented using websockets.",
      "Responsiveness across all device types.",
    ],
    details: `Implemented using Vite@React and Ruby on Rails in api only mode. 
    `,
    repo: "cchive_frontend",
    preview: "https://cchive.vercel.app",
  },
  {
    id: 3,
    slug: "assembler",
    title: "Assembler",
    desc: "A custom assembler for an FPGA CPU project.",
    techUsed: ["Assembly", "Python"],
    images: ["/project-images/assembler/assembler.png"],
    features: [
      "Uses python to convert Assembly instructions into binary files",
      "Supports BL even though not in the ISA",
    ],
    details: `Takes a multi-pass approach: 
       starts by removing comments etc,
       then it expands BL statements,
       then resolves correct branching addresses, and
       finally maps asm into bin.`,
    repo: "armv7/tree/main/asm",
  },
  {
    id: 4,
    slug: "fire-hall-events",
    title: "Fire Hall Events",
    desc: "Concept project built to gather data at community events in an interactive manner.",
    techUsed: ["JavaScript", "React"],
    images: ["/project-images/fire-hall-events/hero.png"],
    features: [
      "Allows for form submission",
      "Gives a random prize",
      "Saves data to a cloud database using Vercel functions",
    ],
    details: `This project was built to allow patrons at community events to win randomized prizes by
    submitting information on whether they have a working smoke alarm at home. The project aimed
    to make the events more accessible by including translated versions of the important information.`,
    repo: "fire-hall-events",
    preview: "https://fire-hall-events.vercel.app",
  },
  {
    id: 5,
    slug: "quickmove",
    title: "QuickMove Solutions",
    desc: "Landing page for a Junk Removal company.",
    techUsed: ["JavaScript", "React", "Tailwindcss"],
    images: ["/project-images/quickmove/hero.png"],
    features: [
      "Implements a parallax stack of Feature cards",
      "Responsive design keeps a check on UX among all devices",
    ],
    details: `A modular landing page template made using Vite@React and tailwindcss.`,
    repo: "junk-removal-demo",
    preview: "https://junk-removal-demo.vercel.app",
  },
  {
    id: 8,
    slug: "rails-social",
    title: "Project: Facebook",
    desc: "Created a social media which has posts, likes, comments etc.",
    techUsed: ["Ruby", "Ruby on Rails"],
    details: `
    Made a social media webapp using full-stack Rails and advanced associations between data models. 
    This project is associated with my self-learning web development jounrey with "The Odin Project."`,
    features: [
      "Profiles with followers and following associations",
      "Posting and commenting system",
      "Basic latest posts feed",
      "Page to find new friends on the site",
    ],
    repo: "project_facebook",
    preview: "https://project-facebook.fly.dev/",
  },
  {
    id: 9,
    slug: "cs120",
    title: "CS-120",
    desc: "Collection of course projects for CS-120.",
    techUsed: ["Python"],
    features: [
      "Sorting algorithm implementations",
      "Search algorithms",
      "Final Project: an OOP real estate assets management game.",
    ],
    details:
      "Assignments covering core algorithms and data structures, packaged into one repo.",
    repo: "csci-120",
  },
];

export default projectsData;
