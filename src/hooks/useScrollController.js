import { useState, useEffect } from "react";

const el = {
  skills: document.getElementById("skills"),
  experiences: document.getElementById("experiences"),
};

export const useScrollController = () => {
  const [offset, setOffset] = useState(0);
  const [id, setId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);

      const skill = document.getElementById("skills");
      const experience = document.getElementById("experience");

      if (window.scrollY < 300) return setId("home");
      if (skill.getBoundingClientRect().y <= 700) setId("skills");
      if (experience.getBoundingClientRect().y <= 300) setId("experience");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { offset, id };
};
