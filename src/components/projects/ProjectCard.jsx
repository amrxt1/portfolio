import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import Link from "next/link";

const ProjectCard = ({ project }) => {
  const { title = "", desc = "", slug = "" } = project;
  return (
    <Card>
      <div className="flex">
        <h1 className="text-primary flex-1 font-mono text-lg">{title}</h1>
        <div className="flex gap-2">
          <Link href={`/projects/${slug}`}>
            <Button tertiary>Details</Button>
          </Link>
        </div>
      </div>
      <p className="text-sm">{desc}</p>
    </Card>
  );
};

export default ProjectCard;
