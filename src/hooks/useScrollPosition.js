import { useState, useEffect } from "react";

export const useScrollPosition = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
      const p = document.getElementById("skills").getBoundingClientRect().y;
      console.log(p);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return offset;
};
