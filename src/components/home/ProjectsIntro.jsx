"use client";
import Container from "@/components/layout/Container";
import ProjectCard from "@/components/projects/ProjectCard";
import Button from "@/components/ui/Button";
import CodeBlock from "../ui/CodeBlock";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";

import projectsData from "@/data/projectsData";

function advanceProject(setProject) {
  setProject((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
}

const ProjectsIntro = ({ projectInterval = 4000, cmdInterval = 100 }) => {
  const [currentProject, setProject] = useState(0);
  const { slug } = projectsData[currentProject];
  const completeCmd = "./" + slug + " --info";
  // store whats being shown in cmd
  const [showCmd, setCmd] = useState("");
  const [cmdIndex, setCmdIndex] = useState(0);
  // renderProject?
  const renderProject = showCmd.length === completeCmd.length ? false : true;

  // typewriter effect
  useEffect(() => {
    if (cmdIndex < completeCmd.length) {
      const timeout = setTimeout(() => {
        setCmd((prev) => prev + completeCmd[cmdIndex]);
        setCmdIndex((prev) => prev + 1);
      }, cmdInterval);

      return () => clearTimeout(timeout);
    }
  }, [completeCmd, cmdIndex, cmdInterval]);

  // advance project every projectsInterval
  useEffect(() => {
    if (showCmd.length === completeCmd.length) {
      const timeout = setTimeout(() => {
        setCmdIndex(0);
        setCmd("");
        advanceProject(setProject);
      }, projectInterval);

      return () => clearTimeout(timeout);
    }
  }, [cmdIndex, completeCmd.length, projectInterval]);

  return (
    <Container className="flex justify-center">
      <div className="max-w-[500px] flex-1">
        <div className="flex gap-4">
          <h2 className="text-primary mb-4 flex-1 text-2xl font-bold">
            Recent Work
          </h2>
          <Link href={"/projects"}>
            <Button primary>View all</Button>
          </Link>
        </div>
        <CodeBlock
          childClass="mt-4 font-sans"
          selfClass="font-mono bg-surface/50"
          cmd={showCmd}
        >
          {renderProject ? (
            <div className="bg-background aspect-4/3 animate-pulse rounded-lg p-4"></div>
          ) : (
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
          )}
        </CodeBlock>
        <Button
          onClick={() => {
            setCmdIndex(0);
            setCmd("");
            advanceProject(setProject);
          }}
          className="mt-4"
          tertiary
        >
          Next
        </Button>
      </div>
    </Container>
  );
};

export default ProjectsIntro;
