import jobPortal from "../assets/projects/job-portal.png";
import deepSense from "../assets/projects/deepsense.png";
import movieBhai from "../assets/projects/movieBhai.png";
import bookingBhai from "../assets/projects/booking.png";
import myDashboard from "../assets/projects/myDashboard.png";
import moodTrackerImage from "../assets/projects/mood.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With two years plus of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer, passionate about building efficient and user-friendly web applications. With over two years of professional experience, I have worked with a wide range of technologies, including React, Next.js, Java, Spring Boot, Node.js, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity about how things work and has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Beyond coding, I stay active, explore emerging technologies, and contribute to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Present",
    role: "Junior software engineer",
    company: "ADDIE Soft Ltd",
    description: `I contributed to the development of two microservices using Java and Spring Boot, designed and implemented RESTful APIs for seamless service communication, created dynamic and responsive user interfaces with React to enhance user experience, and designed and managed PostgreSQL database schemas to ensure efficient data storage and retrieval.`,
    technologies: [
      "Javascript",
      "React.js",
      "java",
      "Spring Boot",
      "PostgreSQL",
    ],
  },
  {
    year: "Sep 2023 - Jan 2024",
    role: "Intern software engineer",
    company: "ADDIE Soft Ltd",
    description: `Successfully developed and maintained 25+ school and college websites using Laravel and React.js, significantly enhancing their digital presence and functionality.`,
    technologies: [
      "Javascript",
      "React.js",
      "java",
      "Spring Boot",
      "php",
      "Laravel",
      "PostgreSQL",
    ],
  },
  {
    year: "Aug 2021 - Aug 2023",
    role: "Part-time Software Engineer",
    company: "Kashif & Tausif Pvt. Ltd",
    description: `Developed the Medfai app for both Android and iOS platforms, delivering a seamless user experience across devices. Managed a portfolio of 10+ WordPress websites, significantly enhancing organizational workflow efficiency and system performance.`,
    technologies: ["Dart", "Flutter", "Php", "MySQL", "Wordpress"],
  },
];

export const PROJECTS = [
  {
    title: "My Dashboard",
    image: myDashboard,
    description:
      "My Dashboard is a powerful and customizable dashboard application built with modern web technologies. It provides seamless data visualization, efficient data fetching, and a responsive UI for managing various business and personal insights.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "ShadCN",
      "TanStack Query",
      "TanStack Table",
    ],
    link: "https://dashboard-uii.vercel.app/",
  },
  {
    title: "Mood Tracker",
    image: moodTrackerImage,
    description:
      "Mood Tracker is a simple yet effective app that allows users to log their daily mood, visualize it on a calendar, and filter entries by day, week, or month. It helps users reflect on their emotional well-being over time.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://track-mood.vercel.app/",
  },

  {
    title: "Booking Bhai",
    image: bookingBhai,
    description:
      "Booking Bhai is a user-friendly app that lets you rent out or book spaces for offices, meetings, and more, on an hourly or daily basis. Simplify space management and find the perfect venue with ease!",
    technologies: ["Next.js", "Tailwind CSS", "Appwrite"],
    link: "https://booking-bhai.vercel.app/",
  },

  {
    title: "Movie Bhai",
    image: movieBhai,
    description:
      "Movie Bhai is a sleek and user-friendly web application designed for movie enthusiasts to search and explore detailed information about their favorite films.",
    technologies: ["React", "Tailwind CSS", "TMDB API"],
    link: "https://movie-bhai.vercel.app/",
  },

  {
    title: "IT Solutions Website",
    image: deepSense,
    description:
      "A professional and dynamic web presence for a leading IT company, showcasing innovative solutions and a user-centric design",
    technologies: ["HTML", "css", "javascript"],
    link: "https://xyz-it-solution.vercel.app/",
  },
  {
    title: "Job Portal",
    image: jobPortal,
    description:
      "An application for Search and Apply for Jobs, Developed using React, Firebase and Tailwind CSS",
    technologies: ["HTML", "Tailwind", "React", "Firebase"],
    link: "https://job-portal-kappa-lyart.vercel.app/",
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "hasanrahman33605@gmail.com",
};
