import { FaGithub, FaLinkedin, FaRust, FaJs } from "react-icons/fa";
import { RiFlutterFill, RiReactjsFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoNodejs, IoLogoPython } from "react-icons/io";
import { SiSvelte, SiRuby } from "react-icons/si";
import { DiRuby, DiRust } from "react-icons/di";

export default {
  photo: "https://avatars.githubusercontent.com/u/63608102?v=4",
  label: "Tanner Thomas",
  title: "Software Engineer",
  socialLinks: [
    {
      label: "Github",
      url: "github.com/codetann",
      icon: FaGithub,
      color: "purple.300",
    },
    {
      label: "LinkedIn",
      url: "linkedin.com",
      icon: FaLinkedin,
      color: "blue.300",
    },
  ],
  skills: [
    {
      label: "JavaScript",
      icon: IoLogoJavascript,
      color: "yellow.300",
    },
    {
      label: "Node.js",
      icon: IoLogoNodejs,
      color: "green.500",
    },
    {
      label: "Flutter",
      icon: RiFlutterFill,
      color: "blue.500",
    },
    {
      label: "React",
      icon: RiReactjsFill,
      color: "blue.500",
    },
    {
      label: "Svelte",
      icon: SiSvelte,
      color: "blue.500",
    },
    {
      label: "Python",
      icon: IoLogoPython,
      color: "blue.500",
    },
    {
      label: "Ruby",
      icon: DiRuby,
      color: "blue.500",
    },
    {
      label: "Rust",
      icon: FaRust,
      color: "brown.500",
    },
  ],
};
