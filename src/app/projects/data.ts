export interface IProjectLinks {
  git?: string;
  live?: string;
}

export interface IProject {
  id: number;
  name: string;
  from?: string;
  to?: string;
  techStack: string[];
  additional: string[];
  description: string[];
  image: string;
  links: IProjectLinks;
}

export const projects: IProject[] = [
  {
    id: 1,
    name: "HORIZEN HUB",
    from: "DEC 2023",
    to: "PRESENT",
    techStack: [
      "React.js",
      "Express.js",
      "Passport.js",
      "Socket.io",
      "Mongo DB",
      "JWT",
      "Rest-API",
    ],
    additional: ["Redux-toolkit"],
    description: [
      "React.js Project built with the team of 4 persons, the goal is to create an chatting application with some unique functionality to be used in college campus.",
      "UI inspired from WhatsApp + custom themes + new features.",
      "Unique Features: snug zone - creative place where you can create your own pages to show your talent, more like blogs but different",
    ],
    image: "",
    links: {
      git: "https://github.com/sahuyash1103/Horizon-Hub",
    },
  },
  {
    id: 2,
    name: "Ecommerce Website ",
    from: "JUN 2022",
    to: "MAR 2022",
    techStack: [
      "React.js",
      "Express.js",
      "Mongo DB",
      "JWT",
      "Firebase Auth",
      "Rest-API",
    ],
    additional: ["Context API"],
    description: [
      "Fully Functional Amazon clone except for payments with React.js",
      "Express.js Rest API for CRUD operations.",
    ],
    image: "",
    links: {
      git: "https://github.com/sahuyash1103/my-zone",
      live: "https://unreal-amazon-myzone.vercel.app",
    },
  },
  {
    id: 3,
    name: "NETFLIX CLONE",
    from: "AUG 2022",
    to: "",
    techStack: ["React.js", "CSS"],
    additional: ["TMDB api"],
    description: [
      "Made with React.js a Netflix clone to enhance my UI skills.",
    ],
    image: "",
    links: {
      git: "https://online-flix.vercel.app/",
      live: "https://github.com/sahuyash1103/onlineflix",
    },
  },
  {
    id: 4,
    name: "CHATTING APP",
    from: "OCT 2022",
    to: "NOV 2022",
    techStack: [
      "Flutter",
      "Firebase Phone auth",
      "Firebase Storage",
      "Firebase Database",
    ],
    additional: ["Bloc & Cubits", "OTP verification"],
    description: [
      "Flutter: Cross platform framework that can work on 7 different OS’s, maintained by Google.",
      "A chatting app made with Flutter, Bloc and Cubits using the Firebase as Backend.",
      "Deployed on GitHub using GitHub workflows and actions with CI/CD2.",
    ],
    image: "",
    links: {
      git: "https://github.com/sahuyash1103/chatup",
    },
  },
];
