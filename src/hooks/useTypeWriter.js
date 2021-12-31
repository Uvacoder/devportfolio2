import { Typewriter } from "typewriter-effect";
import { useState } from "react";

export function useTypeWriter(words = [], speed = 100) {
  const [word, setWord] = useState("");

  const customNodeCreator = (character) => {
    setWord((prev) => prev + character);
    return null;
  };
  const customNodeRemover = ({ character }) => {
    setWord((prev) => prev.slice(0, -1));
  };

  const typewriter = new Typewriter(null, {
    loop: true,
    delay: 75,
    onCreateNode: customNodeCreator,
    onRemoveNode: customNodeRemover,
  });

  typewriter.typeString(words[0]).pauseFor(300).start();

  return word;
}
