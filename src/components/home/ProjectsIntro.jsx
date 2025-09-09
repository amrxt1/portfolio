"use client";
import Container from "@/components/layout/Container";
import ProjectCard from "@/components/projects/ProjectCard";
import Button from "@/components/ui/Button";
import CodeBlock from "../ui/CodeBlock";

import { useState, useEffect } from "react";
import { easeIn, easeInOut, motion } from "motion/react";
import Link from "next/link";

import projectsData from "@/data/projectsData";

function advanceProject(setProject) {
  setProject((prev) => {
    if (prev === projectsData.length - 1) {
      return 0;
    } else {
      return prev + 1;
    }
  });
}

const ProjectsIntro = ({ interval = 5000 }) => {
  const [currentProject, setProject] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => advanceProject(setProject), interval);

    return () => clearTimeout(timeout);
  }, [currentProject]);

  return (
    <Container>
      <div className="flex gap-4">
        <h2 className="text-primary mb-4 flex-1 text-2xl font-bold">
          Recent Work
        </h2>
        <Link href={"/projects"}>
          <Button primary>View all</Button>
        </Link>
      </div>
      <CodeBlock childClass="mt-4 " selfClass="bg-surface/50">
        <ProjectCard
          project={projectsData[currentProject]}
          className="relative overflow-clip"
        >
          <motion.div
            key={currentProject}
            initial={{ opacity: 0.8 }}
            animate={{
              opacity: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            }}
            className="bg-background pointer-events-none absolute inset-0 z-20 w-full"
          />
        </ProjectCard>
      </CodeBlock>
      <div className="mt-4" onClick={() => advanceProject(setProject)}>
        <Button tertiary>Next</Button>
      </div>
    </Container>
  );
};

export default ProjectsIntro;
