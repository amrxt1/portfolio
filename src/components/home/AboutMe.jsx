import Container from "../layout/Container";

import Link from "next/link";

function TextLink({ external = false, href = "", className = "", children }) {
  return (
    <Link
      href={href}
      className={`text-primary cursor-pointer md:hover:underline ${className}`}
      target={external ? "_blank" : "_self"}
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}

const AboutMe = () => {
  return (
    <Container className="bg-surface py-8 font-mono">
      <h1 className="text-primary mb-4 text-center text-2xl font-bold">
        Hello, I am{" "}
        <span className="from-primary to-accent bg-gradient-to-r bg-clip-text text-transparent">
          Amrit
        </span>
      </h1>
      <div className="flex w-full justify-center">
        <div className="w-full max-w-[500px] space-y-3 font-sans leading-relaxed select-text">
          <p>
            I recently completed an Associate’s degree in Computer Science at{" "}
            <TextLink external href="https://columbiacollege.ca">
              Columbia College
            </TextLink>{" "}
            and am working on getting my CompTIA A+.
          </p>
          <p>
            My interest in computers began with simple tools like MS Paint. In
            high school I explored Linux, and before college I learned web
            development through{" "}
            <TextLink external href="https://theodinproject.com">
              The Odin Project
            </TextLink>
            .
          </p>
          <p>
            College studies deepened my understanding of programming and let me
            focus on low-level and hardware aspects of CS. I also learned React
            for front-end development and built{" "}
            <TextLink href="/projects/cchive">CC Hive</TextLink> and{" "}
            <TextLink href="/projects/armv7">Arm V7</TextLink> by continuing to
            learn outside of class.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
