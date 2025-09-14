"use client";

import Container from "@/components/layout/Container";
import CodeBlock from "@/components/ui/CodeBlock";
import TypeWriter from "@/components/ui/TypeWriter";

import { useEffect, useState } from "react";

const Hero = () => {
  const [completeWord, setWord] = useState("");
  const [wordIndex, setWordIndex] = useState("");

  return (
    <Container className="mt-8">
      <div className="flex h-full min-h-[400px] flex-col justify-center gap-8 font-mono">
        <div>
          <h1 className="text-3xl">amrit's portfolio</h1>
          <h3 className="mt-1">
            i hex bits into{" "}
            <TypeWriter
              strings={["web applications", "cpu(s)", "assembler(s)"]}
              letterInterval={170}
              wordInterval={1700}
              primary
            />
          </h3>
        </div>
        <CodeBlock cmd="whoami">
          <p>amrit</p>
        </CodeBlock>
      </div>
    </Container>
  );
};

export default Hero;
