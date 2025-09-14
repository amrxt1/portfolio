"use client";

import { useState, useEffect } from "react";

const TypeWriter = ({
  strings = ["str1", "str2"],
  wordInterval = 1000,
  letterInterval = 50,
  primary = false,
  className = "",
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [typedWord, setTypedWord] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);

  const currentWord = strings[wordIndex];

  // append letter every letterInterval
  useEffect(() => {
    if (letterIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setTypedWord((prev) => prev + currentWord[letterIndex]);
        setLetterIndex((prev) => prev + 1);
      }, letterInterval);
      return () => clearTimeout(timeout);
    }
  }, [letterIndex, currentWord, letterInterval]);

  // update word every letterInterval (if letter writing is done)
  useEffect(() => {
    if (typedWord.length === currentWord.length) {
      const timeout = setTimeout(() => {
        const nextIndex = (wordIndex + 1) % strings.length;
        setWordIndex(nextIndex);
        setTypedWord("");
        setLetterIndex(0);
      }, wordInterval);
      return () => clearTimeout(timeout);
    }
  }, [typedWord, currentWord, wordIndex, strings, wordInterval]);

  return (
    <span className={`${className} ${primary ? "text-primary" : ""}`}>
      {typedWord}
    </span>
  );
};

export default TypeWriter;
