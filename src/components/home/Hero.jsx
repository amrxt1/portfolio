import Container from "@/components/layout/Container";
import CodeBlock from "@/components/ui/CodeBlock";
import TypeWriter from "@/components/ui/TypeWriter";

import projectsData from "@/data/projectsData";

const Hero = () => {
  const techProjects = projectsData.flatMap((p) => p.techUsed);

  const uniqProjects = [...new Set(techProjects)];

  return (
    <Container className="mt-32">
      <div className="flex h-full flex-col justify-center gap-8 font-mono md:flex-row">
        <div className="shrink-0 md:flex md:flex-col md:justify-center">
          <h1 className="text-3xl">amrit's portfolio</h1>
          <h3 className="mt-1">
            i hex bits into{" "}
            <TypeWriter
              strings={["web applications", "cpu(s)", "assembler"]}
              letterInterval={170}
              wordInterval={1700}
              primary
            />
            <span className="animate-pulse">_</span>
          </h3>
        </div>
        <CodeBlock
          cmd="ls /usr/bin/"
          selfClass="md:m-8 md:max-w-[400px]"
          childClass="flex flex-wrap gap-x-4 pb-12"
        >
          {uniqProjects.map((p, i) => (
            <p key={i}>{p.toLowerCase()}</p>
          ))}
        </CodeBlock>
      </div>
    </Container>
  );
};

export default Hero;
