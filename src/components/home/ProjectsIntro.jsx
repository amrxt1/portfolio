"use client";
import Container from "@/components/layout/Container";
import ProjectCard from "@/components/projects/ProjectCard";
import Button from "@/components/ui/Button";
import CodeBlock from "../ui/CodeBlock";

import Link from "next/link";

import projectsData from "@/data/projectsData";

const ProjectsIntro = () => {
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
      <ProjectCard project={projectsData[0]} />
    </Container>
  );
};

export default ProjectsIntro;
