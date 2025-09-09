import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  const {
    id = 1010001,
    slug = "meme",
    title = "lolcat",
    desc = "",
    images = [],
    techUsed = [],
    features = [],
    repo = "",
    details = "",
    preview = "",
  } = project;

  return (
    <Card>
      <div className="mb-1.75 flex items-end">
        <h1 className="text-primary flex-1 font-mono text-3xl font-bold select-text">
          {title}
        </h1>
        <div className="flex gap-2">
          <Link href={`/projects/${slug}`}>
            <Button tertiary>Details</Button>
          </Link>
        </div>
      </div>

      <div className="mb-4 space-y-1">
        <p className="text-sm select-text">{desc}</p>
        <div className="flex gap-1">
          {techUsed.map((t, i) => (
            <Badge key={i}>{t}</Badge>
          ))}
        </div>
      </div>

      <p className="text-text/80 text-sm">{details}</p>
    </Card>
  );
};

export default ProjectCard;
