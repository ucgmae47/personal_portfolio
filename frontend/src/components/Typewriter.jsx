import { useState, useEffect } from "react";

function Typewriter({ words, typeSpeed = 110, deleteSpeed = 60, pause = 1400 }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const fullyTyped = !isDeleting && text === currentWord;
    const delay = fullyTyped ? pause : isDeleting ? deleteSpeed : typeSpeed;

    const timer = setTimeout(() => {
      if (fullyTyped) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        } else {
          setText(currentWord.slice(0, text.length - 1));
        }
        return;
      }

      setText(currentWord.slice(0, text.length + 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span>
      {text}
      <span className="ml-0.5 inline-block w-px animate-pulse">|</span>
    </span>
  );
}

export default Typewriter;
