import Container from "@/components/layout/Container";
import projectsData from "@/data/projectsData";
import ProjectCard from "@/components/projects/ProjectCard";

const Projects = () => {
  return (
    <Container>
      <h1 className="text-primary mb-4 text-2xl font-bold">Projects</h1>
      <div className="space-y-16">
        {projectsData.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </Container>
  );
};

export default Projects;
