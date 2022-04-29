import { FaGithub, FaLinkedin, FaNodeJs, FaJs } from "react-icons/fa";

export default {
  photo: "https://avatars.githubusercontent.com/u/63608102?v=4",
  name: "Tanner Thomas",
  title: "Software Engineer",
  socialLinks: [
    {
      name: "Github",
      url: "github.com/codetann",
      icon: FaGithub,
      color: "purple.500",
    },
    {
      name: "LinkedIn",
      url: "linkedin.com",
      icon: FaLinkedin,
      color: "blue.500",
    },
  ],
  skills: [
    {
      name: "JavaScript",
      icon: FaJs,
      color: "yellow.300",
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: "green.500",
    },
  ],
};
