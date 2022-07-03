import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const FadeUp = ({ delay, children }) => (
  <motion.div
    initial={{ opacity: 0, y: "80px" }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: delay,
      duration: 0.5,
      type: "spring",
      stiffness: 50,
    }}
  >
    {children}
  </motion.div>
);

export const ScaleUp = ({ delay, children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.1, y: "40px" }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{
      delay: delay,
      duration: 0.7,
      type: "spring",
      stiffness: 300,
    }}
  >
    {children}
  </motion.div>
);

export const FadeDown = ({ delay, children }) => (
  <motion.div
    style={{ width: "100%", display: "flex", justifyContent: "center" }}
    initial={{ opacity: 0, y: "-40px" }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: delay,
      duration: 0.5,
    }}
  >
    {children}
  </motion.div>
);

export const FadeRight = ({ delay, children }) => (
  <motion.div
    style={{ width: "100%", display: "flex", justifyContent: "center" }}
    initial={{ opacity: 0, x: "-100px" }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      delay: delay,
      duration: 0.5,
    }}
  >
    {children}
  </motion.div>
);

export const MountAnimation = ({ delay, children }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const getOffset = () => {
      const rect = ref.current.getBoundingClientRect();

      const offset = rect.y - window.scrollY;

      if (offset < 100) {
        setShow(true);
      }
    };

    window.addEventListener("scroll", getOffset);

    return () => {
      window.removeEventListener("scroll", getOffset);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={ref}
        animate={{ opacity: show ? 1 : 0, x: show ? 0 : "-100px" }}
        transition={{
          delay: delay,
          duration: 0.2,
          type: "spring",
          stiffness: 150,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
