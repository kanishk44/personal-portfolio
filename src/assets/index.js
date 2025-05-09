// Hero
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import LinkedInLineIcon from "remixicon-react/LinkedinLineIcon";
import GithubLineIcon from "remixicon-react/GithubLineIcon";
import TwitterLineIcon from "remixicon-react/TwitterLineIcon";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaLinux,
  FaAws,
  FaGit,
} from "react-icons/fa";
import {
  SiExpress,
  SiSocketdotio,
  SiRedux,
  SiJavascript,
  SiDocker,
  SiNextdotjs,
  SiMysql,
  SiAmazons3,
  SiAmazonec2,
  SiCplusplus,
  SiVisualstudiocode,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiTailwindcss,
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
  "Full Stack Developer with expertise in MERN stack (Node.js, React, MongoDB/MySQL) and cloud platforms (AWS, GCP). I hold a Master's in Computer Science from New Jersey Institute of Technology and bring 1+ years of professional experience to my projects. I specialize in building scalable web applications with responsive design and robust backend architectures. My portfolio includes expense tracking systems, mailbox clients, and e-commerce platforms—all focused on solving real-world problems. My technical toolkit includes JavaScript (ES6), React/Next.js, Node.js/Express, TailwindCSS, and various database systems (MySQL, MongoDB, Firebase). I excel at implementing secure authentication, payment integrations, and efficient cloud deployments. Passionate about creating intuitive, high-performance applications that deliver exceptional user experiences. Let's connect and build something impactful together!";
// End of About Me

// Experience
export const experienceData = [
  {
    year: 4,
    title: "Frontend Developer",
    company: "Vidushi Infotech SSP Pvt. Ltd.",
    experience: [
      "● Developed and maintained React-based code for in-house and client websites, reducing bug reports by 20%.",
      "● Collaborated with cross-functional teams in an agile environment, accelerating project timelines by 15%.",
      "● Optimized website performance by 30% and ensured cross-browser compatibility with 98% user satisfaction.",
      "● Implemented WCAG accessibility standards and utilized Git for streamlined workflow management.",
    ],
  },
  {
    year: 3,
    title: "Teaching Assistant",
    company: "New Jersey Institute of Technology",
    experience: [
      "● Worked closely with the course instructor to ideate & design lab assignments for linux kernel programming.",
      "● Assisted a class of 39 students with lab assignments & homework related to linux kernel and writing simple kernel modules.",
    ],
  },
  {
    year: 2,
    title: "Backend Developer",
    company: "ZoomLocal Pvt. Ltd.",
    experience: [
      " Built a Social Media Posts Aggregator for given Industry, Hashtags, and social handles for platforms like Twitter, Instagram, Facebook & YouTube using Node.js/Vue.js and deployed it on GCP (Google Cloud Platform).",
    ],
  },
  {
    year: 1,
    title: "Full Stack Developer",
    company: "ZoomLocal Pvt. Ltd.",
    experience: [
      "Worked on a social media workflow automation tool to help businesses manage their social media content generation with Vue.js, Node.js, Firebase, & GCP.",
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
    name: "Python",
    icon: <FaPython />,
  },
  {
    name: "C++",
    icon: <SiCplusplus />,
  },
  {
    name: "Linux",
    icon: <FaLinux />,
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
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    name: "NextJS",
    icon: <SiNextdotjs />,
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
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
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
  },
  {
    name: "VS Code",
    icon: <SiVisualstudiocode />,
  },
  {
    name: "Docker",
    icon: <SiDocker />,
  },
  {
    name: "AWS EC2",
    icon: <SiAmazonec2 />,
  },
  {
    name: "AWS S3",
    icon: <SiAmazons3 />,
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
    link: "https://github.com/kanishk44/personal-portfolio",
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
