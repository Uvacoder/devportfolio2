import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";

const Typing = (setText, words) => (
  <Typewriter
    options={{
      strings: words,
      autoStart: true,
      loop: true,
      onCreateTextNode: (node, str) => {
        setText((prev) => prev + str.value);
      },
      onRemoveNode: (node, str) => {
        setText((prev) => prev.replace(str.value, ""));
      },
    }}
  />
);

export function useTypeWriter(words = []) {
  const [text, setText] = useState("");

  return [
    <Typewriter
      options={{
        strings: words,
        autoStart: true,
        loop: true,
        onCreateTextNode: (node, str) => {
          setText((prev) => prev + str.value);
        },
        onRemoveNode: (node, str) => {
          setText((prev) => prev.replace(str.value, ""));
        },
      }}
    />,
    text,
  ];
}
