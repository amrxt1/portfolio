import Container from "../layout/Container";
import Link from "next/link";
import CodeBlock from "../ui/CodeBlock";

function TextLink({ external = false, href = "", className = "", children }) {
  return (
    <Link
      href={href}
      className={`text-primary/90 md:hover:text-primary cursor-pointer md:hover:underline ${className}`}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : ""}
    >
      {children}
    </Link>
  );
}

const AboutMe = () => {
  return (
    <Container className="bg-surface/50 py-16 md:py-32">
      <h1 className="text-primary mb-4 text-center font-mono text-3xl font-bold">
        About Me
      </h1>
      <div className="flex w-full justify-center">
        <div className="w-full max-w-[500px]">
          <CodeBlock
            cmd="cat ~/about.txt"
            childClass="space-y-6 text-sm md:text-base font-mono leading-relaxed"
          >
            <div className="mt-2">
              <span className="text-accent font-semibold">[2023]</span>
              <p className="mt-1">
                Completed Computer Science at{" "}
                <TextLink external href="https://columbiacollege.ca">
                  Columbia College
                </TextLink>
                . Currently pursuing CompTIA A+.
              </p>
            </div>
            <div>
              <span className="text-accent font-semibold">
                [High School Era]
              </span>
              <p className="mt-1">
                Explored Linux and self-taught web dev via{" "}
                <TextLink external href="https://theodinproject.com">
                  The Odin Project
                </TextLink>
                .
              </p>
            </div>
            <div>
              <span className="text-accent font-semibold">[Projects]</span>
              <p className="mt-1">
                Learned React, built{" "}
                <TextLink href="/projects/cchive">CC Hive</TextLink> and{" "}
                <TextLink href="/projects/armv7">Arm V7</TextLink>.
              </p>
            </div>
          </CodeBlock>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
