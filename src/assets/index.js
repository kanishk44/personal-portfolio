// Hero
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import LinkedInLineIcon from "remixicon-react/LinkedinLineIcon";
import GithubLineIcon from "remixicon-react/GithubLineIcon";
import TwitterLineIcon from "remixicon-react/TwitterLineIcon";
import { FaReact, FaNodeJs, FaPython, FaAws, FaGit } from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiDocker,
  SiNextdotjs,
  SiMysql,
  SiCplusplus,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiRedis,
  SiVercel,
} from "react-icons/si";

/* eslint-disable react/jsx-key */
export const heroIcons = [
  {
    icon: <InstagramLineIcon />,
    url: "https://www.instagram.com/kanishk.khedkar/",
  },
  {
    icon: <LinkedInLineIcon />,
    url: "https://www.linkedin.com/in/kanishk-khedkar/",
  },
  {
    icon: <GithubLineIcon />,
    url: "https://github.com/kanishk44",
  },
  {
    icon: <TwitterLineIcon />,
    url: "https://x.com/kanishk_777",
  },
];

// About Me
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import Projector2LineIcon from "remixicon-react/Projector2LineIcon";
import GroupLineIcon from "remixicon-react/GroupLineIcon";

export const aboutData = [
  {
    title: "Github Repos",
    amount: 39,
    icon: <GithubFillIcon />,
  },
  {
    title: "Successful Projects",
    amount: 39,
    icon: <Projector2LineIcon />,
  },
  {
    title: "Satisfied clients",
    amount: 39,
    icon: <GroupLineIcon />,
  },
];

import DownloadLineIcon from "remixicon-react/DownloadLineIcon";
import ArrowLeftSFillIcon from "remixicon-react/ArrowLeftSFillIcon";

export const downloadIcon = <DownloadLineIcon />;
export const arrowLeftIcon = <ArrowLeftSFillIcon />;

export const aboutText =
  "Backend-focused Full Stack Engineer with 3+ years of experience building scalable APIs, distributed systems, and AI-powered applications. I hold a Master's in Computer Science (GPA 3.8) from New Jersey Institute of Technology. Proficient in Node.js, TypeScript, and React, with hands-on experience designing microservices, integrating LLM-based workflows, and deploying cloud-native systems on AWS and GCP using Docker and CI/CD. I've built production systems serving 10,000+ users, processed 50,000+ daily API requests, and architected AI agent platforms using the Mastra agentic framework. Strong focus on performance, reliability, and shipping production-ready software in fast-paced environments.";
// End of About Me

// Experience
export const experienceData = [
  {
    year: 1,
    title: "Frontend Developer",
    company: "Vidushi Infotech — Pune, India (Oct 2020 – Aug 2021)",
    experience: [
      "● Developed and maintained React-based code for in-house and client websites, reducing bug reports by 20%.",
      "● Optimized website performance by 30% and ensured cross-browser compatibility with 98% user satisfaction.",
    ],
  },
  {
    year: 2,
    title: "Full Stack Developer",
    company: "TalentRupt — Pune, India (Jan 2024 – May 2025)",
    experience: [
      "● Developed and deployed 5+ full-stack web applications using MongoDB, Express.js, React, and Node.js, serving 10,000+ active users with 99.5% uptime.",
      "● Optimized database queries, reducing API response times by 45% and improving overall application performance.",
      "● Built RESTful APIs with comprehensive error handling and validation, processing 50,000+ daily requests with 99.9% success rate.",
      "● Integrated third-party services including payment gateways (Stripe/Razorpay) and cloud storage (AWS S3), increasing user conversion rates by 25%.",
    ],
  },
  {
    year: 3,
    title: "Full Stack Developer",
    company:
      "Ariveguru Technology Solutions — Bangalore, India (Jul 2025 – Jan 2026)",
    experience: [
      "● Architected and developed AI agent systems using Node.js, TypeScript, and Mastra agentic framework (mastra.ai), enabling intelligent automation and workflow orchestration.",
      "● Built scalable backend services with MongoDB and AWS infrastructure including EC2, S3, Lambda, and VPC for secure, high-performance agent deployments.",
      "● Implemented containerized microservices using Docker for consistent development and production environments, ensuring seamless CI/CD integration.",
      "● Designed RESTful APIs and serverless functions for AI agent communication, orchestration, and data processing workflows.",
    ],
  },
  {
    year: 4,
    title: "Senior Software Engineer",
    company: "Square Yards — Mumbai, India (Jan 2026 – Present)",
    experience: [
      "● Built and maintained a Node.js/Express campaign management API with MongoDB, Redis, and Google Cloud Storage, integrating external voice/AI services (SUPERAGENTPRO, BEATS) for create/update/publish flows, file handling, and test calls.",
      "● Documented APIs with OpenAPI and enforced quality with Jest tests.",
      "● Rewrote an AI calling manager from Python to TypeScript/Express with MongoDB, REST APIs for campaign calls and webhooks, and worker jobs for calls, transcripts, and post-call analysis.",
    ],
  },
];

// Skills
export const skillsData = [
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "Python",
    icon: <FaPython />,
  },
  {
    name: "C++",
    icon: <SiCplusplus />,
  },
  {
    name: "Git",
    icon: <FaGit />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "NextJS",
    icon: <SiNextdotjs />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "NodeJS",
    icon: <FaNodeJs />,
  },
  {
    name: "ExpressJS",
    icon: <SiExpress />,
  },
  {
    name: "Docker",
    icon: <SiDocker />,
  },
  {
    name: "Redis",
    icon: <SiRedis />,
  },
  {
    name: "Vercel",
    icon: <SiVercel />,
  },
  {
    name: "AWS",
    icon: <FaAws />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
  },
];

// Reviews
import StarFillIcon from "remixicon-react/StarFillIcon";
import StarHalfLineIcon from "remixicon-react/StarHalfLineIcon";
import ArrowLeftSLineIcon from "remixicon-react/ArrowLeftSLineIcon";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";

/* eslint-disable react/jsx-key */
export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />];
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />];

export const reviewsData = [
  {
    image: "/reviews/client-4.png",
    name: "Mark T., Freelance Graphic Designer",
    comment:
      "Your work on our website has been phenomenal. The design is visually stunning and incredibly user-friendly. We've received countless compliments from our customers, and our sales have noticeably increased. Thank you for capturing our brand's essence so perfectly!",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: "/reviews/client-2.png",
    name: "Sarah B., E-commerce Store Owner",
    comment:
      "Working with you, has been an absolute pleasure. The portfolio website you created for me is sleek, modern, and beautifully showcases my work. Your attention to detail and creative flair are truly impressive. I couldn't be happier with the final result!",
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: "/reviews/client-3.png",
    name: "Emily R., CEO of Tech Startup",
    comment:
      "The redesign of our corporate website exceeded all expectations. Your innovative ideas and professional execution have given us a site that is not only visually appealing but also highly functional. We've seen a significant improvement in user engagement thanks to your expertise.",
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: "/reviews/client-1.png",
    name: "Bob W., Lifestyle Blogger",
    comment:
      "I absolutely love the blog design you created for me, [Web Designer's Name]. It's exactly what I envisioned—stylish, unique, and easy to navigate. Your responsiveness and creative input were invaluable. My readers are raving about the new look, and I couldn't be more thrilled!",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: "/reviews/client-5.png",
    name: "David H., Director of Non-Profit Organization",
    comment:
      "your work on our non-profit’s website has been transformative. The design is clean, engaging, and effectively conveys our mission. We've seen an increase in online donations and volunteer sign-ups, all thanks to your fantastic design. Your dedication and talent are greatly appreciated!",
    stars: [1, 1, 1, 1, 1],
  },
];

// Projects
export const projectsData = [
  {
    name: "Expense Tracker",
    desc: "A comprehensive financial management application built with Node.js, Express, and MongoDB. Features include secure JWT authentication, Razorpay payment integration, automated CSV reporting, and optimized database queries. The system is deployed on AWS EC2 with MongoDB Atlas, providing reliable uptime and efficient data handling for thousands of users.",
    url: "/projects/expense-tracker.png",
    tech: ["NodeJS", "Express", "MongoDB", "Bootstrap"],
    link: "https://github.com/kanishk44/expense-tracker-backend",
    github: "https://github.com/kanishk44/expense-tracker-backend",
  },
  {
    name: "Restaurant Delivery App",
    desc: "A full-stack food ordering platform built with React, Vite, Firebase, and TailwindCSS that enables customers to browse menus, place orders, and track deliveries in real-time. Theapplication features user authentication, order management, and separate admin interfaces for restaurant staff to process incoming orders efficiently.",
    url: "/projects/restaurant-delivery.png",
    tech: ["ReactJS", "Firebase", "TailwindCSS"],
    link: "https://restaurant-delivery-ten.vercel.app/",
    github: "https://github.com/kanishk44/restaurant-delivery",
  },
  {
    name: "Mailbox Client",
    desc: "A modern email management solution developed using React, Node.js, and MongoDB that provides a seamless email experience with features like JWT authentication, real-time updates, and a rich text editor. The application employs custom React hooks to optimize API calls while maintaining responsive design across all devices.",
    url: "/projects/mailbox-client.png",
    tech: ["ReactJS", "NodeJS", "MongoDB", "TailwindCSS"],
    link: "https://mailbox-client-8qu7.vercel.app/",
    github: "https://github.com/kanishk44/mailbox-client",
  },
  {
    name: "Charity Donation Platform",
    desc: "A secure donation management system built using Node.js, Express.js, and MySQL. This platform incorporates Razorpay payment processing, robust JWT authentication, and dynamic impact reporting for hundreds of charity organizations. The Sequelize ORM-powered database architecture and automated donor communications via MailerSend reduce administrative overhead by 40%.",
    url: "/projects/charity-donation.png",
    tech: ["NodeJS", "Express", "MySQL", "Bootstrap"],
    link: "https://github.com/kanishk44/charity-donation",
    github: "https://github.com/kanishk44/charity-donation",
  },
  {
    name: "Group Chat",
    desc: "A full-featured real-time chat application built with Node.js, Express, MySQL, Socket.IO, and AWS S3 for file sharing.",
    url: "/projects/group-chat.png",
    tech: ["NodeJS", "Express", "MySQL", "Socket.IO", "AWS S3"],
    link: "https://github.com/kanishk44/group-chat",
    github: "https://github.com/kanishk44/group-chat",
  },
  {
    name: "Portfolio Website",
    desc: "A portfolio website built with NextJS, TailwindCSS, and FramerMotion that showcases my skills, projects, and experiences.",
    url: "/projects/portfolio.png",
    tech: ["NextJS", "TailwindCSS", "FramerMotion"],
    link: "https://kanishkcodes.tech/",
    github: "https://github.com/kanishk44/personal-portfolio",
  },
];

export const projectsButton = [
  "All",
  "Figma",
  "Photoshop",
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "TailwindCSS",
  "NextJS",
  "FramerMotion",
  "ThreeJS",
];

// Pricing Plans
export const pricingPlans = [
  {
    title: "Basic",
    pricing: "$500 - $1,000",
    features: [
      "Up to 5 pages",
      "Responsive design ",
      "Basic SEO ",
      "Contact form",
      "Social media links",
      "1 month support",
    ],
    recommended: "Small businesses, personal websites, bloggers",
  },
  {
    title: "Premium",
    pricing: "$5,000 - $10,000",
    features: [
      "Unlimited pages",
      "Responsive design",
      "Comprehensive SEO",
      "Contact form ",
      "Social media links",
      "Advanced security",
      "E-commerce (unlimited products)",
      "Blog setup",
      "Google Analytics with custom reports",
      "6 months support",
    ],
    recommended: "Medium-sized businesses, online stores, service providers",
  },
  {
    title: "Standard",
    pricing: "$1,500 - $3,000",
    features: [
      "Up to 10 pages",
      "Responsive design",
      "Advanced SEO",
      "CContact form",
      "Social media links",
      "E-commerce (20 products)",
      "Blog setup",
      "Google Analytics",
      "3 months support",
    ],
    recommended:
      "Large businesses, complex e-commerce sites, custom web applications",
  },
];

import CheckLineIcon from "remixicon-react/CheckLineIcon";

export const checkIcon = <CheckLineIcon />;

// Q & A
export const questions = [
  {
    question: "How much do you charge for a website?",
    answer:
      "Our website packages usually range from £2997 – £4997. However it really depends on what kind of website you need. We recently wrote a full guide on how much it costs for a website to give you an idea of the different options available.",
  },
  {
    question: "Why are you so expensive?",
    answer:
      "he process we use to build your website takes a certain amount of time and a lot of planning and research. Unlike other agencies, we DON’T use templates. We build your website from scratch, which means you get a unique design tailored around your business. Buying a website from us should not just simply be seen as a business expense as your website is a sales tool that should earn you money",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "It takes approximately 6-10 weeks to build a website from start to finish, providing we have all the information from you. Our full web design process is broken down here. Generally speaking, the website will only take a long time if we are still waiting for text and images from yourself.",
  },
  {
    question: "How do we communicate throughout the website build?",
    answer:
      "Before we begin working together, we’ll usually have an initially chat on the phone or via Skype to discuss the project. Once we get started, most of the communication will take place over email. This makes the process a lot easier as we’ll have all of the information saved and can come back to it later. Once we’ve finished the project, we will book in your 1hr digital marketing training session.",
  },
  {
    question: "What will you need from me?",
    answer:
      "It really depends on what type of website you want. We’ll be able to discuss this on our discovery call before we start working together. Depending on which package we agree on we could need…",
  },
  {
    question: "What if I don’t like the website?",
    answer:
      "You’re in luck. We offer a risk-free guarantee. Before we build your new website, we’ll design a mockup of your homepage. We’ll design a layout in Photoshop first, that way you’ll get to see our initial designs within approximately ten days. This is your opportunity to give us feedback and if you really don’t like it, you don’t have to move forward. Best part is, this won’t cost you anything.",
  },
  {
    question: "Do you offer a payment schedule?",
    answer:
      "Yes, we split the payment into two. The first 50% is usually taken once you have seen the mockup of your homepage and you’re happy to move forward. The following 50% is taken 30 days after this.",
  },
  {
    question: "Can I make the final payment when the site is ready to go live?",
    answer:
      "No. In the past we have found that projects can take a lot longer than expected to complete. We might be waiting for information from you and this can delay the process. Sometimes these delays can take months. This is why we always invoice 30 days after the original payment. At this point we’ll be well on our way with your new website and you’ll be able to see the progress.",
  },
  {
    question: "Who hosts the website?",
    answer:
      "If we build your website, we will generally manage the hosting for you so you don’t need to do anything. We use the same hosting company for our own website and for ALL our clients. Each website is managed individually to avoid any security issues. Every website we build has unlimited bandwidth, 20GB of disk space, 2GB Ram and 99.9% uptime. We’ve used the same company for 5 years and we don’t plan on changing this anytime soon.",
  },
  {
    question: "Can I update the website myself once it’s been built?",
    answer:
      "Yes. We like to offer the ability for our clients to update the website themselves. We we’ll give you all the training and tools to be able to make website amendments. We use a easy to use platform called WordPress so you can add edit and delete content without paying us to do it for you.",
  },
  {
    question:
      "What if I don’t want to manage the website at all. Can you do it all for me?",
    answer:
      "Yes, we can arrange a maintenance package to suit your needs. This can range from 1hr per month to 10 hours per month and we can discuss a package that’s right for you.",
  },
];

import ArrowDropDownLineIcon from "remixicon-react/ArrowDropDownLineIcon";
export const questionArrow = <ArrowDropDownLineIcon />;

// Navbar
import CopyrightLineIcon from "remixicon-react/CopyrightLineIcon";

export const copyRightIcon = <CopyrightLineIcon />;

import Home5LineIcon from "remixicon-react/Home5LineIcon";
import UserLineIcon from "remixicon-react/UserLineIcon";
import HistoryLineIcon from "remixicon-react/HistoryLineIcon";
import BriefcaseLineIcon from "remixicon-react/BriefcaseLineIcon";
import UserStarLineIcon from "remixicon-react/UserStarLineIcon";
import ProjectorLineIcon from "remixicon-react/ProjectorLineIcon";
import PriceTag3LineIcon from "remixicon-react/PriceTag3LineIcon";
import ContactsBook2LineIcon from "remixicon-react/ContactsBook2LineIcon";
import QuestionAnswerLineIcon from "remixicon-react/QuestionAnswerLineIcon";

export const navbarData = [
  {
    id: "home",
    name: "Home",
    icon: <Home5LineIcon />,
  },
  {
    id: "about",
    name: "About",
    icon: <UserLineIcon />,
  },
  {
    id: "experience",
    name: "MyRoad",
    icon: <HistoryLineIcon />,
  },
  {
    id: "skills",
    name: "Skills",
    icon: <BriefcaseLineIcon />,
  },
  {
    id: "projects",
    name: "Projects",
    icon: <ProjectorLineIcon />,
  },
  {
    id: "reviews",
    name: "Reviews",
    icon: <UserStarLineIcon />,
  },
  {
    id: "contact",
    name: "Contact",
    icon: <ContactsBook2LineIcon />,
  },
];

// Toggle
import MoonFoggyFillIcon from "remixicon-react/MoonFoggyFillIcon";
import SunFoggyFillIcon from "remixicon-react/SunFoggyFillIcon";

export const sunIcon = <SunFoggyFillIcon />;
export const moonIcon = <MoonFoggyFillIcon />;
